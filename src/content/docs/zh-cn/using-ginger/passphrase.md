---
doc_id: "backup-recovery.passphrase"
title: "什么是口令？"
description: "了解 Ginger 钱包口令、应该备份的内容，以及为什么恢复需要原始口令，即使另一个口令能够打开空钱包。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "口令"
prev: false
next: false
---

> 阅读级别：入门。本指南适用于 Ginger v2.0.26 的软件钱包。对于硬件钱包，遵循设备厂商的恢复说明，不要将其助记词放在电脑上。

口令是创建钱包时可自行选择的额外秘密。在 Ginger 中，它保护软件钱包访问，也是恢复信息的一部分。要恢复同一个钱包，需要原始助记词，以及使用过的完全一致的原始口令。Ginger 无法重置忘记的口令。

<span id="do-i-have-to-use-a-passphrase" data-ginger-heading="必须使用口令吗" aria-hidden="true"></span>

## 必须使用口令吗？

创建钱包时，Ginger 在 **Confirm Recovery Words** 后显示 **Add Passphrase**。可以输入并确认口令，也可以将两栏留空，创建不带口令的钱包。

没有口令时，获得助记词的人可以恢复并花费你的比特币。口令增加了一个需要保护的秘密，但忘记它可能导致即使仍有助记词也无法恢复。选择难以猜到、且能够准确记录和重现的内容。避免开头或结尾的空格；Ginger 的输入检查会拒绝它们。

<span id="is-it-the-same-as-recovery-words-or-a-2fa-code" data-ginger-heading="它与助记词或-2fa-代码相同吗" aria-hidden="true"></span>

## 它与助记词或 2FA 代码相同吗？

不同。Ginger 为新软件钱包生成十二个 **Recovery Words**。口令由你另行选择。将它与编号的助记词列表分开记录；不要把它作为额外的助记词输入。

钱包名称只是本地标签。双因素认证（2FA）的身份验证器代码是独立的应用启动检查。恢复软件钱包时，两者都不能替代原始助记词和口令。

<span id="what-should-i-back-up" data-ginger-heading="应该备份什么" aria-hidden="true"></span>

## 应该备份什么？

- 按显示顺序记录的助记词。
- 准确的原始口令，包括大小写和所有字符，或明确记录创建钱包时未使用口令。

保密这些信息，并确保电脑丢失后仍可恢复。离线抄写助记词；避免拍照、电子邮件和普通云笔记。口令也要能够恢复。分开存储可防止有人同时发现两个秘密，但要确保需要时两者都能找到。不要只依赖记忆。

助记词可恢复比特币访问，但不能恢复每个标签或设置。调查恢复问题时保留现有钱包文件。同一台电脑上的自动备份无法防范该电脑丢失。

<span id="how-do-i-check-my-backup" data-ginger-heading="如何检查备份" aria-hidden="true"></span>

## 如何检查备份？

在仍可访问软件钱包时，打开 **Wallet Settings** → **Tools**。找到 **Verify Recovery Words** 并选择 **Verify**，输入备份中的助记词，完成检查。

它检查这些词是否属于该钱包，不会显示忘记的词或重置口令。还要确认口令记录正确。如果验证失败，在依赖备份前，私下检查拼写和词序。

<span id="how-do-i-use-the-passphrase-during-recovery" data-ginger-heading="恢复时如何使用口令" aria-hidden="true"></span>

## 恢复时如何使用口令？

这些步骤用于通过助记词恢复 Ginger 软件钱包。确认恢复成功前，保留所有现有钱包文件。

1. 在可信电脑上打开 Ginger。在添加钱包页面选择 **Recover**。
2. 按提示输入不同的 **Wallet Name**，以便区分恢复的钱包和现有钱包。
3. 按顺序输入原始 **Recovery Words**。
4. 在 **Enter Passphrase** 中输入并确认原始口令。仅当原始钱包没有口令时将字段留空。这里不是选择新密码。
5. 等待恢复和同步完成，再核对已知交易历史。同步是检查比特币网络中属于钱包的交易。

<span id="why-is-my-recovered-wallet-empty" data-ginger-heading="为什么恢复的钱包是空的" aria-hidden="true"></span>

## 为什么恢复的钱包是空的？

通过助记词恢复时，不同口令会生成不同的钱包。因此，Ginger 可能接受输入错误的口令，并恢复出空钱包，而不报告口令错误。这与打开现有受保护钱包文件不同，后者会拒绝错误口令。

检查原始口令、大小写、空格和键盘布局。还要检查是否选中目标钱包和比特币网络，以及恢复是否完成。扫描尚未完成时，余额可能不完整。余额为空本身不能证明原来的比特币已丢失。

若预期历史仍缺失，保留原件，通过 [Ginger 官方项目支持链接](https://gingerwallet.io/)寻求帮助。仅分享应用版本和错误文本等非秘密信息。切勿向客服发送助记词、口令或钱包文件。

<span id="can-i-reset-or-replace-a-forgotten-passphrase" data-ginger-heading="可以重置或替换忘记的口令吗" aria-hidden="true"></span>

## 可以重置或替换忘记的口令吗？

Ginger 无法重置它。使用相同助记词和新口令恢复，只会让你访问另一个钱包；不会更改原始钱包的口令，也不会转移其中的比特币。

如果仍可从原钱包发送资金，却无法确认恢复备份可用，创建新钱包、验证备份，并趁仍可访问时谨慎转移资金。转账确认前保留旧钱包。如果既无法花费，也没有必要的恢复信息，客服无法重新生成缺失的秘密。
