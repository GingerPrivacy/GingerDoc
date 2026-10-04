---
doc_id: "settings-network.preferences"
title: "Darstellung, Sprache und Alltagseinstellungen"
description: "Ändere Ginger-Sprache, Anzeigeformate, Hintergrundverhalten, Browserpräferenzen und diskreten Modus, ohne sie mit Wallet-Sicherheit zu verwechseln."
lang: "de"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Schwierigkeitsgrad: Alltagsnutzung. Wähle diese Anleitung, wenn du die beschriebene Aufgabe erledigen möchtest.

Nutze **Settings** für anwendungsweite Einstellungen und **Wallet Settings** für Name, CoinJoin-Konfiguration und Werkzeuge der ausgewählten Wallet. Die Anwendungssuche findet Aktionen wie **Data Folder**, **Wallet Info** und **Discreet Mode**, unabhängig von der Position eines Symbols.

<span id="language-and-amounts" data-ginger-heading="sprache-und-beträge" aria-hidden="true"></span>

## Sprache und Beträge

Unter **Settings** → **Appearance** wählt **Language** die Oberflächensprache. Version 2.0.26 bietet Englisch, Spanisch, Ungarisch, Französisch, Chinesisch, Deutsch, Portugiesisch, Türkisch und Italienisch. Folge etwaigen Neustartabfragen. Dieses Handbuch verwendet die veröffentlichten englischen Bedienelementnamen; übersetzte Bezeichnungen können abweichen.

**Dark mode** ändert die Darstellung. **Exchange currency** ändert die Fiat-Referenzanzeige; Dezimal- und Gruppentrennzeichen, Bitcoin-Nachkommastellengruppierung und **Fee display unit** steuern Zahlenformate. Sie ändern weder den BTC-Betrag noch die Netzwerkgebühr. Lies Einstellungsbeispiele vor Eingabe in einem unbekannten Format.

<span id="discreet-mode" data-ginger-heading="diskreter-modus" aria-hidden="true"></span>

## Diskreter Modus

Nutze **Discreet Mode**, wenn jemand deinen Bildschirm sieht. Er verbirgt unterstützte sensible Felder gegen beiläufige Beobachtung. Prüfe vor Bildschirmfreigaben die tatsächlichen ausgeblendeten Inhalte: Er garantiert nicht, dass jeder Dialog, jede Adresse oder externe Anwendung verborgen ist.

Der diskrete Modus verschlüsselt keine Dateien, sperrt keine Wallet, stoppt keine Signierung und ändert keine Blockchain-Privatsphäre. Personen mit Computerzugriff können die Anwendung weiter bedienen. Nutze beim Weggehen die Bildschirmsperre deines Betriebssystems.

<span id="general-settings" data-ginger-heading="allgemeine-einstellungen" aria-hidden="true"></span>

## Allgemeine Einstellungen

| Einstellung | Praktische Wirkung |
| --- | --- |
| **Run Ginger when computer starts** | Öffnet Ginger mit der Betriebssystemsitzung. |
| **Run in background when window closed** | Lässt die Anwendung nach Fensterschließung aktiv; CoinJoin und Synchronisierung können weiterlaufen. |
| **Auto copy addresses** | Kann angezeigte Adressen automatisch in die Zwischenablage kopieren. |
| **Auto paste addresses** | Kann Zwischenablageinhalte zur Adresseingabe nutzen. Prüfe immer das resultierende Ziel. |
| **Auto download new version** | Steuert den Download verfügbarer Updates; folge der Installation separat. |
| **Browser used by Ginger** | Wählt den Browser für externe Seiten; die eigene Option zeigt **Custom browser path**. |

Zwischenablagekomfort authentifiziert keinen Empfänger. Andere Anwendungen können Daten lesen oder ersetzen. Kopiere Wiederherstellungswörter nie beim normalen Empfangen oder Senden in die Zwischenablage.

Externe Seiten nutzen das eigene Netzwerk- und Privatsphäreverhalten des Browsers. Ein Kauf-/Verkaufsanbieter kann Identitätsdaten verlangen, obwohl Ginger Tor verwendet. Anzeige- oder Browseränderungen verändern keine Anbieteraufzeichnungen.

<span id="wallet-information-and-tools" data-ginger-heading="wallet-informationen-und-werkzeuge" aria-hidden="true"></span>

## Wallet-Informationen und Werkzeuge

**Wallet Info** kann Konto- und erweiterte öffentliche Schlüsselinformationen anzeigen. Ein erweiterter öffentlicher Schlüssel kann nicht direkt ausgeben, aber viele zugehörige Adressen offenlegen. Veröffentliche ihn nicht in Supportanfragen.

Unter **Wallet Settings** → **General** benennt die Namenssteuerung die Wallet um. Unter **Tools** prüft **Verify Recovery Words** ein zugängliches Software-Wallet-Backup, **Resync** baut die Ansicht neu auf und **Delete Wallet** entfernt nach Bestätigung eine lokale Wallet. Löschen zerstört weder Bitcoin noch widerruft es Wörter oder ersetzt ein Backup. Halte funktionierende Wiederherstellungsdaten bereit, bevor du lokalen Zugriff entfernst.
