---
doc_id: "payments.send"
title: "Bitcoin senden und Gebühren prüfen"
description: "Bereite einzelne oder gebündelte Bitcoin-Zahlungen vor, prüfe jeden Empfänger und endgültigen Betrag, kontrolliere Gebühren und Wechselgeld und autorisiere die Transaktion."
lang: "de"
verified_release: "v2.0.27"
reader_level: "beginner"
prev: false
next: false
---

> Schwierigkeitsgrad: Einstieg. Die wichtigsten Schritte stehen zuerst; weiterführende Anleitungen sind optional.

Ginger kann eine bestätigte Bitcoin-Zahlung nicht zurückrufen. Prüfe vor der Bestätigung den Empfänger über einen vertrauenswürdigen Kanal sowie vollständiges Ziel, Betrag und Gebühr. Beginne bei einem neuen Ablauf mit einer kleinen Zahlung.

<span id="prepare-a-payment" data-ginger-heading="eine-zahlung-vorbereiten" aria-hidden="true"></span>

## Eine Zahlung vorbereiten

1. Öffne die Wallet mit dem Guthaben und wähle **Send**. Wähle für den normalen Zahlungsablauf **Automatic**. Manuelle Coin-Auswahl kannst du bei Bedarf separat lernen.
2. Gib Bitcoin-Adresse oder Zahlungs-URI des Empfängers unter **To:** ein. Eine Zahlungsanforderung kann den Betrag enthalten; prüfe ihn nach dem Einfügen. Falls deine Plattform **Scan QR Code** bietet, kannst du die Kamera nutzen und danach das dekodierte Ziel prüfen.
3. Gib Betrag und aussagekräftige Empfängerbezeichnung ein. Prüfe, ob BTC oder Fiat angezeigt wird. Eine Fiat-Schätzung verändert sich mit dem Wechselkurs und ist nicht der im Bitcoin-Netzwerk übertragene Betrag.
4. Wähle **Continue** und prüfe Transaktionsvorschau, ausgewähltes Guthaben, Privatsphäreempfehlungen und erwartetes Wechselgeld. Eine Empfehlung, die den Betrag ändert, ist nur geeignet, wenn sie die Empfängeranforderung weiterhin erfüllt.
5. Prüfe Gebühr und geschätzte Bestätigungszeit. Wähle bei korrekten Details **Confirm** und erledige gegebenenfalls Passphrase- oder Hardware-Autorisierung.
6. Prüfe die veröffentlichte Transaktion im Verlauf. Ist das Ergebnis nach einem Netzwerkfehler unklar, prüfe den Verlauf vor einer weiteren Zahlung.

Beim Senden des gesamten verfügbaren Guthabens kann die Gebühr vom Empfängerbetrag abgezogen werden. Festbetragsanfragen und PayJoin haben andere Einschränkungen. Prüfe den tatsächlichen Empfängerbetrag in der Vorschau, statt anzunehmen, der gesamte Kontostand komme an.

<span id="pay-several-recipients-in-one-transaction" data-ginger-heading="mehrere-empfänger-in-einer-transaktion-bezahlen" aria-hidden="true"></span>

## Mehrere Empfänger in einer Transaktion bezahlen

Wähle im Sendeeditor **Pay to multiple recipients**, um eine Sammelzahlung zu erstellen. Die erste Zahlung behält die bereits eingegebene Adresse, den Betrag und die Bezeichnungen.

1. Gib für jede Zahlung eine andere Bitcoin-Adresse, einen Betrag und eine Empfängerbezeichnung ein. Verwende hier reine Adressen; Zahlungs-URIs und Payjoin gehören zum Ablauf für einen einzelnen Empfänger. Eine Zahlungsanforderung mit festem Betrag lässt sich nicht zu einer Sammelzahlung erweitern.
2. Wähle **Add another payment** für weitere Zeilen oder **Delete** neben einer Zahlung, um sie zu entfernen. Bleibt nur eine Zahlung übrig, kehrt der Editor zur Einzelansicht zurück und behält deren Details.
3. Entscheide, wer die Mining-Gebühr trägt. Mit **Subtract the transaction fee from the first payment** erhält der erste Empfänger weniger als den eingegebenen Betrag; die anderen Zahlungsbeträge bleiben unverändert. Ist die Option ausgeschaltet, zahlt deine Wallet die Gebühr zusätzlich zu den eingegebenen Beträgen. **Max** aktiviert bei einer Sammelzahlung den Gebührenabzug; prüfe diese Auswahl vor dem Fortfahren.
4. Wähle **Continue**. Prüfe in der Vorschau jede nummerierte Adresse, Empfängerbezeichnung und den endgültigen Betrag sowie die Gesamtgebühr. Achte insbesondere darauf, dass der erste Empfänger bei Gebührenabzug weiterhin den vereinbarten Betrag erhält.
5. Gehe bei Bedarf zurück, um die Zahlungen zu korrigieren. Eingegebene Zeilen und die Auswahl zum Gebührenabzug bleiben erhalten. Prüfe die neu erstellte Vorschau und Gebühr erneut, bevor du **Confirm** wählst und die Autorisierung abschließt.

Alle Empfänger einer Sammelzahlung teilen eine öffentliche Transaktion, wodurch sich die Zahlungen miteinander verknüpfen lassen. Bedenke das vor dem Zusammenfassen unabhängiger Zahlungen. Empfängerbezeichnungen bleiben lokale Wallet-Metadaten; sie werden weder an Empfänger gesendet noch in der Blockchain veröffentlicht.

<span id="check-the-fee-without-custom-settings" data-ginger-heading="gebühren-ohne-eigene-einstellungen-prüfen" aria-hidden="true"></span>

## Gebühren ohne eigene Einstellungen prüfen

Prüfe Gesamtgebühr und geschätzte Bestätigungspräferenz in der Vorschau. Eine Gebühr bezahlt Transaktionsplatz; sie ist kein einfacher Prozentsatz der Zahlung. Die Zeitschätzung kann sich ändern und ist keine Garantie.

Nutze eine verfügbare Gebührenschätzung, die du verstehst. Fehlen Schätzungen und bist du unsicher, warte und untersuche die Ursache, statt eine sehr hohe eigene Gebühr zu raten.

Wähle vor der Bestätigung **View transaction** in der Vorschau, um genauer hinzusehen. Ein separates Fenster zeigt Inputs und Outputs. Die Anleitung zum [Untersuchen einer Transaktion](/de/payments/coin-control-history/#inspect-inputs-and-outputs) beschreibt die verfügbaren Details.

<span id="the-leftover-money-is-change" data-ginger-heading="der-restbetrag-ist-wechselgeld" aria-hidden="true"></span>

## Der Restbetrag ist Wechselgeld

Die Zahlung kann ein größeres Bitcoin-Stück als Empfängerbetrag plus Gebühr verwenden. Der Rest kehrt als Wechselgeld zu deiner Wallet zurück, manchmal an eine bisher unbekannte Adresse. Du kontrollierst ihn weiterhin; es gibt nichts manuell zurückzusenden.

Eine Privatsphäreempfehlung kann den vorgeschlagenen Empfängerbetrag ändern. Akzeptiere sie nur, wenn sie die Empfängeranforderung erfüllt. Bezahle insbesondere eine feste Rechnung nicht zu niedrig, um Wechselgeld zu vermeiden.

Optionale weiterführende Referenz: [Eigene Gebührenraten und Wechselgeld](/de/using-ginger/fee/) oder [Manuelle Coin-Kontrolle und Transaktionsverlauf](/de/payments/coin-control-history/).

<span id="when-a-payment-cannot-be-prepared" data-ginger-heading="wenn-sich-keine-zahlung-vorbereiten-lässt" aria-hidden="true"></span>

## Wenn sich keine Zahlung vorbereiten lässt

Unzureichendes Guthaben kann bedeuten, dass nach Gebühren nicht genug ausgebbarer Wert vorhanden ist, obwohl der angezeigte Gesamtkontostand ausreichend aussieht. Guthaben kann außerdem unbestätigt, in einer kritischen CoinJoin-Phase gebunden oder Teil einer derzeit nicht erweiterbaren unbestätigten Transaktionskette sein.

Eine fehlende Sendeaktion während der Wiederherstellung ist normal. Eine beobachtende Wallet kann allein nicht signieren. Diese Version unterstützt keine Lightning-Adressen oder -Rechnungen; fordere eine On-Chain-Bitcoin-Adresse an.
