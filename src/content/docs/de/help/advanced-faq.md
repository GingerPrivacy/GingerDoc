---
doc_id: "help.advanced-faq"
title: "Erweiterte Ginger-Wallet-FAQ"
description: "Finde Antworten zu Wiederherstellungssuche, Wallet-Metadaten, xpubs, Coin-Kontrolle, Privatsphäre-Fortschritt, gesamten CoinJoin-Kosten, Output-Wallets und Informationsweitergabe."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Beginne mit den grundlegenden FAQ, wenn du eine Wallet erstmals einrichtest oder nutzt.

Diese Fragen behandeln eigene Einstellungen, tiefergehende Privatsphäreentscheidungen und besondere Wiederherstellungsfälle. Kehre für normale Einstiegsfragen zu den [grundlegenden FAQ](/de/help/) zurück.

- [Wiederherstellung und lokale Daten](#recovery-and-local-data)
- [Coin-Auswahl und Ausgaben](#coin-selection-and-spending)
- [CoinJoin-Kosten und Fortschritt](#coinjoin-costs-and-progress)
- [Hardware und Privatsphäregrenzen](#hardware-and-privacy-boundaries)

<span id="recovery-and-local-data" data-ginger-heading="wiederherstellung-und-lokale-daten" aria-hidden="true"></span>

## Wiederherstellung und lokale Daten

<span id="why-can-the-same-words-produce-a-different-wallet" data-ginger-heading="warum-können-dieselben-wörter-eine-andere-wallet-ergeben" aria-hidden="true"></span>

### Warum können dieselben Wörter eine andere Wallet ergeben?

Die ursprüngliche Passphrase wirkt bei der Schlüsselableitung mit; eine andere Wallet-Anwendung kann außerdem ein anderes Konto oder einen anderen Adresstyp nutzen. Gültige Wörter allein belegen nicht, dass Anwendungen dasselbe Konto zeigen. Prüfe zuerst ursprüngliche Passphrase und Suchfortschritt; untersuche Kontokompatibilität erst nach normalen Wiederherstellungsprüfungen.

<span id="when-should-i-increase-the-recovery-gap-limit" data-ginger-heading="wann-sollte-ich-das-gap-limit-erhöhen" aria-hidden="true"></span>

### Wann sollte ich das Gap Limit erhöhen?

Erwäge es bei Belegen vieler ungenutzter Adressen vor einer bezahlten Adresse, etwa aus einer anderen Anwendung. **Advanced Recovery Options** → **Minimum Gap Limit:** erweitert die Suche und kann Aufwand und Dauer erhöhen; v2.0.26 beginnt den Wiederherstellungsbildschirm mit 114. Es repariert weder falsche Wörter noch falsche Passphrasen oder inkompatible Konten.

<span id="why-did-labels-or-privacy-information-change-after-recovery" data-ginger-heading="warum-änderten-sich-bezeichnungen-oder-privatsphäredaten-nach-wiederherstellung" aria-hidden="true"></span>

### Warum änderten sich Bezeichnungen oder Privatsphäredaten nach Wiederherstellung?

Wörter stellen Schlüssel wieder her, nicht jede private Notiz oder lokale Transaktionsanalyse. Wallet-JSON und zugehörige ATTR-Daten haben verschiedene Rollen; erhalte Originaldateien und arbeite während Untersuchungen mit Kopien. Fehlende Bezeichnungen oder geänderte lokale Scores beweisen allein keine Änderung einer Bitcoin-Transaktion oder ihres öffentlichen Verlaufs.

<span id="can-i-use-the-same-recovery-words-in-two-wallet-applications" data-ginger-heading="kann-ich-dieselben-wörter-in-zwei-anwendungen-nutzen" aria-hidden="true"></span>

### Kann ich dieselben Wörter in zwei Anwendungen nutzen?

Kompatible Anwendungen können dieselben Schlüssel kontrollieren; das erzeugt keine neue Wallet und widerruft keine zuvor geteilten Informationen. Die zweite App kann Adressen oder einen erweiterten öffentlichen Schlüssel an eigene Dienste senden; gleichzeitige Ausgabe verwirrt möglicherweise die Coin-Verfügbarkeit. Gib Hardware-Wörter nicht bloß zum Verbinden eines Geräts am Desktop ein.

<span id="what-does-an-exposed-address-or-xpub-allow-someone-to-do" data-ginger-heading="was-ermöglicht-eine-offengelegte-adresse-oder-ein-xpub" aria-hidden="true"></span>

### Was ermöglicht eine offengelegte Adresse oder ein xpub?

Eine Adresse verweist auf einen bestimmten Teil des öffentlichen Verlaufs. Ein erweiterter öffentlicher Schlüssel kann viele auch künftige Adressen innerhalb seines Ableitungsbereichs zeigen, ist aber normalerweise selbst keine Ausgabeautorität. Neue Adressen desselben offengelegten Zweigs widerrufen Beobachtung nicht; offengelegte Signiergeheimnisse benötigen eine andere Reaktion mit neuen Schlüsseln.

<span id="does-the-2fa-file-recover-the-wallet-without-the-service" data-ginger-heading="stellt-die-2fa-datei-die-wallet-ohne-dienst-wieder-her" aria-hidden="true"></span>

### Stellt die 2FA-Datei die Wallet ohne Dienst wieder her?

Betrachte `2fa_info.gws` nicht als unabhängigen Offline-Wiederherstellungsschlüssel. Normaler 2FA-Start verwendet Installationskennung und Authenticator-Prüfung bei einem Dienst für das zusätzliche Dateiverschlüsselungsgeheimnis. Halte Wörter und ursprüngliche Passphrase unabhängig verfügbar; 2FA-Aktivierung widerruft keine kopierten Schlüssel.

<span id="how-do-i-delete-a-local-wallet-without-confusing-deletion-with-revocation" data-ginger-heading="wie-lösche-ich-lokal-ohne-löschung-und-widerruf-zu-verwechseln" aria-hidden="true"></span>

### Wie lösche ich lokal, ohne Löschung und Widerruf zu verwechseln?

Sichere zuerst, nutze dann **Wallet Settings** → **Tools** → **Delete Wallet** und lies die Bestätigung. Entfernen lokaler Daten löscht keine Bitcoin-Transaktionen und entwertet keine Wörterkopien. Bei offengelegten Signierschlüsseln hindert bloße Löschung andere nicht am Ausgeben.

<span id="coin-selection-and-spending" data-ginger-heading="coin-auswahl-und-ausgaben" aria-hidden="true"></span>

## Coin-Auswahl und Ausgaben

<span id="what-is-the-difference-between-a-coin-an-address-and-a-wallet" data-ginger-heading="was-unterscheidet-coin-adresse-und-wallet" aria-hidden="true"></span>

### Was unterscheidet Coin, Adresse und Wallet?

Ein Coin oder UTXO ist ein unverbrauchter Output einer früheren Transaktion. Eine Adresse kann mehrere Coins empfangen haben; eine Wallet verwaltet viele Adressen und Coins. Ausgabe- und CoinJoin-Entscheidungen betreffen verfügbare Coins, nicht bloß den Gesamtkontostand. Das [Glossar](/de/help/glossary/) erklärt die Begriffe.

<span id="does-combining-coinjoined-coins-always-destroy-all-privacy" data-ginger-heading="zerstört-die-kombination-von-coinjoin-coins-immer-jede-privatsphäre" aria-hidden="true"></span>

### Zerstört die Kombination von CoinJoin-Coins immer jede Privatsphäre?

Keine einzelne Regel beschreibt jeden Beobachter oder jede Zahlung. Normale gemeinsame Ausgabe kann Inputs verbinden, besonders wenn einer bereits identifiziert ist, verrät aber nicht automatisch jede frühere Eigentumsbeziehung. Prüfe Inputs und Wechselgeld deiner tatsächlichen Zahlung, statt immer oder nie kombinieren als Garantie anzusehen.

<span id="does-a-reused-address-automatically-publish-my-entire-wallet" data-ginger-heading="veröffentlicht-eine-wiederverwendete-adresse-automatisch-meine-ganze-wallet" aria-hidden="true"></span>

### Veröffentlicht eine wiederverwendete Adresse automatisch meine ganze Wallet?

Nein, aber ihre Eingänge sind gemeinsam prüfbar und mit der veröffentlichenden oder bereitstellenden Person verknüpfbar. Spätere gemeinsame Ausgabe und fremdes Zusatzwissen verraten möglicherweise mehr. Bezeichnungen helfen lokalen Entscheidungen; sie erzwingen weder öffentliche Trennung noch automatische Auswahl nach deinen gewünschten Grenzen.

<span id="does-manual-control-force-exactly-those-inputs-into-the-final-payment" data-ginger-heading="erzwingt-manual-control-exakt-diese-inputs-in-der-zahlung" aria-hidden="true"></span>

### Erzwingt Manual Control exakt diese Inputs in der Zahlung?

**Manual Control** wählt Kandidaten für eine normale Zahlung. Prüfe vor Autorisierung tatsächlich verwendete Inputs, Empfängerbetrag, Wechselgeld und Gebühr in der endgültigen Vorschau. Das ist getrennt von CoinJoin-Inputauswahl und legt keine exakte Liste einer künftigen Runde fest.

<span id="should-i-consolidate-many-small-coins-while-fees-are-low" data-ginger-heading="sollte-ich-bei-niedrigen-gebühren-viele-kleine-coins-zusammenführen" aria-hidden="true"></span>

### Sollte ich bei niedrigen Gebühren viele kleine Coins zusammenführen?

Zusammenführung kann spätere Inputzahlen reduzieren, kostet aber selbst Gebühren und verknüpft zuvor getrennte Aktivität. Eine niedrigere Rate verändert Kosten, nicht Offenlegung. Bedenke Zweck, Wert und bekannte Geschichte vor der Kombination.

<span id="why-is-a-tiny-payment-missing-and-does-exclude-coins-freeze-it" data-ginger-heading="warum-fehlt-eine-kleinstzahlung-und-friert-exclude-coins-sie-ein" aria-hidden="true"></span>

### Warum fehlt eine Kleinstzahlung, und friert Exclude Coins sie ein?

Prüfe Synchronisierung und Dust-Schwelle vor Verlustannahmen. **Exclude Coins** betrifft CoinJoin, nicht normale Ausgabe, und friert Coins nicht ein. Unerwartete Kleinstzahlungen brauchen keine sofortige Reaktion; prüfe Ausgabekosten und mögliche Zuordnungen vor ihrer Zahlungsaufnahme.

<span id="can-i-set-any-custom-fee-rate-or-guarantee-a-confirmation-time" data-ginger-heading="kann-ich-beliebige-gebührenraten-oder-garantierte-bestätigungszeiten-wählen" aria-hidden="true"></span>

### Kann ich beliebige Gebührenraten oder garantierte Bestätigungszeiten wählen?

Nein. Der veröffentlichte Editor lehnt unter 1 sat/vByte ab; Netzwerkregeln können mehr erfordern. Eigene Raten konkurrieren weiterhin und reservieren keine Frist. Prüfe vor Bestätigung die Gesamtgebühr, nicht nur die Rate.

<span id="coinjoin-costs-and-progress" data-ginger-heading="coinjoin-kosten-und-fortschritt" aria-hidden="true"></span>

## CoinJoin-Kosten und Fortschritt

<span id="why-can-the-private-balance-percentage-differ-from-overall-progress" data-ginger-heading="warum-unterscheiden-sich-privatanteil-und-gesamtfortschritt" aria-hidden="true"></span>

### Warum unterscheiden sich Privatanteil und Gesamtfortschritt?

Es sind verschiedene lokale Messungen. Gesamtfortschritt gewichtet den Coin-Scorefortschritt nach Wert; die farbige private Guthabenanzeige zählt bereits ausreichenden Wert. Keines misst fremde Identifizierungswahrscheinlichkeit. Beide können korrekt sein und sich trotzdem unterscheiden.

<span id="why-can-progress-fall-or-change-when-i-adjust-the-target" data-ginger-heading="warum-fällt-fortschritt-oder-verändert-sich-mit-dem-ziel" aria-hidden="true"></span>

### Warum fällt Fortschritt oder verändert sich mit dem Ziel?

Neue Eingänge, gemeinsame Ausgabe, Wiederherstellung ohne lokale Analyse oder Zieländerung können die Anzeige verändern. Ein niedrigeres Ziel klassifiziert ohne Änderung des öffentlichen Verlaufs neu. Untersuche beteiligte Transaktionen und Einstellungen, statt Scoreänderung als Diebstahlbeweis oder neuen Schutz zu betrachten.

<span id="can-i-choose-exactly-which-coins-join-a-round" data-ginger-heading="kann-ich-exakt-die-coins-einer-runde-wählen" aria-hidden="true"></span>

### Kann ich exakt die Coins einer Runde wählen?

Der Client wählt geeignete Inputs mit veröffentlichten CoinJoin-Einstellungen. Du kannst konkrete Coins ausschließen und Präferenzen ändern; manuelle normale Sendeauswahl erzwingt keine Rundenliste. Ausschluss gilt diesen Coins, nicht jedem künftigen Eingang derselben Adresse.

<span id="what-do-rejected-coins-or-a-blame-round-mean" data-ginger-heading="was-bedeuten-abgelehnte-coins-oder-blame-runden" aria-hidden="true"></span>

### Was bedeuten abgelehnte Coins oder Blame-Runden?

Blame ist eine Protokollwiederholung nach unvollständigem Versuch, keine Aufforderung zur Identifikation oder Beschuldigung anderer. Ablehnung oder zeitweise Sperre benötigen genauen Grund und aktuellen Status. Keine Meldung allein überträgt Kontrolle an den Koordinator; siehe [veröffentlichte Statustabelle](/de/help/troubleshooting/#coinjoin-does-not-start).

<span id="how-do-i-reconcile-the-full-cost-of-a-round" data-ginger-heading="wie-gleiche-ich-vollständige-rundenkosten-ab" aria-hidden="true"></span>

### Wie gleiche ich vollständige Rundenkosten ab?

Summiere eigene ausgegebene Inputs und ziehe alle eigenen Transaktionsoutputs ab, einschließlich anderer Wallets. Die Differenz kann Koordinatorgebühren, Mining-Kosten und Outputverteilungsreste enthalten. Zähle fremde Outputs nicht als eigene und gehe nicht davon aus, ein Gebührenfeld decke zwingend die Gesamtdifferenz ab.

<span id="is-a-remix-exemption-permanent-or-applied-to-my-entire-balance" data-ginger-heading="ist-remix-befreiung-dauerhaft-oder-auf-mein-ganzes-guthaben-anwendbar" aria-hidden="true"></span>

### Ist Remix-Befreiung dauerhaft oder auf mein ganzes Guthaben anwendbar?

Nein. Sie ist eine Input-Eignungsregel der angebotenen Runde, kein dauerhafter Anspruch für jede Wallet-Transaktion. Gingers beworbene Regeln umfassen geeignete Remixes und direkte Ausgabe über eine Transaktion; Mining bleibt zahlbar. Prüfe Bedingungen, statt allein für angenommene Befreiung Coins zu teilen oder zu bewegen.

<span id="hardware-and-privacy-boundaries" data-ginger-heading="hardware-und-privatsphäregrenzen" aria-hidden="true"></span>

## Hardware und Privatsphäregrenzen

<span id="can-coinjoin-send-directly-to-my-hardware-wallet" data-ginger-heading="kann-coinjoin-direkt-an-meine-hardware-wallet-senden" aria-hidden="true"></span>

### Kann CoinJoin direkt an meine Hardware-Wallet senden?

Geeignete Software kann eine angebotene geladene Hardware-Wallet unter **Coinjoin to this wallet** wählen. Das Ziel erhält Rundenoutputs ohne separates Zielerreichungsereignis; normaler Start erzwingt keine Runde bereits privater Kandidaten. Prüfe das nach Neustart zurückgesetzte Ziel jedes Mal und importiere dafür niemals Hardware-Seed am Computer.

<span id="does-an-own-node-replace-every-ginger-service-or-make-tor-unnecessary" data-ginger-heading="ersetzt-ein-eigener-node-alle-dienste-oder-macht-tor-unnötig" aria-hidden="true"></span>

### Ersetzt ein eigener Node alle Dienste oder macht Tor unnötig?

Nein. Ein konfigurierter Node erfüllt bestimmte Aufgaben wie Block- oder Gebührenlieferung; CoinJoin und optionale Anbieter-/2FA-Abläufe kontaktieren weiter Dienste. Tor schützt Verbindungsexposition, aber Empfängerdienste sehen Anfrageninhalte. Prüfe konkreten Datenfluss, statt externe Anfragefreiheit aus Node-Einstellungen abzuleiten.

<span id="does-payjoin-hide-my-payment-from-its-recipient" data-ginger-heading="verbirgt-payjoin-meine-zahlung-vor-ihrem-empfänger" aria-hidden="true"></span>

### Verbirgt PayJoin meine Zahlung vor ihrem Empfänger?

Nein. Der Empfänger kennt die Anforderung und sieht den Vorschlag bei Aushandlung. Erfolgreiche Zusammenarbeit schwächt mögliche fremde Eigentumsannahmen; Muster und Zusatzwissen begrenzen den Nutzen. Ginger kann bei Aufbaufehlern normal zahlen, sodass Autorisierung allein keinen finalen PayJoin garantiert.

<span id="how-do-i-prove-control-of-an-address-without-paying" data-ginger-heading="wie-beweise-ich-adresskontrolle-ohne-zahlung" aria-hidden="true"></span>

### Wie beweise ich Adresskontrolle ohne Zahlung?

Nutze **Sign Message** für eine Wallet-Adresse, lies die exakte Erklärung und teile die Signatur nur mit dem vorgesehenen Prüfer. Geräte-, Adresstyp- und Prüferkompatibilität bleiben wichtig. Signierung überträgt keine Bitcoin und beweist nicht jede Wallet-Adresse; sie verknüpft möglicherweise die Adresse mit der dem Prüfer bekannten Identität.

<span id="what-information-do-secret-hunt-and-buysell-services-receive" data-ginger-heading="welche-informationen-erhalten-secret-hunt-und-kauf-verkaufsdienste" aria-hidden="true"></span>

### Welche Informationen erhalten Secret Hunt und Kauf-/Verkaufsdienste?

Relevante Secret-Hunt-Prüfungen können Runden-/Transaktionskennungen, Input-Outpoint und Kontrollnachweis senden. Kauf-/Verkaufsadressprüfung und Bestellungen senden erforderliche Adressen und Details; Websites haben eigene Identitäts- und Browseroffenlegungen. Das sind getrennte optionale Abläufe; normale Synchronisierungsprivatsphäre lässt sich nicht auf alle übertragen.
