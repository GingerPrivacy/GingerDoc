---
doc_id: "help.faq"
title: "Domande frequenti su Ginger Wallet: inizia qui"
description: "Ottieni risposte brevi su fondi mancanti, backup, ripristino, attese e commissioni CoinJoin, pagamenti in sospeso, portafogli hardware e assistenza sicura."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Livello della guida: Per iniziare. Risposte brevi e primi controlli precedono gli approfondimenti avanzati facoltativi.

Inizia dalla domanda più vicina a ciò che vedi. Queste risposte trattano l'uso ordinario e i primi controlli sicuri; le [domande frequenti avanzate](/it/help/advanced-faq/) separate sono un approfondimento facoltativo per impostazioni personalizzate e casi particolari.

- [Inizia qui](#start-here)
- [Ripristino e fondi mancanti](#recovery-and-missing-funds)
- [Connessione e aggiornamenti](#connection-and-updates)
- [Concetti di base di CoinJoin](#coinjoin-basics)
- [Pagamenti e hardware](#payments-and-hardware)
- [Chiedere aiuto in sicurezza](#getting-help-safely)

<span id="start-here" data-ginger-heading="inizia-qui" aria-hidden="true"></span>

## Inizia qui

<span id="what-is-ginger-and-does-it-hold-my-bitcoin" data-ginger-heading="cosè-ginger-e-detiene-i-miei-bitcoin" aria-hidden="true"></span>

### Cos'è Ginger e detiene i miei bitcoin?

Ginger è un'applicazione desktop per ricevere e inviare Bitcoin on-chain, con funzioni facoltative di privacy CoinJoin. Tu controlli le chiavi che autorizzano la spesa; un coordinatore CoinJoin non riceve la custodia solo perché partecipi a un round. Proteggi il computer e il backup per il ripristino, perché il controllo delle chiavi non elimina la possibilità di furto, errori o perdita dell'accesso.

<span id="is-there-an-official-mobile-or-web-wallet" data-ginger-heading="esiste-un-portafoglio-mobile-o-web-ufficiale" aria-hidden="true"></span>

### Esiste un portafoglio mobile o web ufficiale?

La versione v2.0.26 fornisce software desktop per computer Windows, macOS e Linux supportati. Non fornisce un portafoglio Android, iOS o per browser, pagamenti Lightning o altre criptovalute. Parti dal [sito ufficiale di Ginger](https://gingerwallet.io/) e dai collegamenti alle sue versioni; non inserire parole di recupero in un'app o sito solo perché usa il nome Ginger.

<span id="do-i-need-an-account-my-own-node-or-a-hardware-wallet" data-ginger-heading="mi-servono-un-account-un-mio-nodo-o-un-portafoglio-hardware" aria-hidden="true"></span>

### Mi servono un account, un mio nodo o un portafoglio hardware?

No. La normale creazione di un portafoglio software usa informazioni locali di ripristino e non richiede un account cliente, un tuo nodo Bitcoin o un dispositivo hardware. La 2FA facoltativa usa un servizio e i fornitori di acquisto/vendita possono richiedere account o informazioni d'identità, quindi queste funzioni hanno requisiti aggiuntivi.

<span id="do-i-have-to-use-coinjoin-before-receiving-or-sending" data-ginger-heading="devo-usare-coinjoin-prima-di-ricevere-o-inviare" aria-hidden="true"></span>

### Devo usare CoinJoin prima di ricevere o inviare?

No. Ricezione, invio ordinario e CoinJoin sono azioni separate. Controlla **Automatically start coinjoin** in **Coinjoin Settings** se non vuoi partecipazione incustodita mentre impari; se un round è già attivo, mettilo in pausa e lascia terminare le operazioni critiche.

<span id="can-i-buy-bitcoin-in-ginger-or-receive-an-exchange-withdrawal" data-ginger-heading="posso-acquistare-bitcoin-in-ginger-o-ricevere-un-prelievo-da-exchange" aria-hidden="true"></span>

### Posso acquistare bitcoin in Ginger o ricevere un prelievo da exchange?

Puoi usare un nuovo indirizzo da **Receive** per un prelievo Bitcoin on-chain, controllando indirizzo e rete prima di autorizzarlo sull'exchange. Ginger ha anche procedure dei fornitori **Buy** e **Sell** dove disponibili. Controlla termini attuali, quotazione e stato dell'ordine del fornitore selezionato; la conferma d'acquisto del fornitore non è la stessa cosa di una ricezione Bitcoin confermata.

<span id="recovery-and-missing-funds" data-ginger-heading="ripristino-e-fondi-mancanti" aria-hidden="true"></span>

## Ripristino e fondi mancanti

<span id="what-do-i-need-to-back-up" data-ginger-heading="cosa-devo-includere-nel-backup" aria-hidden="true"></span>

### Cosa devo includere nel backup?

Conserva le parole di recupero nell'ordine originale e la passphrase originale esatta se ne hai usata una. Annota che la passphrase era vuota se il portafoglio è stato creato senza passphrase. Questi dati ripristinano l'accesso alle chiavi; le etichette e alcune altre registrazioni locali richiedono un backup separato dei file.

<span id="is-my-passphrase-just-a-password-i-can-reset" data-ginger-heading="la-passphrase-è-solo-una-password-che-posso-reimpostare" aria-hidden="true"></span>

### La passphrase è solo una password che posso reimpostare?

No. Per un portafoglio software Ginger, la passphrase originale contribuisce a determinare quali chiavi Bitcoin vengono ripristinate, oltre a proteggere il segreto memorizzato. Parole diverse o una passphrase diversa possono portare a un portafoglio diverso e valido. Nome del portafoglio, PIN hardware o codice dell'autenticatore non sono sostituti.

<span id="i-have-the-words-but-forgot-the-passphrase-can-ginger-reset-it" data-ginger-heading="ho-le-parole-ma-ho-dimenticato-la-passphrase-ginger-può-reimpostarla" aria-hidden="true"></span>

### Ho le parole ma ho dimenticato la passphrase. Ginger può reimpostarla?

Ginger non può reimpostare la passphrase originale mantenendo le stesse chiavi del portafoglio. Controlla le registrazioni private del backup e conserva ogni installazione in cui resta l'accesso alla spesa. Se puoi ancora spendere ma non riesci a ottenere un backup completo per il ripristino, crea e verifica il backup di un nuovo portafoglio e trasferisci attentamente i fondi; non inviare mai le parole a un presunto aiutante per il recupero.

<span id="can-ginger-show-my-recovery-words-again" data-ginger-heading="ginger-può-mostrare-di-nuovo-le-parole-di-recupero" aria-hidden="true"></span>

### Ginger può mostrare di nuovo le parole di recupero?

La procedura di creazione avvisa che non le mostrerà nuovamente dopo. **Wallet Settings** → **Tools** → **Verify Recovery Words** controlla le parole che fornisci; non rivela un backup dimenticato. Se hai ancora accesso ma il backup è perso, predisponi e verifica il backup di un nuovo portafoglio prima di spostare attentamente i fondi.

<span id="why-is-my-recovered-wallet-empty-or-missing-transactions" data-ginger-heading="perché-il-portafoglio-ripristinato-è-vuoto-o-mancano-transazioni" aria-hidden="true"></span>

### Perché il portafoglio ripristinato è vuoto o mancano transazioni?

Controlla il portafoglio selezionato, parole originali e passphrase esatta e se sincronizzazione e ripristino siano terminati. Un errore di digitazione della passphrase può aprire un altro portafoglio valido senza produrre un errore di password errata. Conserva i vecchi file e confronta una transazione conosciuta prima di cambiare impostazioni; la [risoluzione dei problemi di ripristino](/it/help/troubleshooting/#balance-recovery-and-receiving) fornisce i primi controlli.

<span id="the-sender-says-paid-why-have-i-received-nothing" data-ginger-heading="il-mittente-dice-di-aver-pagato-perché-non-ho-ricevuto-nulla" aria-hidden="true"></span>

### Il mittente dice di aver pagato. Perché non ho ricevuto nulla?

Chiedi l'ID della transazione Bitcoin e controlla indirizzo di ricezione previsto e rete. Un servizio può segnare un ordine come pagato prima di trasmettere la sua transazione Bitcoin e Ginger deve anche sincronizzarsi prima di mostrarla. Controlla transazione e avanzamento locale prima di chiedere al mittente di pagare di nuovo; consulta la [risoluzione dei problemi di ricezione](/it/help/troubleshooting/#balance-recovery-and-receiving).

<span id="will-changing-the-network-make-missing-bitcoin-appear" data-ginger-heading="cambiare-rete-farà-apparire-bitcoin-mancanti" aria-hidden="true"></span>

### Cambiare rete farà apparire bitcoin mancanti?

Usa Main per Bitcoin on-chain reale. Un'altra rete ha monete diverse; selezionarla non sposta o recupera fondi mainnet. Controlla portafoglio previsto e sincronizzazione anziché cambiare rete per far sembrare migliore un indicatore di connessione.

<span id="why-has-a-receiving-address-disappeared-does-it-expire" data-ginger-heading="perché-un-indirizzo-di-ricezione-è-scomparso-scade" aria-hidden="true"></span>

### Perché un indirizzo di ricezione è scomparso? Scade?

Un indirizzo può lasciare l'elenco in attesa di pagamento dopo un pagamento o dopo essere stato nascosto; questo non invalida le chiavi. Un vecchio indirizzo può ancora ricevere bitcoin, quindi conservane il backup. Usa un nuovo indirizzo per ogni nuovo pagamento per evitare di raggruppare direttamente ricezioni su un unico indirizzo pubblico.

<span id="why-are-receive-or-send-missing" data-ginger-heading="perché-mancano-receive-o-send" aria-hidden="true"></span>

### Perché mancano Receive o Send?

Il ripristino può essere ancora in scansione e nascondere le normali azioni del portafoglio finché termina. Anche un portafoglio in sola visualizzazione richiede il proprio dispositivo di firma o un altro percorso di firma supportato per spendere. Controlla tipo del portafoglio e avanzamento prima di reinstallare o creare parole sostitutive.

<span id="i-lost-my-authenticator-or-my-2fa-code-is-rejected-what-now" data-ginger-heading="ho-perso-lautenticatore-o-il-codice-2fa-è-rifiutato-cosa-faccio" aria-hidden="true"></span>

### Ho perso l'autenticatore o il codice 2FA è rifiutato. Cosa faccio?

Controlla la voce corretta dell'autenticatore, l'ora del telefono e la connessione Tor/servizio di Ginger. Conserva i file esistenti del portafoglio e della 2FA; reinstallare non ricrea un segreto dell'autenticatore perso. Parole di recupero più passphrase originale esatta forniscono un percorso indipendente di ripristino delle chiavi; usa la [risoluzione dei problemi 2FA](/it/help/troubleshooting/#2fa-and-hardware) prima di modificare i file.

<span id="connection-and-updates" data-ginger-heading="connessione-e-aggiornamenti" aria-hidden="true"></span>

## Connessione e aggiornamenti

<span id="do-i-need-tor-browser-or-a-vpn-to-make-ginger-work" data-ginger-heading="mi-servono-tor-browser-o-una-vpn-per-far-funzionare-ginger" aria-hidden="true"></span>

### Mi servono Tor Browser o una VPN per far funzionare Ginger?

Ginger include Tor per le normali connessioni del portafoglio; non devi installare Tor Browser solo per eseguire il portafoglio. Un browser separato o una VPN non correggono automaticamente la sincronizzazione Ginger e non nascondono informazioni che invii a un fornitore. Mantieni la normale protezione Tor attiva mentre segui i [controlli di connessione](/it/help/troubleshooting/#connection-or-synchronization).

<span id="why-is-ginger-still-connecting-or-synchronizing" data-ginger-heading="perché-ginger-si-sta-ancora-connettendo-o-sincronizzando" aria-hidden="true"></span>

### Perché Ginger si sta ancora connettendo o sincronizzando?

Una prima scansione o un portafoglio ripristinato possono richiedere tempo, mentre una scansione bloccata può indicare un problema locale o di connessione. Controlla accesso a internet, orologio del computer, spazio libero e ogni nodo configurato; annota lo stato esatto se l'avanzamento si ferma. Segui la [risoluzione dei problemi di connessione](/it/help/troubleshooting/#connection-or-synchronization) anziché riavviare ripetutamente o eliminare i dati del portafoglio.

<span id="why-did-reinstalling-not-reset-a-broken-setting" data-ginger-heading="perché-reinstallare-non-ha-reimpostato-unimpostazione-difettosa" aria-hidden="true"></span>

### Perché reinstallare non ha reimpostato un'impostazione difettosa?

File dell'applicazione e dati del portafoglio sono memorizzati separatamente, quindi una normale reinstallazione può conservare la stessa configurazione e gli stessi portafogli. Conserva i backup e diagnostica l'errore effettivo prima di cambiare dati. Non eliminare l'intera cartella dati come riparazione generale per fondi mancanti o uno stato di attesa.

<span id="coinjoin-basics" data-ginger-heading="concetti-di-base-di-coinjoin" aria-hidden="true"></span>

## Concetti di base di CoinJoin

<span id="why-is-coinjoin-waiting-instead-of-starting" data-ginger-heading="perché-coinjoin-attende-anziché-iniziare" aria-hidden="true"></span>

### Perché CoinJoin attende anziché iniziare?

Leggi lo stato: al portafoglio possono servire conferme, commissioni accettabili, altri partecipanti, una connessione o monete ammissibili. L'attesa non significa di per sé che i fondi siano persi. La [tabella di risoluzione dei problemi CoinJoin](/it/help/troubleshooting/#coinjoin-does-not-start) spiega i messaggi della versione e la prima azione per ciascuno.

<span id="what-is-the-minimum-amount-and-why-are-some-coins-left-behind" data-ginger-heading="qual-è-limporto-minimo-e-perché-alcune-monete-restano-escluse" aria-hidden="true"></span>

### Qual è l'importo minimo e perché alcune monete restano escluse?

Non esiste un saldo totale del portafoglio che garantisca la partecipazione. Ogni moneta disponibile deve soddisfare le condizioni del round e i controlli di ammissibilità e costo del portafoglio; alcune monete piccole, non confermate o escluse possono restare fuori da un round. Non combinare o aggiungere fondi solo per raggiungere un minimo citato in una vecchia guida.

<span id="how-long-will-it-take-and-how-many-rounds-do-i-need" data-ginger-heading="quanto-tempo-servirà-e-di-quanti-round-ho-bisogno" aria-hidden="true"></span>

### Quanto tempo servirà e di quanti round ho bisogno?

Non esistono una durata garantita o un numero universale di round. Contano conferme, commissioni, partecipanti disponibili, monete e obiettivo di privacy selezionato. Controlla lo stato effettivo e i costi completati anziché trattare una preferenza temporale come una scadenza promessa.

<span id="why-did-my-balance-decrease-if-coinjoin-was-described-as-free" data-ginger-heading="perché-il-saldo-è-diminuito-se-coinjoin-era-descritto-come-gratuito" aria-hidden="true"></span>

### Perché il saldo è diminuito se CoinJoin era descritto come gratuito?

L'esenzione dalla commissione del coordinatore non elimina le commissioni di mining Bitcoin e ogni round completato ripetuto può costare denaro. Controlla anche se gli output siano andati a un altro portafoglio e se entrambi i portafogli si siano sincronizzati. Metti in pausa e verifica i conti delle transazioni completate se la variazione non è spiegata; non presumere che ogni diminuzione inattesa sia una commissione normale.

<span id="what-coordinator-fee-does-ginger-currently-advertise" data-ginger-heading="quale-commissione-del-coordinatore-pubblicizza-attualmente-ginger" aria-hidden="true"></span>

### Quale commissione del coordinatore pubblicizza attualmente Ginger?

Con le impostazioni attuali, ogni input pari o inferiore a 0.03 BTC (3 000 000 satoshi) non paga la commissione del coordinatore, compreso un input di esattamente 0.03 BTC. Sopra quella soglia, la commissione è lo 0.3% dell'intero valore dell'input salvo altre esenzioni, come un remix idoneo. La soglia si applica separatamente a ogni input, non al saldo totale del portafoglio. Le commissioni di mining si applicano comunque. Ricontrolla la [spiegazione attuale delle commissioni Ginger](https://gingerwallet.io/) e il round offerto prima di partecipare.

<span id="can-i-stop-coinjoin-or-turn-off-the-computer" data-ginger-heading="posso-fermare-coinjoin-o-spegnere-il-computer" aria-hidden="true"></span>

### Posso fermare CoinJoin o spegnere il computer?

Usa il comando di pausa del pannello di controllo CoinJoin per fermare ulteriore partecipazione e lascia terminare ogni fase critica. Sospensione, perdita di connettività o chiusura forzata possono interrompere un round attivo; usa la normale uscita dell'applicazione e lascia terminare la procedura di chiusura. Una transazione già trasmessa continua su Bitcoin dopo che l'applicazione si chiude.

<span id="why-is-there-a-transaction-when-i-never-pressed-send" data-ginger-heading="perché-cè-una-transazione-se-non-ho-mai-premuto-send" aria-hidden="true"></span>

### Perché c'è una transazione se non ho mai premuto Send?

CoinJoin automatico può creare transazioni condivise dopo che hai attivato la partecipazione, senza un pagamento ordinario tramite **Send** ogni volta. Esamina transazione, output posseduti, commissioni ed eventuale selezione del portafoglio di destinazione anziché presumere che una spesa non spiegata debba essere CoinJoin. Se resta non spiegata o le chiavi possono essere esposte, conserva le registrazioni e proteggi i fondi rimanenti.

<span id="can-i-spend-at-99-and-does-100-mean-i-am-anonymous" data-ginger-heading="posso-spendere-al-99-e-il-100-significa-che-sono-anonimo" aria-hidden="true"></span>

### Posso spendere al 99% e il 100% significa che sono anonimo?

Puoi effettuare un pagamento ordinario quando i fondi sono spendibili e la procedura di invio è disponibile; la percentuale di privacy non è un requisito di spesa Bitcoin. È la stima locale di Ginger secondo l'obiettivo selezionato, non una garanzia su ciò che un'altra persona sa. Un pagamento, un indirizzo riutilizzato o un exchange identificato possono comunque creare un collegamento.

<span id="why-is-the-play-control-missing-when-all-funds-are-private" data-ginger-heading="perché-manca-il-comando-di-avvio-quando-tutti-i-fondi-sono-privati" aria-hidden="true"></span>

### Perché manca il comando di avvio quando tutti i fondi sono privati?

Il normale pannello di controllo manuale può nascondere l'avvio quando tutti i fondi soddisfano l'obiettivo di privacy del portafoglio. Il normale avvio rifiuta anche un insieme disponibile di sole monete private, quindi scegliere un'altra destinazione non forza un altro round. Se vuoi solo spostare quei fondi, valuta invece un pagamento ordinario.

<span id="payments-and-hardware" data-ginger-heading="pagamenti-e-hardware" aria-hidden="true"></span>

## Pagamenti e hardware

<span id="why-is-a-payment-still-pending-after-the-estimated-time" data-ginger-heading="perché-un-pagamento-è-ancora-in-attesa-dopo-il-tempo-stimato" aria-hidden="true"></span>

### Perché un pagamento è ancora in attesa dopo il tempo stimato?

La stima non è una scadenza: transazioni concorrenti e arrivo irregolare dei blocchi influenzano la conferma. Esamina la cronologia; se Ginger offre **Speed Up Transaction**, controlla la commissione aggiuntiva prima di usarlo. Un errore di connessione o un ritardo non sono un motivo per inviare un secondo pagamento al destinatario.

<span id="can-i-cancel-a-payment-or-recover-one-sent-to-the-wrong-address" data-ginger-heading="posso-annullare-un-pagamento-o-recuperarne-uno-inviato-allindirizzo-sbagliato" aria-hidden="true"></span>

### Posso annullare un pagamento o recuperarne uno inviato all'indirizzo sbagliato?

Ginger non può annullare un pagamento confermato. Prima della conferma, può offrire **Cancel Transaction** per una transazione adatta, ma è una sostituzione tentata che può perdere la gara con la conferma. Non promettere a un destinatario che il pagamento originale sia stato annullato finché l'esito non è accertato.

<span id="why-are-there-insufficient-funds-when-my-balance-looks-large-enough" data-ginger-heading="perché-i-fondi-sono-insufficienti-quando-il-saldo-sembra-abbastanza-grande" aria-hidden="true"></span>

### Perché i fondi sono insufficienti quando il saldo sembra abbastanza grande?

Il totale visualizzato non è sempre tutto disponibile da spendere: fondi possono essere non confermati, temporaneamente coinvolti in CoinJoin o insufficienti dopo la commissione. Controlla portafoglio selezionato, importo e anteprima finale. Quando invii l'intero importo disponibile, la commissione può ridurre ciò che arriva, quindi confronta l'importo del destinatario con ogni fattura fissa.

<span id="why-did-my-payment-create-another-address-or-leave-change" data-ginger-heading="perché-il-pagamento-ha-creato-un-altro-indirizzo-o-lasciato-resto" aria-hidden="true"></span>

### Perché il pagamento ha creato un altro indirizzo o lasciato resto?

Un pagamento può spendere una porzione di bitcoin più grande e restituire il valore avanzato al tuo portafoglio come resto. Un nuovo indirizzo di resto è normale e non significa che denaro sia stato inviato a uno sconosciuto. Non devi reinviarlo manualmente; controlla l'intera transazione se un importo resta non spiegato.

<span id="can-i-use-a-hardware-wallet-including-after-coinjoin" data-ginger-heading="posso-usare-un-portafoglio-hardware-anche-dopo-coinjoin" aria-hidden="true"></span>

### Posso usare un portafoglio hardware, anche dopo CoinJoin?

Ginger supporta le procedure documentate di ricezione e firma per portafogli hardware compatibili. Mantieni le parole di recupero hardware nel percorso di ripristino del dispositivo, non nel computer. Un portafoglio hardware può ricevere output CoinJoin ammissibili, ma non è la fonte di firma per il normale CoinJoin di Ginger; questo instradamento facoltativo è una [domanda avanzata](/it/help/advanced-faq/#can-coinjoin-send-directly-to-my-hardware-wallet).

<span id="will-an-exchange-accept-my-bitcoin-after-coinjoin" data-ginger-heading="un-exchange-accetterà-i-miei-bitcoin-dopo-coinjoin" aria-hidden="true"></span>

### Un exchange accetterà i miei bitcoin dopo CoinJoin?

Ginger può preparare un normale pagamento Bitcoin, ma non può garantire l'accettazione o la politica sugli account di un fornitore. Controlla i requisiti attuali dell'exchange previsto prima di inviare o vendere. Un punteggio di privacy alto non è un certificato di accettazione e nessuna operazione aggiuntiva del portafoglio può promettere quel risultato.

<span id="getting-help-safely" data-ginger-heading="chiedere-aiuto-in-sicurezza" aria-hidden="true"></span>

## Chiedere aiuto in sicurezza

<span id="what-can-i-share-with-support-and-where-do-i-report-a-bug" data-ginger-heading="cosa-posso-condividere-con-lassistenza-e-dove-segnalo-un-errore" aria-hidden="true"></span>

### Cosa posso condividere con l'assistenza e dove segnalo un errore?

Usa i collegamenti dal [repository ufficiale di Ginger](https://github.com/GingerPrivacy/GingerWallet/issues) e fornisci versione, sistema operativo, errore esatto e passaggi non segreti. Controlla ogni estratto dei log prima di condividere; non inviare mai parole di recupero, passphrase, codici dell'autenticatore o una cartella dati completa del portafoglio. L'assistenza non richiede una convalida del portafoglio tramite sito o un pagamento di attivazione; consulta [come segnalare un problema utile](/it/help/troubleshooting/#report-a-useful-issue).

<span id="about-this-manual" data-ginger-heading="informazioni-su-questo-manuale" aria-hidden="true"></span>

## Informazioni su questo manuale

Il manuale inglese, da cui deriva questa traduzione, descrive Ginger v2.0.26 e usa le sue etichette d'interfaccia inglesi. Documentazione e traduzioni possono contenere errori. Ginger non ne garantisce l'accuratezza; verifica i dettagli critici nell'applicazione prima di procedere. Se trovi un errore, [segnalalo nel repository della documentazione](https://github.com/GingerPrivacy/GingerDoc/issues) senza includere segreti del portafoglio.
