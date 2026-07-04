# Simple LoopClaw (Simple-LOOP-CLAW)

<p align="center">
  <img src="docs/images/app-icon.png" alt="Simple LoopClaw" width="180">
</p>

<div align="center">

[![License](https://img.shields.io/badge/License-Educational_Use_Only-orange.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-JUSTICEKB--Simple--LOOP--CLAW-blue?logo=github)](https://github.com/JUSTICEKB/JUSTICEKB-Simple-LOOP-CLAW)
[![Language](https://img.shields.io/badge/Language-TypeScript%20%2F%20Python-blue.svg)](#)
[![Bilingual](https://img.shields.io/badge/Language-Bilingual%20%2F%20中英双语-green.svg)](#)

</div>

---

> [!WARNING]
> ### ⚠️ CRITICAL DISCLAIMER
> This repository is based on the source code of **Claude Code** leaked from the Anthropic npm registry on 2026-03-31. All original source code copyrights belong exclusively to **Anthropic**. This repository and its modified versions are provided **strictly for educational, study, and research purposes only**. Commercial use, distribution, or resale of this software is strictly prohibited. Use at your own risk.

---

## 💡 Project Overview & Purpose

**Simple LoopClaw** is a consolidated local Claude Code workbench designed to merge the best community open-source enhancements from projects like `cc-haha` and `Qclaw`.

By analyzing these implementations, we combined their respective advantages:
1. **Inheriting the Solid Core from `cc-haha`**: Includes the fully functional local execution CLI engine, multi-provider compatibility (Anthropic, OpenAI, DeepSeek, Ollama, etc.), desktop Electron workbench showing real-time git diffs/file changes, memory persistence, multi-agent coordination, and Computer Use support.
2. **Embodying the Ease-of-Use Philosophy from `Qclaw`**:
   - Added **Windows-friendly launch scripts** (`bin/loop-claw.cmd`) so Windows developers can start the CLI in PowerShell or Command Prompt with one click, without needing a full bash terminal installation.
   - Refined onboarding checks for a smoother beginner setup.
   - Centralized and documented IM bot connections for **Feishu, DingTalk, WeChat, Telegram, and WhatsApp**.
3. **Bilingual Compliance & Safety**: Clear, detailed disclaimer statements in both English and Chinese placed throughout the repository and license files to highlight its educational nature.

---

## 🚀 Core Features

- 🖥️ **Desktop Developer Workbench**: Centralizes chat history, project directories, git worktrees, file modification panels, real-time code diff visualization, and prompt/command approval flows.
- 🤖 **Multi-Model Support**: Connect via Anthropic API, OpenAI compatibility, DeepSeek, Ollama, or set up fallback search models.
- 💬 **Bespoke IM Bots**: Turn your local agent loop into a 24/7 autonomous chatbot helper in your favorite chat channels.
- 🪟 **Native Windows Integration**: Custom batch-file CLI wrapper (`bin/loop-claw.cmd`) for robust Windows-native terminal executions.
- 🧠 **Advanced Capabilities**: Built-in memory systems, multi-agent orchestration, and skill plugin extensions.

---

## 🛠️ Quick Start

### 1. Requirements
* **Node.js** >= 22 (Node.js 24 recommended)
* **Bun** (Optional, for developer tests and CLI debugging)

### 2. Install & Run CLI

#### On Windows
Use the native CMD batch script:
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

# Grant permission & run
chmod +x ./bin/loop-claw
./bin/loop-claw
```

### 3. Desktop Electron Application
To use the visual workspace and review file modifications interactively:
```bash
cd desktop
npm install
npm run dev
```

---

## 💬 Instant Messaging (IM) Bot Setup

To bridge Simple LoopClaw to your messaging apps, refer to the guides in `docs/im/`:

| Platform | Setup Guide / Config Path |
|------|------|
| **Feishu** | [Feishu Guide](docs/im/feishu.md) |
| **WeChat** | [WeChat Guide](docs/im/wechat.md) |
| **DingTalk** | [DingTalk Guide](docs/im/dingtalk.md) |
| **Telegram** | [Telegram Guide](docs/im/telegram.md) |
| **WhatsApp** | [WhatsApp Guide](docs/im/whatsapp.md) |

---

## ⚖️ License & Intellectual Property

1. This project is provided as an open-source **educational mirror and research hub**.
2. All IP, copyright, and mechanisms of the core source code belong to **Anthropic, PBC**.
3. While additional scripts, wrappers, and configuration guides are released under the **Apache License 2.0**, overall usage of the files in this repository remains subject to the commercial restrictions and disclaimer conditions specified in the [LICENSE](LICENSE) file.
