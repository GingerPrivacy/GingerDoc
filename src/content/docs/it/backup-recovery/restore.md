---
doc_id: "backup-recovery.restore"
title: "Ripristina un portafoglio o un saldo mancante"
description: "Ripristina un portafoglio Ginger con le parole e la passphrase originali, poi controlla il portafoglio selezionato e l'avanzamento della scansione prima di esaminare casi particolari di ripristino."
lang: "it"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Livello della guida: Uso quotidiano. Scegli questa guida quando ti serve eseguire l'attività descritta.

Il ripristino cerca le chiavi e la loro cronologia delle transazioni. Prima di iniziare, conserva i file del portafoglio del vecchio computer se puoi accedervi. Lavora su copie e mantieni gli originali finché non hai verificato il portafoglio ripristinato.

<span id="recover-from-words" data-ginger-heading="ripristina-dalle-parole" aria-hidden="true"></span>

## Ripristina dalle parole

1. Installa e verifica Ginger su un computer affidabile. Nella schermata per aggiungere un portafoglio, scegli **Recover**.
2. Fornisci un **Wallet Name** se richiesto. Usa un nome distinto per evitare di confonderlo con un portafoglio esistente.
3. Inserisci le parole di recupero originali nell'ordine corretto. Usa il backup effettivo, non un nuovo insieme di parole generato.
4. Alla schermata **Enter Passphrase**, inserisci la passphrase usata per creare il portafoglio originale. Lascia il campo vuoto solo se l'originale non aveva una passphrase. Non stai impostando una password sostitutiva.
5. Lascia terminare la sincronizzazione e il ripristino. Controlla le transazioni e gli indirizzi di ricezione conosciuti, non solo il valore visualizzato in valuta fiat. Durante il ripristino alcune normali azioni del portafoglio sono nascoste.

Passphrase diverse derivano portafogli validi diversi. Un errore di digitazione può quindi produrre un portafoglio vuoto senza un errore di «passphrase errata» durante il ripristino dalla frase seme. Controlla maiuscole, spazi, disposizione della tastiera e backup originale prima di concludere che i fondi siano scomparsi.

<span id="an-apparently-empty-recovered-wallet" data-ginger-heading="un-portafoglio-ripristinato-apparentemente-vuoto" aria-hidden="true"></span>

## Un portafoglio ripristinato apparentemente vuoto

Controlla prima di aver selezionato il portafoglio e la rete previsti. Mainnet e reti di test hanno monete separate. Poi controlla la connessione e l'avanzamento del ripristino. Se l'applicazione sta ancora cercando, un saldo incompleto non è un risultato definitivo.

Se quei controlli sono corretti ma mancano ancora transazioni conosciute, smetti di modificare impostazioni a caso. Un portafoglio creato con un'altra applicazione o un elevato numero di indirizzi inutilizzati possono richiedere un'indagine più specifica.

Riferimento avanzato facoltativo: [account, scansione degli indirizzi e importazione di file](/it/backup-recovery/recovery-options/). Tratta questi casi senza introdurre impostazioni personalizzate di ripristino nei normali passaggi di ripristino dalle parole.

Il ripristino dalle parole restituisce l'accesso alle chiavi corrispondenti. Le etichette private e altre registrazioni locali possono richiedere un backup separato dei file.

<span id="if-something-is-missing" data-ginger-heading="se-manca-qualcosa" aria-hidden="true"></span>

## Se manca qualcosa

| Cosa hai ancora | Passaggio pratico successivo |
| --- | --- |
| Parole e passphrase originale | Ripristina su un'installazione affidabile |
| Portafoglio accessibile, ma parole mancanti o non valide | Crea un nuovo portafoglio con backup e trasferisci i fondi finché hai accesso |
| File del portafoglio e credenziali originali | Prova a importare una copia; conserva tutti i file associati |
| Parole, ma una passphrase non vuota dimenticata | Ginger non può reimpostarla; non confondere un portafoglio ripristinato vuoto con un ripristino riuscito |
| Dispositivo hardware, ma nessun backup affidabile | Segui la procedura di controllo del backup del produttore prima di mettere a rischio il dispositivo |
| Né accesso alla spesa né informazioni di ripristino utilizzabili | L'assistenza non può creare le chiavi mancanti |

Non dare mai le parole, la passphrase, le chiavi private o il file del portafoglio a un «aiutante per il recupero». Una diagnosi legittima inizia da dettagli non segreti come versione dell'applicazione, rete e testo dell'errore.
