---
doc_id: "learn-self-custody.security-routine"
title: "Eine wiederherstellbare Bitcoin-Sicherheitsroutine aufbauen"
description: "Baue eine wiederherstellbare Sicherheitsroutine auf und reagiere auf offengelegte Adressen, xpubs, Wallet-Dateien, Wiederherstellungswörter oder Geräte."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Halte das grundlegende Wiederherstellungsbackup bereit und wähle Vorfallschritte passend zur offengelegten Information.

Eine nützliche Sicherheitsroutine schützt vor unbefugtem Zugriff und lässt einen verständlichen Weg zur legitimen Wiederherstellung offen. Zusätzliche Geheimnisse ohne dokumentierte Rollen können versehentlichen Verlust wahrscheinlicher machen.

<span id="record-the-recovery-plan" data-ginger-heading="den-wiederherstellungsplan-dokumentieren" aria-hidden="true"></span>

## Den Wiederherstellungsplan dokumentieren

Halte ein privates Verzeichnis deiner Wallets, ihrer Signiererarten, Backuporte und der Frage, ob sie eine BIP39-Passphrase benötigen. Es muss die Geheimnisse nicht selbst enthalten. Es sollte nach Verlust von Computer oder Telefon helfen, nicht nur solange du dich an die Einrichtung erinnerst.

Bewahre ausreichend Informationen über Wallet-Konventionen auf, um das richtige wiederhergestellte Konto zu erkennen, besonders bei Hardware-Geräten oder mehreren Wallets. Sichere Bezeichnungen und Metadaten, wenn sie für deine Aufzeichnungen wichtig sind; die Blockchain rekonstruiert keine selbst verfassten privaten Notizen.

Soll eine andere Person nach Handlungsunfähigkeit oder Tod Guthaben wiederherstellen können, organisiere einen klaren getesteten Zugangsplan passend zu deinen Umständen. Teile nicht beiläufig schon jetzt alle Geheimnisse und erwarte nicht, dass die Person das gemeinte Passwort errät. Nachlass- und Zugangsvorkehrungen können rechtliche Folgen haben und lokale professionelle Beratung erfordern; diese Seite schreibt keine Rechtsstruktur vor.

<span id="check-before-funding-and-before-signing" data-ginger-heading="vor-einzahlung-und-signierung-prüfen" aria-hidden="true"></span>

## Vor Einzahlung und Signierung prüfen

Prüfe den Anwendungsdownload, ob die Wallet sich öffnen lässt, und ihr Backup. Vergleiche bei Hardware Empfangsadressen auf dem Gerät und prüfe Ziel und Betrag jeder Zahlung vor der Signierung.

Lerne einen neuen Ablauf mit einem kleinen Betrag. Gleiche gesendeten und angekommenen Wert und die bezahlten Gebühren ab. Einen größeren Betrag zu verwenden erleichtert die Diagnose eines unbekannten Ablaufs nicht.

Aktualisiere Computer und Signiergerät aus authentifizierten Quellen. Updatehinweise per Privatnachricht beweisen keine Echtheit. Installiere keine „Wiederherstellungssoftware“ und gestatte keine Fernsteuerung, nur weil Fremde Synchronisierungsbedarf behaupten.

<span id="understand-ginger-2fa" data-ginger-heading="ginger-2fa-verstehen" aria-hidden="true"></span>

## Ginger-2FA verstehen

Gingers optionale 2FA ergänzt lokale Wallet-Dateiverschlüsselung und eine Dienstprüfung beim Start. Sie kann bei manchen Formen lokalen Dateizugriffs helfen, führt aber beim normalen Start eine Abhängigkeit von Authenticator und Dienst ein.

Halte Wiederherstellungswörter und ursprüngliche Passphrase unabhängig verfügbar. Betrachte `2fa_info.gws` nicht als Offline-Hauptwiederherstellungsschlüssel. Gehe auch nicht davon aus, dass 2FA Angreifer mit Wörtern und Passphrase stoppt oder autorisierte Transaktionen aus einer entsperrten Anwendung verhindert.

<span id="first-identify-what-was-exposed" data-ginger-heading="zuerst-die-offengelegte-information-bestimmen" aria-hidden="true"></span>

## Zuerst die offengelegte Information bestimmen

Die Offenlegung einer Adresse und die von Wiederherstellungswörtern benötigen unterschiedliche Reaktionen. Kopiere verdächtiges Material zur Diagnose nicht in öffentliche Beiträge oder unbekannte „Wallet-Prüfer“.

| Offengelegtes Element | Mögliche Folgen | Erste Reaktion |
| --- | --- | --- |
| Empfangsadresse oder Transaktions-ID | Beobachtung und mögliche Verknüpfungen; keine Signierschlüssel | Unnötige Wiederverwendung und Offenlegung stoppen; verknüpfte Identitäten und Zahlungen prüfen |
| Bezeichnungen, Bestellaufzeichnungen oder Verlaufsexport | Zuordnung getrennter Transaktionen zu Personen, Zwecken oder Guthaben | Zugriff begrenzen, gegebenenfalls private Kopie sichern und Weitergabe ändern |
| Erweiterter öffentlicher Schlüssel, oft xpub | Beobachtung seiner Ableitungsadressen einschließlich möglicher künftiger; normalerweise keine eigene Ausgabeautorität | Betroffenes Konto oder Zweig bestimmen; bei unakzeptabler Dauerbeobachtung neue Wallet erwägen |
| Wallet-Datei oder vollständige Anwendungskopie | Abhängig von Verschlüsselung, Passwörtern und anderen kopierten Dateien; möglicherweise Schlüssel und Metadaten | Unsicherheit ernst nehmen und Schlüsselexposition aus vertrauenswürdiger Umgebung prüfen |
| Wörter mit erforderlicher Passphrase oder brauchbare private Schlüssel | Ausgabe und Ableitung weiterer Schlüssel im betroffenen Bereich | Neue Wallet mit neuen Schlüsseln auf vertrauenswürdigem Gerät vorbereiten und kontrolliertes Guthaben bewegen |
| Gestohlener Computer, entsperrte Anwendung oder Fernsteuerung | Je nach Zustand Zugriff auf Daten, Signierung und andere Konten | Unbefugten Zugriff beenden und verbleibendes Guthaben von vertrauenswürdigem Gerät schützen |

Ein erweiterter öffentlicher Schlüssel deckt nicht unbedingt alle Gerätekonten ab; der Ableitungsbereich zählt. Eine neue Empfangsadresse unter einem offengelegten öffentlichen Zweig verhindert normalerweise keine weitere Beobachtung. [BIP32 beschreibt diese Ableitungsgrenzen](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).

Sind nur Wörter offengelegt und hast du eine separate Passphrase verwendet, hängt das Risiko auch von ihrer fortdauernden Geheimhaltung und Erratbarkeit ab. Gehe nicht davon aus, dass eine unbekannte oder schwache Passphrase das offengelegte Backup unbegrenzt schützt. Sind Belege unvollständig und könnte die Offenlegung Ausgaben autorisieren, nutze die Reaktion auf offengelegte Schlüssel.

<span id="respond-to-exposed-signing-keys" data-ginger-heading="auf-offengelegte-signierschlüssel-reagieren" aria-hidden="true"></span>

## Auf offengelegte Signierschlüssel reagieren

Ein neues Computerpasswort, deaktivierte 2FA oder Neuinstallation widerruft keine kopierten Bitcoin-Schlüssel. Umbenennen verändert ebenfalls keine Schlüssel. Kein Bitcoin-Supportprozess annulliert kopierte Wörter.

1. Nutze ein begründet vertrauenswürdiges Gerät. Erzeuge keine Ersatz-Wallet auf dem möglicherweise kompromittierten Computer.
2. Erstelle eine Wallet mit neuen Wiederherstellungsdaten und sichere sie. Stelle nicht die offengelegten Wörter wieder her und nenne das eine neue Sicherheitsgrenze.
3. Beschaffe und prüfe eine Empfangsadresse. Prüfe Hardware-Adressen auf dem Signiergerät; gib neue Hardware-Wörter niemals im verdächtigen Computer ein.
4. Übertrage noch kontrolliertes Guthaben mit sorgfältiger Ziel- und Gebührenprüfung. Ein Angreifer mit denselben Schlüsseln kann konkurrieren; warte vor der Sicherung nicht auf optionalen CoinJoin.
5. Prüfe Ergebnis und Bestätigung in der vertrauenswürdigen Wallet. Ersetze wiederkehrende Einzahlungsanweisungen und öffentliche alte Adressen, damit neue Zahlungen nicht an kompromittierte Schlüssel gehen.

Guthabenübertragungen können beobachtbare On-Chain-Verbindungen schaffen. Bei kompromittierten Schlüsseln hat der Erhalt der Guthabenkontrolle Vorrang; Privatsphäre kannst du nach Eindämmung des unmittelbaren Zugriffsproblems erneut prüfen. Ein neues Ziel garantiert keine unverknüpfbare Übertragung.

Bewahre während Untersuchungen nötige Aufzeichnungen privat. Gib angeblichem Support weder Wörter noch Passphrase, uneingeschränkte Wallet-Dateikopien oder Zugriff auf das Ersatzgerät. Du musst neue Wörter auf keiner Website „validieren“.

<span id="respond-to-a-privacy-only-disclosure" data-ginger-heading="auf-reine-privatsphäreoffenlegung-reagieren" aria-hidden="true"></span>

## Auf reine Privatsphäreoffenlegung reagieren

Entscheide bei einer offengelegten Adresse, ob weitere Nutzung akzeptabel ist. Neue Empfangsadressen und weniger veröffentlichte Details helfen künftig; Beobachter behalten aber bereits erworbenes Wissen. Es ist nicht automatisch nötig, jeden Coin zu bewegen, bloß weil eine Adresse öffentlich wurde.

Bestimme bei offengelegtem xpub zuerst dessen Konto. Weitere Nutzung kann künftige Aktivität offenlegen. Eine neue Wallet mit unabhängigen Schlüsseln schafft andere Adressen, eine direkte Übertragung verbindet aber möglicherweise altes Guthaben sichtbar. Plane Umzug und spätere Ausgaben nach Beobachter und Vorwissen. Neuinstallation oder Import desselben Kontos in andere Software entfernt dessen Offenlegung nicht.

Begrenze bei geleakten Aufzeichnungen weiteren Zugriff und prüfe, was sie gemeinsam verraten. Eine Transaktions-ID zusammen mit einem Kundennamen offenbart mehr als jeder Teil allein. Veröffentliche nicht das ganze Leck, um das Problem zu belegen.

<span id="keep-privacy-separate-from-key-protection" data-ginger-heading="privatsphäre-und-schlüsselschutz-trennen" aria-hidden="true"></span>

## Privatsphäre und Schlüsselschutz trennen

Ein Beobachter einer Transaktion besitzt nicht notwendigerweise ihre Ausgabeschlüssel. Umgekehrt kann ein Schlüsseldieb auch Guthaben mit schwer analysierbarer Geschichte ausgeben. Nutze Wiederherstellungsschutz und Geräteprüfung für das zweite Problem und Adressgewohnheiten, Tor, Coin-Auswahl und überlegten CoinJoin für das erste.

Prüfe die Routine nach neuen Wallets, Hardwarewechsel, 2FA-Aktivierung oder Backupumzug. Prüfe geänderte Teile, statt für unnötige vollständige Wiederherstellungsübungen wiederholt jedes Geheimnis offenzulegen.
