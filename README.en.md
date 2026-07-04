# Simple LoopClaw (Simple LoopClaw)

<p align="center">
  <img src="docs/images/app-icon.png" alt="Simple LoopClaw" width="180">
</p>

<div align="center">

[![License](https://img.shields.io/badge/License-Educational_Use_Only-orange.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-JUSTICEKB--Simple--LOOP--CLAW-blue?logo=github)](https://github.com/JUSTICEKB/JUSTICEKB-Simple LoopClaw)
[![Language](https://img.shields.io/badge/Language-TypeScript%20%2F%20Python-blue.svg)](#)
[![Bilingual](https://img.shields.io/badge/Language-Bilingual%20%2F%20中英双语-green.svg)](#)

</div>

---

> [!WARNING]
> ### ⚠️ CRITICAL DISCLAIMER
> This repository is based on the source code of **Claude Code** leaked from the Anthropic npm registry on 2026-03-31. All original source code copyrights belong exclusively to **Anthropic**. This repository and its modified versions are provided **strictly for educational, study, and research purposes only**. Commercial use, distribution, or resale of this software is strictly prohibited. Use at your own risk.

---

## 💡 Project Background & Design Philosophy

**Simple LoopClaw** is a local **AI Agent collaboration and workflow orchestration workbench** designed for individual developers to lower the barrier of entry for AI-assisted programming.

By unifying and refactoring the best open-source practices from the community (`cc-haha` and `Qclaw`), we implemented several core enhancements:
1. **Engine Upgrade (from `cc-haha`)**: Inherits the full-featured local execution CLI engine, custom MCP tool integrations, and a beautiful Electron + React desktop IDE workspace companion.
2. **Simplified Spirit (from `Qclaw`)**:
   - Streamlined environment checks to minimize onboarding friction for beginners.
   - Designed a **Windows-friendly native launcher** (`bin/loop-claw.cmd`) so Windows developers do not need complex WSL or Bash configuration to run CLI agent loops.
   - Built out unified and documented **IM channel bot adapters** for Feishu, DingTalk, WeChat, Telegram, and WhatsApp.
3. **Future AI IDE Vision**: More than just a CLI wrapper, we are moving towards **visual JSON-driven workflow orchestration**, **multi-agent team layout controls**, and **IDE integrations** to build a personal AI IDE workspace.

---

## 📸 Desktop Preview

<table>
  <tr>
    <td align="center" width="50%"><img src="docs/images/desktop_ui/10_desktop_workspace.png" alt="Workspace client"><br><b>Developer Workspace Panel (Sessions & Files)</b></td>
    <td align="center" width="50%"><img src="docs/images/desktop_ui/02_edit_code.png" alt="Code Diff"><br><b>Interactive Visual Code Diff Viewer</b></td>
  </tr>
  <tr>
    <td align="center" width="50%"><img src="docs/images/desktop_ui/03_ask_question_and_permission.png" alt="Permission Approval"><br><b>AI Safety Controls (Permission Gate)</b></td>
    <td align="center" width="50%"><img src="docs/images/desktop_ui/08_scheduled_task.png" alt="Analytics and tasks"><br><b>Usage Metrics & Cron Task Scheduler</b></td>
  </tr>
</table>

---

## 🚀 Core Features

- 🖥️ **Visual Developer Cockpit**: Review file edits, console command traces, and terminal logs in real-time with safety prompt approvals.
- ⚙️ **Multi-Model Provider Presets**: Connect and switch seamlessly between Anthropic API, OpenAI, DeepSeek, Ollama, and local WebSearch fallbacks.
- 🤖 **Bespoke IM Adaptors**: Direct adapters to let your local coding agent run as a 24/7 autonomous chatbot helper inside corporate messenger platforms.
- 🪟 **Native Windows Shell Wrappers**: Fully integrated batch launch script `bin/loop-claw.cmd` compatible with CMD and PowerShell.
- 🧩 **LSP & MCP Support**: Native filesystem and system tools alongside extensions supporting the Model Context Protocol (MCP).

---

## 🛠️ Quick Start

### 1. Requirements
* **Node.js** >= 22 (Node.js 24 recommended)
* **Bun** (Optional, for CLI debugging and running component tests)

### 2. Install & Launch CLI

#### On Windows
Use the native batch script:
```cmd
# Install dependencies
npm install

# Copy configuration
copy .env.example .env

# Run CLI
.\bin\loop-claw.cmd
```

#### On macOS / Linux
```bash
# Install dependencies
npm install

# Copy configuration
cp .env.example .env

# Grant execution rights and run
chmod +x ./bin/loop-claw
./bin/loop-claw
```

### 3. Run Desktop Visual Workspace
Compile and launch the Electron application:
```bash
cd desktop
npm install
npm run dev
```

---

## 📁 Repository Quick Navigation

- 📄 **Educational Disclaimer & Licensing Rules**: [LICENSE](LICENSE) (Lists the legal disclaimers, copyrights, and strict non-commercial restrictions).
- 🧭 **Development Milestones**: [ROADMAP.md](ROADMAP.md) (Check milestones regarding visual JSON workflows, MCP registries, and IDE plugins).
- 📋 **Contributing Guidelines**: [CONTRIBUTING.md](CONTRIBUTING.md) (Explains local quality tests, coverage gates, and PR check policies).
- 📝 **Change History**: [CHANGELOG.md](CHANGELOG.md) (Log of features and enhancements from version 0.1.0 to 0.4.5).
- 💬 **IM Integrations**: Refer to [docs/im/](docs/im/) for specific platform instructions.
