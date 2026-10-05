---
doc_id: "payments.coin-control-history"
title: "Coin-Kontrolle, Verlauf und festhängende Transaktionen"
description: "Prüfe Ginger-UTXOs und Zahlungsverlauf, wähle Coins bewusst und verstehe Möglichkeiten zur Beschleunigung oder Stornierung."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Verstehe zuerst normale Sendevorschau, Empfängerbetrag und Gebühr.

Der Gesamtkontostand kann viele einzelne Coins verschiedener Herkunft, Bestätigung und Privatsphärehistorie enthalten. Coin-Kontrolle hilft bei der Entscheidung, welche du ausgibst. Sie erleichtert aber auch versehentliche Verknüpfungen bislang getrennten Guthabens; nutze sie mit konkretem Zweck.

<span id="inspect-and-select-coins" data-ginger-heading="coins-prüfen-und-auswählen" aria-hidden="true"></span>

## Coins prüfen und auswählen

Wähle **Wallet Coins** im Wallet-Menü. Prüfe Betrag, Bezeichnungen, Bestätigungen und Privatsphäredaten deiner Coins. Eine Transaktion kann mehrere Coins erzeugen und eine Adresse mehrere getrennte Zahlungen empfangen; weder eine Zeile noch eine Adresse muss eine ganze Wallet sein.

Wähle **Send** → **Manual Control**, um einzelne Coins im Zahlungsablauf zu bearbeiten. Wähle genug Wert für Zahlung und Gebühr. Prüfe Inputs und Wechselgeld vor der Bestätigung. Ausgewählte Coins stehen dem Transaktionsgenerator zur Verfügung; erst die endgültige Vorschau zeigt, welche tatsächlich verwendet werden.

Behalte Bezeichnungen zur Herkunft oder dazu, wer Guthaben bereits kennt. Coins zu verwenden, die demselben Empfänger bereits zugeordnet sind, kann weniger neue Informationen offenlegen als nicht zusammengehörige Quellen zu kombinieren. Eine Bezeichnung belegt keine Anonymität und verhindert keine fremde Blockchain-Analyse.

<span id="consolidation-and-small-coins" data-ginger-heading="zusammenführung-und-kleine-coins" aria-hidden="true"></span>

## Zusammenführung und kleine Coins

Eine Zusammenführung gibt mehrere kleine Coins in weniger Outputs aus, meist an eine eigene Wallet. Sie kostet jetzt Gebühren und kann die spätere Inputzahl verringern. Gleichzeitig verknüpft sie ausgewählte Inputs öffentlich. Niedrige Gebühren machen sie günstiger, beseitigen aber nicht diesen Privatsphärekompromiss.

Kombiniere nicht zusammengehörige Coins nicht automatisch für eine ordentliche Liste. Sehr kleine eingehende Outputs können unwirtschaftlich auszugeben sein. Gingers Dust-Schwelle und CoinJoin-Ausschlüsse betreffen verschiedene Situationen; ein CoinJoin-Ausschluss verhindert keine Auswahl für normale Zahlungen.

Eine Übertragung an deine Hardware-Wallet mit **Send** ist eine normale On-Chain-Transaktion. Beschaffe und prüfe eine neue Hardware-Empfangsadresse und kontrolliere dann Gebühr und ausgewählte Coins der Software-Wallet. Die Übertragung bleibt auf der Blockchain sichtbar.

<span id="read-transaction-history" data-ginger-heading="den-transaktionsverlauf-lesen" aria-hidden="true"></span>

## Den Transaktionsverlauf lesen

Die Wallet-Startseite zeigt eingehende, ausgehende und CoinJoin-Aktivitäten. Erweitere gruppierte CoinJoin-Einträge für einzelne Runden. Sortierfunktionen helfen beim Vergleich von Datum, Betrag, Bezeichnungen und Status. Öffne Transaktionsdetails für ID und verfügbare Bestätigungs- oder Gebührenangaben.

Nutze **Copy Transaction ID**, um eine bestimmte Transaktion zu identifizieren. Halte IDs möglichst privat: Teilen kann Adressen, Beträge und Aktivitätsverknüpfungen offenlegen. Ein öffentlicher Explorer erfährt außerdem deine Abfragen. Prüfe eigene Zahlungen zuerst in Gingers lokalem Verlauf.

Du kannst den Verlauf prüfen, sortieren, gruppieren und IDs kopieren. Diese Version bietet in diesem Ablauf keine Transaktionssuche oder CSV-Exportsteuerung.

<span id="speed-up-an-unconfirmed-transaction" data-ginger-heading="eine-unbestätigte-transaktion-beschleunigen" aria-hidden="true"></span>

## Eine unbestätigte Transaktion beschleunigen

Bietet Ginger **Speed Up Transaction** für einen Verlaufseintrag an, öffne die Aktion und prüfe die zusätzliche Gebühr vor der Bestätigung. Je nach Transaktion und verfügbaren Outputs ersetzt sie eine Transaktion durch eine Version mit höherer Gebühr oder gibt einen Output in einer Kindtransaktion aus, deren Gebühr für beide Transaktionen ausreicht.

Nicht jede Transaktion kann deine Wallet beschleunigen. Nötig sind unterstützte Struktur und Zugriff auf relevante Schlüssel und Guthaben. Eine höhere Gebühr erhöht den Miner-Anreiz, garantiert aber keine sofortige Bestätigung. Eine Ersetzung kann die ID ändern; prüfe den aktualisierten Verlauf bei Empfängerabsprachen.

<span id="cancel-an-unconfirmed-transaction" data-ginger-heading="eine-unbestätigte-transaktion-stornieren" aria-hidden="true"></span>

## Eine unbestätigte Transaktion stornieren

**Cancel Transaction** versucht, soweit angeboten, die ausstehende Zahlung durch eine gebührenpflichtige Transaktion zu ersetzen, die relevantes Guthaben an dich zurückführt. Das ist ein Wettlauf mit der Bestätigung des Originals, kein von jedem Node akzeptierter Rückgängig-Befehl.

Lies Dialog und Gebühr, bestätige nur bei entsprechender Absicht und beobachte, was tatsächlich bestätigt wird. Bestätigt das Original zuerst, kann die Stornierung es nicht umkehren. Bitte nach einer bestätigten Zahlung gegebenenfalls um eine separate Rückerstattung; Ginger kann sie nicht zurückholen.

Starte keine zweite Zahlung und verspreche keine Rückerstattung, bevor du die bestätigte Transaktion kennst. Explorer und Wallet können vorübergehend verschiedene Mempool-Daten zeigen, weil sie unterschiedliche Nodes sehen.
