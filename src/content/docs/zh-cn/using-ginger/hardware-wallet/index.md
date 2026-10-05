---
doc_id: "hardware-wallets.connect"
title: "连接并使用硬件钱包"
description: "将受支持的硬件钱包连接到 Ginger，在设备上核对收款地址，并安全批准付款。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="does-ginger-support-hardware-wallets"></span>

> 阅读级别：日常使用。需要完成本指南所述任务时，选择此页。

硬件钱包将签名密钥保留在独立设备。Ginger 可显示余额并准备交易，设备授权受支持的签名操作。桌面电脑仍处理敏感公开信息，因此硬件存储不会使钱包活动匿名。

<span id="compatibility-in-this-release" data-ginger-heading="本版本兼容性" aria-hidden="true"></span>

## 本版本兼容性

Ginger 2.0.26 内置 Hardware Wallet Interface（HWI）3.2.0。Ginger 识别的设备包括 Coldcard、Ledger Nano S、Nano S Plus 和 Nano X、Trezor One、Model T、Safe 3 和 Safe 5、BitBox01、BitBox02、KeepKey 和 Blockstream Jade。可识别不保证每种设备、固件、口令流程及地址类型都能在图形界面使用。

[HWI 3.2.0 设备矩阵](https://github.com/bitcoin-core/HWI/blob/3.2.0/docs/devices/index.rst)描述底层传输能力。Ginger 只提供其中一部分：例如正常设备连接导入原生 SegWit 账户。HWI 支持多重签名或 Taproot，不会自动带来对应的 Ginger 钱包配置流程。

转移较大金额前，确认具体设备能连接、显示收款地址并签署小额测试付款。如果设备需要 Ginger 无法完成的 PIN 或口令输入方式，请在设备端完成受支持流程或咨询厂商。不要把设备助记词输入 Ginger 来绕过问题。

<span id="add-the-device" data-ginger-heading="添加设备" aria-hidden="true"></span>

## 添加设备

1. 按厂商说明初始化并备份硬件钱包。使用可信固件和可传输数据的 USB 线。
2. 每次连接一个设备，解锁，并在需要时打开其比特币应用。关闭可能占用 USB 连接的其他钱包应用。
3. 在 Ginger 添加钱包页面选择 **Hardware Wallet**，按提示提供钱包名称。
4. 按检测和设备提示操作。Ginger 可能识别以前添加的钱包，并提供打开它，而不是创建重复记录。
5. 等待 Ginger 同步。确认所选网络和账户符合预期。

硬件不连接时，Ginger 仍可在电脑保留公开钱包记录。该记录支持观察和生成地址；花费仍需签名设备或有效恢复其密钥。

<span id="receive-and-verify" data-ginger-heading="接收与验证" aria-hidden="true"></span>

## 接收与验证

选择 **Receive**、添加标签并生成地址。可用时使用 **Show on the hardware wallet**。分享前，比对设备显示的完整地址与 Ginger 地址。如果设备与桌面不一致，停止：批准不同地址可能将资金发到钱包之外。

即使被入侵，桌面仍可显示看似可信的地址。设备屏幕提供基于设备自身密钥的独立核对，因此有用。每笔付款使用新地址，避免关联无关收款。

<span id="send-and-approve" data-ginger-heading="发送与批准" aria-hidden="true"></span>

## 发送与批准

在 Ginger 准备付款，核对收款人、金额、找零和手续费。在硬件钱包上，检查它要求签署的内容。如果目的地址或金额与预期不同，或设备报告无法解释的找零/输出情况，拒绝请求。

签名完成前保持设备连接。之后在 Ginger 交易历史检查广播和确认。移除设备不会取消已广播交易。

<span id="coinjoin-and-other-limits" data-ginger-heading="coinjoin-与其他限制" aria-hidden="true"></span>

## CoinJoin 与其他限制

硬件钱包不能作为 Ginger 自动 CoinJoin 的源签名钱包。已加载硬件钱包可能作为软件钱包 CoinJoin 的输出目的地；这只是接收角色，且选择重启后重置。仅使用 Ginger 实际提供的目的地，依赖之前验证控制权。

[从交易所到冷存储的示例流程](/zh-cn/hardware-wallets/exchange-to-cold-storage/)比较直接接收符合条件的 CoinJoin 输出与之后普通转账。它包括仅含私密币时的启动限制，以及两边钱包的核对检查。

本版本拒绝硬件钱包发送 PayJoin。消息签名取决于设备和验证方兼容性。设备和 Ginger 都无法撤销已确认付款。文件签名参阅[使用 PSBT 流程](/zh-cn/hardware-wallets/psbt/)。

<span id="connection-problems" data-ginger-heading="连接问题" aria-hidden="true"></span>

## 连接问题

尝试已知可传输数据的线、直接 USB 端口及单个已解锁设备。在 Linux 上，按厂商适用的 udev/USB 权限说明操作，之后重新连接。不要长期以 root 身份运行钱包来解决问题。如果不同口令打开意外的空账户，检查原设备口令，不要重置设备。
