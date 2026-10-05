---
doc_id: "learn-self-custody.basics"
title: "Saját Bitcoin-kezelés: mentések, jelmondatok és hardverpénztárcák"
description: "Ismerd meg, ki költheti el a bitcoinjaidat, mitől teljes a helyreállítási mentés, és hogyan tér el a Ginger szoftver- és hardverpénztárcája."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

A saját kezelés azt jelenti, hogy te birtoklod a bitcoin elköltéséhez szükséges adatokat. Fizetést úgy hagysz jóvá, hogy nem kérsz számlaszolgáltatót a pénz kiadására. Cserébe védened kell ezeket az adatokat, használható mentést kell tartanod, és gondosan ellenőrizned kell minden fizetést.

<span id="keys-records-and-recovery" data-ginger-heading="kulcsok-nyilvántartás-és-helyreállítás" aria-hidden="true"></span>

## Kulcsok, nyilvántartás és helyreállítás

A Bitcoin-hálózat nyilvános tranzakciónyilvántartást tart fenn. A pénztárcád titkos kulcsokkal hagyja jóvá az általad kezelt részek elköltését. Az alkalmazás pótszámítógépre telepítése nem hozza újra létre e titkokat; ezért fontos a helyreállítási mentés.

A Ginger szoftverpénztárcájánál a helyreállító szavak és eredeti jelmondat újra létrehozzák a kulcsokat. A helyi pénztárcafájlok további összefüggéseket, például címkéket és beállításokat őrizhetnek. A hitelesítő alkalmazás, a hardvereszköz PIN-je és a számítógépről másolt fájl eltérő célokat szolgálnak; egyikről se feltételezd, hogy helyettesíti a szavas mentést.

<span id="the-passphrase-changes-the-wallet" data-ginger-heading="a-jelmondat-megváltoztatja-a-pénztárcát" aria-hidden="true"></span>

## A jelmondat megváltoztatja a pénztárcát

A Ginger BIP39-jelmondatot használ a helyreállító szavaival. Az eltérő jelmondat eltérő kulcsokat eredményez. Ezért fejeződhet be sikeresen a helyreállítás úgy, hogy üres pénztárcát mutat az eredeti jelmondat elgépelése miatt. A [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) határozza meg ezt a kapcsolatot.

Jegyezd fel, használtál-e ilyet, és pontosan őrizd meg. Helyreállítható védelmet válassz, ne kizárólag emlékezetben létező összetett titkot. A helyreállítási utasításokat úgy tárold, hogy később megkülönböztesd a pénztárca jelmondatát a számítógépes belépéstől vagy hitelesítő kódtól.

<span id="software-versus-hardware" data-ginger-heading="szoftver-vagy-hardver" aria-hidden="true"></span>

## Szoftver vagy hardver

| Elrendezés | Hol történik az aláírás? | Gyakorlati felelősség |
| --- | --- | --- |
| Ginger-szoftverpénztárca | Az asztali gépen az elérhető titkával | Védd a gépet és helyreállítási adatokat; automatikus CoinJoinhoz tudnia kell aláírni |
| Gingerrel használt hardverpénztárca | Az eszközön támogatott műveleteknél | Az eszközön ellenőrizd a részleteket, és őrizd meg a gyártó helyreállítási mentését |
| Csak megfigyelésre szolgáló bejegyzés aláíró nélkül | Önmagában nem hagyhat jóvá költést | Védd érzékeny nyilvános adatait, és tarts hozzáférést külön aláíróhoz |

A hardverpénztárca csökkentheti a kulcsok kitettségét a számítógépes kártevőknek, de így is jóváhagyhatsz rosszindulatú fizetést, ha nem nézed meg az eszköz képernyőjét. Seedjének asztali pénztárcába importálása megváltoztatja a biztonsági elrendezést: e kulcsok immár a számítógépnek is ki vannak téve.

<span id="recovery-is-part-of-the-setup" data-ginger-heading="a-helyreállítás-a-beállítás-része" aria-hidden="true"></span>

## A helyreállítás a beállítás része

Mielőtt pénztárcára hagyatkozol, győződj meg róla, hogy megtalálod és érted a mentését. Hozzáférhető Ginger-szoftverpénztárcánál a **Verify Recovery Words** ellenőrzi a megadott szavakat. Az eredeti jelmondat is legyen elérhető. Hardverpénztárcánál a gyártó megfelelő mentésellenőrzését használd, a seed számítógépbe gépelése nélkül.

Az alkalmazásfájloknál többet őrizz meg. A telepítők újra beszerezhetők; a hiányzó titok nem tölthető le a projekt weboldaláról. Gondolj lemezhibára, elveszett eszközre és a mentés helyének elérésére. A bitcoin.org [pénztárca-biztonsági útmutatója](https://bitcoin.org/en/secure-your-wallet) a mentést és eszközvédelmet kiegészítő gyakorlatként tárgyalja.

<span id="evaluate-a-wallet-with-evidence" data-ginger-heading="bizonyíték-alapján-értékeld-a-pénztárcát" aria-hidden="true"></span>

## Bizonyíték alapján értékeld a pénztárcát

Hivatalos kiadásokat használj, ellenőrizd az aláírásokat, és olvasd el a használni kívánt funkciók korlátait. A nyílt forráskód vizsgálható; nem igazolja minden bináris fájl vagy függőség auditálását. Külső adatlapok, például [a bitcoin.org Ginger-bejegyzése](https://bitcoin.org/en/wallets/desktop/windows/ginger/) és [a WalletScrutiny Ginger-oldala](https://walletscrutiny.com/desktop/gingerwallet/) további összefüggéseket adnak. Ellenőrizd a hatókörüket és dátumaikat ahelyett, hogy a listázást a telepített verziód garanciájának tekintenéd.

A Ginger egy asztali folyamatba hozza a szoftverpénztárca helyreállítását, a hardverintegrációt és adatvédelmi eszközöket. Választható haladó olvasmány: [helyreállítható biztonsági rutin kialakítása](/hu/learn-self-custody/security-routine/), benne a címek, pénztárcaadatok vagy kulcsok kiszivárgására adott válaszokkal.
