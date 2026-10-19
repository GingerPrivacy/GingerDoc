---
doc_id: "payments.fees-and-change"
title: "Tranzakciós díjak, egyedi díjráták és visszajáró"
description: "Ismerd meg a díjrátákat, a 0.1 sat/vB-ig megadható egyedi értékeket, a továbbítás korlátait, a díjlevonást, a visszajárót és az adatvédelmi javaslatokat a Gingerben."
lang: "hu"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> Nehézségi szint: Haladó útmutató. Először értsd meg a szokásos küldési előnézetet, a címzett összegét és a díjat.

A szokásos fizetési lépésekhez kezdd a [Bitcoin küldése](/hu/payments/send/) útmutatóval. Ez az útmutató részletesebben ismerteti a díjbeállításokat és a visszajárót; nem kell minden fizetéshez egyedi díjrátát választani.

<span id="understand-the-fee" data-ginger-heading="a-díj-megértése" aria-hidden="true"></span>

## A díj megértése

A díjráta virtuális bájtonkénti satoshiban mért érték, amely **Fee Rate (sat/vByte)** néven jelenik meg. A teljes bányászati díj a díjráta és a tranzakció virtuális méretének szorzata. Nem a fizetési összeg százaléka. Sok kis UTXO elköltése többe kerülhet, mint egy ugyanakkora összértékű, nagyobb UTXO elköltése.

Az előnézet díjvezérlőjével módosíthatod a kívánt visszaigazolási beállítást, vagy megadhatsz **Custom Fee Rate** értéket. A Ginger **0.1 sat/vB** értékig fogad el díjrátát, és a becslések, valamint a díjgrafikon is megőrzik a törtértékeket. A becsült idő nem garancia: az új tranzakciók versengenek a helyért, a blokkok pedig szabálytalan időközönként érkeznek.

A szerkesztő minimuma nem garantálja, hogy a tranzakciót továbbítják vagy befogadják egy csomópont mempooljába. A csomópontok szabályzatuk vagy az aktuális mempoolhelyzet miatt magasabb díjrátát is követelhetnek. A hálózati továbbításkor a Ginger kihagyja azokat a társcsomópontokat, amelyek meghirdetett minimuma magasabb a tranzakció díjrátájánál. Az alacsony egyedi díjráta ezért sikertelen továbbításhoz vagy visszaigazolatlanul maradó tranzakcióhoz vezethet; használata előtt mérlegeld a hálózati helyzetet és a fizetés sürgősségét.

Ha az automatikus becslések nem érhetők el, a Ginger akkor is kínálhat kézi díjmegadást. Ha bizonytalan vagy a megfelelő díjrátában, jobb megvárni a becslések visszatérését, mint találomra nagyon magas számot megadni. A szokásos tranzakciós díjak és a CoinJoin koordinátori díjai külön költségek.

<span id="check-who-pays-the-fee" data-ginger-heading="ellenőrizd-ki-fizeti-a-díjat" aria-hidden="true"></span>

## Ellenőrizd, ki fizeti a díjat

[Többcímzettes fizetésnél](/hu/payments/send/#pay-several-recipients-in-one-transaction) a **Subtract the transaction fee from the first payment** csak az első címzett összegét csökkenti. A többi megadott összeg változatlan marad. Ha nincs bejelölve, az összes fizetésen felül a díjra is elegendő pénzre van szükséged. A **Max** használata a többcímzettes szerkesztőben bekapcsolja a díjlevonást.

Mindig ellenőrizd az előnézet végső összegeit, különösen a díjráta módosítása után. Ha a címzettnek pontos összeget kell kapnia, a díj levonása az adott fizetésből alulfizetést okozhat. Az előnézet minden címzett végső összegét külön felsorolja.

<span id="change-is-still-your-bitcoin" data-ginger-heading="a-visszajáró-továbbra-is-a-te-bitcoinod" aria-hidden="true"></span>

## A visszajáró továbbra is a te bitcoinod

A Bitcoin egész UTXO-kat, más néven érméket költ el. Ha a kiválasztott bemenetek meghaladják a címzett összegét és a díjat, a többlet általában a pénztárcád új visszajárócímére kerül. Például egy 100 000 satoshis bemenetből egy 60 000 satoshis fizetés és 1 000 satoshis díj után 39 000 satoshi visszajáró marad.

A visszajárócím eltérhet azoktól a fogadási címektől, amelyeket már megmutattál valakinek. Nem kell kimásolnod vagy kézzel visszaküldened. Tranzakcióelemzéssel a visszajáró a fizetéshez kapcsolható, ami fontos, ha később más pénzzel kombinálod.

A Ginger adatvédelmi javaslatai a kiválasztott UTXO-k vagy a címzett összegének módosításával visszajáró nélküli fizetést is kínálhatnak. Gondosan nézd át az eredményt. Egy rögzített összegű számlára nem szabad kevesebbet fizetni pusztán a visszajáró megszüntetéséért.

Konkrét UTXO-k kiválasztásához vagy függő tranzakció kezeléséhez lásd [az UTXO-k kézi kiválasztását és az előzményeket](/hu/payments/coin-control-history/).
