---
doc_id: "payments.fees-and-change"
title: "Transaktionsgebühren, eigene Raten und Wechselgeld"
description: "Verstehe Gebührenraten, eigene Raten bis hinunter zu 0.1 sat/vB, Weiterleitungsgrenzen, Gebührenabzug, Wechselgeld-Outputs und Privatsphäreempfehlungen in Ginger."
lang: "de"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> Schwierigkeitsgrad: Fortgeschritten. Verstehe zuerst normale Sendevorschau, Empfängerbetrag und Gebühr.

Beginne für normale Schritte mit [Bitcoin senden](/de/payments/send/). Diese Referenz erklärt Gebührensteuerung und Wechselgeld ausführlicher; du musst nicht für jede Zahlung eine eigene Rate wählen.

<span id="understand-the-fee" data-ginger-heading="die-gebühr-verstehen" aria-hidden="true"></span>

## Die Gebühr verstehen

Ändere über die Gebührensteuerung der Vorschau die gewünschte Bestätigungspräferenz oder gib **Custom Fee Rate** ein. Ginger akzeptiert Raten bis hinunter zu **0.1 sat/vB**; Schätzungen und Gebührendiagramm behalten Nachkommastellen bei. Zeitschätzungen garantieren nichts: Neue Transaktionen konkurrieren um Platz, Blöcke entstehen unregelmäßig.

Das Minimum des Editors garantiert keine Weiterleitung oder Aufnahme in den Mempool eines Nodes. Nodes können wegen ihrer Richtlinien oder aktueller Mempool-Bedingungen höhere Raten verlangen. Bei der Veröffentlichung an Peers überspringt Ginger diejenigen, deren angekündigtes Minimum die Gebührenrate der Transaktion übersteigt. Eine niedrige eigene Rate kann daher die Veröffentlichung scheitern lassen oder unbestätigt bleiben; prüfe Netzwerkbedingungen und Dringlichkeit der Zahlung vor ihrer Verwendung.

Ändere über die Gebührensteuerung der Vorschau die gewünschte Bestätigungspräferenz oder gib **Custom Fee Rate** ein. Zeitschätzungen garantieren nichts: Neue Transaktionen konkurrieren um Platz, Blöcke entstehen unregelmäßig. Die manuelle Eingabe dieser Version lehnt Raten unter 1 sat/vByte ab; Node-Richtlinien können mehr verlangen als dieses Minimum.

<span id="check-who-pays-the-fee" data-ginger-heading="prüfen-wer-die-gebühr-trägt" aria-hidden="true"></span>

## Prüfen, wer die Gebühr trägt

Bei einer [Sammelzahlung](/de/payments/send/#pay-several-recipients-in-one-transaction) verringert **Subtract the transaction fee from the first payment** nur den Betrag des ersten Empfängers. Die anderen eingegebenen Zahlungsbeträge bleiben unverändert. Ist die Option ausgeschaltet, brauchst du genügend Guthaben für alle Zahlungsbeträge plus Gebühr. **Max** im Sammeleditor aktiviert den Gebührenabzug.

Prüfe immer die endgültigen Beträge in der Vorschau, insbesondere nach einer Änderung der Gebührenrate. Muss ein Empfänger einen exakten Betrag erhalten, kann ein Gebührenabzug dazu führen, dass er zu wenig erhält. Die Vorschau führt den endgültigen Betrag jedes Sammelempfängers separat auf.

Ohne automatische Schätzungen kann Ginger manuelle Eingabe anbieten. Bist du unsicher, warte eher auf wiederhergestellte Schätzungen, als eine sehr hohe Zahl zu raten. Normale Transaktionsgebühren und CoinJoin-Koordinatorgebühren sind getrennt.

<span id="change-is-still-your-bitcoin" data-ginger-heading="wechselgeld-ist-weiterhin-dein-bitcoin" aria-hidden="true"></span>

## Wechselgeld ist weiterhin dein Bitcoin

Bitcoin gibt ganze Coins, auch UTXOs genannt, aus. Übersteigen Inputs Empfängerbetrag plus Gebühr, kehrt der Rest normalerweise an eine neue Wechselgeldadresse deiner Wallet zurück. Beispielsweise hinterlassen 100 000 Satoshis Input bei 60 000 Satoshis Zahlung und 1 000 Satoshis Gebühr 39 000 Satoshis Wechselgeld.

Die Wechselgeldadresse kann von zuvor gezeigten Empfangsadressen abweichen. Du musst sie weder herauskopieren noch manuell zurücksenden. Transaktionsanalyse kann Wechselgeld mit der Zahlung verknüpfen; das zählt bei späterer Kombination mit anderem Guthaben.

Privatsphäreempfehlungen können Zahlungen ohne Wechselgeld durch geänderte Coin-Auswahl oder Empfängerbetrag anbieten. Prüfe sorgfältig. Bezahle eine feste Rechnung nicht zu niedrig, nur um Wechselgeld zu entfernen.

Für konkrete Coin-Auswahl und ausstehende Transaktionen siehe [Coin-Kontrolle und Verlauf](/de/payments/coin-control-history/).
