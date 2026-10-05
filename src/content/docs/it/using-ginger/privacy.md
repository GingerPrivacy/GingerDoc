---
doc_id: "learn-privacy.who-can-see"
title: "Chi può vedere le mie transazioni Bitcoin?"
description: "Scopri cosa rivela un indirizzo Bitcoin, come si combinano identità e collegamenti tra transazioni e dove possono aiutare gli strumenti di privacy di Ginger."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Livello della guida: Per iniziare. I passaggi essenziali vengono prima; i riferimenti avanzati sono approfondimenti facoltativi.

Le transazioni Bitcoin sono pubbliche, ma il nome del proprietario di un portafoglio non viene scritto automaticamente accanto a ogni indirizzo. La domanda pratica è chi possa collegare un indirizzo o una transazione a te e cosa altro possa dedurre da quel collegamento.

Un cliente può conoscere l'indirizzo della fattura che gli hai dato. Un exchange può conoscere l'indirizzo di prelievo e la tua identità verificata. Chi segue un indirizzo pubblico per donazioni può osservarne le ricezioni. Questi osservatori partono da informazioni diverse, quindi è più utile pensare alla privacy come divulgazione controllata anziché come un unico interruttore anonimo/non anonimo.

<span id="what-the-blockchain-reveals" data-ginger-heading="cosa-rivela-la-blockchain" aria-hidden="true"></span>

## Cosa rivela la blockchain

Le transazioni mostrano input, output, valori e i loro rapporti attraverso la spesa. Un output speso in seguito da un'altra transazione crea un collegamento pubblico. Questo non prova automaticamente chi possieda ogni output: una transazione potrebbe essere un pagamento, un trasferimento tra tuoi portafogli o una transazione collaborativa con più proprietari. La [sezione sulla privacy dell'articolo originale di Bitcoin](https://bitcoin.org/bitcoin.pdf) tratta la separazione tra transazioni pubbliche e identità e il problema dei collegamenti tra chiavi.

Una volta associato un indirizzo a una persona, qualcuno può indagare l'attività collegata. Alcune associazioni sono dirette, come pagamenti ripetuti a un indirizzo. Altre si basano su ipotesi sulla proprietà comune degli input o su quale output sia il resto. Queste ipotesi possono essere errate, ma influire comunque sul modo in cui i servizi classificano le transazioni.

<span id="who-can-learn-what" data-ginger-heading="chi-può-scoprire-cosa" aria-hidden="true"></span>

## Chi può scoprire cosa?

| Osservatore | Informazioni da cui può partire | Cosa puoi controllare |
| --- | --- | --- |
| Chi paga | L'indirizzo che hai fornito e il suo pagamento | Fornisci un nuovo indirizzo per ogni ricezione |
| Un destinatario di pagamento | La tua transazione di pagamento e informazioni dall'acquisto | Controlla gli input selezionati ed evita divulgazioni superflue dell'identità |
| Un exchange o fornitore di acquisto | Registrazioni dell'account, dettagli di pagamento, indirizzi di deposito/prelievo | Comprendi le registrazioni del fornitore prima di usarlo |
| Un analista della blockchain pubblica | Dati delle transazioni più etichette ottenute altrove | Evita di creare collegamenti facili; valuta CoinJoin e le successive abitudini di spesa |
| Un servizio di rete contattato | Contenuti delle richieste e potenzialmente metadati di connessione | Mantieni Tor attivo dove supportato e comprendi le divulgazioni specifiche delle funzioni |
| Chi accede al computer o ai backup | File del portafoglio, etichette, indirizzi, log, forse chiavi | Proteggi dispositivo, backup per il ripristino e metadati locali |

Nessuna singola impostazione del portafoglio affronta ogni riga. Un portafoglio hardware aiuta a proteggere le chiavi, ma non nasconde un indirizzo pubblico. Tor aiuta con i metadati di connessione, ma non nasconde informazioni digitate nel modulo di un fornitore.

<span id="why-this-matters-in-ordinary-life" data-ginger-heading="perché-conta-nella-vita-quotidiana" aria-hidden="true"></span>

## Perché conta nella vita quotidiana

Se fatturi a più clienti sullo stesso indirizzo, ogni cliente può vedere le ricezioni destinate a quell'indirizzo, compresi i pagamenti degli altri clienti. Un nuovo indirizzo evita quell'identificatore direttamente condiviso. Non impedisce automaticamente collegamenti successivi se spendi tutte le ricezioni insieme.

Se paghi qualcuno con fondi associati a una campagna pubblica di donazioni, la transazione può rivelare più contesto del solo importo del pagamento. Annotare quali monete appartengano a quali attività aiuta a fare una scelta informata prima di spendere.

La privacy finanziaria può proteggere riservatezza dei clienti, informazioni commerciali, relazioni personali e sicurezza fisica. Volere questi confini non richiede di aver fatto qualcosa di sbagliato. La domanda pertinente è se un'altra persona abbia bisogno di accedere alle informazioni per completare l'interazione.

<span id="privacy-and-fungibility" data-ginger-heading="privacy-e-fungibilità" aria-hidden="true"></span>

## Privacy e fungibilità

Fungibilità significa che le unità possono essere scambiate a condizioni equivalenti. Le regole delle transazioni Bitcoin tengono conto dei valori, ma persone e servizi possono classificare diversamente gli output in base alle loro storie apparenti. Questi giudizi possono introdurre attriti anche quando un output è valido secondo le regole Bitcoin.

Gli strumenti di privacy possono rendere più difficile stabilire con certezza alcune classificazioni storiche. Non possono obbligare un fornitore ad accettare un trasferimento o cancellare una registrazione che possiede già. Tratta con cautela le affermazioni su monete «pulite» o accettazione garantita: la stima di privacy del portafoglio e la politica di un servizio sono cose diverse.

<span id="where-ginger-fits" data-ginger-heading="il-ruolo-di-ginger" aria-hidden="true"></span>

## Il ruolo di Ginger

Ginger offre ricezione a nuovi indirizzi, etichette locali, controllo delle monete, integrazione Tor, sincronizzazione del portafoglio con filtri compatti e CoinJoin. Questi strumenti consentono di ridurre divulgazioni particolari ed esaminare un pagamento prima di autorizzarlo. Il programma desktop supporta anche procedure con portafogli hardware per proteggere le chiavi.

Inizia ricevendo a un nuovo indirizzo e comprendendo le monete esistenti. Se ti interessa la privacy dei collegamenti tra transazioni, scopri cosa CoinJoin può e non può cambiare prima di attivare round automatici. Per le scelte quotidiane, prosegui con [Abitudini di privacy prima e dopo un pagamento](/it/using-ginger/address-reuse/).

L'obiettivo è un miglioramento consapevole per la tua situazione. Ginger non può cancellare informazioni già raccolte da un exchange, promettere l'accettazione da parte di ogni servizio o impedire che una divulgazione volontaria successiva crei un nuovo collegamento.
