# Bitcoin terminology references

Use the localized Bitcoin Core messages and bitcoin.org terminology when reviewing the manual. Check the meaning in the English guide and the reference context before choosing a translated term. The references for this review are Bitcoin Core v31.1, commit `9be056a8a72b624dae9623b2f7bded92c2a21c91`, and bitcoin.org, commit `15f399d370f5d28669f479f5bcca2f19a5161c9b`.

| Language | Bitcoin Core translation | bitcoin.org vocabulary | bitcoin.org translation source |
| --- | --- | --- | --- |
| German | [bitcoin_de.ts](https://github.com/bitcoin/bitcoin/blob/9be056a8a72b624dae9623b2f7bded92c2a21c91/src/qt/locale/bitcoin_de.ts) | [Glossar](https://bitcoin.org/de/glossar) | [de.yml](https://github.com/bitcoin-dot-org/bitcoin.org/blob/15f399d370f5d28669f479f5bcca2f19a5161c9b/_translations/de.yml) |
| Spanish | [bitcoin_es.ts](https://github.com/bitcoin/bitcoin/blob/9be056a8a72b624dae9623b2f7bded92c2a21c91/src/qt/locale/bitcoin_es.ts) | [Vocabulario](https://bitcoin.org/es/vocabulario) | [es.yml](https://github.com/bitcoin-dot-org/bitcoin.org/blob/15f399d370f5d28669f479f5bcca2f19a5161c9b/_translations/es.yml) |
| French | [bitcoin_fr.ts](https://github.com/bitcoin/bitcoin/blob/9be056a8a72b624dae9623b2f7bded92c2a21c91/src/qt/locale/bitcoin_fr.ts) | [Vocabulaire](https://bitcoin.org/fr/vocabulaire) | [fr.yml](https://github.com/bitcoin-dot-org/bitcoin.org/blob/15f399d370f5d28669f479f5bcca2f19a5161c9b/_translations/fr.yml) |
| Russian | [bitcoin_ru.ts](https://github.com/bitcoin/bitcoin/blob/9be056a8a72b624dae9623b2f7bded92c2a21c91/src/qt/locale/bitcoin_ru.ts) | [Vocabulary](https://bitcoin.org/ru/vocabulary) | [ru.yml](https://github.com/bitcoin-dot-org/bitcoin.org/blob/15f399d370f5d28669f479f5bcca2f19a5161c9b/_translations/ru.yml) |
| Brazilian Portuguese | [bitcoin_pt_BR.ts](https://github.com/bitcoin/bitcoin/blob/9be056a8a72b624dae9623b2f7bded92c2a21c91/src/qt/locale/bitcoin_pt_BR.ts) | [Vocabulário](https://bitcoin.org/pt_BR/vocabulario) | [pt_BR.yml](https://github.com/bitcoin-dot-org/bitcoin.org/blob/15f399d370f5d28669f479f5bcca2f19a5161c9b/_translations/pt_BR.yml) |

Read the Core message's context as well as its translated text. Some entries are marked `unfinished`, and a term can have conflicting translations in different contexts. Some bitcoin.org entries still contain English fallback text. Prefer clear, consistent localized usage supported by the relevant reference; retain a valid technical term when the available alternatives are ambiguous.

Keep these distinctions in every language:

- An input spends a previous output; a coin in these guides is a UTXO. Change belongs to the payer's wallet. A coin's amount is different from a transaction's byte size.
- A transaction fee is an amount. A fee rate is an amount per unit of virtual transaction size. Coordinator fees and mining fees are separate charges.
- The passphrase in Core's wallet-encryption dialog protects its wallet file. Ginger's BIP39 passphrase participates in deriving wallet keys with the recovery words. Do not replace that meaning with an application password, device PIN or 2FA code.
- A watch-only wallet lacks local signing keys. A separate hardware device or supported signer can provide signing. Preserve that boundary when choosing the local name.
- PSBT is a transaction format, not a guarantee that a file already contains a signature. Keep the unsigned, partially signed and ready-to-broadcast states distinct.

Core and bitcoin.org do not provide a translation standard for every Ginger feature. Keep CoinJoin, WabiSabi and the wallet's privacy estimates faithful to the English guide without implying that Core implements them. Preserve exact English application labels, protocol names, identifiers, code examples, numeric values and existing links. Regenerate heading aliases with the importer after changing translated headings, then run the checks described in [the navigation notes](../navigation/README.md).
