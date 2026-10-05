---
doc_id: "getting-started.install"
title: "安装 Ginger Wallet"
description: "选择合适的 Ginger Wallet 桌面版下载文件，检查兼容性，并安装已发布的应用。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: 安装 Ginger
prev:
  link: /getting-started/
  label: 从这里开始
next:
  link: /getting-started/first-wallet/
  label: 创建首个钱包
---

> 阅读级别：入门。先介绍必要步骤；进阶参考资料可按需继续阅读。

Ginger Wallet 是桌面版比特币钱包。你持有比特币的密钥，并可使用 CoinJoin 增加交易追踪难度。本版本不提供手机钱包、闪电网络钱包或其他加密货币支持。

本指南适用于 2.0.26 版本。通过 [Ginger 官方网站](https://gingerwallet.io/)或其链接的 [GitHub 发布页](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26)获取软件。搜索广告、私信或同名手机应用都不是可靠的下载来源。

<span id="choose-a-download" data-ginger-heading="选择下载文件" aria-hidden="true"></span>

## 选择下载文件

| 电脑 | 本版本支持的系统 | 下载文件 |
| --- | --- | --- |
| Windows PC，x64 | Windows 10，1607 或更新版本；Windows 11，22000 或更新内部版本 | `Ginger-2.0.26.msi` |
| 配备 Apple 芯片的 Mac | macOS 12 或更新版本 | `Ginger-2.0.26-arm64.dmg` |
| 配备 Intel 处理器的 Mac | macOS 12 或更新版本 | `Ginger-2.0.26.dmg` |
| Ubuntu 或 Debian，x64 | Ubuntu 22.04 或更新版本；Debian 11 或更新版本 | `Ginger-2.0.26.deb` |
| 其他受支持的 Linux，x64 | 发布页还列出 Fedora 37 或更新版本 | `Ginger-2.0.26.tar.gz` |

在 Mac 上，**About This Mac** 会显示芯片或处理器。发布页还包含标为 `win-x64`、`linux-x64`、`macOS-x64` 和 `macOS-arm64` 的 ZIP 压缩包。本版本没有 Windows ARM 或 Linux ARM 安装包。不要认为其他处理器的压缩包一定能用。

Ginger 需要互联网连接和可写入的存储空间，用于钱包及同步数据。可选的全节点比普通钱包操作需要更多磁盘空间、带宽和初次同步时间。入门时不需要全节点、单独安装 Tor 或开发工具。

<span id="install-the-application" data-ginger-heading="安装应用" aria-hidden="true"></span>

## 安装应用

1. 从官方发布页下载适合系统的安装包。检查来源、版本和包名，并留意操作系统的签名和安全检查。若要独立进行 PGP 验证，在打开安装包之前，使用对应的 `.asc` 文件，并参阅单独的[进阶下载验证指南](/zh-cn/getting-started/verify-download/)。
2. 在 Windows 上，打开 `.msi` 并按安装程序操作。在 macOS 上，打开 `.dmg`，将 Ginger 复制到 Applications。在 Ubuntu 或 Debian 上，用系统的软件安装程序打开 `.deb`。使用 Linux 压缩包时，解压整个压缩包并启动其中的应用；将随附文件保留在一起。
3. 打开 Ginger，等待初次连接和同步。Tor 已包含在应用中，通常随钱包启动。
4. 继续阅读[创建并打开钱包](/zh-cn/getting-started/first-wallet/)。

ZIP 或 tar 压缩包可以避开常规安装程序，但不意味着钱包可随意丢弃，也不意味着电脑上不会留下数据。钱包文件与应用分开存储。移动或删除任何一项前先做好备份。

<span id="if-your-operating-system-displays-a-warning" data-ginger-heading="操作系统显示警告时" aria-hidden="true"></span>

## 操作系统显示警告时

新版本可能尚未建立较高的下载信誉。警告也可能表示文件损坏或不可信。先检查下载来源、对应版本和签名。验证失败时，停止操作，从官方发布页重新下载。不要为绕过原因不明的警告而关闭杀毒保护或系统级安全检查。

Linux 设备访问出现问题时，参阅硬件钱包厂商的 USB 权限说明。安装钱包不需要长期以管理员身份运行它。

<span id="updates-and-availability" data-ginger-heading="更新与服务可用性" aria-hidden="true"></span>

## 更新与服务可用性

[发布列表](https://github.com/GingerPrivacy/GingerWallet/releases)列出了已发布版本及其变更。在 **Settings** → **General** 中，**Auto download new version** 控制更新下载。下载更新与安装更新不同；按照更新提示操作，并允许 Ginger 正常退出。更新前确保恢复备份可用。替换应用文件无需刻意删除钱包数据。

接受服务条款之前，阅读 Ginger 展示的当前条款，包括任何使用资格限制。安装应用不代表你有资格使用所有接入的服务。
