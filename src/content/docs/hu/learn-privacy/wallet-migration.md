---
doc_id: "learn-privacy.wallet-migration"
title: "Váltás Gingerre több pénztárcaelőzmény felfedése nélkül"
description: "Hasonlítsd össze az azonos Bitcoin-kulcsok helyreállítását, a hardver más alkalmazáshoz csatlakoztatását és a pénz új kulcsokra mozgatását a korábbi adatközlés eltűnésének feltételezése nélkül."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először értsd meg az új fogadási címeket és a szokásos fizetés ellenőrzését.

A pénztárcaszoftver cseréje a használt alkalmazást változtatja meg. Nem feltétlenül módosítja a Bitcoin-kulcsokat, címeket vagy egy korábbi szolgáltatás által már ismert adatokat. Döntsd el, hozzáférést állítasz helyre, kényelmi okból váltasz szoftvert, vagy új elkülönítést hozol létre a jövőbeli tevékenységhez.

<span id="choose-the-kind-of-move" data-ginger-heading="a-váltás-típusának-kiválasztása" aria-hidden="true"></span>

## A váltás típusának kiválasztása

| Választás | Mi marad azonos? | Mi változik? |
| --- | --- | --- |
| Azonos helyreállító szavak, jelmondat és támogatott fiók helyreállítása | A hozzájuk tartozó kulcsok és címek | Az őket kereső és kezelő alkalmazás; helyi jegyzetek hiányozhatnak |
| Azonos hardveres fiók csatlakoztatása a Gingerhez | A hardveren tartott kulcsok és a fiók címei | A nyilvános fiókadatokat tároló asztali alkalmazás |
| Új pénztárca új kulcsokkal és a pénz átutalása | A meglévő előzmények a blokkláncon maradnak | Jövőbeli kulcsok és címek; külön mentés és blokkláncos átutalás szükséges |

Ugyanazon pénztárca helyreállítása nem mozgatja a bitcoint, ezért pusztán a helyreállításnak nincs hálózati díja. Az új kulcsokra történő blokkláncos átutalás díjjal jár és látható tranzakciót hoz létre. Eltérő műveletek akkor is, ha mindkettő végén egyenleg látható a Gingerben.

<span id="understand-what-an-xpub-exposes" data-ginger-heading="értsd-meg-mit-fed-fel-egy-xpub" aria-hidden="true"></span>

## Értsd meg, mit fed fel egy xpub

A gyakran xpubnak nevezett kiterjesztett nyilvános kulcs lehetővé teszi nyilvános címek egy ágának származtatását a szokásos aláírási jogosultság nélkül. Egy fiók xpubja általában egynél több fogadási címet fed fel, beleértve a fiókból származtatott jövőbeli címeket. Hatóköre a kulcsfában elfoglalt helyétől függ; nem fed fel minden más megerősített származtatású fiókot. [BIP32: Hierarchical Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

Egy korábbi pénztárcaalkalmazás, portfóliószolgáltatás vagy könyvelőeszköz xpubot vagy címlekérdezéseket kaphatott. Eltávolítása nem vonja vissza a máshol tárolt másolatokat. Azonos fiók további használata a későbbi tevékenység felismerését is lehetővé teheti a megfigyelőnek. A Tor elrejthet közvetlen IP-kapcsolatot; a beküldött pénztárcaadatot nem feledtetheti el a fogadó szolgáltatással.

Ha nem tudod, mit kapott egy szolgáltatás, kezeld bizonytalanságként. A vizsgálathoz ne tölts fel xpubot online „adatvédelmi ellenőrzőbe”.

<span id="restore-access-to-an-existing-software-wallet" data-ginger-heading="hozzáférés-helyreállítása-meglévő-szoftverpénztárcához" aria-hidden="true"></span>

## Hozzáférés helyreállítása meglévő szoftverpénztárcához

1. Telepítés módosítása előtt őrizd meg az eredeti mentéseket és nyilvántartásokat. A váltás nem ok az egyetlen működő pénztárcafájl törlésére.
2. Használd a Ginger helyreállítási folyamatát az eredeti szavakkal és pontos eredeti jelmondattal. Ellenőrizd a pénztárcaformátum, címtípusok és fiók támogatását. Az érvényes mnemonikus kód önmagában nem igazolja a kompatibilitást.
3. Várd meg a keresés végét. Ismert tranzakciókat vagy privát nyilvántartásban lévő fogadási címet hasonlíts össze, mielőtt az üres kijelzésből pénzvesztésre következtetsz.
4. Nézd át a helyreállított címkéket, CoinJoin-beállításokat és adatvédelmi információkat. A szavak kulcsokat állítanak helyre; nem hozzák újra létre a korábbi alkalmazás minden jegyzetét vagy beállítását.
5. Felügyelet nélküli futás előtt ellenőrizd az automatikus CoinJoint és a célválasztást. Kerüld két alkalmazás használatát ugyanazon UTXO-k egyidejű költésére.

A hibás jelmondat eltérő, érvényes pénztárcát hozhat létre. Ne próbálgass véletlenszerű beállításokat, ne küldj tesztpénzt megmagyarázatlan üres fiókra, és ne adj idegen segítőnek helyreállító szavakat az eltérés megoldásához.

<span id="use-the-same-hardware-wallet-in-ginger" data-ginger-heading="ugyanazon-hardverpénztárca-használata-a-gingerben" aria-hidden="true"></span>

## Ugyanazon hardverpénztárca használata a Gingerben

Add hozzá az eszközt a **Hardware Wallet** lehetőséggel, kövesd a támogatott PIN-/jelmondatkéréseit, és a saját képernyőjén ellenőrizz fogadási címet. Győződj meg róla, hogy a Ginger a kívánt fiókot mutatja. E kiadás szokásos eszközimportja natív SegWitet használ; más szoftver másik fiókot vagy címtípust mutathatott.

A hardver csatlakoztatásával a Ginger nyilvános pénztárcaadatokat tárolhat, míg az aláírókulcsok az eszközön maradnak. Ez nem vonja vissza a gyártó kísérőalkalmazásával már megosztott adatokat. Azonos fiók más csak megfigyelésre szolgáló alkalmazásban történő megnyitása további előzményt fedhet fel akkor is, ha egyik alkalmazás sem tud hardver nélkül költeni.

Nem támogatott kapcsolat vagy fiók megkerüléséhez ne importáld a hardver helyreállító szavait a számítógépre. Ha a fiók nem jeleníthető meg helyesen, nézd meg az eszköz támogatott folyamatát.

<span id="create-a-new-separation-for-future-activity" data-ginger-heading="új-elkülönítés-létrehozása-a-jövőbeli-tevékenységhez" aria-hidden="true"></span>

## Új elkülönítés létrehozása a jövőbeli tevékenységhez

Ha a cél eltérő kulcsokat igényel, hozz létre és ellenőrizz új pénztárcát és mentést. Kérj új célt, és ha nem sürgős, kis próbautalást használj. A fennmaradó összeg mozgatása előtt ellenőrizd, hogy az új pénztárca tud fogadni, és van működő aláírási vagy helyreállítási utad.

Minden átutalás bemeneteit nézd át. Az összes régi UTXO közös küldése korábban külön tevékenységet kapcsolhat össze. Egy szokásos átutalás a bemeneti és kimeneti előzményeket is összeköti. Az új kulcsok önmagukban ezt nem rejtik el; átgondolt CoinJoin-folyamat egyes kapcsolati adatvédelmi célokat kezelhet díjak, alkalmasság és későbbi költés mellett.

Válaszd meg, mikor és hogyan szünteted meg a régi fogadási címek használatát. Frissítsd az általad kezelt fizetési utasításokat, őrizz elég adatot a késői fizetések felismeréséhez, és ne feltételezd, hogy egy megosztott cím nem működik többé a weboldalról eltávolítása után. Őrizd a még pénzt fogadható pénztárcák helyreállítási anyagát.

<span id="when-the-move-is-urgent" data-ginger-heading="ha-sürgős-a-váltás" aria-hidden="true"></span>

## Ha sürgős a váltás

A kiszivárgott xpub elsősorban adatvédelmi probléma. A kiszivárgott aláírási titkok azonnali pénzkezelési problémát jelentenek. Ha a támadó már elköltheti a pénzt, részesíts előnyben megbízható célt új kulcsokkal egy bonyolult adatvédelmi folyamatra várás helyett. Az alkalmazásjelszó módosítása vagy a kiszivárgott seed új hardvereszközre helyezése nem vonja vissza a másolt kulcsokat.

A váltás után nézd át a [költési példákat](/hu/learn-privacy/spending-after-coinjoin/) és az [adatmegosztást](/hu/learn-privacy/information-sharing/). A fenntartható cél a továbbra is ismert adatok megértése és a szükségtelen új adatközlés elkerülése.
