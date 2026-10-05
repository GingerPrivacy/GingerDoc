---
title: "Ginger Wallet und Sparrow Wallet: Privatsphäre, Kontrolle und Kompromisse"
description: "Vergleiche CoinJoin, Netzwerkprivatsphäre, Hardware-Wallets, Multisig, Transaktionskontrolle und Gebühren, um die passende Wallet zu wählen."
doc_id: "compare.ginger-vs-sparrow"
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet und Sparrow Wallet sind quelloffene Bitcoin-Desktop-Wallets mit eigener Schlüsselkontrolle. Beide unterstützen normale Zahlungen, Hardware-Wallets und bewusste Coin-Auswahl.

**Ginger bietet CoinJoin mit bereits konfigurierter Koordinatorverbindung. Sparrow bietet mehr Wallet-Einrichtungen und Werkzeuge zur Transaktionsprüfung und -signierung einschließlich Multisig.** Deine Wahl hängt vom benötigten Ablauf und der Verantwortung ab, die du übernehmen möchtest.

Zuletzt geprüft: **14. September 2026**. Versionsumfang: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) und [Sparrow 2.5.4](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4). Dieser Vergleich behandelt dokumentierte Abläufe dieser Versionen; er misst nicht Geschwindigkeit, Zuverlässigkeit oder Anonymität.

<span id="at-a-glance" data-ginger-heading="auf-einen-blick" aria-hidden="true"></span>

## Auf einen Blick

| Frage | Ginger Wallet | Sparrow Wallet |
| --- | --- | --- |
| Wer kontrolliert Signierschlüssel? | Du, in Software oder unterstützter Hardware. | Du, über konfigurierte Software- oder Hardware-Signierer. |
| Ist koordinierter CoinJoin eingebaut? | Ja, mit mitgelieferter Koordinatorverbindung. | Keine aktuelle Whirlpool-Integration; andere Werkzeuge bleiben. |
| Wie bekommt die Wallet ihren Verlauf? | Kompakte Filter und lokale Blockverarbeitung; Tor ist standardmäßig aktiv. | Öffentlicher Electrum-Server, eigener Bitcoin Core oder privater Electrum-Server; Tor wird unterstützt. |
| Kann ich Hardware nutzen? | Ja, unterstützte Geräte und Datei-PSBT. | Ja, unterstützte USB-, QR- und SD-Karten-Abläufe. |
| Kann ich Multisig einrichten? | Keine allgemeine Einrichtung in dokumentierter Oberfläche. | Ja, mehrere Signierer und gewählte Signierschwelle. |
| Kann ich einzelne Coins wählen? | Ja, über Manual Control. | Ja, mit detaillierter Transaktionsprüfung und -bearbeitung. |
| Welche Gebühren entstehen? | Mining-Gebühren; CoinJoin kann auch Koordinatorgebühren und kleine Reste verursachen. | Mining-Gebühren; zusätzliche Inputs und Outputs können Kosten erhöhen. |

Die folgenden Abschnitte erläutern diese Unterschiede und verlinken relevante Anleitungen.

<span id="privacy-and-coinjoin-different-tools-for-different-links" data-ginger-heading="privatsphäre-und-coinjoin-werkzeuge-für-unterschiedliche-verknüpfungen" aria-hidden="true"></span>

## Privatsphäre und CoinJoin: Werkzeuge für unterschiedliche Verknüpfungen

Ein Bitcoin-Kontostand besteht aus einzelnen Coins, auch UTXOs genannt. Gemeinsame Ausgabe kann ihre Geschichte verknüpfen. CoinJoin kombiniert Teilnehmerinputs in einer Transaktion und erschwert manche Eigentumsableitungen.

Gingers [veröffentlichte Konfiguration](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) enthält die Koordinatorverbindung. Nach Backup einer Software-Wallet und bestätigtem Empfang kannst du die [CoinJoin-Steuerungen](/de/using-ginger/coinjoin/) prüfen und teilnehmen. Der Koordinator organisiert ohne deine Signierschlüssel. Verfügbarkeit, geeignetes Guthaben, Gebühren und ausreichend Teilnahme beeinflussen weiterhin den Abschluss.

Sparrow entfernte seinen Whirlpool-Client in [Version 1.9.0](https://github.com/sparrowwallet/sparrow/releases/tag/1.9.0). Alte Anleitungen für integriertes Whirlpool-Mixing beschreiben die aktuelle Version nicht.

Sparrow bietet weiterhin weniger aufschlussreiche Ausgaben. Die Transaktionsoption **Privacy** kann eine Stonewall-Transaktion mit einem zusätzlichen Output gleicher Zahlungshöhe erstellen. Alle Inputs gehören deiner Wallet; sie erzeugt Mehrdeutigkeit ohne Mischung fremden Guthabens. Nötig sind geeignete Coins, genug Guthaben und passende Adresstypen; zusätzliche Inputs und Outputs können Mining-Kosten erhöhen. Sparrow unterstützt außerdem BIP47-Zahlungscodes für neue Zahlungsadressen. Siehe [Spending Privately](https://sparrowwallet.com/docs/spending-privately.html).

Beide unterstützen PayJoin-Senden in kompatiblen Abläufen. PayJoin beteiligt einen kompatiblen Empfänger am Zahlungsaufbau, getrennt von Mixing-Runden eines Koordinators. Ginger benötigt hierfür eine Software-Wallet. Siehe [Gingers PayJoin-Anleitung](/de/payments/payjoin-message-signing/) und [Sparrows PayJoin-Updates](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4).

Keines dieser Werkzeuge löscht Börsenaufzeichnungen oder macht die Blockchain privat. Spätere Coin-Kombinationen, Adresswiederverwendung oder mit einem Empfänger geteilte Informationen können neue Verknüpfungen offenlegen. Siehe [CoinJoin-Vertrauen und Grenzen](/de/learn-coinjoin/trust-and-limits/).

<span id="network-privacy-who-learns-about-your-wallet" data-ginger-heading="netzwerkprivatsphäre-wer-erfährt-von-deiner-wallet" aria-hidden="true"></span>

## Netzwerkprivatsphäre: Wer erfährt von deiner Wallet?

Ginger findet potenziell relevante Blöcke mit kompakten Filtern und verarbeitet heruntergeladene Daten lokal. Das reduziert die Notwendigkeit, Adresslisten an öffentliche Wallet-Server zu senden. Tor ist enthalten und für normale Verbindungen standardmäßig aktiv. Ginger bietet außerdem einen [optionalen Bitcoin-Core-Node](/de/settings-network/full-node-fees/). Lies [Tor und Synchronisierung](/de/using-ginger/tor/) für Verbindungsmodell und Grenzen.

Sparrow erlaubt einen öffentlichen Electrum-Server, eigenen Bitcoin Core oder privaten Electrum-Server. Öffentliche Server sind bequem, aber ihre Betreiber können Wallet-Abfragen verbinden und Aktivität erkennen. Die [Quick-Start-Anleitung](https://sparrowwallet.com/docs/quick-start.html) erklärt den Kompromiss; [Bitcoin Core verbinden](https://sparrowwallet.com/docs/connect-node.html) behandelt eigene Nodes.

Eigene Infrastruktur verhindert diese Abfragenoffenlegung an fremde öffentliche Betreiber. Sparrow unterstützt auch Tor-Verbindungen einschließlich privater Onion-Server. Die [Best-Practices-Anleitung](https://sparrowwallet.com/docs/best-practices.html) erläutert solche Einrichtungen.

Tor schützt Verbindungsmetadaten wie IP-Adressen, verbirgt aber keinen Anfrageinhalt vor dem Empfangsdienst. Eigene Nodes entfernen keine Eigentumshinweise bereits veröffentlichter Transaktionen. Wähle Netzwerkeinstellungen und Ausgabepraxis gemeinsam.

<span id="hardware-wallets-and-multisig" data-ginger-heading="hardware-wallets-und-multisig" aria-hidden="true"></span>

## Hardware-Wallets und Multisig

Beide Anwendungen bereiten Zahlungen vor, während unterstützte Hardware Schlüssel hält. Sparrow dokumentiert [USB-Hardware](https://sparrowwallet.com/docs/connected-wallet.html), [QR-Signierung](https://sparrowwallet.com/docs/airgapped-wallet-qr.html) und [SD-Karten-Signierung](https://sparrowwallet.com/docs/airgapped-wallet-sdcard.html). Der verfügbare Weg hängt von Gerät und Firmware ab.

Ginger unterstützt normale Hardware-Zahlungen und einen [PSBT-Dateiablauf](/de/hardware-wallets/psbt/). PSBTs enthalten Vorschlag und Informationen für getrennte Signierung. Ihre Existenz belegt nicht jede Wallet-Einrichtung; Gingers [Hardware-Anleitung](/de/using-ginger/hardware-wallet/) beschreibt die Grenzen der veröffentlichten Oberfläche.

Sparrow erstellt Multisig-Wallets mit gewählter erforderlicher Signaturzahl, etwa zwei aus drei. Das verteilt Signierbefugnis flexibler, verlangt aber mehr Einrichtung und Backups. Ginger bietet keine vergleichbare allgemeine Multisig-Einrichtung. Siehe Sparrows [Wallet-Erstellung](https://sparrowwallet.com/docs/quick-start.html#creating-your-first-wallet) für Richtlinienoptionen.

Ginger-CoinJoin verwendet eine Software-Wallet zum Signieren der teilnehmenden Inputs. Eine unterstützte in Ginger geladene Hardware-Wallet empfängt stattdessen Outputs. Das bedeutet weder Hardware-Signierung der Inputs noch Erreichen deines Privatsphäreziels. Die Zielauswahl wird nach Neustart zurückgesetzt. Folge [Gingers Cold-Storage-Anleitung](/de/hardware-wallets/exchange-to-cold-storage/) und gib Hardware-Wörter niemals zur CoinJoin-Aktivierung am Desktop ein.

<span id="transaction-control-and-everyday-use" data-ginger-heading="transaktionskontrolle-und-alltag" aria-hidden="true"></span>

## Transaktionskontrolle und Alltag

Beide Wallets beschriften Guthaben und wählen einzelne Zahlungscoins. Ginger zeigt sie unter **Wallet Coins**; **Send** → **Manual Control** erlaubt Auswahl und Prüfung des resultierenden Vorgangs. Siehe [Coin-Kontrolle und Verlauf](/de/payments/coin-control-history/).

Sparrows Diagramm und Editor zeigen Inputs, Outputs, Gebühren und Signierdetails mit Werkzeugen zur Prüfung vor Veröffentlichung. Seine [Funktionsübersicht](https://sparrowwallet.com/features/) erklärt die Kontrolle. Sie kann zu regelmäßiger PSBT-Arbeit oder dem Wunsch nach genauer Zahlungsaufbauprüfung passen.

Prüfe in beiden Empfänger, Inputs, Wechselgeld und Gebühr vor Autorisierung. Manuelle Auswahl kann nicht zusammengehöriges Guthaben weiterhin durch gemeinsame Ausgabe verknüpfen.

<span id="fees-and-service-conditions" data-ginger-heading="gebühren-und-dienstbedingungen" aria-hidden="true"></span>

## Gebühren und Dienstbedingungen

Normale On-Chain-Zahlungen haben in beiden Mining-Gebühren. Größe und Rate beeinflussen Kosten; zusätzliche Sparrow-Privatsphäre-Outputs können Zahlungen vergrößern.

Nach Gingers [dokumentierten Koordinatoreinstellungen](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi/WabiSabi/Backend/WabiSabiConfig.cs) sind Inputs **bis einschließlich 0.03 BTC** befreit. Größere bezahlen normalerweise **0.3 % ihres gesamten Werts**, mit Ausnahmen für geeignete Remixes. Die Schwelle gilt je Input, nicht für den Gesamtkontostand.

Ein gebührenpflichtiger 0.10-BTC-Input kostet beispielsweise 30 000 Satoshis Koordinatorgebühr plus Mining. CoinJoin kann kleine nicht zurückgegebene Verteilungsreste hinterlassen. Prüfe tatsächliche Bedingungen und [vollständige Kosten](/de/using-ginger/annonset/); Einstellungen sind keine künftigen Angebote. Sparrows normale Zahlungen kaufen keinen gleichwertigen Mixing-Dienst, weshalb Mining-Gebühren allein kein entsprechender CoinJoin-Preisvergleich sind.

Gingers Koordinatorbetreiber InvisibleBit LLC veröffentlicht Einschränkungen zu US-Standorten und Staatsangehörigkeit. Bedingungen erlauben Drittanbieterprüfungen und Coin-Ablehnung. Prüfe [aktuelle Bedingungen](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt). Eigene Schlüssel garantieren keine Zulassung. Berücksichtige bei Sparrow Privatsphäre und Verfügbarkeit deines Nodes oder Servers.

<span id="which-fits-your-needs" data-ginger-heading="was-passt-zu-dir" aria-hidden="true"></span>

## Was passt zu dir?

**Ginger kommt infrage, wenn CoinJoin mit mitgelieferter Verbindung Vorrang hat** und Gebühren und Bedingungen passen. Beginne mit [Ersten Schritten](/de/getting-started/) und prüfe nach deinem Backup die CoinJoin-Einstellungen.

**Sparrow kommt infrage für Multisig, besondere Hardware-Signierung oder detaillierte Transaktionskontrolle.** Wähle die Serververbindung bewusst und prüfe Unterstützung deiner konkreten Wallet-Einrichtung.

Beide können unterschiedliche Rollen erfüllen, etwa Ginger für CoinJoin und Sparrow für separate Hardware. Normale Übertragung kostet Mining und bleibt sichtbar; kombinierte Outputs können erneut verknüpfen. Gingers direktes Ziel muss eine unterstützte in Ginger geladene Wallet sein, nicht lediglich in Sparrow geöffnet. Halte unabhängige Backups und prüfe [Ausgaben nach CoinJoin](/de/learn-privacy/spending-after-coinjoin/) vor Kombinationen.
