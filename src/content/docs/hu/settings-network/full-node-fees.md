---
doc_id: "settings-network.full-node-fees"
title: "Saját Bitcoin-csomópont és díjbecslések használata"
description: "Állíts be blokkletöltést a Gingerben saját csomópontról, ismerd meg a beépített Bitcoin Core lehetőséget, és válassz díjráta-szolgáltatót."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először ellenőrizd a szokásos kapcsolat és szinkronizálás állapotát.

A saját Bitcoin-csomópont csökkentheti a nyilvános partnerektől való függést a blokkadatokhoz. Tárhely-, sávszélesség-, elérhetőségi és karbantartási felelősséget is ad. A Gingert a választható teljes csomópont bekapcsolása nélkül is használhatod.

<span id="start-the-bundled-node" data-ginger-heading="a-beépített-csomópont-indítása" aria-hidden="true"></span>

## A beépített csomópont indítása

A **Settings** → **Bitcoin** alatt a kapcsoló neve **(EXPERIMENTAL) Run Bitcoin Core on startup**. A 2.0.26 verzió Bitcoin Core 31-et tartalmaz. E beépített csomóponthoz és a telepített kiadáshoz illő utasítást használj.

1. Válassz elegendő helyű, megbízható tárolón lévő **Bitcoin Core Data Folder** mappát. Ne mutass nem kapcsolódó mappára, és ne engedd két csomópontfolyamatnak ugyanazt a mappát egyszerre kezelni.
2. Kapcsold be az **(EXPERIMENTAL) Run Bitcoin Core on startup** lehetőséget, és kérésre indítsd újra a Gingert.
3. Hagyd futni a kezdeti szinkronizálást. Figyeld a kapcsolati és letöltési állapotot; az első szinkronizálás hosszú lehet.
4. A **Stop Bitcoin Core on shutdown** beállítást aszerint válaszd meg, hogy a csomópont a Ginger kilépése után is fusson-e.

Ne kapcsold be pusztán hiányzó pénztárcaegyenleg javítására. A csomópont nem tud ismeretlen jelmondatot vagy címkéket helyreállítani. Meglévő csomópontmappa értékes beállítást és saját pénztárcákat tartalmazhat; őrizd meg a mentését, mielőtt megváltoztatod a kezelő alkalmazást.

A teljes csomópont helyben ellenőrizhet blokkokat, de nem szünteti meg a Ginger koordinátor-, 2FA-, vételi/eladási vagy más szolgáltatásfüggőségét. Nem rejti el az önként tőzsdével közölt tranzakciót sem.

<span id="connect-to-an-existing-node" data-ginger-heading="kapcsolódás-meglévő-csomóponthoz" aria-hidden="true"></span>

## Kapcsolódás meglévő csomóponthoz

Kikapcsolt beépített indításnál a **Bitcoin P2P Endpoint** lehetőséggel megadhatod saját csomópontodat blokkletöltéshez. Add meg az elérhető gépnevet és P2P-portot. Ugyanazon gépen lévő mainnet Bitcoin Core-csomópontnál a szokásos végpont `127.0.0.1:8333`, ha valóban ott figyel a csomópont. E mező Bitcoin-partnervégpontot vár, nem blokkláncböngésző-URL-t vagy RPC-hozzáférési adatot.

Győződj meg róla, hogy a csomópont engedi a pénztárcád kapcsolatát, és megvan a szükséges blokkadata. A régi blokkokat törlő, pruned csomópont nem feltétlenül őrzi a helyreállított pénztárca számára szükséges régi blokkokat. Elakadt előzménykeresésnél ellenőrizd az elérhetőséget ahelyett, hogy minden csomópont-konfigurációt felcserélhetőnek tekintenél.

A távoli csomópontkapcsolat saját hálózati kitettséggel rendelkezik. Olyan csomópontot és átvitelt használj, amelyet értesz; egy végpont beállítása nem bizonyítja minden hozzá vezető kapcsolat privát voltát. Pénztárcakapcsolat működtetéséhez ne nyisd meg az adminisztratív RPC-hozzáférést a nyilvános internetnek.

<span id="choose-fee-estimates-separately" data-ginger-heading="a-díjbecslést-külön-válaszd-meg" aria-hidden="true"></span>

## A díjbecslést külön válaszd meg

A **Fee Rate Provider** lehetőségei: **Mempool Space**, **Blockstream Info**, **Full Node**. A nyilvános szolgáltatók a saját hálózati megfigyeléseikből becsülnek. A teljes csomópontos választás a Ginger működő csomópont-/RPC-integrációját igényli; pusztán P2P-végpont megadása nem igazolja az RPC-díjbecslés beállítását.

Ha **Full Node** van kiválasztva, de a csomópont elérhetetlen, a v2.0.26 elérhetetlen díjbecslést jelez, és továbbra is enged kézi bevitelt a fizetési folyamatban. Várhatsz a csomópontra, választhatsz működő becslésszolgáltatót, vagy megadhatsz megalapozott díjrátát. Ne használj hatalmas díjat általános kapcsolatjavításként.

A díjbecslések előrejelzések, nem helyfoglalások a blokkban. A szolgáltatók eltérése eltérő mempool-megfigyelést tükrözhet. A teljes tranzakciós díjat és a kijelzett díjrátát is nézd át.

<span id="dust-threshold" data-ginger-heading="porküszöb" aria-hidden="true"></span>

## Porküszöb

A szintén **Settings** → **Bitcoin** alatt lévő **Dust Threshold** a nagyon kis beérkezett összegek pénztárcabeli kezelését szabályozza. Elkülönül a hálózati továbbítási szabályzattól, CoinJoin-leállítási küszöbtől és koordinátori minimális bemenettől. Emelése befolyásolhatja a feldolgozott kis fizetéseket; nem törli a blokkláncos kimenetüket, és nem gátolja az elküldésüket. Váratlanul hiányzó kis fizetés vizsgálatakor őrizd meg a korábbi beállítást.
