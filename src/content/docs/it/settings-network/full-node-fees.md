---
doc_id: "settings-network.full-node-fees"
title: "Usa un tuo nodo Bitcoin e scegli le stime delle commissioni"
description: "Configura il download dei blocchi in Ginger da un nodo che controlli, esamina la funzione facoltativa Bitcoin Core inclusa e scegli un fornitore delle tariffe di commissione."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Controlla prima lo stato ordinario della connessione e della sincronizzazione.

Usare un tuo nodo Bitcoin può ridurre la dipendenza da peer pubblici per i dati dei blocchi. Aggiunge anche responsabilità di archiviazione, larghezza di banda, disponibilità e manutenzione. Puoi usare Ginger senza abilitare il nodo completo facoltativo.

<span id="start-the-bundled-node" data-ginger-heading="avvia-il-nodo-incluso" aria-hidden="true"></span>

## Avvia il nodo incluso

In **Settings** → **Bitcoin**, l'interruttore si chiama **(EXPERIMENTAL) Run Bitcoin Core on startup**. La versione 2.0.26 include Bitcoin Core 31. Usa istruzioni che corrispondano a questo nodo incluso e alla versione installata.

1. Scegli una **Bitcoin Core Data Folder** con spazio adeguato e archiviazione affidabile. Non indicare una cartella non pertinente e non consentire a due processi del nodo di gestire contemporaneamente la stessa cartella.
2. Attiva **(EXPERIMENTAL) Run Bitcoin Core on startup** e riavvia Ginger quando richiesto.
3. Lascia procedere la sincronizzazione iniziale del nodo. Osserva lo stato della connessione e del download; la prima sincronizzazione può richiedere molto tempo.
4. Imposta **Stop Bitcoin Core on shutdown** in base al fatto che tu voglia lasciare il nodo in esecuzione dopo l'uscita da Ginger.

Non attivare questo interruttore solo per correggere un saldo mancante del portafoglio. Un nodo non può recuperare una passphrase sconosciuta o ripristinare etichette. Una cartella esistente del nodo può contenere configurazione preziosa e propri portafogli; preservane il backup prima di cambiare quale applicazione la gestisce.

Il nodo completo può verificare localmente i blocchi, ma questo non rimuove le dipendenze di Ginger da coordinatore, 2FA, acquisto/vendita o altri servizi. Non nasconde neppure una transazione che divulghi volontariamente a un exchange.

<span id="connect-to-an-existing-node" data-ginger-heading="collegati-a-un-nodo-esistente" aria-hidden="true"></span>

## Collegati a un nodo esistente

Con l'interruttore di avvio del nodo incluso disattivato, **Bitcoin P2P Endpoint** consente di specificare un nodo che controlli per scaricare i blocchi. Inserisci il suo host raggiungibile e la porta P2P. Per un nodo Bitcoin Core mainnet sullo stesso computer, l'endpoint abituale è `127.0.0.1:8333`, purché il nodo ascolti effettivamente lì. Questo campo richiede un endpoint peer Bitcoin, non un URL di esploratore di blocchi o una credenziale RPC.

Assicurati che il nodo consenta la connessione del portafoglio e possieda i dati dei blocchi necessari. Un nodo con pruning potrebbe non conservare vecchi blocchi necessari a un portafoglio ripristinato. Controlla la disponibilità se una scansione storica si blocca, anziché presumere che tutte le configurazioni dei nodi siano intercambiabili.

La connessione a un nodo remoto ha una propria esposizione di rete. Usa un nodo e un trasporto che comprendi; impostare semplicemente un endpoint non prova che ogni connessione a esso sia privata. Evita di aprire l'accesso amministrativo RPC all'internet pubblico per far funzionare una connessione del portafoglio.

<span id="choose-fee-estimates-separately" data-ginger-heading="scegli-separatamente-le-stime-delle-commissioni" aria-hidden="true"></span>

## Scegli separatamente le stime delle commissioni

**Fee Rate Provider** offre **Mempool Space**, **Blockstream Info** e **Full Node**. I fornitori pubblici forniscono stime dalla propria vista delle condizioni della rete. La scelta del nodo completo richiede l'integrazione nodo/RPC funzionante di Ginger; inserire solo un endpoint P2P non prova che la stima delle commissioni RPC sia configurata.

Quando **Full Node** è selezionato ma il nodo non è disponibile, la v2.0.26 segnala che la stima delle commissioni non è disponibile e consente comunque l'inserimento manuale nella procedura di pagamento. Puoi aspettare il nodo, selezionare un fornitore di stime funzionante o inserire una tariffa di cui hai motivo di fidarti. Non usare una commissione enorme come rimedio generico alla connessione.

Le stime delle commissioni sono previsioni, non prenotazioni di spazio nei blocchi. Una differenza tra fornitori può riflettere osservazioni mempool diverse. Controlla la commissione totale della transazione oltre alla tariffa visualizzata.

<span id="dust-threshold" data-ginger-heading="soglia-dust" aria-hidden="true"></span>

## Soglia dust

**Dust Threshold**, anch'essa in **Settings** → **Bitcoin**, controlla come il portafoglio tratta importi ricevuti molto piccoli. È distinta dalla politica di inoltro della rete, dalla soglia di arresto CoinJoin e dall'importo minimo di input di un coordinatore. Alzarla può influire su quali piccoli pagamenti il portafoglio elabora; non elimina i loro output dalla blockchain e non impedisce a qualcuno di inviarli. Conserva l'impostazione precedente quando esamini un piccolo pagamento inaspettatamente mancante.
