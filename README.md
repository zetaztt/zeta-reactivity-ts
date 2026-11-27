# @zeta/reactivity

面向浏览器和 Node.js 的细粒度响应式库，独立于 UI 框架。当前处于工程初始化阶段，公共入口暂为空。

## 本地开发

使用 Node.js 22.22.2 或更新的 22.x 版本和 npm，在仓库根目录运行 `npm ci` 安装锁定的开发依赖。

| 命令 | 用途 |
| --- | --- |
| `npm run build` | 清理并生成 `dist/` 下的 ES2022 模块和类型声明 |
| `npm run lint` | 使用 ESLint 检查未使用的导入 |
| `npm run format` | 使用 dprint 格式化 TypeScript、JavaScript 和 JSON 文件，排除 `package-lock.json` |
| `npm run format:check` | 检查格式，发现偏差时以非零状态退出 |
| `npm run rules:generate` | 生成根目录的 `AGENTS.md` 和 `.agents/skills/` 下的 Codex 技能 |
| `npm run rules:check` | 检查规则和技能的生成文件是否与源文件同步 |
| `npm test` | 使用 tsx 直接运行 `test/*.test.ts` |

Agent 规则和技能分别维护在 [`.rulesync/rules/`](./.rulesync/rules/) 和 [`.rulesync/skills/`](./.rulesync/skills/)。修改后运行 `npm run rules:generate`，将源文件和生成文件一同提交。

在其他项目复用技能时，将技能目录完整复制到该项目的 `.rulesync/skills/`，并在 Rulesync 配置里启用 `skills` 后生成。也可以在目标项目通过 Rulesync 引用本仓库，以下命令中的标签或提交需要已推送到 GitHub。

```sh
npx rulesync add zetaztt/zeta-reactivity-ts --skills git-commit --path .rulesync/skills --ref "<标签或提交>"
npx rulesync generate --features skills
```
