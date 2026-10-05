---
doc_id: "hardware-wallets.connect"
title: "Hardverpénztárca csatlakoztatása és használata"
description: "Csatlakoztass támogatott hardverpénztárcát a Gingerhez, ellenőrizd a fogadási címeket az eszközön, és biztonságosan hagyd jóvá a fizetéseket."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="does-ginger-support-hardware-wallets"></span>

> Nehézségi szint: Mindennapi használat. Akkor válaszd ezt az útmutatót, amikor az általa bemutatott feladatra van szükséged.

A hardverpénztárca külön eszközön tartja az aláírókulcsokat. A Ginger megjelenítheti az egyenlegét és előkészíthet tranzakciókat, míg az eszköz jóváhagyja a támogatott aláírási műveleteket. A számítógép továbbra is érzékeny nyilvános adatokat kezel, ezért a hardveres tárolás nem teszi névtelenné a tevékenységet.

<span id="compatibility-in-this-release" data-ginger-heading="kompatibilitás-ebben-a-kiadásban" aria-hidden="true"></span>

## Kompatibilitás ebben a kiadásban

A Ginger 2.0.26 a Hardware Wallet Interface (HWI) 3.2.0 verzióját tartalmazza. A Ginger felismeri a Coldcard, Ledger Nano S, Nano S Plus és Nano X, Trezor One, Model T, Safe 3 és Safe 5, BitBox01, BitBox02, KeepKey és Blockstream Jade eszközöket. A felismerés nem garantálja minden eszköz, firmware, jelmondatfolyamat és címtípus működését a grafikus felületen.

A [HWI 3.2.0 eszközmátrixa](https://github.com/bitcoin-core/HWI/blob/3.2.0/docs/devices/index.rst) írja le az alapul szolgáló kommunikáció képességeit. A Ginger ennek egy részét kínálja: például szokásos eszközcsatlakoztatása natív SegWit-fiókot importál. A HWI többaláírásos vagy Taproot-támogatása önmagában nem hoz létre megfelelő Ginger-beállítási folyamatot.

Jelentős pénz mozgatása előtt ellenőrizd, hogy a pontos eszközöd csatlakozhat, fogadási címet jeleníthet meg és kis próbafizetést írhat alá. Ha olyan PIN- vagy jelmondatmegadás kell, amelyet a Ginger nem tud teljesíteni, végezd el a támogatott eszközoldali folyamatot, vagy kérdezd a gyártót. Kerülőútként ne gépeld a helyreállító szavait a Gingerbe.

<span id="add-the-device" data-ginger-heading="az-eszköz-hozzáadása" aria-hidden="true"></span>

## Az eszköz hozzáadása

1. A gyártó utasításai szerint inicializáld és mentsd a hardverpénztárcát. Megbízható firmware-t és adatátvitelre alkalmas USB-kábelt használj.
2. Egyszerre egy eszközt csatlakoztass, oldd fel, és szükség esetén nyisd meg a Bitcoin-alkalmazását. Zárj be más pénztárcaalkalmazásokat, amelyek foglalhatják az USB-kapcsolatot.
3. A Ginger pénztárca-hozzáadási képernyőjén válaszd a **Hardware Wallet** lehetőséget, és ha kéri, adj nevet.
4. Kövesd a felismerési és eszközkéréseket. A Ginger felismerhet korábban hozzáadott pénztárcát, és új példány helyett felajánlhatja a megnyitását.
5. Várd meg a szinkronizálást. Ellenőrizd a kívánt hálózatot és fiókot.

A Ginger hardver nélkül is tarthat nyilvános pénztárcabejegyzést a gépen. Ez megfigyelést és címgenerálást enged; a költéshez továbbra is kell az aláíróeszköz vagy kulcsainak érvényes helyreállítása.

<span id="receive-and-verify" data-ginger-heading="fogadás-és-ellenőrzés" aria-hidden="true"></span>

## Fogadás és ellenőrzés

Válaszd a **Receive** lehetőséget, adj címkét, és hozz létre címet. Ha elérhető, használd a **Show on the hardware wallet** lehetőséget. Megosztás előtt hasonlítsd össze az eszköz teljes címét a Ginger címével. Eltérésnél állj meg: más cím jóváhagyása a pénztárcádon kívülre küldhet pénzt.

A számítógép feltörve is mutathat hihető címet. Az eszköz képernyője azért hasznos, mert saját kulcsaival külön ellenőrzést biztosít. Minden fizetéshez új címet használj a nem összetartozó beérkezések összekapcsolásának elkerülésére.

<span id="send-and-approve" data-ginger-heading="küldés-és-jóváhagyás" aria-hidden="true"></span>

## Küldés és jóváhagyás

Készíts elő fizetést a Gingerben, és ellenőrizd a címzettet, összeget, visszajárót és díjat. A hardverpénztárcán nézd át, mit kér aláírni. Utasítsd el, ha a cél vagy összeg eltér a szándékodtól, vagy ha az eszköz olyan visszajáró-/kimeneti feltételt jelez, amelyet nem tudsz megmagyarázni.

Tartsd csatlakoztatva az eszközt az aláírás végéig. Ezután a Ginger előzményeiben ellenőrizd a továbbítást és visszaigazolást. Az eszköz eltávolítása nem töröl már továbbított tranzakciót.

<span id="coinjoin-and-other-limits" data-ginger-heading="coinjoin-és-más-korlátok" aria-hidden="true"></span>

## CoinJoin és más korlátok

A hardverpénztárca nem lehet az automatikus Ginger CoinJoin forrásként aláíró pénztárcája. Betöltött hardverpénztárca megjelenhet szoftverpénztárca CoinJoin-kimeneti céljaként; ez fogadási szerep, és választása újraindításkor alaphelyzetbe áll. Csak a Ginger által ténylegesen kínált célt használd, és ellenőrizd a rendelkezést, mielőtt rá hagyatkozol.

A [tőzsdétől hidegtárolásig útmutató](/hu/hardware-wallets/exchange-to-cold-storage/) összehasonlítja az alkalmas CoinJoin-kimenetek közvetlen fogadását egy későbbi szokásos átutalással. Tartalmazza a csak privát UTXO-s indítás korlátját és a két pénztárca egyeztetési ellenőrzéseit.

Ebben a kiadásban a PayJoin-küldés hardverpénztárcánál elutasított. Az üzenetaláírás eszköz- és ellenőrzőkompatibilitástól függ. Sem az eszköz, sem a Ginger nem tud visszafordítani visszaigazolt fizetést. Fájlos aláíráshoz olvasd el [a PSBT-folyamatot](/hu/hardware-wallets/psbt/).

<span id="connection-problems" data-ginger-heading="kapcsolati-problémák" aria-hidden="true"></span>

## Kapcsolati problémák

Próbálj ismerten adatképes kábelt, közvetlen USB-portot és egyetlen feloldott eszközt. Linuxon kövesd a gyártó megfelelő udev-/USB-jogosultsági utasításait, majd csatlakoztasd újra. Ne futtasd a pénztárcát tartós megoldásként rootként. Ha más jelmondat váratlanul üres fiókot nyit, az eszköz visszaállítása helyett ellenőrizd az eredeti eszközjelmondatot.
