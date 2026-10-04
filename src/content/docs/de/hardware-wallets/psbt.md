---
doc_id: "hardware-wallets.psbt"
title: "Den PSBT-Ablauf verwenden"
description: "Bereite in Ginger eine Bitcoin-Transaktion vor, signiere sie mit einer Hardware-Wallet per Datei und importiere das Ergebnis zur Veröffentlichung."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Richte zuerst eine geprüfte Hardware-Wallet mit einem unabhängigen Backup ein.

Eine partially signed Bitcoin transaction (PSBT), also teilweise signierte Bitcoin-Transaktion, ist eine Datei mit einer Transaktion und den vom Signierer benötigten Informationen. Sie trennt die Vorbereitung am Desktop von der Signierung auf Hardware. Eine PSBT kann Adressen, Beträge und Wallet-Informationen offenlegen; behandle sie schon vor ihrer Ausgabefähigkeit als privat.

<span id="prepare-the-wallet-connection" aria-hidden="true"></span>

## Die Wallet-Verbindung vorbereiten

Du benötigst einen kompatiblen Hardware-Wallet-Datensatz in Ginger, der zu den Schlüsseln des Signiergeräts gehört. Einen unterstützten Coldcard-Wallet-JSON-Export fügst du mit **Import File** hinzu. Nutze die aktuellen Exportanweisungen des Herstellers für diese Firmware; eine PSBT-Transaktionsdatei ist keine Wallet-Importdatei.

Der Export enthält öffentliche Kontoinformationen und einen Gerätefingerabdruck, keine Wiederherstellungswörter. Prüfe vor der Einzahlung, ob Gingers Empfangsadresse mit dem Gerät übereinstimmt. Ein importiertes Konto mit anderem Ableitungspfad oder anderer Passphrase kann auch auf demselben Gerät eine andere Wallet sein.

<span id="export-a-transaction" aria-hidden="true"></span>

## Eine Transaktion exportieren

1. Öffne die Hardware-Wallet in Ginger. Aktiviere **PSBT workflow** unter **Wallet Settings** → **General**.
2. Wähle **Send** und bereite Ziel und Betrag wie üblich vor. Prüfe ausgewählte Inputs, Wechselgeld und Gebühr.
3. Wähle in der Vorschau **Save PSBT file** und speichere den Transaktionsvorschlag. Die Alternative **Send Now** verwendet sofortige Signierung statt Dateispeicherung für den späteren Ablauf.
4. Übertrage die Datei über einen unterstützten Weg, etwa Wechselmedien, an das Signiergerät. Folge dessen Anleitung und prüfe Ziel, Betrag, Gebühr und Wechselgeld auf seinem vertrauenswürdigen Bildschirm.
5. Speichere das signierte Ergebnis, ohne es mit dem ursprünglichen unsignierten Vorschlag zu verwechseln.

Genehmige eine Transaktion nicht allein deshalb, weil Ginger sie vorbereitet hat. Das Gerät muss die gewünschte Zahlung autorisieren. Halte Wiederherstellungswörter sowohl aus der PSBT-Datei als auch vom Computer fern.

<span id="import-and-broadcast" aria-hidden="true"></span>

## Importieren und veröffentlichen

Kehre zur Hardware-Wallet in Ginger zurück und wähle **Broadcast**, das im PSBT-Ablauf angezeigt wird. Der Dateidialog **Import Transaction** akzeptiert unterstützte Transaktionsdateien einschließlich PSBT- und Transaktionsdateien. Wähle das signierte Ergebnis und prüfe den Veröffentlichungsbildschirm vor der Übermittlung ans Netzwerk.

Eine unsignierte oder unvollständig signierte PSBT lässt sich nicht als gültige Zahlung veröffentlichen. Auch eine erfolgreiche Signierung garantiert keine Akzeptanz, wenn Inputs bereits ausgegeben wurden oder die Gebühr nicht mehr zu den Netzwerkbedingungen passt. Halte die ursprüngliche Wallet verfügbar, synchronisiere und prüfe den Verlauf, bevor du eine weitere Zahlung erstellst.

Nach Veröffentlichung muss das Signiergerät für die Bestätigung nicht mehr verbunden bleiben. Prüfe den endgültigen Verlaufseintrag und die Bestätigungen in Ginger. Eine signierte Datei zu löschen storniert keine Transaktion, die jemand anderes bereits veröffentlichen könnte.

<span id="handle-files-carefully" aria-hidden="true"></span>

## Dateien sorgfältig behandeln

Verwende unterscheidbare Dateinamen für Vorschläge und signierte Ergebnisse. Sende PSBTs nicht per E-Mail und lade sie zur Prüfung eigener Transaktionen nicht in Online-Decoder hoch. Schütze auch sensible Kontoexporte: Ein erweiterter öffentlicher Schlüssel kann viele Adressen offenlegen, obwohl er keine Ausgabe direkt signieren kann.

Dieser Ablauf dokumentiert die veröffentlichte Hardware-Wallet-Oberfläche. Er belegt keinen allgemeinen Multisig-Koordinator, keine Entwickler-Signier-API und keine Kompatibilität mit jedem PSBT-Format anderer Anwendungen.
