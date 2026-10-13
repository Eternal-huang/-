import { readdir, mkdir, rm, copyFile, open, stat, writeFile } from 'node:fs/promises';
import { join, relative, dirname, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
export async function buildPapers(root=process.cwd()) {
 const source=join(root,'papers'),target=join(root,'dist','papers'),rows=[];
 await rm(target,{recursive:true,force:true});await mkdir(target,{recursive:true});
 async function walk(dir){let files;try{files=await readdir(dir,{withFileTypes:true});}catch(e){if(e.code==='ENOENT')return;throw e;}
 for(const entry of files){const from=join(dir,entry.name);if(entry.isSymbolicLink())continue;if(entry.isDirectory()){await walk(from);continue;}if(!entry.isFile()||!/\.pdf$/i.test(entry.name))continue;
 const rel=relative(source,from),size=(await stat(from)).size;if(size>25*1024*1024||size<5){console.warn('Skipped PDF size:',rel);continue;}
 const handle=await open(from,'r');const bytes=Buffer.alloc(5);try{await handle.read(bytes,0,5,0);}finally{await handle.close();}if(bytes.toString('ascii')!=='%PDF-'){console.warn('Skipped invalid PDF header:',rel);continue;}
 const encoded=rel.split(/[/\\]/).map(encodeURIComponent).join('/'),out=join(target,rel);await mkdir(dirname(out),{recursive:true});await copyFile(from,out);
 rows.push({id:'uploaded-'+createHash('sha256').update(rel).digest('hex').slice(0,12),stage:'团队',title:entry.name.replace(/\.pdf$/i,'').replace(/_/g,' '),meta:'团队上传 · '+(size/1024/1024).toFixed(2)+' MiB',type:'上传 PDF · 发表信息待核对',keywords:rel,url:'./papers/'+encoded,filename:rel,bytes:size,summary:'团队共享的论文全文。请对照原文记录作者、年份、来源和关键证据。',questions:['论文解决什么问题？','模型和验证条件是什么？','与本项目有什么关系，哪些部分值得复现？']});}}
 await walk(source);rows.sort((a,b)=>a.filename.localeCompare(b.filename,'zh-CN'));await writeFile(join(root,'dist','papers.json'),JSON.stringify({updatedAt:new Date().toISOString(),papers:rows},null,2)+'\n');return rows;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){const rows=await buildPapers();console.log('Paper catalog built:',rows.length,'PDFs');}
