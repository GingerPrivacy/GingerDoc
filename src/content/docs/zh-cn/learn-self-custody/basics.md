---
doc_id: "learn-self-custody.basics"
title: "自行保管比特币：备份、口令与硬件钱包"
description: "了解谁能花费你的比特币、完整恢复备份需要什么，以及 Ginger 软件钱包和硬件钱包的区别。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> 阅读级别：入门。先介绍必要步骤；进阶参考资料可按需继续阅读。

自行保管意味着你持有花费比特币所需的信息。批准付款时，无须请求账户服务商释放资金。相应地，你需要保护这些信息、保留可用备份，并仔细检查每笔付款。

<span id="keys-records-and-recovery" data-ginger-heading="密钥记录与恢复" aria-hidden="true"></span>

## 密钥、记录与恢复

比特币网络保留公开交易记录。钱包使用秘密密钥，授权花费由你控制的部分。在替换电脑上安装应用不会重新生成这些秘密；因此恢复备份很重要。

对于 Ginger 软件钱包，助记词和原始口令可以重新生成密钥。本地钱包文件可保留标签、设置等额外背景信息。身份验证器、硬件设备 PIN 和从电脑复制的文件各有不同作用；不能认为任何一项可替代助记词备份。

<span id="the-passphrase-changes-the-wallet" data-ginger-heading="口令会改变钱包" aria-hidden="true"></span>

## 口令会改变钱包

Ginger 将 BIP39 口令与助记词配合使用。不同口令生成不同密钥。因此，原始口令输入错误时，恢复可能顺利完成却仍显示空钱包。[BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)定义了这种关系。

记录是否使用口令，并准确保管。选择能够恢复的保护方式，而不是只存在记忆中的复杂秘密。妥善存放恢复说明，使以后的你能够区分钱包口令、电脑登录密码和身份验证器代码。

<span id="software-versus-hardware" data-ginger-heading="软件与硬件的区别" aria-hidden="true"></span>

## 软件与硬件的区别

| 配置 | 签名位置 | 实际责任 |
| --- | --- | --- |
| Ginger 软件钱包 | 桌面电脑上，使用可用的秘密 | 保护电脑和恢复信息；自动 CoinJoin 要求它能够签名 |
| 通过 Ginger 使用的硬件钱包 | 受支持的操作在设备上签名 | 在设备上核对详情，并保留厂商规定的恢复备份 |
| 没有签名器的仅观察记录 | 不能独立授权花费 | 保护涉及隐私的公开数据，并保留对独立签名器的访问 |

硬件钱包可以减少密钥暴露给桌面恶意软件的风险，但如果不检查设备屏幕，仍可能授权恶意付款。将其种子导入桌面钱包会改变安全安排：这些密钥现在暴露给了该电脑。

<span id="recovery-is-part-of-the-setup" data-ginger-heading="恢复属于配置的一部分" aria-hidden="true"></span>

## 恢复属于配置的一部分

依赖钱包前，确认能够找到并理解备份。对于可访问的 Ginger 软件钱包，**Verify Recovery Words** 会检查你提供的助记词。也要保留原始口令。硬件钱包应使用厂商合适的备份检查流程，不要把种子输入桌面电脑。

不要只保留应用文件。安装程序可以重新下载；缺失的秘密无法从项目网站获取。考虑磁盘故障、设备丢失以及备份地点的访问。Bitcoin.org 的[钱包安全指南](https://bitcoin.org/en/secure-your-wallet)将备份和设备保护作为相互补充的措施讨论。

<span id="evaluate-a-wallet-with-evidence" data-ginger-heading="根据证据评估钱包" aria-hidden="true"></span>

## 根据证据评估钱包

使用官方发布版本、验证签名，并阅读计划使用功能的局限。开源允许审查，但不代表每个二进制文件或依赖项都经过审计。[Bitcoin.org 的 Ginger 条目](https://bitcoin.org/en/wallets/desktop/windows/ginger/)和 [WalletScrutiny 的 Ginger 页面](https://walletscrutiny.com/desktop/gingerwallet/)等外部列表提供额外背景。检查其范围和日期，不要把上榜视为对已安装版本的保证。

Ginger 将软件钱包恢复、硬件集成和隐私工具结合到桌面操作中。可选进阶阅读：[建立可恢复的安全习惯](/zh-cn/learn-self-custody/security-routine/)，包括地址、钱包数据或密钥暴露后的应对。
