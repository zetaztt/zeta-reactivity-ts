# @zeta/reactivity

面向浏览器和 Node.js 的细粒度响应式库，独立于 UI 框架。当前处于工程初始化阶段，公共入口暂为空。

## 本地开发

使用 Node.js 22.13 或更新的 22.x 版本和 npm，在仓库根目录运行 `npm ci` 安装锁定的开发依赖。

| 命令 | 用途 |
| --- | --- |
| `npm run build` | 清理并生成 `dist/` 下的 ES2022 模块和类型声明 |
| `npm run lint` | 使用 ESLint 检查未使用的导入 |
| `npm run format` | 使用 dprint 格式化 TypeScript、JavaScript 和 JSON 文件，排除 `package-lock.json` |
| `npm run format:check` | 检查格式，发现偏差时以非零状态退出 |
| `npm test` | 使用 tsx 直接运行 `test/*.test.ts` |
