---
title: "Ginger Wallet und Wasabi Wallet: Einrichtung, Gebühren und Kompromisse"
description: "Vergleiche Koordinator-Einrichtung, CoinJoin-Kosten, Hardware-Abläufe und Privatsphäregrenzen, um die passende Wallet zu wählen."
doc_id: "compare.ginger-vs-wasabi"
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet und Wasabi Wallet sind quelloffene Bitcoin-Desktop-Wallets, mit denen du eigene Schlüssel hältst und CoinJoin nutzt. Die wichtigsten praktischen Unterschiede beim CoinJoin-Einstieg betreffen Koordinator-Einrichtung und Koordinatorgebühren.

**Ginger liefert eine konfigurierte Koordinatorverbindung. Wasabi verlangt vor CoinJoin die Konfiguration eines Koordinators.** Gingers Koordinator berechnet normalerweise 0.3 % auf geeignete Inputs über 0.03 BTC, mit den unten beschriebenen Ausnahmen. Aktuelles Wasabi akzeptiert nur Runden ohne Koordinatorgebühr. Beide verursachen Mining-Gebühren.

Zuletzt geprüft: **7. September 2026**. Versionsumfang: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) und [Wasabi v2.8.2](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.8.2). Dieser Vergleich behandelt dokumentierte Abläufe, keinen Geschwindigkeitstest, Zuverlässigkeitsvergleich oder Anonymitätsnachweis.

<span id="at-a-glance" data-ginger-heading="auf-einen-blick" aria-hidden="true"></span>

## Auf einen Blick

| Frage | Ginger Wallet | Wasabi Wallet |
| --- | --- | --- |
| Wer kontrolliert Signierschlüssel? | Du; der Koordinator hält keinen für dich verwahrten Wallet-Kontostand. | Du; CoinJoin ist ein selbstverwahrter Ablauf. |
| Was muss ich für CoinJoin einrichten? | Koordinatorverbindung ist enthalten; Wallet-Einstellungen vor Start prüfen. | Kompatiblen Koordinator wählen und konfigurieren, dann Wallet-Einstellungen prüfen. |
| Gibt es Koordinatorgebühren? | Normalerweise 0.3 % des gesamten gebührenpflichtigen Inputs; bis 0.03 BTC und geeignete Remixes sind befreit. | Der aktuelle Client akzeptiert Runden ohne Koordinatorgebühr. |
| Kann es weitere Kosten geben? | Ja: Mining-Gebühren und möglicherweise kleine nicht zurückgegebene Reste. | Ja: Mining-Gebühren und möglicherweise kleine nicht zurückgegebene Reste. |
| Kann Hardware CoinJoin-Inputs signieren? | Nicht über den normalen Hardware-Ablauf dieser Version. | Nicht über den aktuellen Hardware-Ablauf. |
| Können Outputs auf Hardware gehen? | Ja, über unterstützte geladene Hardware als Outputziel. | Ja, über CoinJoin-to-wallet mit unterstützter geladener Wallet. |

Die folgenden Abschnitte erklären Bedingungen dieser Unterschiede und verlinken passende Dokumentation.

<span id="coordinator-setup-one-less-decision-with-ginger" data-ginger-heading="koordinator-einrichtung-eine-entscheidung-weniger-mit-ginger" aria-hidden="true"></span>

## Koordinator-Einrichtung: Eine Entscheidung weniger mit Ginger

Ein Koordinator organisiert eine Runde zwischen teilnehmenden Wallets. Er ist ein von der Wallet-Anwendung getrennter Dienst und benötigt weder Wiederherstellungswörter noch private Schlüssel.

Gingers [veröffentlichte Konfiguration](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) liefert eine Koordinatorverbindung. Nach Erstellung und Backup einer Software-Wallet prüfst du Einstellungen und startest, ohne zuerst eine Koordinatoradresse suchen zu müssen. Siehe [CoinJoin in Ginger verwenden](/de/using-ginger/coinjoin/).

Wasabis [CoinJoin-Anleitung](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html) verlangt vor Teilnahme einen konfigurierten Koordinator. Sie unterstützt manuellen Start und optionale automatische Teilnahme. Die Koordinatorwahl bedeutet auch die Prüfung seiner Verfügbarkeit und Richtlinien.

Gingers praktischer Vorteil ist hier der kürzere Einrichtungsweg. Eine mitgelieferte Verbindung garantiert keine sofortige Runde: Bestätigtes Guthaben, akzeptable Gebühren, verfügbarer Dienst und ausreichend Inputs bleiben nötig.

<span id="privacy-with-future-use-in-mind" data-ginger-heading="privatsphäre-mit-blick-auf-künftige-nutzung" aria-hidden="true"></span>

## Privatsphäre mit Blick auf künftige Nutzung

Vielleicht möchtest du heute Bitcoin-Privatsphäre verbessern und später eine Börse nutzen. Beim CoinJoin teilen deine Coins eine Transaktion mit fremden Inputs. Diese Beziehungen können bei der Einzahlungsprüfung eines Verwahrungsdienstes relevant werden.

Gingers Koordinator überprüft teilnehmende Inputs und schließt jene aus, die Risikoprüfungen nicht bestehen. Ziel ist weniger Kontakt mit markierten fremden Inputs, einer möglichen Quelle späterer Zusatzprüfung deiner Bitcoin-Nutzung.

Bei Wasabi hängt vergleichbare Prüfung vom gewählten Koordinator ab. Jeder Empfangsdienst trifft trotzdem eigene Akzeptanzentscheidungen.

<span id="fees-compare-the-complete-cost" data-ginger-heading="gebühren-die-vollständigen-kosten-vergleichen" aria-hidden="true"></span>

## Gebühren: Die vollständigen Kosten vergleichen

<span id="gingers-coordinator-fee" data-ginger-heading="gingers-koordinatorgebühr" aria-hidden="true"></span>

### Gingers Koordinatorgebühr

Die Befreiungsschwelle gilt **pro Input**, auch Coin oder UTXO genannt. Sie begrenzt weder Wallet-Guthaben noch die gemeinsam registrierte Summe.

Nach aktuellen Koordinatoreinstellungen gilt:

- Ein Input **bis einschließlich 0.03 BTC** zahlt keine Koordinatorgebühr.
- Ein größerer Input zahlt normalerweise **0.3 % seines gesamten Werts**.
- Geeignete Remixes können ebenfalls befreit sein, abhängig von Eignung und angebotener Runde.

Für einen Input ohne weitere Ausnahme:

| Inputwert | Koordinatorgebühr | Mining-Gebühr |
| --- | --- | --- |
| 0.03 BTC | 0 Satoshis | Zusätzlich |
| 0.10 BTC | 0.0003 BTC oder 30 000 Satoshis | Zusätzlich |

Diese Beispiele erklären Berechnungen, keine Angebote für künftige Runden. Vollständige Regeln und weitere Beispiele stehen unter [CoinJoin-Gebühren und Privatsphäre-Fortschritt](/de/using-ginger/annonset/).

<span id="wasabis-coordinator-fee-policy" data-ginger-heading="wasabis-koordinatorgebührenrichtlinie" aria-hidden="true"></span>

### Wasabis Koordinatorgebührenrichtlinie

Wasabi akzeptiert seit Version 2.2.0.0 nur Runden ohne Koordinatorgebühr. Mining-Gebühren bleiben zahlbar. Die Dokumentation beschreibt außerdem seltene Outputverteilungsreste bis 10 000 Satoshis je CoinJoin, die an den Koordinator gehen. Siehe [Wasabis Gebührenerklärung](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#fees).

<span id="budget-beyond-the-headline-percentage" data-ginger-heading="über-den-beworbenen-prozentsatz-hinaus-budgetieren" aria-hidden="true"></span>

### Über den beworbenen Prozentsatz hinaus budgetieren

Auch Ginger kann einen kleinen Rest bei der Outputverteilung hinterlassen. Vergleiche bei beiden den Wert deiner teilnehmenden Inputs mit **allen eigenen Outputs** aus der abgeschlossenen Transaktion, einschließlich anderer Wallets. Wiederholte Runden und spätere Transfers können zusätzliche Kosten verursachen.

Null Koordinatorgebühr ist eine Vergleichskomponente. Transaktionsgröße, Gebührenraten, Outputverteilung und abgeschlossene Rundenzahl beeinflussen tatsächliche Ausgaben. Gingers [Kostenanleitung](/de/using-ginger/annonset/) erklärt den Betragsabgleich.

<span id="hardware-wallets-signing-inputs-and-receiving-outputs-are-different" data-ginger-heading="hardware-inputs-signieren-und-outputs-empfangen-sind-verschieden" aria-hidden="true"></span>

## Hardware: Inputs signieren und Outputs empfangen sind verschieden

Beide Anwendungen unterstützen Hardware für normales Empfangen und Zahlungssignieren. Ihre dokumentierten CoinJoin-Abläufe benötigen eine Software-Wallet für Inputsignierung; Hardware kann diese Quelle nicht sein. Siehe [Gingers Hardware-Unterstützung](/de/using-ginger/hardware-wallet/) und [Wasabis Hardware-Anleitung](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html).

Resultierende Coins zu empfangen ist ein eigener Vorgang. Beide erlauben andere unterstützte geladene Wallets einschließlich Hardware als CoinJoin-Outputziel. Das kann eine separate Übertragung nach der Runde ersparen. Es bedeutet **nicht**, dass Hardware die Inputs signiert oder Outputs vor Ankunft garantiert dein Privatsphäreziel erreicht haben.

Prüfe in Ginger nach Neustart das zurückgesetzte Ziel erneut. Halte getrennte Backups für Softwarequelle und Hardwareziel. Gib Hardware-Wörter niemals zur CoinJoin-Aktivierung am Desktop ein.

Folge [Gingers Cold-Storage-Anleitung](/de/hardware-wallets/exchange-to-cold-storage/) oder [Wasabis CoinJoin-to-wallet-Erklärung](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#can-i-coinjoin-to-another-wallet) für unterstützte Abläufe und Bedingungen.

<span id="privacy-and-service-policies" data-ginger-heading="privatsphäre-und-dienstrichtlinien" aria-hidden="true"></span>

## Privatsphäre und Dienstrichtlinien

Selbstverwahrung beantwortet, wer Ausgaben autorisiert, aber nicht jede Privatsphäre- oder Verfügbarkeitsfrage. CoinJoin erschwert manche Beziehungen, Transaktionen bleiben öffentlich. Börsen behalten Aufzeichnungen; spätere Coin-Kombinationen, Adresswiederverwendung oder gegenüber einem Empfänger offengelegte Informationen können neue Verknüpfungen schaffen. Ein Score garantiert keine Anonymität oder Börsenakzeptanz. Siehe [Vertrauen und Grenzen](/de/learn-coinjoin/trust-and-limits/).

Gingers Betreiber InvisibleBit LLC veröffentlicht Beschränkungen einschließlich US-Standort und Staatsangehörigkeit. Die Bedingungen erlauben Drittprüfungen und Inputablehnung. Prüfe [aktuelle Bedingungen](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt). Prüfe bei Wasabi den gewählten Betreiber; Wallet-Gebührenregeln belegen nicht dessen Zulassungs- oder Datenpraktiken.

<span id="which-fits-your-needs" data-ginger-heading="was-passt-zu-dir" aria-hidden="true"></span>

## Was passt zu dir?

**Ginger kommt infrage, wenn du eine mitgelieferte Verbindung möchtest** und Gebührenstruktur und Richtlinien passen. Beginne mit [Ersten Schritten](/de/getting-started/), einem Backup und der Prüfung der [CoinJoin-Steuerungen](/de/using-ginger/coinjoin/) vor Teilnahme.

**Wasabi kommt infrage, wenn du den Koordinator selbst wählen und Runden ohne Koordinatorgebühr nutzen möchtest.** Prüfe Betreiber und gesamte Transaktionskosten vor dem Start.

Willst du hauptsächlich mit Hardware empfangen, halten und senden, vergleiche zuerst unterstützte Geräte und normale Zahlungen. CoinJoin ist optional; sein Nutzen hängt von den zu schützenden Daten und späteren Ausgaben ab.
