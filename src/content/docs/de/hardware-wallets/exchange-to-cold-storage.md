---
doc_id: "hardware-wallets.exchange-to-cold-storage"
title: "Von der Börse zur Cold Storage mit Ginger"
description: "Zahle Bitcoin aus, nutze Ginger-CoinJoin und übertrage Guthaben an eine geprüfte Hardware-Wallet. Berücksichtige dabei Gebühren und erhalte deine Privatsphäre."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Richte zuerst eine geprüfte Hardware-Wallet mit einem unabhängigen Backup ein.

Ginger kann dir helfen, künftige Bitcoin-Aktivität von einer Börsenauszahlung zu trennen, bevor du Guthaben auf einer Hardware-Wallet lagerst. Die Börse behält ihre Auszahlungsaufzeichnungen. Die Hardware-Wallet schützt Signierschlüssel; die Transaktionen und deine späteren Ausgaben bestimmen weiterhin, was andere daraus ableiten können.

Es gibt zwei unterschiedliche Wege. Wähle einen vor Beginn, damit du weißt, in welcher Wallet die Outputs erscheinen sollen.

| Weg | Was geschieht | Wichtigster Aspekt |
| --- | --- | --- |
| CoinJoin in der Software-Wallet, danach eine normale Übertragung | Die Outputs bleiben in Gingers Software-Wallet, bis du Guthaben auswählst und an die Hardware sendest. | Du kannst zuerst ihre Privatsphäre prüfen; jede spätere Übertragung kostet Gebühren und legt ihre Input-Output-Beziehungen offen. |
| CoinJoin-Outputs direkt in der Hardware-Wallet empfangen | Eine geeignete Software-Wallet signiert den CoinJoin; ihre Outputs gehen an die geladene Hardware-Wallet. | Für diese Outputs entfällt eine separate Übertragung. Sie verlassen die Quelle aber nach dieser Runde, ohne Garantie, dass sie dein Ziel erreichen. |

<span id="prepare-both-wallets" data-ginger-heading="beide-wallets-vorbereiten" aria-hidden="true"></span>

## Beide Wallets vorbereiten

1. Verwende eine geprüfte Ginger-Installation. Erstelle die Software-Wallet und sichere ihre Wiederherstellungswörter und ursprüngliche Passphrase. Halte in dieser Wallet nur den Betrag, den du verarbeiten möchtest.
2. Initialisiere und sichere die Hardware-Wallet über den unterstützten Ablauf ihres Herstellers. [Verbinde sie mit Ginger](/de/using-ginger/hardware-wallet/) und lass die Wallet synchronisieren.
3. Wähle in der Hardware-Wallet **Receive** und nutze, soweit verfügbar, **Show on the hardware wallet**. Vergleiche die vollständige Empfangsadresse auf Gerät und Computer. Führe einen kleinen Empfangs- und Signiertest durch, bevor du einer neuen Einrichtung einen größeren Betrag anvertraust.
4. Gib den Wallets unterschiedliche Namen, damit du Quelle und Ziel erkennst. Halte für jede ein wiederherstellbares Backup bereit; das Backup der Software-Wallet stellt keine Hardware-Wallet mit anderen Schlüsseln wieder her.

Gib die Wiederherstellungswörter der Hardware-Wallet niemals in Ginger ein, um CoinJoin zu ermöglichen. Dadurch bekäme der Desktop Zugriff auf die Signierschlüssel der Hardware-Wallet.

<span id="withdraw-from-the-exchange" data-ginger-heading="von-der-börse-auszahlen" aria-hidden="true"></span>

## Von der Börse auszahlen

Wähle in der Software-Wallet **Receive**, füge eine hilfreiche Bezeichnung hinzu und erzeuge eine neue Adresse. Kopiere sie in den Bitcoin-Auszahlungsablauf der Börse und prüfe die vollständige Adresse und das Netzwerk, bevor du die Auszahlung dort autorisierst. Ginger verwendet On-Chain-Bitcoin; eine Lightning-Rechnung oder das Netzwerk eines anderen Vermögenswerts ist kein austauschbarer Ersatz.

Erfasse die Auszahlungsgebühr der Börse separat. Der in Ginger ankommende Betrag kann kleiner sein als der von der Börse abgebuchte Betrag. Warte auf die Synchronisierung der Wallet und die Bestätigung des Guthabens, bevor du seine CoinJoin-Teilnahme erwartest. Eine Transaktions-ID hilft beim Abgleich; vermeide aber ihre Veröffentlichung oder wiederholte Abfragen in öffentlichen Explorern.

<span id="route-a-review-coinjoin-results-then-transfer" data-ginger-heading="weg-a-coinjoin-ergebnisse-prüfen-und-dann-übertragen" aria-hidden="true"></span>

## Weg A: CoinJoin-Ergebnisse prüfen und dann übertragen

1. Lass unter **Coinjoin Settings** der Quell-Wallet **Coinjoin to this wallet** auf die Quelle eingestellt. Prüfe das Privatsphäreziel, Gebührenpräferenzen und ausgeschlossene Coins, bevor du über die Starttaste des Players teilnimmst.
2. Beobachte abgeschlossene Runden und die Privatsphäredaten der Coins. Du kannst pausieren, um Gebühren und Fortschritt zu prüfen. Befindet sich eine Runde in einer kritischen Phase, lass Ginger die erforderlichen Arbeiten abschließen, statt die Anwendung zu beenden.
3. Beschaffe eine neue Hardware-Empfangsadresse und prüfe sie auf dem Gerät. Wähle in der Software-Wallet **Send** → **Manual Control** und das Guthaben, das du übertragen möchtest.
4. Prüfe die tatsächlich ausgewählten Inputs, das Ziel, den Empfängerbetrag, das Wechselgeld und die Gebühr. Bestätige die Übertragung erst, wenn alles deiner Absicht entspricht.
5. Prüfe den synchronisierten Verlauf der Hardware-Wallet und die übrigen Coins der Quell-Wallet. Warte auf die Bestätigung, bevor du die Übertragung als abgeschlossen betrachtest.

Alle Outputs gemeinsam zu senden schafft eine sichtbare Verbindung zwischen ihnen. Einzelne Coins zu übertragen vermeidet diese konkrete Mehrfachinput-Verbindung, kostet aber zusätzliche Gebühren und zeigt weiterhin eine Transaktion je Übertragung. Beträge, Zeitpunkte und das Vorwissen eines Beobachters können weitere Verbindungen liefern. Wähle einen praktikablen Übertragungsplan; gehe bei keinem der Ansätze von garantierter Anonymität aus.

<span id="route-b-choose-hardware-as-the-coinjoin-destination" data-ginger-heading="weg-b-hardware-als-coinjoin-ziel-wählen" aria-hidden="true"></span>

## Weg B: Hardware als CoinJoin-Ziel wählen

Verwende diesen Weg, solange die Software-Wallet noch für CoinJoin geeignetes Guthaben besitzt. Der normale Ablauf in v2.0.26 lehnt die Teilnahme ab, wenn die Wallet oder alle verfügbaren Kandidaten nach ihrem Ziel bereits privat sind. Ein anderes Ziel umgeht diese Prüfung nicht. Insbesondere ist der Ausschluss aller nicht privaten Coins kein zuverlässiger Weg, eine zusätzliche Runde nur mit Coins aus bereits abgeschlossenen Runden zu erzwingen. Nutze für dieses Guthaben Weg A, statt das Ziel nur zum Umgehen der Stoppbedingung zu ändern.

1. Lade und prüfe die Hardware-Wallet in Ginger. Stoppe die CoinJoin-Teilnahme der Quelle und warte, bis die Zielauswahl verfügbar wird.
2. Öffne **Coinjoin Settings** der Quell-Wallet. Stelle **Coinjoin to this wallet** auf die gewünschte Hardware-Wallet. Wähle nur ein von Ginger angebotenes Ziel.
3. Prüfe unter **Exclude Coins** Guthaben, das außerhalb von CoinJoin bleiben muss. Der Ausschluss betrifft konkrete Coins und reserviert nicht jeden künftigen Eingang aus derselben Quelle.
4. Prüfe das ausgewählte Ziel erneut und starte die Teilnahme. Lass die Anwendung laufen, während sie die Runde abschließt.
5. Prüfe nach einer erfolgreichen Runde beide Wallets. Nur ausgewählte Inputs wurden ausgegeben, und die resultierenden Outputs können sich auf mehrere Coins verteilen. Ein verbleibender Quellkontostand bedeutet nicht zwangsläufig einen Fehler.

Das Ziel erhält die Outputs der abgeschlossenen Runde; diese Einstellung wartet vor der Weiterleitung nicht auf ein separates Ereignis zur Erreichung des Privatsphäreziels. Prüfe ihre resultierenden Privatsphäredaten. Hardwareverwahrtes Guthaben kann anschließend über den normalen Hardware-Ablauf dieser Version keine CoinJoin-Inputs bereitstellen.

Die Zielauswahl wird nach einem Ginger-Neustart zurückgesetzt. Prüfe sie vor jeder Sitzung erneut. Du kannst sie während aktiver Teilnahme nicht ändern; nach der Signierung einer Transaktion kann eine Änderung diese nicht umleiten. Prüfe automatische Teilnahme ausdrücklich, statt eine dauerhafte Übertragung im Hintergrund anzunehmen.

<span id="reconcile-balances-and-plan-the-next-spend" data-ginger-heading="kontostände-abgleichen-und-nächste-ausgabe-planen" aria-hidden="true"></span>

## Kontostände abgleichen und nächste Ausgabe planen

Vergleiche die Abnahme an der Quelle mit den Hardware-Outputs und dem verbleibenden Quellguthaben. Die Differenz kann CoinJoin-Kosten enthalten. Ein Quellkontostand von null bedeutet keinen Verlust, wenn das gewünschte Ziel das Guthaben empfangen hat. Umgekehrt bedeutet eine erfolgreiche Runde nicht, dass jeder Quell-Coin übertragen wurde oder das Privatsphäreziel erreicht hat.

Prüfe beim späteren Ausgeben aus Hardware die Coin-Auswahl erneut. Nicht zusammengehörige Coins zu kombinieren kann Beziehungen offenlegen, unabhängig vom Speicherort ihrer Signierschlüssel. Nutze eine neue Empfängeradresse, prüfe Wechselgeld und bestätige am Gerät. Der [PSBT-Ablauf](/de/hardware-wallets/psbt/) bietet geeigneter Hardware eine unterstützte Dateisignierung; er verändert nicht die Privatsphärefolgen der signierten Transaktion.

Vermutest du bereits kompromittierte Signierschlüssel, hat der Schutz verbleibenden Guthabens Vorrang vor einem wartenden Privatsphäreablauf. Ein neues Gerät mit demselben offengelegten Seed widerruft diesen Seed nicht.
