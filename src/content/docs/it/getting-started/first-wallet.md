---
doc_id: "getting-started.first-wallet"
title: "Crea e apri il tuo primo portafoglio Ginger"
description: "Crea un portafoglio Bitcoin, annota le parole di recupero e la passphrase e comprendi la prima sincronizzazione e le impostazioni CoinJoin."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Crea il tuo primo portafoglio
prev:
  link: /getting-started/install/
  label: Installa Ginger Wallet
next: false
---

> Livello della guida: Per iniziare. I passaggi essenziali vengono prima; i riferimenti avanzati sono approfondimenti facoltativi.

Un portafoglio Ginger contiene le informazioni necessarie a riconoscere e spendere i tuoi bitcoin. I bitcoin stessi sono registrati sulla rete Bitcoin. Se perdi il computer puoi recuperare il portafoglio con il backup corretto; perdere sia il portafoglio sia le informazioni per ripristinarlo può invece rendere impossibile il recupero.

<span id="create-a-software-wallet" data-ginger-heading="crea-un-portafoglio-software" aria-hidden="true"></span>

## Crea un portafoglio software

1. Apri la schermata per aggiungere un portafoglio e scegli **New**. Se viene richiesto **Wallet Name**, scegli un nome che distingua questo portafoglio dagli altri. Il primo portafoglio può ricevere un nome generato automaticamente senza mostrare questo passaggio.
2. Ginger mostra dodici **Recovery Words** in inglese. Annotale nell'ordine visualizzato e conservale offline. Non fotografarle, non inserirle in email e non condividerle con l'assistenza. Ginger non le mostrerà di nuovo dopo la creazione.
3. Prosegui con **Confirm Recovery Words** e seleziona le parole richieste dal backup scritto. Questo verifica che tu abbia annotato la sequenza, anziché limitarti a riconoscere le parole sullo schermo.
4. Alla schermata **Add Passphrase**, inserisci e conferma una passphrase oppure lascia vuoti entrambi i campi se scegli consapevolmente un portafoglio senza passphrase. Annota se ne hai usata una. Una passphrase non vuota è necessaria sia per il ripristino sia per aprire il portafoglio protetto; non è una password che Ginger può reimpostare.
5. Completa eventuali richieste relative ai termini di servizio. Lascia che il portafoglio si connetta e si sincronizzi prima di fare affidamento sul saldo.

Il nome del portafoglio è un'etichetta locale. Non è una credenziale di ripristino e non modifica le chiavi. Rinominare un portafoglio non equivale a crearne uno nuovo.

<span id="decide-how-to-use-coinjoin" data-ginger-heading="decidi-come-usare-coinjoin" aria-hidden="true"></span>

## Decidi come usare CoinJoin

Ginger può mostrare una richiesta di personalizzazione delle impostazioni CoinJoin. Controlla impostazioni e commissioni prima di lasciare fondi disponibili per CoinJoin automatico. In **Coinjoin Settings**, **Automatically start coinjoin** determina se il portafoglio avvia la partecipazione senza premere il comando di avvio del pannello di controllo CoinJoin. Controlla l'interruttore effettivo del tuo portafoglio; un portafoglio importato o configurato in precedenza può avere impostazioni diverse.

CoinJoin consuma commissioni di transazione e può richiedere tempo. Ricevere bitcoin, inviare un normale pagamento e usare CoinJoin sono azioni separate. Puoi prima imparare a ricevere e inviare con un piccolo importo la cui perdita sarebbe gestibile.

<span id="open-an-existing-wallet" data-ginger-heading="apri-un-portafoglio-esistente" aria-hidden="true"></span>

## Apri un portafoglio esistente

Seleziona il suo nome nell'elenco dei portafogli di Ginger. Inserisci la passphrase originale se richiesta. Se hai attivato l'autenticazione a due fattori dell'applicazione, completa la richiesta all'avvio prima di aprire i singoli portafogli. Un portafoglio hardware usa la procedura di autorizzazione del dispositivo anziché un segreto del portafoglio software sul computer.

Per aggiungere un portafoglio dalle parole di recupero, scegli **Recover** nella schermata per aggiungere un portafoglio. Per caricare un backup JSON compatibile o un'esportazione hardware supportata, scegli **Import File**. Non incollare le parole di recupero nella finestra di importazione di file e non importare le parole di recupero di un portafoglio hardware solo per collegare il dispositivo.

<span id="know-when-the-wallet-is-ready" data-ginger-heading="riconosci-quando-il-portafoglio-è-pronto" aria-hidden="true"></span>

## Riconosci quando il portafoglio è pronto

La sincronizzazione trova le transazioni appartenenti al portafoglio. Finché non termina, il saldo o la cronologia possono essere incompleti. Un portafoglio ripristinato può nascondere le normali azioni di ricezione o invio durante la ricerca. Un pagamento in entrata non confermato è stato rilevato, ma non è ancora stato incluso in un blocco.

Prima di ricevere un importo significativo, verifica che il portafoglio si apra, che il backup per il ripristino sia leggibile e che tu comprenda la scelta della passphrase. Usa **Wallet Settings** → **Tools** → **Verify Recovery Words** con il pulsante **Verify** per controllare le parole di un portafoglio software accessibile. Questo verifica un backup; non rivela parole dimenticate.

<span id="close-safely" data-ginger-heading="chiudi-in-sicurezza" aria-hidden="true"></span>

## Chiudi in sicurezza

Chiudere la finestra può lasciare Ginger in esecuzione se **Run in background when window closed** è attivo in **Settings** → **General**. Usa la normale azione di uscita dell'applicazione quando vuoi arrestarla. Durante una fase critica di CoinJoin, lascia che Ginger completi la procedura di chiusura. Forzarne la chiusura può interrompere la partecipazione.

<span id="next-receive-and-send" data-ginger-heading="dopo-ricevere-e-inviare" aria-hidden="true"></span>

## Dopo: ricevere e inviare

Una volta controllato il backup e terminata la sincronizzazione, torna a [Ricevi un primo piccolo pagamento](/it/getting-started/#3-receive-a-small-first-payment). La sezione successiva spiega come effettuare il primo pagamento.
