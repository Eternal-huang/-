# 论文阅读指南

目标：每位成员独立理解论文的研究问题、模型、验证方式与局限，留下可讨论和可复现的笔记。

## 建议阅读顺序

| 顺序 | 论文与来源 | 本轮阅读目标 |
| --- | --- | --- |
| 1 · 入门综述 | [Pei 等，2022：Review of Operational Control Strategy for DC Microgrids with Electric-hydrogen Hybrid Storage Systems](https://www.sciopen.com/article/10.17775/CSEEJPES.2021.06960) | 画出能量流，区分能量管理与快速控制，整理功率分配方法 |
| 2 · 核心建模 | [Dozein 等，2023：Virtual Inertia Response and Frequency Control Ancillary Services From Hydrogen Electrolyzers](https://doi.org/10.1109/TPWRS.2022.3181853) | 理解电解槽调频的功率方向、动态模型与约束，选定一个复现目标 |
| 3 · 前沿对照 | [Qiu 等，2026：Enhanced Hydrogen Electrolyzer with Integrated Energy Storage to Provide Grid-Forming Services for Off-Grid ReP2H Application](https://arxiv.org/abs/2603.00514) | 区分离网构网与本项目场景，检查候选研究想法是否已被覆盖 |

书目信息和来源页核验于 2026-10-13。第三篇为预印本，本清单不将其当作已同行评审期刊论文。摘要级介绍用于选择阅读顺序，不替代阅读全文和公式核对。

## 三轮阅读

1. **抓主线**：读摘要、引言末尾、图表与结论，用自己的话写出研究问题。
2. **拆方法**：整理模型假设、输入输出、核心方程、参数来源和控制结构。
3. **评证据**：看对照是否公平、工况是否充分、哪些结论有数据支持，并选一个复现目标。

遇到不懂的公式，记录原式、变量含义、页码和具体卡住的位置；可以先保留问题，不必一开始读懂全部推导。

## 一篇论文交付一份笔记

- 完整题名、作者、年份、DOI 或来源链接。
- 研究问题：解决什么具体问题？
- 模型与方法：主要假设、约束、控制逻辑是什么？
- 证据：对应图号、表号、页码及测试工况。
- 局限与疑问：哪些条件没验证？哪些内容暂时不理解？
- 复现计划：复现哪一幅图？需要哪些参数和数据？
- 与本项目的关系：能借鉴什么？候选差异是否真实存在？

网站“论文阅读”中的“写阅读笔记”可自动带入论文。填写后导出 Markdown 或生成 GitHub Issue，最后在 GitHub 正式提交。也可以直接使用仓库的“论文阅读笔记”Issue 模板。

阅读状态与笔记草稿只保存在当前浏览器。团队共享记录以 Issues 为准；“已复现”应附模型、参数、曲线和对比说明，不能只勾选状态。
