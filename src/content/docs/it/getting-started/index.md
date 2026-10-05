---
doc_id: "getting-started.start-here"
title: "Inizia qui: i primi passi con Ginger"
description: "Scopri cosa fa Ginger, proteggi il backup per il ripristino e segui un semplice percorso per ricevere e inviare il primo pagamento prima di esplorare le funzioni avanzate facoltative."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Inizia qui
prev: false
next:
  link: /getting-started/install/
  label: Installa Ginger Wallet
---

> Livello della guida: Per iniziare. I passaggi essenziali vengono prima; i riferimenti avanzati sono approfondimenti facoltativi.

Ginger è un'applicazione per ricevere e inviare bitcoin dal computer. Tu controlli le informazioni che consentono di spendere i tuoi bitcoin. Ginger può anche aiutare a rendere più difficile seguire la cronologia dei pagamenti attraverso una funzione facoltativa chiamata CoinJoin.

Puoi prima imparare il normale funzionamento del portafoglio. Per creare un portafoglio software non servono un tuo nodo Bitcoin, un dispositivo hardware o impostazioni avanzate di CoinJoin.

<!-- Conservare i collegamenti alle domande precedentemente pubblicate su questa pagina. -->
<span id="whats-the-officially-supported-operating-systems" aria-hidden="true"></span>
<span id="is-there-an-androidios-version" aria-hidden="true"></span>
<span id="does-ginger-support-altcoins" aria-hidden="true"></span>
<span id="what-are-the-minimal-requirements-to-run-ginger" aria-hidden="true"></span>
<span id="do-i-need-to-run-tor" aria-hidden="true"></span>

<span id="1-install-the-real-application" data-ginger-heading="1-installa-lapplicazione-autentica" aria-hidden="true"></span>

## 1. Installa l'applicazione autentica

Segui [Installa Ginger Wallet](/it/getting-started/install/) e usa i collegamenti ufficiali per il download. Scegli il download per il tuo computer. Non installare un'app per telefono dal nome simile o software inviato da uno sconosciuto che offre assistenza.

Ginger supporta Windows, macOS e Linux; la guida all'installazione elenca le versioni e i processori supportati. Questa versione supporta solo Bitcoin e non ha un'app per Android o iOS. Servono una connessione internet e spazio di archiviazione scrivibile. Tor è incluso, quindi non devi installarlo separatamente.

Esegui i controlli sul download indicati nella guida. Il [riferimento avanzato sulla verifica delle firme](/it/getting-started/verify-download/) separato spiega i controlli da riga di comando quando ti servono.

<span id="what-is-the-password-used-for" aria-hidden="true"></span>

<span id="2-create-a-wallet-and-make-its-backup" data-ginger-heading="2-crea-un-portafoglio-e-il-suo-backup" aria-hidden="true"></span>

## 2. Crea un portafoglio e il suo backup

Segui [Crea il tuo primo portafoglio](/it/getting-started/first-wallet/). Scegli **New**, annota le dodici **Recovery Words** nell'ordine corretto e completa **Confirm Recovery Words**. Mantieni privato il backup scritto e assicurati che resti disponibile anche se perdi il computer.

Alla schermata **Add Passphrase**, comprendi la scelta prima di continuare. Se usi una passphrase, per il ripristino servono sia le parole originali sia quella passphrase esatta. La passphrase protegge anche l'accesso al portafoglio sul computer. Ginger non può reimpostarla. Lasciare vuoti i campi crea un portafoglio senza questa passphrase aggiuntiva; annota quale scelta hai fatto.

Non proseguire con un saldo significativo finché il backup non è leggibile e non riesci ad aprire il portafoglio previsto. Non condividere mai le parole o la passphrase con l'assistenza.

<span id="why-is-it-important-to-use-a-new-address-for-every-payment" aria-hidden="true"></span>

<span id="3-receive-a-small-first-payment" data-ginger-heading="3-ricevi-un-primo-piccolo-pagamento" aria-hidden="true"></span>

## 3. Ricevi un primo piccolo pagamento

Attendi che il portafoglio termini la sincronizzazione: significa controllare la rete Bitcoin alla ricerca delle tue transazioni. Scegli **Receive**, aggiungi un'etichetta utile e genera un indirizzo di ricezione. Condividilo con chi deve pagarti oppure usalo nella procedura di prelievo Bitcoin on-chain di un exchange.

Genera un nuovo indirizzo per ogni pagamento. Riutilizzare un indirizzo rende più facile collegare pagamenti distinti nel registro pubblico di Bitcoin.

Controlla l'intero indirizzo e la rete prima di autorizzare il pagamento. Ginger riceve Bitcoin on-chain; la rete di un altro asset o una fattura Lightning non sono intercambiabili. Una conferma significa che la transazione è stata inclusa in un blocco Bitcoin. Uno screenshot di chi paga, da solo, non costituisce una conferma.

<span id="4-make-a-small-first-payment" data-ginger-heading="4-effettua-un-primo-piccolo-pagamento" aria-hidden="true"></span>

## 4. Effettua un primo piccolo pagamento

Scegli **Send** e usa la selezione **Automatic** per la procedura ordinaria. Inserisci l'indirizzo del destinatario e l'importo, scegli **Continue** e controlla la destinazione, l'importo che il destinatario riceverà e la commissione. Scegli **Confirm** solo quando questi dati sono corretti.

La commissione paga lo spazio occupato dalla transazione Bitcoin. Se parte del denaro selezionato avanza, torna al tuo portafoglio come resto. Non devi reinviare manualmente quel resto. Ginger non può annullare un pagamento confermato.

Dopo un errore di connessione, controlla la cronologia prima di tentare nuovamente il pagamento. Questo aiuta a evitare di pagare due volte quando la prima transazione era già stata inviata.

<span id="5-decide-whether-to-use-coinjoin" data-ginger-heading="5-decidi-se-usare-coinjoin" aria-hidden="true"></span>

## 5. Decidi se usare CoinJoin

CoinJoin combina l'attività di più persone in una transazione Bitcoin condivisa per rendere più difficile dedurre i legami di proprietà. Il portafoglio conserva le proprie chiavi di firma. CoinJoin comporta commissioni, può richiedere tempo e non può cancellare le informazioni che un destinatario o un exchange già conosce.

Controlla **Automatically start coinjoin** in **Coinjoin Settings** per il portafoglio selezionato. Disattiva la partecipazione automatica mentre impari se non vuoi che inizi senza il tuo intervento. Se un round è già attivo, usa il comando di pausa del pannello di controllo CoinJoin e lascia terminare le operazioni critiche.

Puoi ricevere ed effettuare pagamenti ordinari senza attendere che un indicatore di privacy raggiunga il 100%. Per iniziare a usare il portafoglio non devi neppure regolare ogni impostazione avanzata.

<span id="you-have-finished-the-first-use-path" data-ginger-heading="hai-completato-il-percorso-iniziale" aria-hidden="true"></span>

## Hai completato il percorso iniziale

I controlli essenziali sono un backup che consenta il ripristino, il portafoglio previsto, la rete di pagamento corretta, il destinatario e la commissione effettiva. Continua a usare nuovi indirizzi di ricezione e a controllare ogni pagamento.

Torna a questa guida ogni volta che ti serve la lista dei controlli per ricevere e inviare. La sezione **Uso avanzato** è separata da questo percorso iniziale. Per esempio, [Verifica un download di Ginger Wallet](/it/getting-started/verify-download/) spiega in dettaglio i controlli delle firme da riga di comando.
