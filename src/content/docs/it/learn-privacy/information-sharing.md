---
doc_id: "learn-privacy.information-sharing"
title: "Dove vanno le informazioni del portafoglio"
description: "Comprendi cosa possono rivelare sincronizzazione Ginger, CoinJoin, fornitori, esploratori, 2FA, Secret Hunt e altre applicazioni per portafogli e cosa cambia con Tor."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Comprendi prima l'uso di nuovi indirizzi di ricezione e il controllo dei pagamenti ordinari.

Azioni diverse del portafoglio divulgano informazioni diverse. Controllare filtri pubblici dei blocchi, inviare un input CoinJoin e aprire una pagina di acquisto non sono lo stesso evento di privacy. Usa questo riferimento prima di condividere qualcosa che non puoi ritirare.

Tor riduce l'esposizione diretta dell'IP per le connessioni instradate attraverso di esso. Non nasconde una richiesta al servizio che la riceve, non rimuove una transazione dalla blockchain, non protegge un computer sbloccato e non modifica automaticamente il browser esterno. Un nodo locale configurato è una connessione separata a una macchina che controlli.

<span id="synchronization-and-bitcoin-network-activity" data-ginger-heading="sincronizzazione-e-attività-sulla-rete-bitcoin" aria-hidden="true"></span>

## Sincronizzazione e attività sulla rete Bitcoin

| Azione e destinatario | Informazioni coinvolte | Cosa puoi scegliere |
| --- | --- | --- |
| Scaricare dati di sincronizzazione dal backend di Ginger | Il client richiede filtri pubblici dalla propria posizione attuale di sincronizzazione. Confronta localmente gli script del portafoglio anziché inviare l'xpub di un account in questa richiesta. Il servizio osserva comunque le richieste e i relativi tempi. | Mantieni Tor attivo; lascia terminare la sincronizzazione senza considerare il backend incapace di osservare qualsiasi utilizzo. |
| Scaricare un blocco corrispondente da una fonte di blocchi | La fonte scopre quale blocco completo è stato richiesto. Una corrispondenza può essere un falso positivo; richiedere un blocco non prova che tu possieda una particolare transazione al suo interno. | Un tuo nodo correttamente configurato può fornire blocchi. Un'impostazione del nodo non sostituisce ogni altro servizio usato da Ginger. |
| Richiedere stime delle commissioni | Il fornitore configurato riceve una richiesta di informazioni pubbliche sulle commissioni. Questa richiesta è diversa dalla ricerca della tua transazione o del saldo del portafoglio. | In **Fee Rate Provider**, scegli tra le fonti pubblicate secondo le tue esigenze; l'opzione del proprio nodo richiede un nodo configurato e funzionante. |
| Trasmettere un pagamento | Un peer o un servizio alternativo di trasmissione riceve la transazione firmata. Input, output e importi diventano visibili durante la propagazione. | Controlla prima di firmare. Tor cambia l'esposizione della connessione, non il contenuto del pagamento. Ginger può usare percorsi alternativi di trasmissione se un tentativo precedente fallisce. |

Per un nodo Bitcoin che gestisci, proteggi l'accesso alla macchina e a ogni connessione remota. Il suo operatore può osservare le richieste, quindi un server semplicemente chiamato «il tuo nodo» non è necessariamente privato se qualcun altro lo amministra. Contano ancora il normale accesso a internet, la scoperta dei peer e la disponibilità dei servizi.

<span id="coinjoin-and-optional-services" data-ginger-heading="coinjoin-e-servizi-facoltativi" aria-hidden="true"></span>

## CoinJoin e servizi facoltativi

| Azione e destinatario | Informazioni coinvolte | Cosa puoi scegliere |
| --- | --- | --- |
| Partecipare con un coordinatore CoinJoin | Input inviati e prove di proprietà, registrazioni degli output, messaggi del protocollo e tempi. WabiSabi mira a oscurare la corrispondenza tra input e output, secondo le proprie ipotesi. | Controlla partecipazione, costi e destinazione; mantieni Tor attivo. Non equiparare il funzionamento senza custodia alla protezione da ogni osservatore attivo. |
| Richiedere offerte di acquisto/vendita e convalidare un indirizzo | I parametri delle offerte includono paese, valuta, importo e metodo di pagamento scelti, dove applicabile. La convalida dell'indirizzo invia l'indirizzo proposto al servizio di acquisto/vendita prima del completamento di un ordine. | Considera questa divulgazione prima di continuare, anche se in seguito abbandoni l'acquisto o la vendita. |
| Creare o proseguire un ordine di acquisto/vendita | L'integrazione invia i dettagli dell'ordine e un indirizzo di ricezione o rimborso, poi apre la procedura del fornitore. Il fornitore può richiedere informazioni di pagamento, contatto o identità secondo i propri termini. | Leggi i termini attuali del fornitore scelto e fornisci solo ciò che intendi. Ginger non trasforma un acquisto collegato alla tua identità in uno anonimo. |
| Usare la 2FA facoltativa di Ginger | La verifica del normale avvio invia un codice dell'autenticatore insieme a un identificatore dell'installazione. Il servizio restituisce la chiave usata per il livello aggiuntivo di cifratura dei file del portafoglio. | Decidi se quella protezione dell'accesso e la dipendenza dal servizio fanno per te. Conserva in modo indipendente le parole di recupero e l'eventuale passphrase originale. |
| Partecipare ai controlli di Secret Hunt | I controlli di eventi ammissibili possono inviare un ID del round, un ID della transazione, un outpoint dell'input e una prova del controllo dell'input. Un outpoint identifica uno specifico output di una transazione precedente. | Apri **Secret Hunt** e controlla l'interruttore descritto come **Enable/disable the use of this wallet for Secret Hunt.** È attivo per impostazione predefinita, anche se gli eventi pertinenti potrebbero non essere attivi. Disattivarlo non ritira le richieste precedenti. |

Tor non nasconde al servizio destinatario un indirizzo inviato per la convalida, i dettagli di un ordine, un identificatore 2FA o una prova di proprietà di Secret Hunt. Queste osservazioni non significano neppure che il servizio riceva parole di recupero o autorità di spesa solo perché vede un identificatore di transazione.

L'identificatore 2FA può associare i tentativi di normale avvio presso quel servizio. La chiave di cifratura restituita fa parte di uno schema aggiuntivo di protezione dei file locali, non è una nuova chiave Bitcoin che sostituisce parole di recupero e passphrase. Non inviare quei segreti né i codici dell'autenticatore ai contatti di assistenza.

<span id="browsers-other-applications-and-people" data-ginger-heading="browser-altre-applicazioni-e-persone" aria-hidden="true"></span>

## Browser, altre applicazioni e persone

| Azione | Cosa può essere divulgato | Abitudine utile |
| --- | --- | --- |
| Aprire un esploratore pubblico | La transazione o l'indirizzo cercato e le informazioni di rete e di sessione del browser | Inizia dalla cronologia locale di Ginger; apri un esploratore solo quando servono le sue informazioni aggiuntive. |
| Usare il sito di un fornitore | Dettagli dell'ordine, informazioni di accesso/pagamento, cookie e osservazioni del browser specifiche del sito | Considera la sessione del browser separatamente dall'impostazione Tor di Ginger. |
| Importare un xpub o usare lo stesso account in un'altra app | Un ramo di indirizzi pubblici o ricerche derivate dal portafoglio, a seconda dell'app | Controlla il comportamento di sincronizzazione e condivisione dei dati prima di importare. «Sola visualizzazione» descrive l'autorità di spesa, non la riservatezza. |
| Condividere un indirizzo in un messaggio o post pubblico | Un legame tra quell'indirizzo e la persona o l'account che lo invia | Condividi un nuovo indirizzo con chi deve pagarti tramite un canale affidabile. |
| Condividere log, file del portafoglio o contenuti dello schermo | A seconda del materiale: percorsi, etichette, indirizzi, identificatori di transazioni/round e forse segreti | Condividi il più piccolo estratto pertinente, dopo averlo controllato. Non inviare mai dati completi del portafoglio o segreti di ripristino solo perché qualcuno li chiede. |

La ricerca sui pagamenti web mostra perché le osservazioni del browser e le informazioni della blockchain vadano considerate insieme. Non stabilisce l'attuale politica di tracciamento di un particolare fornitore Ginger. [Goldfeder e colleghi, When the Cookie Meets the Blockchain](https://arxiv.org/abs/1708.04748)

<span id="local-information-also-needs-protection" data-ginger-heading="anche-le-informazioni-locali-vanno-protette" aria-hidden="true"></span>

## Anche le informazioni locali vanno protette

Etichette, conteggi della privacy e registrazioni degli ordini presso i fornitori possono risiedere nei metadati del portafoglio. Sono utili per decisioni successive e ripristino, ma non sono tutti protetti nello stesso modo delle chiavi di firma. Proteggi il computer, i backup e gli account che possono accedervi. **Discreet Mode** aiuta con i campi sullo schermo supportati; il blocco schermo del sistema operativo protegge più ampiamente dall'accesso incustodito.

Un ripristino dalle parole può recuperare chiavi spendibili senza ripristinare tutte le note private. Eliminare quelle note non cancella informazioni già detenute da un destinatario o un servizio. Prima di cambiare installazione, leggi [migrazione del portafoglio](/it/learn-privacy/wallet-migration/); prima di inviare un pagamento, controlla le [abitudini di privacy](/it/using-ginger/address-reuse/).
