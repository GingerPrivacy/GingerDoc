---
doc_id: "backup-recovery.two-factor-authentication"
title: "在 Ginger 中使用双因素认证"
description: "设置 Ginger 双因素认证，了解钱包文件加密、Tor 要求和恢复限制。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-the-default-2fa-state-of-gingerwallet"></span>
<span id="how-do-i-enable-2fa-in-gingerwallet"></span>
<span id="how-do-i-set-up-2fa-using-an-authenticator-app"></span>
<span id="what-is-the-purpose-of-the-2fagws-file"></span>
<span id="do-i-need-to-restart-the-application-after-enabling-2fa"></span>
<span id="how-does-the-login-process-change-after-enabling-2fa"></span>
<span id="how-do-i-disable-2fa"></span>
<span id="what-should-i-do-if-i-change-devices-or-lose-data"></span>
<span id="what-are-the-security-best-practices-for-using-gingerwallet"></span>
<span id="does-gingerwallet-store-any-personal-information"></span>
<span id="what-happens-if-i-lose-access-to-my-authenticator-app"></span>
<span id="how-does-gingerwallet-ensure-security-with-2fa"></span>
<span id="how-can-i-recover-my-labels-and-extra-options-for-my-wallet-if-ive-lost-the-2fa-key"></span>
<span id="why-does-ginger-wallet-require-an-8-digit-2fa-code"></span>
<span id="what-should-i-do-if-my-authenticator-app-only-provides-6-digit-codes"></span>

> 阅读级别：进阶指南。更改恢复或文件配置前，保留原始恢复信息和钱包文件。

Ginger 可选的双因素认证（2FA）增加应用启动检查和本地钱包文件加密。它与每个钱包的口令分开，不是要求每次花费都提供第二签名的比特币规则，也不能保护助记词备份免受同时知道口令的人使用。

<span id="understand-the-dependency-first" data-ginger-heading="先了解依赖" aria-hidden="true"></span>

## 先了解依赖

Ginger 通过 2FA 服务验证身份验证器代码，并获取解密受保护钱包文件所需的秘密。因此，正常 2FA 启动流程需要与该服务的有效连接。使用此功能必须启用 Tor。

本地 `2fa_info.gws` 文件保存客户端/服务器标识符。它不是助记词的加密副本，也不是独立恢复密钥。只复制该文件不能恢复钱包。钱包口令和启用 2FA 都不意味着每个标签、日志或附属文件受到相同加密。保护整个数据文件夹及其备份。

启用 2FA 前，确认每个需要恢复的软件钱包都有助记词和准确原始口令。也保留受保护的钱包和元数据文件副本。

<span id="enable-2fa" data-ginger-heading="启用-2fa" aria-hidden="true"></span>

## 启用 2FA

1. 打开 **Settings** → **Security**。需要时启用 **Network anonymization (Tor)**，并按提示重启使 Tor 生效。
2. 启用 **Two-factor authentication**。设置对话框显示身份验证器二维码。
3. 私下将二维码添加到身份验证器。它含秘密，不要分享。Ginger 设置需要兼容 SHA256 和八位代码的身份验证器；手动创建的默认六位条目不等效。
4. 输入当前代码并选择 **Verify**。验证失败时，检查手机时间同步，以及条目是否来自此次设置。
5. 按说明重启 Ginger，完成启动 2FA 提示。成功认证启动后，Ginger 获取加密秘密，并确保钱包和自动钱包备份 JSON 文件加密。

不要认为设置前或认证重启前复制的文件获得了新保护。旧备份需独立保护。启用开关不是删除唯一已知有效恢复资料的理由。

<span id="everyday-use-and-disabling" data-ginger-heading="日常使用与关闭" aria-hidden="true"></span>

## 日常使用与关闭

启动时输入当前身份验证器代码。应用加载后，各钱包口令和硬件设备批准仍有各自作用。已经解锁的电脑仍是安全隐患。

仍有访问权限时，要关闭 2FA，打开 **Settings** → **Security** 并关闭 **Two-factor authentication**。Ginger 移除额外钱包文件加密和本地 2FA 关联。常规软件钱包口令保护是独立的，仍然重要。如果备份流程依赖当前加密状态，请备份生成的文件。

<span id="lost-phone-missing-file-or-unavailable-service" data-ginger-heading="手机丢失文件缺失或服务不可用" aria-hidden="true"></span>

## 手机丢失、文件缺失或服务不可用

身份验证器丢失或服务中断可能阻止正常启动。先保留现有数据文件夹。代码被拒绝时检查时间和连接；反复覆盖安装不会重建丢失的身份验证器秘密。

软件钱包资金可在独立可信安装或干净应用环境中，使用原始助记词和口令恢复。更改旧文件前，验证已知历史和访问。恢复密钥不依赖保留旧 2FA 设置，但下载和同步 Ginger 仍需要正常网络服务。如果支持原始账户类型，兼容恢复软件也可能是一种选择。

标签和其他本地属性不能从助记词重建。调查元数据恢复前，保留 `.attr` 备份。设置或排查 2FA 时保留现有钱包数据。

恢复资料暴露后，创建新钱包并转移剩余资金，会改变控制资金的密钥。关闭 2FA 或重装应用不会使旧助记词失效。
