---
doc_id: "getting-started.start-here"
title: "Kezdd itt: az első lépéseid a Gingerrel"
description: "Ismerd meg a Ginger működését, védd a helyreállítási mentésedet, és próbáld ki a fogadást és küldést, mielőtt felfedeznéd a választható haladó funkciókat."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Kezdd itt
prev: false
next:
  link: /getting-started/install/
  label: A Ginger Wallet telepítése
---

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

A Ginger számítógépes alkalmazás bitcoin fogadására és küldésére. Te rendelkezel azokkal az adatokkal, amelyek lehetővé teszik a bitcoinjaid elköltését. A Ginger a CoinJoin nevű választható funkcióval abban is segíthet, hogy nehezebb legyen követni a fizetési előzményeket.

Először megtanulhatod a pénztárca szokásos használatát. Szoftverpénztárca létrehozásához nem kell saját Bitcoin-csomópont, hardvereszköz vagy haladó CoinJoin-beállítás.

<!-- Preserve links to the questions previously published on this page. -->
<span id="whats-the-officially-supported-operating-systems" aria-hidden="true"></span>
<span id="is-there-an-androidios-version" aria-hidden="true"></span>
<span id="does-ginger-support-altcoins" aria-hidden="true"></span>
<span id="what-are-the-minimal-requirements-to-run-ginger" aria-hidden="true"></span>
<span id="do-i-need-to-run-tor" aria-hidden="true"></span>

<span id="1-install-the-real-application" data-ginger-heading="1-telepítsd-a-valódi-alkalmazást" aria-hidden="true"></span>

## 1. Telepítsd a valódi alkalmazást

Kövesd [a Ginger Wallet telepítési útmutatóját](/hu/getting-started/install/), és használd az ott szereplő hivatalos letöltési hivatkozásokat. A számítógépedhez való csomagot válaszd. Ne telepíts hasonló nevű telefonos alkalmazást vagy olyan szoftvert, amelyet egy támogatást kínáló idegen küldött.

A Ginger támogatja a Windowst, a macOS-t és a Linuxot; a telepítési útmutató felsorolja a támogatott verziókat és processzorokat. Ez a kiadás kizárólag Bitcoint kezel, és nincs Android- vagy iOS-alkalmazása. Internetkapcsolatra és írható tárhelyre van szükség. A Tor a csomag része, ezért nem kell külön telepítened.

Végezd el a letöltés ellenőrzését az útmutató szerint. A külön [haladó aláírás-ellenőrzési útmutató](/hu/getting-started/verify-download/) ismerteti a parancssoros ellenőrzéseket, ha szükséged van rájuk.

<span id="what-is-the-password-used-for" aria-hidden="true"></span>

<span id="2-create-a-wallet-and-make-its-backup" data-ginger-heading="2-hozz-létre-egy-pénztárcát-és-készíts-róla-mentést" aria-hidden="true"></span>

## 2. Hozz létre egy pénztárcát, és készíts róla mentést

Kövesd [az első pénztárcád létrehozásának útmutatóját](/hu/getting-started/first-wallet/). Válaszd a **New** lehetőséget, írd le sorrendben a tizenkét **Recovery Words** szót, majd teljesítsd a **Confirm Recovery Words** lépést. Tartsd a leírt mentést titokban, és úgy őrizd, hogy a számítógép elvesztésekor is elérhető legyen.

Az **Add Passphrase** lépésnél értsd meg a választásodat, mielőtt továbblépsz. Ha jelmondatot használsz, a helyreállításhoz az eredeti szavak és pontosan az a jelmondat is szükséges. A jelmondat a számítógépen lévő pénztárcához való hozzáférést is védi. A Ginger nem tudja visszaállítani. Az üres mezőkkel létrehozott pénztárcának nincs ilyen kiegészítő jelmondata; jegyezd fel, melyik lehetőséget választottad.

Ne tarts jelentős egyenleget a pénztárcában, amíg a mentés nem olvasható, és nem tudod megnyitni a kívánt pénztárcát. A szavakat és a jelmondatot soha ne oszd meg az ügyfélszolgálattal.

<span id="why-is-it-important-to-use-a-new-address-for-every-payment" aria-hidden="true"></span>

<span id="3-receive-a-small-first-payment" data-ginger-heading="3-fogadj-egy-kis-összegű-első-fizetést" aria-hidden="true"></span>

## 3. Fogadj egy kis összegű első fizetést

Várd meg a szinkronizálás befejezését: ilyenkor a pénztárca megkeresi a tranzakcióidat a Bitcoin-hálózaton. Válaszd a **Receive** lehetőséget, adj meg egy hasznos címkét, és hozz létre fogadási címet. Oszd meg a fizetővel, vagy használd egy tőzsde blokkláncon történő Bitcoin-kiutalásához.

Minden fizetéshez hozz létre új címet. A címek újrahasználata megkönnyíti a külön fizetések összekapcsolását a Bitcoin nyilvános nyilvántartásában.

A fizetés jóváhagyása előtt ellenőrizd a teljes címet és a hálózatot. A Ginger blokkláncon fogad Bitcoint; más eszköz hálózata vagy egy Lightning-számla nem helyettesíti ezt. A visszaigazolás azt jelenti, hogy a tranzakció bekerült egy Bitcoin-blokkba. A fizető képernyőképe önmagában nem visszaigazolás.

<span id="4-make-a-small-first-payment" data-ginger-heading="4-küldj-egy-kis-összegű-első-fizetést" aria-hidden="true"></span>

## 4. Küldj egy kis összegű első fizetést

Válaszd a **Send** lehetőséget, és a szokásos folyamatban használd az **Automatic** kiválasztást. Add meg a címzett címét és az összeget, válaszd a **Continue** lehetőséget, majd ellenőrizd a célt, a címzett által megkapott összeget és a díjat. Csak akkor válaszd a **Confirm** lehetőséget, ha ezek helyesek.

A díj a Bitcoin-tranzakció által elfoglalt helyért fizetett összeg. Ha a kiválasztott pénz egy része megmarad, visszajáróként visszakerül a pénztárcádba. Ezt nem kell kézzel visszaküldened. A visszaigazolt fizetést a Ginger nem tudja visszavonni.

Kapcsolati hiba után ellenőrizd az előzményeket, mielőtt újra megpróbálsz fizetni. Ezzel elkerülheted a dupla fizetést, ha az első tranzakció már el lett küldve.

<span id="5-decide-whether-to-use-coinjoin" data-ginger-heading="5-döntsd-el-használod-e-a-coinjoint" aria-hidden="true"></span>

## 5. Döntsd el, használod-e a CoinJoint

A CoinJoin több ember műveleteit egy közös Bitcoin-tranzakcióba egyesíti, hogy nehezebb legyen következtetni a tulajdonosi kapcsolatokra. A pénztárcád megtartja az aláírókulcsait. A részvétel díjakkal jár, időbe telhet, és nem törli el azokat az adatokat, amelyeket egy címzett vagy tőzsde már ismer.

A kiválasztott pénztárca **Coinjoin Settings** beállításaiban nézd át az **Automatically start coinjoin** kapcsolót. Tanulás közben kapcsold ki az automatikus részvételt, ha nem szeretnéd, hogy felügyelet nélkül induljon el. Ha már folyamatban van egy kör, használd a vezérlőpanel szüneteltető gombját, és hagyd befejeződni a kritikus műveleteket.

A szokásos fizetések fogadásához és küldéséhez nem kell megvárnod, hogy az adatvédelmi jelző elérje a 100%-ot. Az induláshoz nem kell minden haladó beállítást sem finomhangolnod.

<span id="you-have-finished-the-first-use-path" data-ginger-heading="befejezted-az-első-használat-lépéseit" aria-hidden="true"></span>

## Befejezted az első használat lépéseit

A legfontosabb ellenőrzések: helyreállításra alkalmas mentés, a kívánt pénztárca, a megfelelő fizetési hálózat, a címzett és a tényleges díj. Továbbra is használj új fogadási címeket, és nézz át minden fizetést.

Térj vissza ehhez az útmutatóhoz, amikor szükséged van a fogadás és küldés ellenőrzőlistájára. A **Advanced use** rész elkülönül az első használat lépéseitől. Például [a Ginger Wallet letöltésének ellenőrzése](/hu/getting-started/verify-download/) részletesen ismerteti a parancssoros aláírás-ellenőrzést.
