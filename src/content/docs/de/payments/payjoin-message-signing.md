---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin und Nachrichtensignierung"
description: "Sende eine PayJoin-Zahlungsanforderung, verstehe Empfängerwissen, Wallet-Fingerabdrücke und Rückfall und signiere eine klar begrenzte Erklärung zur Adresskontrolle."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Verstehe zuerst normale Sendevorschau, Empfängerbetrag und Gebühr.

PayJoin und Nachrichtensignierung sind getrennte Werkzeuge. PayJoin verändert den Aufbau einer Zahlungstransaktion. Nachrichtensignierung beweist Schlüsselkontrolle für eine bestimmte Erklärung ohne Zahlung. Keines rechtfertigt die Offenlegung deiner Wiederherstellungswörter.

<span id="send-a-payjoin-request" data-ginger-heading="eine-payjoin-anforderung-senden" aria-hidden="true"></span>

## Eine PayJoin-Anforderung senden

PayJoin ist eine gemeinsame Zahlung, bei der der Empfänger einen Input beitragen kann. Das kann die Annahme schwächen, alle Inputs einer gewöhnlich wirkenden Zahlung gehörten einem Sender. Der Empfänger muss einen kompatiblen Bitcoin-Zahlungs-URI mit PayJoin-Endpunkt bereitstellen; eine Adresse allein reicht nicht. Das Protokoll beschreibt [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

1. Nutze eine Software-Wallet mit ausgebbarem Guthaben. Diese Version lehnt PayJoin-Anforderungen beim Senden aus Hardware-Wallets ab.
2. Füge den vollständigen Zahlungs-URI unter **Send** ein, statt nur die Adresse zu kopieren. Prüfe Ziel und Betrag über denselben vertrauenswürdigen Kanal wie jede Zahlung.
3. Prüfe Vorschau und PayJoin-Anzeige und autorisiere bei akzeptablem Betrag und Gebühren.
4. Prüfe die resultierende Transaktion im Verlauf.

Die veröffentlichte Implementierung kann bei fehlgeschlagenem PayJoin-Aufbau auf eine normale Zahlung zurückfallen. Eine Autorisierung garantiert daher keinen veröffentlichten PayJoin. Nutze den Ablauf nicht, wenn ein solcher Rückfall deine Privatsphäreanforderung verletzen würde.

Nutze im Mainnet einen kompatiblen HTTPS-Endpunkt. In v2.0.26 lehnen Endpunktprüfungen Onion-Endpunkte bei aktiviertem Tor ab; eine reine Onion-Anforderung ist kein unterstützter Weg. Lass Tor aktiv und bitte den Empfänger um eine kompatible Alternative, statt den Netzwerkschutz zum Erzwingen der Anfrage zu deaktivieren.

Diese Anleitung behandelt vom Empfänger bereitgestellte Anforderungen. Gingers normales **Receive** betreibt keinen PayJoin-Empfangsserver; diese Version bietet dafür keinen Einrichtungsablauf.

<span id="what-the-recipient-and-an-observer-learn" data-ginger-heading="was-empfänger-und-beobachter-erfahren" aria-hidden="true"></span>

## Was Empfänger und Beobachter erfahren

Der Empfänger kennt Zahlungsanforderung, Empfangsadresse und vorgesehenen Betrag bereits. Ist die Anfrage mit einer identifizierten Bestellung verbunden, löscht PayJoin diese Identität nicht. Bei der Aushandlung sieht der Empfangsdienst außerdem den Zahlungsvorschlag einschließlich vorgeschlagener Sender-Inputs. Betrachte ihn nicht als jemanden, vor dem die Zahlung selbst verborgen ist.

Externe Beobachter sehen die letztlich auf Bitcoin veröffentlichte Transaktion. Ein erfolgreicher PayJoin kann die übliche Annahme „alle Inputs gehören dem Sender“ unzuverlässig machen. Der Nutzen hängt von Transaktion und zusätzlichen Informationen ab; er garantiert keine Ununterscheidbarkeit von jeder normalen Zahlung.

Unterscheide diese Zielgruppen. Der Empfänger kann über Bestellung oder Aushandlung Details erfahren, obwohl ein unbeteiligter Beobachter Inputs nicht sicher zuordnen kann. Ein öffentlicher Explorer kann eine weitere Offenlegung verursachen, wenn du die Zahlung über eine identifizierte Browsersitzung abfragst.

<span id="wallet-fingerprints-and-the-ordinary-payment-fallback" data-ginger-heading="wallet-fingerabdrücke-und-rückfall-auf-normale-zahlungen" aria-hidden="true"></span>

## Wallet-Fingerabdrücke und Rückfall auf normale Zahlungen

Wallets entscheiden über Input-Adresstypen, Transaktionsstruktur und Signierung. Kombinationen können erkennbare Muster erzeugen. Eine Transaktion kann daher trotz gültiger PayJoin-Protokollnachrichten an Mehrdeutigkeit verlieren. Veröffentlichte [Beispiele für PayJoin-Fingerprinting](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/) zeigen das bei bestimmten Wallet-Kombinationen; sie belegen weder dieselben Probleme bei Ginger noch messen sie dessen Privatsphäre.

Wähle einen aktuellen kompatiblen Empfangsdienst, prüfe Zahlungsanforderung sowie vorgeschlagene Gebühr und Betrag. Ändere unbekannte Transaktionsoptionen nicht nur zur Nachahmung einer anderen Wallet: Eine plausibel wirkende Transaktion beweist keinen guten Privatsphäreschutz.

Wenn du eine gemeinsame Zahlung benötigst, vereinbare eine kompatible Methode vor Autorisierung in Ginger. Wegen des Rückfalls kann eine gescheiterte Aushandlung trotzdem zu einer gültigen Zahlung führen. Sende nach Veröffentlichung bei unklarem Ergebnis nicht erneut; prüfe zuerst Transaktion und Zahlungsstatus beim Empfänger. Gescheiterte PayJoin-Aushandlung und gescheiterte Bitcoin-Zahlung sind verschiedene Situationen.

<span id="sign-a-message-for-an-address" data-ginger-heading="eine-nachricht-für-eine-adresse-signieren" aria-hidden="true"></span>

## Eine Nachricht für eine Adresse signieren

Manche Dienste verlangen den Nachweis der Kontrolle einer Empfangsadresse. Wähle **Sign Message** im Wallet-Menü. Gib eine zur Wallet gehörende Adresse und die exakt beabsichtigte Erklärung ein. Fremde Adressen lehnt Ginger ab. Gib die Nachricht ein, wähle **Continue** und kopiere die resultierende Signatur für den vorgesehenen Prüfer.

Folge bei Hardware-Wallets der Gerätesignierungsabfrage; Verfügbarkeit hängt von Gerät und Unterstützung ab. Eine beobachtende Wallet ohne Signiergerät erzeugt keine Signatur. Adresstyp und vom Prüfer unterstütztes Signaturformat müssen ebenfalls kompatibel sein.

Lies die Nachricht so sorgfältig wie eine Autorisierung. Bevorzuge eng begrenzten Text mit Empfänger, Zweck sowie Datum oder Challenge. Signiere keine leere Erklärung oder eine mit unklaren Folgen. Nach Weitergabe kann eine Signatur kopiert und anderen gezeigt werden.

Nachrichtensignierung überträgt keine Bitcoin und beweist nicht den Besitz aller Wallet-Adressen. Sie verknüpft außerdem die signierte Adresse mit der vom Prüfer identifizierten Person. Verlangt eine Börse sie, bleibt die Offenlegung auch nach späterem CoinJoin bestehen.
