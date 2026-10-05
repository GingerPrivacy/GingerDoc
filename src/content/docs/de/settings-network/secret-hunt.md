---
doc_id: "settings-network.secret-hunt"
title: "Secret Hunt in Ginger Wallet"
description: "Finde Secret-Hunt-Ereignisergebnisse, steuere die Wallet-Teilnahme und verstehe die an den Ereignisdienst übermittelten Informationen."
lang: "de"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Schwierigkeitsgrad: Alltagsnutzung. Wähle diese Anleitung, wenn du die beschriebene Aufgabe erledigen möchtest.

**Secret Hunt** zeigt Ereignisgeheimnisse im Zusammenhang mit geeigneten CoinJoin-Aktivitäten. Das ist getrennt von Privatsphärescore und normalem Bitcoin-Empfang oder -Ausgeben. Ereignisse hängen vom Dienst ab; die Funktion verspricht weder ein aktuelles Ereignis noch Preise oder Belohnungen.

<span id="view-and-control-participation" data-ginger-heading="teilnahme-ansehen-und-steuern" aria-hidden="true"></span>

## Teilnahme ansehen und steuern

Wähle **Secret Hunt** im Menü einer Software-Wallet. Der Dialog zeigt Ergebnisse in einer Baumansicht einschließlich entdeckter Wörter oder Sätze und eines zusätzlichen Geheimnisses nach Sammlung der erforderlichen Geheimnisse. Erweitere ein Ereignis, um Einträge zu prüfen.

Nutze **Enable/disable the use of this wallet for Secret Hunt.** zur Steuerung dieser Wallet. Standardmäßig ist es in dieser Version aktiviert. Ausschalten leert den angezeigten Baum der deaktivierten Ansicht und verhindert die Auswahl dieser Wallet durch den Updater für Teilnahmeberechtigungsprüfungen. Es storniert weder CoinJoin noch löscht es Blockchain-Transaktionen oder bereits übermittelte Informationen.

Für beobachtende Wallets wird der Eintrag nicht angeboten. Er ist keine Hardware-Wallet-CoinJoin-Funktion und verlangt keine Wiederherstellungswörter auf einer Ereigniswebsite.

<span id="what-is-shared" data-ginger-heading="was-geteilt-wird" aria-hidden="true"></span>

## Was geteilt wird

Der Client ruft Ereignisinformationen von Gingers Dienst ab. Für Berechtigungsprüfungen kann er eine CoinJoin-Transaktions-ID, eine ausgewählte Inputreferenz und einen kryptografischen Eigentumsnachweis senden. Dieser beweist Kontrolle für die Ereignisanfrage ohne Übermittlung des privaten Schlüssels. Das sind zusätzliche Offenlegungen auf Anwendungsebene, auch bei Tor-Verbindungen.

Tor schützt auf Netzwerkebene, verbirgt aber nicht den Anfrageinhalt vor dem Empfänger. Deaktiviere Secret Hunt, wenn eine Wallet nicht für solche Prüfungen verwendet werden soll. Ereignislistenabfragen und normale Wallet-Netzwerkaktivität sind von diesem Wallet-Schalter getrennt.

<span id="missing-or-incomplete-results" data-ginger-heading="fehlende-oder-unvollständige-ergebnisse" aria-hidden="true"></span>

## Fehlende oder unvollständige Ergebnisse

Ergebnisse hängen von Ereigniszeitraum, geeigneter bestätigter Aktivität, Dienstverfügbarkeit und regelmäßigen Updates ab. Eine erfolgreiche Runde kann ohne neues Geheimnis enden. Warten auf Ergebnisse beweist kein fehlendes Bitcoin-Guthaben.

Erzeuge keine zusätzlichen gebührenpflichtigen Transaktionen in der Annahme, eine Belohnung gleiche sie aus. Lies tatsächliche Ereignisbedingungen aus authentifizierter Quelle vor deiner Teilnahmeentscheidung. Ignoriere Aufforderungen zum Hochladen einer Wallet-Datei oder zum Senden einer separaten „Einlösegebühr“ an unaufgefordert mitgeteilte Supportadressen.
