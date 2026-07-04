# Simple-LOOP-CLAW

<p align="center">
  <img src="docs/images/banner.png" alt="Simple-LOOP-CLAW" width="720">
</p>

<div align="center">

[![License](https://img.shields.io/badge/License-Educational_Use_Only-orange.svg)](LICENSE)
[![Repository](https://img.shields.io/badge/GitHub-JUSTICEKB%2FJUSTICEKB--Simple--LOOP--CLAW-334B89.svg)](https://github.com/JUSTICEKB/JUSTICEKB-Simple-LOOP-CLAW)
[![Stack](https://img.shields.io/badge/Stack-TypeScript%20%2F%20Bun%20%2F%20Electron-E7A72C.svg)](#技术栈)

</div>

Simple-LOOP-CLAW 是一个本地 AI Coding Agent 工作台，包含 CLI、本地 API 服务、Electron 桌面端、多模型 Provider 配置和 IM 适配器。项目目标是把会话、文件改动、权限审批、计划任务和模型服务商配置收进同一套可视化工作流里。

> 重要说明：本仓库仅用于学习、研究和本地技术实验。使用第三方模型、OAuth、IM 机器人和自动化能力时，请遵守对应平台条款，并自行保管 API Key、Token 与本地数据。

## 品牌与配色

当前品牌统一使用本地 `docs/images/app-icon.png` 和 `docs/images/banner.png`，不再引用远程或旧仓库 Logo。

| 用途 | 色值 |
| --- | --- |
| 主色 / 深蓝 | `#334B89` |
| 强调 / 金黄 | `#E7A72C` |
| 危险 / 红色 | `#D13631` |

## 桌面端预览

以下截图均来自仓库内的真实项目截图资源。

<table>
  <tr>
    <td align="center" width="50%"><img src="docs/images/desktop_ui/10_desktop_workspace.png" alt="主开发工作台"><br><b>主开发工作台 (Sessions & Files)</b></td>
    <td align="center" width="50%"><img src="docs/images/desktop_ui/08_scheduled_task.png" alt="计划任务与用量统计面板"><br><b>计划任务与用量统计面板</b></td>
  </tr>
</table>

## 核心能力

- 本地 CLI 与桌面端协同，支持会话、终端、文件改动和权限审批。
- 多服务商 Provider 预设，支持 Claude Official、ChatGPT Official、DeepSeek、Kimi、MiniMax、智谱 GLM、Google Gemini、本地 LM Studio / Ollama 和自定义接口。
- Google Gemini 通过官方 OpenAI 兼容接口接入，默认 base URL 为 `https://generativelanguage.googleapis.com/v1beta/openai`。
- Windows 友好启动器：`bun run start` 会自动走 `bin/loop-claw.cmd`，不再把 Bash 脚本交给 Windows Bun 解析。
- IM 适配器覆盖 Telegram、飞书、微信、钉钉等远程协作入口。

## 技术栈

- Runtime: Bun、Node.js 22+
- CLI / Server: TypeScript、Ink、WebSocket、本地 REST API
- Desktop: Electron、React、Vite、Vitest
- Docs: VitePress

## 快速启动

```powershell
bun install
bun run start -- --help
```

启动本地 API 服务：

```powershell
$env:SERVER_PORT = "3456"
bun run src/server/index.ts
```

启动桌面前端：

```powershell
cd desktop
bun install
bun run dev
```

桌面端默认访问 Vite 地址 `http://127.0.0.1:1420`，API 服务默认监听 `http://127.0.0.1:3456`。

## Gemini Provider 配置

在桌面端进入 Settings -> Providers，选择 Google Gemini 预设：

- API Key: 从 [Google AI Studio](https://aistudio.google.com/app/apikey) 获取。
- Base URL: `https://generativelanguage.googleapis.com/v1beta/openai`
- API Format: `openai_chat`
- 默认模型: `gemini-3.5-flash`
- 轻量模型: `gemini-3.1-flash-lite`

配置完成后可以先用 Provider 测试按钮验证连通性，再设为当前激活服务商。

## 资料入口

- [English README](README.en.md)
- [桌面端文档](docs/desktop/)
- [第三方模型指南](docs/guide/third-party-models.md)
- [IM 适配器文档](docs/im/)
- [贡献指南](CONTRIBUTING.md)
