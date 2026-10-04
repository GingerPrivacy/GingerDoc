---
doc_id: "getting-started.start-here"
title: "Hier beginnen: Deine ersten Schritte mit Ginger"
description: "Lerne Ginger kennen, schütze dein Wiederherstellungsbackup und folge einem einfachen Empfangs- und Sendeablauf, bevor du optionale erweiterte Funktionen erkundest."
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Hier beginnen
prev: false
next:
  link: /de/getting-started/install/
  label: Ginger Wallet installieren
---

> Schwierigkeitsgrad: Einstieg. Die wichtigsten Schritte stehen zuerst; weiterführende Anleitungen sind optional.

Ginger ist eine Anwendung zum Empfangen und Senden von Bitcoin auf deinem Computer. Du kontrollierst die Informationen, mit denen deine Bitcoin ausgegeben werden können. Ginger kann außerdem mit einer optionalen Funktion namens CoinJoin helfen, den Zahlungsverlauf schwerer nachvollziehbar zu machen.

Lerne zunächst den normalen Wallet-Ablauf. Du brauchst weder einen eigenen Bitcoin-Node noch ein Hardware-Gerät oder erweiterte CoinJoin-Einstellungen, um eine Software-Wallet zu erstellen.

<!-- Preserve links to the questions previously published on this page. -->
<span id="whats-the-officially-supported-operating-systems" aria-hidden="true"></span>
<span id="is-there-an-androidios-version" aria-hidden="true"></span>
<span id="does-ginger-support-altcoins" aria-hidden="true"></span>
<span id="what-are-the-minimal-requirements-to-run-ginger" aria-hidden="true"></span>
<span id="do-i-need-to-run-tor" aria-hidden="true"></span>

<span id="1-install-the-real-application" aria-hidden="true"></span>

## 1. Die echte Anwendung installieren

Folge [Ginger Wallet installieren](/de/getting-started/install/) und nutze die dortigen offiziellen Downloadlinks. Wähle den Download für deinen Computer. Installiere keine ähnlich benannte Handy-App oder Software, die dir eine fremde Person als vermeintlicher Support schickt.

Ginger unterstützt Windows, macOS und Linux; die Installationsanleitung nennt unterstützte Versionen und Prozessoren. Diese Version unterstützt ausschließlich Bitcoin und hat keine Android- oder iOS-App. Du brauchst eine Internetverbindung und beschreibbaren Speicher. Tor ist enthalten und muss nicht separat installiert werden.

Beachte die Downloadprüfungen in dieser Anleitung. Die separate [erweiterte Anleitung zur Signaturprüfung](/de/getting-started/verify-download/) erklärt bei Bedarf die Prüfungen auf der Kommandozeile.

<span id="what-is-the-password-used-for" aria-hidden="true"></span>

<span id="2-create-a-wallet-and-make-its-backup" aria-hidden="true"></span>

## 2. Eine Wallet erstellen und sichern

Folge [Deine erste Wallet erstellen](/de/getting-started/first-wallet/). Wähle **New**, notiere die zwölf **Recovery Words** in der richtigen Reihenfolge und schließe **Confirm Recovery Words** ab. Halte das schriftliche Backup geheim und auch nach Verlust des Computers verfügbar.

Verstehe die Wahl unter **Add Passphrase**, bevor du fortfährst. Bei Verwendung einer Passphrase brauchst du für die Wiederherstellung sowohl die ursprünglichen Wörter als auch genau diese Passphrase. Sie schützt außerdem den Zugriff auf die Wallet auf deinem Computer. Ginger kann sie nicht zurücksetzen. Leere Felder erzeugen eine Wallet ohne diese zusätzliche Passphrase; halte deine Entscheidung fest.

Verwende keinen bedeutenden Kontostand, bevor das Backup lesbar ist und du die gewünschte Wallet öffnen kannst. Teile Wörter oder Passphrase niemals mit dem Support.

<span id="why-is-it-important-to-use-a-new-address-for-every-payment" aria-hidden="true"></span>

<span id="3-receive-a-small-first-payment" aria-hidden="true"></span>

## 3. Eine kleine erste Zahlung empfangen

Warte auf die vollständige Synchronisierung: Dabei prüft die Wallet das Bitcoin-Netzwerk auf deine Transaktionen. Wähle **Receive**, füge eine sinnvolle Bezeichnung hinzu und erzeuge eine Empfangsadresse. Gib sie dem vorgesehenen Zahler oder nutze sie im Ablauf einer Börse für On-Chain-Bitcoin-Auszahlungen.

Erzeuge für jede Zahlung eine neue Adresse. Wiederverwendung erleichtert das Verknüpfen verschiedener Zahlungen im öffentlichen Bitcoin-Transaktionsregister.

Prüfe die gesamte Adresse und das Netzwerk, bevor die Zahlung autorisiert wird. Ginger empfängt On-Chain-Bitcoin; das Netzwerk eines anderen Vermögenswerts oder eine Lightning-Rechnung ist kein Ersatz. Eine Bestätigung bedeutet, dass die Transaktion in einen Bitcoin-Block aufgenommen wurde. Ein Screenshot des Zahlers allein ist keine Bestätigung.

<span id="4-make-a-small-first-payment" aria-hidden="true"></span>

## 4. Eine kleine erste Zahlung senden

Wähle **Send** und für den normalen Ablauf die Auswahl **Automatic**. Gib Empfängeradresse und Betrag ein, wähle **Continue** und prüfe Ziel, tatsächlich beim Empfänger ankommenden Betrag und Gebühr. Wähle erst **Confirm**, wenn diese stimmen.

Die Gebühr bezahlt den Platz für die Bitcoin-Transaktion. Ein Restbetrag des ausgewählten Geldes kehrt als Wechselgeld zu deiner Wallet zurück. Du musst dieses Wechselgeld nicht manuell zurücksenden. Ginger kann eine bestätigte Zahlung nicht rückgängig machen.

Prüfe nach einem Verbindungsfehler den Verlauf, bevor du erneut zahlst. So vermeidest du eine doppelte Zahlung, falls die erste Transaktion bereits versendet wurde.

<span id="5-decide-whether-to-use-coinjoin" aria-hidden="true"></span>

## 5. Über CoinJoin entscheiden

CoinJoin kombiniert die Aktivitäten mehrerer Personen in einer gemeinsamen Bitcoin-Transaktion, damit Eigentumsverknüpfungen schwerer abzuleiten sind. Deine Wallet behält ihre Signierschlüssel. CoinJoin kostet Gebühren, kann Zeit beanspruchen und kann Informationen, die ein Empfänger oder eine Börse bereits kennt, nicht löschen.

Prüfe **Automatically start coinjoin** unter **Coinjoin Settings** der ausgewählten Wallet. Schalte die automatische Teilnahme beim Lernen aus, wenn sie nicht unbeaufsichtigt starten soll. Wenn bereits eine Runde läuft, verwende die Pausensteuerung und lass kritische Arbeiten abschließen.

Du kannst Bitcoin empfangen und normale Zahlungen senden, ohne auf eine Privatsphäreanzeige von 100 % zu warten. Du musst auch nicht jede erweiterte Einstellung anpassen, um die Wallet zu verwenden.

<span id="you-have-finished-the-first-use-path" aria-hidden="true"></span>

## Der Einstieg ist abgeschlossen

Die wesentlichen Prüfungen betreffen ein wiederherstellbares Backup, die gewünschte Wallet, das richtige Zahlungsnetzwerk, den Empfänger und die tatsächliche Gebühr. Verwende weiterhin neue Empfangsadressen und prüfe jede Zahlung.

Kehre für die Empfangs- und Sendecheckliste hierher zurück. Der Abschnitt **Fortgeschrittene Nutzung** ist vom Einstieg getrennt. Beispielsweise erklärt [Einen Ginger-Wallet-Download prüfen](/de/getting-started/verify-download/) die Signaturprüfung auf der Kommandozeile ausführlich.
