---
doc_id: "getting-started.first-wallet"
title: "Deine erste Ginger-Wallet erstellen und öffnen"
description: "Erstelle eine Bitcoin-Wallet, sichere ihre Wiederherstellungswörter und Passphrase und verstehe die erste Synchronisierung und die CoinJoin-Einstellungen."
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Deine erste Wallet erstellen
prev:
  link: /de/getting-started/install/
  label: Ginger Wallet installieren
next: false
---

> Schwierigkeitsgrad: Einstieg. Die wichtigsten Schritte stehen zuerst; weiterführende Anleitungen sind optional.

Eine Ginger-Wallet enthält die Informationen, die zum Erkennen und Ausgeben deiner Bitcoin nötig sind. Die Bitcoin selbst sind im Bitcoin-Netzwerk erfasst. Nach dem Verlust deines Computers kannst du sie mit dem richtigen Backup wiederherstellen; nach dem Verlust der Wallet und ihrer Wiederherstellungsdaten ist das möglicherweise nicht mehr möglich.

<span id="create-a-software-wallet" aria-hidden="true"></span>

## Eine Software-Wallet erstellen

1. Öffne den Bildschirm zum Hinzufügen einer Wallet und wähle **New**. Falls **Wallet Name** erscheint, wähle einen Namen, der diese Wallet von anderen unterscheidet. Die erste Wallet kann automatisch einen Namen erhalten, ohne dass dieser Schritt angezeigt wird.
2. Ginger zeigt zwölf englische **Recovery Words** an. Schreibe sie in der angezeigten Reihenfolge auf und bewahre sie offline auf. Fotografiere sie nicht, speichere sie nicht in E-Mails und gib sie nicht an den Support weiter. Ginger zeigt sie nach der Erstellung nicht erneut an.
3. Fahre mit **Confirm Recovery Words** fort und wähle die angeforderten Wörter aus deinem schriftlichen Backup. Dadurch wird geprüft, ob du die Reihenfolge aufgeschrieben hast und die Wörter nicht nur auf dem Bildschirm wiedererkennst.
4. Gib unter **Add Passphrase** eine Passphrase ein und bestätige sie oder lasse beide Felder leer, wenn du bewusst eine Wallet ohne Passphrase wählst. Halte fest, ob du eine Passphrase verwendet hast. Eine nicht leere Passphrase wird sowohl zur Wiederherstellung als auch zum Öffnen der geschützten Wallet benötigt; sie ist kein Passwort, das Ginger zurücksetzen kann.
5. Bestätige gegebenenfalls die Nutzungsbedingungen. Lass die Wallet eine Verbindung herstellen und synchronisieren, bevor du dich auf ihren Kontostand verlässt.

Der Wallet-Name ist eine lokale Bezeichnung. Er ist keine Wiederherstellungsinformation und verändert die Schlüssel nicht. Eine Wallet umzubenennen ist nicht dasselbe, wie eine neue zu erstellen.

<span id="decide-how-to-use-coinjoin" aria-hidden="true"></span>

## Über die CoinJoin-Nutzung entscheiden

Ginger kann dich auffordern, deine CoinJoin-Einstellungen anzupassen. Prüfe die Einstellungen und Gebühren, bevor du Guthaben für automatische CoinJoins verfügbar lässt. Unter **Coinjoin Settings** bestimmt **Automatically start coinjoin**, ob die Wallet ohne Betätigen der Wiedergabesteuerung startet. Prüfe den tatsächlichen Schalter deiner Wallet; importierte oder zuvor konfigurierte Wallets können andere Einstellungen haben.

CoinJoin kostet Transaktionsgebühren und kann Zeit beanspruchen. Bitcoin empfangen, eine normale Zahlung senden und CoinJoin verwenden sind getrennte Vorgänge. Du kannst den Empfangs- und Sendeablauf zunächst mit einem kleinen Betrag lernen, dessen Verlust verkraftbar wäre.

<span id="open-an-existing-wallet" aria-hidden="true"></span>

## Eine vorhandene Wallet öffnen

Wähle ihren Namen in Gingers Wallet-Liste. Gib die ursprüngliche Passphrase ein, falls sie angefordert wird. Wenn du die Zwei-Faktor-Authentifizierung der Anwendung aktiviert hast, erledige die Startabfrage vor dem Öffnen einzelner Wallets. Eine Hardware-Wallet verwendet den Autorisierungsablauf ihres Geräts statt eines Geheimnisses einer Desktop-Software-Wallet.

Um eine Wallet aus Wiederherstellungswörtern hinzuzufügen, wähle **Recover** im Bildschirm zum Hinzufügen einer Wallet. Für ein kompatibles Wallet-JSON-Backup oder einen unterstützten Hardware-Export wähle **Import File**. Füge keine Wiederherstellungswörter in einen Dateiimportdialog ein und importiere nicht die Wiederherstellungswörter einer Hardware-Wallet, nur um das Gerät anzuschließen.

<span id="know-when-the-wallet-is-ready" aria-hidden="true"></span>

## Erkennen, wann die Wallet bereit ist

Die Synchronisierung findet Transaktionen, die zu deiner Wallet gehören. Bis zu ihrem Abschluss können Kontostand und Verlauf unvollständig sein. Eine wiederhergestellte Wallet kann während der Suche normale Empfangs- oder Sendeaktionen ausblenden. Eine unbestätigte eingehende Zahlung wurde erkannt, aber noch nicht in einen Block aufgenommen.

Bevor du einen größeren Betrag empfängst, prüfe, ob die Wallet sich öffnen lässt, dein Wiederherstellungsbackup lesbar ist und du deine Passphrase-Entscheidung verstehst. Prüfe die Wörter einer zugänglichen Software-Wallet unter **Wallet Settings** → **Tools** → **Verify Recovery Words** mit **Verify**. Das prüft ein Backup; vergessene Wörter werden dadurch nicht angezeigt.

<span id="close-safely" aria-hidden="true"></span>

## Sicher schließen

Ginger kann nach dem Schließen des Fensters weiterlaufen, wenn unter **Settings** → **General** die Option **Run in background when window closed** aktiviert ist. Verwende die normale Beenden-Funktion, wenn die Anwendung stoppen soll. Lass Ginger während einer kritischen CoinJoin-Phase sein Herunterfahren abschließen. Erzwungenes Schließen kann die Teilnahme unterbrechen.

<span id="next-receive-and-send" aria-hidden="true"></span>

## Als Nächstes: empfangen und senden

Wenn dein Backup geprüft und die Synchronisierung abgeschlossen ist, kehre zu [Eine kleine erste Zahlung empfangen](/de/getting-started/#3-receive-a-small-first-payment) zurück. Der nächste Abschnitt dort erklärt deine erste Zahlung.
