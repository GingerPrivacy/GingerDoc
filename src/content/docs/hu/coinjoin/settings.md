---
doc_id: "coinjoin.settings"
title: "CoinJoin és kimeneti pénztárcák beállítása"
description: "Értsd meg a Ginger CoinJoin adatvédelmi és költségbeállításait, az UTXO-k kizárását és a kimenetek másik betöltött pénztárcába küldését."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először értsd meg a szokásos indítási és szüneteltetési vezérlőket és azt, hogy a befejezett körök díjakkal járnak.

A **Coinjoin Settings** a kiválasztott pénztárcára vonatkozik. Egyszerre egy beállítást módosíts, és figyeld a hatását. Az agresszívebb beállítások növelhetik a díjat vagy várakozást anélkül, hogy javítanák a helyzetedben fontos adatvédelmet.

<span id="automatic-participation-and-cost-preferences" data-ginger-heading="automatikus-részvétel-és-költségbeállítások" aria-hidden="true"></span>

## Automatikus részvétel és költségbeállítások

| Beállítás | Mit szabályoz? |
| --- | --- |
| **Automatically start coinjoin** | Elindítja a részvételt, ha a pénztárca és megfelelő pénz elérhető. |
| **Stop coinjoin threshold** | Leállítja az automatikus CoinJoint, ha a pénztárcaegyenleg a választott BTC-összeg alatt van. Pénztárcaszintű leállítási szabály. Nem állítja a koordinátor díjmentességi küszöbét vagy minimális elfogadott bemenetét. |
| **Coinjoin time preference** | Összehasonlítja az aktuális bányászati díjakat a kiválasztott időszak mediánjával. A részvétel időzítését befolyásolja, nem befejezési határidőt ígér. |
| **Ignore coinjoin time preference below** | E díjráta-küszöb alatt akkor is enged részvételt, ha az időpreferencia-összehasonlítás egyébként várakozna. |
| **Random Skip** | Megadja, milyen gyakran maradjanak ki megfelelő körök. Lehetőségei: **Disabled**, **Rarely**, **Sometimes**, **Often**. Több kihagyás általában több várakozást jelent. |

Ha a vezérlőpanel gazdaságtalan egyenleget jelez, az indítógomb megnyomása megkerülheti a leállítási küszöböt. Ez nem szünteti meg a tranzakciós díjakat. Felülbírálás előtt mérlegeld az elérhető UTXO-k értékét és a várható költségeket.

<span id="privacy-settings" data-ginger-heading="adatvédelmi-beállítások" aria-hidden="true"></span>

## Adatvédelmi beállítások

Az **Anonymity score target** az a minimális belső pontszám, amelynél a Ginger privátnak tekint egy UTXO-t. A kiadott szerkesztő 2 és 1000 közötti egész számokat fogad el. A cél emelése több CoinJoin-tevékenységhez vezethet; nem vásárol garanciát arra, hogy pontosan ennyi független személy birtokolhatja az UTXO-t.

A **Single non-private coin restriction** regisztrációnként csak egy, 1-es anonimitási pontszámú UTXO-t enged. Ez csökkentheti a több korábban nem privát UTXO együttes regisztrálása által létrehozott közvetlen kapcsolatot, de lassíthatja az előrehaladást a sok ilyen UTXO-t tartalmazó pénztárcában.

A cél csökkentése azonnal módosíthatja, mit nevez a felület privátnak, anélkül, hogy a blokklánc megváltozna. Az adatvédelmi jelzőket becslésként és szabályzatbeállításként kezeld, ne bizonyítékként arra, hogy egy külső megfigyelő minden adatot elveszített.

<span id="exclude-specific-coins" data-ginger-heading="egyes-utxo-k-kizárása" aria-hidden="true"></span>

## Egyes UTXO-k kizárása

A CoinJoin-vezérlőpanel menüjéből nyisd meg az **Exclude Coins** lehetőséget. Nézd át a listát, és jelöld a CoinJoinból kizárni kívánt UTXO-kat. E listában teheted őket újra alkalmassá. A kizárás ezekre az UTXO-kra vonatkozik; nem állandó szabály minden későbbi, ugyanarra a címre érkező fizetésre.

A CoinJoinból kizárás nem zárolja az UTXO-t a szokásos költés ellen, és nem helyettesíti a hardveres tárolást. Ha minden elérhető UTXO ki van zárva, a vezérlőpanel **Only excluded funds are available** üzenetet mutathat. Díj- vagy adatvédelmi beállítás módosítása előtt ellenőrizd ezt a listát.

<span id="receive-outputs-in-another-wallet" data-ginger-heading="kimenetek-fogadása-másik-pénztárcában" aria-hidden="true"></span>

## Kimenetek fogadása másik pénztárcában

A **Coinjoin to this wallet** választja ki, hová érkeznek a forráspénztárca CoinJoin-kimenetei. Alapértelmezésben maga a forráspénztárca a cél.

1. Töltsd be a kívánt célpénztárcát a Gingerbe. Készíts mentést, és ellenőrizd, hogy te rendelkezel a fogadási címeivel.
2. Amikor nincs folyamatban CoinJoin, nyisd meg a forráspénztárca **Coinjoin Settings** beállításait, és a **Coinjoin to this wallet** alatt válaszd a célt.
3. Indítás előtt ellenőrizd a kiválasztott nevet. Csak betöltött, alkalmas pénztárcák láthatók; ne feltételezd, hogy a lemezen felsorolt pénztárca be is van töltve.
4. Sikeres tranzakció után ellenőrizd a célpénztárca szinkronizált előzményeit és a forrás egyenlegét is.

A cél aktív CoinJoin alatt nem módosítható. **A választás a Ginger újraindítása után alaphelyzetbe áll**, ezért minden olyan munkamenet előtt ellenőrizd, amelyben fontos a cél. Kerüld két pénztárca beállítását arra, hogy egymásnak küldjék vissza a CoinJoin-kimeneteket; az elérhető választások korlátozzák a rekurzív elrendezéseket.

A kiadott célválasztó betöltött hardverpénztárcát is tartalmazhat. A forrás továbbra is a CoinJoint aláíró szoftverpénztárca; a hardveres cél nem teszi ezt hideg pénztárcává, és nem teszi képessé a hardverpénztárcát önálló CoinJoinra. Csak az alkalmazás által ténylegesen kínált célt használj, és ellenőrizd a mentését és a címek feletti rendelkezést, mielőtt erre az útra hagyatkozol.

<span id="experimental-coin-selection" data-ginger-heading="kísérleti-utxo-kiválasztás" aria-hidden="true"></span>

## Kísérleti UTXO-kiválasztás

A kiadás kínál **(EXPERIMENTAL) Improved Coin Selection** lehetőséget. Beállítása haladó finomhangoló felület, nem a CoinJoin előfeltétele. Az elérhető vezérlők:

| Vezérlő | Tervezett hatás |
| --- | --- |
| **Force to use low privacy coins** | Megköveteli, hogy a választás tartalmazzon UTXO-t a legkevésbé privát csoportból. |
| **Can select already private coins** | Engedi a választónak az adatvédelmi cél feletti UTXO-k használatát. E részvétel is járhat bányászati díjjal. |
| **Coin privacy difference normalization for score calculation** | Alacsonyabb érték a közelebb álló adatvédelmi pontszámú UTXO-k kiválasztását részesíti előnyben. |
| **Amount loss normalization for score calculation** | Alacsonyabb érték a kisebb relatív összegveszteségű választást részesíti előnyben. |
| **Target coin number per wallet bucket** | Befolyásolja az UTXO-értékek túlreprezentált csoportjaiból történő kiválasztást. |
| **Use the Old Coin Selector for fallback** | Összehasonlítja a régi és új választó eredményét, és választ közülük. |

Tartsd meg a kezdeti értékeket, hacsak nem érted a módosított kompromisszumot. Ezek kiválasztási preferenciák; nem pontos teljesdíj-korlátok, és nem ígérik meg egy kör kimeneteinek számát.

<span id="when-another-round-cannot-start" data-ginger-heading="amikor-nem-indulhat-újabb-kör" aria-hidden="true"></span>

## Amikor nem indulhat újabb kör

Ebben a kiadásban a szokásos CoinJoin-indítás elutasítja azt a pénztárcát, amelynek pénze már teljesíti az adatvédelmi célt, és azt az elérhető választást is, amely csak privát UTXO-kból áll. Ezt a szabályt másik kimeneti pénztárca választása nem kerüli meg. Ha minden pénz privát, a vezérlőpanel elrejtheti a kézi indítógombot. Ne hagyatkozz arra, hogy minden nem privát UTXO kizárása után kört kényszerítesz ki kizárólag a megmaradt privát UTXO-k továbbítására.

Az alkalmas részvétel indítása előtt válaszd ki a célt, vagy mérlegeld a már privát pénz szokásos átutalását. Az adatvédelmi követelmények csökkentése vagy nem összetartozó pénz bevonása pusztán az indulásért módosíthatja az adatvédelmi eredményt és a költséget.
