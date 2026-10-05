---
doc_id: "payments.fees-and-change"
title: "Transaktionsgebühren, eigene Raten und Wechselgeld"
description: "Verstehe Satoshi-pro-Byte-Gebührenraten, manuelle Gebühren, Wechselgeld-Outputs und betragsändernde Privatsphäreempfehlungen."
lang: "de"
verified_release: "v2.0.26"
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

Gebührenraten werden in Satoshis pro virtuellem Byte als **Fee Rate (sat/vByte)** angezeigt. Die gesamte Mining-Gebühr ist Rate mal virtuelle Transaktionsgröße, kein Prozentsatz des Zahlungsbetrags. Viele kleine Coins auszugeben kann teurer sein als ein großer Coin gleichen Gesamtwerts.

Ändere über die Gebührensteuerung der Vorschau die gewünschte Bestätigungspräferenz oder gib **Custom Fee Rate** ein. Zeitschätzungen garantieren nichts: Neue Transaktionen konkurrieren um Platz, Blöcke entstehen unregelmäßig. Die manuelle Eingabe dieser Version lehnt Raten unter 1 sat/vByte ab; Node-Richtlinien können mehr verlangen als dieses Minimum.

Ohne automatische Schätzungen kann Ginger manuelle Eingabe anbieten. Bist du unsicher, warte eher auf wiederhergestellte Schätzungen, als eine sehr hohe Zahl zu raten. Normale Transaktionsgebühren und CoinJoin-Koordinatorgebühren sind getrennt.

<span id="change-is-still-your-bitcoin" data-ginger-heading="wechselgeld-ist-weiterhin-dein-bitcoin" aria-hidden="true"></span>

## Wechselgeld ist weiterhin dein Bitcoin

Bitcoin gibt ganze Coins, auch UTXOs genannt, aus. Übersteigen Inputs Empfängerbetrag plus Gebühr, kehrt der Rest normalerweise an eine neue Wechselgeldadresse deiner Wallet zurück. Beispielsweise hinterlassen 100 000 Satoshis Input bei 60 000 Satoshis Zahlung und 1 000 Satoshis Gebühr 39 000 Satoshis Wechselgeld.

Die Wechselgeldadresse kann von zuvor gezeigten Empfangsadressen abweichen. Du musst sie weder herauskopieren noch manuell zurücksenden. Transaktionsanalyse kann Wechselgeld mit der Zahlung verknüpfen; das zählt bei späterer Kombination mit anderem Guthaben.

Privatsphäreempfehlungen können Zahlungen ohne Wechselgeld durch geänderte Coin-Auswahl oder Empfängerbetrag anbieten. Prüfe sorgfältig. Bezahle eine feste Rechnung nicht zu niedrig, nur um Wechselgeld zu entfernen.

Für konkrete Coin-Auswahl und ausstehende Transaktionen siehe [Coin-Kontrolle und Verlauf](/de/payments/coin-control-history/).
