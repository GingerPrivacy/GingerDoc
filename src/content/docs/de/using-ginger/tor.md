---
doc_id: "settings-network.tor-sync"
title: "Tor, Synchronisierung und Netzwerkprivatsphäre"
description: "Verstehe Gingers Verbindungen, Tor-Schutz und die Untersuchung langsamer Synchronisierung ohne Offenlegung von Wallet-Aktivität."
lang: "de"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Schwierigkeitsgrad: Alltagsnutzung. Wähle diese Anleitung, wenn du die beschriebene Aufgabe erledigen möchtest.

Ginger benötigt Netzwerkdaten, um deine Transaktionen zu finden, Zahlungen zu veröffentlichen und an CoinJoin teilzunehmen. Tor ist enthalten und für normale Netzwerkverbindungen standardmäßig aktiviert. Es hilft, deine IP-Adresse von kontaktierten Diensten zu trennen, verbirgt aber keine öffentlichen Bitcoin-Beträge oder Transaktionen.

<span id="tor-settings" aria-hidden="true"></span>

## Tor-Einstellungen

Öffne **Settings** → **Security** und suche **Network anonymization (Tor)**. Lass die Option für normale private Nutzung aktiv. Starte nach Aufforderung neu, damit die laufende Netzwerkkonfiguration den Einstellungen entspricht. Gingers 2FA benötigt Tor; bei aktivierter 2FA beschränkt die Oberfläche dessen Deaktivierung.

**Terminate Tor when Ginger shuts down** steuert das Beenden von Tor. Ein Tor-Prozess kann nach Fensterschließung bleiben, weil die Wallet im Hintergrund läuft oder Tor nicht auf Beenden eingestellt ist. Fensterschließen und Anwendung beenden sind verschieden.

Tor auszuschalten verändert Offenlegungen gegenüber Diensten und Peers; es ist kein harmloser Leistungsschalter. Koordinator- oder Veröffentlichungspeer-Verbindungen können dann deiner Netzwerkadresse zugeordnet werden. Deaktiviere es nicht routinemäßig wegen wartendem CoinJoin.

Gingers Tor-Verbindung macht einen externen Browser außerdem nicht zum Tor Browser. Anbieterseiten, Explorer und andere Links verwenden den konfigurierten Browser. Prüfe ihn separat, bevor du annimmst, dass seine Anfragen den Netzwerkschutz der Wallet übernehmen.

<span id="what-synchronization-does" aria-hidden="true"></span>

## Was Synchronisierung tut

Ginger findet potenziell relevante Blöcke mit kompakten Blockfiltern und verarbeitet heruntergeladene Blockdaten lokal für die Wallet. Das reduziert die Notwendigkeit, eine Liste sämtlicher Adressen an öffentliche Wallet-Server zu senden. Es bleibt von Netzwerkdiensten und Peers für Daten sowie der Korrektheit lokaler Software abhängig.

Erstnutzung und Wiederherstellung können länger dauern als das erneute Öffnen einer kürzlich verwendeten Wallet. Fortschritt kann Verbindung, Filterabruf, Blockdownload und Wallet-Verarbeitung umfassen. Wiederhergestellte Wallets zeigen möglicherweise vorübergehend unvollständigen Verlauf oder verbergen Aktionen bis zum Suchabschluss.

Full-Node-Betrieb und Wallet-Synchronisierung sind getrennte Aufgaben. Der optionale Full Node validiert die Blockchain; die Wallet muss eigene Transaktionen finden. Ein synchronisierter Node beweist keinen abgeschlossenen Scan einer frisch wiederhergestellten Wallet.

<span id="when-synchronization-appears-stuck" aria-hidden="true"></span>

## Bei scheinbar stockender Synchronisierung

1. Prüfe genauen Status und zeitliche Änderungen. Eine große Wiederherstellungssuche unterscheidet sich von **Awaiting connection**.
2. Prüfe Internetzugang des Computers, korrektes Datum und Uhrzeit sowie freien Speicherplatz. Prüfe, ob Ginger seine Daten schreiben darf.
3. Prüfe bei konfiguriertem Full Node dessen Erreichbarkeit und Synchronisierung. Kontrolliere den Endpunkt, statt Wallet-Zugangsdaten zu ändern.
4. Schließe Ginger normal und öffne es einmal neu, falls die Verbindung weiter stockt. Bewahre bei wiederkehrendem Fehler den Text und Protokollkontext.

Wird Tor in deinem Netzwerk blockiert, nutze die [Verbindungshilfe des Tor-Projekts](https://support.torproject.org/). Die veröffentlichten Ginger-Einstellungen bieten keinen dokumentierten Bridge-Konfigurationsassistenten. Kopiere Tor-Browser-Einstellungen nicht in beliebige Ginger-Konfigurationsfelder in der Annahme, sie funktionierten dort.

Nutze **Wallet Settings** → **Tools** → **Resync** nur bei einem Grund zum Neuaufbau der Wallet-Ansicht. Sichere zuerst Backups und lass die erneute Suche abschließen. Den Datenordner zu löschen ist kein erster Diagnoseschritt.

<span id="separate-network-choice-from-real-funds" aria-hidden="true"></span>

## Netzwerkwahl und echtes Guthaben trennen

Die veröffentlichte Netzwerkauswahl unter **Settings** → **Bitcoin** bietet Main und RegTest. RegTest ist eine isolierte Testumgebung ohne echten Bitcoin-Wert; ihr Betrieb gehört nicht zu diesem Handbuch. Diese Version bietet dort keine öffentliche Testnet-Auswahl. Netzwerkwechsel überträgt kein Guthaben zwischen den Netzen.
