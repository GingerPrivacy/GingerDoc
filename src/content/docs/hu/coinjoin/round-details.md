---
doc_id: "coinjoin.round-details"
title: "CoinJoin-körök és a bemenetek alkalmassága"
description: "Értsd meg a Ginger CoinJoin-szakaszait, a bemenetek alkalmasságát és az újrapróbálkozást, ha a szokásos indítási, szüneteltetési és várakozási ellenőrzések nem magyarázzák az eredményt."
lang: "hu"
verified_release: "v2.0.27"
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
| Blame round, ha szükséges | Az újrapróbálkozás az előző tranzakció alkalmas résztvevőit használja, és további következetességi ellenőrzéseket végez. |
| Hálózatra továbbítás | A kész tranzakciót elküldik a Bitcoin-csomópontoknak, majd visszaigazolásra vár. |

E szakaszokat az alkalmazás kezeli; nem kell kulcsokat cserélned vagy kézzel egyeztetned idegenekkel. Az elfogadott bemenetek és létrejött kimenetek számát a kör és az UTXO-kiválasztás határozza meg. Nincs minden pénztárcára elvárható rögzített bemenet- vagy kimenetszám, és a teljes egyenleg nem ígéret arra, hogy mind egy körben vehet részt.

<span id="why-signing-can-stop-a-round" data-ginger-heading="miért-állhat-le-egy-kör-az-aláírásnál" aria-hidden="true"></span>

## Miért állhat le egy kör az aláírásnál?

Az aláírás befejezése előtt a Ginger magát a javasolt tranzakciót ellenőrzi, többek között azt, hogy:

- A pénztárca összes regisztrált bemenete továbbra is szerepel-e, és egyikük sem ismétlődik-e.
- Elegendő bemenetet tartalmaz-e a tranzakció, és – ha a konfiguráció nem engedélyezi az egyszemélyes CoinJoint – vannak-e benne a pénztárca saját regisztrációján kívüli bemenetek is.
- A tényleges bányászati díjráta a becslési eltéréseket figyelembe véve elég közel van-e a kör meghirdetett díjrátájához.
- A pénztárcának ígért kimenetek legalább az elvárt összegekkel szerepelnek-e.

A felajánlott kör részvételi és díjbeállításai nem helyettesítik a tranzakció ellenőrzését. Különösen a meghirdetett értéknél túl alacsony díjráta is meghiúsíthatja az aláírási ellenőrzéseket, még ha a pénztárcádból levont összeg elfogadhatónak tűnt is. A bemenetek száma UTXO-kat számol, nem független embereket igazol; lásd [a CoinJoin bizalmi feltételeit és korlátait](/hu/learn-coinjoin/trust-and-limits/).

Ha ezek az ellenőrzések sikertelenek, a Ginger nem adja meg a bemeneteihez tartozó összes aláírást. Ha a regisztrált saját bemenetek közül néhány szerepel a tervezetben, ezek egyikének aláírását tartja vissza. Ez azért számít, mert egy kihagyott bemenet aláírásának visszatartása nem állítaná meg a javasolt tranzakciót. Ha a pénztárca egyik bemenete sem maradt benne, nem küld aláírást. A regisztrált saját bemenetet többször tartalmazó tervezetet teljesen elutasítja.

Egy kör tehát elérheti az aláírási szakaszt, és mégis meghiúsulhat vagy újrapróbálkozhat. Tartsd elérhetően a Gingert a kritikus szakasz végéig, és nézd meg az eredményül kapott állapotot, mielőtt ugyanazokkal az UTXO-kkal más műveletbe kezdesz. Ne módosíts ismeretlen korlátokat pusztán azért, hogy egy elutasított kör folytatódjon.

<span id="checks-on-blame-rounds" data-ginger-heading="a-blame-round-ellenőrzései" aria-hidden="true"></span>

## A blame round ellenőrzései

Ha egy kör megszakad, a Ginger csak azokat a saját UTXO-it viszi tovább, amelyekhez már benyújtott aláírást. A blame round csak az előző tranzakció bemeneteit használhatja, és meg kell tartania ugyanazt a javasolt maximális bemeneti összeget. A Ginger a kimenetek regisztrációja előtt ezt a kapcsolatot is ellenőrzi a blame round szakaszával, minimális bemenetszámával és díjkorlátaival együtt.

Ezek az ellenőrzések korlátozzák, mi változhat az újrapróbálkozás során. Nem ígérik a blame round sikerét, nem állapítják meg, ki rendelkezik a többi bemenettel, és egy sikertelen kört sem tesznek támadás bizonyítékává.

<span id="inspect-a-completed-round" data-ginger-heading="befejezett-kör-vizsgálata" aria-hidden="true"></span>

## Befejezett kör vizsgálata

Az előzményekben bontsd ki a csoportos CoinJoin-bejegyzést, és nyisd meg egy adott kör részleteit. A **View transaction** lehetőséggel az átméretezhető tranzakciónézetben vizsgálhatod meg a bemeneteket és kimeneteket. A nézet a rendelkezésre álló tulajdonosi besorolást, címkéket és ismert anonimitási pontszámokat mutatja; az ismeretlen értékek nem igazolják, kié más résztvevő UTXO-ja. Az elérhető részletekhez és másolási műveletekhez lásd [a tranzakciónézet útmutatóját](/hu/payments/coin-control-history/#inspect-inputs-and-outputs).

<span id="private-coins-and-another-output-wallet" data-ginger-heading="privát-utxo-k-és-másik-kimeneti-pénztárca" aria-hidden="true"></span>

## Privát UTXO-k és másik kimeneti pénztárca

A szokásos indítás elutasítja azt a pénztárcát vagy elérhető jelöltkészletet, amelynek UTXO-i már teljesítik az adatvédelmi célt. Másik kimeneti pénztárca választása nem kényszerít ki csak privát UTXO-s kört. Ellenőrizd [a kimeneti pénztárca beállításait](/hu/coinjoin/settings/), mielőtt továbbítási rutinra hagyatkozol.

Pontszámszámításhoz és az értékek teljes egyeztetéséhez használd a [díjak és adatvédelmi előrehaladás](/hu/using-ginger/annonset/) útmutatót.
