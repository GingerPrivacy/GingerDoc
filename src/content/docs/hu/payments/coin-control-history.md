---
doc_id: "payments.coin-control-history"
title: "UTXO-kiválasztás, előzmények és elakadt tranzakciók"
description: "Vizsgáld meg a Ginger UTXO-it és fizetési előzményeit, válassz tudatosan, és értsd meg, mikor lehetséges gyorsítás vagy visszavonási kísérlet."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először értsd meg a szokásos küldési előnézetet, a címzett összegét és a díjat.

A teljes egyenleg sok külön UTXO-t tartalmazhat eltérő eredettel, visszaigazolási állapottal és adatvédelmi előzményekkel. A kézi kiválasztás segít eldönteni, melyiket költsd el. Megkönnyítheti a korábban elkülönült pénz véletlen összekapcsolását is, ezért konkrét céllal használd.

<span id="inspect-and-select-coins" data-ginger-heading="utxo-k-vizsgálata-és-kiválasztása" aria-hidden="true"></span>

## UTXO-k vizsgálata és kiválasztása

A pénztárca menüjében válaszd a **Wallet Coins** lehetőséget. Nézd meg a saját UTXO-id összegét, címkéit, visszaigazolási és adatvédelmi adatait. Egy tranzakció több UTXO-t hozhat létre, és egy cím több külön fizetést kaphat; sem egy sor, sem egy cím nem feltétlenül teljes pénztárca.

A **Send** → **Manual Control** használatával egyedi UTXO-kkal dolgozhatsz a fizetési folyamatban. Válassz elegendő értéket a fizetéshez és díjhoz. Jóváhagyás előtt ellenőrizd a bemeneteket és visszajárót. A választás a tranzakcióépítőnek elérhetővé teszi az UTXO-kat; a végső előnézetben nézd meg, melyeket használja ténylegesen.

Őrizz címkéket a pénz eredetéről és arról, ki ismeri már. Azonos címzetthez már kapcsolódó UTXO-ból fizetés kevesebb új adatot fedhet fel, mint nem összetartozó források kombinálása. A címke önmagában nem igazol névtelenséget, és nem akadályozza más blokkláncelemzését.

<span id="consolidation-and-small-coins" data-ginger-heading="összevonás-és-kis-utxo-k" aria-hidden="true"></span>

## Összevonás és kis UTXO-k

Az összevonás több kis UTXO-t kevesebb kimenetbe költ, általában saját pénztárcába. Most díjat fizet, és csökkentheti a későbbi fizetés bemenetszámát. Nyilvánosan összekapcsolja a bemeneteket is. Alacsony díjak olcsóbbá tehetik, de nem szüntetik meg ezt az adatvédelmi kompromisszumot.

Ne kombinálj automatikusan nem összetartozó UTXO-kat pusztán rendezett listáért. Nagyon kis bejövő kimenet költése gazdaságtalan lehet. A Ginger porküszöbe és CoinJoin-kizárásai eltérő helyzeteket kezelnek; a CoinJoin-kizárás nem akadályozza a szokásos fizetéshez választást.

A **Send** használatával hardverpénztárcába küldés szokásos blokkláncos tranzakció. Kérj és ellenőrizz új hardveres fogadási címet, majd nézd át a szoftverpénztárca díját és UTXO-it. Az átutalás látható marad a blokkláncon.

<span id="read-transaction-history" data-ginger-heading="tranzakciós-előzmények-olvasása" aria-hidden="true"></span>

## Tranzakciós előzmények olvasása

A pénztárca főképernyője bejövő, kimenő és CoinJoin-tevékenységet mutat. Egyedi körök vizsgálatához bontsd ki a csoportos CoinJoin-bejegyzéseket. A rendezés dátum, összeg, címke és állapot összehasonlítását segíti. A részletekben nézd meg az azonosítót és az elérhető visszaigazolási vagy díjadatot.

Konkrét tranzakció azonosításához használd a **Copy Transaction ID** lehetőséget. Lehetőség szerint tartsd bizalmasan a tranzakcióazonosítókat: megosztásuk címeket, összegeket és más tevékenységi kapcsolatokat fedhet fel. A nyilvános blokkláncböngésző megtudja a lekérdezéseidet is. Saját fizetéseid első ellenőrzési helye a Ginger helyi előzménye.

Vizsgálhatod, rendezheted és csoportosíthatod az előzményeket, és másolhatsz azonosítókat. Ebben a kiadásban e folyamat nem kínál tranzakciókeresőt vagy CSV-exportvezérlőt.

<span id="speed-up-an-unconfirmed-transaction" data-ginger-heading="még-nem-visszaigazolt-tranzakció-gyorsítása" aria-hidden="true"></span>

## Még nem visszaigazolt tranzakció gyorsítása

Ha a Ginger **Speed Up Transaction** lehetőséget kínál egy előzményhez, nyisd meg, és jóváhagyás előtt nézd át a többletdíjat. Tranzakciótól és elérhető kimenetektől függően a gyorsítás magasabb díjú változatra cserélhet tranzakciót, vagy gyermektranzakcióban költhet kimenetet, amely mindkettőhöz elegendő díjat fizet.

A pénztárcád nem gyorsíthat minden tranzakciót. Támogatott szerkezet és az érintett kulcsok és pénz elérése szükséges. A magasabb díj javítja a bányászok ösztönzését; nem garantál azonnali visszaigazolást. A csere módosíthatja az azonosítót, ezért címzettel egyeztetve nézd meg a frissített előzményeket.

<span id="cancel-an-unconfirmed-transaction" data-ginger-heading="még-nem-visszaigazolt-tranzakció-visszavonásának-megkísérlése" aria-hidden="true"></span>

## Még nem visszaigazolt tranzakció visszavonásának megkísérlése

A **Cancel Transaction**, ha elérhető, olyan díjas tranzakcióval próbálja helyettesíteni a függő fizetést, amely az érintett pénzt visszaadja a rendelkezésed alá. Verseny az eredeti visszaigazolásával, nem minden csomópont által elfogadott visszavonási parancs.

Olvasd el az ablakot és díjat, csak szándékod esetén hagyd jóvá, és figyeld, mi igazolódik vissza ténylegesen. Ha az eredeti előbb visszaigazolódik, a visszavonás nem fordíthatja vissza. Visszaigazolás után szükség esetén külön visszatérítést kérj a címzettől; a Ginger nem szerezheti vissza a pénzt.

Ne indíts második fizetést és ne ígérj visszatérítést, amíg nem érted, mely tranzakció igazolódott vissza. A böngésző és pénztárca átmenetileg eltérő mempooladatot mutathat, mert más csomópontokat lát.
