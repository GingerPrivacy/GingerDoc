---
doc_id: "backup-recovery.recovery-options"
title: "Erweiterte Wiederherstellung: Konten, Adresssuche und Dateien"
description: "Untersuche Wiederherstellungskompatibilität, Gap Limit, Wallet-JSON-Importe und fehlende Metadaten nach Prüfung der ursprünglichen Wörter und Passphrase."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Bewahre die ursprünglichen Wiederherstellungsinformationen und Wallet-Dateien auf, bevor du Wiederherstellungs- oder Dateieinstellungen änderst.

Schließe zuerst [die normalen Wiederherstellungsprüfungen](/de/backup-recovery/restore/) ab: gewünschte Wallet, exakte ursprüngliche Wörter und Passphrase, Verbindung und Suchfortschritt. Diese Seite behandelt konkrete Gründe, weshalb diese Prüfungen nicht ausreichen können.

<span id="address-scanning-and-account-compatibility" data-ginger-heading="adresssuche-und-kontokompatibilität" aria-hidden="true"></span>

## Adresssuche und Kontokompatibilität

Der Wiederherstellungsbildschirm akzeptiert gültige englische Wörterfolgen mit 12, 15, 18, 21 oder 24 Wörtern und prüft deren Prüfsumme. Gültige Wörter allein belegen keine Kompatibilität eines Kontos aus einer anderen Anwendung.

Falls du vor einer bezahlten Adresse ungewöhnlich viele ungenutzte Empfangsadressen erzeugt hast, bietet **Advanced Recovery Options** die Einstellung **Minimum Gap Limit:**. Der Standardwert des veröffentlichten Wiederherstellungsbildschirms ist 114. Ein höherer Wert erweitert die Suche auf Kosten zusätzlicher Arbeit und Zeit; er korrigiert keine falschen Wörter, falsche Passphrase oder inkompatiblen Wallet-Formate. Verwende einen größeren Wert nur bei entsprechender Adresshistorie.

Eine in einer anderen Anwendung erstellte Wallet kann andere Adresstypen, Konten oder Ableitungspfade nutzen. BIP39-Wörter garantieren nicht, dass jede Wallet jedes Konto findet. Gingers Standard-Mainnet-Konten verwenden für natives SegWit `m/84'/0'/0'` und für Taproot `m/86'/0'/0'`. Erweiterte Wiederherstellung in einer anderen Anwendung muss das betreffende Konto und den Adresstyp unterstützen. Führe Hardware-Wiederherstellungen nach Möglichkeit auf einem Hardware-Gerät durch.

Diese Ginger-Version bietet keine SLIP39-Share-Wiederherstellung. Gib eine Sammlung von Wiederherstellungsanteilen nicht wie eine einzelne BIP39-Wortliste ein.

<span id="import-a-file" data-ginger-heading="eine-datei-importieren" aria-hidden="true"></span>

## Eine Datei importieren

Wähle **Import File** beim Hinzufügen einer Wallet und eine kompatible `.json`-Datei. Ginger kann einen anderen Namen verlangen, falls einer bereits verwendet wird. Eine beliebige JSON-Datei, Transaktions-PSBT oder in eine Textdatei kopierter xpub ist kein kompatibles Wallet-Backup.

Öffne eine geschützte importierte Software-Wallet mit der ursprünglichen Passphrase. Eine durch 2FA verschlüsselte Datei entspricht keinem unverschlüsselten portablen Backup. Erhalte zugehörige Dateien und Zugangsdaten oder stelle stattdessen aus Wörtern und ursprünglicher Passphrase wieder her. Ein importierter Hardware-Export erzeugt eine Wallet, die zum Signieren weiterhin vom Gerät abhängt.

<span id="what-recovery-does-not-restore" data-ginger-heading="was-die-wiederherstellung-nicht-zurückbringt" aria-hidden="true"></span>

## Was die Wiederherstellung nicht zurückbringt

Die Blockchain stellt keine privaten Bezeichnungen, sämtliche Anwendungseinstellungen oder Anbieter-Bestellmetadaten wieder her. Sichere die passende `.attr`-Datei, wenn diese wichtig sind. Überschreibe neu wiederhergestellte Dateien nicht bei laufendem Ginger mit alten Metadaten. Arbeite bei Hilfe zu Begleitdaten mit Kopien und beschreibe Dateinamen und Version, ohne Inhalte öffentlich zu teilen.

Behalte Originale und arbeite mit Kopien. Lies vor Eingriffen in lokale Daten [Wallet-Dateibackups](/de/backup-recovery/backup-files/).
