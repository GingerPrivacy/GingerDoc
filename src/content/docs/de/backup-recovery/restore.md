---
doc_id: "backup-recovery.restore"
title: "Eine Wallet oder fehlendes Guthaben wiederherstellen"
description: "Stelle eine Ginger-Wallet mit ursprünglichen Wörtern und Passphrase wieder her und prüfe ausgewählte Wallet und Suchfortschritt vor besonderen Wiederherstellungsfällen."
lang: "de"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Schwierigkeitsgrad: Alltagsnutzung. Wähle diese Anleitung, wenn du die beschriebene Aufgabe erledigen möchtest.

Wiederherstellung ist eine Suche nach Schlüsseln und deren Transaktionsverlauf. Sichere vor Beginn die Wallet-Dateien des alten Computers, falls zugänglich. Arbeite mit Kopien und behalte Originale, bis du die wiederhergestellte Wallet geprüft hast.

<span id="recover-from-words" data-ginger-heading="aus-wörtern-wiederherstellen" aria-hidden="true"></span>

## Aus Wörtern wiederherstellen

1. Installiere und prüfe Ginger auf einem vertrauenswürdigen Computer. Wähle **Recover** beim Hinzufügen einer Wallet.
2. Gib **Wallet Name** ein, falls angefordert. Nutze einen eindeutigen Namen, um Verwechslungen mit vorhandenen Wallets zu vermeiden.
3. Gib die ursprünglichen Wiederherstellungswörter in Reihenfolge ein. Nutze das tatsächliche Backup, keine neu erzeugte Wörterfolge.
4. Gib unter **Enter Passphrase** die Passphrase ein, mit der die ursprüngliche Wallet erstellt wurde. Lasse sie nur leer, wenn die ursprüngliche Wallet keine hatte. Du setzt kein Ersatzpasswort.
5. Lass Synchronisierung und Wiederherstellung abschließen. Prüfe bekannte Transaktionen und Empfangsadressen statt nur den angezeigten Fiatwert. Manche normalen Wallet-Aktionen sind während der Wiederherstellung ausgeblendet.

Verschiedene Passphrasen leiten verschiedene gültige Wallets ab. Ein Tippfehler kann daher bei einer Seed-Wiederherstellung eine leere Wallet ohne Meldung „falsche Passphrase“ erzeugen. Prüfe Großschreibung, Leerzeichen, Tastaturlayout und ursprüngliches Backup, bevor du Guthaben für verschwunden hältst.

<span id="an-apparently-empty-recovered-wallet" data-ginger-heading="eine-scheinbar-leere-wiederhergestellte-wallet" aria-hidden="true"></span>

## Eine scheinbar leere wiederhergestellte Wallet

Prüfe zuerst gewünschte Wallet und Netzwerk. Mainnet und Testnetze haben getrennte Coins. Prüfe dann Verbindung und Wiederherstellungsfortschritt. Solange die Anwendung sucht, ist ein unvollständiger Kontostand kein endgültiges Ergebnis.

Wenn diese Prüfungen stimmen, aber bekannte Transaktionen fehlen, ändere Einstellungen nicht wahllos. Eine in einer anderen Anwendung erstellte Wallet oder viele ungenutzte Adressen können eine gezielte Untersuchung erfordern.

Optionale weiterführende Referenz: [Konten, Adresssuche und Dateiimport](/de/backup-recovery/recovery-options/). Sie behandelt diese Fälle, ohne spezielle Einstellungen zum normalen Wiederherstellungsablauf aus Wörtern zu machen.

Wiederherstellung aus Wörtern stellt den Zugriff auf zugehörige Schlüssel her. Private Bezeichnungen und andere lokale Aufzeichnungen können ein separates Dateibackup erfordern.

<span id="if-something-is-missing" data-ginger-heading="wenn-etwas-fehlt" aria-hidden="true"></span>

## Wenn etwas fehlt

| Was du noch hast | Praktischer nächster Schritt |
| --- | --- |
| Wörter und ursprüngliche Passphrase | Auf einer vertrauenswürdigen Installation wiederherstellen |
| Zugängliche Wallet, aber fehlende oder ungültige Wörter | Neue gesicherte Wallet erstellen und Guthaben übertragen, solange der Zugriff besteht |
| Wallet-Datei und ursprüngliche Zugangsdaten | Import einer Kopie versuchen; alle Begleitdateien sichern |
| Wörter, aber vergessene nicht leere Passphrase | Ginger kann sie nicht zurücksetzen; eine leere Wallet ist kein Wiederherstellungserfolg |
| Hardware-Gerät, aber kein zuverlässiges Backup | Vor Gefährdung des Geräts das Backupprüfverfahren des Herstellers befolgen |
| Weder Ausgabezugriff noch brauchbare Wiederherstellungsdaten | Support kann fehlende Schlüssel nicht erzeugen |

Gib einem „Wiederherstellungshelfer“ niemals Wörter, Passphrase, private Schlüssel oder Wallet-Datei. Eine seriöse Diagnose beginnt mit nicht geheimen Angaben wie Anwendungsversion, Netzwerk und Fehlertext.
