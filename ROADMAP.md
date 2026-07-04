# Simple LoopClaw Roadmap

This document outlines the milestones, future plans, and long-term vision for **Simple LoopClaw** (`Simple LoopClaw`). Our goal is to create the most accessible, powerful, and friendly local AI coding agent workbench for individual developers.

---

## 🗺️ Vision & Core Pillars

1. **Accessibility**: Break down the CLI barrier so any developer can manage, configure, and monitor local agentic coding loops visually.
2. **Integration**: Seamlessly connect local agents to daily communication tools (Feishu, WeChat, DingTalk, Telegram) and IDEs (VS Code, Cursor).
3. **Transparency**: Visually expose agent actions, file differences, token consumption, and safety approvals in a beautiful desktop dashboard.
4. **Extensibility**: Support multiple LLM providers (Anthropic, DeepSeek, OpenAI) and custom MCP tools.

---

## 📍 Milestones

### Phase 1: Groundwork & Refactoring (Current - Q2 2026) 🟢
- [x] **Local Execution Core**: Repaired local execution CLI with full support for agentic loops.
- [x] **Desktop Workbench**: Implemented Electron + React UI displaying git changes, file diffs, and chat sessions.
- [x] **Multi-Provider support**: Stable configurations for Anthropic API, DeepSeek, OpenAI, and Ollama.
- [x] **Bilingual Safety**: Complete bilingual disclaimers and educational licensing rules.
- [x] **Windows Native Launchers**: Custom `.cmd` wrappers for native shell executions.

### Phase 2: Onboarding & Ease of Use (Q3 2026) 🟡
- [ ] **Automated Environment Checks**: Built-in wizard to detect, install, or repair Node.js, Bun, and CLI tools automatically.
- [ ] **Unified Config Panel**: Visual configuration diff editor to inspect settings overrides and API keys safely.
- [ ] **IM Connector Improvements**: One-click setup and state indicators for Feishu, DingTalk, and Telegram bot connections directly in the GUI.

### Phase 3: Workflow Automation & Plugins (Q4 2026) 🔵
- [ ] **JSON-Driven Workflow Builder**: Visual interface to define structured loops, conditional file reads, testing pipelines, and agent prompts.
- [ ] **MCP Plugin Registry**: A visual gallery of Model Context Protocol (MCP) tools that users can activate with one click.
- [ ] **Token & Budget Analytics**: Enhanced charts plotting token consumption, costs, and tool execution times.

### Phase 4: IDE Companion & V1.0 (Q1 2027) 🟣
- [ ] **VS Code & Cursor Extensions**: IDE sidebar companion to sync active agent tasks, show diffs directly in the editor, and invoke loops on selected code blocks.
- [ ] **Multi-Agent Teams UI**: Visual dashboard to spawn, manage, and coordinate team configurations (coder, tester, reviewer) working in parallel.
- [ ] **V1.0.0 Production Release**: Reaching stable APIs, signed desktop binaries, and automated updater.

---

## 🤝 Contributing to the Roadmap

We welcome ideas, feature requests, and pull requests! Please open an issue to discuss proposed items before starting work. Check [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
