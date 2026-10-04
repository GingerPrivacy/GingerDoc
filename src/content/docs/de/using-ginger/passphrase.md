---
doc_id: "backup-recovery.passphrase"
title: "Was ist eine Passphrase?"
description: "Verstehe deine Wallet-Passphrase, nötige Backups und warum Wiederherstellung die ursprüngliche Passphrase braucht, auch wenn eine andere eine leere Wallet öffnet."
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "Passphrase"
prev: false
next: false
---

> Schwierigkeitsgrad: Einstieg. Diese Anleitung behandelt Software-Wallets in Ginger v2.0.26. Folge bei Hardware den Herstelleranweisungen und halte Wiederherstellungswörter vom Computer fern.

Eine Passphrase ist ein optionales Geheimnis, das du bei der Wallet-Erstellung wählst. In Ginger schützt sie den Software-Wallet-Zugriff und ist Teil der Wiederherstellungsinformationen. Zur Wiederherstellung derselben Wallet brauchst du ursprüngliche Wörter und die exakte ursprüngliche Passphrase, falls verwendet. Ginger kann eine vergessene Passphrase nicht zurücksetzen.

<span id="do-i-have-to-use-a-passphrase" data-ginger-heading="muss-ich-eine-passphrase-verwenden" aria-hidden="true"></span>

## Muss ich eine Passphrase verwenden?

Ginger zeigt **Add Passphrase** nach **Confirm Recovery Words**. Gib eine Passphrase ein und bestätige sie oder lasse beide Felder für eine Wallet ohne Passphrase leer.

Ohne Passphrase kann jemand mit deinen Wörtern die Wallet wiederherstellen und Bitcoin ausgeben. Eine Passphrase ergänzt ein zu schützendes Geheimnis; vergisst du sie, kannst du möglicherweise trotz vorhandener Wörter nicht wiederherstellen. Wähle etwas schwer Erratbares, das du korrekt aufzeichnen und reproduzieren kannst. Vermeide führende oder abschließende Leerzeichen; Gingers Eingabeprüfung lehnt sie ab.

<span id="is-it-the-same-as-recovery-words-or-a-2fa-code" data-ginger-heading="ist-sie-dasselbe-wie-wörter-oder-ein-2fa-code" aria-hidden="true"></span>

## Ist sie dasselbe wie Wörter oder ein 2FA-Code?

Nein. Ginger erzeugt zwölf **Recovery Words** für eine neue Software-Wallet. Die Passphrase wählst du separat. Halte sie getrennt von der nummerierten Liste und gib sie nicht als zusätzliches Wiederherstellungswort ein.

Der Wallet-Name ist nur eine lokale Bezeichnung. Ein Authenticator-Code zur Zwei-Faktor-Authentifizierung ist eine separate Startprüfung. Keiner ersetzt ursprüngliche Wörter und Passphrase bei Software-Wiederherstellung.

<span id="what-should-i-back-up" data-ginger-heading="was-sollte-ich-sichern" aria-hidden="true"></span>

## Was sollte ich sichern?

- Wiederherstellungswörter in angezeigter Reihenfolge.
- Exakte ursprüngliche Passphrase mit Großschreibung und Zeichen oder klare Notiz, dass keine verwendet wurde.

Halte diese Informationen privat und auch nach Computerverlust wiederherstellbar. Schreibe die Wörter offline auf und vermeide Fotos, E-Mail und gewöhnliche Cloud-Notizen. Sichere auch die Passphrase. Getrennte Lagerung schützt gegen einen gemeinsamen Fund beider Geheimnisse, aber du musst beide bei Bedarf finden können. Verlasse dich nicht allein auf Erinnerung.

Wörter stellen Bitcoin-Zugriff wieder her, aber nicht jede Bezeichnung oder Einstellung. Behalte bestehende Wallet-Dateien während der Untersuchung eines Wiederherstellungsproblems. Automatische Backups auf demselben Computer schützen nicht vor dessen Verlust.

<span id="how-do-i-check-my-backup" data-ginger-heading="wie-prüfe-ich-mein-backup" aria-hidden="true"></span>

## Wie prüfe ich mein Backup?

Öffne bei zugänglicher Software-Wallet **Wallet Settings** → **Tools**. Wähle unter **Verify Recovery Words** die Aktion **Verify**, gib Backupwörter ein und schließe die Prüfung ab.

Die Funktion prüft, ob diese Wörter zur Wallet gehören. Sie zeigt keine vergessenen Wörter und setzt keine Passphrase zurück. Prüfe außerdem deinen Passphrase-Eintrag. Kontrolliere bei gescheiterter Verifikation Schreibweise und Reihenfolge vertraulich, bevor du dich auf das Backup verlässt.

<span id="how-do-i-use-the-passphrase-during-recovery" data-ginger-heading="wie-verwende-ich-sie-bei-wiederherstellung" aria-hidden="true"></span>

## Wie verwende ich sie bei Wiederherstellung?

Diese Schritte stellen eine Ginger-Software-Wallet aus Wörtern wieder her. Bewahre vorhandene Dateien bis zur bestätigten Wiederherstellung.

1. Öffne Ginger auf einem vertrauenswürdigen Computer und wähle **Recover** im Bildschirm zum Hinzufügen einer Wallet.
2. Gib bei Aufforderung einen eindeutigen **Wallet Name** ein, damit du die wiederhergestellte Wallet von vorhandenen unterscheidest.
3. Gib ursprüngliche **Recovery Words** in Reihenfolge ein.
4. Gib unter **Enter Passphrase** die ursprüngliche Passphrase ein und bestätige sie. Leere Felder sind nur richtig, wenn ursprünglich keine verwendet wurde. Du wählst kein neues Passwort.
5. Lass Wiederherstellung und Synchronisierung abschließen und prüfe bekannten Verlauf. Synchronisierung sucht im Bitcoin-Netzwerk nach Wallet-Transaktionen.

<span id="why-is-my-recovered-wallet-empty" data-ginger-heading="warum-ist-meine-wiederhergestellte-wallet-leer" aria-hidden="true"></span>

## Warum ist meine wiederhergestellte Wallet leer?

Eine andere Passphrase erzeugt bei Wörterwiederherstellung eine andere Wallet. Ginger kann daher Tippfehler akzeptieren und ohne Falschpassphrase-Meldung eine leere Wallet wiederherstellen. Das unterscheidet sich vom Öffnen geschützter Dateien, bei dem eine falsche Passphrase abgelehnt wird.

Prüfe ursprüngliche Passphrase, Großschreibung, Leerzeichen und Tastaturlayout. Prüfe außerdem die gewünschte Wallet und das Bitcoin-Netzwerk sowie abgeschlossene Wiederherstellung. Eine unvollständige Suche kann einen unvollständigen Kontostand zeigen. Ein leerer Kontostand allein beweist keinen Verlust ursprünglicher Bitcoin.

Fehlt der erwartete Verlauf weiterhin, bewahre Originaldateien und suche über [offizielle Ginger-Supportlinks](https://gingerwallet.io/) Hilfe. Teile nur nicht geheime Angaben wie Anwendungsversion und Fehlertext. Sende dem Support nie Wiederherstellungswörter, Passphrase oder Wallet-Dateien.

<span id="can-i-reset-or-replace-a-forgotten-passphrase" data-ginger-heading="kann-ich-eine-vergessene-passphrase-ersetzen" aria-hidden="true"></span>

## Kann ich eine vergessene Passphrase ersetzen?

Ginger kann sie nicht zurücksetzen. Dieselben Wörter mit neuer Passphrase öffnen eine andere Wallet, ändern weder die ursprüngliche Passphrase noch bewegen sie deren Bitcoin.

Kannst du noch senden, aber kein brauchbares Backup nachweisen, erstelle eine neue Wallet, prüfe ihr Backup und übertrage vorsichtig, solange Zugriff besteht. Behalte die alte Wallet bis zur bestätigten Übertragung. Ohne Ausgabezugriff und nötige Wiederherstellungsdaten kann Support das Geheimnis nicht erzeugen.
