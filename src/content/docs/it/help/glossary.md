---
doc_id: "help.glossary"
title: "Glossario di Bitcoin e Ginger Wallet"
description: "Comprendi i termini usati in Ginger: UTXO, resto, passphrase, CoinJoin, punteggio di anonimato, Tor, PSBT e altro."
lang: "it"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Livello della guida: Uso quotidiano. Scegli questa guida quando ti serve eseguire l'attività descritta.

<span id="amounts-and-transactions" data-ginger-heading="importi-e-transazioni" aria-hidden="true"></span>

## Importi e transazioni

| Termine | Significato per un utente del portafoglio |
| --- | --- |
| Bitcoin / BTC | La rete e la sua unità monetaria. Un portafoglio gestisce chiavi e transazioni anziché conservare monete fisiche. |
| Satoshi / sat | Un centomilionesimo di bitcoin: 100 000 000 sats = 1 BTC. |
| Indirizzo | Una destinazione di pagamento derivata dalle condizioni di spesa. Usane uno nuovo per ogni ricezione. |
| UTXO / moneta | Un output di transazione non speso disponibile a essere speso come input intero. |
| Input | Un riferimento a un output precedente che viene speso. Più input possono finanziare una transazione. |
| Output | Una nuova destinazione e un valore creati da una transazione. |
| Resto | Valore restituito al portafoglio quando gli input selezionati superano il pagamento più la commissione. |
| ID della transazione / txid | Un identificatore di una transazione. Condividerlo rivela di quale transazione pubblica stai parlando. |
| Mempool | L'insieme delle transazioni non confermate di un nodo. Nodi diversi possono avere viste diverse. |
| Conferma | Inclusione in un blocco, seguita da ulteriori blocchi costruiti sopra di esso. |
| Tariffa di commissione | Satoshi pagati per byte virtuale di dimensione della transazione; distinta dalla commissione totale. |
| vByte | L'unità di dimensione usata per confrontare tariffe di commissione tra transazioni con dati witness diversi. |
| RBF | Replace-by-fee: una transazione in attesa può essere sostituita secondo la politica del nodo, comunemente per aumentarne la commissione. |
| CPFP | Child-pays-for-parent: spendere un output con una transazione figlia a commissione maggiore può incentivare anche la conferma della sua transazione madre non confermata. |
| Dust | Un importo troppo piccolo per essere utile secondo una particolare politica o ipotesi di costo. La soglia di un portafoglio e la politica di rete non sono necessariamente uguali. |

<span id="the-network-in-context" data-ginger-heading="la-rete-nel-suo-contesto" aria-hidden="true"></span>

## La rete nel suo contesto

| Termine | Significato per un utente del portafoglio |
| --- | --- |
| Blocco / blockchain | Un insieme di transazioni e la catena di blocchi che si basa sulla cronologia precedente. |
| Miner / prova di lavoro | Un partecipante che assembla blocchi candidati ed esegue il lavoro usato dalle regole di selezione della catena di Bitcoin. |
| Transazione coinbase | La prima transazione di un blocco, che crea la ricompensa di mining consentita; non è collegata a un particolare account di exchange. I suoi output richiedono maturazione prima della spesa. |
| Regole di consenso | Regole applicate da un nodo di convalida per decidere se blocchi e transazioni siano validi. |
| Difficoltà | Una misura che regola la prova di lavoro richiesta per un blocco; non determina il saldo del portafoglio. |
| Mainnet / RegTest | Rispettivamente, la rete Bitcoin reale e una modalità locale di test separata. Le monete non si spostano tra esse. |
| BIP | Una Bitcoin Improvement Proposal, che documenta uno standard o processo proposto. Un BIP pubblicato non significa che ogni portafoglio lo implementi. |
| Portafoglio HD | Un portafoglio deterministico gerarchico che deriva molte chiavi da materiale segreto iniziale e convenzioni. |
| Hash | Un identificatore compatto calcolato dai dati. Un ID di transazione identifica dati, non il nome dell'account di una persona. |
| Fungibilità | L'intercambiabilità pratica delle unità; classificazioni della cronologia da parte di terzi possono influenzarne il trattamento anche quando sono bitcoin validi. |

Lightning, canali di pagamento, costruzione multifirma, configurazione di testnet pubblica/Signet e dettagli interni degli script sono fuori dalle procedure per utenti finali documentate di questa versione. La loro presenza in un glossario generale Bitcoin non stabilisce una funzione di Ginger.

<span id="keys-and-recovery" data-ginger-heading="chiavi-e-ripristino" aria-hidden="true"></span>

## Chiavi e ripristino

| Termine | Significato per un utente del portafoglio |
| --- | --- |
| Chiave privata | Informazione segreta che autorizza la spesa. Non condividerla mai con l'assistenza. |
| Chiave pubblica | Informazione usata per verificare le firme; non è un segreto di spesa, ma può essere comunque sensibile per la privacy. |
| Parole di recupero / frase mnemonica / frase seme | Il backup di parole ordinate da cui le chiavi del portafoglio possono essere ricreate con la passphrase corretta e le convenzioni del portafoglio. |
| Passphrase BIP39 | Testo aggiuntivo usato con le parole di recupero per derivare un portafoglio. Ogni passphrase diversa seleziona chiavi diverse. |
| PIN del dispositivo | Un controllo di accesso al portafoglio hardware. Non è la stessa cosa di una passphrase BIP39. |
| 2FA | Un secondo fattore di autenticazione. Ginger usa un autenticatore e cifratura locale dei file del portafoglio dipendente da un servizio all'avvio. |
| xpub / chiave pubblica estesa | Informazione che può derivare molti indirizzi pubblici correlati. Non può firmare direttamente, ma può esporre l'attività del portafoglio. |
| Percorso di derivazione / account | Una convenzione che identifica un ramo delle chiavi del portafoglio. Gli strumenti di ripristino richiedono convenzioni compatibili. |
| Gap limit / limite di indirizzi inutilizzati | La sequenza di indirizzi inutilizzati tollerata da una scansione di ripristino prima di interrompere la ricerca lungo un ramo. |
| Portafoglio in sola visualizzazione | Una registrazione del portafoglio che può osservare l'attività, ma non ha le chiavi di firma locali. Un dispositivo hardware può fornire separatamente la firma. |
| Portafoglio hardware | Un dispositivo separato progettato per proteggere le chiavi e approvare transazioni supportate. |
| PSBT | Un file di transazione Bitcoin parzialmente firmata che contiene una transazione proposta e informazioni per la firma. |
| SegWit / Taproot | Formati di output e spesa Bitcoin. Gli indirizzi di ricezione nativi mainnet iniziano comunemente rispettivamente con `bc1q` e `bc1p`. |

<span id="privacy-and-ginger" data-ginger-heading="privacy-e-ginger" aria-hidden="true"></span>

## Privacy e Ginger

| Termine | Significato per un utente del portafoglio |
| --- | --- |
| CoinJoin | Una transazione collaborativa con input di più partecipanti, destinata a rendere più difficile dedurre legami di proprietà. |
| WabiSabi | Il protocollo basato su credenziali usato per il coordinamento CoinJoin di Ginger. Non cancella la transazione dalla blockchain. |
| Coordinatore | Un servizio che organizza un round. Può influire su disponibilità e ammissibilità senza normalmente possedere le chiavi private dei partecipanti. |
| Remix | Ulteriore partecipazione CoinJoin con fondi che soddisfano le condizioni di remix del servizio; possono applicarsi ancora commissioni di mining. |
| Punteggio di anonimato | La stima locale di Ginger usata per classificare la privacy delle monete, non un conteggio verificato di persone indipendenti. |
| Insieme di anonimato | Un gruppo concettuale di alternative plausibili. Non è automaticamente identico al punteggio calcolato del portafoglio. |
| Cluster | Indirizzi o monete che un osservatore deduce appartenere allo stesso gruppo. Alcune associazioni sono fatti; altre sono euristiche fallibili. |
| Riutilizzo degli indirizzi | Ricevere più di una volta allo stesso indirizzo, collegando direttamente quelle ricezioni. |
| Controllo delle monete | Esame e selezione consapevole delle monete per un pagamento. |
| Tor | Un sistema di relay di rete che aiuta a separare le connessioni dell'applicazione dall'indirizzo IP dell'utente. |
| Filtro dei blocchi | Un riepilogo compatto usato per identificare blocchi che possono contenere transazioni pertinenti al portafoglio prima di elaborare localmente quei blocchi. |
| Nodo completo | Software che convalida i dati Bitcoin rispetto alle regole di consenso. Ha un ruolo diverso da un coordinatore CoinJoin. |
| PayJoin | Un pagamento collaborativo in cui il destinatario può contribuire con un input. La procedura di invio pubblicata di Ginger ha limiti di compatibilità e può ripiegare sul pagamento ordinario. |
| Discreet Mode | Nascondere i campi sensibili di visualizzazione supportati, non cifratura o blocco del portafoglio. |
| KYC | Il processo di verifica dell'identità di un fornitore. Tor non nasconde informazioni inviate direttamente a esso. |
| Fiat | Valuta emessa da uno Stato, usata per quotazioni o stime visualizzate; distinta dai BTC regolati on-chain. |

Termini come «privato» e «sicuro» descrivono proprietà diverse. Chiedi cosa sia protetto, da chi e in quali condizioni, anziché considerare una delle due parole una garanzia incondizionata.
