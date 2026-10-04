---
doc_id: "settings-network.full-node-fees"
title: "Eigenen Bitcoin-Node nutzen und Gebührenschätzungen wählen"
description: "Konfiguriere Blockdownloads von deinem Node, prüfe das optionale mitgelieferte Bitcoin Core und wähle einen Gebührenratenanbieter."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Prüfe zuerst normalen Verbindungs- und Synchronisierungsstatus.

Ein eigener Bitcoin-Node kann die Abhängigkeit von öffentlichen Peers für Blockdaten reduzieren. Er bringt zusätzliche Verantwortung für Speicher, Bandbreite, Verfügbarkeit und Wartung. Ginger funktioniert ohne optionalen Full Node.

<span id="start-the-bundled-node" data-ginger-heading="den-mitgelieferten-node-starten" aria-hidden="true"></span>

## Den mitgelieferten Node starten

Unter **Settings** → **Bitcoin** heißt der Schalter **(EXPERIMENTAL) Run Bitcoin Core on startup**. Version 2.0.26 enthält Bitcoin Core 31. Verwende Anleitungen, die zu diesem Node und deiner Version passen.

1. Wähle einen **Bitcoin Core Data Folder** mit ausreichendem Platz und zuverlässigem Speicher. Verwende keinen fremden Ordner und lass nie zwei Node-Prozesse gleichzeitig dasselbe Verzeichnis verwalten.
2. Aktiviere **(EXPERIMENTAL) Run Bitcoin Core on startup** und starte Ginger nach Aufforderung neu.
3. Lass die erste Node-Synchronisierung laufen. Beobachte Verbindung und Downloadstatus; sie kann lange dauern.
4. Wähle **Stop Bitcoin Core on shutdown** je nachdem, ob der Node nach Ginger weiterlaufen soll.

Aktiviere diesen Schalter nicht allein zur Reparatur fehlenden Guthabens. Ein Node stellt weder unbekannte Passphrasen noch Bezeichnungen wieder her. Ein vorhandenes Node-Verzeichnis kann wertvolle Konfiguration und eigene Wallets enthalten; sichere es vor einem Wechsel der verwaltenden Anwendung.

Der Full Node kann Blöcke lokal prüfen, beseitigt aber keine Abhängigkeiten von Koordinator, 2FA, Kauf-/Verkaufs- oder anderen Diensten. Er verbirgt auch keine freiwillig einer Börse offengelegte Transaktion.

<span id="connect-to-an-existing-node" data-ginger-heading="mit-einem-vorhandenen-node-verbinden" aria-hidden="true"></span>

## Mit einem vorhandenen Node verbinden

Bei ausgeschaltetem Startschalter erlaubt **Bitcoin P2P Endpoint** einen eigenen Node für Blockdownloads. Gib erreichbaren Host und P2P-Port ein. Für einen Mainnet-Bitcoin-Core-Node auf demselben Computer ist `127.0.0.1:8333` üblich, falls er dort tatsächlich lauscht. Das Feld verlangt einen Bitcoin-Peer-Endpunkt, keine Explorer-URL oder RPC-Zugangsdaten.

Prüfe, ob der Node die Wallet-Verbindung zulässt und benötigte Blockdaten besitzt. Ein beschnittener Node kann ältere Blöcke für eine wiederhergestellte Wallet nicht mehr haben. Prüfe bei stockender historischer Suche die Verfügbarkeit, statt alle Node-Konfigurationen für austauschbar zu halten.

Eine entfernte Node-Verbindung hat eigene Netzwerkexposition. Nutze einen Node und Transport, die du verstehst; ein gesetzter Endpunkt beweist keine private Verbindung. Öffne administrativen RPC-Zugriff nicht zum öffentlichen Internet, um eine Wallet-Verbindung herzustellen.

<span id="choose-fee-estimates-separately" data-ginger-heading="gebührenschätzungen-separat-wählen" aria-hidden="true"></span>

## Gebührenschätzungen separat wählen

**Fee Rate Provider** bietet **Mempool Space**, **Blockstream Info** und **Full Node**. Öffentliche Anbieter schätzen anhand ihrer Netzwerksicht. Die Full-Node-Option benötigt Gingers funktionierende Node-/RPC-Integration; ein P2P-Endpunkt allein belegt keine konfigurierte RPC-Gebührenschätzung.

Ist bei **Full Node** der Node nicht verfügbar, meldet v2.0.26 fehlende Gebührenschätzung und erlaubt weiterhin manuelle Eingabe im Zahlungsablauf. Warte auf den Node, wähle einen funktionierenden Anbieter oder gib eine begründet verlässliche Rate ein. Nutze keine riesige Gebühr als allgemeine Verbindungsreparatur.

Gebührenschätzungen sind Vorhersagen, keine Blockplatzreservierungen. Unterschiede zwischen Anbietern können verschiedene Mempool-Beobachtungen spiegeln. Prüfe neben der Rate auch die Gesamttransaktionsgebühr.

<span id="dust-threshold" data-ginger-heading="dust-schwelle" aria-hidden="true"></span>

## Dust-Schwelle

**Dust Threshold**, ebenfalls unter **Settings** → **Bitcoin**, steuert den Umgang mit sehr kleinen empfangenen Beträgen. Sie unterscheidet sich von Netzwerk-Weiterleitungsregeln, CoinJoin-Stoppschwelle und Koordinator-Mindestinput. Eine Erhöhung kann die Verarbeitung kleiner Zahlungen beeinflussen; sie löscht weder Blockchain-Outputs noch verhindert sie Zusendungen. Bewahre bei unerwartet fehlenden kleinen Zahlungen deine vorherige Einstellung.
