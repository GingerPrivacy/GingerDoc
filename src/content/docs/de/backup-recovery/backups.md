---
doc_id: "backup-recovery.backups"
title: "Deine Ginger-Wallet sichern"
description: "Bewahre und prüfe die Wiederherstellungswörter und ursprüngliche Passphrase, mit denen du eine Ginger-Software-Wallet nach Computerverlust wiederherstellen kannst."
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Schwierigkeitsgrad: Einstieg. Die wichtigsten Schritte stehen zuerst; weiterführende Anleitungen sind optional.

Bewahre für eine Ginger-Software-Wallet die Wiederherstellungswörter und die exakte ursprüngliche Passphrase auf, falls du eine verwendet hast. Damit kannst du nach Computerverlust den Zugriff wiederherstellen. Eine Hardware-Wallet nutzt ihr eigenes Gerätebackup; halte ihre Wörter vom Computer fern.

<span id="the-backup-you-need-first" aria-hidden="true"></span>

## Das zuerst benötigte Backup

1. Schreibe die Wörter in der angezeigten Reihenfolge auf und halte sie geheim.
2. Halte die exakte Passphrase fest oder notiere, dass die Wallet ohne eine erstellt wurde. Ginger kann sie nicht zurücksetzen.
3. Lagere das Backup so, dass du es nach Computerverlust erreichen kannst und andere es nicht lesen können.
4. Prüfe das Backup, solange die Wallet noch zugänglich ist.

Der Wallet-Name ist kein Wiederherstellungsgeheimnis. Ein Authenticator-Code oder eine Hardware-PIN ersetzt Wörter und ursprüngliche Passphrase nicht.

<span id="store-recovery-information-safely" aria-hidden="true"></span>

## Wiederherstellungsinformationen sicher lagern

Schreibe die Wörter deutlich in ursprünglicher Reihenfolge auf. Lagere sie so, dass sie nach Computerverlust verfügbar sind und andere sie nicht lesen können. Erwäge mehrere dauerhafte Kopien, wenn Feuer, Wasser oder ein unzugänglicher Ort dein Backup zunichtemachen könnten. Verzeichne die Aufbewahrungsorte, ohne die Wörter in einer gewöhnlichen Cloud-Notiz aufzulisten.

Halte auch eine nicht leere Passphrase wiederherstellbar. Auswendiglernen allein kann scheitern. Getrennte Aufbewahrung senkt das Risiko, dass ein Fund alles offenlegt; die Anordnung muss aber für dich oder bewusst autorisierte Personen verständlich bleiben. Erfinde kein eigenes Verfahren zum Zerlegen der Wörter, ohne die Wiederherstellung zu verstehen.

Anwendungspasswort, Geräte-PIN, Authenticator-Code und BIP39-Passphrase sind nicht austauschbar. Beschrifte deine Backupanweisungen eindeutig, ohne Geheimnisse unbeabsichtigten Lesern offenzulegen.

<span id="choose-something-durable-and-readable" aria-hidden="true"></span>

## Dauerhafte und lesbare Sicherung wählen

Papier kann durch Feuer, Wasser oder Ausbleichen beschädigt werden. Metall widersteht manchen Schäden, muss aber ebenfalls vor fremden Blicken geschützt werden. Prüfe, ob dein Backup lesbar und zugänglich bleibt.

Vermeide Fotos, gewöhnliche Cloud-Notizen und Drucker für Wiederherstellungswörter: Sie können unkontrollierte Kopien hinterlassen. Schütze und verzeichne jede zusätzliche Kopie. Teile Wörter nicht in ein improvisiertes Rätsel auf, das du womöglich nicht rekonstruieren kannst.

<span id="check-the-backup-before-you-need-it" aria-hidden="true"></span>

## Das Backup vor dem Ernstfall prüfen

Nutze bei einer geöffneten Software-Wallet **Wallet Settings** → **Tools** → **Verify Recovery Words**, dann **Verify**. Gib die Wörter aus dem Backup ein. Eine erfolgreiche Prüfung ist ein nützlicher Beleg, dass sie zu dieser Wallet gehören. Prüfe außerdem den Passphrase-Eintrag und ob du die zu sichernden Dateien findest.

Wenn die Prüfung scheitert, prüfe Schreibweise und Reihenfolge vertraulich. Falls du noch ausgeben kannst, aber kein brauchbares Wiederherstellungsbackup nachweisen kannst, erstelle eine neue Wallet mit geprüftem Backup und übertrage Guthaben vorsichtig. Lösche die alte Wallet während der Untersuchung nicht.

Sichere lokale Metadaten nach wichtigen Änderungen an Bezeichnungen oder Einstellungen erneut. Mehr Bitcoin zu empfangen erfordert normalerweise keine neuen Wiederherstellungswörter; eine neue Wallet oder eine andere Passphrase dagegen schon.

<span id="what-about-labels-and-computer-files" aria-hidden="true"></span>

## Was ist mit Bezeichnungen und Computerdateien?

Wiederherstellungswörter bringen nicht jede Bezeichnung, Einstellung oder Anbieterbestellung zurück. Lokale automatische Backups liegen auf demselben Computer und schützen daher nicht vor dessen vollständigem Verlust.

Optionale weiterführende Referenz: [Wallet-Dateien, Metadaten und Passphrase-Details](/de/backup-recovery/backup-files/). Sie erklärt Dateikopien und 2FA-Dateien getrennt vom wesentlichen Wörterbackup.
