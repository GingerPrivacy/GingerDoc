---
doc_id: "backup-recovery.backups"
title: "备份 Ginger 钱包"
description: "保管并验证助记词和原始口令，以便在电脑丢失后恢复 Ginger 软件钱包。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> 阅读级别：入门。先介绍必要步骤；进阶参考资料可按需继续阅读。

对于 Ginger 软件钱包，请保管助记词，以及使用过的完全一致的原始口令。电脑丢失后，可用它们恢复访问。硬件钱包有自己的设备备份流程；不要将其助记词放在电脑上。

<span id="the-backup-you-need-first" data-ginger-heading="首先需要的备份" aria-hidden="true"></span>

## 首先需要的备份

1. 按显示顺序抄写助记词，并保密。
2. 记录准确口令，或记录钱包创建时未使用口令。Ginger 无法重置它。
3. 将备份保存在电脑丢失后仍可取得的位置，同时防止其他人读取。
4. 在仍可访问钱包时验证备份。

钱包名称不是恢复秘密。身份验证器代码或硬件 PIN 不能替代助记词和原始口令。

<span id="store-recovery-information-safely" data-ginger-heading="安全存储恢复信息" aria-hidden="true"></span>

## 安全存储恢复信息

清晰抄写助记词，并保留原始顺序。保存在电脑丢失后能够取得、同时不让其他人读取的地方。若火灾、水灾或某一地点无法进入会导致备份失效，可考虑保存多份耐久副本。记录副本所在位置，但不要将助记词列在普通云笔记中。

非空口令也必须能够恢复。单靠记忆可能失败。分开存储可降低一次泄露暴露全部秘密的风险，但安排仍须让你或你明确授权的人理解。不要在不了解恢复方法的情况下，自创将助记词拆成片段的方案。

应用密码、设备 PIN、身份验证器代码和 BIP39 口令不能互相替代。明确标注备份说明，但不要让无意授权的读者看到秘密。

<span id="choose-something-durable-and-readable" data-ginger-heading="选择耐久且可读的介质" aria-hidden="true"></span>

## 选择耐久且可读的介质

纸张可能因火、水或褪色损坏。金属能抵抗部分损坏，但仍须防止被他人读取。检查备份是否仍然清晰且可取得。

避免拍摄助记词、使用普通云笔记或打印机：它们可能留下不受你控制的副本。如果保存多份，保护并记录每份副本。不要将助记词拆成自己以后可能拼不回去的谜题。

<span id="check-the-backup-before-you-need-it" data-ginger-heading="在需要之前检查备份" aria-hidden="true"></span>

## 在需要之前检查备份

对已打开的软件钱包，使用 **Wallet Settings** → **Tools** → **Verify Recovery Words**，然后选择 **Verify**。输入备份中的助记词。检查成功可作为这些词属于该钱包的有用证据。还要确认口令记录正确，并能够找到需要保留的文件。

如果助记词验证失败，私下检查拼写与顺序。如果仍能花费资金，却无法确认恢复备份可用，请创建新钱包并验证备份，再谨慎转移资金。调查期间不要删除旧钱包。

标签或设置发生重要变更后，重新备份本地元数据。接收更多比特币通常不需要新的助记词，但创建新钱包或改用不同口令会需要。

<span id="what-about-labels-and-computer-files" data-ginger-heading="标签和电脑文件怎么办" aria-hidden="true"></span>

## 标签和电脑文件怎么办？

助记词不能恢复所有标签、设置或服务商订单记录。本地自动备份位于同一台电脑，无法防范整台电脑丢失。

可选进阶参考：[钱包文件、元数据与口令细节](/zh-cn/backup-recovery/backup-files/)。它将文件副本和 2FA 相关文件与必要的助记词备份分别说明。
