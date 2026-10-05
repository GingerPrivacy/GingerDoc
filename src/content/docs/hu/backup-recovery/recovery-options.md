---
doc_id: "backup-recovery.recovery-options"
title: "Haladó helyreállítás: fiókok, címkeresés és fájlok"
description: "Az eredeti helyreállító szavak és jelmondat ellenőrzése után vizsgáld meg a Ginger-kompatibilitást, a gap limitet, a JSON-pénztárcaimportokat és a hiányzó metaadatokat."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Őrizd meg az eredeti helyreállítási adatokat és pénztárcafájlokat, mielőtt módosítod a helyreállítás vagy a fájlok beállításait.

Először végezd el [a szokásos helyreállítási ellenőrzéseket](/hu/backup-recovery/restore/): a kívánt pénztárca, pontos eredeti szavak és jelmondat, kapcsolat és keresési állapot ellenőrzését. Ez az oldal azokat az egyedi okokat tárgyalja, amelyek miatt ezek nem feltétlenül elegendők.

<span id="address-scanning-and-account-compatibility" data-ginger-heading="címkeresés-és-fiókkompatibilitás" aria-hidden="true"></span>

## Címkeresés és fiókkompatibilitás

A helyreállítási képernyő 12, 15, 18, 21 vagy 24 szóból álló érvényes angol helyreállítószó-készleteket fogad el, és ellenőrzi az ellenőrzőösszegüket. Az érvényes szavak önmagukban nem igazolják, hogy egy másik alkalmazás fiókja kompatibilis.

Ha szokatlanul sok fel nem használt fogadási címet hoztál létre egy fizetett cím előtt, az **Advanced Recovery Options** alatt elérhető a **Minimum Gap Limit:**. A kiadott helyreállítási képernyő alapértelmezett értéke 114. Emelése kibővítheti a keresést több munka és idő árán; nem javítja ki a hibás szavakat, téves jelmondatot vagy inkompatibilis pénztárcaformátumot. Csak akkor használj nagyobb értéket, ha a címeid előzményei indokolják.

Egy eredetileg más alkalmazásban létrehozott pénztárca eltérő címtípusokat, fiókokat vagy származtatási útvonalakat használhat. A BIP39-szavak önmagukban nem garantálják, hogy minden pénztárca minden fiókot megtalál. A Ginger szokásos mainnet-fiókjainál a natív SegWit útvonala `m/84'/0'/0'`, a Taprooté `m/86'/0'/0'`. Más alkalmazás haladó helyreállításának támogatnia kell a megfelelő fiókot és címtípust. Amikor lehetséges, a hardverpénztárca helyreállítását hardvereszközön végezd.

A Ginger ebben a kiadásban nem kínál SLIP39-titokrészekből történő helyreállítást. Ne adj meg helyreállítási részek gyűjteményét úgy, mintha egyetlen BIP39-szólista lenne.

<span id="import-a-file" data-ginger-heading="fájl-importálása" aria-hidden="true"></span>

## Fájl importálása

A pénztárca hozzáadására szolgáló képernyőn válaszd az **Import File** lehetőséget, és jelölj ki kompatibilis `.json` fájlt. Ha a név már használatban van, a Ginger másik nevet kérhet. Egy tetszőleges JSON-fájl, egy tranzakció-PSBT vagy szövegfájlba illesztett tetszőleges xpub nem kompatibilis pénztárcamentés.

A védett, importált szoftverpénztárca megnyitásához az eredeti jelmondatot használd. A 2FA-val titkosított fájl nem egyenértékű egy titkosítatlan, hordozható mentéssel. Őrizd meg a kapcsolódó fájlokat és hozzáférési adatokat, vagy inkább állítsd helyre a szavakból és az eredeti jelmondatból. A hardveres export importálása olyan pénztárcát hoz létre, amely aláíráshoz továbbra is az eszközre támaszkodik.

<span id="what-recovery-does-not-restore" data-ginger-heading="mit-nem-állít-helyre-a-helyreállítás" aria-hidden="true"></span>

## Mit nem állít helyre a helyreállítás?

A blokklánc nem tudja helyreállítani a privát címkéket, az alkalmazás minden beállítását vagy a szolgáltatói rendelések metaadatait. Őrizd meg a hozzá tartozó `.attr` fájlt, ha ezek fontosak. Ne írd felül a frissen helyreállított fájlokat régi metaadatokkal, miközben a Ginger fut. Ha segítségre van szükséged a kísérőadatok visszaállításához, dolgozz másolatokkal, és a fájlneveket és a verziót ismertesd, a tartalmukat ne oszd meg nyilvánosan.

Őrizd meg az eredetieket, és másolatokkal dolgozz. A helyi adatok módosítása előtt olvasd el [a pénztárcafájlok mentését](/hu/backup-recovery/backup-files/).
