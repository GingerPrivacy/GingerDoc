---
doc_id: "learn-coinjoin.trust-and-limits"
title: "Di cosa ti fidi quando usi CoinJoin?"
description: "Distingui il controllo delle chiavi Bitcoin, le ipotesi di privacy di CoinJoin, la disponibilità del coordinatore, l'indipendenza dei partecipanti e la verifica del software."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Leggi prima la spiegazione semplice di CoinJoin.

Con Ginger mantieni l'autorità di firma Bitcoin anziché depositare fondi in un saldo controllato da un mixer. Questo risponde a una domanda importante sulla custodia. Privacy, disponibilità e integrità del software comportano ulteriori domande.

Prima di partecipare, identifica l'obiettivo: forse vuoi far sapere meno degli altri tuoi pagamenti a un destinatario, oppure ridurre i collegamenti tra spese future e una ricezione pubblicamente conosciuta. CoinJoin può aiutare la privacy dei collegamenti tra transazioni, ma non può rimuovere informazioni che il destinatario ha già ottenuto da te.

<span id="four-separate-questions" data-ginger-heading="quattro-domande-separate" aria-hidden="true"></span>

## Quattro domande separate

| Domanda | Protezione e ipotesi | Cosa non dimostra |
| --- | --- | --- |
| Chi può spendere? | Il portafoglio firma i propri input dopo aver controllato la transazione proposta. Al coordinatore non servono le tue parole di recupero. | Protezione contro chiavi rubate, malware o una transazione che autorizzi consapevolmente verso la destinazione sbagliata |
| Chi può collegare input e output? | WabiSabi usa credenziali anonime per oscurare i rapporti tra le registrazioni. I dati pubblici delle transazioni e altre osservazioni esistono ancora. | Una garanzia incondizionata contro un coordinatore malevolo, partecipanti collusi o informazioni esterne |
| Chi può fermare l'avanzamento? | Una partecipazione riuscita richiede che il coordinatore, la rete e un numero sufficiente di partecipanti collaborativi completino il round. | Un orario di completamento riservato o un diritto a partecipare a ogni round offerto |
| Quale software sto eseguendo? | Il codice aperto consente l'ispezione; verificare il download aiuta a stabilire l'origine e l'integrità del file ottenuto. | La prova che ogni build sia priva di errori, che il computer non sia compromesso o che un servizio remoto esegua esattamente il codice pubblicato |

L'[articolo WabiSabi, sezione 7](https://cryptoeconomicsystems.pubpub.org/pub/ficsor-wabisabi-coordinated/release/3) tratta separatamente privacy, attacchi attivi e prevenzione del furto. Questa guida applica tale distinzione alle decisioni degli utenti; non è un audit di sicurezza di un portafoglio o coordinatore installato.

<span id="consider-the-observer" data-ginger-heading="considera-losservatore" aria-hidden="true"></span>

## Considera l'osservatore

Un osservatore passivo della blockchain vede input, output, importi e spese successive delle transazioni. Può applicare euristiche e combinare quei dati con informazioni ottenute altrove. Un commerciante conosce in più la propria fattura e il cliente. Un exchange conosce il prelievo o deposito che ha elaborato.

Un partecipante conosce anche i propri input e output, escludendo alcune possibilità. Un coordinatore gestisce le registrazioni e può osservare i tempi del protocollo; un coordinatore attivamente malevolo può influenzare chi partecipa o se i round terminano. Sono capacità diverse, quindi un'affermazione che riguarda solo l'osservazione della blockchain pubblica non va letta come protezione contro tutte queste capacità.

<span id="apparent-participants-are-not-independent-people" data-ginger-heading="partecipanti-apparenti-non-sono-persone-indipendenti" aria-hidden="true"></span>

## Partecipanti apparenti non sono persone indipendenti

Un attacco Sybil significa che un solo soggetto appare come più partecipanti. Se un aggressore controlla la maggior parte dell'attività attorno a un bersaglio, può escludere le proprie monete dalle possibilità considerate. Una transazione può sembrare molto attiva offrendo meno incertezza a quell'osservatore rispetto a quella percepita da un osservatore non informato.

Gli input reali e i costi di mining creano vincoli economici. Non consentono a un normale utente di verificare l'identità indipendente di ogni partecipante. Il numero di input e output, il volume delle transazioni e il punteggio di anonimato del portafoglio non sono quindi un censimento di persone indipendenti.

Round più grandi possono offrire più possibilità, ma contano ancora gli importi, le conoscenze dei partecipanti e le transazioni successive. Non esiste un numero di round o un valore obiettivo che dimostri che un aggressore non abbia scoperto nulla.

<span id="when-the-coordinator-or-connection-is-unavailable" data-ginger-heading="quando-il-coordinatore-o-la-connessione-non-sono-disponibili" aria-hidden="true"></span>

## Quando il coordinatore o la connessione non sono disponibili

Le monete già controllate dalle tue chiavi non diventano un saldo che il coordinatore ti deve. Un tentativo non riuscito prima della trasmissione non le trasferisce di per sé al coordinatore. Durante un round attivo, però, Ginger può dover completare operazioni critiche prima che le monete siano disponibili per un'altra azione; usa il comando di pausa del pannello di controllo CoinJoin e segui lo stato attuale.

Se CoinJoin non può continuare, metti in pausa e controlla il motivo. L'invio ordinario richiede comunque un percorso di firma disponibile, monete spendibili, informazioni sincronizzate e un modo di trasmettere. Un'interruzione del coordinatore da sola non è un motivo per scartare i backup o caricare le parole di recupero su un servizio sostitutivo. La 2FA facoltativa di Ginger ha una propria dipendenza da un servizio durante il normale avvio, quindi mantieni parole e passphrase originale recuperabili in modo indipendente.

Un rifiuto o un round fallito non sono, da soli, prove di un attacco o un giudizio sulla tua identità. Viceversa, un round riuscito non certifica l'onestà del coordinatore. Conserva le registrazioni private pertinenti se un problema concreto richiede un'indagine.

<span id="decisions-you-can-make" data-ginger-heading="decisioni-che-puoi-prendere" aria-hidden="true"></span>

## Decisioni che puoi prendere

1. Ottieni Ginger dalla distribuzione ufficiale e verifica il download. Usa aggiornamenti autenticati e proteggi la macchina che firma.
2. Mantieni Tor attivo per la privacy di rete prevista dal portafoglio. Non nasconde le informazioni che invii esplicitamente al servizio che le riceve.
3. Controlla il portafoglio selezionato, la destinazione degli output, le monete ammissibili e le preferenze di costo. Non aumentare i limiti solo per far tacere un errore non spiegato.
4. Conserva materiale di ripristino indipendente. Non dare mai a un coordinatore o a un contatto di assistenza le parole, la passphrase o le chiavi private per «sbloccare» un round.
5. Controlla il risultato e le spese successive. Un nuovo indirizzo e un punteggio alto non possono annullare una nuova divulgazione a un destinatario che conosce la tua identità.

Un tuo nodo Bitcoin è utile per le funzioni che svolge davvero, come fornire blocchi o stime delle commissioni quando configurato. Non sostituisce il coordinatore CoinJoin e non stabilisce che i partecipanti siano indipendenti. Un portafoglio hardware isola le chiavi, ma non rende privato il grafo delle transazioni.

Per il modello di base della transazione, leggi [CoinJoin spiegato](/it/learn-coinjoin/explained/). Per decidere se è adatto a uno scopo specifico, leggi [quando CoinJoin è utile](/it/learn-coinjoin/when-to-use/). Tratta le forti affermazioni sul prodotto come domande da esaminare: quale osservatore, quali ipotesi, quale versione del software e quali prove?
