---
doc_id: "buy-sell.sell-and-orders"
title: "Vendi bitcoin e risolvi i problemi degli ordini dei fornitori"
description: "Completa un ordine di vendita Ginger con l'importo e l'indirizzo esatti del fornitore, segui lo stato e contatta il servizio di assistenza corretto."
lang: "it"
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

> Livello della guida: Uso quotidiano. Scegli questa guida quando ti serve eseguire l'attività descritta.

Una vendita scambia bitcoin con il metodo di pagamento offerto da un fornitore. Ginger aiuta a ottenere offerte e preparare il pagamento on-chain, ma il fornitore controlla il pagamento fiat e la revisione dell'ordine. Leggi i suoi requisiti prima di impegnare fondi.

<span id="create-and-fund-a-sale" data-ginger-heading="crea-e-finanzia-una-vendita" aria-hidden="true"></span>

## Crea e finanzia una vendita

1. Apri un portafoglio sincronizzato con bitcoin spendibili e scegli **Sell**. Se l'azione manca, controlla l'avanzamento del ripristino e se il portafoglio possa inviare.
2. Seleziona il paese o la regione quando richiesto. Inserisci l'importo da vendere e la valuta in cui vuoi ricevere il pagamento. Controlla unità e limiti visualizzati.
3. Scegli **Continue**, filtra **Offers** per metodo di pagamento e confronta il pagamento netto e gli addebiti del fornitore.
4. Scegli **Accept**. Completa i passaggi del fornitore nel browser fino a ricevere destinazione Bitcoin esatta, importo ed eventuale scadenza di pagamento.
5. Torna alla finestra di vendita di Ginger e scegli **Send**. Inserisci o verifica la destinazione e l'importo esatto forniti. Non presumere che il browser abbia compilato automaticamente ogni campo in modo corretto.
6. Controlla la commissione di transazione e l'importo del destinatario prima di confermare. L'importo richiesto dal fornitore deve arrivare dopo ogni sottrazione di commissione; non trattare accidentalmente «invia tutto» come il pagamento di una fattura fissa.
7. Controlla cronologia delle transazioni e **Previous Orders** per l'avanzamento. Conserva ID dell'ordine del fornitore e ID della transazione per le tue registrazioni.

La finestra di vendita conserva il contesto del fornitore, ma non elimina la responsabilità di confrontare la richiesta di pagamento con l'anteprima. Se la quotazione scade prima che tu invii, ottieni istruzioni aggiornate dal fornitore anziché pagare un vecchio indirizzo per tentativi.

<span id="understand-status" data-ginger-heading="comprendi-lo-stato" aria-hidden="true"></span>

## Comprendi lo stato

| Stato nei dettagli dell'ordine | Cosa fare |
| --- | --- |
| **Created** | L'ordine esiste; controlla quali passaggi del fornitore restano prima di pagare di nuovo. |
| **Pending** | L'elaborazione è ancora in corso. Confronta lo stato del fornitore e la cronologia del portafoglio. |
| **Your transaction is on hold. Please contact Support.** | Contatta il fornitore selezionato usando l'ID dell'ordine. Ginger non può concludere la sua revisione. |
| **Expired** | Non presumere che una vecchia quotazione o un indirizzo di pagamento siano ancora utilizzabili. Chiedi al fornitore se i fondi sono già stati inviati. |
| **Failed** | Controlla se pagamento o bitcoin siano stati trasferiti prima di tentare un nuovo ordine. |
| **Refunded** | Conferma metodo, destinazione ed effettivo regolamento del rimborso con il fornitore. |
| **Completed** | Verifica la ricezione bitcoin o il pagamento fiat attesi tramite il portafoglio o conto di pagamento pertinente. |

Le etichette di stato riflettono le informazioni più recenti dell'integrazione del fornitore e possono arrivare dopo gli eventi. Un indicatore di sospensione su **Buy** o **Sell** segnala un ordine che richiede attenzione; non indica una chiave del portafoglio persa.

<span id="which-support-channel-to-use" data-ginger-heading="quale-canale-di-assistenza-usare" aria-hidden="true"></span>

## Quale canale di assistenza usare

Per controlli d'identità, ritardi nei pagamenti, metodi accettati, termini di rimborso o sospensione di un ordine, contatta il fornitore tramite il suo sito autenticato. Fornisci l'ID dell'ordine e solo le informazioni di transazione necessarie a quello specifico caso. Tieni i dettagli privati dell'account fuori dalle segnalazioni pubbliche su GitHub.

Per un arresto anomalo di Ginger, un errore nell'apertura del browser o un ordine visualizzato erroneamente, segnala versione dell'applicazione, sistema operativo, testo dell'errore e passaggi tramite i collegamenti ufficiali di assistenza Ginger. Non includere parole di recupero, passphrase, segreti 2FA, file del portafoglio o log completi senza averne controllato il contenuto.

<span id="privacy-and-fees" data-ginger-heading="privacy-e-commissioni" aria-hidden="true"></span>

## Privacy e commissioni

Il fornitore può collegare la propria richiesta di pagamento all'identità o al metodo di pagamento che gli dai. Spendere fondi passati attraverso CoinJoin non rimuove quella registrazione e un fornitore può applicare la propria politica di accettazione. Ginger non può garantire che ogni exchange accetti ogni cronologia di transazioni.

Confronta il pagamento quotato con l'importo bitcoin, la commissione mostrata dal fornitore e la commissione di mining separata del tuo pagamento. Mantieni valore spendibile sufficiente per quest'ultima. Un saldo basso, un'impennata delle commissioni o monete impegnate in una fase critica di CoinJoin possono impedire il pagamento immediato di un ordine altrimenti valido.
