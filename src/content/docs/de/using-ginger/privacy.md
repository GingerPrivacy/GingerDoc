---
doc_id: "learn-privacy.who-can-see"
title: "Wer kann meine Bitcoin-Transaktionen sehen?"
description: "Lerne, was eine Bitcoin-Adresse verrät, wie Identität und Transaktionsverknüpfungen zusammenwirken und wo Gingers Werkzeuge helfen."
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Schwierigkeitsgrad: Einstieg. Die wichtigsten Schritte stehen zuerst; weiterführende Anleitungen sind optional.

Bitcoin-Transaktionen sind öffentlich, aber der Name eines Wallet-Besitzers steht nicht automatisch neben jeder Adresse. Praktisch zählt, wer eine Adresse oder Transaktion mit dir verbinden kann und was er daraus weiter ableitet.

Ein Kunde kennt vielleicht die Rechnungsadresse, die du ihm gegeben hast. Eine Börse kennt deine Auszahlungsadresse und geprüfte Identität. Ein Beobachter einer öffentlichen Spendenadresse sieht deren Eingänge. Wegen unterschiedlichen Vorwissens ist kontrollierte Offenlegung ein hilfreicheres Privatsphäremodell als ein einziger Anonymitätsschalter.

<span id="what-the-blockchain-reveals" aria-hidden="true"></span>

## Was die Blockchain offenlegt

Transaktionen zeigen Inputs, Outputs, Werte und Ausgabebeziehungen. Ein später in einer anderen Transaktion ausgegebener Output schafft eine öffentliche Verbindung. Das beweist nicht automatisch den Besitzer jedes Outputs: Es kann eine Zahlung, eine Eigenübertragung oder eine gemeinsame Transaktion mehrerer Besitzer sein. Der [Privatsphäreabschnitt des ursprünglichen Bitcoin-Papers](https://bitcoin.org/bitcoin.pdf) behandelt die Trennung öffentlicher Transaktionen und Identitäten sowie das Problem der Schlüsselverknüpfung.

Ordnet jemand einer Person eine Adresse zu, kann er verbundene Aktivität untersuchen. Manche Beziehungen sind direkt, etwa wiederholte Zahlungen an dieselbe Adresse. Andere beruhen auf Annahmen zu gemeinsamem Inputbesitz oder Wechselgeld. Diese können falsch sein, aber trotzdem die Einstufung durch Dienste beeinflussen.

<span id="who-can-learn-what" aria-hidden="true"></span>

## Wer kann was erfahren?

| Beobachter | Mögliches Vorwissen | Was du beeinflussen kannst |
| --- | --- | --- |
| Zahler | Deine bereitgestellte Adresse und seine Zahlung | Neue Adresse pro Empfang geben |
| Zahlungsempfänger | Zahlungstransaktion und Kaufdaten | Ausgewählte Inputs prüfen und unnötige Identitätsangaben vermeiden |
| Börse oder Kaufanbieter | Kontoaufzeichnungen, Zahlungsdaten, Ein-/Auszahlungsadressen | Anbieteraufzeichnungen vor Nutzung verstehen |
| Öffentlicher Blockchain-Analyst | Transaktionsdaten und externe Bezeichnungen | Einfache Links vermeiden; CoinJoin und spätere Ausgaben prüfen |
| Kontaktierter Netzwerkdienst | Anfrageinhalt und mögliche Verbindungsmetadaten | Tor soweit unterstützt aktiv lassen und funktionsbezogene Offenlegungen verstehen |
| Person mit Computer-/Backupzugriff | Wallet-Dateien, Bezeichnungen, Adressen, Protokolle, möglicherweise Schlüssel | Gerät, Wiederherstellungsbackup und lokale Metadaten schützen |

Keine einzelne Einstellung löst jedes Problem dieser Tabelle. Hardware schützt Schlüssel, verbirgt aber keine öffentliche Adresse. Tor schützt Verbindungsmetadaten, verbirgt aber keine Informationen, die du in Anbieterformulare eingibst.

<span id="why-this-matters-in-ordinary-life" aria-hidden="true"></span>

## Warum das im Alltag wichtig ist

Stellst du mehreren Kunden Rechnungen an dieselbe Adresse, sieht jeder deren Eingänge einschließlich der Zahlungen anderer Kunden. Eine neue Adresse vermeidet diesen direkten gemeinsamen Identifikator. Sie verhindert nicht automatisch spätere Links, wenn du alle Eingänge gemeinsam ausgibst.

Bezahlst du aus Guthaben einer öffentlichen Spendenkampagne, kann die Transaktion mehr Kontext als den Betrag verraten. Aufzeichnungen über die Zuordnung von Coins zu Aktivitäten helfen bewussten Entscheidungen vor der Ausgabe.

Finanzielle Privatsphäre schützt Kundenvertraulichkeit, Geschäftsinformationen, persönliche Beziehungen und körperliche Sicherheit. Solche Grenzen zu wünschen setzt kein Fehlverhalten voraus. Entscheidend ist, ob die andere Person diese Information für den Vorgang benötigt.

<span id="privacy-and-fungibility" aria-hidden="true"></span>

## Privatsphäre und Fungibilität

Fungibilität bedeutet Austauschbarkeit zu gleichwertigen Bedingungen. Bitcoin-Regeln erfassen Werte, aber Personen und Dienste können Outputs anhand vermuteter Geschichte unterschiedlich einstufen. Diese Urteile schaffen Reibung, selbst wenn ein Output nach Bitcoin-Regeln gültig ist.

Privatsphärewerkzeuge können manche historischen Einstufungen schwerer zuverlässig machen. Sie verpflichten keinen Anbieter zur Annahme und löschen keine bereits vorhandenen Aufzeichnungen. Prüfe Aussagen über „saubere“ Coins oder garantierte Akzeptanz sorgfältig: Wallet-Schätzung und Dienstrichtlinie sind verschiedene Dinge.

<span id="where-ginger-fits" aria-hidden="true"></span>

## Gingers Rolle

Ginger bietet neue Empfangsadressen, lokale Bezeichnungen, Coin-Kontrolle, Tor-Integration, Compact-Filter-Synchronisierung und CoinJoin. Damit reduzierst du bestimmte Offenlegungen und prüfst Zahlungen vor Autorisierung. Der Desktop unterstützt außerdem Hardware-Abläufe für Schlüsselschutz.

Beginne mit neuen Empfangsadressen und dem Verständnis vorhandener Coins. Ist Transaktionsverknüpfung ein Problem, lerne vor automatischen Runden, was CoinJoin verändert und was nicht. Lies für den Alltag [Privatsphäre vor und nach Zahlungen](/de/using-ginger/address-reuse/).

Ziel ist eine bewusste Verbesserung für deine Situation. Ginger kann keine bereits gesammelten Börsendaten löschen, keine Akzeptanz aller Dienste versprechen und keine neuen Verbindungen aus späteren freiwilligen Offenlegungen verhindern.
