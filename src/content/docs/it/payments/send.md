---
doc_id: "payments.send"
title: "Invia bitcoin e controlla le commissioni"
description: "Prepara un pagamento Ginger, verifica destinatario e importo, comprendi le tariffe di commissione e il resto e autorizza la transazione."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Livello della guida: Per iniziare. I passaggi essenziali vengono prima; i riferimenti avanzati sono approfondimenti facoltativi.

Ginger non può richiamare un pagamento Bitcoin confermato. Prima di confermare, verifica il destinatario tramite un canale affidabile e controlla l'intera destinazione, l'importo e la commissione. Inizia con un piccolo pagamento quando impari una nuova procedura.

<span id="prepare-a-payment" data-ginger-heading="prepara-un-pagamento" aria-hidden="true"></span>

## Prepara un pagamento

1. Apri il portafoglio che contiene i fondi e scegli **Send**. Scegli **Automatic** per la normale procedura di pagamento. Puoi imparare separatamente la selezione manuale delle monete quando ti serve.
2. Inserisci l'indirizzo Bitcoin o l'URI di pagamento del destinatario in **To:**. Una richiesta di pagamento può includere l'importo; controllalo dopo averla incollata. Se l'azione **Scan QR Code** è disponibile sulla tua piattaforma, puoi usare la fotocamera e poi controllare la destinazione decodificata.
3. Inserisci l'importo e un'etichetta informativa per il destinatario. Controlla se la visualizzazione è in BTC o in valuta fiat. Una stima fiat cambia con il tasso di cambio e non è l'importo trasferito dalla rete Bitcoin.
4. Scegli **Continue** e controlla l'anteprima della transazione, i fondi selezionati, eventuali suggerimenti per la privacy e il resto previsto. Un suggerimento che modifica l'importo è appropriato solo se soddisfa ancora la richiesta del destinatario.
5. Controlla la commissione e il tempo stimato per la conferma. Scegli **Confirm** quando i dettagli sono corretti, poi completa l'eventuale autorizzazione con passphrase o dispositivo hardware.
6. Controlla nella cronologia la transazione trasmessa. Se il risultato è incerto dopo un errore di rete, esamina la cronologia prima di avviare un altro pagamento.

Inviare tutti i fondi disponibili può detrarre la commissione da ciò che il destinatario riceve. Le richieste con importo fisso e PayJoin hanno vincoli diversi. L'anteprima è il punto in cui controllare l'importo effettivo del destinatario, anziché presumere che l'intero saldo possa arrivare alla destinazione.

<span id="check-the-fee-without-custom-settings" data-ginger-heading="controlla-la-commissione-senza-impostazioni-personalizzate" aria-hidden="true"></span>

## Controlla la commissione senza impostazioni personalizzate

Controlla la commissione totale e la preferenza di conferma stimata nell'anteprima. Una commissione paga lo spazio della transazione; non è semplicemente una percentuale del pagamento. La stima del tempo può cambiare e non è una garanzia.

Usa una stima di commissione disponibile che comprendi. Se le stime non sono disponibili e non sai cosa scegliere, aspetta e approfondisci anziché indovinare una commissione personalizzata molto alta.

<span id="the-leftover-money-is-change" data-ginger-heading="il-denaro-avanzato-è-il-resto" aria-hidden="true"></span>

## Il denaro avanzato è il resto

Il pagamento può usare una porzione di bitcoin maggiore dell'importo del destinatario più la commissione. Il valore avanzato torna al portafoglio come resto, talvolta a un indirizzo che non hai mai visto. Lo controlli ancora tu; non devi reinviarlo manualmente.

Un suggerimento per la privacy può cambiare l'importo proposto per il destinatario. Accettalo solo se soddisfa ancora la sua richiesta. In particolare, non pagare meno del dovuto su una fattura fissa per evitare il resto.

Riferimento avanzato facoltativo: [tariffe di commissione personalizzate e resto](/it/using-ginger/fee/), oppure [controllo manuale delle monete e cronologia delle transazioni](/it/payments/coin-control-history/).

<span id="when-a-payment-cannot-be-prepared" data-ginger-heading="quando-non-è-possibile-preparare-un-pagamento" aria-hidden="true"></span>

## Quando non è possibile preparare un pagamento

Fondi insufficienti può significare che il valore spendibile dopo le commissioni non basta, anche se il saldo totale visualizzato sembra sufficiente. I fondi possono anche essere non confermati, impegnati in una fase critica di CoinJoin o parte di una catena non confermata che al momento non può essere estesa.

L'assenza dell'azione di invio durante il ripristino è prevista. Un portafoglio in sola visualizzazione non può firmare autonomamente. Gli indirizzi e le fatture Lightning non sono supportati da questa versione; richiedi un indirizzo di pagamento Bitcoin on-chain.
