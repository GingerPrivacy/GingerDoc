---
doc_id: "learn-self-custody.basics"
title: "Bitcoin Self-Custody: Backups, Passphrases, and Hardware Wallets"
description: "Learn who can spend your bitcoin, what makes a recovery backup complete, and how Ginger software and hardware wallets differ."
lang: "en-US"
verified_release: "v2.0.26"
---

# Bitcoin Self-Custody: Backups, Passphrases, and Hardware Wallets

Self-custody means controlling the keys that authorize spending rather than relying on an account provider to authorize a withdrawal for you. It gives you direct responsibility for backup, device security, and payment verification. A wallet application is one tool in that arrangement, not the only thing you need to preserve.

## Keys, records, and recovery

Bitcoin ownership is enforced through transaction spending conditions on the network. Your wallet holds or accesses the information needed to satisfy them. Installing the same application on a replacement computer does not recreate those secrets.

For a Ginger software wallet, the recovery words and original passphrase recreate the keys. Local wallet files can preserve additional context such as labels and settings. An authenticator, a hardware device PIN, and a file copied from the computer each serve different purposes; none should be assumed to replace the word backup.

## The passphrase changes the wallet

Ginger uses a BIP39 passphrase with its recovery words. A different passphrase produces different keys. This is why a recovery can complete successfully and still display an empty wallet when you mistyped the original passphrase. [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) defines that relationship.

Record whether you used one and preserve it accurately. Choose protection you can recover, rather than a complex secret that only exists in memory. Store recovery instructions so a future you can distinguish the wallet passphrase from the computer login or authenticator code.

## Software versus hardware

| Setup | Where signing happens | Practical responsibility |
| --- | --- | --- |
| Ginger software wallet | On the desktop using its available secret | Protect the computer and recovery information; it must be able to sign for automatic CoinJoin |
| Hardware wallet used through Ginger | On the device for supported operations | Verify details on the device and preserve the manufacturer's recovery backup |
| Watch-only record without a signer | It cannot authorize a spend on its own | Protect its privacy-sensitive public data and retain access to a separate signer |

A hardware wallet can reduce exposure of keys to desktop malware, but you can still authorize a malicious payment if you fail to inspect the device's screen. Importing its seed into a desktop wallet changes the security arrangement: those keys are now exposed to that computer.

## Recovery is part of the setup

Before relying on a wallet, make sure you can find and understand its backup. For an accessible Ginger software wallet, **Verify Recovery Words** checks the words you provide. Keep the original passphrase available too. For a hardware wallet, use the manufacturer's appropriate backup-check procedure without typing the seed into the desktop.

Keep more than application files. Downloaded installers can be obtained again; a missing secret cannot be fetched from the project's website. Think about disk failure, a lost device, and access to your backup location. Bitcoin.org's [wallet-security guidance](https://bitcoin.org/en/secure-your-wallet) discusses backups and device protection as complementary practices.

## Evaluate a wallet with evidence

Use official releases, verify signatures, and read the limits of the features you intend to use. Open source makes inspection possible; it does not establish that every binary or dependency has been audited. External listings such as [Bitcoin.org's Ginger entry](https://bitcoin.org/en/wallets/desktop/windows/ginger/) and [WalletScrutiny's Ginger page](https://walletscrutiny.com/desktop/gingerwallet/) offer additional context. Check their scope and dates rather than treating a listing as a guarantee about your installed version.

Ginger brings software-wallet recovery, hardware integration, and privacy tools into a desktop workflow. Decide which roles you need, then continue with [Build a recoverable security routine](security-routine.md).
