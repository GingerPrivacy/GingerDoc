---
doc_id: "learn-self-custody.security-routine"
title: "Crea una routine di sicurezza Bitcoin che consenta il ripristino"
description: "Crea una routine di sicurezza Bitcoin che consenta il ripristino e reagisci correttamente all'esposizione di indirizzi, xpub, file del portafoglio, parole di recupero o dispositivi."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Tieni disponibile il backup di base per il ripristino; usa i passaggi per incidenti che corrispondono alle informazioni esposte.

Una routine di sicurezza utile protegge dall'accesso non autorizzato lasciando un percorso comprensibile per il ripristino legittimo. Aggiungere segreti senza documentarne il ruolo può rendere più probabile una perdita accidentale.

<span id="record-the-recovery-plan" data-ginger-heading="documenta-il-piano-di-ripristino" aria-hidden="true"></span>

## Documenta il piano di ripristino

Mantieni un inventario privato dei portafogli, del tipo di firmatario usato da ciascuno, dei luoghi dei backup e dell'eventuale necessità di una passphrase BIP39. L'inventario non deve contenere i segreti stessi. Dovrebbe essere utile dopo la perdita del computer o del telefono, non solo finché ricordi come hai configurato tutto.

Conserva informazioni sufficienti sulle convenzioni del portafoglio per riconoscere l'account corretto ripristinato, soprattutto usando dispositivi hardware o più portafogli. Mantieni backup di etichette e metadati quando sono importanti per le registrazioni; la blockchain non può ricostruire le note private che hai scritto.

Se vuoi che un'altra persona recuperi i fondi in caso di incapacità o morte, predisponi un piano di accesso chiaro e verificato, adatto alle tue circostanze. Evita di condividere con leggerezza tutti i segreti ora o presumere che la persona indovini quale password intendevi. Gli accordi successori e di accesso possono avere implicazioni legali che richiedono consulenza professionale locale; questa pagina non prescrive una struttura legale.

<span id="check-before-funding-and-before-signing" data-ginger-heading="controlla-prima-di-depositare-fondi-e-prima-di-firmare" aria-hidden="true"></span>

## Controlla prima di depositare fondi e prima di firmare

Verifica il download dell'applicazione, conferma che il portafoglio si apra e controlla il backup. Per un portafoglio hardware, confronta gli indirizzi di ricezione sul dispositivo ed esamina destinazione e importo di ogni pagamento prima di firmare.

Usa un piccolo importo per imparare una nuova procedura. Verifica il conto di quanto è stato inviato, quanto è arrivato e quali commissioni sono state pagate. Aumentare l'importo non rende più facile diagnosticare una procedura sconosciuta.

Mantieni aggiornati computer e dispositivo di firma tramite fonti autenticate. Un avviso di aggiornamento in un messaggio privato non prova che un file sia legittimo. Non installare mai «software di recupero» e non consentire il controllo remoto solo perché uno sconosciuto dice che le tue monete devono sincronizzarsi.

<span id="understand-ginger-2fa" data-ginger-heading="comprendi-la-2fa-di-ginger" aria-hidden="true"></span>

## Comprendi la 2FA di Ginger

La 2FA facoltativa di Ginger aggiunge cifratura dei file locali del portafoglio e una verifica all'avvio tramite un servizio. Può essere utile contro alcune forme di accesso ai file locali, ma introduce una dipendenza dall'autenticatore e dal servizio nel normale avvio.

Mantieni disponibili in modo indipendente le parole di recupero e la passphrase originale. Non presumere che `2fa_info.gws` sia una chiave principale di ripristino offline. Non presumere neppure che la 2FA fermi un aggressore che ha già parole e passphrase o impedisca una transazione autorizzata da un'applicazione sbloccata.

<span id="first-identify-what-was-exposed" data-ginger-heading="identifica-prima-cosa-è-stato-esposto" aria-hidden="true"></span>

## Identifica prima cosa è stato esposto

La divulgazione di un indirizzo e delle parole di recupero richiedono risposte diverse. Evita di copiare il materiale sospetto in un post pubblico o in un «controllo del portafoglio» sconosciuto per diagnosticarlo.

| Elemento esposto | Cosa può consentire | Prima risposta |
| --- | --- | --- |
| Un indirizzo di ricezione o un ID di transazione | Osservare quell'indirizzo o transazione e seguire possibili collegamenti; non fornisce chiavi di firma | Interrompi il riutilizzo superfluo e ulteriori divulgazioni; controlla quali identità e pagamenti sono stati collegati |
| Etichette, registrazioni di ordini o esportazione della cronologia | Associare transazioni altrimenti separate a persone, scopi o saldi | Limita l'accesso, conserva una copia privata se necessaria e cambia il modo di condividere le registrazioni |
| Una chiave pubblica estesa, spesso chiamata xpub | Monitorare gli indirizzi nell'ambito di derivazione coperto, potenzialmente anche futuri; normalmente non autorizza di per sé la spesa | Identifica l'account o il ramo interessato e valuta un nuovo portafoglio se il monitoraggio continuativo è inaccettabile |
| Un file del portafoglio o un'intera copia dei dati dell'applicazione | L'esposizione dipende da cifratura, password disponibili e altri file copiati; può includere chiavi e metadati privati | Prendi sul serio l'incertezza e valuta l'esposizione delle chiavi di firma da un ambiente affidabile |
| Parole di recupero e ogni passphrase necessaria, o chiavi private utilizzabili | Spendere fondi e derivare altre chiavi nell'ambito compromesso | Prepara un nuovo portafoglio con nuove chiavi su un dispositivo affidabile e sposta i fondi che controlli ancora |
| Un computer rubato, un'applicazione sbloccata o una sessione di controllo remoto | A seconda dello stato, accesso ai dati del portafoglio, alle operazioni di firma e ad altri account | Termina l'accesso non autorizzato e usa un dispositivo affidabile per valutare e proteggere i fondi rimanenti |

Una chiave pubblica estesa non dà necessariamente una vista di ogni account su un dispositivo; conta il suo ambito di derivazione. Tuttavia, generare un altro indirizzo di ricezione sotto un ramo pubblico divulgato normalmente non impedisce il monitoraggio continuativo di quel ramo. Il [BIP32 descrive questi confini della derivazione delle chiavi pubbliche](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).

Se sono state divulgate solo le parole di recupero e hai usato una passphrase separata, il rischio dipende anche dal fatto che la passphrase resti segreta e da quanto sia difficile indovinarla. Non presumere che una passphrase sconosciuta o debole renda il backup esposto sicuro indefinitamente. Se gli elementi sono incompleti e l'esposizione potrebbe autorizzare la spesa, usa la risposta per l'esposizione delle chiavi.

<span id="respond-to-exposed-signing-keys" data-ginger-heading="reagisci-allesposizione-delle-chiavi-di-firma" aria-hidden="true"></span>

## Reagisci all'esposizione delle chiavi di firma

Cambiare una password del computer, disattivare la 2FA o reinstallare Ginger non revoca le chiavi Bitcoin copiate. Anche cambiare il nome del portafoglio lascia invariate le chiavi. Bitcoin non ha una procedura di assistenza che annulli una frase di recupero copiata.

1. Usa un dispositivo di cui hai motivo di fidarti. Se il computer originale potrebbe essere compromesso, non generare lì il portafoglio sostitutivo.
2. Crea un portafoglio con nuove informazioni di ripristino e proteggi il backup. Non ripristinare le parole esposte chiamando il portafoglio ripristinato un nuovo confine di sicurezza.
3. Ottieni e verifica un indirizzo di ricezione. Con hardware, verificalo sul dispositivo di firma; non inserire mai le sue nuove parole di recupero nel computer sospetto.
4. Trasferisci i fondi rimanenti che puoi ancora controllare, verificando attentamente destinazione e commissione. Un aggressore con le stesse chiavi può gareggiare con te; evita di aggiungere un'attesa CoinJoin facoltativa prima di proteggere i fondi.
5. Controlla il risultato nel portafoglio affidabile e monitora la conferma. Sostituisci le istruzioni di deposito ricorrente e i vecchi dati pubblici di ricezione, affinché i pagamenti futuri non continuino ad arrivare alle chiavi compromesse.

Spostare fondi può creare un collegamento on-chain osservabile. Conservare il controllo dei fondi ha la priorità durante una compromissione delle chiavi; la privacy può essere riconsiderata una volta contenuto il problema immediato di accesso. Una nuova destinazione non garantisce che il trasferimento non sia collegabile.

Conserva privatamente le registrazioni necessarie durante l'indagine. Non dare mai a un presunto agente di assistenza parole di recupero, passphrase, una copia senza restrizioni del file del portafoglio o accesso al dispositivo sostitutivo. Non serve «convalidare» nuove parole di recupero su un sito.

<span id="respond-to-a-privacy-only-disclosure" data-ginger-heading="reagisci-a-una-divulgazione-che-riguarda-solo-la-privacy" aria-hidden="true"></span>

## Reagisci a una divulgazione che riguarda solo la privacy

Per un indirizzo esposto, decidi se continuare a usarlo sia accettabile. Puoi ricevere pagamenti futuri a nuovi indirizzi ed evitare di pubblicare altri dettagli delle transazioni, ma l'osservatore conserva ciò che ha già scoperto. Non c'è un bisogno automatico di spostare ogni moneta solo perché un indirizzo è diventato pubblico.

Per un xpub divulgato, determina prima quale account copre. Continuare a usare quell'account può esporre attività future. Un nuovo portafoglio con chiavi indipendenti stabilisce un insieme diverso di indirizzi, anche se un trasferimento diretto può collegare visibilmente i vecchi fondi a esso. Pianifica il passaggio e le spese successive in base a chi osserva e a cosa sa. Reinstallare un'applicazione per portafogli o importare lo stesso account altrove non elimina l'esposizione di quell'account.

Per registrazioni trapelate, limita ulteriori accessi e valuta cosa rivelino insieme. Un ID di transazione associato al nome di un cliente rivela più di ciascuno da solo. Non pubblicare l'intera fuga di dati per dimostrare il problema.

<span id="keep-privacy-separate-from-key-protection" data-ginger-heading="tieni-distinta-la-privacy-dalla-protezione-delle-chiavi" aria-hidden="true"></span>

## Tieni distinta la privacy dalla protezione delle chiavi

Un osservatore che conosce una transazione non ha necessariamente le chiavi per spenderla. Viceversa, un ladro con le chiavi può spendere fondi la cui cronologia era difficile da analizzare. Usa protezione del ripristino e verifica del dispositivo per il secondo problema, e pratiche sugli indirizzi, Tor, selezione delle monete e uso ponderato di CoinJoin per il primo.

Rivedi la routine dopo aver aggiunto un portafoglio, cambiato hardware, attivato la 2FA o spostato i backup. Verifica le parti cambiate anziché esporre ripetutamente ogni segreto per un esercizio completo di ripristino non necessario.
