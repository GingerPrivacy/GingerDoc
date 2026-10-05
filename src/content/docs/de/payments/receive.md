---
doc_id: "payments.receive"
title: "Bitcoin empfangen und Adressen verwalten"
description: "Erzeuge eine Ginger-Empfangsadresse, wähle soweit unterstützt SegWit oder Taproot, beschrifte Zahlungen und prüfe Bestätigungen."
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Schwierigkeitsgrad: Einstieg. Die wichtigsten Schritte stehen zuerst; weiterführende Anleitungen sind optional.

Verwende für jede Zahlung eine neue Empfangsadresse. Sie sagt dem Zahler, wohin er Bitcoin senden soll, ohne deine Wiederherstellungswörter preiszugeben. Wiederverwendung ermöglicht jedoch die Verknüpfung von Zahlungen an dasselbe Ziel.

<span id="request-a-payment" data-ginger-heading="eine-zahlung-anfordern" aria-hidden="true"></span>

## Eine Zahlung anfordern

1. Öffne die gewünschte Wallet und warte auf den Abschluss von Wiederherstellung oder Synchronisierung.
2. Wähle **Receive**. Füge eine Bezeichnung für Zahler oder Zweck hinzu, etwa „Juni-Rechnung“. Verwende genug Details zur späteren Wiedererkennung, ohne unnötige personenbezogene Daten zu erfassen.
3. Wähle **Generate**. Die normale Aktion erzeugt eine native SegWit-Adresse. Unterstützt die Wallet Taproot, bietet die alternative Aktion **Taproot**, angezeigt mit **TR**; nutze sie nur, wenn der Zahler diesen Adresstyp unterstützt.
4. Kopiere die Adresse oder teile den Empfangs-QR-Code. Nutze bei Hardware-Wallets **Show on the hardware wallet** und vergleiche die vollständige Adresse auf dem Gerät mit der in Ginger angezeigten Adresse, bevor du sie weitergibst.
5. Prüfe das Ziel nach dem Einfügen in eine andere Anwendung. Zwischenablage-Schadsoftware kann eine Adresse ersetzen, auch wenn ursprünglicher QR-Code und Wallet-Anzeige korrekt waren.

Im Bitcoin-Mainnet beginnen native SegWit-Adressen normalerweise mit `bc1q`, Taproot-Adressen mit `bc1p`. Testnetz-Adressen unterscheiden sich. Lehnt ein Dienst eine unterstützte Bitcoin-Adresse ab, kläre Netzwerk- und Adresstypunterstützung mit ihm, statt Zeichen der Adresse zu verändern.

<span id="labels-and-unused-addresses" data-ginger-heading="bezeichnungen-und-ungenutzte-adressen" aria-hidden="true"></span>

## Bezeichnungen und ungenutzte Adressen

**Addresses Awaiting Payment** zeigt Empfangsadressen, die noch keine Zahlung erhalten haben und weiterhin in dieser Liste angeboten werden. Du kannst QR-Codes ansehen, Adressen kopieren, Bezeichnungen ändern oder eine Adresse über die angebotenen Aktionen ausblenden.

Ausblenden widerruft keine Bitcoin-Adresse. Eine Zahlung an eine zuvor erzeugte Adresse gehört weiterhin zur Wallet, wenn du ihre Schlüssel kontrollierst. Benutzte Adressen können absichtlich aus der Warteliste verschwinden; das fördert neue Adressen und bedeutet keine Löschung alter Schlüssel.

Bezeichnungen sind lokale Wallet-Metadaten, keine Blockchain-Nachrichten und werden nicht automatisch an den Zahler übermittelt. Backups, Protokolle, Exporte oder Bildschirmfreigaben können sie dennoch offenlegen. Sichere Dateien, wenn Bezeichnungen wichtig sind: Wiederherstellungswörter rekonstruieren sie nicht.

<span id="know-when-you-have-been-paid" data-ginger-heading="erkennen-wann-du-bezahlt-wurdest" aria-hidden="true"></span>

## Erkennen, wann du bezahlt wurdest

Die Veröffentlichung durch den Sender, Gingers Erkennung als unbestätigt und die Aufnahme durch einen Miner in einen Block sind verschiedene Ereignisse. Prüfe Wallet-Verlauf und Transaktionsdetails. Unbestätigte Zahlungen können ersetzt werden oder unbestätigt bleiben; entscheide je nach Situation über erforderliche Bestätigungssicherheit, bevor du etwas Unumkehrbares leistest.

Ginger kann bei geschlossener Anwendung empfangen. Der Zahler braucht eine gültige Adresse, keine online verfügbare Wallet. Beim erneuten Öffnen findet die Synchronisierung die Transaktion. Ein CoinJoin oder eine Zahlung an eine andere geladene Wallet erscheint nur in der Wallet, die die Outputs kontrolliert.

<span id="if-the-payment-is-missing" data-ginger-heading="wenn-die-zahlung-fehlt" aria-hidden="true"></span>

## Wenn die Zahlung fehlt

Bitte den Sender um die Transaktions-ID und prüfe das Ziel über euren bestehenden Kommunikationskanal. Prüfe ausgewählte Wallet, Mainnet oder Testnet, Synchronisierungsstatus und ob tatsächlich eine Transaktion veröffentlicht wurde. Füge nicht jede Adresse in einen öffentlichen Explorer ein: Er erfährt deine Abfragen.

Nach Wiederherstellung aus Wörtern kann bei vielen früher erzeugten ungenutzten Adressen das Gap Limit wichtig sein. Eine neue Empfangsanfrage allein repariert keine unvollständige historische Suche. Sichere Backups vor erneuter Suche oder Wiederherstellung.
