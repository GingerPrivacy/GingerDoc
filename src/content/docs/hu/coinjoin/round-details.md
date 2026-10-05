---
doc_id: "coinjoin.round-details"
title: "CoinJoin-körök és a bemenetek alkalmassága"
description: "Értsd meg a Ginger CoinJoin-szakaszait, a bemenetek alkalmasságát és az újrapróbálkozást, ha a szokásos indítási, szüneteltetési és várakozási ellenőrzések nem magyarázzák az eredményt."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először értsd meg a szokásos indítási és szüneteltetési vezérlőket és azt, hogy a befejezett körök díjakkal járnak.

Kezdd a [szokásos CoinJoin-útmutatóval](/hu/using-ginger/coinjoin/). A Ginger automatikusan kezeli a protokollt; ez az útmutató egy adott állapot vagy korlát megértésére szolgál.

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="miért-lehet-alkalmatlan-egy-egyenleg" aria-hidden="true"></span>

## Miért lehet alkalmatlan egy egyenleg?

Nincs rögzített várakozási idő vagy általános minimális egyenleg, amely garantálja a részvételt. Az alkalmasság a kör paramétereitől, az UTXO-k értékétől, a visszaigazolási állapottól, díjaktól, kizárásoktól és pénztárcabeállításoktól függ. Az egyenleg nagyobb lehet a minimális bemeneti értéknél úgy is, hogy egyetlen gazdaságosan használható, alkalmas UTXO-t sem tartalmaz.

<span id="what-happens-during-a-round" data-ginger-heading="mi-történik-egy-körben" aria-hidden="true"></span>

## Mi történik egy körben?

| Szakasz | Mire vár a pénztárcád? |
| --- | --- |
| Bemenetregisztráció | Az alkalmas UTXO-kat felajánlják a közös tranzakcióhoz. |
| Kapcsolat megerősítése | A regisztrált résztvevők megerősítik, hogy továbbra is elérhetők. |
| Kimenetregisztráció | A résztvevők a protokollon keresztül kialakítják a nekik járó kimeneteket. |
| Aláírás | A pénztárcák ellenőrzik a tervezetet, és aláírják saját bemeneteiket. E kritikus szakaszban tartsd elérhetően a Gingert. |
| Blame round, ha szükséges | Az újrapróbálkozás kizárja azokat, akik nem teljesítették a szükséges lépéseket. |
| Hálózatra továbbítás | A kész tranzakciót elküldik a Bitcoin-csomópontoknak, majd visszaigazolásra vár. |

E szakaszokat az alkalmazás kezeli; nem kell kulcsokat cserélned vagy kézzel egyeztetned idegenekkel. Az elfogadott bemenetek és létrejött kimenetek számát a kör és az UTXO-kiválasztás határozza meg. Nincs minden pénztárcára elvárható rögzített bemenet- vagy kimenetszám, és a teljes egyenleg nem ígéret arra, hogy mind egy körben vehet részt.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="privát-utxo-k-és-másik-kimeneti-pénztárca" aria-hidden="true"></span>

## Privát UTXO-k és másik kimeneti pénztárca

A v2.0.26 szokásos indítása elutasítja azt a pénztárcát vagy elérhető jelöltkészletet, amelynek UTXO-i már teljesítik az adatvédelmi célt. Másik kimeneti pénztárca választása nem kényszerít ki csak privát UTXO-s kört. Ellenőrizd [a kimeneti pénztárca beállításait](/hu/coinjoin/settings/), mielőtt továbbítási rutinra hagyatkozol.

Pontszámszámításhoz és az értékek teljes egyeztetéséhez használd a [díjak és adatvédelmi előrehaladás](/hu/using-ginger/annonset/) útmutatót.
