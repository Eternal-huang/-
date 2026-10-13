> 当前状态：源码、进度脚本及自动部署工作流均已上传，公开发布已获负责人授权。尚未确认 Pages 上线；请在仓库 Settings → Pages 将 Source 设为 GitHub Actions，然后在 Actions 手动运行 Publish project workspace。部署成功后的实际网址以 Actions 输出为准。

# 电氢协同 · 大创工作台

为天津大学大创团队提供共同任务、验收清单、仿真指南与 GitHub 协作。全体成员独立完成同一套任务。无需前端框架、数据库或个人访问令牌。

## 开启网站

1. 本仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。
2. Actions 中运行 **Publish project workspace** 的 Run workflow，等待成功。
3. 使用 Deploy 步骤返回的实际网址；不要把预期 URL 当成部署成功。
4. 在仓库设置确认 Issues 已启用。私有仓库需要把组员添加为协作者；每位成员使用自己的 GitHub 账号提交。

**私有仓库的 Pages 可用性取决于账号套餐与组织策略。普通 GitHub Pages 网站可能公开访问，即使源码仓库私有；不要提交敏感个人资料。此项目不含申报书文件和前两页信息。** 如果当前账号不支持私有仓库 Pages，可先在 GitHub 仓库中使用 Issues 协作，或由负责人自行决定调整托管设置。

## 群成员如何使用

填写昵称 → 选择周次 → 按指南完成实验 → 勾选任务（本机草稿）→ 填写成果链接与说明 → 生成 GitHub 提交 → 在 GitHub 页面附上文件并正式提交。

Issues 提交会触发 Action 生成团队快照并重新部署。网页不会收集 GitHub 令牌。结构化 JSON 中的 completed 是进度来源，手动编辑时要同步调整 JSON，单改 Markdown 勾选不会改变快照。

团队进度按 GitHub 提交账号及周次保留最近更新的一条报告；不同账号使用相同昵称不会合并。成员状态为自报，队长通过对应 Issue 进行验收和反馈。

网站上的本机草稿与导入导出不是多人同步。在 ChatGPT Sites 预览中的团队快照不会随 GitHub Issues 自动更新；**以 GitHub Pages 正式版本与 Issues 为准**。初始状态全部待填报，未导入既有仿真为团队完成记录。

## 文件

- `dist/`：直接部署的静态网站。
- `scripts/sync-progress.mjs`：使用 Action 内置短期令牌获取 Issue，生成快照；令牌不会进入页面。
- `.github/workflows/pages.yml`：推送、Issue 变动、手动触发部署。
- `.openai/hosting.json`：ChatGPT Sites 预览配置，不影响 GitHub Pages。

本地预览：`python3 -m http.server 8000 --directory dist`，浏览器访问 `http://localhost:8000`。如复用到其他仓库，修改 `dist/app.js` 顶部的 `REPO`。

## 内容来源与边界

研究主线依据项目申报书第三页及第八页起，未读取第一、二页。第一、二周根据已有工作安排整理。后续阶段仅为申报书中的规划，尚未设定截止日期。当前理想固定频率电源模型不能验证虚拟惯量效果；统一第二周功率模型与第一周三相测量模型分别验收。
