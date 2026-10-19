---
doc_id: "payments.fees-and-change"
title: "Commissioni di transazione, tariffe personalizzate e resto"
description: "Comprendi le tariffe di commissione, le tariffe personalizzate fino a un minimo di 0.1 sat/vB, i limiti di inoltro, la detrazione delle commissioni, gli output di resto e i suggerimenti per la privacy in Ginger."
lang: "it"
verified_release: "v2.0.27"
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

Usa il controllo delle commissioni nell'anteprima per cambiare la preferenza di conferma desiderata o inserire una **Custom Fee Rate**. Ginger accetta tariffe fino a un minimo di **0.1 sat/vB** e le sue stime e il grafico delle commissioni mantengono le tariffe frazionarie. Un tempo stimato non è una garanzia: nuove transazioni competono per lo spazio e i blocchi arrivano a intervalli irregolari.

Il minimo dell'editor non garantisce che una transazione venga inoltrata o accettata nella mempool di un nodo. I nodi possono richiedere una tariffa maggiore per la propria politica o le condizioni attuali della mempool. Durante la trasmissione ai peer, Ginger salta quelli il cui minimo annunciato supera la tariffa della transazione. Una tariffa personalizzata bassa può quindi impedire la trasmissione o lasciare la transazione non confermata; valuta le condizioni della rete e l'urgenza del pagamento prima di usarla.

Quando le stime automatiche non sono disponibili, Ginger può comunque offrire l'inserimento manuale della tariffa di commissione. Se non sai quale tariffa sia appropriata, attendere il ripristino delle stime è preferibile a indovinare un numero molto alto. Le commissioni delle transazioni ordinarie e quelle del coordinatore CoinJoin sono separate.

<span id="check-who-pays-the-fee" data-ginger-heading="controlla-chi-paga-la-commissione" aria-hidden="true"></span>

## Controlla chi paga la commissione

In un [pagamento multiplo](/it/payments/send/#pay-several-recipients-in-one-transaction), **Subtract the transaction fee from the first payment** riduce soltanto l'importo del primo destinatario. Gli importi degli altri pagamenti rimangono invariati. Se l'opzione è deselezionata, servono fondi sufficienti per tutti gli importi più la commissione. Usare **Max** nell'editor multiplo attiva la detrazione della commissione.

Controlla sempre gli importi finali nell'anteprima, soprattutto dopo aver cambiato la tariffa della commissione. Se un destinatario deve ricevere un importo esatto, detrarre una commissione da quel pagamento può comportare un pagamento insufficiente. L'anteprima elenca separatamente l'importo finale di ciascun destinatario del pagamento multiplo.

<span id="change-is-still-your-bitcoin" data-ginger-heading="il-resto-è-ancora-tuo-bitcoin" aria-hidden="true"></span>

## Il resto è ancora tuo bitcoin

Bitcoin spende monete intere, chiamate anche UTXO. Se gli input selezionati superano l'importo del destinatario più la commissione, l'eccesso generalmente torna a un nuovo indirizzo di resto nel portafoglio. Per esempio, un input di 100 000 satoshi che finanzia un pagamento di 60 000 satoshi con una commissione di 1 000 satoshi lascia 39 000 satoshi di resto.

L'indirizzo di resto può differire dagli indirizzi di ricezione già mostrati a qualcuno. Non devi copiarlo fuori o reinviarlo manualmente. Il resto può essere collegato al pagamento tramite l'analisi delle transazioni, il che conta quando in seguito lo combini con altri fondi.

I suggerimenti di privacy di Ginger possono offrire un pagamento senza resto modificando la selezione delle monete o l'importo del destinatario. Controlla attentamente il risultato. Una fattura fissa non dovrebbe essere pagata meno del dovuto solo per eliminare il resto.

Per selezionare monete specifiche o gestire una transazione in attesa, consulta [controllo delle monete e cronologia](/it/payments/coin-control-history/).
