---
doc_id: "settings-network.secret-hunt"
title: "Ginger Wallet 的 Secret Hunt"
description: "查找 Ginger Secret Hunt 活动结果，控制钱包参与，并了解活动服务收到的信息。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> 阅读级别：日常使用。需要完成本指南所述任务时，选择此页。

**Secret Hunt** 是 Ginger 的一项功能，显示与符合条件的 CoinJoin 活动相关的活动秘密。它与钱包隐私评分及普通收发比特币流程分开。活动是否可用取决于服务；存在此功能不代表承诺当前有活动、奖品或奖励。

<span id="view-and-control-participation" data-ginger-heading="查看并控制参与" aria-hidden="true"></span>

## 查看并控制参与

打开软件钱包菜单，选择 **Secret Hunt**。对话框以树状列表显示活动结果，包括发现的词或句子，以及收集齐活动所需秘密后出现的额外秘密。展开活动查看条目。

使用 **Enable/disable the use of this wallet for Secret Hunt.** 控制该钱包是否参与。已发布版本默认启用。关闭后，停用视图中的树状显示会清空，更新器也不再选择该钱包进行活动资格检查。它不会取消 CoinJoin、删除区块链交易或抹去已发送给服务的信息。

仅观察钱包不提供此入口。它不是硬件钱包的 CoinJoin 功能，也不要求在活动网站输入助记词。

<span id="what-is-shared" data-ginger-heading="分享哪些信息" aria-hidden="true"></span>

## 分享哪些信息

客户端从 Ginger 服务获取活动信息。资格检查时，它可以发送 CoinJoin 交易 ID、所选输入引用和密码学所有权证明。该证明在不发送私钥的情况下，为活动请求证明控制权。即使连接使用 Tor，这些仍是额外的应用层披露。

Tor 处理网络层暴露，但不会向请求接收方隐藏请求内容。如果不希望某钱包用于这些活动检查，关闭其 Secret Hunt 参与。活动列表请求和普通钱包网络活动，与这个每钱包开关分开。

<span id="missing-or-incomplete-results" data-ginger-heading="结果缺失或不完整" aria-hidden="true"></span>

## 结果缺失或不完整

结果取决于活动日期、符合条件的已确认活动、服务可用性及周期更新。轮次可以成功完成，却没有揭示新秘密。等待结果不表示比特币缺失。

不要假定奖励会补偿你，就额外产生需要手续费的交易。决定参与前，通过已验证来源阅读活动实际条款。忽略要求上传钱包文件，或向未经请求的支持地址发送额外“领取费用”的请求。
