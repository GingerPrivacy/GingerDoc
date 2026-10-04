---
doc_id: "learn-privacy.information-sharing"
title: "Wohin deine Wallet-Informationen gelangen"
description: "Verstehe Offenlegungen bei Synchronisierung, CoinJoin, Anbietern, Explorern, 2FA, Secret Hunt und anderen Wallets sowie Tors Wirkung."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Verstehe zuerst neue Empfangsadressen und normale Zahlungsprüfung.

Verschiedene Wallet-Aktionen legen unterschiedliche Informationen offen. Öffentliche Blockfilter zu prüfen, einen CoinJoin-Input zu übermitteln und eine Kaufseite zu öffnen sind nicht dasselbe Privatsphäreereignis. Nutze diese Referenz, bevor du etwas teilst, das du nicht zurücknehmen kannst.

Tor reduziert direkte IP-Offenlegung bei darüber geleiteten Verbindungen. Es verbirgt eine Anfrage nicht vor dem Empfangsdienst, entfernt keine Blockchain-Transaktion, schützt keinen entsperrten Computer und verändert deinen externen Browser nicht automatisch. Ein konfigurierter lokaler Node ist eine separate Verbindung zu einem von dir kontrollierten Rechner.

<span id="synchronization-and-bitcoin-network-activity" aria-hidden="true"></span>

## Synchronisierung und Bitcoin-Netzwerkaktivität

| Aktion und Empfänger | Beteiligte Informationen | Deine Wahl |
| --- | --- | --- |
| Synchronisierungsdaten von Gingers Backend herunterladen | Öffentliche Filter werden ab aktueller Synchronisierungsposition angefordert. Wallet-Scripts werden lokal abgeglichen, statt hierbei einen Konto-xpub zu senden. Der Dienst sieht trotzdem Anfragen und Zeiten. | Tor aktiv lassen; Synchronisierung abschließen, ohne das Backend für blind gegenüber jeder Nutzung zu halten. |
| Einen passenden Block von einer Blockquelle laden | Die Quelle kennt den angeforderten vollständigen Block. Ein Filtertreffer kann falsch positiv sein; eine Blockanfrage beweist keinen Besitz einer enthaltenen Transaktion. | Ein korrekt konfigurierter eigener Node kann Blöcke liefern. Er ersetzt nicht jeden anderen Ginger-Dienst. |
| Gebührenschätzungen anfordern | Der konfigurierte Anbieter erhält eine Anfrage zu öffentlichen Gebühreninformationen, keine Abfrage deiner Transaktion oder deines Kontostands. | Unter **Fee Rate Provider** passende veröffentlichte Quelle wählen; eigener Node benötigt funktionierende Konfiguration. |
| Zahlung veröffentlichen | Ein Peer oder Ersatzdienst erhält die signierte Transaktion. Inputs, Outputs und Beträge werden bei Verbreitung sichtbar. | Vor Signierung prüfen. Tor verändert Verbindungsexposition, nicht Zahlungsinhalt. Ginger kann bei Fehlschlägen Ersatzwege verwenden. |

Schütze bei einem selbst betriebenen Node den Rechnerzugriff und etwaige Fernverbindungen. Sein Betreiber kann Anfragen beobachten; ein bloß „eigener Node“ genannter Server ist bei fremder Administration nicht notwendigerweise privat. Normaler Internetzugang, Peer-Erkennung und Dienstverfügbarkeit bleiben relevant.

<span id="coinjoin-and-optional-services" aria-hidden="true"></span>

## CoinJoin und optionale Dienste

| Aktion und Empfänger | Beteiligte Informationen | Deine Wahl |
| --- | --- | --- |
| CoinJoin-Koordination | Inputs, Eigentumsnachweise, Outputregistrierungen, Protokollnachrichten und Zeiten. WabiSabi verschleiert unter seinen Annahmen die Input-Output-Zuordnung. | Teilnahme, Kosten und Ziel prüfen; Tor aktiv lassen. Selbstverwahrung schützt nicht gegen jeden aktiven Beobachter. |
| Kauf-/Verkaufsangebote und Adressprüfung | Land, Währung, Betrag und gegebenenfalls Zahlungsmethode. Adressprüfung sendet die vorgeschlagene Adresse vor Bestellabschluss an den Kauf-/Verkaufsdienst. | Offenlegung vor Fortsetzung bedenken, auch bei späterem Abbruch. |
| Bestellung erstellen oder fortsetzen | Integration sendet Bestelldetails und Empfangs-/Rückerstattungsadresse und öffnet Anbieterablauf. Anbieter kann Zahlungs-, Kontakt- oder Identitätsdaten nach eigenen Bedingungen verlangen. | Aktuelle Bedingungen lesen und nur beabsichtigte Daten liefern. Ginger macht identifizierte Käufe nicht anonym. |
| Optionale Ginger-2FA | Normale Startprüfung sendet Authenticator-Code und Installationskennung. Der Dienst liefert den Schlüssel für zusätzliche Wallet-Dateiverschlüsselung. | Zugriffsschutz und Dienstabhängigkeit abwägen. Wörter und ursprüngliche Passphrase unabhängig verfügbar halten. |
| Secret-Hunt-Prüfungen | Geeignete Prüfungen können Runden-ID, Transaktions-ID, Input-Outpoint und Kontrollnachweis senden. Ein Outpoint bezeichnet einen konkreten Output einer früheren Transaktion. | **Secret Hunt** öffnen und **Enable/disable the use of this wallet for Secret Hunt.** prüfen. Standardmäßig aktiv, auch ohne aktuelle Ereignisse. Ausschalten widerruft frühere Anfragen nicht. |

Tor verbirgt weder zur Prüfung gesendete Adressen noch Bestelldetails, 2FA-Kennung oder Secret-Hunt-Eigentumsnachweise vor dem jeweiligen Empfangsdienst. Diese Beobachtungen bedeuten aber nicht, dass ein Dienst allein durch eine Transaktionskennung Wiederherstellungswörter oder Ausgabeautorität erhält.

Die 2FA-Kennung kann normale Startversuche beim Dienst miteinander verknüpfen. Der zurückgegebene Verschlüsselungsschlüssel ist Teil eines zusätzlichen lokalen Dateischutzes, kein neuer Bitcoin-Schlüssel anstelle deiner Wörter und Passphrase. Gib weder diese Geheimnisse noch Authenticator-Codes an Supportkontakte.

<span id="browsers-other-applications-and-people" aria-hidden="true"></span>

## Browser, andere Anwendungen und Menschen

| Aktion | Mögliche Offenlegung | Nützliche Gewohnheit |
| --- | --- | --- |
| Öffentlicher Explorer | Abgefragte Transaktion/Adresse und Browser-Netzwerk-/Sitzungsdaten | Zuerst lokalen Verlauf nutzen; Explorer nur bei benötigten Zusatzdaten öffnen. |
| Anbieterwebsite | Bestelldetails, Anmelde-/Zahlungsdaten, Cookies und browserspezifische Beobachtungen | Sitzung getrennt von Gingers Tor betrachten. |
| xpub-Import oder dasselbe Konto in anderer App | Öffentlicher Adresszweig oder Wallet-Abfragen je nach App | Synchronisierung und Datenweitergabe vor Import prüfen. „Watch-only“ beschreibt Ausgabebefugnis, keine Vertraulichkeit. |
| Adresse in Nachricht oder Beitrag teilen | Verbindung von Adresse und Person/Konto | Neue Adresse über vertrauenswürdigen Kanal an vorgesehenen Zahler geben. |
| Protokolle, Dateien oder Bildschirm teilen | Je nach Material Pfade, Bezeichnungen, Adressen, Transaktions-/Rundenkennungen und eventuell Geheimnisse | Kleinsten relevanten geprüften Auszug teilen. Nie vollständige Daten oder Wiederherstellungsgeheimnisse bloß auf Anfrage senden. |

Webzahlungsforschung zeigt, warum Browserbeobachtungen und Blockchain-Daten gemeinsam betrachtet werden müssen. Sie belegt keine aktuellen Trackingregeln eines bestimmten Ginger-Anbieters. [Goldfeder und Kollegen, When the Cookie Meets the Blockchain](https://arxiv.org/abs/1708.04748)

<span id="local-information-also-needs-protection" aria-hidden="true"></span>

## Auch lokale Informationen schützen

Bezeichnungen, Privatsphäreberechnung und Anbieter-Bestellaufzeichnungen können in Wallet-Metadaten liegen. Sie helfen späteren Entscheidungen und Wiederherstellung, sind aber nicht alle identisch mit Signierschlüsseln geschützt. Schütze Computer, Backups und Konten mit Zugriff darauf. **Discreet Mode** hilft bei unterstützten Bildschirmfeldern; die Betriebssystemsperre schützt unbeaufsichtigten Zugriff umfassender.

Wiederherstellung aus Wörtern kann ausgebbare Schlüssel ohne sämtliche privaten Notizen wiederherstellen. Diese Notizen zu löschen entfernt keine bereits vorhandenen Empfänger- oder Dienstinformationen. Lies vor Installationswechsel [Wallet-Migration](/de/learn-privacy/wallet-migration/) und prüfe vor Zahlungen [Privatsphäregewohnheiten](/de/using-ginger/address-reuse/).
