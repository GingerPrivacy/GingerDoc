---
doc_id: "payments.fees-and-change"
title: "Commissioni di transazione, tariffe personalizzate e resto"
description: "Comprendi le tariffe di commissione in satoshi per byte, l'inserimento manuale, gli output di resto e i suggerimenti di privacy che modificano l'importo in Ginger."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> Livello della guida: Avanzato. Comprendi prima la normale anteprima di invio, l'importo del destinatario e la commissione.

Per i normali passaggi di pagamento, inizia da [Invia bitcoin](/it/payments/send/). Questo riferimento spiega più in dettaglio i controlli delle commissioni e il resto; non serve scegliere una tariffa personalizzata per ogni pagamento.

<span id="understand-the-fee" data-ginger-heading="comprendi-la-commissione" aria-hidden="true"></span>

## Comprendi la commissione

Una tariffa di commissione è misurata in satoshi per byte virtuale, mostrata come **Fee Rate (sat/vByte)**. La commissione totale di mining è la tariffa moltiplicata per la dimensione virtuale della transazione. Non è una percentuale dell'importo del pagamento. Spendere molte piccole monete può costare più che spendere una moneta maggiore dello stesso valore totale.

Usa il controllo delle commissioni nell'anteprima per cambiare la preferenza di conferma desiderata o inserire una **Custom Fee Rate**. Un tempo stimato non è una garanzia: nuove transazioni competono per lo spazio e i blocchi arrivano a intervalli irregolari. Il controllo di inserimento manuale pubblicato rifiuta tariffe inferiori a 1 sat/vByte; la politica del nodo può richiedere più del minimo dell'editor.

Quando le stime automatiche non sono disponibili, Ginger può comunque offrire l'inserimento manuale della commissione. Se non sai quale tariffa sia appropriata, attendere il ripristino delle stime è preferibile a indovinare un numero molto alto. Le commissioni delle transazioni ordinarie e quelle del coordinatore CoinJoin sono separate.

<span id="change-is-still-your-bitcoin" data-ginger-heading="il-resto-è-ancora-tuo-bitcoin" aria-hidden="true"></span>

## Il resto è ancora tuo bitcoin

Bitcoin spende monete intere, chiamate anche UTXO. Se gli input selezionati superano l'importo del destinatario più la commissione, l'eccesso generalmente torna a un nuovo indirizzo di resto nel portafoglio. Per esempio, un input di 100 000 satoshi che finanzia un pagamento di 60 000 satoshi con una commissione di 1 000 satoshi lascia 39 000 satoshi di resto.

L'indirizzo di resto può differire dagli indirizzi di ricezione già mostrati a qualcuno. Non devi copiarlo fuori o reinviarlo manualmente. Il resto può essere collegato al pagamento tramite l'analisi delle transazioni, il che conta quando in seguito lo combini con altri fondi.

I suggerimenti di privacy di Ginger possono offrire un pagamento senza resto modificando la selezione delle monete o l'importo del destinatario. Controlla attentamente il risultato. Una fattura fissa non dovrebbe essere pagata meno del dovuto solo per eliminare il resto.

Per selezionare monete specifiche o gestire una transazione in attesa, consulta [controllo delle monete e cronologia](/it/payments/coin-control-history/).
