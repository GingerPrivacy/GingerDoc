---
doc_id: "learn-coinjoin.when-to-use"
title: "Wann ist CoinJoin sinnvoll?"
description: "Prüfe, ob CoinJoin dein Bitcoin-Privatsphäreproblem adressiert, welche Kosten entstehen und wie du spätere Ausgaben planst."
lang: "de"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Schwierigkeitsgrad: Alltagsnutzung. Wähle diese Anleitung, wenn du die beschriebene Aufgabe erledigen möchtest.

CoinJoin ist nützlich, wenn weniger Informationen über Transaktionsverknüpfungen ein tatsächliches Problem lösen. Es hilft weniger bei gestohlenen Wiederherstellungswörtern, einem kompromittierten Computer oder Informationen, die du einem Anbieter gleich direkt offenlegst.

<span id="start-with-a-concrete-objective" data-ginger-heading="mit-einem-konkreten-ziel-beginnen" aria-hidden="true"></span>

## Mit einem konkreten Ziel beginnen

Vielleicht soll ein künftiger Empfänger weniger direkten Einblick in den Verlauf eines zuvor identifizierten Empfangs haben. Halte fest, wer diesen Empfang kennt und was die nächste Zahlung offenlegt. CoinJoin kann das Verknüpfungsproblem dazwischen verändern, aber weder die erste Offenlegung rückgängig machen noch die zweite verhindern.

Geht es nur um Schlüsselschutz beim Halten von Bitcoin, helfen ein wiederherstellbares Backup und ein geeigneter Hardware-Wallet-Ablauf direkter. Wird eine öffentliche Adresse für jede Rechnung wiederverwendet, stoppe zuerst die Wiederverwendung; späterer CoinJoin macht alte Eingänge nicht privat.

<span id="compare-the-tradeoffs" data-ginger-heading="kompromisse-vergleichen" aria-hidden="true"></span>

## Kompromisse vergleichen

| Situation | Zu prüfende Entscheidung |
| --- | --- |
| Viele kleine Coins bei hohen Mining-Gebühren | Teilnahme kann relativ viel verbrauchen; Gebühren prüfen und Warten erwägen |
| Eine sofort fällige Zahlung | CoinJoin-Abschluss ist nicht terminiert; verlasse dich für feste Fristen nicht auf eine Runde |
| Langfristige Ausgaben aus identifizierter Quelle | Zusammenspiel von CoinJoin, getrennten Empfangsadressen und späterer Coin-Auswahl prüfen |
| Anbieter verlangt Identität und Adressnachweis | Direkte Offenlegung bleibt; prüfen, ob CoinJoin relevante Informationen verändert |
| Ziel ist eine Hardware-Wallet | Empfangskonto und veröffentlichten Zielablauf prüfen; Hardware-Wörter nicht in eine Hot Wallet importieren |
| Desktop kann nicht verfügbar bleiben | Automatische Teilnahme braucht Verbindung und entsperrte Signiermöglichkeit während der Runde |

Das sind Kompromisse, keine Empfehlung für bestimmte Beträge oder Zusicherung finanzieller Ergebnisse. Lerne mit einem kleinen verkraftbaren Betrag und gleiche Gebühren ab, bevor du mehr riskierst.

<span id="set-a-cost-and-attention-budget" data-ginger-heading="kosten--und-aufmerksamkeitsbudget-festlegen" aria-hidden="true"></span>

## Kosten- und Aufmerksamkeitsbudget festlegen

Prüfe beide Gebührenkomponenten und wiederholte Runden. Entscheide über akzeptable Kosten für den gewünschten Privatsphärenutzen und die Häufigkeit deiner Ergebnisprüfung. Ein lokales Anonymitätsziel ist ein Steuerparameter, weder ein Gebührenangebot noch eine messbare Garantie gegenüber Gegnern.

Gingers Stoppschwelle kann unwirtschaftliche automatische Teilnahme teilweise verhindern. Zeitpräferenz und Gebührenschwelle können Teilnahme bei hohen Kosten reduzieren. Diese Einstellungen begrenzen nicht allgemein deine Gesamtausgaben über viele Runden.

<span id="plan-the-next-spend" data-ginger-heading="die-nächste-ausgabe-planen" aria-hidden="true"></span>

## Die nächste Ausgabe planen

Fordere ein neues Ziel an, halte nützliche lokale Bezeichnungen und prüfe Inputs. Führe nicht reflexartig alle Outputs für eine einfachere Wallet-Anzeige zusammen. Verstehe vor einer Zahlung Identitätsoffenlegungen gegenüber Händlern oder Börsen.

Betrachte beworbene Akzeptanz anderer Anbieter nicht als dauerhaft. Dienste können Richtlinien ändern oder Übertragungen hinterfragen. Ginger garantiert weder künftige Akzeptanz noch die Entfernung aller historischen Zuordnungen durch CoinJoin.

<span id="try-the-released-workflow-deliberately" data-ginger-heading="den-veröffentlichten-ablauf-bewusst-ausprobieren" aria-hidden="true"></span>

## Den veröffentlichten Ablauf bewusst ausprobieren

Wenn Ziel, Backup und Kosten klar sind, öffne eine synchronisierte Software-Wallet, prüfe **Coinjoin Settings** und wähle manuellen Start oder **Automatically start coinjoin**. Beobachte den Status und prüfe eine abgeschlossene Runde im Verlauf. Pausiere bei unerwartetem Verhalten oder Kontostand und untersuche vor weiterer Teilnahme.

Lies für die Annahmen [Worauf du bei CoinJoin vertraust](/de/learn-coinjoin/trust-and-limits/). Dort werden Schlüsselkontrolle, Transaktionsprivatsphäre, Dienstverfügbarkeit und Vertrauen in die ausgeführte Software getrennt.
