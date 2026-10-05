---
doc_id: "payments.coin-control-history"
title: "Controllo delle monete, cronologia e transazioni bloccate"
description: "Esamina gli UTXO e la cronologia dei pagamenti di Ginger, seleziona consapevolmente le monete e comprendi quando è possibile accelerare o annullare."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Comprendi prima la normale anteprima di invio, l'importo del destinatario e la commissione.

Il saldo totale del portafoglio può contenere molte monete separate con origini, stati di conferma e storie di privacy diversi. Il controllo delle monete aiuta a decidere quali spendere. Rende anche più facile collegare accidentalmente fondi prima separati, quindi usalo con uno scopo specifico.

<span id="inspect-and-select-coins" data-ginger-heading="esamina-e-seleziona-le-monete" aria-hidden="true"></span>

## Esamina e seleziona le monete

Apri il menu del portafoglio e scegli **Wallet Coins**. Esamina importo, etichette, informazioni di conferma e dati sulla privacy delle monete che possiedi. Una transazione può creare più monete e un indirizzo può ricevere più pagamenti separati; né una riga né un indirizzo rappresentano necessariamente un intero portafoglio.

Scegli **Send** → **Manual Control** per lavorare con le singole monete nella procedura di pagamento. Seleziona valore sufficiente sia per il pagamento sia per la commissione. Controlla gli input risultanti e il resto prima di confermare. Selezionare le monete le rende disponibili al costruttore della transazione; controlla l'anteprima finale per vedere quali sono effettivamente usate.

Conserva etichette che spieghino da dove provengono i fondi o chi li conosce già. Pagare con monete già associate allo stesso destinatario può rivelare meno nuove informazioni che combinare fonti non correlate. Un'etichetta non stabilisce da sola l'anonimato e non blocca l'analisi della blockchain altrui.

<span id="consolidation-and-small-coins" data-ginger-heading="consolidamento-e-piccole-monete" aria-hidden="true"></span>

## Consolidamento e piccole monete

Il consolidamento spende più piccole monete in un numero minore di output, di solito verso un portafoglio che controlli. Costa una commissione ora e può ridurre il numero di input necessari per un pagamento successivo. Associa anche pubblicamente gli input selezionati. Condizioni di commissioni basse possono rendere più economico il consolidamento, ma non eliminano questo compromesso per la privacy.

Non combinare automaticamente monete non correlate solo per ottenere un elenco ordinato. Output in entrata molto piccoli possono essere antieconomici da spendere. La soglia dust di Ginger e le esclusioni da CoinJoin riguardano situazioni diverse; escludere una moneta da CoinJoin non impedisce di selezionarla per un pagamento ordinario.

Inviare fondi al portafoglio hardware è una normale transazione on-chain se usi **Send**. Ottieni e verifica un nuovo indirizzo di ricezione hardware, poi controlla la commissione e le monete selezionate del portafoglio software. Il trasferimento stesso resta visibile sulla blockchain.

<span id="read-transaction-history" data-ginger-heading="leggi-la-cronologia-delle-transazioni" aria-hidden="true"></span>

## Leggi la cronologia delle transazioni

La schermata principale del portafoglio mostra attività in entrata, in uscita e CoinJoin. Espandi le voci CoinJoin raggruppate quando devi esaminare i singoli round. I controlli di ordinamento aiutano a confrontare data, importo, etichette e stato. Apri i dettagli della transazione per esaminare l'ID e le informazioni disponibili su conferme o commissioni.

Usa **Copy Transaction ID** quando devi identificare una transazione specifica. Mantieni privati gli ID delle transazioni quando possibile: condividerne uno può rivelare indirizzi, importi e collegamenti ad altre attività. Un esploratore pubblico scopre anche le ricerche che fai. La cronologia locale di Ginger è il primo posto in cui controllare i tuoi pagamenti.

Puoi esaminare, ordinare e raggruppare la cronologia e copiare gli ID delle transazioni. Questa versione non offre un comando di ricerca delle transazioni o di esportazione CSV in questa procedura della cronologia.

<span id="speed-up-an-unconfirmed-transaction" data-ginger-heading="accelera-una-transazione-non-confermata" aria-hidden="true"></span>

## Accelera una transazione non confermata

Quando Ginger offre **Speed Up Transaction** per una voce della cronologia, aprila e controlla la commissione aggiuntiva prima di confermare. A seconda della transazione e degli output disponibili, l'accelerazione tramite commissione può sostituire una transazione con una versione a commissione maggiore oppure spendere un output in una transazione figlia che paga abbastanza per entrambe.

Non tutte le transazioni possono essere accelerate dal tuo portafoglio. Servono una struttura di transazione supportata e l'accesso alle chiavi e ai fondi pertinenti. Una commissione maggiore migliora l'incentivo per i miner; non garantisce una conferma immediata. La sostituzione può cambiare l'ID della transazione, quindi controlla la cronologia aggiornata quando ti coordini con un destinatario.

<span id="cancel-an-unconfirmed-transaction" data-ginger-heading="annulla-una-transazione-non-confermata" aria-hidden="true"></span>

## Annulla una transazione non confermata

**Cancel Transaction**, quando disponibile, tenta di sostituire il pagamento in attesa con una transazione che riporta i fondi pertinenti sotto il tuo controllo e paga una commissione. È una gara con la conferma del pagamento originale, non un comando di annullamento accettato da ogni nodo.

Leggi la finestra di annullamento e la commissione, conferma solo se è la tua intenzione e controlla cosa viene effettivamente confermato. Se la transazione originale viene confermata per prima, l'annullamento non può invertirla. Dopo la conferma di un pagamento, chiedi eventualmente al destinatario un rimborso separato; Ginger non può recuperarlo.

Non avviare un secondo pagamento e non promettere un rimborso finché non sai quale transazione sia stata confermata. Un esploratore e il tuo portafoglio possono temporaneamente mostrare informazioni mempool diverse perché osservano nodi diversi.
