---
doc_id: "learn-privacy.spending-after-coinjoin"
title: "Költés CoinJoin után: kidolgozott példák"
description: "Gyakorlati Bitcoin-fizetési példákon ismerd meg az UTXO-kiválasztást, a visszajárót, az összevonást és a CoinJoin után láthatóvá váló adatokat."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először értsd meg az új fogadási címeket és a szokásos fizetés ellenőrzését.

A CoinJoin a bemenetek és kimenetek kapcsolatával kapcsolatos bizonytalanságot módosítja. A következő tranzakció új adatot adhat hozzá. Fizetés előtt döntsd el, mely UTXO-kat tudná a címzett vagy más megfigyelő már hozzád kapcsolni, és mit fedne fel a javasolt fizetés.

Az alábbi példák kitalált satoshiösszegeket használnak. A díjak a számolást szolgálják, nem hálózati árajánlatok. Egy érme egyetlen el nem költött tranzakciókimenet, azaz UTXO; nem ugyanaz, mint egy pénztárca vagy Bitcoin-cím.

<span id="start-with-the-payment-you-need-to-make" data-ginger-heading="a-szükséges-fizetésből-indulj-ki" aria-hidden="true"></span>

## A szükséges fizetésből indulj ki

A Gingerben nyisd meg a **Wallet Coins** lehetőséget az összegek, címkék és adatvédelmi adatok vizsgálatához. Szokásos fizetésnél a **Send** → **Manual Control** engedi a jelölt UTXO-k kiválasztását. A jelöltek választása nem helyettesíti a végső tranzakció ellenőrzését: **Confirm** előtt nézd meg a tényleges bemeneteket, elküldött összeget, visszajárót és díjat.

Az automatikus választás és a Ginger javaslatai is segíthetnek. A kézi vezérlés akkor hasznos, ha olyat tudsz a pénzről, amit a pénztárca nem, például mely ügyfél ismer már egy beérkezést. Nem eleve jobb választás minden fizetéshez.

<span id="example-1-one-coin-covers-a-purchase" data-ginger-heading="példa-1-egy-utxo-fedez-egy-vásárlást" aria-hidden="true"></span>

## Példa 1: egy UTXO fedez egy vásárlást

Alexnek van egy CoinJoinból származó 120 000 satoshis UTXO-ja, és 70 000 satoshit szeretne fizetni. Tegyük fel, hogy a díj 1 000 satoshi.

| Tranzakciórész | Összeg |
| --- | --- |
| Elköltött bemenet | 120 000 sat |
| A kereskedő kapja | 70 000 sat |
| Alexnek visszajáró | 49 000 sat |
| Bányászati díj | 1 000 sat |

A kereskedő ismeri a fizetési címét és összeget. Vizsgálhatja a tranzakciót, és arra következtethet, hogy a másik kimenet Alex visszajárója. A kereskedő ebből önmagában nem tudja meg Alex teljes pénztárcaegyenlegét, de látja a bemenetet, és követheti a valószínű visszajáró későbbi költését.

Alexnek nem kell kézzel visszamozgatnia a visszajárót: már a pénztárcájához tartozik. A hasznos ellenőrzési pont az ezt felhasználó következő fizetés.

<span id="example-2-two-unrelated-receipts-are-combined" data-ginger-heading="példa-2-két-nem-összetartozó-beérkezés-összevonása" aria-hidden="true"></span>

## Példa 2: két nem összetartozó beérkezés összevonása

Blairnek van egy szabadúszó munkához kapcsolódó 90 000 satoshis UTXO-ja és egy nyilvános adománycímhez kapcsolódó 80 000 satoshis UTXO-ja. Egy 150 000 satoshis fizetés 2 000 satoshis díjjal egyiknél is többet igényel; mindkettő használata 18 000 satoshi visszajárót eredményez.

A szokásos közös költés azt sugallhatja, hogy mindkét bemenet azonos tulajdonosé. Aki felismeri az adományoldali UTXO-t, új nyomot kaphat a munkához tartozóról. Ez a tranzakcióból és más ismeretből levont következtetés, nem a személyazonosság automatikus bizonyítéka.

Ha Blairnek van másik elegendő, ugyanahhoz a tevékenységhez már kapcsolódó UTXO-ja, az kevesebb új adatot fedhet fel. Ha a fizetés gyakorlati módja mindkét bemenetet igényli, a választás költség/adatvédelem döntés. Ne fizess kevesebbet a számlára, és ne tekintsd abszolút szabálynak, hogy „soha ne vonj össze UTXO-kat”.

A CoinJoin és PayJoin is együttműködést tartalmaz, ezért az összes bemenet egyetlen tulajdonosára vonatkozó feltételezés nem általánosan érvényes. Ezt a különbséget tartsd meg tranzakció értelmezésekor.

<span id="example-3-change-carries-a-connection-forward" data-ginger-heading="példa-3-a-visszajáró-továbbviszi-a-kapcsolatot" aria-hidden="true"></span>

## Példa 3: a visszajáró továbbviszi a kapcsolatot

Alex később az 1. példa 49 000 satoshis visszajáróját egy nem kapcsolódó 60 000 satoshis UTXO-val kombinálja, hogy 100 000 satoshit fizessen. Feltételezett 1 000 satoshis díjjal 8 000 satoshi új visszajáró keletkezik.

Az első kereskedő láthatja, hogy a valószínű visszajárókimenetet a 60 000 satoshis bemenettel együtt költötték el. Új címzetti cím mellett is megmarad a bemeneti kapcsolat. Az új kimeneti cím nem vonja vissza a két bemenet közös költésének döntését.

Címkékkel őrizd meg az összefüggéseket későbbi döntésekhez. A címkék helyi jegyzetek; nem tesznek közzé nevet a blokkláncon, és nem gátolják a megfigyelő következtetéseit.

<span id="example-4-moving-the-entire-balance-to-hardware" data-ginger-heading="példa-4-a-teljes-egyenleg-hardverre-mozgatása" aria-hidden="true"></span>

## Példa 4: a teljes egyenleg hardverre mozgatása

Caseynek négy, egyenként 200 000 satoshis UTXO-ja van. Mind a négy egy hardveres fogadási címre küldése 800 000 satoshi bemenetet költ el egy tranzakcióban. Feltételezett 2 000 satoshis díj mellett a hardverpénztárca 798 000 satoshit kap.

A hardverpénztárca javítja a kulcsok elkülönítését, de az átutalás felfedi a négy bemenet közös költését. Külön átutalások elkerülhetik ezt a kapcsolatot, miközben több díjat és más megfigyelhető időzítési/összegmintázatokat hoznak létre. Alkalmas CoinJoin során közvetlenül hardverpénztárcába fogadott kimenetek elkerülhetik a későbbi átutalást, de kiadásspecifikus alkalmassági és célellenőrzésük van; nem általános módszer hardveren tartott pénz újrakeverésére.

Ne költsd el a teljes egyenleget pusztán azért, mert rendezetlennek tűnik az UTXO-lista. Az összevonás csökkentheti a későbbi bemenetszámot, de az alacsony díjráta csak a költséget módosítja; az adatközlést nem távolítja el.

<span id="other-participants-and-future-observations-matter" data-ginger-heading="más-résztvevők-és-későbbi-megfigyelések-is-számítanak" aria-hidden="true"></span>

## Más résztvevők és későbbi megfigyelések is számítanak

Nem csak a saját viselkedésed hat. Más résztvevők későbbi tranzakciói szűkíthetik a megfigyelő által mérlegelt lehetőségeket. A CoinJoin utáni összevonás kutatása vizsgálja ezt, és elismeri a megfigyelések gyakorlati azonosítássá alakításának korlátait. Mérései nem egy adott felhasználó követhetőségének valószínűségét jelentik. [Gavenda és munkatársai, 2025](https://arxiv.org/html/2510.17284v1)

Nincs általános körszám vagy várakozási idő, amely adatvédelmet garantál. A várakozás nem törli az azonosított kereskedővel, tőzsdével vagy más pénztárcaszolgáltatással már közölt adatokat.

<span id="a-short-review-before-confirming" data-ginger-heading="rövid-ellenőrzés-jóváhagyás-előtt" aria-hidden="true"></span>

## Rövid ellenőrzés jóváhagyás előtt

1. Megbízható csatornán erősítsd meg a címzettet és a kért összeget.
2. Vizsgáld meg a végső bemeneteket, és gondold át, ki ismeri már őket.
3. Ellenőrizd, összevon-e a választás külön tartani kívánt tevékenységeket.
4. Nézd meg a visszajárót, és későbbi költésekor emlékezz a kapcsolatára.
5. Csak a fizetéshez illő díj- és adatvédelmi kompromisszumot fogadd el; bizonytalan eredmény után ismétlés előtt ellenőrizd az előzményeket.

A kapcsolódó pénztárca- és böngésződöntésekhez folytasd az [adatvédelmi szokásokkal](/hu/using-ginger/address-reuse/) és azzal, [hová kerülnek a pénztárca adatai](/hu/learn-privacy/information-sharing/).
