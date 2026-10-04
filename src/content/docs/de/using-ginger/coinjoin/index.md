---
doc_id: "coinjoin.use-coinjoin"
title: "CoinJoin in Ginger Wallet verwenden"
description: "Starte, pausiere und beobachte CoinJoin, verstehe geeignetes Guthaben und vermeide Unterbrechungen einer aktiven Runde."
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

<span id="what-is-a-coinjoin"></span>
<span id="what-are-the-fees-for-coinjoins"></span>
<span id="do-i-need-to-trust-ginger-with-my-coins"></span>

> Schwierigkeitsgrad: Einstieg. Die wichtigsten Schritte stehen zuerst; weiterführende Anleitungen sind optional.

CoinJoin erstellt mit anderen Teilnehmern eine Bitcoin-Transaktion, um ihre Input-Output-Beziehungen schwerer ableitbar zu machen. Ginger signiert nur eigene Wallet-Inputs; du zahlst nicht auf ein Koordinatorkonto ein. Erfolgreiche Runden kosten trotzdem Gebühren und garantieren keine Anonymität.

<span id="before-starting" data-ginger-heading="vor-dem-start" aria-hidden="true"></span>

## Vor dem Start

Öffne eine gesicherte Software-Wallet und lass sie synchronisieren. Halte bestätigte Bitcoin verfügbar, den Computer verbunden und prüfe erwartete Kosten. Erfolgreiche Runden haben Mining- und möglicherweise Koordinatorgebühren; Wiederholungen erhöhen Kosten. Die optionale [erweiterte Kostenreferenz](/de/using-ginger/annonset/) erklärt die Berechnung. Hardware kann normal empfangen und senden, aber nicht die Signierquelle automatischer Ginger-CoinJoins sein.

Die Koordinatorgebühr wird pro Input-Coin geprüft. Bis einschließlich 0.03 BTC (3,000,000 Satoshis) fällt keine an. Größere Coins zahlen normalerweise 0.3 % ihres gesamten Werts; geeignete Remixes können ebenfalls befreit sein. Mining-Gebühren bleiben auch bei Koordinatorgebühr null.

Die Wallet benötigt bestätigtes brauchbares Guthaben und geeignete Rundenbedingungen. Kein Kontostand und keine Wartezeit garantiert sofortigen Start. Lies den aktuellen Status vor Einstellungsänderungen.

<span id="start-and-pause" data-ginger-heading="starten-und-pausieren" aria-hidden="true"></span>

## Starten und pausieren

1. Öffne **Coinjoin Settings** über das Player-Menü oder Gingers Suche bei geöffneter Wallet.
2. Prüfe die Kosteneinstellungen und lass im normalen Ablauf das Outputziel auf dieser Wallet. Eigene Ziele und Routing behandelt die optionale erweiterte Einstellungsanleitung.
3. Aktiviere **Automatically start coinjoin** für unbeaufsichtigte Teilnahme bei geeigneten Bedingungen. Nutze für manuellen Start die Wiedergabesteuerung. Der gestoppte Player kann **Press Play to start** anzeigen.
4. Beobachte den Status unter dem Player. Vor Teilnahme kann die Wallet auf Bestätigungen, geeignete Runden oder günstigere Gebühren warten.
5. Nutze Pause zum Stoppen weiterer Teilnahme und lass kritische Phasen abschließen. Deaktivierte Automatik verändert künftiges Verhalten, macht aber veröffentlichte Transaktionen nicht rückgängig.

Sende keine Bitcoin an jemanden, der angebliche „CoinJoin-Aktivierung“ anbietet. Es gibt keine separate Aktivierungszahlung an einen Supportkontakt.

<span id="read-the-status" data-ginger-heading="den-status-lesen" aria-hidden="true"></span>

## Den Status lesen

| Meldung | Bedeutung und nächster Schritt |
| --- | --- |
| **Awaiting auto-start of coinjoin** | Die automatische Startverzögerung läuft. Halte die Wallet offen. |
| **Awaiting confirmed funds** | Warte auf Bestätigung geeigneter Eingänge. |
| **Awaiting cheaper coinjoins** | Kosteneinstellungen halten die Wallet aus aktuellen Runden heraus. Prüfe sie vor Lockerung. |
| **Skipping a round for better privacy** | Zufälliges Überspringen ist aktiv, kein Verbindungsfehler. |
| **Awaiting other participants** | Registrierung läuft; andere müssen ebenfalls ihre Schritte abschließen. |
| **Awaiting the blame round** | Voriger Versuch konnte nicht abschließen; das Protokoll wiederholt mit geeigneten Teilnehmern. Du sollst niemanden identifizieren. |
| **Insufficient participants, retrying...** | Erforderliche Teilnahme wurde nicht erreicht. Warte auf die nächste Runde. |
| **Awaiting closure of send dialog** | Schließe den Zahlungsablauf ab oder beende ihn, bevor CoinJoin weiterlaufen kann. |
| **Coinjoin may be uneconomical** | Die Stoppschwelle ist relevant. Mehr Guthaben oder Übersteuerung ist eine kostenrelevante Wahl, keine notwendige Reparatur. |
| **Coinjoin successful! Continuing...** | Eine Runde war erfolgreich. Weitere können folgen, wenn die Wallet noch Arbeit hat. |

Bewahre bei Ablehnungs-, Verbindungs- und Eignungsmeldungen den exakten Fehlertext. Neuinstallation oder neue Wörter sind keine normale Antwort auf Wartestatus.

<span id="keep-the-wallet-available" data-ginger-heading="die-wallet-verfügbar-halten" aria-hidden="true"></span>

## Die Wallet verfügbar halten

Während Teilnahme müssen Schlüssel verfügbar sein. Eine passphrasegeschützte Software-Wallet muss vor Signierung geöffnet werden. 2FA schützt Start und verlangt keine Authenticator-Genehmigung jeder Runde.

Ruhezustand, Internetverlust oder erzwungenes Schließen können unterbrechen. Nach Veröffentlichung macht Schließen nichts rückgängig. Öffne erneut, synchronisiere und prüfe den Verlauf vor Fehlerannahme oder Wiederholung. Sende niemals nur wegen Schließen während einer Zahlung ein zweites Mal.

Je nach allgemeinen Einstellungen kann Ginger nach Fensterschließung im Hintergrund bleiben. Nutze zum vollständigen Beenden die normale Aktion und lass kritische Phasen abschließen.

<span id="spend-after-coinjoin" data-ginger-heading="nach-coinjoin-ausgeben" aria-hidden="true"></span>

## Nach CoinJoin ausgeben

Sobald resultierende Coins brauchbar sind, gib sie wie andere Bitcoin aus. CoinJoin bleibt öffentlich. Unverwandte private und nicht private Coins zu kombinieren, Adressen wiederzuverwenden oder identifizierten Diensten Transaktionen offenzulegen schafft neue Links. Prüfe Auswahl und Wechselgeld; früherer CoinJoin macht nicht jede spätere Handlung privat.

<span id="you-do-not-need-to-manage-the-protocol" data-ginger-heading="du-musst-das-protokoll-nicht-verwalten" aria-hidden="true"></span>

## Du musst das Protokoll nicht verwalten

Ginger übernimmt Registrierung, Signierung und Wiederholungen. Erklären Grundprüfungen den Zustand nicht, nutze optionale Referenzen: [Rundendetails](/de/coinjoin/round-details/), [Eigene Einstellungen](/de/coinjoin/settings/) und [Gebühren und Privatsphäre-Fortschritt](/de/using-ginger/annonset/).
