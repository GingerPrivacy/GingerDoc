---
doc_id: "learn-privacy.repeated-payments"
title: "Spenden und wiederholte Zahlungen empfangen"
description: "Empfange Bitcoin-Spenden und regelmäßige Zahlungen mit neuen Adressen, nützlichen Bezeichnungen, sorgfältigen Rückerstattungen und bewusstem Umgang mit den Coins."
lang: "de"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Schwierigkeitsgrad: Alltagsnutzung. Wähle diese Anleitung, wenn du die beschriebene Aufgabe erledigen möchtest.

Öffentlicher Bitcoin-Empfang erfordert nicht, alle Wallet-Adressen zu veröffentlichen. Er erfordert eine Entscheidung darüber, was jeder Zahler oder Websitebesucher sieht, und eine sinnvolle Trennung nicht zusammengehöriger Zahlungseingänge. Ginger unterstützt normalen On-Chain-Empfang und lokale Bezeichnungen; es ist kein Rechnungsserver oder automatischer Adressrotationsdienst für Websites.

<span id="choose-how-to-give-out-addresses" data-ginger-heading="wählen-wie-du-adressen-weitergibst" aria-hidden="true"></span>

## Wählen, wie du Adressen weitergibst

| Ansatz | Was er erleichtert | Was sichtbar wird |
| --- | --- | --- |
| Permanente Adresse auf Website oder Profil | Jeder kann ohne Kontaktaufnahme zahlen. | Eingänge und spätere Ausgaben dieser Adresse sind gemeinsam prüfbar; die Seite verknüpft sie mit dem Besitzer. |
| Neue Adresse für jeden Zahler | Jede Zahlungsanforderung hat ein separates Ziel. | Zahler und Kommunikationsdienst kennen möglicherweise Adresse und Identität; spätere Transaktionen können Verknüpfungen schaffen. |
| Neue Adresse für jede regelmäßige Rate | Private Aufzeichnungen je Zahlung sind möglich. | Neue Anweisungen müssen mitgeteilt werden; der Zahler kann trotzdem alte Adressen wiederverwenden. |

Eingänge einer öffentlichen Adresse entsprechen nicht zwingend dem gesamten Guthaben, Einkommen oder der Spenderzahl. Eigenzahlungen, wiederholte Spenden und weitere Adressen sind möglich. Ziehe keine stärkeren Schlüsse als die sichtbaren Transaktionen stützen.

<span id="receive-and-keep-useful-records" data-ginger-heading="empfangen-und-nützliche-aufzeichnungen-führen" aria-hidden="true"></span>

## Empfangen und nützliche Aufzeichnungen führen

1. Öffne die gewünschte Wallet und wähle **Receive**. Füge eine Bezeichnung hinzu, die den späteren Zweck erkennen lässt, etwa eine private Rechnungsreferenz oder die betreffende Aktivität.
2. Erzeuge für diese Zahlung eine neue Empfangsadresse. Prüfe sie bei Hardware soweit verfügbar mit **Show on the hardware wallet** auf dem Gerät.
3. Teile Adresse und vereinbarten On-Chain-Bitcoin-Betrag über den vorgesehenen Kanal. Prüfe eingefügten Inhalt; verwende eine Adresse nicht bloß wegen ihres vorhandenen Chat-Eintrags erneut.
4. Prüfe tatsächlichen Empfang und Bestätigungen in Ginger. Eine Zahlernachricht oder ein Zahlungsbild ist keine Wallet-Bestätigung des Eingangs.
5. Erhalte die Zuordnung von Eingang, Bezeichnung und privater Rechnung oder Spendenaufzeichnung. Wörter stellen nicht alle diese Notizen wieder her.

Bezeichnungen gehören in lokale Aufzeichnungen; sie erscheinen nicht als Namen in Bitcoin-Transaktionen. Wer lokale Dateien, Backups oder Bildschirmfreigaben sieht, kann sie trotzdem lesen. Verwende genug Details für verständliche spätere Coin-Auswahl, ohne unnötige persönliche Spenderdaten zu sammeln.

<span id="handle-a-permanently-published-address" data-ginger-heading="mit-einer-dauerhaft-veröffentlichten-adresse-umgehen" aria-hidden="true"></span>

## Mit einer dauerhaft veröffentlichten Adresse umgehen

Verwendest du eine permanente Spendenadresse, gehe von prüfbarem Empfangsverlauf aus. Die Adresse auf einer Website zu ersetzen löscht die frühere Adresse nicht und verhindert nicht, dass sie weitere Zahlungen empfängt. Halte Wiederherstellungsdaten und Kontext zum Erkennen verspäteter Eingänge bereit.

CoinJoin kann unter seinen Annahmen Verknüpfungen zu späteren Ausgaben reduzieren; öffentliche Spenden verschwinden dadurch nicht. Alle Eingänge gemeinsam normal zu übertragen kann eine neue Zuordnung schaffen. Plane die nächste Ausgabe so sorgfältig wie den ersten Empfang.

Teile bei Abos oder wiederholten Kundenzahlungen nach Möglichkeit pro Rate ein neues Ziel mit. Ginger widerruft alte Adressen nicht und zwingt niemanden zu neuen Anweisungen. Gleiche verspätete und doppelte Zahlungen ab, bevor du Erstattungen versprichst.

<span id="refund-the-payer-through-a-verified-destination" data-ginger-heading="dem-zahler-über-ein-geprüftes-ziel-erstatten" aria-hidden="true"></span>

## Dem Zahler über ein geprüftes Ziel erstatten

Erstatte nicht automatisch an eine Inputadresse der ursprünglichen Zahlung. Der Zahler könnte eine Börsenauszahlung, einen Verwahrungsdienst oder eine gemeinsame Transaktion verwendet haben und diese Inputadresse nicht kontrollieren.

1. Prüfe die ursprüngliche Zahlung und Erstattungsanfrage mit privaten Aufzeichnungen und vertrauenswürdigem Kontaktkanal.
2. Vereinbare Erstattungsbetrag und Gebührenlast. Beschaffe vom vorgesehenen Empfänger eine neue Bitcoin-Erstattungsadresse und prüfe sie über diesen Kanal.
3. Nutze **Send**, prüfe ausgewählte Inputs und Gebühr und autorisiere nur die vereinbarte Zahlung.
4. Erfasse die Erstattungstransaktion und prüfe ihr Ergebnis, bevor du sie nach Netzwerkfehlern erneut versuchst.

Eine Erstattung ist eine neue On-Chain-Zahlung. Sie macht den ursprünglichen Empfang nicht rückgängig und löscht keine Aufzeichnungen. Bedenke, was sie über deine ausgewählten Coins offenlegt.

<span id="keep-receipt-handling-deliberate" data-ginger-heading="eingänge-bewusst-handhaben" aria-hidden="true"></span>

## Eingänge bewusst handhaben

Öffne **Wallet Coins**, um resultierende Coins zu prüfen. **Send** → **Manual Control** hilft bei der Wahl von Guthaben, das bereits der betreffenden Aktivität zugeordnet ist. Prüfe die Endtransaktion, statt von einer automatisch durch Bezeichnungen erzwungenen Trennung auszugehen.

Unerwartete Kleinstzahlungen benötigen keine sofortige Reaktion. Ihre Ausgabe kann einen großen Wertanteil kosten und sie mit anderen Inputs verknüpfen. **Exclude Coins** betrifft nur CoinJoin und sperrt normale Ausgaben nicht. Folge keinen unerbetenen Zahlungsanweisungen oder Kontakten, die Geld zum angeblichen Entsperren verlangen.

Leitest du geeignete CoinJoin-Outputs zur Verwahrung an eine andere geladene Wallet, prüfe diese Wahl vor jeder Sitzung. Sie wird nach Neustart zurückgesetzt; der normale Ablauf erzwingt keine weitere Runde bereits privater geeigneter Coins. Regelmäßiger Empfang darf nicht auf ungeprüfter dauerhafter Hardware-Weiterleitung beruhen.

Lies [Ausgaben nach CoinJoin](/de/learn-privacy/spending-after-coinjoin/) für konkrete Beispiele und [Informationsweitergabe](/de/learn-privacy/information-sharing/) zum Wissen von Websites, Explorern und anderen Apps.
