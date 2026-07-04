# 安装指南

Simple-LOOP-CLAW 桌面端基于 Electron，支持 macOS、Windows 和 Linux 安装包。正式发布资产来自 GitHub Releases。

## 下载

前往 [GitHub Releases](https://github.com/JUSTICEKB/JUSTICEKB-Simple-LOOP-CLAW/releases) 下载对应平台的安装包。

| 平台 | 文件名 |
| --- | --- |
| macOS Apple Silicon | `Simple-LoopClaw-<version>-mac-arm64.dmg` |
| macOS Intel | `Simple-LoopClaw-<version>-mac-x64.dmg` |
| Windows x64 | `Simple-LoopClaw-<version>-win-x64.exe` |
| Windows ARM64 | `Simple-LoopClaw-<version>-win-arm64.exe` |
| Linux x64 | `Simple-LoopClaw-<version>-linux-x86_64.AppImage` 或 `Simple-LoopClaw-<version>-linux-amd64.deb` |
| Linux ARM64 | `Simple-LoopClaw-<version>-linux-arm64.AppImage` 或 `Simple-LoopClaw-<version>-linux-arm64.deb` |

## macOS

双击 DMG，把应用拖入 `Applications`。如果安装的是未签名的本地构建，首次打开可能需要在系统设置的隐私与安全性页面手动允许。

## Windows

双击 `.exe` 安装。如果 SmartScreen 提示未知发布者，请确认安装包来源是本项目的 GitHub Release 后再继续。

## Linux

AppImage:

```bash
chmod +x Simple-LoopClaw-<version>-linux-x86_64.AppImage
./Simple-LoopClaw-<version>-linux-x86_64.AppImage
```

Debian package:

```bash
sudo apt install ./Simple-LoopClaw-<version>-linux-amd64.deb
```

## Web UI 模式

如果桌面安装包暂时无法使用，可以直接启动本地服务和前端：

```bash
SERVER_PORT=3456 bun run src/server/index.ts
```

```bash
cd desktop
bun run dev --host 127.0.0.1 --port 1420
```

然后访问 `http://127.0.0.1:1420`。
