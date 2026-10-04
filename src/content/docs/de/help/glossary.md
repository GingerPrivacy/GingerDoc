---
doc_id: "help.glossary"
title: "Bitcoin- und Ginger-Wallet-Glossar"
description: "Verstehe Gingers Begriffe: UTXO, Wechselgeld, Passphrase, CoinJoin, Anonymitätsscore, Tor, PSBT und mehr."
lang: "de"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Schwierigkeitsgrad: Alltagsnutzung. Wähle diese Anleitung, wenn du die beschriebene Aufgabe erledigen möchtest.

<span id="amounts-and-transactions" aria-hidden="true"></span>

## Beträge und Transaktionen

| Begriff | Bedeutung für Wallet-Nutzer |
| --- | --- |
| Bitcoin /de/ BTC | Das Netzwerk und seine Geldeinheit. Eine Wallet verwaltet Schlüssel und Transaktionen, statt physische Münzen zu lagern. |
| Satoshi /de/ sat | Ein Hundertmillionstel Bitcoin: 100,000,000 sats = 1 BTC. |
| Adresse | Ein aus Ausgabebedingungen abgeleitetes Zahlungsziel. Nutze für jeden Empfang eine neue Adresse. |
| UTXO /de/ Coin | Ein unverbrauchter Transaktionsoutput, der als vollständiger Input ausgegeben werden kann. |
| Input | Ein Verweis auf einen früheren Output, der ausgegeben wird. Mehrere Inputs können eine Transaktion finanzieren. |
| Output | Ein neues Ziel und ein Wert, die durch eine Transaktion erzeugt werden. |
| Wechselgeld | An deine Wallet zurückgehender Wert, wenn Inputs Zahlung plus Gebühr übersteigen. |
| Transaktions-ID /de/ txid | Kennung einer Transaktion. Ihre Weitergabe zeigt, welche öffentliche Transaktion du besprichst. |
| Mempool | Die Sammlung unbestätigter Transaktionen eines Nodes. Verschiedene Nodes können unterschiedliche Ansichten haben. |
| Bestätigung | Aufnahme in einen Block, gefolgt von weiteren darauf aufbauenden Blöcken. |
| Gebührenrate | Bezahlte Satoshis je virtuellem Byte Transaktionsgröße; sie unterscheidet sich von der Gesamtgebühr. |
| vByte | Größeneinheit zum Gebührenratenvergleich von Transaktionen mit unterschiedlichen Witness-Daten. |
| RBF | Replace-by-fee: Eine ausstehende Transaktion kann nach Node-Regeln ersetzt werden, häufig zur Gebührenerhöhung. |
| CPFP | Child-pays-for-parent: Ein Output mit höherer Gebühr der Kindtransaktion kann auch die Bestätigung ihrer unbestätigten Elterntransaktion fördern. |
| Dust | Ein unter einer bestimmten Richtlinie oder Kostenannahme zu kleiner nützlicher Betrag. Wallet-Schwelle und Netzwerkregel sind nicht notwendigerweise gleich. |

<span id="the-network-in-context" aria-hidden="true"></span>

## Das Netzwerk im Zusammenhang

| Begriff | Bedeutung für Wallet-Nutzer |
| --- | --- |
| Block /de/ Blockchain | Ein Paket von Transaktionen und die auf früherem Verlauf aufbauende Kette solcher Blöcke. |
| Miner /de/ Proof of Work | Ein Teilnehmer, der Kandidatenblöcke zusammenstellt und die für Bitcoins Kettenauswahlregeln benötigte Arbeit leistet. |
| Coinbase-Transaktion | Erste Transaktion eines Blocks, die dessen zulässige Mining-Belohnung erzeugt; sie hat nichts mit einem bestimmten Börsenkonto zu tun. Outputs müssen vor Ausgabe reifen. |
| Konsensregeln | Regeln, die ein validierender Node zur Entscheidung über gültige Blöcke und Transaktionen anwendet. |
| Difficulty | Ein Maß für die erforderliche Proof-of-Work eines Blocks; es bestimmt nicht deinen Kontostand. |
| Mainnet /de/ RegTest | Das echte Bitcoin-Netzwerk beziehungsweise ein getrennter lokaler Testmodus. Coins bewegen sich nicht zwischen ihnen. |
| BIP | Ein Bitcoin Improvement Proposal, das einen vorgeschlagenen Standard oder Prozess dokumentiert. Ein veröffentlichtes BIP bedeutet keine Implementierung in jeder Wallet. |
| HD-Wallet | Eine hierarchisch-deterministische Wallet, die aus anfänglichem Geheimnis und Konventionen viele Schlüssel ableitet. |
| Hash | Eine aus Daten berechnete kompakte Kennung. Eine Transaktions-ID identifiziert Daten, keinen Kontonamen einer Person. |
| Fungibilität | Praktische Austauschbarkeit von Einheiten; fremde Verlaufsklassifizierungen beeinflussen ihre Behandlung möglicherweise trotz gültiger Bitcoin. |

Lightning, Zahlungskanäle, Multisig-Aufbau, öffentliche Testnet-/Signet-Einrichtung und Script-Interna liegen außerhalb dokumentierter Nutzerabläufe dieser Version. Allgemeine Glossareinträge belegen keine Ginger-Funktion.

<span id="keys-and-recovery" aria-hidden="true"></span>

## Schlüssel und Wiederherstellung

| Begriff | Bedeutung für Wallet-Nutzer |
| --- | --- |
| Privater Schlüssel | Geheime Informationen zur Autorisierung von Ausgaben. Gib sie niemals an den Support. |
| Öffentlicher Schlüssel | Daten zur Signaturprüfung; kein Ausgabegeheimnis, aber weiterhin möglicherweise datenschutzrelevant. |
| Wiederherstellungswörter /de/ Mnemonic /de/ Seed Phrase | Geordnetes Wörterbackup, das mit richtiger Passphrase und Wallet-Konventionen die Schlüssel wieder erzeugt. |
| BIP39-Passphrase | Zusätzlicher Text zur Wallet-Ableitung mit Wörtern. Jede andere Passphrase wählt andere Schlüssel. |
| Geräte-PIN | Hardware-Wallet-Zugangskontrolle. Sie ist nicht dasselbe wie eine BIP39-Passphrase. |
| 2FA | Zweiter Authentifizierungsfaktor. Ginger nutzt beim Start Authenticator und dienstabhängige lokale Wallet-Dateiverschlüsselung. |
| xpub /de/ Erweiterter öffentlicher Schlüssel | Daten zur Ableitung vieler zugehöriger öffentlicher Adressen. Sie signieren nicht direkt, können aber Wallet-Aktivität offenlegen. |
| Ableitungspfad /de/ Konto | Konvention zur Identifikation eines Schlüsselzweigs. Wiederherstellungswerkzeuge benötigen kompatible Konventionen. |
| Gap Limit | Folge ungenutzter Adressen, die eine Wiederherstellungssuche toleriert, bevor sie die Suche im Zweig beendet. |
| Watch-only-Wallet | Datensatz zur Aktivitätsbeobachtung ohne lokale Signierschlüssel. Hardware kann Signierung separat bereitstellen. |
| Hardware-Wallet | Ein separates Gerät für Schlüsselschutz und Genehmigung unterstützter Transaktionen. |
| PSBT | Teilweise signierte Bitcoin-Transaktionsdatei mit vorgeschlagener Transaktion und Signierinformationen. |
| SegWit /de/ Taproot | Output- und Ausgabeformate. Native Mainnet-Adressen beginnen meist mit `bc1q` beziehungsweise `bc1p`. |

<span id="privacy-and-ginger" aria-hidden="true"></span>

## Privatsphäre und Ginger

| Begriff | Bedeutung für Wallet-Nutzer |
| --- | --- |
| CoinJoin | Gemeinsame Transaktion mehrerer Teilnehmerinputs zur Erschwerung von Eigentumszuordnungen. |
| WabiSabi | Berechtigungsnachweis-Protokoll für Gingers CoinJoin-Koordination. Es entfernt keine Transaktion aus der Blockchain. |
| Koordinator | Ein Rundendienst, der Verfügbarkeit und Eignung beeinflusst, ohne normalerweise private Teilnehmerschlüssel zu halten. |
| Remix | Weitere Teilnahme mit Guthaben, das Remix-Bedingungen des Dienstes erfüllt; Mining-Gebühren können bleiben. |
| Anonymitätsscore | Gingers lokale Coin-Privatsphäreschätzung, keine geprüfte Zahl unabhängiger Menschen. |
| Anonymitätsmenge | Konzeptionelle Gruppe plausibler Alternativen. Sie ist nicht automatisch gleich dem berechneten Wallet-Score. |
| Cluster | Vom Beobachter als zusammengehörig angenommene Adressen oder Coins. Manche Beziehungen sind Fakten, andere fehlbare Heuristiken. |
| Adresswiederverwendung | Mehrmaliger Empfang an derselben Adresse, der diese Eingänge direkt verknüpft. |
| Coin-Kontrolle | Bewusste Prüfung und Auswahl von Coins für eine Zahlung. |
| Tor | Netzwerk-Relay-System, das Anwendungsverbindungen von der IP-Adresse des Nutzers zu trennen hilft. |
| Blockfilter | Kompakte Zusammenfassung zum Finden möglicherweise walletrelevanter Blöcke vor deren lokaler Verarbeitung. |
| Full Node | Software zur Bitcoin-Validierung nach Konsensregeln. Sie hat eine andere Rolle als ein CoinJoin-Koordinator. |
| PayJoin | Gemeinsame Zahlung mit möglichem Empfängerinput. Gingers veröffentlichtes Senden hat Rückfall- und Kompatibilitätsgrenzen. |
| Discreet Mode | Verbergen unterstützter sensibler Bildschirmfelder, keine Verschlüsselung oder Wallet-Sperre. |
| KYC | Identitätsprüfverfahren eines Anbieters. Tor verbirgt keine direkt an ihn gesendeten Informationen. |
| Fiat | Staatliche Währung für Angebote oder Anzeigeschätzungen, verschieden von On-Chain abgewickelten BTC. |

„Privat“ und „sicher“ beschreiben verschiedene Eigenschaften. Frage nach Schutzgegenstand, Gegner und Bedingungen statt bedingungsloser Garantien.
