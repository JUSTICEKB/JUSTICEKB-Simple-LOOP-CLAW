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
> ### ⚠️ CRITICAL DISCLAIMER / 重要免责声明
> 
> **ENGLISH:**
> This repository is based on the source code of **Claude Code** leaked from the Anthropic npm registry on 2026-03-31. All original source code copyrights belong exclusively to **Anthropic**. This repository and its modified versions are provided **strictly for educational, study, and research purposes only**. Commercial use, distribution, or resale of this software is strictly prohibited. Use at your own risk.
>
> **中文:**
> 本仓库基于 2026-03-31 从 Anthropic npm registry 泄露的 **Claude Code** 原始源码进行修复、重构与优化。所有原始源码的版权及相关权利完全归 **Anthropic** 所有。本仓库及改造后的版本**仅供学术研究、个人学习和技术交流之用**。严禁将本软件用于任何商业用途、非法用途或与官方产品进行恶意竞争。使用本软件产生的所有法律后果与风险均由使用者自行承担。

---

## 💡 项目背景与设计初衷

**Simple LoopClaw** 是一个旨在融合社区优秀开源实践（`cc-haha` 与 `Qclaw`）的**优势整合版** Local Claude Code 工作台。

在研究了现有项目后，我们结合了它们的优点进行了改造：
1. **继承 `cc-haha` 的强大底座**：拥有完整的本地执行引擎（CLI）和直观的 Electron + React 桌面端开发工作台，支持多模型提供商（Anthropic, OpenAI, DeepSeek, Ollama 等）、Agent 协同、记忆系统以及桌面 Computer Use 截图控制。
2. **融入 `Qclaw` 的极简与易用精神**：
   - 提供了 **Windows 友好启动脚本** (`bin/loop-claw.cmd`)，让 Windows 用户无需配置繁琐的 Bash 环境，直接双击或在 PowerShell 中一行命令即可调出 CLI 引擎。
   - 优化了 onboarding 初始化检测机制，使小白用户也能快速上手。
   - 整理并集成了包括 **飞书、钉钉、微信、企业微信、QQ、Telegram、WhatsApp** 在内的完整 IM 接入适配方案。
3. **中英文合规免责声明**：在仓库、证书和说明中做好了完备的双语免责与版权说明，确保研究学习的合规性。

---

## 🚀 核心功能亮点

- 🖥️ **图形化开发工作台**：将会话、多项目、Git 分支/Worktree 管理、右侧文件改动面板、代码 Diff 视图、指令审批确认流无缝集成。
- 🤖 **多模型支持**：支持 Anthropic 兼容 API、OpenAI、DeepSeek、Ollama 以及 WebSearch fallback 本地自定义配置。
- 💬 **多平台 IM 机器人接入**：轻松让你的 Agent 在各类即时通讯工具中化身 24 小时在线助手。
- 🪟 **Windows 深度适配**：新增 Windows 专属快捷启动器 `bin/loop-claw.cmd`，极大提升 Windows 环境下的使用体验。
- 🧠 **高级 Agent 属性**：内置持久化记忆系统、多 Agent 编排系统和 Skills 插件扩展能力。

---

## 🛠️ 快速上手指南

### 1. 运行环境要求
* **Node.js** >= 22 (推荐 Node.js 24)
* **Bun** (可选，如需调试 CLI 或运行桌面测试)

### 2. 源码安装与 CLI 启动

#### Windows 用户
可以使用我们为您准备的 CMD 快捷启动脚本：
```cmd
# 安装依赖
npm install

# 复制并配置环境变量
copy .env.example .env

# 启动 CLI 交互界面
.\bin\loop-claw.cmd
```

#### macOS / Linux 用户
```bash
# 安装依赖
npm install

# 复制并配置环境变量
cp .env.example .env

# 赋予执行权限并启动
chmod +x ./bin/loop-claw
./bin/loop-claw
```

### 3. 启动桌面端应用 (Electron)
想要享受可视化 Diff 视图和更方便的项目管理？您可以编译启动桌面端：
```bash
cd desktop
npm install
npm run dev
```

---

## 💬 即时通讯 (IM) 接入指南

如果您希望将 Simple LoopClaw 接入各类聊天软件，请参考 `docs/im/` 下的配置指南：

| 平台 | 配置文件 / 指南链接 |
|------|------|
| **飞书 (Feishu)** | [飞书接入指南](docs/im/feishu.md) |
| **微信 (WeChat)** | [微信接入指南](docs/im/wechat.md) |
| **钉钉 (DingTalk)** | [钉钉接入指南](docs/im/dingtalk.md) |
| **Telegram** | [Telegram 接入指南](docs/im/telegram.md) |
| **WhatsApp** | [WhatsApp 接入指南](docs/im/whatsapp.md) |

---

## ⚖️ 开源协议与版权声明

1. 本项目为开源**学术研究/学习镜像**。
2. 原始核心代码及机制的知识产权归 **Anthropic, PBC** 所有。
3. 本项目除原始版权外，新增的脚手架、包装脚本及文档采用 **Apache License 2.0** 授权，但整体分发与使用必须严格遵循 [LICENSE](LICENSE) 文件中所列出的**商业限制与免责条款**。
