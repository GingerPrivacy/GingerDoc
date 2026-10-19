---
doc_id: "help.troubleshooting"
title: "Ginger Wallet 故障排查"
description: "在保留恢复数据的同时，排查余额缺失、连接问题、配置与 RPC 错误、CoinJoin 等待状态、2FA 故障和硬件问题。"
lang: "zh-CN"
verified_release: "v2.0.27"
reader_level: "everyday"
prev: false
next: false
---

> 阅读级别：日常使用。需要完成本指南所述任务时，选择此页。

从准确错误、所选钱包、网络和应用版本开始。更改数据前保留恢复信息和钱包文件。连接或显示问题，通常不应首先重装、删除文件夹或创建新助记词。

<span id="balance-recovery-and-receiving" data-ginger-heading="余额恢复与收款" aria-hidden="true"></span>

## 余额、恢复与收款

| 现象 | 首先检查 | 下一步 |
| --- | --- | --- |
| 恢复钱包为空 | 原始助记词、准确口令、网络、扫描进度 | 同步后比较已知地址或历史；仅在常规检查无法解释时使用进阶恢复检查 |
| 入账付款缺失 | 正确地址、发送方交易 ID、所选钱包 | 检查广播和确认，然后检查本地同步 |
| Receive 或 Send 缺失 | 是否仍在恢复？是否仅观察钱包？ | 等待恢复，或使用所需签名设备 |
| 旧地址从收款列表消失 | 是否已付款或隐藏？ | 检查历史；列表可见性不会使密钥失效 |
| 只有小额付款缺失 | 粉尘阈值和同步 | 认定被盗前比较配置阈值 |
| 种子恢复后标签消失 | 是否备份对应 ATTR 文件？ | 保留该文件；区块链无法重建标签 |

不要为“重新同步”钱包而在网站输入助记词。仅在可信电脑上，使用已安装且验证过的钱包恢复流程。

<span id="connection-or-synchronization" data-ginger-heading="连接或同步" aria-hidden="true"></span>

## 连接或同步

检查联网、电脑时钟、可用存储和配置全节点状态。首次扫描可能只是需要时间。进度始终不变时，正常关闭 Ginger 并重新打开一次。记录结果，不要反复重启扫描。

即使钱包有缓存历史，**Awaiting connection** 也可阻止 CoinJoin 和其他服务。断线余额可能不完整。调查期间保持 Tor 开启。配置节点的 P2P 连接与 RPC 手续费估算独立；一个工作不证明另一个工作。

使用 **Wallet Settings** → **Tools** → **Resync** 时，先保留备份，并预期另一轮扫描。不要只为清除进度消息就删除 `Wallets`、`WalletBackups` 或 2FA 文件。

<span id="startup-reports-an-invalid-configuration" data-ginger-heading="启动时报告配置无效" aria-hidden="true"></span>

## 启动时报告配置无效

在 v2.0.27 中，如果无法加载 `Config.json`，Ginger 会停止启动并保留原始文件。错误信息会给出文件路径。可能时，Ginger 会在旁边创建单独的 `Config.Default.json`，作为默认设置模板；已有的模板也会保留。此错误与应用设置有关，本身并不意味着钱包或其密钥已损坏。

1. 修改文件前，关闭 Ginger 并保留[数据文件夹和钱包备份](/zh-cn/backup-recovery/backup-files/)。另行保存原始 `Config.json` 的副本。
2. 如果你了解配置，请将其与 `Config.Default.json` 比较，修正无效的 JSON 或设置值。如果 Ginger 无法写入模板，该模板可能不存在。
3. 如果决定改用默认应用设置启动，请将原始 `Config.json` 重命名，例如改为 `Config.before-repair.json`，并保留它。重新启动 Ginger，以生成新的 `Config.json`。
4. 恢复正常使用前，检查网络、Tor、全节点及其他自定义设置。重命名此设置文件不能恢复遗忘的口令，也不能替代钱包备份。保持 `Wallets`、`WalletBackups` 和 2FA 文件完整。

如果 Windows 启动设置以前曾导致错误，v2.0.27 已能处理缺失的启动注册表项。更新后检查 **Settings** → **General** → **Run Ginger when computer starts**。

<span id="json-rpc-does-not-start" data-ginger-heading="json-rpc-无法启动" aria-hidden="true"></span>

## JSON-RPC 无法启动

此项检查适用于明确启用了 Ginger 钱包 JSON-RPC 服务器的情况。在 v2.0.27 中，`JsonRpcUser` 和 `JsonRpcPassword` 均必须包含非空值；只包含空白字符的值会被拒绝。缺少这些值时，RPC 服务器会拒绝启动并记录原因，而钱包应用会继续运行。

在 Ginger 关闭时，于 `Config.json` 中设置这两项凭据，并配置连接客户端以使用它们。如果不需要服务器，可改为将 `JsonRpcServerEnabled` 设为 `false`。不要在共享日志或支持请求中包含凭据。这些是 Ginger 钱包的 RPC 设置，与 Bitcoin Core 节点的 RPC 凭据和钱包口令分别独立。

<span id="coinjoin-does-not-start" data-ginger-heading="coinjoin-不开始" aria-hidden="true"></span>

## CoinJoin 不开始

| 消息或情况 | 可能的处理 |
| --- | --- |
| **Insufficient funds eligible for coinjoin** | 查看确认、币金额、手续费和排除项；仅总余额不能证明资格 |
| **Only excluded funds are available** | 希望部分币参与时，检查 **Exclude Coins** |
| **Only immature funds are available** | 等待要求的成熟期；新挖矿输出有特殊花费规则 |
| **Some funds are rejected from coinjoining** | 阅读相关原因和当前服务条款；拒绝不转移资金所有权 |
| **Awaiting cheaper coinjoins** | 检查成本偏好，判断等待是否符合目标 |
| **Coinjoin may be uneconomical** | 手动绕过停止阈值前，检查该阈值和相对成本 |
| **Awaiting the blame round** | 等待协议重试；不是要求责怪其他用户 |
| **Awaiting closure of send dialog** | 完成或关闭发送流程 |
| **Mining fee rate was too high** 或 **Coordination fee rate was too high** | 等待或调查轮次条件；不要盲目提高限制 |
| 源钱包是硬件钱包 | 自动 CoinJoin 签名需要符合条件的软件钱包 |

参与者可能未完成步骤，或币因中断参与而暂不可用。反复重试、导入或试图绕过协调器拒绝，不是修复。根据原因和当前状态，决定等待还是联系官方支持。

2.0.27 版本修复了 macOS 上停止 CoinJoin 时的崩溃。如果 Ginger 在参与期间关闭，请重新打开，等待钱包同步，然后检查历史，再判断交易是否失败。关闭应用不会撤销已经广播的交易。记录反复出现的错误和已安装版本，以便寻求支持。

<span id="payment-or-fee-problems" data-ginger-heading="付款或手续费问题" aria-hidden="true"></span>

## 付款或手续费问题

估算不可用时，等待、修复所选服务商/节点连接，或使用自己理解的手动费率。确保最终金额加手续费不超过可花费资金。较长未确认交易链可能需要等待先前交易确认。

只有 Ginger 提供 **Speed Up Transaction** 或 **Cancel Transaction** 时，检查手续费后使用。取消是尝试替换待确认付款，不是撤销已确认付款。广播结果不确定时，先检查历史，避免付两次。

<span id="2fa-and-hardware" data-ginger-heading="2fa-与硬件" aria-hidden="true"></span>

## 2FA 与硬件

身份验证器代码被拒绝时，检查手机时间、所选条目、与 Ginger 的兼容性，以及 Tor/服务连接。保留现有钱包和 2FA 文件。正常启动无法恢复时，助记词加原始口令是独立密钥备份；覆盖安装相同数据不会重建丢失身份验证器。[进阶常见问题](/zh-cn/help/advanced-faq/#does-the-2fa-file-recover-the-wallet-without-the-service)说明文件依赖。

设备检测使用单个已解锁硬件钱包、数据线和直接 USB 端口，并关闭竞争设备应用。完成设备端所需比特币应用、PIN 或口令步骤。Linux 上检查厂商 USB 权限。不要把设备种子放入电脑。

<span id="report-a-useful-issue" data-ginger-heading="提交有用的问题" aria-hidden="true"></span>

## 提交有用的问题

使用 [Ginger 官方仓库](https://github.com/GingerPrivacy/GingerWallet/issues)链接。包括发布版本、操作系统和处理器、准确错误、预期结果及最简短非秘密复现步骤。相关时提供硬件型号和固件。

Ginger 搜索操作 **Logs** 打开诊断日志。分享前检查并删除敏感内容：路径、地址、交易 ID、标签和订单信息可能敏感。分享最小相关片段，不要整个数据文件夹。公开问题就是公开的；任何求助都不应要求助记词或口令。
