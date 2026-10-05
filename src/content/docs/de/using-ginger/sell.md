---
doc_id: "buy-sell.sell-and-orders"
title: "Bitcoin verkaufen und Anbieterbestellungen klären"
description: "Bezahle Verkaufsbestellungen mit exaktem Anbieterbetrag und Adresse, verfolge den Status und kontaktiere den richtigen Support."
lang: "de"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="how-it-works"></span>
<span id="step-1-selecting-your-country"></span>
<span id="step-2-entering-purchase-amount"></span>
<span id="step-3-choosing-an-offer"></span>
<span id="step-4-completing-the-transaction"></span>
<span id="step-5-viewing-transaction-history"></span>
<span id="bitcoin-purchase-faq"></span>
<span id="how-can-i-sell-bitcoin-through-ginger-wallet"></span>
<span id="do-i-need-to-select-my-country-before-selling-bitcoin"></span>
<span id="how-do-i-enter-the-amount-i-want-to-sell"></span>
<span id="are-there-minimum-and-maximum-limits-for-sales"></span>
<span id="how-do-i-choose-the-best-offer-for-my-sale"></span>
<span id="what-happens-after-i-accept-an-offer"></span>
<span id="how-do-i-complete-the-bitcoin-sale-transaction"></span>
<span id="can-i-view-my-past-sales"></span>
<span id="what-does-it-mean-if-a-transaction-is-on-hold"></span>
<span id="can-i-change-the-browser-used-for-redirection"></span>

> Schwierigkeitsgrad: Alltagsnutzung. Wähle diese Anleitung, wenn du die beschriebene Aufgabe erledigen möchtest.

Ein Verkauf tauscht Bitcoin gegen die von einem Anbieter angebotene Zahlungsmethode. Ginger hilft beim Beschaffen von Angeboten und Vorbereiten der On-Chain-Zahlung; der Anbieter kontrolliert die Fiat-Auszahlung und Bestellprüfung. Lies seine Anforderungen, bevor du Guthaben bindest.

<span id="create-and-fund-a-sale" data-ginger-heading="verkauf-erstellen-und-bezahlen" aria-hidden="true"></span>

## Verkauf erstellen und bezahlen

1. Öffne eine synchronisierte Wallet mit ausgebbaren Bitcoin und wähle **Sell**. Fehlt die Aktion, prüfe Wiederherstellungsfortschritt und Sendefähigkeit der Wallet.
2. Wähle bei Aufforderung Land oder Region. Gib den Verkaufsbetrag und die gewünschte Auszahlungswährung ein. Prüfe angezeigte Einheiten und Grenzen.
3. Wähle **Continue**, filtere **Offers** nach Zahlungsmethode und vergleiche Nettoauszahlung und Entgelte des Anbieters.
4. Wähle **Accept**. Erledige die Browser-Schritte des Anbieters, bis du exaktes Bitcoin-Ziel, Betrag und etwaige Zahlungsfrist erhältst.
5. Kehre zu Gingers Verkaufsdialog zurück und wähle **Send**. Gib das vom Anbieter übermittelte Ziel und den exakten Betrag ein oder prüfe diese Angaben. Gehe nicht davon aus, dass der Browser automatisch jedes Feld korrekt ausgefüllt hat.
6. Prüfe Transaktionsgebühr und Empfängerbetrag vor Bestätigung. Der angeforderte Betrag muss nach etwaigem Gebührenabzug ankommen; behandle „alles senden“ nicht versehentlich als Bezahlung einer festen Rechnung.
7. Prüfe Transaktionsverlauf und **Previous Orders** auf Fortschritt. Halte Anbieter-Bestell-ID und Transaktions-ID für deine Aufzeichnungen bereit.

Der Verkaufsdialog erhält den Anbieterbezug, entbindet dich aber nicht vom Vergleich der Zahlungsanforderung mit der Vorschau. Läuft das Angebot vor dem Senden ab, hole aktualisierte Anweisungen, statt spekulativ an eine alte Adresse zu zahlen.

<span id="understand-status" data-ginger-heading="status-verstehen" aria-hidden="true"></span>

## Status verstehen

| Status in Bestelldetails | Handlung |
| --- | --- |
| **Created** | Bestellung existiert; verbleibende Anbieterschritte vor erneuter Zahlung prüfen. |
| **Pending** | Verarbeitung läuft; Anbieterstatus und Wallet-Verlauf vergleichen. |
| **Your transaction is on hold. Please contact Support.** | Anbieter mit Bestell-ID kontaktieren; Ginger hebt die Prüfung nicht auf. |
| **Expired** | Alte Angebote oder Adressen nicht automatisch weiterverwenden; bei Zahlung Anbieter fragen. |
| **Failed** | Vor neuer Bestellung prüfen, ob Geld oder Bitcoin übertragen wurden. |
| **Refunded** | Erstattungsmethode, Ziel und Abwicklung mit Anbieter prüfen. |
| **Completed** | Erwarteten Bitcoin-Empfang oder Fiat-Auszahlung in Wallet/Zahlungskonto prüfen. |

Statusbezeichnungen spiegeln die neuesten Integrationsdaten und können Ereignissen hinterherlaufen. Eine Hold-Anzeige bei **Buy** oder **Sell** weist auf eine Bestellung mit Handlungsbedarf hin; sie bedeutet keinen verlorenen Wallet-Schlüssel.

<span id="which-support-channel-to-use" data-ginger-heading="den-richtigen-support-nutzen" aria-hidden="true"></span>

## Den richtigen Support nutzen

Kontaktiere bei Identitätsprüfung, Auszahlungsverzögerung, akzeptierten Zahlungsmethoden, Erstattungsbedingungen oder Zurückhaltung den Anbieter über seine authentifizierte Website. Nenne die Bestell-ID und nur die für diesen Fall nötigen Transaktionsinformationen. Halte private Kontodaten aus öffentlichen GitHub-Issues heraus.

Melde Ginger-Abstürze, Fehler beim Browseröffnen oder falsch angezeigte Bestellungen mit Anwendungsversion, Betriebssystem, Fehlertext und Schritten über offizielle Supportlinks. Teile keine Wiederherstellungswörter, Passphrasen, 2FA-Geheimnisse oder Wallet-Dateien; prüfe vollständige Protokolle vor etwaiger Weitergabe.

<span id="privacy-and-fees" data-ginger-heading="privatsphäre-und-gebühren" aria-hidden="true"></span>

## Privatsphäre und Gebühren

Der Anbieter kann seine Zahlungsanforderung mit deiner angegebenen Identität oder Zahlungsmethode verbinden. CoinJoin-Guthaben zu verwenden entfernt diese Aufzeichnung nicht; ein Anbieter kann eigene Akzeptanzregeln anwenden. Ginger kann nicht garantieren, dass jede Börse jeden Transaktionsverlauf annimmt.

Vergleiche die angebotene Auszahlung mit Bitcoin-Betrag, angezeigter Anbietergebühr und separater Mining-Gebühr deiner Zahlung. Halte für Letztere genug ausgebbaren Wert. Niedriges Guthaben, ein Gebührenanstieg oder Coins in kritischen CoinJoin-Phasen können die sofortige Bezahlung einer ansonsten gültigen Bestellung verhindern.
