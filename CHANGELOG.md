# Changelog

All notable changes to **Simple LoopClaw** will be documented in this file. This project follows semantic versioning format.

---

## [0.4.5] - 2026-07-04
### Added
- Created Windows Command Prompt/PowerShell native script wrapper `bin/loop-claw.cmd`.
- Added English and Chinese comprehensive disclaimer files and academic licensing rules (`LICENSE`).
- Created a bilingual version of the project documentation (`README.md` and `README.en.md`).
- Added project `ROADMAP.md` mapping visual workflow pipelines.

### Changed
- Rebranded project files, configurations, and variables from `simple-loop-claw`/`claude-loopclaw` to `simple-loop-claw` and `loop-claw` globally.
- Cleaned up test environments and refactored local mock configurations.

---

## [0.4.0] - 2026-06-15
### Added
- Developed Electron-based Graphical Workspace Client (`desktop/`).
- Added right-side file modification tracker displaying changes visually.
- Added visual git branch and isolated Git Worktree launchers in the client.
- Implemented real-time interactive file diff views inside the GUI.
- Added GUI approval and validation prompts for dangerous commands and tool usage.

### Changed
- Refactored server API schemas for WebSocket session persistence.

---

## [0.3.0] - 2026-05-10
### Added
- Multi-model provider presets integration (DeepSeek, OpenAI, Ollama).
- Implemented client-side H5 remote browser control access with one-time tokens.
- Added cron-based scheduled coding agent runs.
- Enhanced token usage budget metrics and cost trackers.

---

## [0.2.0] - 2026-04-20
### Added
- IM integration adapter modules (`adapters/`) for Feishu, DingTalk, WeChat, and Telegram.
- Built-in visual setup guides for configuring corporate chatbots.
- Added support for Computer Use (screenshots, click, keyboard control) in desktop mode.

---

## [0.1.0] - 2026-04-01
### Added
- Initial community release of the local agent execution CLI.
- Re-activated local agent loops, file read/write, terminal command execution, and test running.
- Restored Model Context Protocol (MCP) tool integration.
