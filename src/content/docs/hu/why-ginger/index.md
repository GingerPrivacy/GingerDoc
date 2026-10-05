---
title: "Miért érdemes a Ginger Walletet használni?"
description: "Válaszd a Ginger Bitcoin-adatvédelmi eszközeit a védeni kívánt adatok alapján, és ismerd meg a korlátaikat."
doc_id: "learn-privacy.why-ginger"
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

A Ginger nyílt forráskódú asztali pénztárca a blokkláncon használt Bitcoinhoz. Te kezeled a kulcsokat, új címeken fogadhatsz, és aláírás előtt ellenőrizheted a fizetéseket. A választható CoinJoin megnehezíti a tranzakciók tulajdonosi kapcsolatainak kikövetkeztetését, a beépített Tor pedig segít csökkenteni az IP-cím közvetlen láthatóságát az azon keresztül vezetett kapcsolatoknál.

<span id="start-with-what-you-want-to-protect" data-ginger-heading="abból-indulj-ki-hogy-mit-szeretnél-védeni" aria-hidden="true"></span>

## Abból indulj ki, hogy mit szeretnél védeni

- **Az elköltést lehetővé tevő kulcsokat:** őrizz teljes helyreállítási mentést, és védd az aláírást végző számítógépet. Egy támogatott hardverpénztárca külön eszközön tarthatja az aláírókulcsokat.
- **A fizetési előzményeket:** használj új fogadási címeket, tarts fenn hasznos helyi címkéket, és nézd át, hogy egy fizetés mely UTXO-kat költi el. [Ismerd meg, mit árul el egy Bitcoin-tranzakció](/hu/using-ginger/privacy/).
- **A kapcsolataidat:** hagyd bekapcsolva a Ginger szokásos Tor-védelmét. Egy külső böngészőnek saját hálózati működése, sütijei és fiókjai vannak.

A fogadás, a küldés és a CoinJoin külön műveletek. Először megtanulhatod a szokásos fizetéseket, és később eldöntheted, hogy a CoinJoin választ ad-e valamely adatvédelmi aggályodra. A befejezett körök díjakkal járnak, és nincs garantált befejezési idejük.

<span id="understand-the-limits" data-ginger-heading="értsd-meg-a-korlátokat" aria-hidden="true"></span>

## Értsd meg a korlátokat

A Bitcoin-tranzakciók nyilvánosak maradnak. A Tor nem rejti el az adatokat az elől a szolgáltatás elől, amelynek elküldöd őket. Egy vásárlási szolgáltató a rendelést a személyazonosságodhoz kapcsolhatja, és a pénztárca adatvédelmi pontszáma nem garantálhat névtelenséget vagy tőzsdei elfogadást.

A választható szolgáltatások saját adatáramlással is járnak: a vételi és eladási megrendelések felfedik az előírt adataikat, a 2FA a szokásos indításkor szolgáltatást használ, a Secret Hunt pedig tranzakcióhivatkozásokat és tulajdonosi igazolásokat küldhet el. A [hová kerülnek a pénztárca adatai](/hu/learn-privacy/information-sharing/) című haladó útmutató segít ezeket a lehetőségeket mérlegelni.

Kezdd a [mindennapi adatvédelmi szokásokkal](/hu/using-ginger/address-reuse/), és alakíts ki olyan rutint, amelyet értesz, és amely után helyre tudsz állni. A nyílt forráskód lehetővé teszi a vizsgálatot; nem garantálja, hogy minden telepítés hibátlan, vagy hogy egy feltört számítógép biztonságos.
