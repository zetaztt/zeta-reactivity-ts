---
root: true
targets: ["*"]
description: "库源码、公共 API 与运行环境约束"
---

<!-- 由 Rulesync 生成。请编辑 .rulesync/rules/ 下的源文件，再运行 npm run rules:generate。 -->

# 仓库贡献指南

## 库源码与接口

- 库源码放在 `src/`，已确定并实现的公共 API 从 `src/index.ts` 导出。
- 运行时代码须同时适用于浏览器和 Node.js，保持独立于 DOM、Node.js 专有 API 和 UI 框架。
