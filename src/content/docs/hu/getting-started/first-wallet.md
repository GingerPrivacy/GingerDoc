---
doc_id: "getting-started.first-wallet"
title: "Az első Ginger-pénztárcád létrehozása és megnyitása"
description: "Hozz létre egy Bitcoin-pénztárcát, jegyezd fel a helyreállító szavakat és a jelmondatot, és ismerd meg az első szinkronizálást és a CoinJoin beállításait."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Az első pénztárcád létrehozása
prev:
  link: /getting-started/install/
  label: A Ginger Wallet telepítése
next: false
---

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

A Ginger-pénztárca tartalmazza a bitcoinjaid felismeréséhez és elköltéséhez szükséges adatokat. Maga a bitcoin a Bitcoin-hálózaton van nyilvántartva. Ha elveszíted a számítógépedet, a megfelelő biztonsági mentéssel helyreállíthatod a pénztárcát; ha a pénztárca és a helyreállítási adatok is elvesznek, ez már nem feltétlenül lehetséges.

<span id="create-a-software-wallet" data-ginger-heading="szoftverpénztárca-létrehozása" aria-hidden="true"></span>

## Szoftverpénztárca létrehozása

1. Nyisd meg a pénztárca hozzáadására szolgáló képernyőt, és válaszd a **New** lehetőséget. Ha megjelenik a **Wallet Name** mező, adj olyan nevet, amely megkülönbözteti ezt a pénztárcát a többitől. Az első pénztárca automatikusan létrehozott nevet is kaphat, és ilyenkor ez a lépés nem jelenik meg.
2. A Ginger tizenkét angol **Recovery Words** szót mutat. Írd le őket a megjelenített sorrendben, és őrizd őket offline. Ne fényképezd le, ne küldd el e-mailben, és ne oszd meg az ügyfélszolgálattal. A Ginger a létrehozás után nem mutatja meg őket újra.
3. Lépj tovább a **Confirm Recovery Words** képernyőre, és válaszd ki a kért szavakat a leírt mentésből. Ez azt ellenőrzi, hogy a sorrendet is feljegyezted, és nem csupán felismered a képernyőn látható szavakat.
4. Az **Add Passphrase** képernyőn adj meg egy jelmondatot, és erősítsd meg, vagy hagyd mindkét mezőt üresen, ha tudatosan jelmondat nélküli pénztárcát választasz. Jegyezd fel, használtál-e jelmondatot. A nem üres jelmondat a helyreállításhoz és a védett pénztárca megnyitásához is szükséges; ez nem olyan jelszó, amelyet a Ginger vissza tud állítani.
5. Ha megjelennek a szolgáltatási feltételek, végezd el az ehhez szükséges lépést. Várd meg, amíg a pénztárca csatlakozik és szinkronizál, mielőtt az egyenlegére hagyatkoznál.

A pénztárca neve helyi címke. Nem helyreállítási adat, és nem módosítja a kulcsokat. Egy pénztárca átnevezése nem ugyanaz, mint egy új létrehozása.

<span id="decide-how-to-use-coinjoin" data-ginger-heading="döntsd-el-hogyan-használod-a-coinjoint" aria-hidden="true"></span>

## Döntsd el, hogyan használod a CoinJoint

A Ginger felajánlhatja a CoinJoin-beállítások személyre szabását. Nézd át a beállításokat és a díjakat, mielőtt pénzt hagynál elérhetően az automatikus CoinJoin számára. A **Coinjoin Settings** alatt az **Automatically start coinjoin** szabályozza, hogy a pénztárca elindítja-e a részvételt a vezérlőpanel indítógombjának megnyomása nélkül. Ellenőrizd a pénztárcád tényleges kapcsolóját; egy importált vagy korábban beállított pénztárcánál eltérő beállítások lehetnek érvényben.

A CoinJoin tranzakciós díjakkal jár, és időbe telhet. A bitcoin fogadása, a szokásos fizetés küldése és a CoinJoin használata külön műveletek. A fogadást és küldést először olyan kis összeggel tanulhatod meg, amelynek elvesztése nem okozna jelentős gondot.

<span id="open-an-existing-wallet" data-ginger-heading="meglévő-pénztárca-megnyitása" aria-hidden="true"></span>

## Meglévő pénztárca megnyitása

Válaszd ki a nevét a Ginger pénztárcalistájában. Ha kéri, add meg az eredeti jelmondatot. Ha bekapcsoltad az alkalmazás kétfaktoros hitelesítését, az egyes pénztárcák megnyitása előtt teljesítsd az indításkor megjelenő hitelesítést. A hardverpénztárca a számítógépes szoftverpénztárca titkos adata helyett a saját eszközén végzett jóváhagyást használja.

Ha helyreállító szavakból szeretnél pénztárcát hozzáadni, a pénztárca hozzáadására szolgáló képernyőn válaszd a **Recover** lehetőséget. Kompatibilis JSON-mentés vagy támogatott hardverpénztárca-export betöltéséhez válaszd az **Import File** lehetőséget. Ne illeszd a helyreállító szavakat egy fájlimportálási ablakba, és ne importáld a hardverpénztárcád helyreállító szavait pusztán azért, hogy csatlakoztasd az eszközt.

<span id="know-when-the-wallet-is-ready" data-ginger-heading="tudd-mikor-áll-készen-a-pénztárca" aria-hidden="true"></span>

## Tudd, mikor áll készen a pénztárca

A szinkronizálás megkeresi a pénztárcádhoz tartozó tranzakciókat. Amíg nem fejeződik be, az egyenleg vagy az előzmények hiányosak lehetnek. Egy helyreállított pénztárca a keresés idején elrejtheti a szokásos fogadási és küldési műveleteket. A még nem visszaigazolt bejövő fizetést a pénztárca már észlelte, de az még nem került blokkba.

Jelentős összeg fogadása előtt ellenőrizd, hogy a pénztárca megnyílik, a helyreállítási mentés olvasható, és érted a jelmondattal kapcsolatos döntésedet. Egy hozzáférhető szoftverpénztárca szavainak ellenőrzéséhez használd a **Wallet Settings** → **Tools** → **Verify Recovery Words** menüpontot és a **Verify** gombot. Ez egy mentést ellenőriz; az elfelejtett szavakat nem mutatja meg.

<span id="close-safely" data-ginger-heading="biztonságos-bezárás" aria-hidden="true"></span>

## Biztonságos bezárás

Az ablak bezárása után a Ginger tovább futhat, ha a **Settings** → **General** alatt be van kapcsolva a **Run in background when window closed**. Ha le szeretnéd állítani, használd az alkalmazás szokásos kilépési műveletét. A CoinJoin kritikus szakaszában hagyd, hogy a Ginger befejezze a leállási folyamatát. A kényszerített bezárás megszakíthatja a részvételt.

<span id="next-receive-and-send" data-ginger-heading="következő-lépés-fogadás-és-küldés" aria-hidden="true"></span>

## Következő lépés: fogadás és küldés

Ha ellenőrizted a mentést, és a szinkronizálás is befejeződött, térj vissza az [első kis összegű fizetés fogadásához](/hu/getting-started/#3-receive-a-small-first-payment). Az ott következő szakasz bemutatja az első fizetés elküldését.
