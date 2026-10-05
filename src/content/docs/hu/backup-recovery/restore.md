---
doc_id: "backup-recovery.restore"
title: "Pénztárca vagy hiányzó egyenleg helyreállítása"
description: "Állítsd helyre a Ginger-pénztárcát az eredeti szavaival és jelmondatával, majd a különleges esetek vizsgálata előtt ellenőrizd a kiválasztott pénztárcát és a keresés állapotát."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nehézségi szint: Mindennapi használat. Akkor válaszd ezt az útmutatót, amikor az általa bemutatott feladatra van szükséged.

A helyreállítás a kulcsok és tranzakciós előzményeik keresése. Kezdés előtt őrizd meg a régi számítógép pénztárcafájljait, ha hozzáférsz. Másolatokkal dolgozz, és tartsd meg az eredetieket, amíg nem ellenőrizted a helyreállított pénztárcát.

<span id="recover-from-words" data-ginger-heading="helyreállítás-szavakból" aria-hidden="true"></span>

## Helyreállítás szavakból

1. Telepítsd és ellenőrizd a Gingert egy megbízható számítógépen. A pénztárca hozzáadására szolgáló képernyőn válaszd a **Recover** lehetőséget.
2. Ha kéri, add meg a **Wallet Name** mezőt. Válassz külön nevet, hogy ne keverd össze egy meglévő pénztárcával.
3. Add meg sorrendben az eredeti helyreállító szavakat. A tényleges mentést használd, ne egy újonnan létrehozott szókészletet.
4. Az **Enter Passphrase** lépésnél az eredeti pénztárca létrehozásakor használt jelmondatot add meg. Csak akkor hagyd üresen, ha az eredetinek nem volt jelmondata. Nem új jelszót állítasz be.
5. Várd meg a szinkronizálás és a helyreállítás befejezését. Ismert tranzakciókat és fogadási címeket ellenőrizz, ne csak a megjelenített fiatértéket. Helyreállítás közben egyes szokásos pénztárcaműveletek rejtve maradnak.

Az eltérő jelmondatok eltérő érvényes pénztárcákat származtatnak. Egy gépelési hiba ezért üres pénztárcát eredményezhet „hibás jelmondat” hiba nélkül a seedből történő helyreállítás során. Ellenőrizd a kis- és nagybetűket, szóközöket, billentyűzetkiosztást és az eredeti mentést, mielőtt arra jutnál, hogy a pénz eltűnt.

<span id="an-apparently-empty-recovered-wallet" data-ginger-heading="a-helyreállított-pénztárca-üresnek-tűnik" aria-hidden="true"></span>

## A helyreállított pénztárca üresnek tűnik

Először ellenőrizd, hogy a kívánt pénztárcát és hálózatot választottad-e. A mainnet és a teszthálózatok külön bitcoinokat használnak. Ezután nézd meg a kapcsolat és a helyreállítás állapotát. Ha az alkalmazás még keres, a hiányos egyenleg nem végleges eredmény.

Ha ezek rendben vannak, de az ismert tranzakciók továbbra is hiányoznak, ne változtass véletlenszerűen beállításokat. Más alkalmazással létrehozott pénztárca vagy sok fel nem használt cím részletesebb vizsgálatot igényelhet.

Választható haladó útmutató: [fiókok, címkeresés és fájlimportálás](/hu/backup-recovery/recovery-options/). Ezeket az eseteket úgy ismerteti, hogy az egyedi beállítások nem válnak a szokásos, szavakból történő helyreállítás részévé.

A szavakból történő helyreállítás a hozzájuk tartozó kulcsokhoz való hozzáférést állítja vissza. A privát címkék és más helyi adatok külön fájlmentést igényelhetnek.

<span id="if-something-is-missing" data-ginger-heading="ha-valami-hiányzik" aria-hidden="true"></span>

## Ha valami hiányzik

| Ami még megvan | Gyakorlati következő lépés |
| --- | --- |
| Szavak és az eredeti jelmondat | Helyreállítás megbízható telepítésen |
| Hozzáférhető pénztárca, de hiányzó vagy érvénytelen szavak | Új, mentett pénztárca létrehozása és a pénz átutalása, amíg még hozzáférsz |
| Pénztárcafájl és eredeti hozzáférési adatai | Egy másolat importálásának megpróbálása; minden kísérőfájl megőrzése |
| Szavak, de elfelejtett, nem üres jelmondat | A Ginger nem tudja visszaállítani; az üres helyreállított pénztárcát ne keverd össze a sikeres helyreállítással |
| Hardvereszköz, de nincs megbízható mentés | Az eszköz kockáztatása előtt a gyártó mentésellenőrzési eljárásának követése |
| Sem költési hozzáférés, sem használható helyreállítási adat | Az ügyfélszolgálat nem tudja előállítani a hiányzó kulcsokat |

Soha ne add át egy „helyreállítási segítőnek” a szavakat, jelmondatot, privát kulcsokat vagy pénztárcafájlt. A valódi hibafeltárás nem titkos adatokkal kezdődik, például az alkalmazás verziójával, a hálózattal és a hiba szövegével.
