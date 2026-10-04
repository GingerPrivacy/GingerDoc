---
doc_id: "help.troubleshooting"
title: "Probleme mit Ginger Wallet beheben"
description: "Diagnostiziere fehlendes Guthaben, Verbindungsprobleme, CoinJoin-Wartezustände, 2FA-Fehler und Hardwareprobleme unter Erhalt deiner Wiederherstellungsdaten."
lang: "de"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Schwierigkeitsgrad: Alltagsnutzung. Wähle diese Anleitung, wenn du die beschriebene Aufgabe erledigen möchtest.

Beginne mit dem exakten Fehler, ausgewählter Wallet, Netzwerk und Anwendungsversion. Sichere Wiederherstellungsinformationen und Wallet-Dateien vor Datenänderungen. Neuinstallation, Ordnerlöschung oder neue Wörter sind bei Verbindungs- oder Anzeigeproblemen selten der erste Schritt.

<span id="balance-recovery-and-receiving" aria-hidden="true"></span>

## Kontostand, Wiederherstellung und Empfang

| Symptom | Zuerst prüfen | Nächster Schritt |
| --- | --- | --- |
| Wiederhergestellte Wallet ist leer | Originalwörter, exakte Passphrase, Netzwerk, Suchfortschritt | Nach Synchronisierung bekannte Adressen oder Verlauf vergleichen; nur bei ungeklärten normalen Prüfungen erweiterte Schritte verwenden |
| Eingehende Zahlung fehlt | Richtige Adresse, Sender-Transaktions-ID, ausgewählte Wallet | Veröffentlichung und Bestätigung prüfen, danach lokale Synchronisierung |
| Receive oder Send fehlt | Läuft Wiederherstellung noch? Ist die Wallet Watch-only? | Wiederherstellung abwarten oder erforderliches Signiergerät verwenden |
| Alte Adresse fehlt in Empfangsliste | Wurde sie bezahlt oder ausgeblendet? | Verlauf prüfen; Listensichtbarkeit entwertet keine Schlüssel |
| Nur Kleinstzahlung fehlt | Dust-Schwelle und Synchronisierung | Einstellung vergleichen, bevor du Diebstahl vermutest |
| Bezeichnungen fehlen nach Seed-Wiederherstellung | Wurde passende ATTR-Datei gesichert? | Datei erhalten; Blockchain rekonstruiert keine Bezeichnungen |

Gib keine Wörter auf einer Website zum „Resynchronisieren“ ein. Nutze den Wiederherstellungsablauf einer installierten geprüften Wallet nur auf vertrauenswürdigem Computer.

<span id="connection-or-synchronization" aria-hidden="true"></span>

## Verbindung oder Synchronisierung

Prüfe Verbindung, Computeruhr, freien Speicher und Zustand eines konfigurierten Full Nodes. Ein Erstscan benötigt möglicherweise nur Zeit. Ändert sich Fortschritt nie, schließe Ginger normal und öffne es einmal neu. Notiere das Ergebnis, statt wiederholt die Suche neu zu starten.

**Awaiting connection** kann CoinJoin und andere Dienste verhindern, auch bei zwischengespeichertem Verlauf. Betrachte einen getrennten Kontostand als möglicherweise unvollständig. Lass Tor während der Untersuchung aktiv. Node-P2P und RPC-Gebührenschätzung sind getrennt; wenn eines funktioniert, belegt das nicht das andere.

Sichere vor **Wallet Settings** → **Tools** → **Resync** und erwarte einen neuen Scan. Lösche nicht `Wallets`, `WalletBackups` oder 2FA-Dateien, nur um eine Fortschrittsmeldung zu entfernen.

<span id="coinjoin-does-not-start" aria-hidden="true"></span>

## CoinJoin startet nicht

| Meldung oder Zustand | Wahrscheinliche Handlung |
| --- | --- |
| **Insufficient funds eligible for coinjoin** | Bestätigung, Coin-Größen, Gebühren und Ausschlüsse prüfen; Gesamtguthaben allein belegt keine Eignung |
| **Only excluded funds are available** | **Exclude Coins** prüfen, wenn bestimmte Coins teilnehmen sollen |
| **Only immature funds are available** | Erforderliche Reife abwarten; frisch geminte Outputs haben besondere Ausgaberegeln |
| **Some funds are rejected from coinjoining** | Grund und aktuelle Bedingungen lesen; Ablehnung überträgt kein Eigentum |
| **Awaiting cheaper coinjoins** | Kosteneinstellungen prüfen und entscheiden, ob Warten zum Ziel passt |
| **Coinjoin may be uneconomical** | Stoppschwelle und relative Kosten vor manueller Übersteuerung prüfen |
| **Awaiting the blame round** | Protokollwiederholung abwarten; keine Aufforderung zur Schuldzuweisung |
| **Awaiting closure of send dialog** | Sendeablauf abschließen oder schließen |
| **Mining fee rate was too high** oder **Coordination fee rate was too high** | Warten oder angebotene Bedingungen untersuchen; Grenzen nicht blind erhöhen |
| Hardware-Quell-Wallet | Automatische CoinJoin-Signierung braucht eine geeignete Software-Wallet |

Teilnehmer können Schritte nicht abschließen oder Coins nach unterbrochener Teilnahme vorübergehend blockiert sein. Wiederholte Versuche, Importe oder Umgehung von Koordinatorablehnungen sind keine Reparatur. Nutze Grund und Status für die Entscheidung zwischen Warten und offiziellem Support.

<span id="payment-or-fee-problems" aria-hidden="true"></span>

## Zahlungs- oder Gebührenprobleme

Fehlen Schätzungen, warte, repariere die gewählte Anbieter-/Node-Verbindung oder nutze eine manuelle Rate, die du verstehst. Der endgültige Betrag plus Gebühren muss in ausgebbares Guthaben passen. Lange unbestätigte Ketten können das Warten auf frühere Bestätigungen erfordern.

Nutze **Speed Up Transaction** oder **Cancel Transaction** nur bei Angebot durch Ginger und nach Gebührenprüfung. Stornierung versucht Ersetzung einer ausstehenden Zahlung, keine Umkehr einer bestätigten. Prüfe bei unklarem Veröffentlichungsresultat den Verlauf vor einer Doppelzahlung.

<span id="2fa-and-hardware" aria-hidden="true"></span>

## 2FA und Hardware

Prüfe bei abgelehntem Code Telefonzeit, gewählten Eintrag, Authenticator-Kompatibilität und Tor-/Dienstverbindung. Erhalte bestehende Wallet- und 2FA-Dateien. Ist normaler Start nicht wiederherstellbar, bilden Wörter plus ursprüngliche Passphrase das unabhängige Schlüsselbackup; Neuinstallation über dieselben Daten erzeugt keinen verlorenen Authenticator. Die [erweiterten FAQ](/de/help/advanced-faq/#does-the-2fa-file-recover-the-wallet-without-the-service) erklären diese Dateiabhängigkeit.

Nutze zur Erkennung ein entsperrtes Gerät, Datenkabel und direkten Port, während konkurrierende Geräteanwendungen geschlossen sind. Erledige notwendige Bitcoin-App-, PIN- und Passphraseschritte am Gerät. Prüfe unter Linux Hersteller-USB-Berechtigungen. Halte den Geräte-Seed vom Computer fern.

<span id="report-a-useful-issue" aria-hidden="true"></span>

## Einen nützlichen Fehlerbericht erstellen

Nutze Links aus dem [offiziellen Ginger-Repository](https://github.com/GingerPrivacy/GingerWallet/issues). Nenne Version, Betriebssystem und Prozessor, genauen Fehler, erwartetes Ergebnis und kürzeste nicht geheime Reproduktionsschritte. Erwähne bei Bedarf Hardware-Modell und Firmware.

Gingers Suchaktion **Logs** öffnet Diagnoseprotokolle. Prüfe und schwärze sie vor Weitergabe: Pfade, Adressen, IDs, Bezeichnungen und Bestelldaten können sensibel sein. Teile einen minimalen relevanten Auszug, nicht den gesamten Datenordner. Ein öffentliches Issue ist öffentlich; keine Supportanfrage sollte Wörter oder Passphrase verlangen.
