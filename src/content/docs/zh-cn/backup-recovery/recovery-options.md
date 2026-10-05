---
doc_id: "backup-recovery.recovery-options"
title: "进阶恢复：账户、地址扫描与文件"
description: "检查原始助记词和口令后，调查 Ginger 恢复兼容性、地址间隔限制、钱包 JSON 导入和缺失的元数据。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> 阅读级别：进阶指南。更改恢复或文件配置前，保留原始恢复信息和钱包文件。

先完成[常规恢复检查](/zh-cn/backup-recovery/restore/)：目标钱包、准确的原始助记词和口令、连接及扫描进度。本页说明这些检查仍可能不够的具体原因。

<span id="address-scanning-and-account-compatibility" data-ginger-heading="地址扫描与账户兼容性" aria-hidden="true"></span>

## 地址扫描与账户兼容性

恢复页面接受包含 12、15、18、21 或 24 个词的有效英文助记词，并检查其校验和。仅有有效助记词，不能证明其他应用的账户兼容。

如果你在某个收到付款的地址之前使用了异常大量的未收款地址，**Advanced Recovery Options** 提供 **Minimum Gap Limit:**。已发布的恢复页面默认值为 114。增大它可以扩大搜索范围，但会增加工作量和耗时；它不能修复错误助记词、错误口令或不兼容的钱包格式。仅在地址历史有相应依据时使用更大的值。

最初由其他应用创建的钱包，可能使用不同的地址类型、账户或派生路径。仅有 BIP39 助记词不能保证每个钱包都能找到所有账户。Ginger 的标准主网账户中，原生 SegWit 使用 `m/84'/0'/0'`，Taproot 使用 `m/86'/0'/0'`。在其他应用中进行进阶恢复，必须支持对应账户和地址类型。尽可能在硬件设备上完成硬件钱包恢复。

本版本 Ginger 不提供 SLIP39 分片恢复。不要把一组恢复分片当作一份 BIP39 助记词输入。

<span id="import-a-file" data-ginger-heading="导入文件" aria-hidden="true"></span>

## 导入文件

在添加钱包页面选择 **Import File**，并选择兼容的 `.json` 文件。名称已被使用时，Ginger 可能要求换一个名称。任意 JSON 文件、交易 PSBT 或将任意 xpub 粘贴到文本文件中，都不是兼容的钱包备份。

使用原始口令打开受保护的已导入软件钱包。通过 2FA 加密的文件不等于未加密的可迁移备份。保留相关文件和凭证，或改为通过助记词及原始口令恢复。导入硬件导出文件创建的钱包，签名仍依赖设备。

<span id="what-recovery-does-not-restore" data-ginger-heading="恢复不会还原的内容" aria-hidden="true"></span>

## 恢复不会还原的内容

区块链无法恢复私密标签、全部应用设置或服务商订单元数据。如果这些内容重要，请保留对应的 `.attr` 文件。Ginger 运行时，不要用旧元数据覆盖新恢复的文件。如果需要协助恢复附属数据，请使用副本，并说明文件名和版本，不要公开其内容。

保留原件，使用副本操作。操作本地数据前，参阅[钱包文件备份](/zh-cn/backup-recovery/backup-files/)。
