---
doc_id: "settings-network.tor-sync"
title: "Tor, sincronizzazione e privacy di rete"
description: "Comprendi come si connette Ginger, cosa protegge Tor e come esaminare una sincronizzazione lenta senza esporre l'attività del portafoglio."
lang: "it"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Livello della guida: Uso quotidiano. Scegli questa guida quando ti serve eseguire l'attività descritta.

Ginger necessita di dati dalla rete per scoprire le tue transazioni, trasmettere pagamenti e partecipare a CoinJoin. Tor è incluso e attivo per impostazione predefinita per le normali connessioni di rete. Aiuta a separare il tuo indirizzo IP dai servizi che contatti, ma non nasconde importi e transazioni Bitcoin pubblici.

<span id="tor-settings" data-ginger-heading="impostazioni-tor" aria-hidden="true"></span>

## Impostazioni Tor

Apri **Settings** → **Security** e trova **Network anonymization (Tor)**. Mantienilo attivo per il normale uso privato. Riavvia quando richiesto affinché la configurazione di rete in esecuzione corrisponda alle impostazioni. La funzione 2FA di Ginger richiede Tor e l'interfaccia limita la sua disattivazione mentre la 2FA è attiva.

**Terminate Tor when Ginger shuts down** controlla il comportamento di chiusura di Tor. Un processo Tor può restare dopo la chiusura della finestra del portafoglio perché il portafoglio è in esecuzione in background o Tor non è configurato per terminare. Chiudere una finestra e uscire dall'applicazione sono azioni diverse.

Disattivare Tor cambia le informazioni esposte ai servizi e ai peer contattati. Non è un interruttore innocuo per le prestazioni. In particolare, connessioni a un coordinatore o a un peer di trasmissione delle transazioni possono essere associate al tuo indirizzo di rete. Non disattivarlo come risposta abituale a un CoinJoin in attesa.

La connessione Tor di Ginger non trasforma neppure un browser esterno in Tor Browser. Pagine dei fornitori, esploratori e altri collegamenti usano il browser configurato. Controlla separatamente quel browser prima di presumere che le sue richieste ereditino la protezione di rete del portafoglio.

<span id="what-synchronization-does" data-ginger-heading="cosa-fa-la-sincronizzazione" aria-hidden="true"></span>

## Cosa fa la sincronizzazione

Ginger usa filtri compatti dei blocchi per trovare blocchi potenzialmente pertinenti ed elabora localmente i dati dei blocchi scaricati per il portafoglio. Questo riduce la necessità di inviare un elenco di tutti i tuoi indirizzi a un server pubblico per portafogli. Dipende ancora da servizi di rete e peer per i dati e dalla correttezza del software locale.

Il primo utilizzo e il ripristino possono richiedere più tempo della riapertura di un portafoglio usato di recente. L'avanzamento può includere connessione, ottenimento dei filtri, download dei blocchi ed elaborazione del portafoglio. Un portafoglio ripristinato può mostrare temporaneamente una cronologia incompleta o nascondere azioni finché termina la scansione.

Eseguire un nodo completo e sincronizzare un portafoglio sono lavori separati. Il nodo completo facoltativo convalida la blockchain; il portafoglio deve poi trovare le proprie transazioni. Uno stato sincronizzato del nodo completo non significa necessariamente che un portafoglio appena ripristinato abbia terminato la scansione.

<span id="when-synchronization-appears-stuck" data-ginger-heading="quando-la-sincronizzazione-sembra-bloccata" aria-hidden="true"></span>

## Quando la sincronizzazione sembra bloccata

1. Controlla lo stato esatto e se cambia nel tempo. Una grande scansione di ripristino è diversa da **Awaiting connection**.
2. Conferma che il computer abbia accesso a internet, data e ora corrette e spazio su disco. Controlla che Ginger abbia il permesso di scrivere i propri dati.
3. Se hai configurato un nodo completo, verifica che sia raggiungibile e sincronizzato. Ricontrolla l'endpoint configurato anziché cambiare le credenziali del portafoglio.
4. Chiudi Ginger normalmente e riaprilo una volta se la connessione resta bloccata. Conserva il testo dell'errore e il contesto dei log se il problema ritorna.

Se Tor è bloccato sulla tua rete, consulta le [indicazioni di connessione del Tor Project](https://support.torproject.org/). Le impostazioni Ginger pubblicate non espongono una procedura guidata documentata di configurazione dei bridge. Non copiare impostazioni di Tor Browser in campi arbitrari della configurazione Ginger presumendo che funzionino.

Usa **Wallet Settings** → **Tools** → **Resync** solo quando c'è motivo di ricostruire la vista del portafoglio. Conserva prima i backup e lascia completare un'altra scansione. Eliminare la cartella dati non è il primo passo di risoluzione dei problemi.

<span id="separate-network-choice-from-real-funds" data-ginger-heading="separa-la-scelta-della-rete-dai-fondi-reali" aria-hidden="true"></span>

## Separa la scelta della rete dai fondi reali

Il selettore di rete pubblicato in **Settings** → **Bitcoin** offre Main e RegTest. RegTest è per un ambiente di test isolato e non ha valore bitcoin reale; questo manuale non tratta la gestione di quell'ambiente. Questa versione non offre una selezione testnet pubblica in quell'interfaccia. Cambiare rete non sposta fondi tra le reti.
