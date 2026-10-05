---
doc_id: "help.troubleshooting"
title: "Risolvi i problemi di Ginger Wallet"
description: "Diagnostica saldi mancanti, problemi di connessione, stati di attesa CoinJoin, errori 2FA e problemi hardware preservando i dati di ripristino."
lang: "it"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Livello della guida: Uso quotidiano. Scegli questa guida quando ti serve eseguire l'attività descritta.

Inizia dall'errore esatto, dal portafoglio selezionato, dalla rete e dalla versione dell'applicazione. Conserva informazioni di ripristino e file del portafoglio prima di modificare i dati. Reinstallare, eliminare cartelle o creare nuove parole è raramente il primo passo per un problema di connessione o visualizzazione.

<span id="balance-recovery-and-receiving" data-ginger-heading="saldo-ripristino-e-ricezione" aria-hidden="true"></span>

## Saldo, ripristino e ricezione

| Sintomo | Controlla prima | Passaggio successivo |
| --- | --- | --- |
| Il portafoglio ripristinato è vuoto | Parole originali, passphrase esatta, rete, avanzamento della scansione | Confronta indirizzi o cronologia conosciuti dopo la sincronizzazione; usa controlli di ripristino avanzati solo se questi controlli ordinari non lo spiegano |
| Manca un pagamento in entrata | Indirizzo corretto, ID della transazione del mittente, portafoglio selezionato | Controlla trasmissione e conferma, poi sincronizzazione locale |
| Mancano Receive o Send | Il ripristino è ancora attivo? Il portafoglio è in sola visualizzazione? | Attendi il ripristino o usa il dispositivo di firma richiesto |
| Un vecchio indirizzo è scomparso dall'elenco di ricezione | Ha ricevuto un pagamento o è stato nascosto? | Controlla la cronologia; la visibilità nell'elenco non invalida le chiavi |
| Manca solo un pagamento minuscolo | Soglia dust e sincronizzazione | Confronta la soglia configurata prima di presumere un furto di fondi |
| Le etichette sono scomparse dopo il ripristino dalla frase seme | È stato creato un backup del file ATTR corrispondente? | Conserva quel file; le etichette non possono essere ricostruite dalla blockchain |

Non inserire parole di recupero in un sito per «risincronizzare» un portafoglio. Usa la procedura di ripristino del portafoglio installato e verificato solo su un computer affidabile.

<span id="connection-or-synchronization" data-ginger-heading="connessione-o-sincronizzazione" aria-hidden="true"></span>

## Connessione o sincronizzazione

Controlla connettività, orologio del computer, spazio libero e stato di un nodo completo configurato. Una prima scansione può semplicemente richiedere tempo. Se l'avanzamento non cambia mai, chiudi Ginger normalmente e riaprilo una volta. Annota cosa succede anziché riavviare ripetutamente una scansione.

**Awaiting connection** può impedire CoinJoin e altri servizi anche quando il portafoglio ha una cronologia memorizzata. Considera potenzialmente incompleto un saldo senza connessione. Mantieni Tor attivo durante l'indagine. La connessione P2P di un nodo configurato e le stime delle commissioni RPC sono separate; il funzionamento dell'una non prova quello dell'altra.

Se usi **Wallet Settings** → **Tools** → **Resync**, conserva prima i backup e aspettati un'altra scansione. Non eliminare `Wallets`, `WalletBackups` o file 2FA solo per cancellare un messaggio di avanzamento.

<span id="coinjoin-does-not-start" data-ginger-heading="coinjoin-non-si-avvia" aria-hidden="true"></span>

## CoinJoin non si avvia

| Messaggio o condizione | Azione probabile |
| --- | --- |
| **Insufficient funds eligible for coinjoin** | Esamina conferme, importi delle monete, commissioni ed esclusioni; il solo saldo totale non stabilisce l'ammissibilità |
| **Only excluded funds are available** | Controlla **Exclude Coins** se vuoi far partecipare alcune monete |
| **Only immature funds are available** | Attendi la maturazione richiesta; gli output appena creati dal mining hanno regole di spesa speciali |
| **Some funds are rejected from coinjoining** | Leggi il motivo associato e i termini attuali del servizio; un rifiuto non trasferisce la proprietà dei tuoi fondi |
| **Awaiting cheaper coinjoins** | Controlla le preferenze di costo e decidi se attendere sia coerente con l'obiettivo |
| **Coinjoin may be uneconomical** | Controlla soglia di arresto e costi relativi prima di ignorarla manualmente |
| **Awaiting the blame round** | Attendi il nuovo tentativo del protocollo; non è un'istruzione di incolpare un altro utente |
| **Awaiting closure of send dialog** | Completa o chiudi la procedura di invio |
| **Mining fee rate was too high** o **Coordination fee rate was too high** | Attendi o esamina le condizioni offerte; non aumentare ciecamente i limiti |
| Portafoglio hardware di origine | La firma CoinJoin automatica richiede un portafoglio software ammissibile |

I partecipanti di un round possono non terminare oppure una moneta può diventare temporaneamente indisponibile dopo una partecipazione interrotta. Ripetuti tentativi, importazioni o tentativi di eludere il rifiuto di un coordinatore non sono una riparazione. Usa il motivo e lo stato attuale per decidere se attendere o contattare l'assistenza ufficiale.

<span id="payment-or-fee-problems" data-ginger-heading="problemi-di-pagamento-o-commissioni" aria-hidden="true"></span>

## Problemi di pagamento o commissioni

Quando le stime delle commissioni non sono disponibili, attendi, ripara la connessione del fornitore/nodo selezionato o usa una tariffa di commissione scelta manualmente che comprendi. Assicurati che l'importo finale più le commissioni rientri nei fondi spendibili. Una lunga catena di transazioni non confermate può richiedere di attendere conferme precedenti.

Usa **Speed Up Transaction** o **Cancel Transaction** solo quando Ginger li offre e dopo aver controllato la commissione. L'annullamento è un tentativo di sostituire un pagamento in attesa, non l'inversione di un pagamento confermato. Dopo un risultato incerto della trasmissione, controlla la cronologia prima di pagare due volte.

<span id="2fa-and-hardware" data-ginger-heading="2fa-e-hardware" aria-hidden="true"></span>

## 2FA e hardware

Per un codice dell'autenticatore rifiutato, controlla ora del telefono, voce selezionata, compatibilità dell'autenticatore con Ginger e connettività Tor/servizio. Conserva i file esistenti del portafoglio e della 2FA. Se il normale avvio non può essere ripristinato, le parole di recupero più la passphrase originale sono il backup indipendente delle chiavi; reinstallare sugli stessi dati non ricrea un autenticatore perso. Le [domande frequenti avanzate](/it/help/advanced-faq/#does-the-2fa-file-recover-the-wallet-without-the-service) spiegano la dipendenza del file.

Per il rilevamento del dispositivo, usa un solo portafoglio hardware sbloccato, un cavo dati e una porta USB diretta, con applicazioni concorrenti del dispositivo chiuse. Completa i passaggi richiesti di app Bitcoin, PIN o passphrase sul dispositivo. Su Linux, controlla i permessi USB del produttore. Mantieni la frase seme del dispositivo fuori dal computer.

<span id="report-a-useful-issue" data-ginger-heading="segnala-un-problema-utile" aria-hidden="true"></span>

## Segnala un problema utile

Usa i collegamenti dal [repository ufficiale di Ginger](https://github.com/GingerPrivacy/GingerWallet/issues). Includi versione, sistema operativo e processore, errore esatto, risultato previsto e i più brevi passaggi non segreti per riprodurlo. Indica modello e firmware hardware quando pertinenti.

L'azione di ricerca **Logs** di Ginger apre i log diagnostici. Esaminali e oscura i dati prima di condividere: percorsi, indirizzi, ID di transazioni, etichette e informazioni degli ordini possono essere sensibili. Condividi un estratto minimo pertinente, non l'intera cartella dati. Una segnalazione pubblica è pubblica; nessuna richiesta di assistenza dovrebbe richiedere parole di recupero o passphrase.
