---
doc_id: "getting-started.install"
title: "Ginger Wallet installieren"
description: "Wähle den richtigen Ginger-Wallet-Desktop-Download, prüfe die Kompatibilität und installiere die veröffentlichte Anwendung."
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Ginger installieren
prev:
  link: /de/getting-started/
  label: Hier beginnen
next:
  link: /de/getting-started/first-wallet/
  label: Deine erste Wallet erstellen
---

> Schwierigkeitsgrad: Einstieg. Die wichtigsten Schritte stehen zuerst; weiterführende Anleitungen sind optional.

Ginger Wallet ist eine Bitcoin-Desktop-Wallet. Du hältst die Schlüssel zu deinen Bitcoin und kannst CoinJoin verwenden, um die Nachverfolgung von Transaktionen zu erschweren. Diese Version bietet keine mobile Wallet, keine Lightning-Wallet und keine Unterstützung für andere Kryptowährungen.

Diese Anleitung behandelt Version 2.0.26. Beziehe Software über die [offizielle Ginger-Website](https://gingerwallet.io/) oder die dort verlinkte [GitHub-Veröffentlichung](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26). Eine Suchanzeige, Privatnachricht oder ähnlich benannte Handy-App ist keine verlässliche Downloadquelle.

<span id="choose-a-download" data-ginger-heading="einen-download-wählen" aria-hidden="true"></span>

## Einen Download wählen

| Computer | Unterstütztes System dieser Version | Download |
| --- | --- | --- |
| Windows-PC, x64 | Windows 10, Version 1607 oder neuer; Windows 11, Build 22000 oder neuer | `Ginger-2.0.26.msi` |
| Mac mit Apple Silicon | macOS 12 oder neuer | `Ginger-2.0.26-arm64.dmg` |
| Mac mit Intel-Prozessor | macOS 12 oder neuer | `Ginger-2.0.26.dmg` |
| Ubuntu oder Debian, x64 | Ubuntu 22.04 oder neuer; Debian 11 oder neuer | `Ginger-2.0.26.deb` |
| Anderes unterstütztes Linux, x64 | Die Veröffentlichung nennt auch Fedora 37 oder neuer | `Ginger-2.0.26.tar.gz` |

Auf einem Mac zeigt **About This Mac** den Chip oder Prozessor. Die Veröffentlichung enthält außerdem ZIP-Archive mit den Bezeichnungen `win-x64`, `linux-x64`, `macOS-x64` und `macOS-arm64`. Diese Version enthält kein Windows-ARM- oder Linux-ARM-Paket. Gehe nicht davon aus, dass ein Archiv für einen anderen Prozessor funktioniert.

Ginger benötigt eine Internetverbindung und beschreibbaren Speicher für Wallet- und Synchronisierungsdaten. Der optionale Full Node braucht deutlich mehr Speicherplatz, Bandbreite und Zeit zur ersten Synchronisierung als die normale Wallet-Nutzung. Zum Einstieg brauchst du weder einen Full Node noch eine separate Tor-Installation oder Entwicklerwerkzeuge.

<span id="install-the-application" data-ginger-heading="die-anwendung-installieren" aria-hidden="true"></span>

## Die Anwendung installieren

1. Lade das Paket für dein System von der offiziellen Veröffentlichung herunter. Prüfe Quelle, Version und Paketname und beachte die Signatur- und Sicherheitsprüfungen deines Betriebssystems. Verwende für eine unabhängige PGP-Prüfung die passende `.asc`-Datei und die separate [erweiterte Anleitung zur Downloadprüfung](/de/getting-started/verify-download/), bevor du das Paket öffnest.
2. Öffne unter Windows die `.msi` und folge dem Installer. Öffne unter macOS die `.dmg` und kopiere Ginger nach Applications. Öffne unter Ubuntu oder Debian die `.deb` mit der Softwareinstallation des Systems. Entpacke bei einem Linux-Archiv das gesamte Archiv und starte die enthaltene Anwendung; halte ihre Begleitdateien zusammen.
3. Öffne Ginger. Gib der ersten Verbindung und Synchronisierung Zeit. Tor ist enthalten und startet normalerweise mit der Wallet.
4. Fahre mit [Eine Wallet erstellen und öffnen](/de/getting-started/first-wallet/) fort.

Ein ZIP- oder tar-Archiv umgeht den normalen Installer, macht deine Wallet aber weder wegwerfbar noch hinterlässt es keine Daten auf dem Computer. Wallet-Dateien werden getrennt von der Anwendung gespeichert. Sichere beide, bevor du sie verschiebst oder entfernst.

<span id="if-your-operating-system-displays-a-warning" data-ginger-heading="wenn-dein-betriebssystem-eine-warnung-anzeigt" aria-hidden="true"></span>

## Wenn dein Betriebssystem eine Warnung anzeigt

Eine neue Veröffentlichung hat möglicherweise noch keine etablierte Downloadreputation. Eine Warnung kann auch auf eine beschädigte oder nicht vertrauenswürdige Datei hinweisen. Prüfe zuerst Downloadquelle, passende Version und Signatur. Wenn die Prüfung scheitert, stoppe und lade erneut von der offiziellen Veröffentlichung herunter. Deaktiviere weder den Virenschutz noch systemweite Sicherheitsprüfungen, um eine ungeklärte Warnung zu umgehen.

Beachte bei Linux-Gerätezugriffsproblemen die USB-Berechtigungsanleitung deines Hardware-Wallet-Herstellers. Eine Wallet zu installieren erfordert nicht, sie dauerhaft als Administrator auszuführen.

<span id="updates-and-availability" data-ginger-heading="updates-und-verfügbarkeit" aria-hidden="true"></span>

## Updates und Verfügbarkeit

Die [Veröffentlichungsliste](https://github.com/GingerPrivacy/GingerWallet/releases) zeigt veröffentlichte Versionen und ihre Änderungen. Unter **Settings** → **General** steuert **Auto download new version** das Herunterladen von Updates. Herunterladen ist nicht gleich Installieren; folge der Updateabfrage und lass Ginger normal schließen. Halte vor Updates dein Wiederherstellungsbackup bereit. Anwendungsdateien können ersetzt werden, ohne absichtlich Wallet-Daten zu löschen.

Lies vor der Zustimmung die aktuellen Nutzungsbedingungen in Ginger einschließlich etwaiger Zugangsbeschränkungen. Die Installation bedeutet nicht, dass du jeden verbundenen Dienst nutzen darfst.
