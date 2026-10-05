---
doc_id: "learn-coinjoin.when-to-use"
title: "Quando ha senso CoinJoin?"
description: "Valuta se CoinJoin affronta il tuo problema di privacy in Bitcoin, quanto costa e come pianificare le spese successive."
lang: "it"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Livello della guida: Uso quotidiano. Scegli questa guida quando ti serve eseguire l'attività descritta.

CoinJoin è utile quando ridurre le informazioni sui collegamenti tra transazioni risponde a una preoccupazione che hai davvero. È meno utile quando il problema principale è una frase di recupero rubata, un computer compromesso o informazioni che stai per comunicare direttamente a un fornitore.

<span id="start-with-a-concrete-objective" data-ginger-heading="parti-da-un-obiettivo-concreto" aria-hidden="true"></span>

## Parti da un obiettivo concreto

Per esempio, potresti volere che il destinatario di un pagamento futuro abbia meno visibilità diretta sulla storia di una ricezione già associata alla tua identità. Annota chi conosce già quella ricezione e cosa rivelerà il prossimo pagamento. CoinJoin può modificare il problema dei collegamenti tra transazioni nel mezzo, ma non può annullare la prima divulgazione né impedire la seconda.

Se l'obiettivo è semplicemente proteggere le chiavi mentre detieni bitcoin, un backup utilizzabile per il ripristino e una procedura adeguata con un portafoglio hardware affrontano quel problema più direttamente. Se la preoccupazione è un indirizzo pubblico di ricezione riutilizzato per ogni fattura, interrompi prima il riutilizzo; CoinJoin in seguito non rende private le vecchie ricezioni.

<span id="compare-the-tradeoffs" data-ginger-heading="confronta-i-compromessi" aria-hidden="true"></span>

## Confronta i compromessi

| Situazione | Decisione da valutare |
| --- | --- |
| Molte piccole monete quando le commissioni di mining sono alte | La partecipazione può consumare una quota relativa elevata; controlla le condizioni delle commissioni e valuta di aspettare |
| Un pagamento è dovuto immediatamente | Il completamento di CoinJoin non è programmato; evita di affidarti a un round per rispettare una scadenza precisa |
| Spese a lungo termine da una fonte già associata alla tua identità | Valuta come CoinJoin, indirizzi di ricezione separati e successiva selezione delle monete funzionino insieme |
| Un fornitore richiede identità e prova dell'indirizzo | Quella divulgazione diretta resta; verifica se CoinJoin cambia le informazioni che ti interessano |
| La destinazione è un portafoglio hardware | Verifica l'account di ricezione e la procedura di destinazione pubblicata; non importare le parole di recupero hardware in un portafoglio software con chiavi sul computer (hot wallet) |
| Non puoi mantenere il computer disponibile | La partecipazione automatica richiede connettività e capacità di firma sbloccata durante il round |

Questi sono compromessi, non una raccomandazione a spostare un importo particolare o una garanzia di un risultato finanziario. Usa un importo piccolo e gestibile per imparare la procedura e verificare il conto delle commissioni prima di aumentare l'esposizione.

<span id="set-a-cost-and-attention-budget" data-ginger-heading="stabilisci-un-budget-di-costi-e-attenzione" aria-hidden="true"></span>

## Stabilisci un budget di costi e attenzione

Controlla entrambe le componenti delle commissioni e il funzionamento dei round ripetuti. Decidi quanto sei disposto a spendere per il miglioramento di privacy previsto e quanto spesso controllerai il risultato. Un obiettivo locale di anonimato è un parametro di controllo, non un preventivo di commissioni o una garanzia misurabile riguardo a un avversario.

La soglia di arresto di Ginger può impedire alcune partecipazioni automatiche antieconomiche. La preferenza temporale e la soglia della tariffa di commissione possono ridurre la partecipazione in condizioni costose. Queste impostazioni non sono un limite universale all'importo totale che potresti spendere in molti round.

<span id="plan-the-next-spend" data-ginger-heading="pianifica-la-spesa-successiva" aria-hidden="true"></span>

## Pianifica la spesa successiva

Richiedi una nuova destinazione, conserva etichette locali utili e controlla gli input selezionati. Evita di consolidare istintivamente tutti gli output risultanti solo per semplificare l'aspetto del portafoglio. Se un commerciante o un exchange conoscerà la tua identità, comprendi quella divulgazione prima di pagare.

Non considerare permanente l'accettazione pubblicizzata da un altro fornitore. Un servizio può cambiare politica o fare domande su un trasferimento. Ginger non può certificare l'accettazione futura di una transazione né garantire che CoinJoin elimini tutte le associazioni storiche.

<span id="try-the-released-workflow-deliberately" data-ginger-heading="prova-consapevolmente-la-procedura-pubblicata" aria-hidden="true"></span>

## Prova consapevolmente la procedura pubblicata

Una volta chiariti obiettivo, backup e costi, apri un portafoglio software sincronizzato, controlla **Coinjoin Settings** e decidi tra avvio manuale e **Automatically start coinjoin**. Osserva lo stato ed esamina un round completato nella cronologia. Metti in pausa se il comportamento o la variazione del saldo differiscono da quanto previsto e approfondisci prima di continuare.

Per le ipotesi alla base di quella decisione, leggi [di cosa ti fidi quando usi CoinJoin](/it/learn-coinjoin/trust-and-limits/). Distingue controllo delle chiavi, privacy delle transazioni, disponibilità del servizio e fiducia nel software che esegui.
