## Summary / 概述
<!-- Provide a general summary of your changes / 请提供关于改动的简要说明 -->


## Feature Quality Contract / 功能质量契约

- **Changed Surface (影响模块)**: <!-- desktop / server / adapter / native / docs / provider-runtime / agent-loop / release -->
- **Tests Added or Updated (新增或更新的测试)**:
  - <!-- e.g., unit/component/API/request-shape/workflow/E2E -->
- **Coverage Evidence (测试覆盖率证明)**:
  - <!-- coverage report path + changed-line coverage -->
- **E2E / Live Model Evidence (E2E或真实模型测试证明)**:
  - <!-- commands run, report paths, or explicit blockers -->
- **Known Risk & Rollback (风险与回滚方案)**:
  - <!-- remaining risk and how to revert safely -->

---

## Verification / 验证清单

- [ ] I ran the relevant local checks, or explained why they do not apply. / 我已运行相关本地检查，或说明了不适用的原因。
- [ ] I added or updated same-area tests for every production behavior change. / 每一个行为变更都已添加或更新了相同区域的测试。
- [ ] I ran `bun run verify` / `npm run verify` for code changes, including the coverage gate. / 对代码变更运行了包含覆盖率检查的 `verify` 命令。
- [ ] New or changed executable production lines meet the changed-line coverage threshold. / 新增或修改的代码行均满足覆盖率门槛。
- [ ] I ran E2E/live smoke for cross-boundary, provider/runtime, desktop chat, agent-loop, native, or release changes. / 针对跨边界、Provider、桌面端、核心Agent循环运行了E2E/真实模型冒烟测试，或记录了阻碍原因。

---

## Safety & Compliance / 安全与合规性

- [ ] This PR does not violate any licensing terms or commercial restrictions of the underlying engine. / 此 PR 未违反底层引擎的任何许可条款或商业限制。
- [ ] All sensitive files and credentials (API keys, settings, local databases) are ignored by git. / 所有敏感文件和凭据均已由 git 忽略。
