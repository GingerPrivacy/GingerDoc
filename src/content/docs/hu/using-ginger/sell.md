---
doc_id: "buy-sell.sell-and-orders"
title: "Bitcoin eladása és szolgáltatói rendelések rendezése"
description: "Teljesíts Ginger-eladást a szolgáltató pontos összegével és címével, kövesd az állapotot, és a megfelelő támogatással vedd fel a kapcsolatot."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="how-it-works"></span>
<span id="step-1-selecting-your-country"></span>
<span id="step-2-entering-purchase-amount"></span>
<span id="step-3-choosing-an-offer"></span>
<span id="step-4-completing-the-transaction"></span>
<span id="step-5-viewing-transaction-history"></span>
<span id="bitcoin-purchase-faq"></span>
<span id="how-can-i-sell-bitcoin-through-ginger-wallet"></span>
<span id="do-i-need-to-select-my-country-before-selling-bitcoin"></span>
<span id="how-do-i-enter-the-amount-i-want-to-sell"></span>
<span id="are-there-minimum-and-maximum-limits-for-sales"></span>
<span id="how-do-i-choose-the-best-offer-for-my-sale"></span>
<span id="what-happens-after-i-accept-an-offer"></span>
<span id="how-do-i-complete-the-bitcoin-sale-transaction"></span>
<span id="can-i-view-my-past-sales"></span>
<span id="what-does-it-mean-if-a-transaction-is-on-hold"></span>
<span id="can-i-change-the-browser-used-for-redirection"></span>

> Nehézségi szint: Mindennapi használat. Akkor válaszd ezt az útmutatót, amikor az általa bemutatott feladatra van szükséged.

Az eladás bitcoint vált át a szolgáltató által kínált fizetési módra. A Ginger segít ajánlatot kérni és előkészíteni a blokkláncos fizetést, de a fiatkifizetést és rendelésellenőrzést a szolgáltató kezeli. Pénz lekötése előtt olvasd el a követelményeit.

<span id="create-and-fund-a-sale" data-ginger-heading="eladás-létrehozása-és-finanszírozása" aria-hidden="true"></span>

## Eladás létrehozása és finanszírozása

1. Nyiss meg szinkronizált, elkölthető bitcoint tartalmazó pénztárcát, és válaszd a **Sell** lehetőséget. Ha hiányzik, nézd meg a helyreállítás állapotát és a küldési képességet.
2. Kérésre válaszd az országot vagy régiót. Add meg az eladási összeget és a kifizetés kívánt pénznemét. Ellenőrizd az egységeket és korlátokat.
3. Válaszd a **Continue** lehetőséget, szűrd az **Offers** listát fizetési módra, és hasonlítsd össze a nettó kifizetést és díjakat.
4. Válaszd az **Accept** lehetőséget. Végezd el a szolgáltató böngészős lépéseit a pontos Bitcoin-cél, összeg és esetleges határidő kézhezvételéig.
5. Térj vissza a Ginger eladási ablakához, és válaszd a **Send** lehetőséget. Add meg vagy ellenőrizd a szolgáltató pontos célját és összegét. Ne feltételezd, hogy a böngésző minden mezőt helyesen töltött ki.
6. Jóváhagyás előtt ellenőrizd a tranzakciós díjat és a címzett összegét. A kért összegnek díjlevonás után is meg kell érkeznie; ne tekintsd véletlenül a „mindent küld” műveletet rögzített számla kifizetésének.
7. Az előzményekben és **Previous Orders** alatt kövesd a folyamatot. Őrizd meg a szolgáltatói rendelésazonosítót és tranzakcióazonosítót.

Az eladási ablak megőrzi a szolgáltatói összefüggést, de nem szünteti meg a kérés és előnézet összehasonlításának felelősségét. Ha az ajánlat küldés előtt lejár, kérj friss utasítást a szolgáltatótól, ne találomra fizess a régi címre.

<span id="understand-status" data-ginger-heading="állapotok-megértése" aria-hidden="true"></span>

## Állapotok megértése

| Rendelésrészletek állapota | Teendő |
| --- | --- |
| **Created** | A rendelés létezik; új fizetés előtt ellenőrizd a hátralévő szolgáltatói lépéseket. |
| **Pending** | A feldolgozás tart. Vesd össze a szolgáltató állapotát és a pénztárca előzményeit. |
| **Your transaction is on hold. Please contact Support.** | A rendelésazonosítóval keresd a választott szolgáltatót. A Ginger nem oldhatja fel az ellenőrzését. |
| **Expired** | Ne feltételezd a régi ajánlat vagy cím használhatóságát. Ha már küldtél pénzt, kérdezd a szolgáltatót. |
| **Failed** | Új rendelés előtt ellenőrizd, történt-e pénz- vagy bitcoinátutalás. |
| **Refunded** | A szolgáltatóval ellenőrizd a visszatérítés módját, célját és elszámolását. |
| **Completed** | A megfelelő pénztárcában vagy fizetési fiókban ellenőrizd a várt bitcoinbeérkezést vagy fiatkifizetést. |

A feliratok az integráció legfrissebb adatait tükrözik, és késhetnek az eseményekhez képest. A **Buy** vagy **Sell** felfüggesztési jelzése figyelmet igénylő rendelésre mutat; nem elveszett pénztárcakulcsot jelez.

<span id="which-support-channel-to-use" data-ginger-heading="melyik-támogatási-csatornát-használd" aria-hidden="true"></span>

## Melyik támogatási csatornát használd?

Személyazonosság-ellenőrzéshez, kifizetési késéshez, elfogadott fizetési módhoz, visszatérítési feltételhez vagy felfüggesztéshez a szolgáltatót keresd hitelesített weboldalán. Add meg a rendelésazonosítót és csak az ügyhöz szükséges tranzakcióadatot. A privát fiókadatot tartsd távol a nyilvános GitHub-hibajegyektől.

Ginger-összeomlásnál, böngészőnyitási hibánál vagy rosszul kijelzett rendelésnél a Ginger hivatalos támogatási hivatkozásain jelentsd a verziót, rendszert, hibaszöveget és lépéseket. Ne csatolj helyreállító szavakat, jelmondatot, 2FA-titkot, pénztárcafájlt vagy tartalmában át nem nézett teljes naplót.

<span id="privacy-and-fees" data-ginger-heading="adatvédelem-és-díjak" aria-hidden="true"></span>

## Adatvédelem és díjak

A szolgáltató a fizetési kérését a megadott identitáshoz vagy fizetési módhoz kapcsolhatja. A CoinJoinból származó pénz költése nem törli ezt a nyilvántartást, és a szolgáltató saját elfogadási szabályzatot alkalmazhat. A Ginger nem garantálhatja minden előzmény minden tőzsde általi elfogadását.

A kifizetési ajánlatot vesd össze a bitcoinösszeggel, a kijelzett szolgáltatói díjjal és a fizetés külön bányászati díjával. Ez utóbbihoz legyen elég elkölthető érték. Alacsony egyenleg, díjkiugrás vagy kritikus CoinJoin-szakaszban részt vevő UTXO megakadályozhatja egy egyébként érvényes rendelés azonnali kifizetését.
