---
doc_id: "getting-started.verify-download"
title: "验证 Ginger Wallet 下载文件"
description: "在安装应用之前，检查 Ginger Wallet 发布文件的签名和签名密钥指纹。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
sidebar:
  label: 验证下载文件
  badge:
    text: 进阶
    variant: caution
prev: false
next: false
---

> 阅读级别：进阶指南。通过[安装指南](/zh-cn/getting-started/install/)确定官方下载来源，以及适合电脑的安装包。

分离式签名有助于确认下载文件由某个签名密钥的持有人签署，并且自签署后未被修改。它不能证明软件没有缺陷。你还必须确认该签名密钥确实是你打算信任的密钥。

<span id="collect-the-matching-files" data-ginger-heading="收集配套文件" aria-hidden="true"></span>

## 收集配套文件

从 [v2.0.26 发布页](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26)下载安装程序或压缩包，以及在相同文件名后附加 `.asc` 的文件。将两者放在同一文件夹。例如，Windows 对应文件为 `Ginger-2.0.26.msi` 和 `Ginger-2.0.26.msi.asc`。DMG、ZIP 或其他版本的签名不能用于验证该 MSI。

通过[官方网站](https://gingerwallet.io/)上的 PGP 链接获取公开签名密钥，并保存为 `PGP.txt`。使用可信的 OpenPGP 应用，例如 GnuPG，检查并导入它。如果尚未安装 GnuPG，通过 [GnuPG 官方下载页面](https://gnupg.org/download/)获取。

<span id="check-the-fingerprint" data-ginger-heading="核对指纹" aria-hidden="true"></span>

## 核对指纹

Ginger 为本版本公布的指纹是：

```text
FA0B 017A 3E75 CE65 CBF7 838F A8FF 3767 EDF5 DCE9
```

在下载文件夹中打开终端，导入前先检查密钥：

```sh
gpg --show-keys --with-fingerprint PGP.txt
gpg --import PGP.txt
```

比对完整指纹，而不是只看短密钥 ID 或显示名称。如果可以，通过此前信任的副本或另一个已确认的 Ginger 渠道交叉核对。从同一被入侵来源获取密钥和签名，本身不能证明真实性。若 Ginger 宣布更换密钥，先验证该公告，再信任新指纹。

<span id="verify-the-actual-download" data-ginger-heading="验证实际下载文件" aria-hidden="true"></span>

## 验证实际下载文件

对于 Windows 安装程序，运行：

```sh
gpg --verify Ginger-2.0.26.msi.asc Ginger-2.0.26.msi
```

其他平台请将两个文件名都替换为准确名称。验证成功应显示来自目标密钥的有效签名。GnuPG 也可能警告该密钥未获得可信签名的认证：这涉及你如何验证密钥身份，不能与文件签名无效混为一谈。

如果结果显示 **BAD signature**、密钥缺失、指纹不符或无法完成验证，暂时不要打开下载文件。核对文件配对，重新下载；问题持续时，通过官方项目链接寻求帮助。不要仅为消除警告就把陌生密钥标为可信。

<span id="checksums-and-platform-signatures" data-ginger-heading="校验和与平台签名" aria-hidden="true"></span>

## 校验和与平台签名

比较校验和可以检测下载错误。从不可信页面获取的校验和不能验证软件的真实性，因为攻击者可以同时替换下载文件和校验和。发布页也提供校验和资料；验证单个所选安装包时，上述对应的分离式签名流程已经足够。

Windows 代码签名和 macOS 签名或公证提供额外的平台检查。它们补充下载文件的验证，但不能替代保护助记词和核对交易。

验证成功后，返回[安装应用](/zh-cn/getting-started/install/#install-the-application)。
