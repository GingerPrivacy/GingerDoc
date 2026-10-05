---
doc_id: "backup-recovery.backup-files"
title: "Wallet-Dateien, Metadaten und Passphrase-Details"
description: "Sichere Gingers JSON- und ATTR-Dateien, verstehe die 2FA-Dateiabhängigkeit und bewahre eine wiederherstellbare Passphrase zusätzlich zum grundlegenden Wörterbackup auf."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Bewahre die ursprünglichen Wiederherstellungsinformationen und Wallet-Dateien auf, bevor du Wiederherstellungs- oder Dateieinstellungen änderst.

Nutze diese Referenz beim Kopieren lokaler Wallet-Daten oder um zu prüfen, was ein Backup erhält. Beginne mit [der grundlegenden Backupanleitung](/de/backup-recovery/backups/) für die Wiederherstellungsdaten jeder Software-Wallet.

<span id="what-to-keep" data-ginger-heading="was-du-aufbewahren-solltest" aria-hidden="true"></span>

## Was du aufbewahren solltest

| Backupelement | Zweck | Wichtige Grenze |
| --- | --- | --- |
| Wiederherstellungswörter in Reihenfolge | Wallet-Schlüssel neu erzeugen | Benötigen die ursprüngliche Passphrase, falls eine verwendet wurde |
| Ursprüngliche Passphrase mit exakter Großschreibung und Zeichen | Richtige BIP39-Wallet wählen und ihr geschütztes Geheimnis entsperren | Kann von Ginger nicht zurückgesetzt werden |
| Wallet-`.json`-Datei | Gespeicherte Schlüssel- und Synchronisierungsdaten erhalten | Verschlüsselte Dateien benötigen weiterhin Zugangsdaten; 2FA kann eine Dienstabhängigkeit hinzufügen |
| Zugehörige `.attr`-Datei | Lokale Bezeichnungen und Wallet-Attribute erhalten | Enthält sensible Metadaten; Wiederherstellungswörter stellen sie nicht wieder her |
| Wiederherstellungsbackup des Hardware-Geräts | Schlüssel nach dem Herstellerverfahren wiederherstellen | Vom Desktop-Computer fernhalten |

Der lokale automatische Backupordner liegt auf demselben Computer. Er hilft möglicherweise bei beschädigten Wallet-Dateien, schützt aber nicht vor Verlust der gesamten Festplatte, Diebstahl oder Ransomware.

<span id="make-a-file-backup" data-ginger-heading="ein-dateibackup-erstellen" aria-hidden="true"></span>

## Ein Dateibackup erstellen

Öffne **Data Folder** über Gingers Suche. Notiere den Ort und schließe Ginger normal, bevor du Dateien kopierst. Im normalen Mainnet-Datenordner enthält `Wallets` Wallet-`.json`-Dateien und zugehörige `.attr`-Dateien; `WalletBackups` enthält automatische Wallet-Backups. Andere Netzwerke verwenden eigene Unterordner.

Kopiere die relevanten Dateien auf geschützten Backupspeicher und erhalte Namen und Zuordnung der JSON- und ATTR-Dateien. Eine Kopie des Datenordners ist auch mit Passphrase datenschutzrelevant: Adressen, Bezeichnungen, Protokolle, Konfiguration und Bestellmetadaten können Aktivitäten offenlegen. Lade sie nicht in einen Issue-Tracker hoch und sende sie nicht per E-Mail an den Support.

Sichere bei aktivierter 2FA auch `2fa_info.gws`, verwechsle sie aber nicht mit einem unabhängigen Wiederherstellungsschlüssel. Sie enthält eine Kennung für Gingers 2FA-Dienst. Wiederherstellungswörter und ursprüngliche Passphrase bleiben der Weg, der nicht von der Entschlüsselung dieser konkreten lokalen Wallet-Datei abhängt.

<span id="choose-and-preserve-a-passphrase" data-ginger-heading="eine-passphrase-wählen-und-aufbewahren" aria-hidden="true"></span>

## Eine Passphrase wählen und aufbewahren

Wähle eine schwer erratbare Passphrase, die du exakt reproduzieren kannst. Zufällig ausgewählte Wörter aus einer definierten Wortliste oder ein starkes Passwort eines vertrauenswürdigen Passwortmanagers vermeiden die Vorhersehbarkeit von Namen, Daten, Zitaten und gewöhnlichen Sätzen. Von Menschen gewählte „zufällig wirkende“ Ersetzungen sind oft weniger unvorhersehbar, als sie erscheinen.

Entropie beschreibt die Unvorhersehbarkeit eines bestimmten Erzeugungsverfahrens; Länge allein belegt sie nicht. Sechs gleichverteilt gewählte Wörter aus einer großen Liste und sechs Wörter aus einem Lieblingslied widerstehen Rateversuchen nicht gleich gut. Dieses Handbuch verspricht nicht, dass eine bestimmte Zeichenzahl jeden Angriff abwehrt.

Notiere das erzeugte Ergebnis korrekt und prüfe, ob dein Wiederherstellungsplan es erhält. Vermeide führende und abschließende Leerzeichen: Ginger kann sie bei der Eingabe abschneiden oder ablehnen. Ein Passwortmanager kann eine starke Passphrase bewahren; plane aber den Zugriff nach Verlust desselben Computers. Wörter und Passphrase gemeinsam zu lagern schafft einen einzigen Kompromittierungspunkt; getrennte Lagerung schafft eine zusätzliche Wiederherstellungsabhängigkeit. Wähle eine Anordnung, die du tatsächlich pflegen kannst.

Bei einer Ginger-Software-Wallet schützt die Passphrase auch das gespeicherte verschlüsselte Geheimnis. Daher darfst du weder für einen Dateidieb noch bei einer Wiederherstellung annehmen, dass der Zugriff ohne sie gelingt. Ändere die Passphrase nicht unbedacht in einer anderen Wallet-Anwendung: Eine andere BIP39-Passphrase wählt andere Schlüssel, statt einfach das Anmeldepasswort der alten Wallet umzubenennen.

Für Kontokompatibilität, Dateiimport oder eine Suche mit fehlenden Adressen nutze [erweiterte Wiederherstellungsoptionen](/de/backup-recovery/recovery-options/).

<span id="a-single-private-key-is-not-the-full-recovery-backup" data-ginger-heading="ein-einzelner-privater-schlüssel-ist-kein-vollständiges-wiederherstellungsbackup" aria-hidden="true"></span>

## Ein einzelner privater Schlüssel ist kein vollständiges Wiederherstellungsbackup

Eine bereits befüllte physische Münze, deren Hersteller den Schlüssel erzeugt hat, setzt Vertrauen voraus, dass er ihn nicht behalten hat. Ein ausgedruckter einzelner privater Schlüssel oder ein Herstellergeheimnis ist kein vollständiges Wiederherstellungswörterbackup von Ginger. Sichere Wörter und ursprüngliche Passphrase der Software-Wallet, statt anzunehmen, ein exportierter Schlüssel decke alle Adressen ab.
