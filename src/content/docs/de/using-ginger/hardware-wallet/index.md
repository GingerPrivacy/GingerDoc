---
doc_id: "hardware-wallets.connect"
title: "Eine Hardware-Wallet anschließen und verwenden"
description: "Verbinde eine unterstützte Hardware-Wallet mit Ginger, prüfe Empfangsadressen auf dem Gerät und genehmige Zahlungen sicher."
lang: "de"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="does-ginger-support-hardware-wallets"></span>

> Schwierigkeitsgrad: Alltagsnutzung. Wähle diese Anleitung, wenn du die beschriebene Aufgabe erledigen möchtest.

Eine Hardware-Wallet bewahrt Signierschlüssel auf einem separaten Gerät. Ginger kann ihren Kontostand anzeigen und Transaktionen vorbereiten, während das Gerät unterstützte Signiervorgänge autorisiert. Der Desktop verarbeitet weiterhin sensible öffentliche Informationen; Hardware-Verwahrung macht die Wallet-Aktivität deshalb nicht anonym.

<span id="compatibility-in-this-release" data-ginger-heading="kompatibilität-in-dieser-version" aria-hidden="true"></span>

## Kompatibilität in dieser Version

Ginger 2.0.26 enthält Hardware Wallet Interface (HWI) 3.2.0. Die Geräteerkennung umfasst Coldcard, Ledger Nano S, Nano S Plus und Nano X, Trezor One, Model T, Safe 3 und Safe 5, BitBox01, BitBox02, KeepKey und Blockstream Jade. Erkennung garantiert nicht, dass jedes Gerät, jede Firmware, jeder Passphrase-Ablauf und jeder Adresstyp in der grafischen Oberfläche funktioniert.

Die [HWI-3.2.0-Gerätematrix](https://github.com/bitcoin-core/HWI/blob/3.2.0/docs/devices/index.rst) beschreibt die Fähigkeiten der zugrunde liegenden Anbindung. Ginger stellt nur einen Teil bereit: Beispielsweise importiert die normale Geräteverbindung das native SegWit-Konto. HWI-Unterstützung für Multisig oder Taproot erzeugt nicht von selbst einen entsprechenden Ginger-Einrichtungsablauf.

Prüfe vor größeren Übertragungen, ob dein konkretes Gerät sich verbinden, eine Empfangsadresse anzeigen und eine kleine Testzahlung signieren kann. Benötigt es eine PIN- oder Passphrase-Eingabe, die Ginger nicht abschließen kann, nutze den unterstützten geräteseitigen Ablauf oder frage den Hersteller. Gib die Wiederherstellungswörter des Geräts nicht als Umgehung in Ginger ein.

<span id="add-the-device" data-ginger-heading="das-gerät-hinzufügen" aria-hidden="true"></span>

## Das Gerät hinzufügen

1. Initialisiere und sichere die Hardware-Wallet nach Herstelleranweisung. Verwende vertrauenswürdige Firmware und ein datenfähiges USB-Kabel.
2. Verbinde jeweils ein Gerät, entsperre es und öffne seine Bitcoin-Anwendung, falls erforderlich. Schließe andere Wallet-Anwendungen, die die USB-Verbindung belegen könnten.
3. Wähle **Hardware Wallet** im Bildschirm zum Hinzufügen einer Wallet und gib gegebenenfalls einen Namen ein.
4. Folge Erkennung und Geräteabfragen. Ginger kann eine zuvor hinzugefügte Wallet erkennen und statt eines Duplikats deren Öffnung anbieten.
5. Lass Ginger synchronisieren. Prüfe, ob ausgewähltes Netzwerk und Konto deiner Absicht entsprechen.

Ginger kann einen öffentlichen Wallet-Datensatz ohne angeschlossene Hardware auf dem Computer behalten. Er erlaubt Beobachtung und Adresserzeugung; zum Ausgeben braucht es weiterhin das Signiergerät oder eine gültige Wiederherstellung seiner Schlüssel.

<span id="receive-and-verify" data-ginger-heading="empfangen-und-prüfen" aria-hidden="true"></span>

## Empfangen und prüfen

Wähle **Receive**, füge eine Bezeichnung hinzu und erzeuge eine Adresse. Nutze soweit verfügbar **Show on the hardware wallet**. Vergleiche die vollständige auf dem Gerät angezeigte Adresse mit Gingers Adresse vor Weitergabe. Stimmen sie nicht überein, stoppe: Eine andere Adresse zu genehmigen kann Geld außerhalb deiner Wallet senden.

Der Desktop kann selbst bei Kompromittierung eine glaubwürdig wirkende Adresse zeigen. Der Gerätebildschirm liefert eine separate Prüfung anhand eigener Schlüssel. Nutze für jede Zahlung eine neue Adresse gegen Verknüpfungen nicht zusammengehöriger Zahlungseingänge.

<span id="send-and-approve" data-ginger-heading="senden-und-genehmigen" aria-hidden="true"></span>

## Senden und genehmigen

Bereite eine Zahlung in Ginger vor und prüfe Empfänger, Betrag, Wechselgeld und Gebühr. Prüfe am Gerät, was du signieren sollst. Lehne ab, wenn Ziel oder Betrag nicht stimmen oder das Gerät eine Output-/Wechselgeldbedingung meldet, die du nicht erklären kannst.

Halte das Gerät bis zum Abschluss der Signierung verbunden. Prüfe anschließend im Ginger-Verlauf Veröffentlichung und Bestätigung. Das Abziehen des Geräts storniert keine bereits veröffentlichte Transaktion.

<span id="coinjoin-and-other-limits" data-ginger-heading="coinjoin-und-weitere-grenzen" aria-hidden="true"></span>

## CoinJoin und weitere Grenzen

Eine Hardware-Wallet kann nicht die Signierquelle automatischer Ginger-CoinJoins sein. Eine geladene Hardware-Wallet kann als Outputziel einer Software-Wallet erscheinen; das ist eine Empfangsrolle, deren Auswahl nach Neustart zurückgesetzt wird. Nutze nur tatsächlich angebotene Ziele und prüfe Kontrolle, bevor du dich darauf verlässt.

Die [Anleitung von der Börse zur Cold Storage](/de/hardware-wallets/exchange-to-cold-storage/) vergleicht direkten Empfang geeigneter CoinJoin-Outputs mit einer späteren normalen Übertragung. Sie erklärt auch die Startbeschränkung für bereits private Coins und den Abgleich beider Wallets.

PayJoin-Senden aus Hardware-Wallets wird in dieser Version abgelehnt. Nachrichtensignierung hängt von Geräte- und Prüferkompatibilität ab. Weder Gerät noch Ginger können bestätigte Zahlungen umkehren. Lies für Dateisignierung [Den PSBT-Ablauf verwenden](/de/hardware-wallets/psbt/).

<span id="connection-problems" data-ginger-heading="verbindungsprobleme" aria-hidden="true"></span>

## Verbindungsprobleme

Versuche ein bekanntes Datenkabel, einen direkten USB-Port und ein einzelnes entsperrtes Gerät. Befolge unter Linux passende Herstelleranweisungen zu udev-/USB-Berechtigungen und verbinde anschließend erneut. Vermeide dauerhaften Root-Betrieb als Lösung. Öffnet eine andere Passphrase unerwartet ein leeres Konto, prüfe die ursprüngliche Gerätepassphrase, statt das Gerät zurückzusetzen.
