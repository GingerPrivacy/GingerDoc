---
doc_id: "coinjoin.settings"
title: "CoinJoin und Output-Wallets konfigurieren"
description: "Verstehe CoinJoin-Einstellungen für Privatsphäre und Kosten, ausgeschlossene Coins und die Weiterleitung von Outputs an eine andere geladene Wallet."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Verstehe zuerst die normalen Start- und Pausensteuerungen und dass abgeschlossene Runden Gebühren kosten.

**Coinjoin Settings** gelten für die ausgewählte Wallet. Ändere jeweils eine Einstellung und beobachte ihre Wirkung. Aggressivere Einstellungen können Gebühren oder Wartezeiten erhöhen, ohne die für deine Situation relevante Privatsphäre zu verbessern.

<span id="automatic-participation-and-cost-preferences" aria-hidden="true"></span>

## Automatische Teilnahme und Kosteneinstellungen

| Einstellung | Was sie steuert |
| --- | --- |
| **Automatically start coinjoin** | Startet die Teilnahme, wenn Wallet und geeignetes Guthaben verfügbar sind. |
| **Stop coinjoin threshold** | Stoppt automatische CoinJoins, wenn der Kontostand unter dem gewählten BTC-Betrag liegt. Das ist eine Stoppregel für die Wallet, nicht die Gebührenbefreiungsschwelle oder der kleinste akzeptierte Input des Koordinators. |
| **Coinjoin time preference** | Vergleicht aktuelle Mining-Gebühren mit dem Median des gewählten Zeitraums. Beeinflusst die Teilnahmezeit, verspricht keinen Abschlusstermin. |
| **Ignore coinjoin time preference below** | Ermöglicht Teilnahme unter dieser Gebührenratenschwelle, auch wenn der Zeitpräferenzvergleich sonst warten würde. |
| **Random Skip** | Bestimmt, wie oft geeignete Runden übersprungen werden. Optionen: **Disabled**, **Rarely**, **Sometimes**, **Often**. Häufigeres Überspringen bedeutet meist längeres Warten. |

Meldet der Player einen unwirtschaftlichen Kontostand, kann das Betätigen der Wiedergabe die Stoppschwelle umgehen. Transaktionsgebühren entfallen dadurch nicht. Berücksichtige Coin-Größen und erwartete Kosten vor einer Übersteuerung.

<span id="privacy-settings" aria-hidden="true"></span>

## Privatsphäreeinstellungen

**Anonymity score target** ist der interne Mindestscore, ab dem Ginger einen Coin als privat betrachtet. Der veröffentlichte Editor akzeptiert ganze Zahlen von 2 bis 1000. Ein höheres Ziel kann mehr CoinJoin-Aktivität auslösen; es garantiert nicht, dass genau so viele unabhängige Personen den Coin besitzen könnten.

**Single non-private coin restriction** erlaubt nur einen Coin mit Anonymitätsscore 1 pro Registrierung. Das kann direkte Verknüpfungen durch gemeinsame Registrierung mehrerer zuvor nicht privater Coins reduzieren, aber den Fortschritt bei vielen solchen Coins verlangsamen.

Ein niedrigeres Ziel kann sofort ändern, was die Oberfläche als privat bezeichnet, ohne die Blockchain zu ändern. Betrachte Privatsphäreanzeigen als Schätzungen und Richtlinieneinstellungen, nicht als Beleg dafür, dass ein externer Beobachter alle Informationen verloren hat.

<span id="exclude-specific-coins" aria-hidden="true"></span>

## Bestimmte Coins ausschließen

Öffne **Exclude Coins** im Menü des CoinJoin-Players. Prüfe die Coin-Liste und markiere Coins, die nicht teilnehmen sollen. Über diese Liste kannst du sie später wieder zulassen. Der Ausschluss gilt für diese Coins, nicht dauerhaft für jede künftige Zahlung an dieselbe Adresse.

Ein CoinJoin-Ausschluss sperrt einen Coin nicht für normale Ausgaben und ersetzt keine Hardware-Verwahrung. Sind alle verfügbaren Coins ausgeschlossen, kann **Only excluded funds are available** erscheinen. Prüfe diese Liste, bevor du Gebühren- oder Privatsphäreeinstellungen änderst.

<span id="receive-outputs-in-another-wallet" aria-hidden="true"></span>

## Outputs in einer anderen Wallet empfangen

**Coinjoin to this wallet** bestimmt, wo die CoinJoin-Outputs der Quell-Wallet empfangen werden. Standardmäßig ist das die Quell-Wallet selbst.

1. Lade die gewünschte Ziel-Wallet in Ginger. Sichere sie und prüfe, ob du ihre Empfangsadressen kontrollierst.
2. Öffne ohne laufenden CoinJoin **Coinjoin Settings** der Quell-Wallet und wähle das Ziel unter **Coinjoin to this wallet**.
3. Prüfe vor dem Start den Namen. Nur geladene, geeignete Wallets erscheinen; eine auf der Festplatte aufgeführte Wallet ist nicht automatisch geladen.
4. Prüfe nach erfolgreicher Transaktion den synchronisierten Verlauf der Ziel-Wallet und den Quellkontostand.

Während eines laufenden CoinJoins lässt sich das Ziel nicht ändern. **Diese Auswahl wird nach einem Ginger-Neustart zurückgesetzt**; prüfe sie vor jeder Sitzung, in der das Ziel wichtig ist. Vermeide zwei Wallets, die CoinJoin-Outputs gegenseitig zurücksenden; die Auswahlmöglichkeiten beschränken rekursive Anordnungen.

Die veröffentlichte Zielauswahl kann eine geladene Hardware-Wallet enthalten. Die Quelle bleibt die Software-Wallet, die den CoinJoin signiert; ein Hardware-Ziel macht sie weder zu einer Cold Wallet noch ermöglicht es der Hardware-Wallet eigene CoinJoins. Nutze nur ein tatsächlich angebotenes Ziel und prüfe Backup und Adresskontrolle, bevor du dich darauf verlässt.

<span id="experimental-coin-selection" aria-hidden="true"></span>

## Experimentelle Coin-Auswahl

Die Version bietet **(EXPERIMENTAL) Improved Coin Selection**. Ihre Konfiguration dient fortgeschrittener Anpassung und ist keine CoinJoin-Voraussetzung. Verfügbare Steuerungen:

| Steuerung | Beabsichtigte Wirkung |
| --- | --- |
| **Force to use low privacy coins** | Erzwingt einen Coin aus der Gruppe mit geringster Privatsphäre. |
| **Can select already private coins** | Erlaubt Coins oberhalb des Privatsphäreziels. Auch sie können Mining-Gebühren verursachen. |
| **Coin privacy difference normalization for score calculation** | Kleinere Werte bevorzugen Auswahlen mit ähnlicheren Privatsphärescores. |
| **Amount loss normalization for score calculation** | Kleinere Werte bevorzugen Auswahlen mit geringerem relativen Betragsverlust. |
| **Target coin number per wallet bucket** | Beeinflusst die Auswahl aus überrepräsentierten Coin-Größengruppen. |
| **Use the Old Coin Selector for fallback** | Vergleicht alte und neue Auswahlresultate und entscheidet zwischen ihnen. |

Behalte Anfangswerte, solange du den veränderten Kompromiss nicht verstehst. Es sind Auswahlpräferenzen, keine exakte Gesamtgebührenobergrenze und kein Versprechen zur Outputzahl einer Runde.

<span id="when-another-round-cannot-start" aria-hidden="true"></span>

## Wenn keine weitere Runde starten kann

Diese Version lehnt beim normalen CoinJoin-Start Wallets ab, deren Guthaben das Privatsphäreziel bereits erreicht, ebenso eine verfügbare Auswahl nur privater Coins. Eine andere Output-Wallet umgeht diese Regel nicht. Sind alle Coins privat, kann die manuelle Wiedergabesteuerung verschwinden. Verlasse dich nicht darauf, alle nicht privaten Coins auszuschließen und eine Runde allein zur Weiterleitung privater Coins zu erzwingen.

Wähle das Ziel vor geeigneter Teilnahme oder prüfe eine normale Übertragung bereits privater Coins. Niedrigere Privatsphäreanforderungen oder zusätzliche unverbundene Coins nur zum Starten einer Runde können Privatsphäreergebnis und Kosten verändern.
