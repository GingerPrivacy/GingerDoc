---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin e firma dei messaggi"
description: "Invia una richiesta di pagamento PayJoin, comprendi ciò che sa il destinatario, i tratti riconoscibili dei portafogli e il ripiego sul pagamento ordinario e firma un messaggio circoscritto sul controllo di un indirizzo."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Comprendi prima la normale anteprima di invio, l'importo del destinatario e la commissione.

PayJoin e firma dei messaggi sono strumenti separati. PayJoin cambia il modo in cui è costruita una transazione di pagamento. La firma dei messaggi dimostra il controllo di una chiave per una specifica dichiarazione senza effettuare un pagamento. Nessuna delle due funzioni dovrebbe essere usata come motivo per rivelare le parole di recupero.

<span id="send-a-payjoin-request" data-ginger-heading="invia-una-richiesta-payjoin" aria-hidden="true"></span>

## Invia una richiesta PayJoin

PayJoin è un pagamento collaborativo in cui chi riceve può contribuire con un input. Questo può indebolire l'ipotesi che tutti gli input di un pagamento dall'aspetto ordinario appartengano a un solo mittente. Il destinatario deve fornire un URI di pagamento Bitcoin compatibile contenente un endpoint PayJoin; un normale indirizzo da solo non lo abilita. Il protocollo è descritto nel [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

1. Usa un portafoglio software con fondi spendibili. Questa versione rifiuta le richieste PayJoin per l'invio da portafogli hardware.
2. Incolla l'URI di pagamento completo in **Send**, anziché copiarne solo l'indirizzo. Controlla destinazione e importo tramite lo stesso canale affidabile che useresti per qualsiasi pagamento.
3. Controlla l'anteprima della transazione e l'indicatore PayJoin, poi autorizza il pagamento se importo e commissioni sono accettabili.
4. Controlla la transazione risultante nella cronologia.

L'implementazione pubblicata può ripiegare sulla normale transazione di pagamento se la costruzione PayJoin fallisce. Pertanto, autorizzare questa procedura non garantisce che la transazione trasmessa sia un PayJoin. Non usarla quando il ripiego su un pagamento ordinario violerebbe i tuoi requisiti di privacy.

Usa un endpoint HTTPS compatibile per mainnet. Nella v2.0.26 i controlli degli endpoint rifiutano gli endpoint onion mentre Tor è attivo; una richiesta solo onion non va considerata un percorso supportato. Mantieni Tor attivo e chiedi al destinatario un'alternativa compatibile, anziché disattivare la privacy di rete per forzare la richiesta.

Questa guida riguarda l'invio di una richiesta fornita dal destinatario. La normale procedura **Receive** di Ginger non gestisce un server di ricezione PayJoin e questa versione non offre una procedura utente per configurarne uno.

<span id="what-the-recipient-and-an-observer-learn" data-ginger-heading="cosa-scoprono-il-destinatario-e-un-osservatore" aria-hidden="true"></span>

## Cosa scoprono il destinatario e un osservatore

Il destinatario conosce già la richiesta di pagamento, il suo indirizzo di ricezione e l'importo previsto. Se la richiesta è associata a un ordine collegato alla tua identità, PayJoin non cancella quel collegamento. Durante la negoziazione, il servizio di ricezione vede anche la transazione di pagamento proposta, compresi gli input proposti dal mittente. Non va considerato un soggetto a cui il pagamento stesso sia nascosto.

Un osservatore esterno vede la transazione infine pubblicata su Bitcoin. Un PayJoin riuscito può rendere inaffidabile la comune ipotesi che «tutti gli input appartengano al mittente». Questo beneficio dipende dalla transazione e dalle altre informazioni dell'osservatore; non garantisce che la transazione sia indistinguibile da ogni pagamento ordinario.

Tieni distinti questi soggetti. Un destinatario può conoscere dettagli tramite l'ordine o la negoziazione anche se un osservatore estraneo non può attribuire con certezza gli input della transazione. Un esploratore pubblico delle transazioni può creare un'ulteriore divulgazione se cerchi il pagamento attraverso una sessione del browser collegata alla tua identità.

<span id="wallet-fingerprints-and-the-ordinary-payment-fallback" data-ginger-heading="tratti-riconoscibili-dei-portafogli-e-ripiego-sul-pagamento-ordinario" aria-hidden="true"></span>

## Tratti riconoscibili dei portafogli e ripiego sul pagamento ordinario

I portafogli compiono scelte sui tipi di indirizzo degli input, sulla struttura della transazione e sulla firma. Combinazioni di queste scelte possono lasciare schemi riconoscibili. Una transazione può quindi perdere parte della sua ambiguità anche quando i messaggi del protocollo PayJoin sono validi. Gli [esempi pubblicati di fingerprinting PayJoin](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/) illustrano il problema in particolari combinazioni di portafogli; non dimostrano che Ginger abbia gli stessi problemi e non quantificano la privacy di Ginger.

Come utente, scegli un servizio di ricezione aggiornato e compatibile, verifica la richiesta di pagamento e controlla la commissione e l'importo proposti. Non modificare opzioni di transazione che non conosci solo per imitare un altro portafoglio: una transazione dall'aspetto plausibile non dimostra un buon risultato di privacy.

Se hai bisogno di un pagamento collaborativo, concorda un metodo compatibile con il destinatario prima di autorizzare la procedura di invio di Ginger. Il ripiego sul pagamento ordinario significa che una negoziazione fallita può comunque produrre un pagamento valido. Dopo la trasmissione, non inviare di nuovo solo perché il risultato è poco chiaro; controlla prima la transazione e lo stato del pagamento del destinatario. Una negoziazione PayJoin fallita e un pagamento Bitcoin fallito sono situazioni diverse.

<span id="sign-a-message-for-an-address" data-ginger-heading="firma-un-messaggio-per-un-indirizzo" aria-hidden="true"></span>

## Firma un messaggio per un indirizzo

Alcuni servizi chiedono di dimostrare che controlli un indirizzo di ricezione. Apri il menu del portafoglio e scegli **Sign Message**. Inserisci un indirizzo appartenente a questo portafoglio e la dichiarazione esatta che intendi firmare. Ginger rifiuta gli indirizzi che non gli appartengono. Inserisci il messaggio, scegli **Continue** e copia la firma risultante per il verificatore previsto.

Per un portafoglio hardware, segui la richiesta di firma del dispositivo; la disponibilità dipende dal dispositivo e dal supporto della firma dei messaggi. Un portafoglio in sola visualizzazione senza un dispositivo di firma non può produrre una firma. Devono essere compatibili anche il tipo di indirizzo e il formato di firma supportato dal verificatore.

Leggi il messaggio con la stessa attenzione di una dichiarazione di autorizzazione. Preferisci un testo circoscritto che identifichi destinatario, scopo e data o richiesta di verifica. Non firmare una dichiarazione vuota o di cui non comprendi le conseguenze. Una firma può essere copiata e mostrata ad altri dopo che l'hai condivisa.

La firma di un messaggio non trasferisce bitcoin e non stabilisce la proprietà di ogni indirizzo nel portafoglio. Crea inoltre un collegamento tra l'indirizzo firmato e la persona che il verificatore identifica come te. Se la richiede un exchange, quella divulgazione resta anche dopo un successivo uso di CoinJoin.
