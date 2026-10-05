---
doc_id: "help.advanced-faq"
title: "Haladó Ginger Wallet GYIK"
description: "Kiadott Ginger-válaszok a helyreállítási keresésről, metaadatokról, xpubról, UTXO-kiválasztásról, adatvédelmi előrehaladásról, teljes CoinJoin-költségről, célpénztárcáról és adatmegosztásról."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Ha először állítasz be vagy használsz pénztárcát, kezdd az alapvető GYIK-kal.

E kérdések egyedi beállításokról, mélyebb adatvédelmi döntésekről és különleges helyreállítási esetekről szólnak. A szokásos első használathoz térj vissza az [alapvető GYIK-hoz](/hu/help/).

- [Helyreállítás és helyi adatok](#recovery-and-local-data)
- [UTXO-kiválasztás és költés](#coin-selection-and-spending)
- [CoinJoin-költségek és előrehaladás](#coinjoin-costs-and-progress)
- [Hardver és adatvédelmi határok](#hardware-and-privacy-boundaries)

<span id="recovery-and-local-data" data-ginger-heading="helyreállítás-és-helyi-adatok" aria-hidden="true"></span>

## Helyreállítás és helyi adatok

<span id="why-can-the-same-words-produce-a-different-wallet" data-ginger-heading="miért-eredményezhetnek-azonos-szavak-eltérő-pénztárcát" aria-hidden="true"></span>

### Miért eredményezhetnek azonos szavak eltérő pénztárcát?

Az eredeti jelmondat részt vesz a kulcsszármaztatásban, és más alkalmazás eltérő fiókot vagy címtípust használhat. Az érvényes szókészlet önmagában nem igazolja azonos fiók kijelzését. Először az eredeti jelmondatot és keresési állapotot nézd meg; a fiókkompatibilitást csak a szokásos ellenőrzések után vizsgáld.

<span id="when-should-i-increase-the-recovery-gap-limit" data-ginger-heading="mikor-emeljem-a-helyreállítás-gap-limitjét" aria-hidden="true"></span>

### Mikor emeljem a helyreállítás gap limitjét?

Ha van bizonyíték sok, fizetett címet megelőző nem használt címre, például más alkalmazásban létrehozottakra. Az **Advanced Recovery Options** → **Minimum Gap Limit:** kibővíti a keresést, és növelheti a munkát és időt; a v2.0.26 kezdőértéke 114. Nem javít hibás szavakat, jelmondatot vagy inkompatibilis fiókot.

<span id="why-did-labels-or-privacy-information-change-after-recovery" data-ginger-heading="miért-változott-címke-vagy-adatvédelmi-adat-helyreállítás-után" aria-hidden="true"></span>

### Miért változott címke vagy adatvédelmi adat helyreállítás után?

A szavak kulcsokat állítanak vissza, nem minden privát jegyzetet vagy helyi tranzakcióelemzést. A JSON és a megfelelő ATTR eltérő szerepű; őrizd az eredeti fájlokat, és másolatokkal vizsgálódj. A hiányzó címke vagy módosult helyi pontszám önmagában nem bizonyítja a Bitcoin-tranzakció vagy nyilvános előzmény változását.

<span id="can-i-use-the-same-recovery-words-in-two-wallet-applications" data-ginger-heading="használhatom-azonos-helyreállító-szavakat-két-alkalmazásban" aria-hidden="true"></span>

### Használhatom azonos helyreállító szavakat két alkalmazásban?

Kompatibilis alkalmazások azonos kulcsokat kezelhetnek, de ez nem hoz létre új pénztárcát és nem vonja vissza a korábban megosztott adatot. A második címeket vagy kiterjesztett nyilvános kulcsot közölhet szolgáltatásaival, a párhuzamos költés pedig összezavarhatja az elérhető UTXO-k követését. Pusztán eszközcsatlakozáshoz ne írd a hardver szavait a gépbe.

<span id="what-does-an-exposed-address-or-xpub-allow-someone-to-do" data-ginger-heading="mit-tehet-valaki-kiszivárgott-címmel-vagy-xpubbal" aria-hidden="true"></span>

### Mit tehet valaki kiszivárgott címmel vagy xpubbal?

A cím a nyilvános előzmények adott részére mutat. A kiterjesztett nyilvános kulcs sok címet fedhet fel, jövőbelieket is a hatókörében, de önmagában általában nem költési jogosultság. Azonos kiszivárgott ág új címei nem vonják vissza a követést; kiszivárgott aláírási titok más választ, új kulcsokat igényel.

<span id="does-the-2fa-file-recover-the-wallet-without-the-service" data-ginger-heading="a-2fa-fájl-szolgáltatás-nélkül-helyreállítja-a-pénztárcát" aria-hidden="true"></span>

### A 2FA-fájl szolgáltatás nélkül helyreállítja a pénztárcát?

A `2fa_info.gws` fájlt ne tekintsd független offline helyreállító kulcsnak. A szokásos 2FA-indítás telepítési azonosítóval és szolgáltatói kódellenőrzéssel szerzi a további fájltitkosítási titkot. A szavakat és eredeti jelmondatot függetlenül őrizd; a 2FA bekapcsolása nem von vissza másolt kulcsot.

<span id="how-do-i-delete-a-local-wallet-without-confusing-deletion-with-revocation" data-ginger-heading="hogyan-töröljek-helyi-pénztárcát-a-törlés-és-visszavonás-összekeverése-nélkül" aria-hidden="true"></span>

### Hogyan töröljek helyi pénztárcát a törlés és visszavonás összekeverése nélkül?

Előbb készíts mentést, majd a **Wallet Settings** → **Tools** → **Delete Wallet** alatt olvasd a jóváhagyást. A helyi adatok eltávolítása nem töröl Bitcoin-tranzakciókat, és nem érvényteleníti a szavak másolatait. Kiszivárgott aláírókulcsnál a puszta törlés nem gátolja más költését.

<span id="coin-selection-and-spending" data-ginger-heading="utxo-kiválasztás-és-költés" aria-hidden="true"></span>

## UTXO-kiválasztás és költés

<span id="what-is-the-difference-between-a-coin-an-address-and-a-wallet" data-ginger-heading="mi-a-különbség-utxo-cím-és-pénztárca-között" aria-hidden="true"></span>

### Mi a különbség UTXO, cím és pénztárca között?

Az érme vagy UTXO egy korábbi Bitcoin-tranzakció el nem költött kimenete. Egy cím több UTXO-t fogadhat, a pénztárca sok címet és UTXO-t kezelhet. A költés és CoinJoin döntései az elérhető UTXO-kra vonatkoznak, nem csupán a teljes egyenlegre; a [szótár](/hu/help/glossary/) magyarázza a kifejezéseket.

<span id="does-combining-coinjoined-coins-always-destroy-all-privacy" data-ginger-heading="coinjoin-utxo-k-kombinálása-mindig-minden-adatvédelmet-tönkretesz" aria-hidden="true"></span>

### CoinJoin-UTXO-k kombinálása mindig minden adatvédelmet tönkretesz?

Nincs minden megfigyelőt vagy fizetést leíró szabály. A szokásos közös költés összekapcsolhat bemeneteket, különösen egy már identitáshoz kötöttnél, de nem fed fel automatikusan minden korábbi tulajdonosi kapcsolatot. A tényleges fizetés bemeneteit és visszajáróját nézd, ne tekintsd garanciának a mindig vagy soha kombinálást.

<span id="does-a-reused-address-automatically-publish-my-entire-wallet" data-ginger-heading="újrahasznált-cím-automatikusan-közzéteszi-a-teljes-pénztárcámat" aria-hidden="true"></span>

### Újrahasznált cím automatikusan közzéteszi a teljes pénztárcámat?

Nem, de a cím beérkezései együtt vizsgálhatók és a közzétevőhöz vagy megadóhoz kapcsolhatók. Későbbi közös költés és külső ismeret többet fedhet fel. A címkék helyi döntéseket segítenek; nem kényszerítenek nyilvános elkülönítést, és nem bizonyítják az automatikus választás kívánt határmegőrzését.

<span id="does-manual-control-force-exactly-those-inputs-into-the-final-payment" data-ginger-heading="a-manual-control-pontosan-azokat-a-bemeneteket-kényszeríti-a-végső-fizetésbe" aria-hidden="true"></span>

### A Manual Control pontosan azokat a bemeneteket kényszeríti a végső fizetésbe?

A **Manual Control** jelölt UTXO-kat választ szokásos fizetéshez. Jóváhagyás előtt a végső előnézet tényleges bemeneteit, címzetti összegét, visszajáróját és díját nézd. Ez a CoinJoin-bemenetválasztástól különálló, nem állít pontos listát jövőbeli körhöz.

<span id="should-i-consolidate-many-small-coins-while-fees-are-low" data-ginger-heading="vonjak-össze-sok-kis-utxo-t-alacsony-díjnál" aria-hidden="true"></span>

### Vonjak össze sok kis UTXO-t alacsony díjnál?

Az összevonás csökkentheti a később szükséges bemenetek számát, de a kombináló tranzakció díjas és korábban külön tevékenységet kapcsolhat össze. Az alacsonyabb díjráta e költséget módosítja, nem az adatközlést. Összevonás előtt mérlegeld a célt, értéket és ismert előzményeket.

<span id="why-is-a-tiny-payment-missing-and-does-exclude-coins-freeze-it" data-ginger-heading="miért-hiányzik-apró-fizetés-és-az-exclude-coins-befagyasztja" aria-hidden="true"></span>

### Miért hiányzik apró fizetés, és az Exclude Coins befagyasztja?

Elveszett kis kimenet feltételezése előtt nézd a szinkronizálást és porküszöböt. Az **Exclude Coins** CoinJoin-részvételt érint, nem szokásos költést, és nem fagyaszt UTXO-t. Váratlan apró beérkezéshez nem kell azonnali válasz; felhasználás előtt mérlegeld költési költségét és kapcsolatait.

<span id="can-i-set-any-custom-fee-rate-or-guarantee-a-confirmation-time" data-ginger-heading="beállíthatok-bármilyen-díjrátát-vagy-garantálhatok-visszaigazolási-időt" aria-hidden="true"></span>

### Beállíthatok bármilyen díjrátát vagy garantálhatok visszaigazolási időt?

Nem. A kiadott kézi díjszerkesztő elutasítja az 1 sat/vByte alatti értéket, a hálózati szabályzat pedig ennél többet is követelhet. Egyedi díjráta is más tranzakciókkal verseng, és nem foglalhat visszaigazolási határidőt. Jóváhagyás előtt a teljes díjat nézd, ne csak a díjrátát.

<span id="coinjoin-costs-and-progress" data-ginger-heading="coinjoin-költségek-és-előrehaladás" aria-hidden="true"></span>

## CoinJoin-költségek és előrehaladás

<span id="why-can-the-private-balance-percentage-differ-from-overall-progress" data-ginger-heading="miért-térhet-el-a-privát-egyenleg-százaléka-az-összesített-előrehaladástól" aria-hidden="true"></span>

### Miért térhet el a privát egyenleg százaléka az összesített előrehaladástól?

Eltérő helyi mérések. Az összesített előrehaladás az UTXO-k pontszámának célhoz közeledését az értékkel súlyozza, a színes privát egyenleg pedig a már célt teljesítő értéket számolja. Egyik sem külső megfigyelő általi azonosítás mért valószínűsége. Helyes egyenlegeknél is eltérhetnek.

<span id="why-can-progress-fall-or-change-when-i-adjust-the-target" data-ginger-heading="miért-eshet-az-előrehaladás-vagy-változhat-célmódosításkor" aria-hidden="true"></span>

### Miért eshet az előrehaladás vagy változhat célmódosításkor?

Fogadás, közös költés, helyi elemzés nélküli helyreállítás vagy célmódosítás változtathat a kijelzésen. A cél csökkentése a nyilvános előzmény módosítása nélkül sorolhat át UTXO-kat. Vizsgáld az érintett tranzakciókat és beállításokat, ne tekintsd a pontszámváltozást lopásbizonyítéknak vagy új adatvédelmi eredmény garanciájának.

<span id="can-i-choose-exactly-which-coins-join-a-round" data-ginger-heading="kiválaszthatom-pontosan-a-körbe-kerülő-utxo-kat" aria-hidden="true"></span>

### Kiválaszthatom pontosan a körbe kerülő UTXO-kat?

A kliens a kiadott beállításokkal választ alkalmas bemeneteket. Egyes UTXO-kat kizárhatsz és preferenciákat módosíthatsz, de a szokásos küldési kézi választás nem kényszerít CoinJoin-listát. A kizárás az UTXO-hoz kötött; nem azonos cím minden jövőbeli beérkezésének fenntartása.

<span id="what-do-rejected-coins-or-a-blame-round-mean" data-ginger-heading="mit-jelentenek-az-elutasított-utxo-k-vagy-a-blame-round" aria-hidden="true"></span>

### Mit jelentenek az elutasított UTXO-k vagy a blame round?

A blame round az előző befejezetlen próbálkozás utáni protokoll-újrapróbálkozás; nem más felhasználó azonosítására vagy megvádolására szól. Elutasításnál vagy átmeneti elérhetetlenségnél a pontos okot és állapotot vizsgáld. Egyik üzenet sem ad önmagában pénzkezelést a koordinátornak; lásd a [kiadott állapottáblázatot](/hu/help/troubleshooting/#coinjoin-does-not-start).

<span id="how-do-i-reconcile-the-full-cost-of-a-round" data-ginger-heading="hogyan-egyeztessem-egy-kör-teljes-költségét" aria-hidden="true"></span>

### Hogyan egyeztessem egy kör teljes költségét?

Add össze az elköltött saját bemeneteket, és vond ki az adott tranzakció összes saját kimenetét, a másik pénztárcába menteket is. A különbség koordinátori díjat, bányászati költséget és fennmaradó kimenetelosztási különbséget tartalmazhat. Más résztvevő kimenetét ne számold sajátodnak, és ne feltételezd, hogy egyetlen díjfelirat a teljes különbséget lefedi.

<span id="is-a-remix-exemption-permanent-or-applied-to-my-entire-balance" data-ginger-heading="a-remixmentesség-állandó-vagy-a-teljes-egyenlegre-érvényes" aria-hidden="true"></span>

### A remixmentesség állandó vagy a teljes egyenlegre érvényes?

Nem. Bemeneti alkalmassági szabály a kínált kör szabályzata szerint, nem örök jogosultság minden pénztárcatranzakcióhoz. A Ginger hirdetett szabályzata megfelelő remixeléseket és egy tranzakción keresztüli közvetlen költést is tartalmaz; a bányászati díj megmarad. Ellenőrizd az aktuális feltételeket, ne kizárólag feltételezett mentességért bonts vagy mozgass UTXO-kat.

<span id="hardware-and-privacy-boundaries" data-ginger-heading="hardver-és-adatvédelmi-határok" aria-hidden="true"></span>

## Hardver és adatvédelmi határok

<span id="can-coinjoin-send-directly-to-my-hardware-wallet" data-ginger-heading="küldhet-a-coinjoin-közvetlenül-a-hardverpénztárcámba" aria-hidden="true"></span>

### Küldhet a CoinJoin közvetlenül a hardverpénztárcámba?

Alkalmas szoftverpénztárca kínált, betöltött hardverpénztárcát választhat a **Coinjoin to this wallet** alatt. A cél az adott kör kimeneteit kapja külön célelérési esemény megvárása nélkül; a szokásos indítás nem kényszerít kört már privát jelöltekkel. Minden újraindítás után ellenőrizd a célt, mert alaphelyzetbe áll, és soha ne importáld a hardver seedjét a gépbe a működtetéshez.

<span id="does-an-own-node-replace-every-ginger-service-or-make-tor-unnecessary" data-ginger-heading="saját-csomópont-helyettesít-minden-ginger-szolgáltatást-vagy-feleslegessé-teszi-a-tort" aria-hidden="true"></span>

### Saját csomópont helyettesít minden Ginger-szolgáltatást vagy feleslegessé teszi a Tort?

Nem. Beállított csomópont adott szerepeket, például blokk- vagy díjbecslés-ellátást tölthet be, miközben CoinJoin, szolgáltatói vagy 2FA-folyamatok továbbra is felkereshetik szolgáltatásaikat. A Tor a kapcsolati kitettséget kezeli, a fogadó pedig továbbra is látja a kéréstartalmat. A konkrét adatáramlást nézd, ne feltételezd, hogy a csomópontbeállítás külső kérések hiányát jelenti.

<span id="does-payjoin-hide-my-payment-from-its-recipient" data-ginger-heading="a-payjoin-elrejti-a-fizetést-a-címzett-elől" aria-hidden="true"></span>

### A PayJoin elrejti a fizetést a címzett elől?

Nem. A címzett ismeri a kérését, és egyeztetés közben látja a tervezett fizetést. Sikeres együttműködés gyengítheti külső megfigyelő tulajdonosi feltételezéseit, de minták és más adat korlátozhatja ezt. A Ginger sikertelen felépítéskor szokásos fizetésre állhat vissza, ezért pusztán a jóváhagyás nem PayJoin-garancia.

<span id="how-do-i-prove-control-of-an-address-without-paying" data-ginger-heading="hogyan-bizonyítsam-cím-feletti-rendelkezésemet-fizetés-nélkül" aria-hidden="true"></span>

### Hogyan bizonyítsam cím feletti rendelkezésemet fizetés nélkül?

A pénztárca címéhez használd a **Sign Message** lehetőséget, olvasd a pontos állítást, és csak a kívánt ellenőrzővel oszd meg az aláírást. Eszköz-, címtípus- és ellenőrzőkompatibilitás továbbra is kell. Az aláírás nem utal bitcoint és nem igazol minden cím feletti tulajdont; az aláírt címet az ellenőrző által ismert identitáshoz kapcsolhatja.

<span id="what-information-do-secret-hunt-and-buysell-services-receive" data-ginger-heading="milyen-adatokat-kap-a-secret-hunt-és-a-vételieladási-szolgáltatás" aria-hidden="true"></span>

### Milyen adatokat kap a Secret Hunt és a vételi/eladási szolgáltatás?

Az érintett Secret Hunt-ellenőrzések kör- és tranzakcióazonosítót, bemeneti outpointot és rendelkezési igazolást küldhetnek. A vételi/eladási címellenőrzés és rendelés a szükséges cím- és rendelési adatokat küldi; a szolgáltatói weboldalak saját identitás- és böngésző-adatközléssel járnak. Külön választható folyamatok, ezért a szokásos szinkronizálás adatvédelmét ne általánosítsd mindegyikre.
