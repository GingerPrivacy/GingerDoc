---
doc_id: "payments.send"
title: "Bitcoin küldése és a díjak ellenőrzése"
description: "Készíts elő egy Ginger-fizetést, ellenőrizd a címzettet és az összeget, értsd meg a díjrátát és a visszajárót, majd hagyd jóvá a tranzakciót."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

A Ginger nem tud visszavonni egy visszaigazolt Bitcoin-fizetést. Jóváhagyás előtt megbízható csatornán ellenőrizd a címzettet, és nézd át a teljes célt, összeget és díjat. Új folyamat tanulásakor kis fizetéssel kezdj.

<span id="prepare-a-payment" data-ginger-heading="fizetés-előkészítése" aria-hidden="true"></span>

## Fizetés előkészítése

1. Nyisd meg a pénzt tartalmazó pénztárcát, és válaszd a **Send** lehetőséget. A szokásos fizetési folyamathoz válaszd az **Automatic** lehetőséget. Az UTXO-k kézi kiválasztását külön megtanulhatod, amikor szükséged van rá.
2. A címzett Bitcoin-címét vagy fizetési URI-ját írd a **To:** mezőbe. A fizetési kérés összeget is tartalmazhat; beillesztés után ellenőrizd. Ha a platformodon elérhető a **Scan QR Code**, használhatod a kamerát, majd ellenőrizd a beolvasott célt.
3. Add meg az összeget és a címzettet leíró hasznos címkét. Ellenőrizd, hogy a kijelzés BTC-ben vagy fiatpénzben történik-e. A fiatbecslés az árfolyammal változik, és nem ez az összeg kerül át a Bitcoin-hálózaton.
4. Válaszd a **Continue** lehetőséget, és nézd át a tranzakció előnézetét, a kiválasztott pénzt, az esetleges adatvédelmi javaslatokat és a várható visszajárót. Az összeget módosító javaslat csak akkor megfelelő, ha továbbra is teljesíti a címzett kérését.
5. Nézd át a díjat és a becsült visszaigazolási időt. Ha helyesek az adatok, válaszd a **Confirm** lehetőséget, majd végezd el az esetleges jelmondatos vagy hardveres jóváhagyást.
6. Ellenőrizd az előzményekben a hálózatra továbbított tranzakciót. Ha hálózati hiba után bizonytalan az eredmény, nézd meg az előzményeket egy új fizetés indítása előtt.

A teljes elérhető összeg küldésekor a díj levonódhat a címzettnek érkező összegből. A rögzített összegű kérésekre és a PayJoinra eltérő korlátok vonatkoznak. Az előnézetben ellenőrizd a címzett tényleges összegét, ne feltételezd, hogy a teljes pénztárcaegyenleg megérkezhet a célhoz.

<span id="check-the-fee-without-custom-settings" data-ginger-heading="a-díj-ellenőrzése-egyedi-beállítások-nélkül" aria-hidden="true"></span>

## A díj ellenőrzése egyedi beállítások nélkül

Nézd át az előnézetben a teljes díjat és a becsült visszaigazolási beállítást. A díj a tranzakció által elfoglalt helyért fizetett összeg; nem egyszerűen a fizetés százaléka. Az időbecslés változhat, és nem garancia.

Olyan elérhető díjbecslést használj, amelyet értesz. Ha nincsenek becslések, és bizonytalan vagy a választásban, várj és vizsgálódj ahelyett, hogy találomra nagyon magas egyedi díjat adnál meg.

<span id="the-leftover-money-is-change" data-ginger-heading="a-megmaradó-pénz-a-visszajáró" aria-hidden="true"></span>

## A megmaradó pénz a visszajáró

A fizetés a címzett összegénél és a díjnál nagyobb bitcoinrészt is felhasználhat. A fennmaradó érték visszajáróként kerül vissza a pénztárcádba, néha egy korábban nem látott címen. Továbbra is te rendelkezel vele; semmit nem kell kézzel visszaküldened.

Egy adatvédelmi javaslat módosíthatja a címzettnek javasolt összeget. Csak akkor fogadd el, ha továbbra is teljesíti a címzett kérését. Különösen ne fizess kevesebbet egy rögzített számlára pusztán a visszajáró elkerüléséért.

Választható haladó útmutató: [egyedi díjráták és visszajáró](/hu/using-ginger/fee/) vagy [az UTXO-k kézi kiválasztása és a tranzakciós előzmények](/hu/payments/coin-control-history/).

<span id="when-a-payment-cannot-be-prepared" data-ginger-heading="ha-nem-készíthető-elő-fizetés" aria-hidden="true"></span>

## Ha nem készíthető elő fizetés

Az elégtelen fedezet azt is jelentheti, hogy díjak után nincs elég elkölthető érték, még ha a kijelzett teljes egyenleg elegendőnek látszik is. A pénz lehet még nem visszaigazolt, lekötött egy kritikus CoinJoin-szakaszban vagy olyan még nem visszaigazolt tranzakciólánc része, amely jelenleg nem bővíthető tovább.

Helyreállítás közben természetes, hogy nincs küldési művelet. A csak megfigyelésre szolgáló pénztárca önmagában nem tud aláírni. Ez a kiadás nem támogat Lightning-címeket és -számlákat; kérj blokkláncon használható Bitcoin-fizetési címet.
