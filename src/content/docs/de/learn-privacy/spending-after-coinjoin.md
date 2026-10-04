---
doc_id: "learn-privacy.spending-after-coinjoin"
title: "Ausgaben nach CoinJoin: Rechenbeispiele"
description: "Verstehe anhand praktischer Bitcoin-Zahlungen die Coin-Auswahl, Wechselgeld, Zusammenführung und mögliche Offenlegungen nach CoinJoin."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Verstehe zuerst neue Empfangsadressen und die normale Zahlungsprüfung.

CoinJoin verändert die Unsicherheit bei Input-Output-Verknüpfungen. Die nächste Transaktion kann neue Informationen liefern. Entscheide vor einer Zahlung, welche Coins Empfänger oder andere Beobachter dir bereits zuordnen könnten und was die geplante Zahlung verrät.

Die Beispiele verwenden fiktive Satoshi-Beträge. Die Gebühren dienen dem Rechnen und sind keine Netzwerkangebote. Ein Coin ist ein unspent transaction output (UTXO), also ein unverbrauchter Transaktionsoutput; er ist keine Wallet oder Bitcoin-Adresse.

<span id="start-with-the-payment-you-need-to-make" aria-hidden="true"></span>

## Mit der benötigten Zahlung beginnen

Öffne in Ginger **Wallet Coins** für Beträge, Bezeichnungen und Privatsphäredaten. Bei normalen Zahlungen wählst du mit **Send** → **Manual Control** Kandidaten aus. Das ersetzt keine Prüfung der Endtransaktion: Prüfe tatsächlich verwendete Inputs, gesendeten Betrag, Wechselgeld und Gebühr vor **Confirm**.

Auch automatische Auswahl und Gingers Empfehlungen können helfen. Manuelle Kontrolle ist nützlich bei Zusatzwissen, das die Wallet nicht hat, etwa welcher Kunde einen Eingang bereits kennt. Sie ist nicht für jede Zahlung grundsätzlich besser.

<span id="example-1-one-coin-covers-a-purchase" aria-hidden="true"></span>

## Beispiel 1: Ein Coin deckt einen Kauf

Alex hat einen CoinJoin-Coin über 120,000 Satoshis und möchte 70,000 bezahlen. Die angenommene Gebühr beträgt 1,000 Satoshis.

| Transaktionsteil | Betrag |
| --- | --- |
| Ausgegebener Input | 120,000 sats |
| Empfang des Händlers | 70,000 sats |
| Wechselgeld an Alex | 49,000 sats |
| Mining-Gebühr | 1,000 sats |

Der Händler kennt seine Zahlungsadresse und den Betrag. Er kann die Transaktion prüfen und vermuten, dass der andere Output Alex' Wechselgeld ist. Er erfährt allein aus dieser Transaktion nicht Alex' Gesamtkontostand, sieht aber den Input und kann spätere Ausgaben des wahrscheinlichen Wechselgelds verfolgen.

Alex muss das Wechselgeld nicht manuell zurückbewegen: Es gehört bereits zur Wallet. Der nützliche nächste Prüfpunkt ist eine spätere Zahlung mit diesem Wechselgeld.

<span id="example-2-two-unrelated-receipts-are-combined" aria-hidden="true"></span>

## Beispiel 2: Zwei unverwandte Eingänge werden kombiniert

Blair hat einen Coin über 90,000 Satoshis aus freiberuflicher Arbeit und einen über 80,000 aus einer öffentlichen Spendenadresse. Eine Zahlung von 150,000 bei 2,000 Gebühr braucht mehr als jeder Coin allein; gemeinsam liefern sie 18,000 Satoshis Wechselgeld.

Normale gemeinsame Ausgabe kann gemeinsamen Inputbesitz nahelegen. Jemand mit Kenntnis des Spenden-Coins erhält möglicherweise einen Hinweis auf den Arbeits-Coin. Das ist eine Ableitung aus Transaktion und Vorwissen, kein automatischer Identitätsbeweis.

Ein anderer ausreichend großer Coin derselben Aktivität könnte weniger neue Informationen offenlegen. Ist die gemeinsame Ausgabe beider die einzige praktikable Zahlungsweise, ist das eine Kosten-/Privatsphäreentscheidung. Bezahle keine Rechnung zu niedrig und betrachte „niemals Coins kombinieren“ nicht als absolute Regel.

CoinJoin und PayJoin sind selbst gemeinsame Transaktionen; die Annahme eines einzigen Inputbesitzers gilt nicht allgemein. Beachte diesen Unterschied bei Transaktionsdeutung.

<span id="example-3-change-carries-a-connection-forward" aria-hidden="true"></span>

## Beispiel 3: Wechselgeld trägt eine Verbindung weiter

Alex kombiniert später die 49,000 Satoshis Wechselgeld aus Beispiel 1 mit unverwandten 60,000 für eine Zahlung von 100,000. Bei angenommener Gebühr von 1,000 kehren 8,000 Satoshis als neues Wechselgeld zurück.

Der erste Händler kann beobachten, dass sein wahrscheinlicher Wechselgeldoutput gemeinsam mit dem 60,000-Input ausgegeben wurde. Auch bei neuer Empfängeradresse bleibt diese Inputbeziehung. Eine neue Outputadresse macht gemeinsame Inputausgabe nicht rückgängig.

Nutze Bezeichnungen zum Erhalten späteren Entscheidungskontexts. Sie sind lokale Notizen; sie veröffentlichen weder einen Namen auf der Blockchain noch verhindern sie Beobachterableitungen.

<span id="example-4-moving-the-entire-balance-to-hardware" aria-hidden="true"></span>

## Beispiel 4: Den Gesamtkontostand auf Hardware bewegen

Casey hat vier Coins zu je 200,000 Satoshis. Alle an eine Hardware-Empfangsadresse zu senden gibt 800,000 Satoshis Inputs in einer Transaktion aus. Bei angenommener Gebühr von 2,000 empfängt die Hardware-Wallet 798,000.

Hardware verbessert Schlüsselisolation, aber der Transfer zeigt gemeinsame Ausgabe aller vier Inputs. Separate Übertragungen können diese konkrete Zuordnung vermeiden, verursachen aber mehr Gebühren und andere sichtbare Zeit-/Betragsmuster. Direkter Hardware-Empfang geeigneter CoinJoin-Outputs spart einen späteren Transfer, hat aber versionsabhängige Eignungs- und Zielprüfungen; er ist kein allgemeiner Remix-Weg für hardwareverwahrte Coins.

Gib nicht den ganzen Kontostand aus, nur weil die Coin-Liste unordentlich wirkt. Zusammenführung reduziert möglicherweise spätere Inputs; eine niedrige Rate verändert nur die Kosten, nicht die Offenlegung.

<span id="other-participants-and-future-observations-matter" aria-hidden="true"></span>

## Andere Teilnehmer und spätere Beobachtungen zählen

Dein Verhalten ist nicht der einzige Einfluss. Spätere Transaktionen anderer Teilnehmer können die vom Beobachter betrachteten Möglichkeiten einschränken. Forschung zur Zusammenführung nach CoinJoin untersucht das und benennt Grenzen der praktischen Identifikation. Ihre Messwerte sind keine Wahrscheinlichkeit, dass ein bestimmter Nutzer verfolgt wird. [Gavenda und Kollegen, 2025](https://arxiv.org/html/2510.17284v1)

Keine allgemeine Rundenzahl oder Wartezeit garantiert Privatsphäre. Warten löscht keine Informationen, die bereits einem identifizierten Händler, einer Börse oder einem anderen Wallet-Dienst offengelegt wurden.

<span id="a-short-review-before-confirming" aria-hidden="true"></span>

## Kurze Prüfung vor der Bestätigung

1. Prüfe Empfänger und erforderlichen Betrag über einen vertrauenswürdigen Kanal.
2. Prüfe die endgültigen Inputs und frage, wer sie bereits kennt.
3. Prüfe, ob die Auswahl bewusst getrennte Aktivitäten kombiniert.
4. Prüfe das Wechselgeld und beachte seine Verbindung bei späteren Ausgaben.
5. Akzeptiere nur einen passenden Gebühren-/Privatsphärekompromiss; prüfe den Verlauf vor erneuter Zahlung nach unklarem Ergebnis.

Für begleitende Wallet- und Browserentscheidungen lies [Privatsphäregewohnheiten](/de/using-ginger/address-reuse/) und [Wallet-Informationsflüsse](/de/learn-privacy/information-sharing/).
