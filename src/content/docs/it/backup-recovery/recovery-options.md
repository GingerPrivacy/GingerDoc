---
doc_id: "backup-recovery.recovery-options"
title: "Ripristino avanzato: account, scansione degli indirizzi e file"
description: "Esamina la compatibilità del ripristino di Ginger, il limite di indirizzi inutilizzati, le importazioni JSON del portafoglio e i metadati mancanti dopo aver controllato le parole di recupero e la passphrase originali."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Conserva le informazioni di ripristino originali e i file del portafoglio prima di modificare la configurazione del ripristino o dei file.

Completa prima i [normali controlli di ripristino](/it/backup-recovery/restore/): portafoglio previsto, parole e passphrase originali esatte, connessione e avanzamento della scansione. Questa pagina tratta ragioni specifiche per cui tali controlli potrebbero non bastare.

<span id="address-scanning-and-account-compatibility" data-ginger-heading="scansione-degli-indirizzi-e-compatibilità-degli-account" aria-hidden="true"></span>

## Scansione degli indirizzi e compatibilità degli account

La schermata di ripristino accetta insiemi validi di 12, 15, 18, 21 o 24 parole di recupero inglesi e ne controlla il checksum. Le sole parole valide non dimostrano che l'account di un'altra applicazione sia compatibile.

Se hai usato un numero insolitamente elevato di indirizzi di ricezione inutilizzati prima di un indirizzo che ha ricevuto un pagamento, **Advanced Recovery Options** offre **Minimum Gap Limit:**. Il valore predefinito nella schermata di ripristino pubblicata è 114. Aumentarlo può estendere la ricerca, al costo di più lavoro e tempo; non corregge parole errate, una passphrase errata o un formato del portafoglio incompatibile. Usa un valore maggiore solo quando la cronologia dei tuoi indirizzi lo giustifica.

Un portafoglio originariamente creato da un'altra applicazione può usare tipi di indirizzo, account o percorsi di derivazione diversi. Le sole parole BIP39 non garantiscono che ogni portafoglio scopra ogni account. Per gli account mainnet standard di Ginger, SegWit nativo usa `m/84'/0'/0'` e Taproot usa `m/86'/0'/0'`. Il ripristino avanzato in un'altra applicazione deve supportare l'account e il tipo di indirizzo pertinenti. Quando possibile, esegui il ripristino hardware su un dispositivo hardware.

Ginger non offre il ripristino da quote SLIP39 in questa versione. Non inserire un insieme di quote di ripristino come se fosse un unico elenco di parole BIP39.

<span id="import-a-file" data-ginger-heading="importa-un-file" aria-hidden="true"></span>

## Importa un file

Scegli **Import File** nella schermata per aggiungere un portafoglio e seleziona un file `.json` compatibile. Ginger può chiedere un nome diverso se uno è già in uso. Un file JSON qualsiasi, una transazione PSBT o un xpub arbitrario incollato in un file di testo non sono backup compatibili del portafoglio.

Usa la passphrase originale per aprire un portafoglio software importato e protetto. Un file cifrato tramite 2FA non equivale a un backup portabile non cifrato. Conserva i file e le credenziali associati oppure ripristina dalle parole e dalla passphrase originale. Importare un'esportazione hardware crea un portafoglio che dipende ancora dal dispositivo per la firma.

<span id="what-recovery-does-not-restore" data-ginger-heading="cosa-non-ripristina-il-recupero" aria-hidden="true"></span>

## Cosa non ripristina il recupero

La blockchain non può ripristinare le etichette private, tutte le impostazioni dell'applicazione o i metadati degli ordini presso i fornitori. Conserva il file `.attr` corrispondente quando questi dati contano. Non sovrascrivere i file appena ripristinati con vecchi metadati mentre Ginger è in esecuzione. Se ti serve aiuto per ripristinare i dati associati, lavora su copie e descrivi i nomi dei file e la versione senza condividere pubblicamente il contenuto.

Conserva gli originali e lavora su copie. Consulta i [backup dei file del portafoglio](/it/backup-recovery/backup-files/) prima di manipolare i dati locali.
