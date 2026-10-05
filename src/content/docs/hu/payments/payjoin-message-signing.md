---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin és üzenetaláírás"
description: "Küldj PayJoin-fizetési kérést, értsd meg a címzett ismereteit, a pénztárcaujjlenyomatot és a visszaállást, és írj alá szűk célú címrendelkezési üzenetet."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először értsd meg a szokásos küldési előnézetet, a címzett összegét és a díjat.

A PayJoin és üzenetaláírás külön eszközök. A PayJoin a fizetési tranzakció felépítését módosítja. Az üzenetaláírás fizetés nélkül igazolja egy kulcs feletti rendelkezést egy adott állításhoz. Egyik funkció sem ok a helyreállító szavak közlésére.

<span id="send-a-payjoin-request" data-ginger-heading="payjoin-kérés-küldése" aria-hidden="true"></span>

## PayJoin-kérés küldése

A PayJoin közös fizetés, amelyhez a címzett is hozzájárulhat bemenettel. Ez gyengítheti azt a feltételezést, hogy egy szokásosnak tűnő fizetés minden bemenete egyetlen küldőé. A címzettnek PayJoin-végpontot tartalmazó kompatibilis Bitcoin-fizetési URI-t kell adnia; önmagában egy cím nem kapcsolja be. A protokollt a [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki) írja le.

1. Elkölthető pénzzel rendelkező szoftverpénztárcát használj. E kiadás hardverpénztárcás küldésnél elutasítja a PayJoin-kéréseket.
2. A teljes fizetési URI-t illeszd a **Send** lehetőségbe, ne csak a címet másold. A célt és összeget ugyanazon megbízható csatornán ellenőrizd, mint bármely fizetést.
3. Nézd át az előnézetet és PayJoin-jelzőt, majd elfogadható összeg és díj esetén hagyd jóvá.
4. Az eredményül kapott tranzakciót ellenőrizd az előzményekben.

A kiadott megvalósítás szokásos fizetési tranzakcióra állhat vissza, ha a PayJoin-felépítés sikertelen. E folyamat jóváhagyása ezért nem garantálja a továbbított tranzakció PayJoin-jellegét. Ne használd, ha a szokásos fizetésre visszaállás sértené az adatvédelmi követelményedet.

Mainnethez kompatibilis HTTPS-végpontot használj. A v2.0.26 végpontellenőrzései bekapcsolt Tor mellett elutasítják az onion-végpontokat; a csak onionos kérés nem támogatott út. Hagyd bekapcsolva a Tort, és kérj kompatibilis alternatívát a címzettől a hálózati adatvédelem kikapcsolása helyett.

Ez az útmutató címzettől kapott kérés küldéséről szól. A Ginger szokásos **Receive** folyamata nem üzemeltet PayJoin-fogadószervert, és e kiadás nem kínál felhasználói beállítást ilyenhez.

<span id="what-the-recipient-and-an-observer-learn" data-ginger-heading="mit-tud-meg-a-címzett-és-egy-megfigyelő" aria-hidden="true"></span>

## Mit tud meg a címzett és egy megfigyelő?

A címzett már ismeri a fizetési kérést, fogadási címét és a szándékolt összeget. Azonosított rendeléshez kapcsolt kérésnél a PayJoin nem törli az identitást. Egyeztetéskor a fogadó szolgáltatás látja a javasolt tranzakciót is, a küldő javasolt bemeneteivel. Nem tekinthető olyan félnek, aki elől maga a fizetés rejtett.

A külső megfigyelő a Bitcoinon végül közzétett tranzakciót látja. A sikeres PayJoin megbízhatatlanná teheti a szokásos „minden bemenet a küldőé” feltételezést. Az előny a tranzakciótól és a megfigyelő más ismereteitől függ; nem garantálja, hogy a tranzakció minden szokásos fizetéstől megkülönböztethetetlen.

Különítsd el e közönségeket. A címzett rendelésből vagy egyeztetésből akkor is megtudhat részleteket, ha más megfigyelő nem tudja biztosan besorolni a bemeneteket. A nyilvános blokkláncböngésző újabb adatközlést okozhat azonosított böngésző-munkamenetből történő kereséskor.

<span id="wallet-fingerprints-and-the-ordinary-payment-fallback" data-ginger-heading="pénztárcaujjlenyomatok-és-visszaállás-szokásos-fizetésre" aria-hidden="true"></span>

## Pénztárcaujjlenyomatok és visszaállás szokásos fizetésre

A pénztárcák választanak bemeneti címtípust, tranzakciószerkezetet és aláírási módot. Ezek kombinációja felismerhető mintát hagyhat. A tranzakció ezért érvényes PayJoin-protokollüzenetek mellett is veszíthet a bizonytalanságból. Közzétett [PayJoin-ujjlenyomatpéldák](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/) adott pénztárcakombinációknál szemléltetik ezt; nem igazolják ugyanilyen hibák jelenlétét a Gingerben, és nem számszerűsítik a Ginger adatvédelmét.

Felhasználóként friss, kompatibilis fogadó szolgáltatást válassz, ellenőrizd a kérést és a javasolt díjat és összeget. Ne módosíts ismeretlen tranzakcióbeállítást pusztán más pénztárca utánzására: a hihető tranzakció nem jó adatvédelmi eredmény bizonyítéka.

Ha közös fizetést követelsz meg, a Ginger küldési folyamatának jóváhagyása előtt egyezz meg kompatibilis módszerben a címzettel. A szokásos fizetésre visszaállás miatt a sikertelen egyeztetésből is érvényes fizetés lehet. Továbbítás után ne küldj újra pusztán bizonytalan eredmény miatt; először ellenőrizd a tranzakciót és a címzett fizetési állapotát. A sikertelen PayJoin-egyeztetés és sikertelen Bitcoin-fizetés eltérő helyzet.

<span id="sign-a-message-for-an-address" data-ginger-heading="üzenet-aláírása-egy-címhez" aria-hidden="true"></span>

## Üzenet aláírása egy címhez

Egyes szolgáltatások fogadási cím feletti rendelkezés igazolását kérik. A pénztárca menüjében válaszd a **Sign Message** lehetőséget. Add meg a pénztárcához tartozó címet és a pontos aláírandó állítást. A Ginger elutasítja a nem hozzá tartozó címeket. Add meg az üzenetet, válaszd a **Continue** lehetőséget, és másold az aláírást a kívánt ellenőrzőnek.

Hardverpénztárcánál kövesd az eszköz aláírási kérését; az elérhetőség eszköz- és üzenetaláírás-támogatástól függ. Aláíróeszköz nélküli, csak megfigyelésre szolgáló pénztárca nem hozhat létre aláírást. A címtípusnak és az ellenőrző által támogatott aláírásformátumnak is kompatibilisnek kell lennie.

Az üzenetet jóváhagyási nyilatkozatként gondosan olvasd. Részesíts előnyben szűk célú szöveget, amely azonosítja a címzettet, célt és dátumot vagy kihívást. Ne írj alá üres állítást vagy olyat, amelynek következményeit nem érted. Megosztás után az aláírás másolható és másoknak is bemutatható.

Az üzenetaláírás nem utal bitcoint, és nem igazolja a pénztárca minden címe feletti tulajdont. Kapcsolatot teremt az aláírt cím és az ellenőrző által veled azonosított személy között is. Tőzsdei kérésnél ez az adatközlés későbbi CoinJoin után is megmarad.
