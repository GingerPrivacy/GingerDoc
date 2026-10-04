---
doc_id: "learn-coinjoin.trust-and-limits"
title: "Worauf vertraust du bei CoinJoin?"
description: "Unterscheide Bitcoin-Schlüsselkontrolle, Privatsphäreannahmen, Koordinatorverfügbarkeit, unabhängige Teilnehmer und Softwareprüfung."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Lies zuerst die einfache CoinJoin-Erklärung.

Mit Ginger behältst du die Bitcoin-Signierbefugnis, statt Guthaben bei einem Mixer einzuzahlen. Das beantwortet eine wichtige Verwahrungsfrage. Privatsphäre, Verfügbarkeit und Softwareintegrität werfen weitere Fragen auf.

Bestimme vor Teilnahme dein Ziel: Vielleicht soll ein Empfänger weniger über andere Zahlungen erfahren oder die Verbindung künftiger Ausgaben zu einem öffentlichen Empfang schwächer werden. CoinJoin kann Transaktionsverknüpfungen erschweren, aber bereits vom Empfänger erhaltene Informationen nicht entfernen.

<span id="four-separate-questions" aria-hidden="true"></span>

## Vier getrennte Fragen

| Frage | Schutz und Annahme | Was damit nicht belegt ist |
| --- | --- | --- |
| Wer kann ausgeben? | Deine Wallet prüft den Vorschlag und signiert ihre Inputs. Der Koordinator braucht keine Wiederherstellungswörter. | Schutz vor gestohlenen Schlüsseln, Schadsoftware oder bewusst ans falsche Ziel autorisierten Transaktionen |
| Wer verknüpft Inputs und Outputs? | WabiSabi verschleiert Registrierungsbeziehungen mit anonymen Berechtigungsnachweisen. Öffentliche Transaktionsdaten und andere Beobachtungen bleiben bestehen. | Bedingungslose Garantie gegen bösartige Koordinatoren, zusammenarbeitende Teilnehmer oder Zusatzinformationen |
| Wer kann Fortschritt stoppen? | Erfolg benötigt Koordinator, Netzwerk und genug kooperierende Teilnehmer für den Rundenabschluss. | Reservierte Abschlusszeit oder Teilnahmeanspruch an jeder Runde |
| Welche Software läuft? | Quelloffenheit ermöglicht Prüfung; Downloadprüfung hilft Herkunft und Unverändertheit der Datei festzustellen. | Fehlerfreiheit jedes Builds, nicht kompromittierter Computer oder exakte Ausführung veröffentlichten Codes beim Dienst |

Die [WabiSabi-Veröffentlichung, Abschnitt 7](https://cryptoeconomicsystems.pubpub.org/pub/ficsor-wabisabi-coordinated/release/3) behandelt Privatsphäre, aktive Angriffe und Diebstahlverhinderung getrennt. Diese Anleitung überträgt das auf Nutzerentscheidungen; sie ist kein Sicherheitsaudit einer installierten Wallet oder eines Koordinators.

<span id="consider-the-observer" aria-hidden="true"></span>

## Den Beobachter berücksichtigen

Ein passiver Blockchain-Beobachter sieht Inputs, Outputs, Beträge und spätere Ausgaben. Er kann Heuristiken anwenden und mit anderswo gewonnenen Informationen kombinieren. Ein Händler kennt zusätzlich Rechnung und Kunden. Eine Börse kennt ihre Aus- oder Einzahlung.

Ein Teilnehmer kennt eigene Inputs und Outputs und kann manche Möglichkeiten ausschließen. Ein Koordinator verarbeitet Registrierungen und beobachtet Protokollzeiten; ein aktiv bösartiger Koordinator kann Teilnehmer oder Rundenabschluss beeinflussen. Diese Fähigkeiten unterscheiden sich. Aussagen nur über öffentliche Blockchain-Beobachtung sind kein Schutzversprechen gegen alle.

<span id="apparent-participants-are-not-independent-people" aria-hidden="true"></span>

## Scheinbare Teilnehmer sind keine unabhängigen Personen

Bei einem Sybil-Angriff erscheint ein Akteur als mehrere Teilnehmer. Kontrolliert er die meisten Aktivitäten rund um ein Ziel, kann er eigene Coins als Möglichkeiten ausschließen. Eine geschäftig wirkende Transaktion kann ihm weniger Unsicherheit bieten als einem uninformierten Beobachter.

Echte Inputs und Mining-Kosten schaffen wirtschaftliche Grenzen. Sie lassen normale Nutzer aber nicht die unabhängige Identität jedes Teilnehmers prüfen. Inputzahl, Outputzahl, Transaktionsvolumen und Wallet-Anonymitätsscore zählen daher keine unabhängigen Personen.

Größere Runden können mehr Möglichkeiten bieten; Beträge, Teilnehmerwissen und spätere Transaktionen bleiben relevant. Keine Rundenzahl und kein Zielwert beweist, dass ein Angreifer nichts gelernt hat.

<span id="when-the-coordinator-or-connection-is-unavailable" aria-hidden="true"></span>

## Wenn Koordinator oder Verbindung ausfallen

Coins unter deinen Schlüsseln werden nicht zu einer Forderung gegen den Koordinator. Ein erfolgloser Versuch vor Veröffentlichung überträgt sie nicht von selbst an ihn. Während aktiver Runden muss Ginger jedoch womöglich kritische Schritte abschließen, bevor Coins anderweitig verfügbar sind; nutze die Pausensteuerung und beachte den Status.

Kann CoinJoin nicht fortfahren, pausiere und prüfe den Grund. Normales Senden benötigt weiterhin verfügbare Signierung, ausgebbare Coins, synchronisierte Informationen und Veröffentlichung. Ein Koordinatorausfall rechtfertigt weder Backupverwerfung noch Wörteruploads an Ersatzdienste. Optionale Ginger-2FA hat eine eigene Dienstabhängigkeit beim normalen Start; halte Wörter und ursprüngliche Passphrase unabhängig wiederherstellbar.

Eine Ablehnung oder gescheiterte Runde beweist weder Angriff noch Urteil über deine Identität. Umgekehrt bestätigt eine erfolgreiche Runde keine Koordinatorehrlichkeit. Bewahre relevante private Aufzeichnungen bei konkreten Untersuchungen.

<span id="decisions-you-can-make" aria-hidden="true"></span>

## Deine Entscheidungen

1. Beziehe Ginger offiziell und prüfe den Download. Nutze authentifizierte Updates und schütze den Signiercomputer.
2. Lass Tor für den vorgesehenen Wallet-Netzwerkschutz aktiv. Es verbirgt explizit übermittelte Informationen nicht vor dem Empfänger.
3. Prüfe ausgewählte Wallet, Outputziel, geeignete Coins und Kosteneinstellungen. Erhöhe Grenzen nicht allein zum Verstummen eines ungeklärten Fehlers.
4. Halte unabhängige Wiederherstellungsdaten. Gib Koordinator oder Support niemals Wörter, Passphrase oder private Schlüssel zum „Entsperren“ einer Runde.
5. Prüfe Ergebnis und spätere Ausgaben. Neue Adresse und hoher Score machen eine neue Offenlegung an identifizierte Empfänger nicht rückgängig.

Ein eigener Bitcoin-Node hilft bei seinen tatsächlichen Aufgaben, etwa konfigurierten Block- oder Gebührendaten. Er ersetzt weder Koordinator noch beweist er Teilnehmerunabhängigkeit. Hardware-Wallets isolieren Schlüssel, machen aber keinen Transaktionsgraphen privat.

Lies für das Grundmodell [CoinJoin erklärt](/de/learn-coinjoin/explained/) und für bestimmte Ziele [Wann CoinJoin sinnvoll ist](/de/learn-coinjoin/when-to-use/). Prüfe starke Produktaussagen anhand von Beobachter, Annahmen, Softwareversion und Belegen.
