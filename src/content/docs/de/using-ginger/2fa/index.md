---
doc_id: "backup-recovery.two-factor-authentication"
title: "Zwei-Faktor-Authentifizierung in Ginger verwenden"
description: "Richte Ginger-2FA ein und verstehe Wallet-Dateiverschlüsselung, Tor-Anforderung und Wiederherstellungsgrenzen."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-the-default-2fa-state-of-gingerwallet"></span>
<span id="how-do-i-enable-2fa-in-gingerwallet"></span>
<span id="how-do-i-set-up-2fa-using-an-authenticator-app"></span>
<span id="what-is-the-purpose-of-the-2fagws-file"></span>
<span id="do-i-need-to-restart-the-application-after-enabling-2fa"></span>
<span id="how-does-the-login-process-change-after-enabling-2fa"></span>
<span id="how-do-i-disable-2fa"></span>
<span id="what-should-i-do-if-i-change-devices-or-lose-data"></span>
<span id="what-are-the-security-best-practices-for-using-gingerwallet"></span>
<span id="does-gingerwallet-store-any-personal-information"></span>
<span id="what-happens-if-i-lose-access-to-my-authenticator-app"></span>
<span id="how-does-gingerwallet-ensure-security-with-2fa"></span>
<span id="how-can-i-recover-my-labels-and-extra-options-for-my-wallet-if-ive-lost-the-2fa-key"></span>
<span id="why-does-ginger-wallet-require-an-8-digit-2fa-code"></span>
<span id="what-should-i-do-if-my-authenticator-app-only-provides-6-digit-codes"></span>

> Schwierigkeitsgrad: Fortgeschritten. Bewahre ursprüngliche Wiederherstellungsinformationen und Wallet-Dateien vor Änderungen an Wiederherstellungs- oder Dateieinrichtung.

Gingers optionale Zwei-Faktor-Authentifizierung (2FA) ergänzt eine Startprüfung und Verschlüsselung lokaler Wallet-Dateien. Sie ist von der Passphrase jeder Wallet getrennt. Sie ist keine Bitcoin-Regel für Zweitsignaturen bei jeder Ausgabe und schützt kein Wörterbackup gegen jemanden, der auch dessen Passphrase kennt.

<span id="understand-the-dependency-first" data-ginger-heading="zuerst-die-abhängigkeit-verstehen" aria-hidden="true"></span>

## Zuerst die Abhängigkeit verstehen

Ginger prüft den Authenticator-Code bei seinem 2FA-Dienst und erhält das Geheimnis zum Entschlüsseln geschützter Wallet-Dateien. Der normale Start benötigt daher eine funktionierende Dienstverbindung. Tor muss für diese Funktion aktiviert sein.

Die lokale Datei `2fa_info.gws` speichert eine Client-/Serverkennung. Sie ist keine verschlüsselte Wörterkopie oder eigenständiger Wiederherstellungsschlüssel. Die Datei allein stellt keine Wallet wieder her. Weder Passphrase noch 2FA bedeuten, dass jede Bezeichnung, jedes Protokoll oder jede Begleitdatei gleich verschlüsselt wird. Schütze gesamten Datenordner und Backups.

Prüfe vor Aktivierung, ob du Wörter und exakte ursprüngliche Passphrase jeder benötigten Software-Wallet besitzt. Halte außerdem geschützte Kopien von Wallet- und Metadatendateien.

<span id="enable-2fa" data-ginger-heading="2fa-aktivieren" aria-hidden="true"></span>

## 2FA aktivieren

1. Öffne **Settings** → **Security**. Aktiviere bei Bedarf **Network anonymization (Tor)** und starte nach Aufforderung neu, damit Tor aktiv ist.
2. Aktiviere **Two-factor authentication**. Der Dialog zeigt einen Authenticator-QR-Code.
3. Füge ihn vertraulich deinem Authenticator hinzu. Er enthält ein Geheimnis und darf nicht geteilt werden. Ginger benötigt SHA256-kompatible achtstellige Codes; ein manuell erstellter sechsstelliger Standardeintrag ist nicht gleichwertig.
4. Gib den aktuellen Code ein und wähle **Verify**. Prüfe bei Fehlern Telefon-Zeitsynchronisierung und ob der Eintrag aus dieser Einrichtung stammt.
5. Starte nach Anweisung neu und erledige die Startprüfung. Nach erfolgreichem authentifiziertem Start erhält Ginger das Geheimnis und stellt die Verschlüsselung von Wallet- und automatischen Backup-JSON-Dateien sicher.

Dateien, die vor Einrichtung oder authentifiziertem Neustart kopiert wurden, erhalten nicht automatisch neuen Schutz. Schütze ältere Backups unabhängig. Aktivierung ist kein Grund, deine einzige bekannte funktionierende Wiederherstellung zu löschen.

<span id="everyday-use-and-disabling" data-ginger-heading="alltag-und-deaktivierung" aria-hidden="true"></span>

## Alltag und Deaktivierung

Gib beim Start den aktuellen Authenticator-Code ein. Nach Laden der Anwendung behalten Wallet-Passphrasen und Hardware-Genehmigungen ihre eigenen Rollen. Ein bereits entsperrter Computer bleibt ein Sicherheitsproblem.

Deaktiviere bei vorhandenem Zugriff **Two-factor authentication** unter **Settings** → **Security**. Ginger entfernt die zusätzliche Dateiverschlüsselung und lokale 2FA-Zuordnung. Normale Software-Passphrase bleibt separat relevant. Sichere resultierende Dateien, wenn dein Backupverfahren vom aktuellen Verschlüsselungszustand abhängt.

<span id="lost-phone-missing-file-or-unavailable-service" data-ginger-heading="verlorenes-telefon-fehlende-datei-oder-nicht-verfügbarer-dienst" aria-hidden="true"></span>

## Verlorenes Telefon, fehlende Datei oder nicht verfügbarer Dienst

Ein verlorener Authenticator oder Dienstausfall kann normalen Start verhindern. Sichere zuerst den bestehenden Datenordner. Prüfe bei abgelehntem Code Zeit und Verbindung; wiederholte Installation über dieselben Daten rekonstruiert kein verlorenes Geheimnis.

Stelle Software-Wallet-Guthaben über eine separate vertrauenswürdige Installation oder saubere Anwendungsumgebung aus Originalwörtern und Passphrase wieder her. Prüfe bekannten Verlauf und Zugriff vor Änderung alter Dateien. Wiederhergestellte Schlüssel benötigen keine alte 2FA, aber Download und Synchronisierung brauchen weiterhin Gingers normale Dienste. Kompatible Wiederherstellungssoftware kann bei Unterstützung ursprünglicher Kontotypen eine Option sein.

Bezeichnungen und lokale Attribute entstehen nicht erneut aus Wörtern. Erhalte `.attr`-Backups vor Metadatenuntersuchungen. Bewahre bestehende Daten bei 2FA-Einrichtung und Fehlerbehebung.

Bei offengelegten Wiederherstellungsdaten verändern neue Wallet und Übertragung die kontrollierenden Schlüssel. Deaktivierte 2FA oder Neuinstallation entwertet keine alten Wörter.
