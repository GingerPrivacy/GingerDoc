---
doc_id: "coinjoin.use-coinjoin"
title: "Usa CoinJoin in Ginger Wallet"
description: "Avvia, metti in pausa e monitora CoinJoin in Ginger, comprendi i fondi ammissibili ed evita di interrompere un round attivo."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

<span id="what-is-a-coinjoin"></span>
<span id="what-are-the-fees-for-coinjoins"></span>
<span id="do-i-need-to-trust-ginger-with-my-coins"></span>

> Livello della guida: Per iniziare. I passaggi essenziali vengono prima; i riferimenti avanzati sono approfondimenti facoltativi.

CoinJoin crea una transazione Bitcoin con altri partecipanti per rendere più difficile dedurre il rapporto tra input e output. Ginger firma solo per gli input del tuo portafoglio; non invii un deposito a un account controllato dal coordinatore. I round riusciti costano comunque commissioni e non garantiscono l'anonimato.

<span id="before-starting" data-ginger-heading="prima-di-iniziare" aria-hidden="true"></span>

## Prima di iniziare

Apri un portafoglio software di cui hai creato il backup e lascialo sincronizzare. Tieni disponibili bitcoin confermati, mantieni il computer connesso e controlla il costo previsto prima di avviare. I round riusciti hanno commissioni di mining e possono anche avere una commissione del coordinatore; i round ripetuti possono aggiungere costi. Il [riferimento avanzato sui costi](/it/using-ginger/annonset/) facoltativo spiega il calcolo. Un portafoglio hardware può ricevere e inviare pagamenti ordinari, ma non può essere la fonte di firma del processo CoinJoin automatico di Ginger.

La commissione del coordinatore viene controllata per ogni moneta usata come input nel round. Le monete di valore pari o inferiore a 0.03 BTC (3 000 000 satoshi) non pagano la commissione del coordinatore. Le monete maggiori pagano normalmente lo 0.3% dell'intero valore, anche se i remix idonei possono essere esenti. Le commissioni di mining si applicano comunque, anche quando la commissione del coordinatore è zero.

Al portafoglio servono fondi confermati e utilizzabili e condizioni di round adatte. Non esistono saldo o tempo di attesa che garantiscano un avvio immediato. Leggi lo stato attuale prima di cambiare le impostazioni.

<span id="start-and-pause" data-ginger-heading="avvia-e-metti-in-pausa" aria-hidden="true"></span>

## Avvia e metti in pausa

1. Apri **Coinjoin Settings** dal menu del pannello di controllo CoinJoin oppure trovalo con la ricerca di Ginger mentre il portafoglio è aperto.
2. Controlla le preferenze di costo del portafoglio e lascia la destinazione degli output impostata su questo portafoglio per la procedura ordinaria. Obiettivi personalizzati e instradamento degli output sono trattati nella guida facoltativa alle impostazioni avanzate.
3. Attiva **Automatically start coinjoin** se vuoi partecipazione senza intervento quando le condizioni lo consentono. Per avviare manualmente, usa il comando di avvio del pannello di controllo CoinJoin. Il pannello di controllo fermo può mostrare **Press Play to start**.
4. Osserva lo stato sotto il pannello di controllo CoinJoin. Il portafoglio può attendere conferme, un round adatto o commissioni più economiche prima di partecipare.
5. Usa il comando di pausa del pannello di controllo CoinJoin quando vuoi fermare ulteriore partecipazione. Lascia terminare ogni fase critica della transazione. Disattivare l'avvio automatico cambia il comportamento futuro; non annulla una transazione già trasmessa.

Non inviare bitcoin a un indirizzo fornito da chi sostiene di «attivare» CoinJoin. Non esiste un pagamento di attivazione separato a un agente dell'assistenza.

<span id="read-the-status" data-ginger-heading="leggi-lo-stato" aria-hidden="true"></span>

## Leggi lo stato

| Messaggio | Significato e passaggio successivo |
| --- | --- |
| **Awaiting auto-start of coinjoin** | Il ritardo di avvio automatico è in corso. Mantieni aperto il portafoglio. |
| **Awaiting confirmed funds** | Attendi la conferma di fondi in entrata ammissibili. |
| **Awaiting cheaper coinjoins** | Le preferenze di costo tengono il portafoglio fuori dai round attuali. Controlla le impostazioni prima di renderle meno restrittive. |
| **Skipping a round for better privacy** | Il salto casuale è attivo. Non è un errore di connessione. |
| **Awaiting other participants** | La registrazione è in corso. Anche gli altri partecipanti devono completare i propri passaggi. |
| **Awaiting the blame round** | Il tentativo precedente non è riuscito a terminare; il protocollo riprova con partecipanti ammissibili. Non ti chiede di identificare qualcuno. |
| **Insufficient participants, retrying...** | Il tentativo non ha raggiunto la partecipazione richiesta. Attendi un altro round. |
| **Awaiting closure of send dialog** | Completa o chiudi la procedura di pagamento prima di aspettarti la ripresa di CoinJoin. |
| **Coinjoin may be uneconomical** | La soglia di arresto è rilevante. Aggiungere fondi o ignorarla manualmente è una scelta con costi, non una riparazione obbligatoria. |
| **Coinjoin successful! Continuing...** | Un round è riuscito. Possono seguire altri round se il portafoglio ha ancora lavoro da fare. |

Per messaggi di rifiuto, connessione e ammissibilità, conserva il testo esatto dell'errore. Reinstallare Ginger o creare nuove parole di recupero non è una risposta normale a uno stato di attesa.

<span id="keep-the-wallet-available" data-ginger-heading="mantieni-disponibile-il-portafoglio" aria-hidden="true"></span>

## Mantieni disponibile il portafoglio

Il portafoglio richiede chiavi disponibili mentre partecipa. Un portafoglio software protetto da passphrase deve essere aperto prima di poter firmare. L'autenticazione a due fattori protegge l'avvio; non chiede all'autenticatore di approvare ogni round.

La sospensione, una connessione internet persa o una chiusura forzata possono interrompere un round. Se una transazione era già stata trasmessa, chiudere l'applicazione non la annulla. Riapri Ginger, lascialo sincronizzare e controlla la cronologia prima di presumere un errore o ripetere un'azione. Non inviare mai un secondo pagamento solo perché l'applicazione si è chiusa durante il primo.

La finestra può chiudersi mentre Ginger resta in background, a seconda delle impostazioni generali. Per una chiusura completa, usa la normale azione di uscita e lascia terminare ogni fase critica.

<span id="spend-after-coinjoin" data-ginger-heading="spendi-dopo-coinjoin" aria-hidden="true"></span>

## Spendi dopo CoinJoin

Una volta utilizzabili, puoi spendere le monete risultanti come altri bitcoin. La transazione CoinJoin resta pubblica. Combinare monete private e non private non correlate, riutilizzare un indirizzo o divulgare una transazione a un servizio che conosce la tua identità può creare nuovi collegamenti. Controlla le monete selezionate e il resto quando effettui un pagamento; un CoinJoin precedente non rende privata ogni azione futura.

<span id="you-do-not-need-to-manage-the-protocol" data-ginger-heading="non-devi-gestire-il-protocollo" aria-hidden="true"></span>

## Non devi gestire il protocollo

Ginger gestisce registrazione, firma e nuovi tentativi. Se i controlli di base dello stato non spiegano ciò che vedi, usa i riferimenti avanzati facoltativi: [dettagli dei round](/it/coinjoin/round-details/), [impostazioni personalizzate](/it/coinjoin/settings/) e [commissioni e avanzamento della privacy](/it/using-ginger/annonset/).
