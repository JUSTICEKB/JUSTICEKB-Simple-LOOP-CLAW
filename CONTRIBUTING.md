# 贡献指南 (Contribution Guidelines)

========================================================================
CHINESE VERSION (中文版本)
========================================================================

提交 PR 前需要完成以下三步。

## 1. 运行本地门禁

```bash
bun run verify
```

`bun run verify` 会一键检查 policy、desktop、server、adapters、native、docs、quarantine 和 coverage。非 0 退出就说明当前分支还不能提交 PR。

`git push` 不再自动运行本地质量门禁。需要质量检查时请手动运行 `bun run quality:push` 或 `bun run verify`；完整覆盖率仍以 `bun run verify` 为准。

只改了某个模块时可以用窄命令快速迭代：

| 改动范围 | 快速验证 |
| --- | --- |
| CLI / Server / 工具 | `bun run check:server` |
| 桌面端 | `bun run check:desktop` |
| IM Adapter | `bun run check:adapters` |
| 桌面 Electron / 原生打包 | `bun run check:native` |
| 文档 | `bun run check:docs` |

门禁失败时，查看最新质量报告和对应 lane 日志定位问题：

```
artifacts/quality-runs/<timestamp>/report.md
artifacts/quality-runs/<timestamp>/logs/<lane>.log
```

## 2. 桌面端功能必须手工测试

改动涉及 `desktop/` 的 UI、store、API、Electron host 或 native/packaging 层时，除了自动门禁外，还必须在真机上做手工测试：

- 起本地服务 `SERVER_PORT=3456 bun run src/server/index.ts`
- 起桌面端 `cd desktop && bun run dev`
- 验证改动涉及的交互流程：页面渲染、按钮/表单行为、弹窗、快捷键、多窗口等
- 必要时打本地 macOS 包 `desktop/scripts/build-macos-arm64.sh` 做完整验证

## 3. PR 必须附上影响范围和测试说明

每个 PR 的描述里必须包含：

- **影响范围**：改了哪些模块（desktop / server / adapter / native / docs / provider / agent-loop）
- **测试说明**：跑了哪些测试、覆盖率情况、手工测试了哪些流程（桌面端改动必须有真机测试记录）
- **剩余风险**：已知未覆盖的边界或需要后续跟进的点

如果改动了 provider/runtime、agent-loop、文件编辑、权限、session 等核心路径，还需要跑真实模型验证：

```bash
bun run quality:providers
bun run quality:smoke --provider-model <provider:model>
```

完整质量门禁和覆盖率说明见 [AGENTS.md](AGENTS.md)。


========================================================================
ENGLISH VERSION (英文版本)
========================================================================

Please complete the following three steps before submitting a Pull Request.

## 1. Run Local Quality Gates

```bash
bun run verify
```

`bun run verify` will run comprehensive checks across policy rules, desktop client, local server, IM adapters, native packaging, quarantine status, and test coverage. A non-zero exit code indicates that the current branch is not yet ready to be merged.

If you are only editing specific directories, you can use narrower commands for fast iterations:

| Scope | Fast Check |
| --- | --- |
| CLI / Server / Tools | `bun run check:server` |
| Desktop Client | `bun run check:desktop` |
| IM Adapters | `bun run check:adapters` |
| Electron Host & Native Packaging | `bun run check:native` |
| Docs | `bun run check:docs` |

If a check fails, review the generated quality report and lane log:
- `artifacts/quality-runs/<timestamp>/report.md`
- `artifacts/quality-runs/<timestamp>/logs/<lane>.log`

## 2. Desktop Feature Manual Testing

If your changes affect UI, state stores, API routing, Electron host, or packaging under `desktop/`, you must perform a manual smoke test on a real machine:
- Run the local server: `SERVER_PORT=3456 bun run src/server/index.ts`
- Run the desktop client in development: `cd desktop && bun run dev`
- Verify user interactions (rendering, button clicks, dialog boxes, keyboard shortcuts, multi-window behavior).
- If necessary, compile a local package: `desktop/scripts/build-macos-arm64.sh` or platform equivalent to verify production outputs.

## 3. PR Description Requirements

Your Pull Request description must include:
- **Touched Surface**: (e.g. desktop, server, adapter, native, docs, provider, agent-loop)
- **Testing Record**: Unit test output, coverage statistics, and manual verification steps.
- **Remaining Risk**: Known limitations or edge cases left to follow up.

For critical runtime paths, model permission controls, or agent session loops, verify using real-model smoke tests:
```bash
bun run quality:providers
bun run quality:smoke --provider-model <provider:model>
```

Refer to [AGENTS.md](AGENTS.md) for full test details.
