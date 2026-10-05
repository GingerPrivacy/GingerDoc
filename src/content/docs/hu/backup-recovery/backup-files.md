---
doc_id: "backup-recovery.backup-files"
title: "Pénztárcafájlok, metaadatok és a jelmondat részletei"
description: "Őrizd meg a Ginger JSON- és ATTR-pénztárcafájljait, értsd meg a 2FA fájlfüggőségét, és tarts fenn helyreállítható jelmondatot az alapvető szavas mentés mellett."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Őrizd meg az eredeti helyreállítási adatokat és pénztárcafájlokat, mielőtt módosítod a helyreállítás vagy a fájlok beállításait.

Ezt az útmutatót a helyi pénztárcaadatok másolásához vagy annak megvizsgálásához használd, hogy mit őriz meg egy mentés. Kezdd [az alapvető mentési útmutatóval](/hu/backup-recovery/backups/), amely ismerteti a minden szoftverpénztárcához szükséges helyreállítási adatokat.

<span id="what-to-keep" data-ginger-heading="mit-őrizz-meg" aria-hidden="true"></span>

## Mit őrizz meg?

| Mentendő adat | Célja | Fontos korlát |
| --- | --- | --- |
| Helyreállító szavak, sorrendben | A pénztárca kulcsainak újralétrehozása | Az eredeti jelmondat is szükséges, ha használtál ilyet |
| Eredeti jelmondat, a kis- és nagybetűkkel és minden karakterrel együtt | A megfelelő BIP39-pénztárca kiválasztása és a védett titkos adat feloldása | A Ginger nem tudja visszaállítani |
| A pénztárca `.json` fájlja | A tárolt kulcs- és szinkronizálási adatok megőrzése | A titkosított fájlhoz továbbra is kellenek a hozzáférési adatok; a 2FA szolgáltatásfüggőséget is hozzáadhat |
| A hozzá tartozó `.attr` fájl | Helyi címkék és pénztárcaspecifikus tulajdonságok megőrzése | Érzékeny metaadatokat tartalmaz; a helyreállító szavak nem állítják helyre |
| Hardvereszköz helyreállítási mentése | Kulcsok helyreállítása a gyártó eljárásával | Ne tartsd a számítógépen |

A helyi automatikus mentési mappa ugyanazon a számítógépen található. Segíthet egy sérült pénztárcafájl után, de nem véd a teljes lemez elvesztése, lopás vagy zsarolóvírus ellen.

<span id="make-a-file-backup" data-ginger-heading="fájlmentés-készítése" aria-hidden="true"></span>

## Fájlmentés készítése

A Ginger keresőjével nyisd meg a **Data Folder** mappát. Jegyezd fel a helyét, majd a másolás előtt szabályosan zárd be a Gingert. Egy szokásos mainnet-adatmappában a `Wallets` tartalmazza a pénztárcák `.json` fájljait és a hozzájuk tartozó `.attr` fájlokat, a `WalletBackups` pedig az automatikus pénztárcamentéseket. Más hálózatok külön almappákat használnak.

Másold a szükséges fájlokat védett mentési tárhelyre, megőrizve a neveket és a JSON–ATTR-fájlpárok összetartozását. Az adatmappa másolata jelmondat használata esetén is érzékeny adatvédelmi szempontból: címek, címkék, naplók, beállítások és rendelési metaadatok árulhatnak el tevékenységet. Ne töltsd fel hibakövetőbe, és ne küldd el e-mailben az ügyfélszolgálatnak.

Bekapcsolt 2FA esetén a `2fa_info.gws` fájlt is őrizd meg, de ne tekintsd önálló helyreállító kulcsnak. Egy, a Ginger 2FA-szolgáltatásával használt azonosítót rögzít. A helyreállító szavak és az eredeti jelmondat továbbra is olyan helyreállítási utat biztosítanak, amely nem függ az adott helyi pénztárcafájl visszafejtésétől.

<span id="choose-and-preserve-a-passphrase" data-ginger-heading="jelmondat-kiválasztása-és-megőrzése" aria-hidden="true"></span>

## Jelmondat kiválasztása és megőrzése

Olyan jelmondatot használj, amelyet más nehezen talál ki, és amelyet pontosan meg tudsz adni. Egy meghatározott szólistából véletlenszerűen választott szavakkal vagy megbízható jelszókezelő által létrehozott erős jelszóval elkerülheted a nevek, dátumok, idézetek és hétköznapi mondatok kiszámíthatóságát. Az ember által választott, „véletlenszerűnek látszó” helyettesítések gyakran kevésbé kiszámíthatatlanok, mint amilyennek tűnnek.

Az entrópia egy adott létrehozási folyamat mellett fennálló kiszámíthatatlanságot írja le; a hossz önmagában nem igazolja ezt. Egy nagy listából egyenletes véletlennel kiválasztott hat szó és egy kedvenc dalszövegből választott hat szó nem azonos ellenállást nyújt a találgatással szemben. Ez a kézikönyv nem ígéri, hogy egy adott karakterszám minden támadást kivéd.

Pontosan jegyezd fel a létrehozott eredményt, és ellenőrizd, hogy a helyreállítási terved megőrzi. Kerüld az elején vagy végén lévő szóközöket: a Ginger beviteli ellenőrzése levághatja vagy elutasíthatja őket. A jelszókezelő segíthet megőrizni egy erős jelmondatot, de tervezd meg, hogyan férsz hozzá a kezelőhöz ugyanazon számítógép elvesztése után. A szavak és a jelmondat együttes tárolása egyetlen kompromittálási pontot hoz létre; a külön tárolás újabb helyreállítási függőséget jelent. Olyan elrendezést válassz, amelyet ténylegesen fenn tudsz tartani.

A Ginger szoftverpénztárcájában a jelmondat a tárolt titkosított adatot is védi. Ezért nem szabad feltételezni, hogy egy fájltolvaj vagy egy helyreállítási kísérlet nélküle is sikerrel jár. Ne változtasd meg gondatlanul a jelmondatot egy másik pénztárcaalkalmazásban: az eltérő BIP39-jelmondat eltérő kulcsokat jelöl ki, nem csupán a régi pénztárca belépési jelszavát nevezi át.

Fiókkompatibilitás, fájlimportálás vagy címeket kihagyó keresés esetén használd a [haladó helyreállítási lehetőségeket](/hu/backup-recovery/recovery-options/).

<span id="a-single-private-key-is-not-the-full-recovery-backup" data-ginger-heading="egyetlen-privát-kulcs-nem-teljes-helyreállítási-mentés" aria-hidden="true"></span>

## Egyetlen privát kulcs nem teljes helyreállítási mentés

Egy előre feltöltött fizikai érme, amelynek kulcsát a gyártó hozta létre, bizalmat igényel abban, hogy a gyártó nem őrizte meg a kulcsot. Egy kinyomtatott privát kulcs vagy a gyártó titkos adata nem a Ginger teljes helyreállítószó-mentése. Őrizd meg a szoftverpénztárca szavait és eredeti jelmondatát, ne feltételezd, hogy egy exportált kulcs minden címét lefedi.
