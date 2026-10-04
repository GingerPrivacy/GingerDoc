---
doc_id: "learn-self-custody.basics"
title: "Bitcoin-Selbstverwahrung: Backups, Passphrasen und Hardware-Wallets"
description: "Lerne, wer deine Bitcoin ausgeben kann, was ein vollständiges Wiederherstellungsbackup ausmacht und wie sich Software- und Hardware-Wallets unterscheiden."
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Schwierigkeitsgrad: Einstieg. Die wichtigsten Schritte stehen zuerst; weiterführende Anleitungen sind optional.

Selbstverwahrung bedeutet, dass du die zum Ausgeben deiner Bitcoin nötigen Informationen hältst. Du genehmigst Zahlungen ohne Geldfreigabe durch einen Kontoanbieter. Dafür musst du Informationen schützen, ein brauchbares Backup halten und jede Zahlung sorgfältig prüfen.

<span id="keys-records-and-recovery" aria-hidden="true"></span>

## Schlüssel, Aufzeichnungen und Wiederherstellung

Das Bitcoin-Netzwerk hält ein öffentliches Transaktionsregister. Deine Wallet genehmigt mit geheimen Schlüsseln Ausgaben der von dir kontrollierten Teile. Eine Neuinstallation auf einem Ersatzcomputer erzeugt diese Geheimnisse nicht erneut; deshalb ist das Wiederherstellungsbackup wichtig.

Bei Ginger-Software-Wallets erzeugen Wörter und ursprüngliche Passphrase die Schlüssel erneut. Lokale Wallet-Dateien bewahren zusätzlichen Kontext wie Bezeichnungen und Einstellungen. Authenticator, Hardware-PIN und Dateikopie erfüllen verschiedene Zwecke; keiner ersetzt automatisch das Wörterbackup.

<span id="the-passphrase-changes-the-wallet" aria-hidden="true"></span>

## Die Passphrase verändert die Wallet

Ginger nutzt eine BIP39-Passphrase mit Wiederherstellungswörtern. Eine andere Passphrase erzeugt andere Schlüssel. Daher kann eine Wiederherstellung gelingen und trotzdem wegen Tippfehlern eine leere Wallet zeigen. [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) definiert diesen Zusammenhang.

Halte fest, ob eine verwendet wurde, und sichere sie korrekt. Wähle wiederherstellbaren Schutz statt eines komplexen Geheimnisses nur im Gedächtnis. Verfasse Anweisungen so, dass du später Wallet-Passphrase, Computeranmeldung und Authenticator-Code unterscheiden kannst.

<span id="software-versus-hardware" aria-hidden="true"></span>

## Software und Hardware

| Einrichtung | Wo signiert wird | Praktische Verantwortung |
| --- | --- | --- |
| Ginger-Software-Wallet | Auf dem Desktop mit verfügbarem Geheimnis | Computer und Wiederherstellungsdaten schützen; automatische CoinJoins brauchen Signierfähigkeit |
| Hardware-Wallet über Ginger | Auf dem Gerät für unterstützte Vorgänge | Gerätedetails prüfen und Hersteller-Wiederherstellungsbackup sichern |
| Watch-only ohne Signierer | Kann allein keine Ausgabe autorisieren | Sensible öffentliche Daten schützen und Zugriff auf separaten Signierer behalten |

Eine Hardware-Wallet reduziert Schlüsselkontakt mit Desktop-Schadsoftware; ohne Prüfung ihres Bildschirms kannst du trotzdem bösartige Zahlungen autorisieren. Ein Seed-Import in den Desktop verändert das Sicherheitsmodell: Diese Schlüssel sind dann dem Computer ausgesetzt.

<span id="recovery-is-part-of-the-setup" aria-hidden="true"></span>

## Wiederherstellung gehört zur Einrichtung

Prüfe vor Nutzung, ob du dein Backup findest und verstehst. **Verify Recovery Words** prüft bei zugänglicher Software-Wallet deine eingegebenen Wörter. Halte auch die ursprüngliche Passphrase verfügbar. Nutze bei Hardware den geeigneten Hersteller-Backupcheck ohne Seed-Eingabe auf dem Desktop.

Sichere mehr als Anwendungsdateien. Installer können erneut heruntergeladen werden; fehlende Geheimnisse nicht von der Projektwebsite. Bedenke Festplattenausfall, Geräteverlust und Backupzugang. Bitcoin.orgs [Wallet-Sicherheitshinweise](https://bitcoin.org/en/secure-your-wallet) behandeln Backups und Geräteschutz als ergänzende Maßnahmen.

<span id="evaluate-a-wallet-with-evidence" aria-hidden="true"></span>

## Wallets anhand von Belegen bewerten

Nutze offizielle Veröffentlichungen, prüfe Signaturen und lies Funktionsgrenzen. Quelloffenheit ermöglicht Prüfung, beweist aber keine Audits sämtlicher Binärdateien oder Abhängigkeiten. Externe Einträge wie [Ginger auf Bitcoin.org](https://bitcoin.org/en/wallets/desktop/windows/ginger/) und [Ginger auf WalletScrutiny](https://walletscrutiny.com/desktop/gingerwallet/) liefern Kontext. Prüfe Umfang und Datum statt einer Garantie für deine installierte Version.

Ginger verbindet Software-Wiederherstellung, Hardware-Integration und Privatsphärewerkzeuge im Desktop-Ablauf. Optionale weiterführende Lektüre: [Eine wiederherstellbare Sicherheitsroutine aufbauen](/de/learn-self-custody/security-routine/) mit Reaktionen auf offengelegte Adressen, Daten oder Schlüssel.
