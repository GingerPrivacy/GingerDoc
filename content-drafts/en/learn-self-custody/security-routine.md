---
doc_id: "learn-self-custody.security-routine"
title: "Build a Recoverable Bitcoin Security Routine"
description: "Create practical habits for wallet backups, device verification, phishing resistance, and access after losing a computer or phone."
lang: "en-US"
verified_release: "v2.0.26"
---

# Build a Recoverable Bitcoin Security Routine

A useful security routine protects against unauthorized access while leaving an understandable path for legitimate recovery. Adding secrets without documenting their roles can make accidental loss more likely.

## Record the recovery plan

Keep a private inventory of your wallets, what kind of signer each uses, where the backups are, and whether a BIP39 passphrase is required. The inventory need not contain the secrets themselves. It should be useful after the computer or phone is gone, not only while you remember how everything was set up.

Preserve enough wallet-convention information to recognize the correct recovered account, especially when using hardware devices or several wallets. Keep labels and metadata backups when they are important for records; the blockchain cannot rebuild the private notes you wrote.

If you intend another person to recover funds after incapacity or death, arrange a clear, tested access plan appropriate to your circumstances. Avoid casually sharing all secrets now or assuming the person will guess which password you meant. Estate and access arrangements can have legal implications that require local professional advice; this page does not prescribe a legal structure.

## Check before funding and before signing

Verify the application download, confirm that the wallet opens, and check the backup. For a hardware wallet, compare receiving addresses on the device and inspect each payment's destination and amount before signing.

Use a small amount to learn a new workflow. Reconcile what was sent, what arrived, and what fees were paid. Increasing the amount does not make an unfamiliar workflow easier to diagnose.

Keep the computer and signing device updated through authenticated sources. An update notice in a private message is not proof that a file is legitimate. Never install “recovery software” or allow remote control merely because a stranger says your coins need synchronization.

## Understand Ginger 2FA

Ginger's optional 2FA adds local wallet-file encryption and a startup verification with a service. It can be useful against some forms of local-file access, but introduces a normal-startup dependency on the authenticator and service.

Keep recovery words and the original passphrase independently available. Do not assume `2fa_info.gws` is an offline master recovery key. Nor should you assume 2FA will stop an attacker who already has the words and passphrase, or prevent an authorized transaction from an unlocked application.

## If a secret may be exposed

Changing a computer password, disabling 2FA, or reinstalling Ginger does not revoke copied Bitcoin keys. If you still control the funds, prepare a new wallet with new verified recovery information on a trusted device and carefully transfer the remaining funds. Check the receiving address and transaction result.

Preserve relevant records while investigating, but never post the old secret publicly to ask whether it is compromised. A purported support agent who asks for words, passphrase, or a wallet file can use that information against you.

## Keep privacy separate from key protection

An observer knowing a transaction does not necessarily have the keys to spend it. Conversely, a thief with keys can spend funds whose transaction history was hard to analyze. Use recovery protection and device verification for the second problem, and address practices, Tor, coin selection, and considered CoinJoin use for the first.

Review the routine after adding a wallet, changing hardware, enabling 2FA, or moving backups. Verify the parts that changed rather than repeatedly exposing every secret for an unnecessary full recovery exercise.
