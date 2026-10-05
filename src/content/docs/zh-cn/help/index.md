---
doc_id: "help.faq"
title: "Ginger Wallet 常见问题：从这里开始"
description: "查找资金缺失、备份、恢复、CoinJoin 等待和费用、待确认付款、硬件钱包及安全求助的简短回答。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> 阅读级别：入门。先提供简短回答和初步检查，再提供可选进阶阅读。

从最接近所见情况的问题开始。这些回答涵盖常规使用和首次安全检查；单独的[进阶常见问题](/zh-cn/help/advanced-faq/)是自定义设置及特殊情况的可选延伸。

- [从这里开始](#start-here)
- [恢复与资金缺失](#recovery-and-missing-funds)
- [连接与更新](#connection-and-updates)
- [CoinJoin 基础](#coinjoin-basics)
- [付款与硬件](#payments-and-hardware)
- [安全求助](#getting-help-safely)

<span id="start-here" data-ginger-heading="从这里开始" aria-hidden="true"></span>

## 从这里开始

<span id="what-is-ginger-and-does-it-hold-my-bitcoin" data-ginger-heading="ginger-是什么它保管我的比特币吗" aria-hidden="true"></span>

### Ginger 是什么，它保管我的比特币吗？

Ginger 是用于接收和发送比特币链上交易的桌面应用，带可选 CoinJoin 隐私功能。你掌握授权花费的密钥；仅加入轮次不会让 CoinJoin 协调器获得保管权。保护电脑和恢复备份，因为掌握密钥不消除盗窃、失误或失去访问的可能性。

<span id="is-there-an-official-mobile-or-web-wallet" data-ginger-heading="有官方手机或网页钱包吗" aria-hidden="true"></span>

### 有官方手机或网页钱包吗？

v2.0.26 提供受支持 Windows、macOS 和 Linux 电脑的桌面软件。不提供 Android、iOS 或浏览器钱包、闪电网络付款或其他加密货币。从 [Ginger 官方网站](https://gingerwallet.io/)及其发布链接开始；不要仅因应用或网站使用 Ginger 名称就输入助记词。

<span id="do-i-need-an-account-my-own-node-or-a-hardware-wallet" data-ginger-heading="需要账户自有节点或硬件钱包吗" aria-hidden="true"></span>

### 需要账户、自有节点或硬件钱包吗？

不需要。常规软件钱包创建使用本地恢复信息，不要求客户账户、自有比特币节点或硬件设备。可选 2FA 使用服务，买卖服务商可能要求账户或身份信息，所以这些功能有额外要求。

<span id="do-i-have-to-use-coinjoin-before-receiving-or-sending" data-ginger-heading="接收或发送前必须-coinjoin-吗" aria-hidden="true"></span>

### 接收或发送前必须 CoinJoin 吗？

不必。接收、普通发送与 CoinJoin 独立。学习时不希望无人值守参与，检查 **Coinjoin Settings** 的 **Automatically start coinjoin**；若轮次已进行，暂停并让关键操作完成。

<span id="can-i-buy-bitcoin-in-ginger-or-receive-an-exchange-withdrawal" data-ginger-heading="可以在-ginger-买比特币或接收交易所提现吗" aria-hidden="true"></span>

### 可以在 Ginger 买比特币或接收交易所提现吗？

可将 **Receive** 的新地址用于比特币链上提现，在交易所授权前检查地址和网络。Ginger 在可用地区也提供 **Buy** 和 **Sell** 服务商流程。检查所选服务商当前条款、报价和订单状态；购买确认与已确认比特币收款不同。

<span id="recovery-and-missing-funds" data-ginger-heading="恢复与资金缺失" aria-hidden="true"></span>

## 恢复与资金缺失

<span id="what-do-i-need-to-back-up" data-ginger-heading="需要备份什么" aria-hidden="true"></span>

### 需要备份什么？

保留原始顺序助记词，以及使用过的准确原始口令。未使用口令创建时，记录口令为空。这些恢复密钥访问；标签和一些其他本地记录需要独立文件备份。

<span id="is-my-passphrase-just-a-password-i-can-reset" data-ginger-heading="口令只是能重置的密码吗" aria-hidden="true"></span>

### 口令只是能重置的密码吗？

不是。Ginger 软件钱包的原始口令既帮助确定恢复哪些比特币密钥，也保护存储秘密。不同助记词或口令可产生不同有效钱包。钱包名称、硬件 PIN 或身份验证器代码不能替代。

<span id="i-have-the-words-but-forgot-the-passphrase-can-ginger-reset-it" data-ginger-heading="有助记词却忘了口令ginger-能重置吗" aria-hidden="true"></span>

### 有助记词却忘了口令，Ginger 能重置吗？

Ginger 无法重置原始口令同时保留相同钱包密钥。检查私人备份记录，并保留仍能花费的安装环境。如果仍可花费但无法确定完整恢复备份，创建并验证新钱包备份，谨慎转移资金；切勿把助记词发给所谓恢复助手。

<span id="can-ginger-show-my-recovery-words-again" data-ginger-heading="ginger-可以再次显示助记词吗" aria-hidden="true"></span>

### Ginger 可以再次显示助记词吗？

创建流程警告以后不会再次显示。**Wallet Settings** → **Tools** → **Verify Recovery Words** 检查你提供的词，不揭示忘记的备份。如果仍能访问但备份丢失，先建立并验证新钱包备份，再谨慎转移。

<span id="why-is-my-recovered-wallet-empty-or-missing-transactions" data-ginger-heading="为什么恢复钱包为空或缺少交易" aria-hidden="true"></span>

### 为什么恢复钱包为空或缺少交易？

检查所选钱包、原始助记词、准确口令，以及同步和恢复是否完成。口令输入错误可打开不同有效钱包，而不报告密码错误。更改设置前保留旧文件并比较已知交易；[恢复排障](/zh-cn/help/troubleshooting/#balance-recovery-and-receiving)提供初步检查。

<span id="the-sender-says-paid-why-have-i-received-nothing" data-ginger-heading="发送方说已付款为什么没收到" aria-hidden="true"></span>

### 发送方说已付款，为什么没收到？

索取比特币交易 ID，检查目标收款地址和网络。服务可在广播比特币交易之前将订单标记已支付，Ginger 也需同步才显示。要求发送方再付款前，检查交易及本地进度；参阅[收款排障](/zh-cn/help/troubleshooting/#balance-recovery-and-receiving)。

<span id="will-changing-the-network-make-missing-bitcoin-appear" data-ginger-heading="更改网络会显示缺失比特币吗" aria-hidden="true"></span>

### 更改网络会显示缺失比特币吗？

真实比特币链上交易使用 Main。另一网络有不同的币；选择它不会移动或恢复主网资金。检查目标钱包和同步，不要只为连接指示变好而更改网络。

<span id="why-has-a-receiving-address-disappeared-does-it-expire" data-ginger-heading="收款地址为何消失会过期吗" aria-hidden="true"></span>

### 收款地址为何消失？会过期吗？

付款或隐藏后，地址可离开待收款列表，但不使密钥失效。旧地址仍可收比特币，所以保留备份。每笔新付款使用新地址，避免同一公开地址直接归集收款。

<span id="why-are-receive-or-send-missing" data-ginger-heading="为什么-receive-或-send-缺失" aria-hidden="true"></span>

### 为什么 Receive 或 Send 缺失？

恢复可能仍在扫描，完成前会隐藏常规钱包操作。仅观察钱包花费也需签名设备或其他支持路径。重装或创建替代助记词前，检查钱包类型和进度。

<span id="i-lost-my-authenticator-or-my-2fa-code-is-rejected-what-now" data-ginger-heading="身份验证器丢失或-2fa-代码被拒绝怎么办" aria-hidden="true"></span>

### 身份验证器丢失或 2FA 代码被拒绝，怎么办？

检查正确条目、手机时间和 Ginger Tor/服务连接。保留现有钱包和 2FA 文件；重装不能重建丢失身份验证器秘密。助记词加准确原始口令提供独立密钥恢复路径；更改文件前使用 [2FA 排障](/zh-cn/help/troubleshooting/#2fa-and-hardware)。

<span id="connection-and-updates" data-ginger-heading="连接与更新" aria-hidden="true"></span>

## 连接与更新

<span id="do-i-need-tor-browser-or-a-vpn-to-make-ginger-work" data-ginger-heading="ginger-需要-tor-browser-或-vpn-吗" aria-hidden="true"></span>

### Ginger 需要 Tor Browser 或 VPN 吗？

Ginger 内置 Tor 用于常规钱包连接；仅运行钱包不需要安装 Tor Browser。独立浏览器或 VPN 不会自动修复同步，也不隐藏发送给服务商的信息。按照[连接检查](/zh-cn/help/troubleshooting/#connection-or-synchronization)时，保持常规 Tor 保护开启。

<span id="why-is-ginger-still-connecting-or-synchronizing" data-ginger-heading="为什么-ginger-仍在连接或同步" aria-hidden="true"></span>

### 为什么 Ginger 仍在连接或同步？

首次扫描或恢复可能需要时间；停滞扫描可能表示连接或本地问题。检查网络、时钟、可用存储和已配置节点；进度停止时记录准确状态。遵循[连接排障](/zh-cn/help/troubleshooting/#connection-or-synchronization)，不要反复重启或删除钱包数据。

<span id="why-did-reinstalling-not-reset-a-broken-setting" data-ginger-heading="为什么重装没有重置出问题的设置" aria-hidden="true"></span>

### 为什么重装没有重置出问题的设置？

应用文件和钱包数据分开存储，普通重装可保留相同配置和钱包。更改数据前保留备份并诊断实际错误。不要把删除整个数据文件夹当作余额缺失或等待状态的通用修复。

<span id="coinjoin-basics" data-ginger-heading="coinjoin-基础" aria-hidden="true"></span>

## CoinJoin 基础

<span id="why-is-coinjoin-waiting-instead-of-starting" data-ginger-heading="为什么-coinjoin-等待而不开始" aria-hidden="true"></span>

### 为什么 CoinJoin 等待而不开始？

阅读状态：钱包可能需要确认、可接受手续费、其他参与者、连接或符合条件的币。等待本身不意味着资金丢失。[CoinJoin 排障表](/zh-cn/help/troubleshooting/#coinjoin-does-not-start)说明已发布消息及各自首要处理。

<span id="what-is-the-minimum-amount-and-why-are-some-coins-left-behind" data-ginger-heading="最低金额多少为什么有些币留在原处" aria-hidden="true"></span>

### 最低金额多少，为什么有些币留在原处？

没有保证参与的钱包总余额。每个可用币必须满足轮次条件，以及钱包资格与成本检查；一些小额、未确认或排除币可能留在轮次之外。不要仅为符合旧指南中的最低额就合并或补充资金。

<span id="how-long-will-it-take-and-how-many-rounds-do-i-need" data-ginger-heading="需要多久多少轮" aria-hidden="true"></span>

### 需要多久，多少轮？

没有保证时长或通用轮次数。确认、费用、参与者、你的币和所选目标都重要。检查实际状态和已完成成本，不要把时间偏好当作承诺期限。

<span id="why-did-my-balance-decrease-if-coinjoin-was-described-as-free" data-ginger-heading="coinjoin-被称为免费为什么余额减少" aria-hidden="true"></span>

### CoinJoin 被称为免费，为什么余额减少？

协调器费用豁免不免除矿工手续费，重复完成的轮次都可能花钱。也检查输出是否到其他钱包，以及两边是否同步。变化不明时暂停并核对完成交易；不要认为每次意外减少都属正常费用。

<span id="what-coordinator-fee-does-ginger-currently-advertise" data-ginger-heading="ginger-当前宣传的协调器费用是什么" aria-hidden="true"></span>

### Ginger 当前宣传的协调器费用是什么？

当前设置下，每个 0.03 BTC（3 000 000 聪）或更低的输入不收协调器费用，包括恰好 0.03 BTC。超过阈值时，按完整输入价值收取 0.3%，除非有其他豁免，例如符合条件的再次参与。阈值逐输入独立适用，不针对钱包总余额。矿工手续费仍适用。参与前核对[当前 Ginger 费用说明](https://gingerwallet.io/)及提供轮次。

<span id="can-i-stop-coinjoin-or-turn-off-the-computer" data-ginger-heading="可以停止-coinjoin-或关闭电脑吗" aria-hidden="true"></span>

### 可以停止 CoinJoin 或关闭电脑吗？

使用控制面板暂停控件停止后续参与，并让关键阶段完成。休眠、断网或强制关机可能中断活动轮次；使用正常退出，等待关闭流程完成。已广播交易在应用关闭后继续存在于比特币网络。

<span id="why-is-there-a-transaction-when-i-never-pressed-send" data-ginger-heading="从未按-send为什么有交易" aria-hidden="true"></span>

### 从未按 Send，为什么有交易？

启用自动 CoinJoin 后，可以产生共享交易，无须每次通过 **Send** 普通付款。查看交易、自有输出、费用及输出钱包选择，不要假定无法解释的花费一定是 CoinJoin。仍不明或密钥可能暴露时，保留记录并保护剩余资金。

<span id="can-i-spend-at-99-and-does-100-mean-i-am-anonymous" data-ginger-heading="99-时能花费吗100-意味着匿名吗" aria-hidden="true"></span>

### 99% 时能花费吗？100% 意味着匿名吗？

资金可花费且发送流程可用时，可以普通付款；隐私百分比不是比特币花费要求。它是所选目标下 Ginger 本地估计，不保证别人知道什么。付款、复用地址或掌握身份信息的交易所仍可建立关联。

<span id="why-is-the-play-control-missing-when-all-funds-are-private" data-ginger-heading="所有资金私密时为什么启动控件缺失" aria-hidden="true"></span>

### 所有资金私密时，为什么启动控件缺失？

所有资金达到目标时，常规手动控制面板可能隐藏启动。正常启动也拒绝只含私密可用币的集合，所以另选目的地不能强制下一轮。只想移动这些资金时，考虑普通付款。

<span id="payments-and-hardware" data-ginger-heading="付款与硬件" aria-hidden="true"></span>

## 付款与硬件

<span id="why-is-a-payment-still-pending-after-the-estimated-time" data-ginger-heading="超过预计时间为什么付款仍待确认" aria-hidden="true"></span>

### 超过预计时间，为什么付款仍待确认？

估计不是期限：竞争交易和不规则区块产生会影响确认。查看历史；若 Ginger 提供 **Speed Up Transaction**，使用前检查额外手续费。连接错误或延迟不是向收款人再发一笔付款的理由。

<span id="can-i-cancel-a-payment-or-recover-one-sent-to-the-wrong-address" data-ginger-heading="可以取消付款或取回发错地址的钱吗" aria-hidden="true"></span>

### 可以取消付款或取回发错地址的钱吗？

Ginger 无法撤销已确认付款。确认前可能为适合交易提供 **Cancel Transaction**，但它是可能输给原交易确认的替换尝试。结果确定前，不要向收款人承诺原付款已取消。

<span id="why-are-there-insufficient-funds-when-my-balance-looks-large-enough" data-ginger-heading="余额看起来足够为什么资金不足" aria-hidden="true"></span>

### 余额看起来足够，为什么资金不足？

显示总额并非总能全部花费：资金可能未确认、暂参与 CoinJoin，或扣费后不足。检查所选钱包、金额和最终预览。全部发送时，手续费可能减少到账金额，因此将收款额与固定账单比较。

<span id="why-did-my-payment-create-another-address-or-leave-change" data-ginger-heading="为什么付款产生另一个地址或留下找零" aria-hidden="true"></span>

### 为什么付款产生另一个地址或留下找零？

付款可花费较大份额比特币，并将剩余价值以找零返还自己的钱包。新找零地址正常，不意味着转给陌生人。无需手动转回；任何金额无法解释时，查看完整交易。

<span id="can-i-use-a-hardware-wallet-including-after-coinjoin" data-ginger-heading="可以用硬件钱包包括-coinjoin-后吗" aria-hidden="true"></span>

### 可以用硬件钱包，包括 CoinJoin 后吗？

Ginger 支持兼容硬件钱包记录的接收和签名流程。硬件助记词留在设备恢复路径，不放入电脑。硬件钱包可接收符合条件的 CoinJoin 输出，但不是常规 Ginger CoinJoin 签名来源；可选路由是[进阶问题](/zh-cn/help/advanced-faq/#can-coinjoin-send-directly-to-my-hardware-wallet)。

<span id="will-an-exchange-accept-my-bitcoin-after-coinjoin" data-ginger-heading="coinjoin-后交易所会接受比特币吗" aria-hidden="true"></span>

### CoinJoin 后交易所会接受比特币吗？

Ginger 可准备普通比特币付款，但不保证服务商接受或账户政策。发送或卖出前检查目标交易所当前要求。高隐私评分不是接受证书，额外钱包操作也无法承诺此结果。

<span id="getting-help-safely" data-ginger-heading="安全求助" aria-hidden="true"></span>

## 安全求助

<span id="what-can-i-share-with-support-and-where-do-i-report-a-bug" data-ginger-heading="可以与客服分享什么哪里报告缺陷" aria-hidden="true"></span>

### 可以与客服分享什么，哪里报告缺陷？

使用 [Ginger 官方仓库](https://github.com/GingerPrivacy/GingerWallet/issues)链接，提供版本、操作系统、准确错误和非秘密步骤。分享日志前检查；切勿发送助记词、口令、身份验证器代码或完整钱包数据文件夹。客服不需要网站钱包验证或激活付款；参阅[如何报告有用问题](/zh-cn/help/troubleshooting/#report-a-useful-issue)。

<span id="about-this-manual" data-ginger-heading="关于本手册" aria-hidden="true"></span>

## 关于本手册

本手册译自描述 Ginger v2.0.26 的英文手册，并保留其英文界面标签。文档及翻译可能有误。Ginger 不保证准确性；继续前在应用中核实关键细节。发现错误时，[在文档仓库报告](https://github.com/GingerPrivacy/GingerDoc/issues)，不要提供钱包秘密。
