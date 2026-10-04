---
doc_id: "coinjoin.fees-and-progress"
title: "CoinJoin-Gebühren und Privatsphäre-Fortschritt"
description: "Plane vollständige CoinJoin-Kosten, unterscheide Gebührenbefreiung von kostenlosen Transaktionen und interpretiere Ginger-Scores anhand von Beispielen."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Verstehe zuerst die normalen Start- und Pausensteuerungen und dass abgeschlossene Runden Gebühren kosten.

CoinJoin hat Kosten und ein Privatsphäreziel. Prüfe beides vor dem Start: Eine Koordinatorgebührenbefreiung macht die Runde nicht kostenlos, und eine Fortschrittsanzeige misst nicht alles, was andere über dich wissen.

<span id="coordinator-fee-versus-mining-fee" data-ginger-heading="koordinator--und-mining-gebühren" aria-hidden="true"></span>

## Koordinator- und Mining-Gebühren

Mit Gingers aktuellen Einstellungen bezahlt jeder Input von höchstens 3,000,000 Satoshis (0.03 BTC) keine Koordinatorgebühr. Genau 0.03 BTC sind eingeschlossen. Größere Inputs bezahlen normalerweise 0.3 % ihres gesamten Werts, nicht nur des Anteils über 0.03 BTC. Dezimal beträgt die Rate 0.003; rechnerische Satoshi-Bruchteile werden abgerundet.

Die Schwelle wird für jeden Input getrennt geprüft, nicht anhand des Gesamtkontostands oder der Summe registrierter Inputs. Geeignete Remixes können ebenfalls befreit sein; Gingers beworbene Befreiung umfasst direktes Ausgeben von CoinJoin-Guthaben über eine Transaktion. Diese Zusatzbefreiungen hängen von der angebotenen Runde und Input-Eignung ab. Prüfe vor Teilnahme erneut die [aktuelle Ginger-Gebührenerklärung](https://gingerwallet.io/).

Für Inputs ohne andere Koordinatorgebührenbefreiung:

| Inputwert | BTC-Wert | Koordinatorgebühr |
| --- | --- | --- |
| 2,999,999 Satoshis | 0.02999999 BTC | 0 Satoshis |
| 3,000,000 Satoshis | 0.03 BTC | 0 Satoshis |
| 3,000,001 Satoshis | 0.03000001 BTC | 9,000 Satoshis |
| 4,000,000 Satoshis | 0.04 BTC | 12,000 Satoshis |

Der 0.04-BTC-Input bezahlt beispielsweise 0.00012 BTC (12,000 Satoshis), nicht 0.3 % nur der 0.01 BTC über der Schwelle. Mining-Gebühren kommen hinzu, auch bei Koordinatorgebühr null. Die Beispiele erklären die konfigurierte Berechnung, kein Angebot für künftige Runden.

Mining-Gebühren entschädigen Miner für Transaktionsplatz. Sie hängen von Gebührenrate sowie Inputs und Outputs der Transaktion ab. Einen kleinen Coin auszugeben kann einen großen Anteil seines Werts kosten. Wiederholte CoinJoins können jeweils weitere Mining-Kosten verursachen, auch wenn sie von der Koordinatorgebühr befreit sind.

Teile Coins nicht allein zur Gebührenbefreiung auf, ohne zusätzliche Transaktionen, Gebühren und öffentliche Verknüpfungen zu verstehen.

<span id="account-for-the-complete-cost" data-ginger-heading="die-vollständigen-kosten-erfassen" aria-hidden="true"></span>

## Die vollständigen Kosten erfassen

Dein ausgegebener Betrag kann mehr als den beworbenen Koordinatorprozentsatz enthalten. CoinJoin benötigt auch Transaktionsplatz, und nach der Verteilung verfügbaren Werts durch den Client können Outputbeträge einen kleinen Rest hinterlassen. Dieser kann zum Koordinatorerlös oder zur Mining-Gebühr beitragen; er erscheint nicht unbedingt als eigener Gebührenposten in der Wallet.

Vergleiche für einen abgeschlossenen CoinJoin den Gesamtwert deiner Inputs mit allen eigenen Outputs dieser Transaktion. Schließe an andere Output-Wallets gesendete Werte ein. Ziehe nicht sämtliche Outputs der gemeinsamen Transaktion nur von deinen Inputs ab: Andere Teilnehmer besitzen einen Teil davon.

Folgendes ist ein Rechenbeispiel, keine Vorhersage von Ginger-Outputs oder ein Anwendungsbildschirm:

| Posten | Satoshis |
| --- | ---: |
| Dein gebührenpflichtiger Input | 5,000,000 |
| Deine Outputs über beide Wallets summiert | 4,980,800 |
| Wertdifferenz | 19,200 |
| Angenommene Koordinatorgebühr: 0.3 % des Inputs | 15,000 |
| Hier deiner Teilnahme zugeordnete Mining-Kosten | 3,600 |
| Verbleibende Verteilungsdifferenz | 600 |

Hier gilt 15,000 + 3,600 + 600 = 19,200 Satoshis. Die letzten drei Zeilen erklären dieselbe Differenz; addiere sie nicht nochmals als zusätzliche Belastung. Auch die rundenweite Mining-Gebühr bezahlt nicht jeder Teilnehmer vollständig. Einzelne Gebührenfelder oder Protokollzeilen decken nicht automatisch jede Wertdifferenzkomponente ab.

Gehen Outputs an Hardware, ist ihr Verschwinden aus dem Softwarekontostand eine Übertragung weiterhin eigenen Werts. Warte vor dem Abgleich, bis beide Wallets synchronisiert sind. Unbestätigte Transaktionen, parallele Zahlungen und eingehendes Guthaben können einen einfachen Vorher-nachher-Kontostandsvergleich irreführend machen.

<span id="budget-for-the-whole-journey" data-ginger-heading="den-ganzen-weg-budgetieren" aria-hidden="true"></span>

## Den ganzen Weg budgetieren

Berücksichtige auch die Schritte um CoinJoin bei der Nutzen-Kosten-Entscheidung:

| Schritt | Zu berücksichtigende Kosten |
| --- | --- |
| Börsenauszahlung | Auszahlungsentgelt, möglicherweise anders als deren Transaktions-Mining-Gebühr |
| Eine oder mehrere Runden | Tatsächliche Wertdifferenz jeder abgeschlossenen Teilnahme |
| Übertragung an andere Wallet | Weitere Mining-Gebühr einer normalen Übertragung |
| Späteres Ausgeben | Gebühren für Inputs und Outputs jener Zahlung |

Eine Teilnahme für 19,200 Satoshis plus eine Übertragung für 1,200 Satoshis kostet beispielsweise 20,400 Satoshis für diese zwei Schritte. Spätere Zahlungen kosten separat. Mehr Outputs schaffen kleinere getrennt ausgebbare Stücke, verbrauchen beim Ausgeben aber ebenfalls Platz. Diese künftigen Kosten werden nicht schon bei Outputerzeugung bezahlt.

Lerne mit einem verkraftbaren Betrag und prüfe das erste abgeschlossene Ergebnis, bevor du wiederholte Runden weiterlaufen lässt. Halte ein persönliches Kostenbudget; CoinJoin-Zeitpräferenz oder Coin-Auswahleinstellung garantiert keine Obergrenze für die gesamten Kosten des Wegs.

<span id="when-ginger-waits-or-refuses-a-round" data-ginger-heading="wenn-ginger-wartet-oder-eine-runde-ablehnt" aria-hidden="true"></span>

## Wenn Ginger wartet oder eine Runde ablehnt

Der Client prüft Bedingungen vor Teilnahme. Er kann **Mining fee rate was too high**, **Coordination fee rate was too high**, **Min input count was too low** oder **Server did not give remix fee exemption** anzeigen. Prüfe Bedingungen, statt Grenzen blind anzuheben.

Gebührenpräferenzen können **Awaiting cheaper coinjoins** auslösen. Zeitpräferenz bedeutet Warten auf relativ günstigere Bedingungen, keine garantierte Fertigstellung in einem Tag oder einer Woche. Eine gescheiterte Runde vor Veröffentlichung erzeugt nicht selbst eine neue bestätigte Bitcoin-Transaktion.

Der normale CoinJoin-Start lehnt in dieser Version auch Wallets ab, deren Guthaben das Privatsphäreziel bereits erreicht, oder Auswahlen nur solcher Coins. Eine andere Output-Wallet umgeht diese Prüfung nicht. Prüfe zum Bewegen bereits privater Coins eine normale Übertragung, statt von der Zielauswahl eine erzwungene Runde zu erwarten.

<span id="what-the-privacy-score-can-tell-you" data-ginger-heading="was-der-privatsphärescore-sagt" aria-hidden="true"></span>

## Was der Privatsphärescore sagt

Ginger verfolgt Privatsphäredaten der Coins und vergleicht sie mit dem Anonymitätsscore-Ziel der Wallet. Der Score ist eine lokale Schätzung anhand ihrer Transaktionskenntnis. Er ist weder eine Zahl unabhängig geprüfter Menschen noch die Wahrscheinlichkeit, dass ein Beobachter dich identifiziert.

Der Gesamtfortschritt gewichtet den Scorefortschritt nach Beträgen. Die separate farbige Guthabenaufteilung zeigt Beträge nach Privatsphärekategorien. Das sind verschiedene Messungen.

Vereinfachtes Beispiel mit Ziel 5 und nur zwei Coins:

| Coin | Wert | Lokaler Score | Ziel erreicht? |
| --- | ---: | ---: | --- |
| A | 1,000,000 Satoshis | 5 | Ja |
| B | 3,000,000 Satoshis | 3 | Nein |

Nur 25 % des Werts erreicht das Ziel. Für Gesamtfortschritt gewichtet diese Version Fortschritt oberhalb Score 1: A liefert 1,000,000 × 4 und B 3,000,000 × 2 gegenüber maximal 4,000,000 × 4. Das ergibt 62.5 %, angezeigt ganzzahlig als 62 %. Unterschiedliche Prozente in beiden Ansichten sind daher nicht automatisch Fehler.

**Hurray! All your funds are private!** bedeutet, dass die Wallet Guthaben nach aktuellem Ziel und ihrer Berechnung privat nennt. Es bedeutet weder verschwundenen Verlauf noch Internetanonymität oder Unverknüpfbarkeit späterer Zahlungen.

<span id="decide-when-you-have-achieved-your-objective" data-ginger-heading="entscheiden-wann-dein-ziel-erreicht-ist" aria-hidden="true"></span>

## Entscheiden, wann dein Ziel erreicht ist

Ein niedrigeres Ziel kann die Einstufung verändern, ohne bereits veröffentlichte Blockchain-Daten zu ändern. Ein höheres kann mehr Teilnahme und Gebühren verlangen, kauft aber keine garantierte Zahl anonymer Personen. Neue Eingänge, kombinierte Coins oder Wiederherstellung ohne lokale Metadaten können ebenfalls die Anzeige verändern.

Bestimme, wessen Wissen du begrenzen möchtest: das einer Börse, eines bestimmten Empfängers oder eines Beobachters einer veröffentlichten Adresse. Sie können Beträge, Zeiten und Identitäten kennen, die Ginger nicht sieht. Beurteile die nächste Zahlung ebenso wie den aktuellen Score.

Pausiere zum Prüfen abgeschlossener Runden, zum Abgleichen deiner Coins und zum Planen ihrer späteren Ausgabe. Bewahre bei Installationswechsel lokale Metadaten, wenn du diesen Kontext behalten möchtest. Siehe [CoinJoin-Einstellungen](/de/coinjoin/settings/) für Scoreziel, Gebührenpräferenzen und Outputzielsteuerungen.
