---
doc_id: "help.advanced-faq"
title: "Domande frequenti avanzate su Ginger Wallet"
description: "Trova risposte relative alla versione pubblicata di Ginger su scansione di ripristino, metadati, xpub, controllo delle monete, avanzamento della privacy, costi CoinJoin completi, portafogli di destinazione e condivisione dei dati."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Inizia dalle domande frequenti di base se stai configurando o usando un portafoglio per la prima volta.

Queste domande trattano impostazioni personalizzate, scelte di privacy più approfondite e casi particolari di ripristino. Per le normali domande del primo utilizzo, torna alle [domande frequenti di base](/it/help/).

- [Ripristino e dati locali](#recovery-and-local-data)
- [Selezione delle monete e spesa](#coin-selection-and-spending)
- [Costi CoinJoin e avanzamento](#coinjoin-costs-and-progress)
- [Hardware e confini della privacy](#hardware-and-privacy-boundaries)

<span id="recovery-and-local-data" data-ginger-heading="ripristino-e-dati-locali" aria-hidden="true"></span>

## Ripristino e dati locali

<span id="why-can-the-same-words-produce-a-different-wallet" data-ginger-heading="perché-le-stesse-parole-possono-produrre-un-portafoglio-diverso" aria-hidden="true"></span>

### Perché le stesse parole possono produrre un portafoglio diverso?

La passphrase originale partecipa alla derivazione delle chiavi e un'altra applicazione per portafogli può usare un account o tipo di indirizzo diversi. Un insieme valido di parole da solo non stabilisce che le applicazioni mostrino lo stesso account. Controlla prima passphrase originale e avanzamento della scansione; esamina la compatibilità dell'account solo dopo i normali controlli di ripristino.

<span id="when-should-i-increase-the-recovery-gap-limit" data-ginger-heading="quando-dovrei-aumentare-il-limite-di-indirizzi-inutilizzati-del-ripristino" aria-hidden="true"></span>

### Quando dovrei aumentare il limite di indirizzi inutilizzati del ripristino?

Valutalo quando hai elementi che indicano molti indirizzi inutilizzati prima di un indirizzo che ha ricevuto un pagamento, per esempio indirizzi generati in un'altra applicazione. **Advanced Recovery Options** → **Minimum Gap Limit:** estende la scansione e può aumentarne lavoro e durata; la v2.0.26 avvia la schermata di ripristino a 114. Non corregge parole errate, una passphrase errata o un account incompatibile.

<span id="why-did-labels-or-privacy-information-change-after-recovery" data-ginger-heading="perché-etichette-o-informazioni-di-privacy-sono-cambiate-dopo-il-ripristino" aria-hidden="true"></span>

### Perché etichette o informazioni di privacy sono cambiate dopo il ripristino?

Le parole ripristinano le chiavi, non ogni nota privata o elemento di analisi locale delle transazioni. JSON del portafoglio e dati ATTR corrispondenti hanno ruoli diversi; conserva i file originali e usa copie durante l'indagine. Etichette mancanti o un punteggio locale cambiato non provano da soli che una transazione Bitcoin o la sua cronologia pubblica siano cambiate.

<span id="can-i-use-the-same-recovery-words-in-two-wallet-applications" data-ginger-heading="posso-usare-le-stesse-parole-di-recupero-in-due-applicazioni-per-portafogli" aria-hidden="true"></span>

### Posso usare le stesse parole di recupero in due applicazioni per portafogli?

Applicazioni compatibili possono controllare le stesse chiavi, ma questo non crea un nuovo portafoglio e non revoca informazioni condivise con l'applicazione precedente. La seconda app può divulgare indirizzi o una chiave pubblica estesa ai propri servizi e spese contemporanee possono creare confusione su quali monete restino disponibili. Non digitare parole di recupero hardware sul computer solo per collegare un dispositivo.

<span id="what-does-an-exposed-address-or-xpub-allow-someone-to-do" data-ginger-heading="cosa-consente-a-qualcuno-un-indirizzo-o-xpub-esposto" aria-hidden="true"></span>

### Cosa consente a qualcuno un indirizzo o xpub esposto?

Un indirizzo punta a una parte specifica della cronologia pubblica delle transazioni. Una chiave pubblica estesa può rivelare molti indirizzi, anche futuri nel proprio ambito di derivazione, ma normalmente non costituisce autorità di spesa da sola. Nuovi indirizzi sotto lo stesso ramo esposto non revocano quel monitoraggio; segreti di firma esposti richiedono una risposta diversa con nuove chiavi.

<span id="does-the-2fa-file-recover-the-wallet-without-the-service" data-ginger-heading="il-file-2fa-ripristina-il-portafoglio-senza-il-servizio" aria-hidden="true"></span>

### Il file 2FA ripristina il portafoglio senza il servizio?

Non trattare `2fa_info.gws` come una chiave di ripristino offline indipendente. Il normale avvio 2FA usa un identificatore dell'installazione e la verifica dell'autenticatore con un servizio per ottenere il segreto aggiuntivo di cifratura dei file. Conserva in modo indipendente parole e passphrase originale; una chiave copiata non è revocata attivando la 2FA.

<span id="how-do-i-delete-a-local-wallet-without-confusing-deletion-with-revocation" data-ginger-heading="come-elimino-un-portafoglio-locale-senza-confondere-eliminazione-e-revoca" aria-hidden="true"></span>

### Come elimino un portafoglio locale senza confondere eliminazione e revoca?

Crea prima un backup, poi usa **Wallet Settings** → **Tools** → **Delete Wallet** e leggi la conferma. Rimuovere dati locali non cancella le transazioni Bitcoin e non invalida le copie delle parole di recupero. Se le chiavi di firma sono state esposte, eliminare semplicemente il portafoglio non impedisce ad altri di spenderle.

<span id="coin-selection-and-spending" data-ginger-heading="selezione-delle-monete-e-spesa" aria-hidden="true"></span>

## Selezione delle monete e spesa

<span id="what-is-the-difference-between-a-coin-an-address-and-a-wallet" data-ginger-heading="qual-è-la-differenza-tra-una-moneta-un-indirizzo-e-un-portafoglio" aria-hidden="true"></span>

### Qual è la differenza tra una moneta, un indirizzo e un portafoglio?

Una moneta, o UTXO, è un output non speso di una precedente transazione Bitcoin. Un indirizzo può aver ricevuto più monete e un portafoglio può gestire molti indirizzi e monete. Le decisioni di spesa e CoinJoin riguardano le monete disponibili, non solo il saldo totale; il [glossario](/it/help/glossary/) spiega i termini.

<span id="does-combining-coinjoined-coins-always-destroy-all-privacy" data-ginger-heading="combinare-monete-passate-attraverso-coinjoin-distrugge-sempre-tutta-la-privacy" aria-hidden="true"></span>

### Combinare monete passate attraverso CoinJoin distrugge sempre tutta la privacy?

Nessuna regola unica descrive ogni osservatore o pagamento. Una normale spesa congiunta può associare i suoi input, soprattutto se uno era già collegato a un'identità, ma non rivela automaticamente ogni precedente legame di proprietà. Controlla input e resto del pagamento che devi davvero effettuare, anziché trattare «combinare sempre» o «non combinare mai» come una garanzia.

<span id="does-a-reused-address-automatically-publish-my-entire-wallet" data-ginger-heading="un-indirizzo-riutilizzato-pubblica-automaticamente-tutto-il-portafoglio" aria-hidden="true"></span>

### Un indirizzo riutilizzato pubblica automaticamente tutto il portafoglio?

No, ma le ricezioni su quell'indirizzo possono essere esaminate insieme e collegate a chi lo ha pubblicato o fornito. Spese congiunte successive e informazioni detenute altrove possono rivelare altro. Le etichette aiutano le decisioni locali; non impongono una separazione pubblica e non provano che la selezione automatica conserverà il confine previsto.

<span id="does-manual-control-force-exactly-those-inputs-into-the-final-payment" data-ginger-heading="manual-control-forza-esattamente-quegli-input-nel-pagamento-finale" aria-hidden="true"></span>

### Manual Control forza esattamente quegli input nel pagamento finale?

**Manual Control** seleziona monete candidate per un pagamento ordinario. Controlla gli input effettivamente usati nell'anteprima finale, l'importo del destinatario, il resto e la commissione prima di autorizzare. È separato dalla selezione degli input CoinJoin e non imposta un elenco esatto per un round futuro.

<span id="should-i-consolidate-many-small-coins-while-fees-are-low" data-ginger-heading="dovrei-consolidare-molte-piccole-monete-mentre-le-commissioni-sono-basse" aria-hidden="true"></span>

### Dovrei consolidare molte piccole monete mentre le commissioni sono basse?

Il consolidamento può ridurre il numero di input necessari in seguito, ma la transazione che combina costa una commissione e può associare attività prima separate. Una tariffa di commissione inferiore cambia quel costo, non la divulgazione. Considera scopo, valore e storia conosciuta delle monete prima di combinarle.

<span id="why-is-a-tiny-payment-missing-and-does-exclude-coins-freeze-it" data-ginger-heading="perché-manca-un-pagamento-minuscolo-e-exclude-coins-lo-congela" aria-hidden="true"></span>

### Perché manca un pagamento minuscolo e Exclude Coins lo congela?

Controlla sincronizzazione e soglia dust configurata prima di concludere che un minuscolo output sia perso. **Exclude Coins** influisce sulla partecipazione CoinJoin, non sulla spesa ordinaria, e non congela una moneta. Piccole ricezioni inattese non richiedono una risposta immediata; valuta costo di spesa e possibili associazioni prima di includerle in un pagamento.

<span id="can-i-set-any-custom-fee-rate-or-guarantee-a-confirmation-time" data-ginger-heading="posso-impostare-qualsiasi-tariffa-personalizzata-o-garantire-un-tempo-di-conferma" aria-hidden="true"></span>

### Posso impostare qualsiasi tariffa personalizzata o garantire un tempo di conferma?

No. L'editor manuale delle commissioni pubblicato rifiuta tariffe sotto 1 sat/vByte e la politica di rete può richiedere più di quel minimo. Una tariffa personalizzata compete ancora con altre transazioni e non può riservare una scadenza di conferma. Controlla la commissione totale, non solo la tariffa, prima di confermare.

<span id="coinjoin-costs-and-progress" data-ginger-heading="costi-coinjoin-e-avanzamento" aria-hidden="true"></span>

## Costi CoinJoin e avanzamento

<span id="why-can-the-private-balance-percentage-differ-from-overall-progress" data-ginger-heading="perché-la-percentuale-del-saldo-privato-può-differire-dallavanzamento-complessivo" aria-hidden="true"></span>

### Perché la percentuale del saldo privato può differire dall'avanzamento complessivo?

Sono misure locali diverse. L'avanzamento complessivo pondera il punteggio di ogni moneta verso l'obiettivo in base al valore, mentre il saldo privato colorato conta il valore che raggiunge già quell'obiettivo. Nessuno dei due è una probabilità misurata che un osservatore esterno possa identificarti. Le due visualizzazioni possono differire anche quando entrambi i saldi sono corretti.

<span id="why-can-progress-fall-or-change-when-i-adjust-the-target" data-ginger-heading="perché-lavanzamento-può-calare-o-cambiare-quando-regolo-lobiettivo" aria-hidden="true"></span>

### Perché l'avanzamento può calare o cambiare quando regolo l'obiettivo?

Ricevere fondi, spendere monete insieme, ripristinare senza analisi locale o modificare l'obiettivo può cambiare la visualizzazione del portafoglio. Abbassare un obiettivo può riclassificare monete senza cambiare la cronologia pubblicata. Esamina le transazioni e impostazioni coinvolte anziché presumere che una variazione del punteggio provi un furto o garantisca un nuovo risultato di privacy.

<span id="can-i-choose-exactly-which-coins-join-a-round" data-ginger-heading="posso-scegliere-esattamente-quali-monete-partecipano-a-un-round" aria-hidden="true"></span>

### Posso scegliere esattamente quali monete partecipano a un round?

Il client seleziona input ammissibili usando le impostazioni CoinJoin pubblicate. Puoi escludere monete particolari e regolare le preferenze disponibili, ma la normale selezione manuale per l'invio non forza un elenco di input CoinJoin. L'esclusione è associata a quelle monete; non è una regola che riserva ogni ricezione futura dallo stesso indirizzo.

<span id="what-do-rejected-coins-or-a-blame-round-mean" data-ginger-heading="cosa-significano-monete-rifiutate-o-un-blame-round" aria-hidden="true"></span>

### Cosa significano monete rifiutate o un blame round?

Un blame round è un nuovo tentativo del protocollo dopo che il precedente non è riuscito a completarsi; non è un'istruzione di identificare o accusare un altro utente. Un rifiuto o una temporanea indisponibilità richiedono di esaminare il motivo esatto e lo stato attuale. Nessuno dei messaggi trasferisce di per sé il controllo dei fondi al coordinatore; consulta la [tabella degli stati della versione](/it/help/troubleshooting/#coinjoin-does-not-start).

<span id="how-do-i-reconcile-the-full-cost-of-a-round" data-ginger-heading="come-verifico-il-conto-del-costo-completo-di-un-round" aria-hidden="true"></span>

### Come verifico il conto del costo completo di un round?

Somma il valore dei tuoi input spesi e sottrai tutti gli output che possiedi di quella transazione, compresi quelli inviati a un altro portafoglio. La differenza può includere addebiti del coordinatore, costi di mining e una differenza residua di allocazione degli output. Non contare come tuoi gli output di un altro partecipante e non considerare un'etichetta di commissione necessariamente comprensiva dell'intera differenza.

<span id="is-a-remix-exemption-permanent-or-applied-to-my-entire-balance" data-ginger-heading="lesenzione-remix-è-permanente-o-applicata-a-tutto-il-saldo" aria-hidden="true"></span>

### L'esenzione remix è permanente o applicata a tutto il saldo?

No. È una regola di ammissibilità dell'input secondo la politica del round offerto, non un diritto perpetuo per ogni transazione del portafoglio. La politica pubblicizzata da Ginger include remix idonei e una spesa diretta tramite una transazione; le commissioni di mining restano dovute. Ricontrolla i termini attuali anziché dividere o spostare monete solo per inseguire un'esenzione presunta.

<span id="hardware-and-privacy-boundaries" data-ginger-heading="hardware-e-confini-della-privacy" aria-hidden="true"></span>

## Hardware e confini della privacy

<span id="can-coinjoin-send-directly-to-my-hardware-wallet" data-ginger-heading="coinjoin-può-inviare-direttamente-al-mio-portafoglio-hardware" aria-hidden="true"></span>

### CoinJoin può inviare direttamente al mio portafoglio hardware?

Un portafoglio software ammissibile può selezionare un portafoglio hardware offerto e caricato in **Coinjoin to this wallet**. La destinazione riceve gli output di quel round senza attendere un evento separato di raggiungimento dell'obiettivo; il normale avvio non forza un round di candidati già privati. Controlla la destinazione dopo ogni riavvio, perché la selezione si reimposta, e non importare mai la frase seme hardware nel computer per farlo funzionare.

<span id="does-an-own-node-replace-every-ginger-service-or-make-tor-unnecessary" data-ginger-heading="un-mio-nodo-sostituisce-ogni-servizio-ginger-o-rende-superfluo-tor" aria-hidden="true"></span>

### Un mio nodo sostituisce ogni servizio Ginger o rende superfluo Tor?

No. Un nodo configurato può svolgere ruoli particolari come fornire blocchi o stime delle commissioni, mentre CoinJoin e procedure facoltative di fornitori o 2FA possono ancora contattare i propri servizi. Tor affronta l'esposizione della connessione, mentre un servizio destinatario vede comunque il contenuto della richiesta inviata. Controlla lo specifico flusso di dati anziché presumere che l'impostazione del nodo significhi nessuna richiesta esterna.

<span id="does-payjoin-hide-my-payment-from-its-recipient" data-ginger-heading="payjoin-nasconde-il-mio-pagamento-al-destinatario" aria-hidden="true"></span>

### PayJoin nasconde il mio pagamento al destinatario?

No. Il destinatario conosce già la propria richiesta di pagamento e può vedere il pagamento proposto durante la negoziazione. Una collaborazione riuscita può indebolire le ipotesi di proprietà di un osservatore esterno, ma schemi della transazione e altre informazioni possono limitare quel beneficio. Ginger può ripiegare su un pagamento ordinario se la costruzione fallisce, quindi la sola autorizzazione non garantisce che la transazione finale abbia usato PayJoin.

<span id="how-do-i-prove-control-of-an-address-without-paying" data-ginger-heading="come-dimostro-il-controllo-di-un-indirizzo-senza-pagare" aria-hidden="true"></span>

### Come dimostro il controllo di un indirizzo senza pagare?

Usa **Sign Message** per un indirizzo del portafoglio, leggi la dichiarazione esatta e condividi la firma risultante solo con il verificatore previsto. Contano ancora compatibilità del dispositivo, del tipo di indirizzo e del verificatore. Firmare non trasferisce bitcoin e non prova la proprietà di ogni indirizzo del portafoglio; può collegare l'indirizzo firmato all'identità conosciuta dal verificatore.

<span id="what-information-do-secret-hunt-and-buysell-services-receive" data-ginger-heading="quali-informazioni-ricevono-secret-hunt-e-i-servizi-di-acquistovendita" aria-hidden="true"></span>

### Quali informazioni ricevono Secret Hunt e i servizi di acquisto/vendita?

I controlli Secret Hunt pertinenti possono inviare identificatori di round e transazioni, un outpoint dell'input e una prova di controllo. La convalida degli indirizzi e gli ordini di acquisto/vendita inviano indirizzi e dettagli necessari; i siti dei fornitori hanno proprie divulgazioni di identità e browser. Sono procedure facoltative separate, quindi la privacy della sincronizzazione ordinaria non va generalizzata a tutte.
