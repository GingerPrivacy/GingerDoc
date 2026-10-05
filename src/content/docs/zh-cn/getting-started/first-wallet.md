---
doc_id: "getting-started.first-wallet"
title: "创建并打开首个 Ginger 钱包"
description: "创建比特币钱包，记录助记词与口令，并了解初次同步和 CoinJoin 设置。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: 创建首个钱包
prev:
  link: /getting-started/install/
  label: 安装 Ginger Wallet
next: false
---

> 阅读级别：入门。先介绍必要步骤；进阶参考资料可按需继续阅读。

Ginger 钱包包含识别和花费比特币所需的信息。比特币本身记录在比特币网络中。有正确备份时，电脑丢失后可恢复钱包；若钱包和恢复信息都丢失，可能无法恢复。

<span id="create-a-software-wallet" data-ginger-heading="创建软件钱包" aria-hidden="true"></span>

## 创建软件钱包

1. 打开添加钱包页面，选择 **New**。如果提示 **Wallet Name**，选择能将本钱包与其他钱包区分开的名称。首个钱包可能自动获得名称，不显示这一步。
2. Ginger 显示十二个英文 **Recovery Words**。按显示顺序抄写，并离线保管。不要拍照、放进电子邮件或分享给客服。创建完成后，Ginger 不会再次显示它们。
3. 进入 **Confirm Recovery Words**，根据书面备份选择指定的词。这是检查你是否记录了顺序，而不只是认得屏幕上的词。
4. 在 **Add Passphrase** 中输入并确认口令，或在明确选择不用口令时将两栏都留空。记录是否使用了口令。非空口令既是恢复所必需的，也用于打开受保护的钱包；它不是 Ginger 可以重置的密码。
5. 完成可能出现的服务条款提示。先让钱包连接并同步，再依赖其余额。

钱包名称是本地标签，不是恢复凭证，也不会改变密钥。重命名钱包不等于创建新钱包。

<span id="decide-how-to-use-coinjoin" data-ginger-heading="决定如何使用-coinjoin" aria-hidden="true"></span>

## 决定如何使用 CoinJoin

Ginger 可能提示你自定义 CoinJoin 设置。让资金可用于自动 CoinJoin 之前，先检查设置和费用。在 **Coinjoin Settings** 中，**Automatically start coinjoin** 决定钱包是否无须按控制面板的启动控件就开始参与。检查当前钱包的实际开关状态；导入的钱包或以前配置过的钱包可能有不同设置。

CoinJoin 会产生交易手续费，也可能耗时。接收比特币、发送普通付款和参与 CoinJoin 是独立操作。可以先用一笔损失也能承受的小额资金学习接收和发送。

<span id="open-an-existing-wallet" data-ginger-heading="打开现有钱包" aria-hidden="true"></span>

## 打开现有钱包

在 Ginger 钱包列表中选择其名称。按提示输入原始口令。如果启用了应用双因素认证，先完成启动时的认证提示，再打开各个钱包。硬件钱包使用设备授权流程，而不是桌面软件钱包的秘密凭证。

要通过助记词添加钱包，在添加钱包页面选择 **Recover**。要加载兼容的钱包 JSON 备份或受支持的硬件导出文件，选择 **Import File**。不要将助记词粘贴到导入文件对话框，也不要仅为连接硬件钱包设备就导入其助记词。

<span id="know-when-the-wallet-is-ready" data-ginger-heading="判断钱包是否就绪" aria-hidden="true"></span>

## 判断钱包是否就绪

同步会查找属于钱包的交易。完成前，余额或历史记录可能不完整。恢复中的钱包在搜索期间可能隐藏常规收款或发送操作。未确认的入账付款表示交易已被发现，但尚未纳入区块。

接收较大金额前，确认钱包可以打开、恢复备份清晰可读，并且理解自己的口令选择。对于可以访问的软件钱包，使用 **Wallet Settings** → **Tools** → **Verify Recovery Words** 中的 **Verify** 按钮检查助记词。这用于验证备份，不能显示忘记的词。

<span id="close-safely" data-ginger-heading="安全关闭" aria-hidden="true"></span>

## 安全关闭

如果在 **Settings** → **General** 中启用了 **Run in background when window closed**，关闭窗口后 Ginger 可能继续运行。需要停止时，使用应用的正常退出操作。CoinJoin 处于关键阶段时，让 Ginger 完成关闭流程。强制关闭可能中断参与。

<span id="next-receive-and-send" data-ginger-heading="下一步接收与发送" aria-hidden="true"></span>

## 下一步：接收与发送

检查备份并完成同步后，返回[接收第一笔小额付款](/zh-cn/getting-started/#3-receive-a-small-first-payment)。该页面的下一节说明如何发出第一笔付款。
