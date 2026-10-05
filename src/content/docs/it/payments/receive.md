---
doc_id: "payments.receive"
title: "Ricevi bitcoin e gestisci gli indirizzi"
description: "Genera un indirizzo di ricezione Ginger, scegli SegWit o Taproot dove supportato, assegna etichette ai pagamenti e controlla le conferme."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Livello della guida: Per iniziare. I passaggi essenziali vengono prima; i riferimenti avanzati sono approfondimenti facoltativi.

Usa un nuovo indirizzo di ricezione per ogni pagamento. L'indirizzo indica a chi paga dove inviare bitcoin; non rivela le parole di recupero. Riutilizzarlo, però, consente agli osservatori di collegare pagamenti verso la stessa destinazione.

<span id="request-a-payment" data-ginger-heading="richiedi-un-pagamento" aria-hidden="true"></span>

## Richiedi un pagamento

1. Apri il portafoglio previsto e attendi che il ripristino o la sincronizzazione terminino.
2. Scegli **Receive**. Aggiungi un'etichetta che descriva chi paga o lo scopo, come «Fattura di giugno». Usa dettagli sufficienti a riconoscerla in seguito senza registrare dati personali superflui.
3. Scegli **Generate**. L'azione normale crea un indirizzo SegWit nativo. Se il portafoglio supporta Taproot, l'azione alternativa offre **Taproot**, indicato con **TR**; usalo solo quando chi paga supporta quel tipo di indirizzo.
4. Copia l'indirizzo o condividi il codice QR di ricezione. Per un portafoglio hardware, usa **Show on the hardware wallet** e confronta l'intero indirizzo sul dispositivo prima di darlo a chi paga.
5. Controlla la destinazione dopo averla incollata in un'altra applicazione. Un malware degli appunti può sostituire un indirizzo anche quando il QR originale o la schermata del portafoglio erano corretti.

Sulla mainnet Bitcoin, gli indirizzi di ricezione SegWit nativi iniziano normalmente con `bc1q`; gli indirizzi Taproot iniziano con `bc1p`. Gli indirizzi delle reti di test sono diversi. Se un servizio rifiuta un indirizzo Bitcoin supportato, verifica con quel servizio il supporto della rete e del tipo di indirizzo anziché alterare i caratteri dell'indirizzo.

<span id="labels-and-unused-addresses" data-ginger-heading="etichette-e-indirizzi-inutilizzati" aria-hidden="true"></span>

## Etichette e indirizzi inutilizzati

**Addresses Awaiting Payment** mostra gli indirizzi di ricezione che non hanno ancora ricevuto un pagamento e che sono ancora presenti in quell'elenco. Puoi esaminare i loro codici QR, copiare gli indirizzi, modificarne le etichette o nascondere un indirizzo tramite le azioni disponibili.

Nascondere un indirizzo non lo revoca su Bitcoin. Un pagamento verso un indirizzo generato in precedenza appartiene ancora al portafoglio se ne controlli le chiavi. Gli indirizzi usati possono scomparire dall'elenco in attesa di pagamento per scelta progettuale; questo incoraggia nuovi indirizzi, anziché indicare che le vecchie chiavi siano state eliminate.

Le etichette sono metadati locali del portafoglio, non messaggi scritti nella blockchain o consegnati automaticamente a chi paga. Possono comunque essere esposte attraverso backup, log, esportazioni o condivisione dello schermo. Conserva un backup dei file se le etichette sono importanti per te: le parole di recupero non possono ricostruirle.

<span id="know-when-you-have-been-paid" data-ginger-heading="riconosci-quando-hai-ricevuto-il-pagamento" aria-hidden="true"></span>

## Riconosci quando hai ricevuto il pagamento

La trasmissione di una transazione da parte del mittente, la sua visualizzazione come non confermata in Ginger e la sua inclusione in un blocco da parte di un miner sono eventi distinti. Controlla la cronologia e i dettagli della transazione. Un pagamento non confermato può essere sostituito o non ottenere una conferma; decidi quale livello di certezza delle conferme richiede la situazione prima di fornire qualcosa di irreversibile in cambio.

Ginger può ricevere mentre l'applicazione è chiusa. A chi paga serve un indirizzo valido, non un portafoglio online. Quando la riapri, la sincronizzazione trova la transazione. Un CoinJoin o un pagamento inviato a un altro portafoglio caricato comparirà solo nel portafoglio che controlla i suoi output.

<span id="if-the-payment-is-missing" data-ginger-heading="se-manca-il-pagamento" aria-hidden="true"></span>

## Se manca il pagamento

Chiedi al mittente l'ID della transazione e verifica la destinazione tramite il canale di comunicazione già usato. Controlla il portafoglio selezionato, mainnet rispetto a testnet, lo stato della sincronizzazione e se il mittente abbia effettivamente trasmesso una transazione. Evita di incollare ogni indirizzo in un esploratore pubblico: l'esploratore scopre cosa cerchi.

Se hai ripristinato dalle parole e in passato hai generato molti indirizzi inutilizzati, il limite di indirizzi inutilizzati della scansione può essere rilevante. Una nuova richiesta di ricezione, da sola, non corregge una scansione storica incompleta. Conserva i backup prima di tentare una nuova scansione o un ripristino.
