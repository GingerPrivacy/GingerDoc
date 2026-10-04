---
doc_id: "learn-privacy.wallet-migration"
title: "Zu Ginger wechseln, ohne mehr Wallet-Verlauf offenzulegen"
description: "Vergleiche die Wiederherstellung gleicher Schlüssel, die Hardware-Verbindung mit einer anderen Wallet-App und die Übertragung auf neue Schlüssel, ohne frühere Offenlegungen als verschwunden anzusehen."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Verstehe zuerst neue Empfangsadressen und die normale Zahlungsprüfung.

Ein Wechsel der Wallet-Software verändert die verwendete Anwendung. Er verändert nicht notwendigerweise Bitcoin-Schlüssel, Adressen oder Informationen, die ein früherer Dienst bereits kennt. Entscheide, ob du Zugriff wiederherstellst, aus Bequemlichkeit Software wechselst oder eine neue Trennung für künftige Aktivität schaffst.

<span id="choose-the-kind-of-move" data-ginger-heading="die-art-des-wechsels-wählen" aria-hidden="true"></span>

## Die Art des Wechsels wählen

| Wahl | Was gleich bleibt | Was sich ändert |
| --- | --- | --- |
| Dieselben Wiederherstellungswörter, Passphrase und unterstütztes Konto wiederherstellen | Die zugehörigen Schlüssel und Adressen | Die suchende und verwaltende Anwendung; lokale Notizen können fehlen |
| Dasselbe Hardware-Konto mit Ginger verbinden | Die auf Hardware gehaltenen Schlüssel und Kontoadressen | Die Desktop-Anwendung mit öffentlichen Kontoinformationen |
| Neue Wallet mit neuen Schlüsseln erstellen und Guthaben übertragen | Bestehender Verlauf bleibt auf der Blockchain | Künftige Schlüssel und Adressen; separates Backup und On-Chain-Transfer sind nötig |

Die Wiederherstellung derselben Wallet bewegt keine Bitcoin; allein dafür fällt keine Netzwerkgebühr an. Eine On-Chain-Übertragung auf neue Schlüssel kostet eine Gebühr und erzeugt eine sichtbare Transaktion. Das sind verschiedene Vorgänge, auch wenn beide mit angezeigtem Guthaben in Ginger enden.

<span id="understand-what-an-xpub-exposes" data-ginger-heading="verstehen-was-ein-xpub-offenlegt" aria-hidden="true"></span>

## Verstehen, was ein xpub offenlegt

Ein erweiterter öffentlicher Schlüssel, oft xpub genannt, erlaubt die Ableitung eines öffentlichen Adresszweigs ohne normale Signierbefugnis. Ein Konto-xpub zeigt typischerweise mehr als eine Empfangsadresse, einschließlich künftiger Kontoadressen. Sein Bereich hängt von seiner Position im Schlüsselbaum ab; er offenbart nicht jedes andere gehärtete Konto. [BIP32: Hierarchical Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

Eine frühere Wallet-App, ein Portfolio-Dienst oder Buchhaltungswerkzeug kann einen xpub oder Adressabfragen erhalten haben. Das Entfernen der App widerruft keine anderswo vorhandenen Kopien. Weitere Kontonutzung kann diesem Beobachter auch spätere Aktivität zeigen. Tor verbirgt eine direkte IP-Verbindung, lässt den Empfangsdienst aber keine übermittelten Wallet-Daten vergessen.

Weißt du nicht, was ein Dienst erhalten hat, behandle das als Unsicherheit. Lade zur Untersuchung keinen xpub in einen Online-„Privatsphäreprüfer“ hoch.

<span id="restore-access-to-an-existing-software-wallet" data-ginger-heading="zugriff-auf-eine-vorhandene-software-wallet-wiederherstellen" aria-hidden="true"></span>

## Zugriff auf eine vorhandene Software-Wallet wiederherstellen

1. Sichere ursprüngliche Backups und Aufzeichnungen vor einer Installationsänderung. Migration ist kein Grund, deine einzigen funktionierenden Wallet-Dateien zu löschen.
2. Verwende Gingers Wiederherstellung mit ursprünglichen Wörtern und exakter Originalpassphrase. Prüfe die Unterstützung von Wallet-Format, Adresstypen und Konto. Eine gültige Mnemonic allein belegt keine Kompatibilität.
3. Lass die Suche abschließen. Vergleiche bekannte Transaktionen oder eine Empfangsadresse aus privaten Aufzeichnungen, bevor du eine leere Anzeige als Geldverlust deutest.
4. Prüfe wiederhergestellte Bezeichnungen, CoinJoin-Einstellungen und Privatsphäredaten. Wörter stellen Schlüssel her, aber nicht jede frühere Notiz oder Einstellung.
5. Prüfe automatische CoinJoins und Zielauswahl vor unbeaufsichtigtem Betrieb. Vermeide gleichzeitige Ausgaben derselben Coins durch zwei Anwendungen.

Eine falsche Passphrase kann eine andere gültige Wallet ergeben. Wechsle nicht zufällig Einstellungen, sende kein Testguthaben auf ein ungeklärt leeres Konto und gib keinem fremden Supportkontakt Wörter zum Beheben der Abweichung.

<span id="use-the-same-hardware-wallet-in-ginger" data-ginger-heading="dieselbe-hardware-wallet-in-ginger-nutzen" aria-hidden="true"></span>

## Dieselbe Hardware-Wallet in Ginger nutzen

Füge das Gerät über **Hardware Wallet** hinzu, folge unterstützten PIN-/Passphraseabfragen und prüfe eine Empfangsadresse auf seinem eigenen Bildschirm. Prüfe, ob Ginger das gewünschte Konto zeigt. Der normale Import dieser Version verwendet natives SegWit; andere Software zeigte möglicherweise ein anderes Konto oder einen anderen Adresstyp.

Die Verbindung erlaubt Ginger öffentliche Wallet-Daten zu speichern, während Schlüssel auf dem Gerät bleiben. Sie macht frühere Offenlegungen der Hersteller-App nicht rückgängig. Dasselbe Konto in einer weiteren Watch-only-App zu öffnen kann mehr Verlauf offenlegen, obwohl keine Anwendung ohne Hardware ausgeben kann.

Importiere Hardware-Wörter nicht als Umgehung einer nicht unterstützten Verbindung oder eines Kontos auf den Computer. Nutze den unterstützten Geräteablauf, wenn das Konto sich nicht korrekt darstellen lässt.

<span id="create-a-new-separation-for-future-activity" data-ginger-heading="eine-neue-trennung-für-künftige-aktivität-schaffen" aria-hidden="true"></span>

## Eine neue Trennung für künftige Aktivität schaffen

Erfordert dein Ziel andere Schlüssel, erstelle und prüfe eine neue Wallet samt Backup. Beschaffe ein neues Ziel und teste mit kleinem Betrag, wenn die Situation nicht dringend ist. Prüfe Empfang und einen funktionierenden Signier- oder Wiederherstellungsweg, bevor du den vorgesehenen Rest bewegst.

Prüfe die Inputs jeder Übertragung. Alle alten Coins gemeinsam zu senden kann bisher getrennte Aktivitäten verbinden. Normale Übertragungen verknüpfen außerdem Input- und Outputgeschichte. Neue Schlüssel allein verbergen das nicht; ein überlegter CoinJoin-Ablauf adressiert manche Verknüpfungsziele unter Berücksichtigung von Gebühren, Eignung und späteren Ausgaben.

Wähle Zeitpunkt und Vorgehen für das Ende alter Empfangsadressen. Aktualisiere eigene Zahlungsanweisungen, behalte Kontext für verspätete Zahlungen und erwarte nicht, dass entfernte Websiteadressen ungültig werden. Halte Wiederherstellungsdaten für möglicherweise weiterhin empfangende Wallets bereit.

<span id="when-the-move-is-urgent" data-ginger-heading="wenn-der-wechsel-dringend-ist" aria-hidden="true"></span>

## Wenn der Wechsel dringend ist

Ein offengelegter xpub betrifft hauptsächlich Privatsphäre. Offengelegte Signiergeheimnisse gefährden unmittelbar die Guthabenkontrolle. Kann ein Angreifer bereits ausgeben, priorisiere ein vertrauenswürdiges Ziel mit neuen Schlüsseln vor aufwendigen Privatsphäreprozessen. Neues Anwendungspasswort oder offengelegter Seed auf neuer Hardware widerruft keine kopierten Schlüssel.

Prüfe danach [Ausgabebeispiele](/de/learn-privacy/spending-after-coinjoin/) und [Informationsweitergabe](/de/learn-privacy/information-sharing/). Das nachhaltige Ziel ist Verständnis verbleibenden Wissens und die Vermeidung unnötiger neuer Offenlegungen.
