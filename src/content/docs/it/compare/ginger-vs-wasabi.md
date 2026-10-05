---
title: "Ginger Wallet e Wasabi Wallet: configurazione, commissioni e compromessi"
description: "Confronta configurazione del coordinatore, costi CoinJoin, procedure hardware e limiti di privacy di Ginger e Wasabi per scegliere ciò che fa per te."
doc_id: "compare.ginger-vs-wasabi"
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet e Wasabi Wallet sono portafogli desktop Bitcoin a codice aperto che consentono di detenere le proprie chiavi e usare CoinJoin. Le principali differenze pratiche per chi inizia CoinJoin sono configurazione e commissioni del coordinatore.

**Ginger ha già configurata la connessione al proprio coordinatore. Wasabi richiede di configurare un coordinatore prima di avviare CoinJoin.** Il coordinatore di Ginger addebita normalmente lo 0.3% sugli input ammissibili oltre 0.03 BTC, con le esenzioni descritte sotto. Il Wasabi attuale accetta solo round senza commissione del coordinatore. Entrambi hanno costi di mining.

Ultimo controllo: **7 settembre 2026**. Versioni considerate: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) e [Wasabi v2.8.2](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.8.2). Questo confronto riguarda le procedure documentate, non un benchmark di velocità, affidabilità o anonimato.

<span id="at-a-glance" data-ginger-heading="a-colpo-docchio" aria-hidden="true"></span>

## A colpo d'occhio

| Domanda | Ginger Wallet | Wasabi Wallet |
| --- | --- | --- |
| Chi controlla le chiavi di firma? | Tu; il coordinatore non detiene per te un saldo di portafoglio in custodia. | Tu; CoinJoin è una procedura di autocustodia. |
| Cosa devo configurare per CoinJoin? | La connessione al coordinatore è inclusa; controlla le impostazioni del portafoglio prima di avviare. | Scegli e configura un coordinatore compatibile, poi controlla le impostazioni del portafoglio. |
| C'è una commissione del coordinatore? | Normalmente lo 0.3% dell'intero valore di ogni input soggetto a commissione; input pari o inferiori a 0.03 BTC e remix idonei sono esenti. | Il client attuale accetta round senza commissione del coordinatore. |
| Possono esserci altri costi? | Sì: commissioni di mining e possibili piccoli residui non restituiti. | Sì: commissioni di mining e possibili piccoli residui non restituiti. |
| Le chiavi detenute su hardware possono firmare input CoinJoin? | Non attraverso la normale procedura hardware di questa versione. | Non attraverso l'attuale procedura hardware. |
| Gli output CoinJoin possono andare su hardware? | Sì, tramite un portafoglio hardware supportato e caricato come destinazione degli output. | Sì, tramite la funzione CoinJoin verso un portafoglio supportato e caricato. |

Le sezioni seguenti spiegano le condizioni di queste differenze e rimandano alla documentazione pertinente.

<span id="coordinator-setup-one-less-decision-with-ginger" data-ginger-heading="configurazione-del-coordinatore-una-decisione-in-meno-con-ginger" aria-hidden="true"></span>

## Configurazione del coordinatore: una decisione in meno con Ginger

Un coordinatore organizza un round CoinJoin tra i portafogli partecipanti. È un servizio separato dall'applicazione del portafoglio e non richiede le tue parole di recupero o chiavi private.

La [configurazione pubblicata](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) di Ginger fornisce una connessione al coordinatore. Dopo aver creato il portafoglio software e il backup, puoi controllare le impostazioni CoinJoin e avviare senza prima cercare un indirizzo del coordinatore. Consulta [usare CoinJoin in Ginger](/it/using-ginger/coinjoin/).

La [guida CoinJoin](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html) di Wasabi richiede un coordinatore configurato prima della partecipazione. Supporta avvio manuale e partecipazione automatica facoltativa. Scegliere un coordinatore significa anche controllare disponibilità e politiche del suo operatore.

Il vantaggio pratico di Ginger qui è un percorso di configurazione più breve. Una connessione fornita non garantisce un round immediato: servono ancora fondi confermati, commissioni accettabili, un servizio disponibile e abbastanza input partecipanti.

<span id="privacy-with-future-use-in-mind" data-ginger-heading="privacy-pensando-alluso-futuro" aria-hidden="true"></span>

## Privacy pensando all'uso futuro

Potresti voler migliorare oggi la privacy Bitcoin e usare un exchange in seguito. In un CoinJoin, le tue monete condividono una transazione con input di altri partecipanti. Questi collegamenti possono contare quando un servizio di custodia esamina il deposito.

Il coordinatore di Ginger controlla gli input partecipanti ed esclude quelli che non superano i propri controlli di rischio. L'obiettivo è limitare l'esposizione a input segnalati di altri partecipanti, una possibile fonte di ulteriori controlli quando in seguito usi i tuoi bitcoin.

Con Wasabi, l'applicazione di controlli comparabili dipende dal coordinatore scelto. Ogni servizio destinatario prende comunque le proprie decisioni di accettazione.

<span id="fees-compare-the-complete-cost" data-ginger-heading="commissioni-confronta-il-costo-completo" aria-hidden="true"></span>

## Commissioni: confronta il costo completo

<span id="gingers-coordinator-fee" data-ginger-heading="la-commissione-del-coordinatore-ginger" aria-hidden="true"></span>

### La commissione del coordinatore Ginger

La soglia di esenzione è **per input**, chiamato anche moneta o UTXO. Non è un limite al saldo del portafoglio o all'importo combinato che registri.

Con le attuali impostazioni del coordinatore:

- Un input pari o inferiore a **0.03 BTC** non paga la commissione del coordinatore.
- Un input maggiore paga normalmente lo **0.3% dell'intero valore**.
- Anche i remix idonei possono essere esenti, secondo l'ammissibilità dell'input e il round offerto.

Per un input senza altra esenzione:

| Valore dell'input | Commissione del coordinatore | Commissione di mining |
| --- | --- | --- |
| 0.03 BTC | 0 satoshi | Aggiuntiva |
| 0.10 BTC | 0.0003 BTC, o 30 000 satoshi | Aggiuntiva |

Questi esempi spiegano il calcolo; non sono quotazioni per round futuri. Le regole complete e altri esempi si trovano in [Commissioni CoinJoin e avanzamento della privacy](/it/using-ginger/annonset/).

<span id="wasabis-coordinator-fee-policy" data-ginger-heading="la-politica-sulle-commissioni-del-coordinatore-wasabi" aria-hidden="true"></span>

### La politica sulle commissioni del coordinatore Wasabi

Wasabi accetta solo round senza commissione del coordinatore dalla versione 2.2.0.0. Le commissioni di mining restano dovute. La documentazione descrive anche rari residui nell'allocazione degli output fino a 10 000 satoshi per CoinJoin che vanno al coordinatore. Consulta la [spiegazione delle commissioni di Wasabi](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#fees).

<span id="budget-beyond-the-headline-percentage" data-ginger-heading="pianifica-i-costi-oltre-la-percentuale-pubblicizzata" aria-hidden="true"></span>

### Pianifica i costi oltre la percentuale pubblicizzata

Anche Ginger può lasciare un piccolo residuo nell'allocare gli importi degli output. Per entrambi i portafogli, confronta il valore degli input partecipanti con **tutti gli output che possiedi** della transazione completata, compresi quelli ricevuti in un altro portafoglio. Round ripetuti e trasferimenti successivi possono aggiungere costi.

Una commissione del coordinatore pari a zero è una componente del confronto. Dimensione della transazione, tariffe delle commissioni di mining, allocazione degli output e numero di round completati influiscono sulla spesa finale. La [guida ai costi](/it/using-ginger/annonset/) di Ginger spiega come verificare il conto di questi importi.

<span id="hardware-wallets-signing-inputs-and-receiving-outputs-are-different" data-ginger-heading="portafogli-hardware-firmare-gli-input-e-ricevere-gli-output-sono-azioni-diverse" aria-hidden="true"></span>

## Portafogli hardware: firmare gli input e ricevere gli output sono azioni diverse

Entrambe le applicazioni supportano portafogli hardware per la normale ricezione e firma dei pagamenti. Le procedure CoinJoin documentate richiedono un portafoglio software che firmi gli input partecipanti; il dispositivo hardware non può fungere da fonte di firma. Consulta il [supporto hardware di Ginger](/it/using-ginger/hardware-wallet/) e la [guida hardware di Wasabi](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html).

Ricevere le monete risultanti è un'operazione separata. Entrambi consentono di selezionare un altro portafoglio supportato e caricato come destinazione degli output CoinJoin, compreso un portafoglio hardware. Questo può evitare un trasferimento separato dopo il round. **Non** significa che il dispositivo hardware abbia firmato gli input CoinJoin o che gli output abbiano necessariamente raggiunto l'obiettivo di privacy previsto prima di arrivare lì.

In Ginger, controlla nuovamente la destinazione dopo il riavvio perché la selezione si reimposta. Conserva backup separati per l'origine software e la destinazione hardware. Non inserire mai le parole di recupero del portafoglio hardware nell'applicazione desktop per abilitare CoinJoin.

Segui la [guida alla conservazione offline di Ginger](/it/hardware-wallets/exchange-to-cold-storage/) o la [spiegazione CoinJoin verso un altro portafoglio di Wasabi](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#can-i-coinjoin-to-another-wallet) per la procedura supportata e le sue condizioni.

<span id="privacy-and-service-policies" data-ginger-heading="privacy-e-politiche-del-servizio" aria-hidden="true"></span>

## Privacy e politiche del servizio

L'autocustodia risponde a chi possa autorizzare la spesa. Non risolve ogni domanda su privacy o disponibilità del servizio. CoinJoin rende più difficile dedurre alcuni legami di proprietà, ma le transazioni restano pubbliche. Un exchange conserva le proprie registrazioni; combinazioni successive di monete, riutilizzo degli indirizzi o divulgazioni a un destinatario possono creare nuovi collegamenti. Il punteggio di privacy del portafoglio non garantisce anonimato o accettazione da parte di un exchange. Consulta [fiducia e limiti di CoinJoin](/it/learn-coinjoin/trust-and-limits/).

L'operatore di Ginger, InvisibleBit LLC, pubblica restrizioni del servizio, comprese quelle riguardanti localizzazione negli Stati Uniti e nazionalità. I suoi termini consentono anche controlli di terzi e rifiuto di input particolari. Controlla i [termini attuali di Ginger](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt) prima di usare il servizio. Con Wasabi, controlla le politiche del coordinatore che configuri; la politica delle commissioni del portafoglio non stabilisce le pratiche di ammissione o trattamento dei dati di quell'operatore.

<span id="which-fits-your-needs" data-ginger-heading="quale-risponde-alle-tue-esigenze" aria-hidden="true"></span>

## Quale risponde alle tue esigenze?

**Ginger merita considerazione se vuoi una connessione al coordinatore già fornita** e la sua struttura di commissioni e le politiche del servizio rispondono alle tue esigenze. Parti da [per iniziare](/it/getting-started/), predisponi il backup e controlla i [comandi CoinJoin](/it/using-ginger/coinjoin/) prima di partecipare.

**Wasabi merita considerazione se preferisci scegliere un coordinatore e richiedi round senza commissione del coordinatore.** Controlla l'operatore e i costi completi della transazione prima di iniziare.

Se ti serve principalmente ricevere, detenere e inviare bitcoin con un portafoglio hardware, confronta prima dispositivi supportati e normali procedure di pagamento. CoinJoin è facoltativo; la sua utilità dipende dalle informazioni che vuoi proteggere e da come spenderai le monete risultanti.
