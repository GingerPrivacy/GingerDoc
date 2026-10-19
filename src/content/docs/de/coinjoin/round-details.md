---
doc_id: "coinjoin.round-details"
title: "CoinJoin-Runden und geeignete Inputs"
description: "Verstehe CoinJoin-Phasen, Input-Eignung und Wiederholungsversuche, wenn normale Start-, Pause- und Wartezustandsprüfungen das Ergebnis nicht erklären."
lang: "de"
verified_release: "v2.0.27"
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
| Blame-Runde, falls nötig | Ein Wiederholungsversuch nutzt geeignete Teilnehmer aus der vorherigen Transaktion und führt zusätzliche Konsistenzprüfungen durch. |
| Veröffentlichung | Die fertige Transaktion wird an Bitcoin-Nodes übermittelt und wartet auf Bestätigung. |

Die Anwendung verwaltet diese Phasen; du musst weder Schlüssel austauschen noch dich manuell mit Fremden abstimmen. Die Runde und Coin-Auswahl bestimmen akzeptierte Inputs und resultierende Outputs. Für keine Wallet gibt es eine feste erwartbare Input- oder Outputzahl; ein Gesamtkontostand ist kein Versprechen, dass alles an einer Runde teilnehmen kann.

<span id="why-signing-can-stop-a-round" data-ginger-heading="warum-das-signieren-eine-runde-stoppen-kann" aria-hidden="true"></span>

## Warum das Signieren eine Runde stoppen kann

Vor dem Abschluss des Signierens prüft Ginger die tatsächlich vorgeschlagene Transaktion. Dazu gehört, ob:

- Alle von dieser Wallet registrierten Inputs weiterhin enthalten sind und keiner davon doppelt vorkommt.
- Die Transaktion genügend Inputs enthält und, sofern die Konfiguration keinen Solo-CoinJoin erlaubt, auch Inputs außerhalb der eigenen Registrierung dieser Wallet umfasst.
- Die effektive Mining-Gebührenrate ausreichend nahe an der für die Runde angekündigten Rate liegt, wobei Schätzungsunterschiede berücksichtigt werden.
- Die der Wallet zugesagten Outputs mit mindestens den erwarteten Beträgen vorhanden sind.

Die Teilnehmer- oder Gebühreneinstellungen einer angebotenen Runde ersetzen diese Prüfungen der Transaktion selbst nicht. Insbesondere kann eine Gebührenrate, die zu weit unter der angekündigten Rate liegt, die Signierprüfung scheitern lassen, selbst wenn der von deiner Wallet abgezogene Betrag akzeptabel erschien. Inputzahlen zählen Coins und belegen keine unabhängigen Personen; siehe [CoinJoin-Vertrauen und Grenzen](/de/learn-coinjoin/trust-and-limits/).

Scheitern diese Prüfungen, vervollständigt Ginger nicht alle Signaturen für seine Inputs. Sind noch registrierte Wallet-Inputs im Vorschlag enthalten, hält es die Signatur für einen dieser vorhandenen Inputs zurück. Das ist wichtig, weil eine zurückgehaltene Signatur für einen ausgelassenen Input die vorgeschlagene Transaktion nicht stoppen würde. Ist keiner der Wallet-Inputs mehr enthalten, sendet es keine Signaturen. Ein Vorschlag mit einem doppelt enthaltenen registrierten Wallet-Input wird sofort abgelehnt.

Eine Runde kann daher die Signierphase erreichen und trotzdem scheitern oder wiederholt werden. Halte Ginger verfügbar, bis es die kritische Phase verlässt, und prüfe den resultierenden Status vor einer weiteren Aktion mit diesen Coins. Ändere keine unbekannten Grenzen, nur damit eine abgelehnte Runde fortgesetzt wird.

<span id="checks-on-blame-rounds" data-ginger-heading="prüfungen-bei-blame-runden" aria-hidden="true"></span>

## Prüfungen bei Blame-Runden

Wird eine Runde gestört, übernimmt Ginger nur eigene Coins, für die Signaturen übermittelt wurden. Eine Blame-Runde muss Inputs der vorherigen Transaktion verwenden und denselben vorgeschlagenen maximalen Inputbetrag beibehalten. Ginger prüft diesen Zusammenhang vor der Output-Registrierung sowie die Phase, die Mindestzahl an Inputs und die Gebührengrenzen der Blame-Runde.

Diese Prüfungen begrenzen Änderungen während eines Wiederholungsversuchs. Sie garantieren weder den Abschluss einer Blame-Runde noch klären sie, wer die anderen Inputs kontrolliert, oder machen eine gescheiterte Runde zum Beweis eines Angriffs.

<span id="inspect-a-completed-round" data-ginger-heading="eine-abgeschlossene-runde-untersuchen" aria-hidden="true"></span>

## Eine abgeschlossene Runde untersuchen

Klappe einen gruppierten CoinJoin-Eintrag im Verlauf auf und öffne die Details einer einzelnen Runde. Wähle **View transaction**, um deren Inputs und Outputs im größenveränderbaren Transaktionsbetrachter zu untersuchen. Er zeigt Eigentumszuordnung, Bezeichnungen und bekannte Anonymitäts-Scores, soweit verfügbar; unbekannte Werte belegen nicht, wem die Coins eines anderen Teilnehmers gehören. Die [Anleitung zum Transaktionsbetrachter](/de/payments/coin-control-history/#inspect-inputs-and-outputs) beschreibt die verfügbaren Details und Kopieraktionen.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="private-coins-und-eine-andere-output-wallet" aria-hidden="true"></span>

## Private Coins und eine andere Output-Wallet

Der normale Start lehnt eine Wallet oder verfügbare Kandidatenauswahl ab, deren Coins das Privatsphäreziel bereits erreichen. Eine andere Output-Wallet erzwingt keine Runde mit ausschließlich privaten Coins. Prüfe [die Output-Wallet-Einstellungen](/de/coinjoin/settings/), bevor du dich auf eine Weiterleitungsroutine verlässt.

Für Scoreberechnungen und vollständigen Wertabgleich nutze [Gebühren und Privatsphäre-Fortschritt](/de/using-ginger/annonset/).
