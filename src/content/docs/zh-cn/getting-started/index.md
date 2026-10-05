---
doc_id: "getting-started.start-here"
title: "从这里开始：Ginger 入门"
description: "了解 Ginger 的用途，保护恢复备份，先完成一次简单的接收和发送，再探索可选的进阶功能。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: 从这里开始
prev: false
next:
  link: /getting-started/install/
  label: 安装 Ginger Wallet
---

> 阅读级别：入门。先介绍必要步骤；进阶参考资料可按需继续阅读。

Ginger 是一款在电脑上接收和发送比特币的应用。你掌握花费比特币所需的信息。Ginger 还有一项名为 CoinJoin 的可选功能，可增加追踪付款历史的难度。

你可以先学习钱包的常规操作。创建软件钱包不需要自己的比特币节点、硬件设备或进阶 CoinJoin 设置。

<!-- Preserve links to the questions previously published on this page. -->
<span id="whats-the-officially-supported-operating-systems" aria-hidden="true"></span>
<span id="is-there-an-androidios-version" aria-hidden="true"></span>
<span id="does-ginger-support-altcoins" aria-hidden="true"></span>
<span id="what-are-the-minimal-requirements-to-run-ginger" aria-hidden="true"></span>
<span id="do-i-need-to-run-tor" aria-hidden="true"></span>

<span id="1-install-the-real-application" data-ginger-heading="1-安装正版应用" aria-hidden="true"></span>

## 1. 安装正版应用

按照[安装 Ginger Wallet](/zh-cn/getting-started/install/)操作，并使用其中的官方下载链接。选择适合电脑的下载文件。不要安装名称相近的手机应用，也不要安装自称提供支持的陌生人发来的软件。

Ginger 支持 Windows、macOS 和 Linux；安装指南列出了支持的版本和处理器。本版本仅支持比特币，没有 Android 或 iOS 应用。你需要互联网连接和可写入的存储空间。应用内附 Tor，不必单独安装。

按该指南完成下载检查。需要时，可阅读单独的[进阶签名验证参考](/zh-cn/getting-started/verify-download/)，了解命令行检查方法。

<span id="what-is-the-password-used-for" aria-hidden="true"></span>

<span id="2-create-a-wallet-and-make-its-backup" data-ginger-heading="2-创建钱包并备份" aria-hidden="true"></span>

## 2. 创建钱包并备份

按照[创建首个钱包](/zh-cn/getting-started/first-wallet/)操作。选择 **New**，依次记录十二个 **Recovery Words**，并完成 **Confirm Recovery Words**。妥善保密书面备份，确保电脑丢失后仍可取得。

在 **Add Passphrase** 页面，先理解这一选择再继续。如果使用口令，恢复时必须同时提供原始助记词和完全一致的口令。该口令也保护电脑上的钱包访问。Ginger 无法重置它。将字段留空会创建不带额外口令的钱包；请记录自己的选择。

在备份清晰可读、且能够打开目标钱包之前，不要存入较大金额。切勿向客服提供助记词或口令。

<span id="why-is-it-important-to-use-a-new-address-for-every-payment" aria-hidden="true"></span>

<span id="3-receive-a-small-first-payment" data-ginger-heading="3-接收第一笔小额付款" aria-hidden="true"></span>

## 3. 接收第一笔小额付款

等待钱包完成同步，即检查比特币网络中属于你的交易。选择 **Receive**，添加有用的标签并生成收款地址。将它提供给付款人，或填入交易所的比特币链上提现流程。

每笔付款都生成新地址。重复使用地址，会让公开的比特币账本上的不同付款更容易被关联。

授权付款前，核对完整地址和网络。Ginger 接收比特币链上交易；其他资产的网络或闪电网络发票不能替代它。一次确认表示交易已被纳入比特币区块。付款人的截图本身不代表确认。

<span id="4-make-a-small-first-payment" data-ginger-heading="4-发出第一笔小额付款" aria-hidden="true"></span>

## 4. 发出第一笔小额付款

选择 **Send**，常规操作使用 **Automatic** 选币。输入收款地址和金额，选择 **Continue**，然后核对目的地址、收款人实际收到的金额和手续费。仅在这些内容正确时选择 **Confirm**。

手续费支付比特币交易占用的空间。选中资金若有剩余，会以找零的形式返回钱包，无须手动转回。Ginger 无法撤销已确认的付款。

连接出错后，先检查历史记录，再决定是否重新付款。这样可避免第一笔交易已经发出时重复支付。

<span id="5-decide-whether-to-use-coinjoin" data-ginger-heading="5-决定是否使用-coinjoin" aria-hidden="true"></span>

## 5. 决定是否使用 CoinJoin

CoinJoin 将多人的操作合并到同一笔比特币交易中，使所有权关系更难推断。钱包仍保留签名密钥。它需要手续费、可能耗时，且不能抹去收款人或交易所已经掌握的信息。

查看所选钱包 **Coinjoin Settings** 中的 **Automatically start coinjoin**。学习期间，如果不希望无人值守时启动，请关闭自动参与。若轮次已经开始，使用控制面板的暂停控件，并让关键操作完成。

接收和进行普通付款不需要等待隐私指示达到 100%。开始使用钱包也不需要调整所有进阶设置。

<span id="you-have-finished-the-first-use-path" data-ginger-heading="你已完成首次使用流程" aria-hidden="true"></span>

## 你已完成首次使用流程

必要检查包括：可恢复的备份、正确的钱包、正确的付款网络、收款人和实际手续费。继续为每次收款使用新地址，并核对每笔付款。

需要接收和发送检查清单时，可返回本指南。**进阶使用** 部分与首次使用流程分开。例如，[验证 Ginger Wallet 下载文件](/zh-cn/getting-started/verify-download/)详细介绍了命令行签名检查。
