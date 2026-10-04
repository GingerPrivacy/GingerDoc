---
doc_id: "coinjoin.round-details"
title: "CoinJoin-Runden und geeignete Inputs"
description: "Verstehe CoinJoin-Phasen, Input-Eignung und Wiederholungsversuche, wenn normale Start-, Pause- und Wartezustandsprüfungen das Ergebnis nicht erklären."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Verstehe zuerst die normalen Start- und Pausensteuerungen und dass abgeschlossene Runden Gebühren kosten.

Beginne mit [der normalen CoinJoin-Anleitung](/de/using-ginger/coinjoin/). Ginger verwaltet das Protokoll automatisch; diese Referenz erklärt konkrete Zustände oder Einschränkungen.

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="warum-guthaben-ungeeignet-sein-kann" aria-hidden="true"></span>

## Warum Guthaben ungeeignet sein kann

Weder eine feste Wartezeit noch ein allgemeiner Mindestkontostand garantiert Teilnahme. Die Eignung hängt von Rundenparametern, Coin-Größen, Bestätigungen, Gebühren, Ausschlüssen und Wallet-Einstellungen ab. Ein Kontostand kann den Mindest-Inputwert übersteigen und trotzdem keinen wirtschaftlich geeigneten Coin enthalten.

<span id="what-happens-during-a-round" data-ginger-heading="was-während-einer-runde-geschieht" aria-hidden="true"></span>

## Was während einer Runde geschieht

| Phase | Worauf deine Wallet wartet |
| --- | --- |
| Input-Registrierung | Geeignete Coins werden für die gemeinsame Transaktion vorgeschlagen. |
| Verbindungsbestätigung | Registrierte Teilnehmer bestätigen ihre weitere Verfügbarkeit. |
| Output-Registrierung | Teilnehmer ordnen über das Protokoll ihre zu empfangenden Outputs an. |
| Signieren | Wallets prüfen den Vorschlag und signieren ihre eigenen Inputs. Halte Ginger in dieser kritischen Phase verfügbar. |
| Blame-Runde, falls nötig | Ein Wiederholungsversuch schließt Teilnehmer aus, die erforderliche Schritte nicht abgeschlossen haben. |
| Veröffentlichung | Die fertige Transaktion wird an Bitcoin-Nodes übermittelt und wartet auf Bestätigung. |

Die Anwendung verwaltet diese Phasen; du musst weder Schlüssel austauschen noch dich manuell mit Fremden abstimmen. Die Runde und Coin-Auswahl bestimmen akzeptierte Inputs und resultierende Outputs. Für keine Wallet gibt es eine feste erwartbare Input- oder Outputzahl; ein Gesamtkontostand ist kein Versprechen, dass alles an einer Runde teilnehmen kann.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="private-coins-und-eine-andere-output-wallet" aria-hidden="true"></span>

## Private Coins und eine andere Output-Wallet

Der normale Start in v2.0.26 lehnt eine Wallet oder verfügbare Kandidatenauswahl ab, deren Coins das Privatsphäreziel bereits erreichen. Eine andere Output-Wallet erzwingt keine ausschließlich private Runde. Prüfe [die Output-Wallet-Einstellungen](/de/coinjoin/settings/), bevor du dich auf eine Weiterleitungsroutine verlässt.

Für Scoreberechnungen und vollständigen Wertabgleich nutze [Gebühren und Privatsphäre-Fortschritt](/de/using-ginger/annonset/).
