---
doc_id: "help.faq"
title: "Ginger-Wallet-FAQ: Hier beginnen"
description: "Kurze Antworten zu fehlendem Guthaben, Backups, Wiederherstellung, CoinJoin-Warten und Gebühren, ausstehenden Zahlungen, Hardware und sicherem Support."
lang: "de"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Schwierigkeitsgrad: Einstieg. Kurze Antworten und erste Prüfungen stehen vor optionaler weiterführender Lektüre.

Beginne mit der Frage, die deiner Situation am nächsten kommt. Diese Antworten behandeln normale Nutzung und erste sichere Prüfungen; die separaten [erweiterten FAQ](/de/help/advanced-faq/) ergänzen optional eigene Einstellungen und Sonderfälle.

- [Hier beginnen](#start-here)
- [Wiederherstellung und fehlendes Guthaben](#recovery-and-missing-funds)
- [Verbindung und Updates](#connection-and-updates)
- [CoinJoin-Grundlagen](#coinjoin-basics)
- [Zahlungen und Hardware](#payments-and-hardware)
- [Sicher Hilfe erhalten](#getting-help-safely)

<span id="start-here" data-ginger-heading="hier-beginnen" aria-hidden="true"></span>

## Hier beginnen

<span id="what-is-ginger-and-does-it-hold-my-bitcoin" data-ginger-heading="was-ist-ginger-und-verwahrt-es-meine-bitcoin" aria-hidden="true"></span>

### Was ist Ginger, und verwahrt es meine Bitcoin?

Ginger ist eine Desktop-Anwendung für On-Chain-Bitcoin-Empfang und -Versand mit optionalen CoinJoin-Privatsphärewerkzeugen. Du kontrollierst die ausgabenautorisierenden Schlüssel; der Koordinator erhält nicht allein durch deine Teilnahme Verwahrung. Schütze Computer und Wiederherstellungsbackup, denn Schlüsselkontrolle beseitigt weder Diebstahl, Fehler noch Zugriffsverlust.

<span id="is-there-an-official-mobile-or-web-wallet" data-ginger-heading="gibt-es-eine-offizielle-mobile-oder-web-wallet" aria-hidden="true"></span>

### Gibt es eine offizielle mobile oder Web-Wallet?

v2.0.26 liefert Desktop-Software für unterstützte Windows-, macOS- und Linux-Computer. Die Version hat keine Android-, iOS- oder Browser-Wallet, Lightning-Zahlungen oder andere Kryptowährungen. Beginne auf der [offiziellen Ginger-Website](https://gingerwallet.io/) und deren Veröffentlichungslinks; gib Wörter nicht bloß wegen des Ginger-Namens in Apps oder Websites ein.

<span id="do-i-need-an-account-my-own-node-or-a-hardware-wallet" data-ginger-heading="brauche-ich-ein-konto-eigenen-node-oder-hardware" aria-hidden="true"></span>

### Brauche ich ein Konto, eigenen Node oder Hardware?

Nein. Die normale Erstellung einer Software-Wallet nutzt lokale Wiederherstellungsinformationen ohne Kundenkonto, eigenen Bitcoin-Node oder Hardware. Optionale 2FA nutzt einen Dienst; Kauf-/Verkaufsanbieter können Konten oder Identitätsinformationen verlangen. Diese Funktionen haben daher zusätzliche Anforderungen.

<span id="do-i-have-to-use-coinjoin-before-receiving-or-sending" data-ginger-heading="muss-ich-vor-empfang-oder-versand-coinjoin-verwenden" aria-hidden="true"></span>

### Muss ich vor Empfang oder Versand CoinJoin verwenden?

Nein. Empfangen, normales Senden und CoinJoin sind getrennte Aktionen. Prüfe **Automatically start coinjoin** unter **Coinjoin Settings**, wenn du beim Lernen keine unbeaufsichtigte Teilnahme möchtest. Pausiere bereits aktive Runden und lass kritische Arbeiten abschließen.

<span id="can-i-buy-bitcoin-in-ginger-or-receive-an-exchange-withdrawal" data-ginger-heading="kann-ich-bitcoin-in-ginger-kaufen-oder-börsenauszahlungen-empfangen" aria-hidden="true"></span>

### Kann ich Bitcoin in Ginger kaufen oder Börsenauszahlungen empfangen?

Nutze eine neue **Receive**-Adresse für On-Chain-Bitcoin-Auszahlungen und prüfe Adresse und Netzwerk vor Autorisierung bei der Börse. Ginger bietet auch **Buy** und **Sell**, soweit verfügbar. Prüfe aktuelle Anbieterbedingungen, Angebot und Bestellstatus; eine Kaufbestätigung ist kein bestätigter Bitcoin-Empfang.

<span id="recovery-and-missing-funds" data-ginger-heading="wiederherstellung-und-fehlendes-guthaben" aria-hidden="true"></span>

## Wiederherstellung und fehlendes Guthaben

<span id="what-do-i-need-to-back-up" data-ginger-heading="was-muss-ich-sichern" aria-hidden="true"></span>

### Was muss ich sichern?

Bewahre Wörter in ursprünglicher Reihenfolge und die exakte ursprüngliche Passphrase, falls verwendet. Halte fest, dass sie leer war, wenn du ohne eine erstellt hast. Damit stellst du Schlüsselzugriff her; Bezeichnungen und manche lokale Aufzeichnungen benötigen ein separates Dateibackup.

<span id="is-my-passphrase-just-a-password-i-can-reset" data-ginger-heading="ist-meine-passphrase-nur-ein-zurücksetzbares-passwort" aria-hidden="true"></span>

### Ist meine Passphrase nur ein zurücksetzbares Passwort?

Nein. Die ursprüngliche Passphrase einer Software-Wallet bestimmt wiederhergestellte Schlüssel mit und schützt gespeicherte Geheimnisse. Andere Wörter oder Passphrasen können zu einer anderen gültigen Wallet führen. Wallet-Name, Hardware-PIN und Authenticator-Code sind kein Ersatz.

<span id="i-have-the-words-but-forgot-the-passphrase-can-ginger-reset-it" data-ginger-heading="ich-habe-wörter-aber-vergaß-die-passphrase-kann-ginger-sie-zurücksetzen" aria-hidden="true"></span>

### Ich habe Wörter, aber vergaß die Passphrase. Kann Ginger sie zurücksetzen?

Ginger kann die ursprüngliche Passphrase nicht mit denselben Schlüsseln zurücksetzen. Prüfe private Aufzeichnungen und erhalte Installationen mit verbliebenem Ausgabezugriff. Kannst du noch ausgeben, aber kein vollständiges Backup nachweisen, erstelle und prüfe ein neues Wallet-Backup und übertrage vorsichtig. Sende Wörter niemals an angebliche Wiederherstellungshelfer.

<span id="can-ginger-show-my-recovery-words-again" data-ginger-heading="kann-ginger-meine-wörter-erneut-anzeigen" aria-hidden="true"></span>

### Kann Ginger meine Wörter erneut anzeigen?

Der Erstellungsablauf warnt, dass sie danach nicht wieder erscheinen. **Wallet Settings** → **Tools** → **Verify Recovery Words** prüft eingegebene Wörter, verrät kein vergessenes Backup. Bei erhaltenem Zugriff und verlorenem Backup erstelle und prüfe ein neues Wallet-Backup vor vorsichtiger Guthabenübertragung.

<span id="why-is-my-recovered-wallet-empty-or-missing-transactions" data-ginger-heading="warum-ist-meine-wiederhergestellte-wallet-leer-oder-unvollständig" aria-hidden="true"></span>

### Warum ist meine wiederhergestellte Wallet leer oder unvollständig?

Prüfe ausgewählte Wallet, ursprüngliche Wörter, exakte Passphrase und abgeschlossene Synchronisierung und Wiederherstellung. Tippfehler können ohne Falschpasswort-Meldung eine andere gültige Wallet öffnen. Behalte alte Dateien und vergleiche vor Einstellungsänderungen bekannte Transaktionen; [Wiederherstellungsdiagnose](/de/help/troubleshooting/#balance-recovery-and-receiving) nennt erste Schritte.

<span id="the-sender-says-paid-why-have-i-received-nothing" data-ginger-heading="der-sender-sagt-bezahlt-warum-empfange-ich-nichts" aria-hidden="true"></span>

### Der Sender sagt bezahlt. Warum empfange ich nichts?

Bitte um Bitcoin-Transaktions-ID und prüfe gewünschte Adresse und Netzwerk. Ein Dienst kann eine Bestellung vor Bitcoin-Veröffentlichung als bezahlt markieren; Ginger benötigt außerdem Synchronisierung zur Anzeige. Prüfe Transaktion und lokalen Fortschritt vor erneuter Zahlungsforderung; siehe [Empfangsdiagnose](/de/help/troubleshooting/#balance-recovery-and-receiving).

<span id="will-changing-the-network-make-missing-bitcoin-appear" data-ginger-heading="lässt-netzwerkwechsel-fehlende-bitcoin-erscheinen" aria-hidden="true"></span>

### Lässt Netzwerkwechsel fehlende Bitcoin erscheinen?

Verwende Main für echte On-Chain-Bitcoin. Andere Netzwerke haben andere Coins; ihre Auswahl bewegt oder rekonstruiert kein Mainnet-Guthaben. Prüfe gewünschte Wallet und Synchronisierung, statt zur Verbesserung einer Verbindungsanzeige das Netzwerk zu wechseln.

<span id="why-has-a-receiving-address-disappeared-does-it-expire" data-ginger-heading="warum-verschwand-eine-empfangsadresse-läuft-sie-ab" aria-hidden="true"></span>

### Warum verschwand eine Empfangsadresse? Läuft sie ab?

Eine Adresse kann nach Zahlung oder Ausblenden die Warteliste verlassen, ohne ihre Schlüssel zu entwerten. Alte Adressen empfangen weiterhin Bitcoin; sichere sie deshalb weiter. Nutze neue Adressen für jede neue Zahlung gegen direkte gemeinsame Zuordnung an einem öffentlichen Ziel.

<span id="why-are-receive-or-send-missing" data-ginger-heading="warum-fehlen-receive-oder-send" aria-hidden="true"></span>

### Warum fehlen Receive oder Send?

Laufende Wiederherstellung kann normale Aktionen bis zum Suchabschluss verbergen. Watch-only benötigt zum Ausgeben sein Signiergerät oder einen anderen unterstützten Weg. Prüfe Typ und Fortschritt vor Neuinstallation oder neuen Ersatzwörtern.

<span id="i-lost-my-authenticator-or-my-2fa-code-is-rejected-what-now" data-ginger-heading="authenticator-verloren-oder-2fa-code-abgelehnt-was-nun" aria-hidden="true"></span>

### Authenticator verloren oder 2FA-Code abgelehnt: Was nun?

Prüfe richtigen Eintrag, Telefonzeit und Gingers Tor-/Dienstverbindung. Erhalte Wallet- und 2FA-Dateien; Neuinstallation rekonstruiert kein verlorenes Authenticator-Geheimnis. Wörter plus exakte Originalpassphrase bieten unabhängige Schlüsselwiederherstellung. Nutze [2FA-Diagnose](/de/help/troubleshooting/#2fa-and-hardware) vor Dateiänderungen.

<span id="connection-and-updates" data-ginger-heading="verbindung-und-updates" aria-hidden="true"></span>

## Verbindung und Updates

<span id="do-i-need-tor-browser-or-a-vpn-to-make-ginger-work" data-ginger-heading="brauche-ich-tor-browser-oder-ein-vpn" aria-hidden="true"></span>

### Brauche ich Tor Browser oder ein VPN?

Ginger enthält Tor für normale Wallet-Verbindungen; zum Betrieb musst du keinen Tor Browser installieren. Ein separater Browser oder VPN repariert Synchronisierung nicht automatisch und verbirgt keine übermittelten Anbieterinformationen. Lass normalen Tor-Schutz beim Befolgen der [Verbindungsprüfungen](/de/help/troubleshooting/#connection-or-synchronization) aktiv.

<span id="why-is-ginger-still-connecting-or-synchronizing" data-ginger-heading="warum-verbindet-oder-synchronisiert-ginger-weiterhin" aria-hidden="true"></span>

### Warum verbindet oder synchronisiert Ginger weiterhin?

Ein Erstscan oder eine wiederhergestellte Wallet benötigt möglicherweise Zeit, während Stillstand auf Verbindungs- oder lokale Probleme hinweisen kann. Prüfe Internet, Computeruhr, freien Speicher und konfigurierten Node; notiere bei Stillstand den exakten Status. Folge [Verbindungsdiagnose](/de/help/troubleshooting/#connection-or-synchronization) statt wiederholter Neustarts oder Datenlöschung.

<span id="why-did-reinstalling-not-reset-a-broken-setting" data-ginger-heading="warum-setzte-neuinstallation-eine-defekte-einstellung-nicht-zurück" aria-hidden="true"></span>

### Warum setzte Neuinstallation eine defekte Einstellung nicht zurück?

Anwendungsdateien und Wallet-Daten sind getrennt; normale Neuinstallation kann Konfiguration und Wallets erhalten. Sichere Backups und diagnostiziere den tatsächlichen Fehler vor Datenänderung. Lösche den gesamten Datenordner nicht als allgemeine Reparatur fehlenden Guthabens oder Wartestatus.

<span id="coinjoin-basics" data-ginger-heading="coinjoin-grundlagen" aria-hidden="true"></span>

## CoinJoin-Grundlagen

<span id="why-is-coinjoin-waiting-instead-of-starting" data-ginger-heading="warum-wartet-coinjoin-statt-zu-starten" aria-hidden="true"></span>

### Warum wartet CoinJoin statt zu starten?

Lies den Status: Bestätigungen, akzeptable Gebühren, Teilnehmer, Verbindung oder geeignete Coins können nötig sein. Warten allein bedeutet keinen Verlust. Die [CoinJoin-Diagnosetabelle](/de/help/troubleshooting/#coinjoin-does-not-start) erklärt veröffentlichte Meldungen und jeweilige Erstaktion.

<span id="what-is-the-minimum-amount-and-why-are-some-coins-left-behind" data-ginger-heading="was-ist-das-minimum-und-warum-bleiben-coins-zurück" aria-hidden="true"></span>

### Was ist das Minimum, und warum bleiben Coins zurück?

Kein Gesamtkontostand garantiert Teilnahme. Jeder verfügbare Coin muss Rundenbedingungen sowie Wallet-Eignungs- und Kostenprüfungen erfüllen. Kleine, unbestätigte oder ausgeschlossene Coins bleiben möglicherweise außerhalb. Kombiniere oder ergänze Guthaben nicht allein für veraltete Mindestwerte.

<span id="how-long-will-it-take-and-how-many-rounds-do-i-need" data-ginger-heading="wie-lange-dauert-es-und-wie-viele-runden-brauche-ich" aria-hidden="true"></span>

### Wie lange dauert es, und wie viele Runden brauche ich?

Keine Dauer oder universelle Rundenzahl ist garantiert. Bestätigungen, Gebühren, Teilnehmer, Coins und gewähltes Ziel zählen. Prüfe tatsächlichen Status und abgeschlossene Kosten, statt eine Zeitpräferenz als versprochenen Termin zu behandeln.

<span id="why-did-my-balance-decrease-if-coinjoin-was-described-as-free" data-ginger-heading="warum-sank-mein-kontostand-bei-angeblich-kostenlosem-coinjoin" aria-hidden="true"></span>

### Warum sank mein Kontostand bei angeblich kostenlosem CoinJoin?

Koordinatorgebührenbefreiung beseitigt keine Mining-Gebühren; jede abgeschlossene Wiederholung kann Geld kosten. Prüfe außerdem andere Output-Wallets und Synchronisierung beider Wallets. Pausiere und gleiche abgeschlossene Transaktionen bei ungeklärten Änderungen ab; nicht jede unerwartete Abnahme ist automatisch normale Gebühr.

<span id="what-coordinator-fee-does-ginger-currently-advertise" data-ginger-heading="welche-koordinatorgebühr-bewirbt-ginger-derzeit" aria-hidden="true"></span>

### Welche Koordinatorgebühr bewirbt Ginger derzeit?

Aktuell zahlt jeder Input bis einschließlich 0.03 BTC (3 000 000 Satoshis) keine Koordinatorgebühr, auch ein Input mit einem Wert von genau 0.03 BTC. Darüber sind es 0.3 % des gesamten Inputs, sofern keine weitere Ausnahme wie geeigneter Remix gilt. Die Schwelle gilt separat je Input, nicht für den Kontostand. Mining-Gebühren bleiben. Prüfe [aktuelle Erklärung](https://gingerwallet.io/) und angebotene Runde erneut vor Teilnahme.

<span id="can-i-stop-coinjoin-or-turn-off-the-computer" data-ginger-heading="kann-ich-stoppen-oder-den-computer-ausschalten" aria-hidden="true"></span>

### Kann ich stoppen oder den Computer ausschalten?

Pausiere gegen weitere Teilnahme und lass kritische Phasen abschließen. Ruhezustand, Verbindungsverlust oder erzwungenes Beenden können aktive Runden unterbrechen; nutze normales Beenden und lass die Abschaltprozedur abschließen. Bereits veröffentlichte Transaktionen laufen nach dem Beenden der Anwendung im Bitcoin-Netzwerk weiter.

<span id="why-is-there-a-transaction-when-i-never-pressed-send" data-ginger-heading="warum-gibt-es-eine-transaktion-ohne-send" aria-hidden="true"></span>

### Warum gibt es eine Transaktion ohne Send?

Automatischer CoinJoin kann nach Aktivierung gemeinsame Transaktionen ohne einzelne normale **Send**-Zahlungen erstellen. Prüfe Transaktion, eigene Outputs, Gebühren und Ziel, statt jede ungeklärte Ausgabe als CoinJoin zu deuten. Bleibt sie unklar oder sind Schlüssel möglicherweise offengelegt, sichere Aufzeichnungen und schütze übriges Guthaben.

<span id="can-i-spend-at-99-and-does-100-mean-i-am-anonymous" data-ginger-heading="kann-ich-bei-99--ausgeben-und-bedeutet-100--anonymität" aria-hidden="true"></span>

### Kann ich bei 99 % ausgeben, und bedeutet 100 % Anonymität?

Normale Zahlung geht bei ausgebbarem Guthaben und verfügbarer Sendefunktion; Privatsphäreprozente sind keine Bitcoin-Voraussetzung. Sie sind Gingers lokale Schätzung nach Ziel, keine Garantie über fremdes Wissen. Eine Zahlung, Adresswiederverwendung oder eine identifizierte Börse können weiterhin Verknüpfungen schaffen.

<span id="why-is-the-play-control-missing-when-all-funds-are-private" data-ginger-heading="warum-fehlt-die-starttaste-wenn-alles-privat-ist" aria-hidden="true"></span>

### Warum fehlt die Starttaste, wenn alles privat ist?

Der normale manuelle Player kann die Starttaste verbergen, wenn das gesamte Guthaben das Privatsphäreziel der Wallet erreicht. Der normale Start lehnt ebenfalls eine verfügbare Auswahl aus ausschließlich privaten Coins ab; eine andere Ziel-Wallet erzwingt keine weitere Runde. Willst du nur diese Coins bewegen, prüfe eine normale Zahlung.

<span id="payments-and-hardware" data-ginger-heading="zahlungen-und-hardware" aria-hidden="true"></span>

## Zahlungen und Hardware

<span id="why-is-a-payment-still-pending-after-the-estimated-time" data-ginger-heading="warum-ist-zahlung-nach-geschätzter-zeit-noch-ausstehend" aria-hidden="true"></span>

### Warum ist Zahlung nach geschätzter Zeit noch ausstehend?

Die Schätzung ist keine Frist: Konkurrenztransaktionen und unregelmäßige Blockankunft beeinflussen Bestätigung. Prüfe Verlauf und bei angebotenem **Speed Up Transaction** dessen Zusatzgebühr. Verbindungsfehler oder Verzögerung rechtfertigt keine zweite Empfängerzahlung.

<span id="can-i-cancel-a-payment-or-recover-one-sent-to-the-wrong-address" data-ginger-heading="kann-ich-stornieren-oder-geld-an-falsche-adresse-zurückholen" aria-hidden="true"></span>

### Kann ich stornieren oder Geld an falsche Adresse zurückholen?

Bestätigte Zahlungen kann Ginger nicht rückgängig machen. Vorher kann **Cancel Transaction** eine geeignete Zahlung ersetzen versuchen, aber den Bestätigungswettlauf verlieren. Versprich keine Stornierung des Originals, bevor das tatsächliche Ergebnis feststeht.

<span id="why-are-there-insufficient-funds-when-my-balance-looks-large-enough" data-ginger-heading="warum-unzureichendes-guthaben-trotz-großer-anzeige" aria-hidden="true"></span>

### Warum unzureichendes Guthaben trotz großer Anzeige?

Nicht der ganze Kontostand ist immer verfügbar: Unbestätigtes, CoinJoin-Bindung oder Gebührenbedarf können entgegenstehen. Prüfe Wallet, Betrag und Endvorschau. „Alles senden“ kann den ankommenden Betrag um Gebühren reduzieren; vergleiche ihn daher mit festen Rechnungen.

<span id="why-did-my-payment-create-another-address-or-leave-change" data-ginger-heading="warum-neue-adresse-oder-wechselgeld-bei-zahlung" aria-hidden="true"></span>

### Warum neue Adresse oder Wechselgeld bei Zahlung?

Eine Zahlung kann ein größeres Bitcoin-Stück ausgeben und Rest als eigenes Wechselgeld zurückgeben. Eine neue Wechselgeldadresse ist normal und bedeutet keine Fremdzahlung. Du musst nichts manuell zurücksenden; prüfe bei ungeklärten Beträgen die gesamte Transaktion.

<span id="can-i-use-a-hardware-wallet-including-after-coinjoin" data-ginger-heading="kann-ich-hardware-nutzen-auch-nach-coinjoin" aria-hidden="true"></span>

### Kann ich Hardware nutzen, auch nach CoinJoin?

Ginger unterstützt dokumentierten Empfang und Signierung kompatibler Hardware. Halte Hardware-Wörter im Gerätewiederherstellungsweg, nicht Computer. Hardware empfängt geeignete CoinJoin-Outputs, ist aber keine normale Ginger-CoinJoin-Signierquelle; dieses optionale Routing ist eine [erweiterte Frage](/de/help/advanced-faq/#can-coinjoin-send-directly-to-my-hardware-wallet).

<span id="will-an-exchange-accept-my-bitcoin-after-coinjoin" data-ginger-heading="wird-eine-börse-meine-bitcoin-nach-coinjoin-akzeptieren" aria-hidden="true"></span>

### Wird eine Börse meine Bitcoin nach CoinJoin akzeptieren?

Ginger bereitet normale Bitcoin-Zahlungen vor, garantiert aber keine Anbieterakzeptanz oder Kontorichtlinien. Prüfe aktuelle Anforderungen der gewünschten Börse vor Senden oder Verkauf. Hoher Score ist kein Akzeptanzzertifikat; keine zusätzliche Wallet-Aktion verspricht dieses Ergebnis.

<span id="getting-help-safely" data-ginger-heading="sicher-hilfe-erhalten" aria-hidden="true"></span>

## Sicher Hilfe erhalten

<span id="what-can-i-share-with-support-and-where-do-i-report-a-bug" data-ginger-heading="was-kann-ich-support-geben-und-wo-melde-ich-fehler" aria-hidden="true"></span>

### Was kann ich Support geben, und wo melde ich Fehler?

Nutze [offizielle Repository-Links](https://github.com/GingerPrivacy/GingerWallet/issues) und nenne Version, System, exakten Fehler und nicht geheime Schritte. Prüfe jeden Protokollauszug vor Teilen; sende nie Wörter, Passphrasen, Authenticator-Codes oder vollständige Datenordner. Support braucht weder Webvalidierung noch Aktivierungszahlung. Siehe [nützliche Fehlermeldung](/de/help/troubleshooting/#report-a-useful-issue).

<span id="about-this-manual" data-ginger-heading="über-dieses-handbuch" aria-hidden="true"></span>

## Über dieses Handbuch

Dieses Handbuch beschreibt Ginger v2.0.26 und verwendet englische Oberflächenbezeichnungen. Dokumentation und Übersetzungen können Fehler enthalten; Ginger garantiert ihre Richtigkeit nicht. Prüfe kritische Details in der Anwendung vor Fortsetzung. [Melde Fehler im Dokumentationsrepository](https://github.com/GingerPrivacy/GingerDoc/issues) ohne Wallet-Geheimnisse.
