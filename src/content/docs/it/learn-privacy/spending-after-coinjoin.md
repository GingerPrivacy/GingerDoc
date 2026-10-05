---
doc_id: "learn-privacy.spending-after-coinjoin"
title: "Spendere dopo CoinJoin: esempi pratici"
description: "Usa esempi pratici di pagamenti Bitcoin per comprendere selezione delle monete, resto, consolidamento e ciò che può diventare visibile dopo CoinJoin."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Comprendi prima l'uso di nuovi indirizzi di ricezione e il controllo dei pagamenti ordinari.

CoinJoin cambia l'incertezza attorno ai collegamenti tra input e output. La transazione successiva può aggiungere nuove informazioni. Prima di pagare, decidi quali monete il destinatario o un altro osservatore potrebbero già associare a te e cosa rivelerebbe il pagamento proposto.

Gli esempi seguenti usano importi fittizi in satoshi. Le commissioni sono scelte per il calcolo, non quotate dalla rete. Una moneta è un output di transazione non speso, o UTXO; non è la stessa cosa di un portafoglio o di un indirizzo Bitcoin.

<span id="start-with-the-payment-you-need-to-make" data-ginger-heading="parti-dal-pagamento-che-devi-effettuare" aria-hidden="true"></span>

## Parti dal pagamento che devi effettuare

In Ginger, apri **Wallet Coins** per esaminare importi, etichette e informazioni di privacy. Per un pagamento ordinario, **Send** → **Manual Control** consente di scegliere monete candidate. Selezionare candidati non sostituisce il controllo della transazione finale: esamina gli input effettivamente usati, l'importo inviato, il resto e la commissione prima di **Confirm**.

Anche la selezione automatica e i suggerimenti di Ginger possono aiutare. Il controllo manuale è utile quando conosci qualcosa sui fondi che il portafoglio non può sapere, per esempio quale cliente riconosca già una ricezione. Non è intrinsecamente una scelta migliore per ogni pagamento.

<span id="example-1-one-coin-covers-a-purchase" data-ginger-heading="esempio-1-una-moneta-copre-un-acquisto" aria-hidden="true"></span>

## Esempio 1: una moneta copre un acquisto

Alex ha una moneta di 120 000 satoshi risultante da CoinJoin e vuole pagare 70 000 satoshi. Supponiamo che la commissione sia di 1 000 satoshi.

| Parte della transazione | Importo |
| --- | --- |
| Input speso | 120 000 sats |
| Il commerciante riceve | 70 000 sats |
| Il resto torna ad Alex | 49 000 sats |
| Commissione di mining | 1 000 sats |

Il commerciante conosce il proprio indirizzo di pagamento e l'importo. Può esaminare la transazione e dedurre che l'altro output sia il resto di Alex. Il commerciante non scopre l'intero saldo del portafoglio di Alex da questa sola transazione, ma può vedere l'input e seguire le spese successive del probabile resto.

Alex non deve riportare manualmente quel resto: appartiene già al portafoglio. Il punto utile da controllare è il prossimo pagamento che coinvolge quel resto.

<span id="example-2-two-unrelated-receipts-are-combined" data-ginger-heading="esempio-2-due-ricezioni-non-correlate-vengono-combinate" aria-hidden="true"></span>

## Esempio 2: due ricezioni non correlate vengono combinate

Blair ha una moneta di 90 000 satoshi associata a lavoro autonomo e una moneta di 80 000 satoshi associata a un indirizzo pubblico per donazioni. Un pagamento di 150 000 satoshi con una commissione di 2 000 satoshi richiede più di ciascuna moneta da sola; usarle entrambe restituisce 18 000 satoshi di resto.

Una normale spesa congiunta può suggerire che entrambi gli input abbiano lo stesso proprietario. Chi riconosce già la moneta delle donazioni può ottenere una nuova pista sulla moneta del lavoro autonomo. È un'inferenza dalla transazione e da altre conoscenze, non una prova automatica dell'identità di una persona.

Se Blair ha un'altra moneta sufficiente già associata alla stessa attività, potrebbe divulgare meno informazioni nuove. Se l'unico modo pratico per effettuare il pagamento richiesto usa entrambi gli input, la scelta è una decisione tra costo e privacy. Non pagare meno del dovuto su una fattura e non trattare «non combinare mai le monete» come una regola assoluta.

CoinJoin e PayJoin comportano essi stessi collaborazione, quindi l'ipotesi che tutti gli input abbiano un solo proprietario non è universalmente valida. Mantieni questa distinzione quando interpreti una transazione.

<span id="example-3-change-carries-a-connection-forward" data-ginger-heading="esempio-3-il-resto-porta-avanti-un-collegamento" aria-hidden="true"></span>

## Esempio 3: il resto porta avanti un collegamento

In seguito Alex combina i 49 000 satoshi di resto dell'Esempio 1 con una moneta non correlata di 60 000 satoshi per pagare 100 000 satoshi. Con una commissione ipotizzata di 1 000 satoshi, 8 000 satoshi tornano come nuovo resto.

Il primo commerciante può osservare che il suo probabile output di resto è stato speso con l'input di 60 000 satoshi. Anche se il nuovo indirizzo del destinatario è nuovo, l'associazione dal lato degli input rimane. Un nuovo indirizzo di output non annulla la scelta di spendere entrambi gli input insieme.

Usa le etichette per conservare il contesto per decisioni future. Le etichette sono note locali; non pubblicano un nome sulla blockchain e non impediscono a un osservatore di fare inferenze.

<span id="example-4-moving-the-entire-balance-to-hardware" data-ginger-heading="esempio-4-spostare-lintero-saldo-su-hardware" aria-hidden="true"></span>

## Esempio 4: spostare l'intero saldo su hardware

Casey ha quattro monete da 200 000 satoshi ciascuna. Inviarle tutte e quattro a un solo indirizzo di ricezione hardware spende 800 000 satoshi di input in un'unica transazione. Con una commissione ipotizzata di 2 000 satoshi, il portafoglio hardware riceve 798 000 satoshi.

Il portafoglio hardware migliora l'isolamento delle chiavi, ma il trasferimento espone una spesa congiunta dei quattro input. Trasferimenti separati potrebbero evitare quella particolare associazione, aggiungendo però commissioni e altri schemi osservabili di tempi e importi. Ricevere gli output direttamente in un portafoglio hardware durante un CoinJoin ammissibile può evitare un trasferimento successivo, ma richiede controlli di ammissibilità e destinazione specifici della versione; non è un modo generale di effettuare remix di monete detenute su hardware.

Non spendere un intero saldo solo perché l'elenco delle monete sembra disordinato. Il consolidamento può ridurre i futuri numeri di input, ma una tariffa di commissione bassa cambia solo il costo; non elimina la divulgazione.

<span id="other-participants-and-future-observations-matter" data-ginger-heading="contano-gli-altri-partecipanti-e-le-osservazioni-future" aria-hidden="true"></span>

## Contano gli altri partecipanti e le osservazioni future

Il tuo comportamento non è l'unica influenza. Le transazioni successive degli altri partecipanti possono restringere le possibilità considerate da un osservatore. La ricerca sul consolidamento dopo CoinJoin studia questo effetto, riconoscendo i limiti nel trasformare queste osservazioni in un'identificazione utilizzabile. Le sue misurazioni non rappresentano la probabilità che un utente specifico venga tracciato. [Gavenda e colleghi, 2025](https://arxiv.org/html/2510.17284v1)

Non esistono un numero universale di round o un periodo di attesa che garantiscano la privacy. Attendere non cancella le informazioni già divulgate a un commerciante identificato, un exchange o un altro servizio per portafogli.

<span id="a-short-review-before-confirming" data-ginger-heading="un-breve-controllo-prima-di-confermare" aria-hidden="true"></span>

## Un breve controllo prima di confermare

1. Conferma il destinatario e l'importo richiesto tramite un canale affidabile.
2. Esamina gli input finali e chiediti chi conosca già ciascuno di essi.
3. Controlla se la selezione combina attività che intendevi mantenere separate.
4. Esamina il resto e ricorda il suo collegamento quando lo spenderai in seguito.
5. Accetta solo una commissione e un compromesso di privacy adeguati al pagamento; controlla la cronologia prima di ripetere un pagamento dopo un risultato incerto.

Per le scelte relative al portafoglio e al browser, prosegui con [abitudini di privacy](/it/using-ginger/address-reuse/) e [dove vanno le informazioni del portafoglio](/it/learn-privacy/information-sharing/).
