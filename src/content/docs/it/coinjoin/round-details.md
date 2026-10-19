---
doc_id: "coinjoin.round-details"
title: "Round CoinJoin e ammissibilità degli input"
description: "Comprendi le fasi di CoinJoin in Ginger, l'ammissibilità degli input e i nuovi tentativi quando i normali controlli di avvio, pausa e attesa non spiegano il risultato."
lang: "it"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Comprendi prima i normali comandi di avvio e pausa e il fatto che i round completati costano commissioni.

Inizia dalla [guida ordinaria a CoinJoin](/it/using-ginger/coinjoin/). Ginger gestisce automaticamente il protocollo; questo riferimento serve a comprendere uno stato o un limite specifico.

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="perché-un-saldo-può-non-essere-ammissibile" aria-hidden="true"></span>

## Perché un saldo può non essere ammissibile

Non esistono un tempo di attesa fisso o un saldo minimo universale che garantiscano la partecipazione. L'ammissibilità dipende dai parametri del round, dagli importi delle monete, dallo stato delle conferme, dalle commissioni, dalle esclusioni e dalle impostazioni del portafoglio. Un saldo può superare il valore minimo dell'input senza contenere alcuna moneta ammissibile ed economica da usare.

<span id="what-happens-during-a-round" data-ginger-heading="cosa-succede-durante-un-round" aria-hidden="true"></span>

## Cosa succede durante un round

| Fase | Cosa attende il portafoglio |
| --- | --- |
| Registrazione degli input | Le monete ammissibili vengono proposte per la transazione condivisa. |
| Conferma della connessione | I partecipanti registrati confermano di essere ancora disponibili. |
| Registrazione degli output | I partecipanti definiscono tramite il protocollo gli output che dovrebbero ricevere. |
| Firma | I portafogli controllano la proposta e firmano i propri input. Mantieni Ginger disponibile durante questa fase critica. |
| Blame round, quando necessario | Un nuovo tentativo usa i partecipanti ammissibili della transazione precedente e applica ulteriori controlli di coerenza. |
| Trasmissione | La transazione completata viene inviata ai nodi Bitcoin, poi attende una conferma. |

Queste fasi sono gestite dall'applicazione; non devi scambiare chiavi o coordinarti manualmente con sconosciuti. Il numero di input accettati e output risultanti è determinato dal round e dalla selezione delle monete. Non esiste un numero fisso di input o output da aspettarsi per ogni portafoglio e il saldo totale non promette che tutto possa partecipare a un solo round.

<span id="why-signing-can-stop-a-round" data-ginger-heading="perché-la-firma-può-fermare-un-round" aria-hidden="true"></span>

## Perché la firma può fermare un round

Prima di completare la firma, Ginger controlla la transazione effettivamente proposta, verificando tra l'altro che:

- Tutti gli input registrati da questo portafoglio siano ancora presenti, senza duplicati tra quegli input.
- La transazione contenga abbastanza input e, salvo che la configurazione consenta CoinJoin in solitaria, includa input oltre a quelli registrati da questo portafoglio.
- La tariffa effettiva della commissione di mining sia sufficientemente vicina a quella annunciata per il round, tenendo conto delle differenze di stima.
- Gli output promessi al portafoglio siano presenti con importi almeno pari a quelli attesi.

Le impostazioni relative ai partecipanti o alle commissioni di un round offerto non sostituiscono questi controlli sulla transazione stessa. In particolare, una tariffa troppo inferiore a quella annunciata può non superare i controlli di firma anche se l'importo detratto dal portafoglio sembrava accettabile. Il numero di input indica il numero di monete, non dimostra la presenza di persone indipendenti; consulta [fiducia e limiti di CoinJoin](/it/learn-coinjoin/trust-and-limits/).

Se questi controlli falliscono, Ginger non completa tutte le firme per i propri input. Quando alcuni input registrati dal portafoglio sono ancora presenti nella proposta, non fornisce la firma per uno di essi. È importante perché negare la firma per un input omesso non fermerebbe la transazione proposta. Se non rimane alcun input del portafoglio, non invia firme. Una proposta che contiene un input registrato dal portafoglio duplicato viene rifiutata immediatamente.

Un round può quindi arrivare alla fase di firma e comunque fallire o essere ritentato. Mantieni Ginger disponibile finché non esce dalla fase critica e controlla lo stato risultante prima di tentare un'altra azione con quelle monete. Non cambiare limiti che non conosci soltanto per far proseguire un round rifiutato.

<span id="checks-on-blame-rounds" data-ginger-heading="controlli-sui-blame-round" aria-hidden="true"></span>

## Controlli sui blame round

Quando un round viene interrotto, Ginger porta avanti soltanto le proprie monete per cui sono state inviate firme. Un blame round deve usare input della transazione precedente e mantenere lo stesso importo massimo suggerito per gli input. Ginger verifica questa relazione prima di registrare gli output, oltre a controllare la fase del blame round, il numero minimo di input e i limiti delle commissioni.

Questi controlli limitano ciò che può cambiare durante un nuovo tentativo. Non promettono che un blame round si completi, non stabiliscono chi controlli gli altri input e non trasformano un round fallito nella prova di un attacco.

<span id="inspect-a-completed-round" data-ginger-heading="esamina-un-round-completato" aria-hidden="true"></span>

## Esamina un round completato

Espandi una voce CoinJoin raggruppata nella cronologia e apri i dettagli di un singolo round. Scegli **View transaction** per esaminarne input e output nel visualizzatore di transazioni ridimensionabile. Mostra proprietà, etichette e punteggi di anonimato noti, quando disponibili; i valori sconosciuti non stabiliscono chi possieda le monete di un altro partecipante. Consulta [la guida al visualizzatore di transazioni](/it/payments/coin-control-history/#inspect-inputs-and-outputs) per i dettagli disponibili e le azioni di copia.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="monete-private-e-un-altro-portafoglio-di-destinazione" aria-hidden="true"></span>

## Monete private e un altro portafoglio di destinazione

Il normale avvio rifiuta un portafoglio o un insieme di candidati disponibili le cui monete soddisfano già l'obiettivo di privacy. Selezionare un altro portafoglio di destinazione non forza un round con sole monete private. Controlla le [impostazioni del portafoglio di destinazione](/it/coinjoin/settings/) prima di fare affidamento su una procedura di inoltro.

Per i calcoli dei punteggi e il conto completo dei valori, usa [commissioni e avanzamento della privacy](/it/using-ginger/annonset/).
