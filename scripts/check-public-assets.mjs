import {readdir,open} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
export async function checkPublicAssets(root='dist') {
 const blocked=[];
 async function scan(path){for(const e of await readdir(path,{withFileTypes:true})){const p=join(path,e.name);if(e.isSymbolicLink()){blocked.push(p);continue;}if(e.isDirectory()){await scan(p);continue;}if(!e.isFile())continue;let pdf=/\.pdf$/i.test(e.name);if(!pdf){const h=await open(p,'r');try{const b=Buffer.alloc(5);await h.read(b,0,5,0);pdf=b.toString('ascii')==='%PDF-';}finally{await h.close();}}if(pdf)blocked.push(p);}}
 await scan(root);if(blocked.length)throw new Error('Public deployment blocked: PDFs or symlinks are present. Store papers only in the private repository.');return true;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){await checkPublicAssets();console.log('PASS: public assets contain no PDF files or symlinks');}
