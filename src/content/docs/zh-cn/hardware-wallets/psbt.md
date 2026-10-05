---
doc_id: "hardware-wallets.psbt"
title: "使用 PSBT 流程"
description: "在 Ginger 中准备比特币交易，通过文件在硬件钱包上签名，并导入结果进行广播。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> 阅读级别：进阶指南。先建立已验证的硬件钱包及其独立备份。

部分签名比特币交易（PSBT）是包含交易及签名器所需信息的文件。它允许将桌面准备与硬件钱包签名分开。PSBT 可能披露地址、金额和钱包信息，因此即使尚不能花费资金，也应视为私密文件。

<span id="prepare-the-wallet-connection" data-ginger-heading="准备钱包连接" aria-hidden="true"></span>

## 准备钱包连接

需要在 Ginger 中有兼容的硬件钱包记录，并关联签名设备上的密钥。对于受支持的 Coldcard 钱包 JSON 导出文件，通过 **Import File** 添加。使用厂商针对该固件的当前导出说明；PSBT 交易文件不是钱包导入文件。

导出文件包含公开账户信息和设备指纹，不含助记词。向钱包充值前，确认 Ginger 收款地址与设备一致。即使设备相同，不同派生路径或口令的导入账户也可能是另一个钱包。

<span id="export-a-transaction" data-ginger-heading="导出交易" aria-hidden="true"></span>

## 导出交易

1. 在 Ginger 中打开硬件钱包。在 **Wallet Settings** → **General** 中启用 **PSBT workflow**。
2. 选择 **Send**，按常规方式准备目的地址和金额。核对所选输入、找零和手续费。
3. 在预览中选择 **Save PSBT file**，保存提议的交易。另一个选项 **Send Now** 直接进入签名，而不是保存文件供后续处理。
4. 通过设备支持的方式（例如可移动存储介质）把文件转入签名设备。按照设备说明，在可信显示屏上检查目的地址、金额、手续费和找零。
5. 保存签名结果，不要与原始未签名提议混淆。

不要仅因交易由 Ginger 准备就批准它。设备必须授权预期付款。不要将助记词放入 PSBT 文件或电脑。

<span id="import-and-broadcast" data-ginger-heading="导入与广播" aria-hidden="true"></span>

## 导入与广播

返回 Ginger 中的硬件钱包，选择在 PSBT 流程下可见的 **Broadcast**。**Import Transaction** 文件对话框接受受支持交易文件，包括 PSBT 和交易文件。选择签名结果，提交到网络前检查广播页面。

未签名或签名不完整的 PSBT 无法作为有效付款广播。签名成功也不保证被接受：输入可能已被花费，或手续费不再符合网络条件。保留原钱包，完成同步，在创建另一笔付款前检查历史。

交易广播后，签名设备无须保持连接就能确认。在 Ginger 中检查最终历史条目和确认数。删除签名文件不会取消别人已经能够广播的交易。

<span id="handle-files-carefully" data-ginger-heading="谨慎处理文件" aria-hidden="true"></span>

## 谨慎处理文件

为提议和签名结果使用易区分的文件名。不要通过邮件发送 PSBT，也不要为查看自己的交易将其上传到在线解码器。同样保护敏感账户导出文件：扩展公钥虽不能直接签署花费，却可透露许多地址。

本流程记录已发布的硬件钱包界面，不代表提供通用多重签名协调器、开发者签名 API，或兼容其他应用生成的所有 PSBT 格式。
