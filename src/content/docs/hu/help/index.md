---
doc_id: "help.faq"
title: "Ginger Wallet GYIK: kezdd itt"
description: "Rövid válaszok hiányzó pénzről, mentésről, helyreállításról, CoinJoin-várakozásról és díjakról, függő fizetésről, hardverpénztárcáról és biztonságos segítségkérésről."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nehézségi szint: Kezdd itt. A rövid válaszok és első ellenőrzések megelőzik a választható haladó kiegészítéseket.

A látottakhoz legközelebb álló kérdéssel kezdj. E válaszok a szokásos használatot és első biztonságos ellenőrzéseket tárgyalják; a külön [haladó GYIK](/hu/help/advanced-faq/) egyedi beállításokhoz és különleges esetekhez választható kiegészítés.

- [Kezdd itt](#start-here)
- [Helyreállítás és hiányzó pénz](#recovery-and-missing-funds)
- [Kapcsolat és frissítések](#connection-and-updates)
- [CoinJoin-alapok](#coinjoin-basics)
- [Fizetések és hardver](#payments-and-hardware)
- [Biztonságos segítségkérés](#getting-help-safely)

<span id="start-here" data-ginger-heading="kezdd-itt" aria-hidden="true"></span>

## Kezdd itt

<span id="what-is-ginger-and-does-it-hold-my-bitcoin" data-ginger-heading="mi-a-ginger-és-nála-van-a-bitcoinom" aria-hidden="true"></span>

### Mi a Ginger, és nála van a bitcoinom?

A Ginger asztali alkalmazás blokkláncos Bitcoin fogadására és küldésére, választható CoinJoin-adatvédelmi funkciókkal. Te kezeled a költést engedélyező kulcsokat; a koordinátor pusztán egy körhöz csatlakozástól nem kap letétkezelést. Védd a gépet és mentést, mert a saját kulcskezelés nem szünteti meg a lopás, hibák vagy hozzáférésvesztés lehetőségét.

<span id="is-there-an-official-mobile-or-web-wallet" data-ginger-heading="van-hivatalos-mobil--vagy-webes-pénztárca" aria-hidden="true"></span>

### Van hivatalos mobil- vagy webes pénztárca?

A v2.0.26 kiadás támogatott Windows-, macOS- és Linux-gépekhez ad asztali szoftvert. Nem kínál Android-, iOS- vagy böngészős pénztárcát, Lightning-fizetést vagy más kriptovalutát. A [hivatalos Ginger-weboldalról](https://gingerwallet.io/) és kiadási hivatkozásairól indulj; ne adj szavakat alkalmazásnak vagy weboldalnak pusztán a Ginger név miatt.

<span id="do-i-need-an-account-my-own-node-or-a-hardware-wallet" data-ginger-heading="kell-fiók-saját-csomópont-vagy-hardverpénztárca" aria-hidden="true"></span>

### Kell fiók, saját csomópont vagy hardverpénztárca?

Nem. A szokásos szoftverpénztárca helyi helyreállítási adatokat használ, és nem igényel ügyfélfiókot, saját Bitcoin-csomópontot vagy hardvereszközt. A választható 2FA szolgáltatást használ, a vételi/eladási szolgáltatók fiókot vagy identitásadatot kérhetnek, ezért e funkcióknak további követelményeik vannak.

<span id="do-i-have-to-use-coinjoin-before-receiving-or-sending" data-ginger-heading="coinjoint-kell-használnom-fogadás-vagy-küldés-előtt" aria-hidden="true"></span>

### CoinJoint kell használnom fogadás vagy küldés előtt?

Nem. Fogadás, szokásos küldés és CoinJoin külön műveletek. Ha tanuláskor nem szeretnél felügyelet nélküli részvételt, nézd át a **Coinjoin Settings** alatti **Automatically start coinjoin** beállítást; aktív kört szüneteltess, és hagyd befejezni a kritikus munkát.

<span id="can-i-buy-bitcoin-in-ginger-or-receive-an-exchange-withdrawal" data-ginger-heading="vásárolhatok-bitcoint-a-gingerben-vagy-fogadhatok-tőzsdei-kiutalást" aria-hidden="true"></span>

### Vásárolhatok bitcoint a Gingerben vagy fogadhatok tőzsdei kiutalást?

A **Receive** új címét használhatod blokkláncos Bitcoin-kiutaláshoz a cím és hálózat tőzsdei jóváhagyás előtti ellenőrzésével. A Ginger **Buy** és **Sell** szolgáltatói folyamatokat is kínál, ahol elérhetők. Ellenőrizd a választott szolgáltató aktuális feltételeit, ajánlatát és rendelésállapotát; vásárlási igazolása nem azonos a visszaigazolt Bitcoin-beérkezéssel.

<span id="recovery-and-missing-funds" data-ginger-heading="helyreállítás-és-hiányzó-pénz" aria-hidden="true"></span>

## Helyreállítás és hiányzó pénz

<span id="what-do-i-need-to-back-up" data-ginger-heading="miről-kell-mentést-készítenem" aria-hidden="true"></span>

### Miről kell mentést készítenem?

Őrizd meg a helyreállító szavakat eredeti sorrendben és a pontos eredeti jelmondatot, ha használtál ilyet. Ha nélküle jött létre a pénztárca, jegyezd fel, hogy üres volt. Ezek visszaállítják a kulcshoz való hozzáférést; a címkék és más helyi nyilvántartások külön fájlmentést igényelnek.

<span id="is-my-passphrase-just-a-password-i-can-reset" data-ginger-heading="a-jelmondat-csak-visszaállítható-jelszó" aria-hidden="true"></span>

### A jelmondat csak visszaállítható jelszó?

Nem. A Ginger-szoftverpénztárca eredeti jelmondata a tárolt titok védelme mellett a helyreállított Bitcoin-kulcsok meghatározásában is részt vesz. Eltérő szavak vagy jelmondat eltérő érvényes pénztárcához vezethet. Pénztárcanév, hardveres PIN vagy hitelesítő kód nem helyettesíti.

<span id="i-have-the-words-but-forgot-the-passphrase-can-ginger-reset-it" data-ginger-heading="megvannak-a-szavak-de-elfelejtettem-a-jelmondatot-a-ginger-visszaállíthatja" aria-hidden="true"></span>

### Megvannak a szavak, de elfelejtettem a jelmondatot. A Ginger visszaállíthatja?

A Ginger nem tudja visszaállítani az eredeti jelmondatot azonos kulcsok megtartásával. Nézd át a privát mentési nyilvántartásokat, és őrizd meg azokat a telepítéseket, ahol még van költési hozzáférés. Ha még költhetsz, de teljes mentést nem tudsz biztosítani, hozz létre és ellenőrizz új pénztárcamentést, és gondosan utald át a pénzt; a szavakat soha ne küldd állítólagos helyreállító segítőnek.

<span id="can-ginger-show-my-recovery-words-again" data-ginger-heading="megmutathatja-a-ginger-újra-a-helyreállító-szavakat" aria-hidden="true"></span>

### Megmutathatja a Ginger újra a helyreállító szavakat?

A létrehozási folyamat figyelmeztet, hogy később nem mutatja meg őket újra. A **Wallet Settings** → **Tools** → **Verify Recovery Words** a megadott szavakat ellenőrzi; nem tár fel elfelejtett mentést. Ha még hozzáférsz, de elveszett a mentés, gondos átutalás előtt hozz létre és ellenőrizz új pénztárcamentést.

<span id="why-is-my-recovered-wallet-empty-or-missing-transactions" data-ginger-heading="miért-üres-a-helyreállított-pénztárcám-vagy-hiányoznak-tranzakciók" aria-hidden="true"></span>

### Miért üres a helyreállított pénztárcám vagy hiányoznak tranzakciók?

Ellenőrizd a pénztárcát, eredeti szavakat és pontos jelmondatot, a szinkronizálás és helyreállítás végét. Egy elgépelés hibásjelszó-hiba nélkül másik érvényes pénztárcát nyithat. Őrizd a régi fájlokat, és beállításváltoztatás előtt vess össze ismert tranzakciót; a [helyreállítási hibaelhárítás](/hu/help/troubleshooting/#balance-recovery-and-receiving) megadja az első ellenőrzéseket.

<span id="the-sender-says-paid-why-have-i-received-nothing" data-ginger-heading="a-küldő-szerint-fizetett-miért-nem-kaptam-semmit" aria-hidden="true"></span>

### A küldő szerint fizetett. Miért nem kaptam semmit?

Kérd el a Bitcoin-tranzakcióazonosítót, és nézd meg a kívánt címet és hálózatot. A szolgáltatás már a Bitcoin-tranzakció továbbítása előtt fizetettnek jelölhet rendelést, és a Gingernek megjelenítés előtt szinkronizálnia is kell. Új fizetés kérése előtt nézd meg a tranzakciót és helyi előrehaladást; lásd a [fogadási hibaelhárítást](/hu/help/troubleshooting/#balance-recovery-and-receiving).

<span id="will-changing-the-network-make-missing-bitcoin-appear" data-ginger-heading="hálózatváltástól-megjelenik-a-hiányzó-bitcoin" aria-hidden="true"></span>

### Hálózatváltástól megjelenik a hiányzó bitcoin?

Valódi blokkláncos Bitcoinhoz Maint használj. Más hálózatnak más bitcoinjai vannak; választása nem mozgatja vagy állítja helyre a mainnet pénzt. A kívánt pénztárcát és szinkronizálást ellenőrizd, ne a jobb kapcsolati jelzőért válts hálózatot.

<span id="why-has-a-receiving-address-disappeared-does-it-expire" data-ginger-heading="miért-tűnt-el-egy-fogadási-cím-lejár" aria-hidden="true"></span>

### Miért tűnt el egy fogadási cím? Lejár?

Fizetés vagy elrejtés után a cím kikerülhet a várakozó listából; ez nem érvényteleníti a kulcsait. Régi cím továbbra is fogadhat, ezért őrizd a mentését. Új fizetéshez új címet használj az egyetlen nyilvános címen történő közvetlen csoportosítás elkerülésére.

<span id="why-are-receive-or-send-missing" data-ginger-heading="miért-hiányzik-a-receive-vagy-send" aria-hidden="true"></span>

### Miért hiányzik a Receive vagy Send?

A helyreállítás még kereshet, és a végéig elrejthet szokásos műveleteket. A csak megfigyelésre szolgáló pénztárcához költésre aláíróeszköz vagy más támogatott aláírási út is kell. Újratelepítés vagy pótszavak létrehozása előtt nézd meg a típust és állapotot.

<span id="i-lost-my-authenticator-or-my-2fa-code-is-rejected-what-now" data-ginger-heading="elveszett-a-hitelesítőm-vagy-elutasítja-a-2fa-kódot-mi-legyen" aria-hidden="true"></span>

### Elveszett a hitelesítőm vagy elutasítja a 2FA-kódot. Mi legyen?

Ellenőrizd a megfelelő hitelesítő-bejegyzést, telefonidőt és Ginger Tor-/szolgáltatáskapcsolatot. Őrizd meg a meglévő pénztárca- és 2FA-fájlokat; az újratelepítés nem hozza újra az elveszett titkot. A helyreállító szavak és pontos eredeti jelmondat független kulcshelyreállítási utat ad; fájlmódosítás előtt használd a [2FA-hibaelhárítást](/hu/help/troubleshooting/#2fa-and-hardware).

<span id="connection-and-updates" data-ginger-heading="kapcsolat-és-frissítések" aria-hidden="true"></span>

## Kapcsolat és frissítések

<span id="do-i-need-tor-browser-or-a-vpn-to-make-ginger-work" data-ginger-heading="kell-tor-browser-vagy-vpn-a-ginger-működéséhez" aria-hidden="true"></span>

### Kell Tor Browser vagy VPN a Ginger működéséhez?

A Ginger Tort tartalmaz a szokásos pénztárcakapcsolatokhoz; pusztán futtatásához nem kell Tor Browser. Külön böngésző vagy VPN nem javítja automatikusan a szinkronizálást és nem rejti el a szolgáltatónak küldött adatot. A [kapcsolati ellenőrzések](/hu/help/troubleshooting/#connection-or-synchronization) közben hagyd bekapcsolva a szokásos Tor-védelmet.

<span id="why-is-ginger-still-connecting-or-synchronizing" data-ginger-heading="miért-csatlakozik-vagy-szinkronizál-még-a-ginger" aria-hidden="true"></span>

### Miért csatlakozik vagy szinkronizál még a Ginger?

Az első keresés vagy helyreállítás időt igényelhet, az elakadás viszont kapcsolati vagy helyi gond lehet. Ellenőrizd az internetet, gépórát, tárhelyet és beállított csomópontot; leálló előrehaladásnál jegyezd fel a pontos állapotot. Kövesd a [kapcsolati hibaelhárítást](/hu/help/troubleshooting/#connection-or-synchronization) ismételt újraindítás és adattörlés helyett.

<span id="why-did-reinstalling-not-reset-a-broken-setting" data-ginger-heading="miért-nem-állított-helyre-hibás-beállítást-az-újratelepítés" aria-hidden="true"></span>

### Miért nem állított helyre hibás beállítást az újratelepítés?

Az alkalmazás és a pénztárca adatai külön tárolódnak, ezért a szokásos újratelepítés megtarthatja azonos konfigurációját és pénztárcáit. Adatmódosítás előtt őrizd a mentést, és tárd fel a tényleges hibát. Hiányzó pénz vagy várakozás általános javításához ne töröld a teljes adatmappát.

<span id="coinjoin-basics" data-ginger-heading="coinjoin-alapok" aria-hidden="true"></span>

## CoinJoin-alapok

<span id="why-is-coinjoin-waiting-instead-of-starting" data-ginger-heading="miért-vár-a-coinjoin-indulás-helyett" aria-hidden="true"></span>

### Miért vár a CoinJoin indulás helyett?

Olvasd az állapotot: visszaigazolás, elfogadható díj, más résztvevő, kapcsolat vagy alkalmas UTXO kellhet. A várakozás önmagában nem elveszett pénz. A [CoinJoin-hibaelhárítási táblázat](/hu/help/troubleshooting/#coinjoin-does-not-start) magyarázza a kiadott üzeneteket és első teendőjüket.

<span id="what-is-the-minimum-amount-and-why-are-some-coins-left-behind" data-ginger-heading="mennyi-a-minimum-és-miért-maradnak-ki-utxo-k" aria-hidden="true"></span>

### Mennyi a minimum, és miért maradnak ki UTXO-k?

Nincs részvételt garantáló teljes pénztárcaegyenleg. Minden elérhető UTXO-nak teljesítenie kell a kör feltételeit és az alkalmassági és költségellenőrzéseket; kis, még nem visszaigazolt vagy kizárt UTXO-k kimaradhatnak. Ne vonj össze vagy tölts fel pénzt csak egy régi útmutató minimumának eléréséért.

<span id="how-long-will-it-take-and-how-many-rounds-do-i-need" data-ginger-heading="mennyi-idő-és-hány-kör-kell" aria-hidden="true"></span>

### Mennyi idő, és hány kör kell?

Nincs garantált idő vagy általános körszám. Visszaigazolás, díjak, résztvevők, UTXO-k és a cél is számít. A tényleges állapotot és kész költségeket nézd, ne tekintsd az időpreferenciát határidőígéretnek.

<span id="why-did-my-balance-decrease-if-coinjoin-was-described-as-free" data-ginger-heading="miért-csökkent-az-egyenleg-ha-ingyenesnek-írták-a-coinjoint" aria-hidden="true"></span>

### Miért csökkent az egyenleg, ha ingyenesnek írták a CoinJoint?

A koordinátoridíj-mentesség nem szünteti meg a bányászati díjat, és minden ismételt kész kör költséges lehet. Nézd meg, ment-e kimenet másik pénztárcába, és mindkettő szinkronizált-e. Megmagyarázatlan változásnál szüneteltess és egyeztesd a kész tranzakciókat; ne tekints minden váratlan csökkenést normális díjnak.

<span id="what-coordinator-fee-does-ginger-currently-advertise" data-ginger-heading="milyen-koordinátori-díjat-hirdet-jelenleg-a-ginger" aria-hidden="true"></span>

### Milyen koordinátori díjat hirdet jelenleg a Ginger?

A jelenlegi beállítások szerint minden legfeljebb 0.03 BTC-s (3 000 000 satoshi) bemenet díjmentes, pontosan 0.03 BTC is. E fölött a díj a teljes bemeneti érték 0.3%-a, hacsak más mentesség, például megfelelő remix nem alkalmazható. A küszöb bemenetenként érvényes, nem a teljes egyenlegre. Bányászati díj továbbra is van. Részvétel előtt ellenőrizd újra a [Ginger aktuális díjmagyarázatát](https://gingerwallet.io/) és a kínált kört.

<span id="can-i-stop-coinjoin-or-turn-off-the-computer" data-ginger-heading="leállíthatom-a-coinjoint-vagy-kikapcsolhatom-a-gépet" aria-hidden="true"></span>

### Leállíthatom a CoinJoint vagy kikapcsolhatom a gépet?

A vezérlőpanel szüneteltető gombjával állítsd le a további részvételt, és hagyd a kritikus szakaszt befejeződni. Alvás, kapcsolatvesztés vagy kényszerleállítás megszakíthat aktív kört; szabályosan lépj ki, és várd meg a leállási eljárást. A már továbbított tranzakció az alkalmazás bezárása után is folytatódik a Bitcoinon.

<span id="why-is-there-a-transaction-when-i-never-pressed-send" data-ginger-heading="miért-van-tranzakció-ha-nem-nyomtam-sendet" aria-hidden="true"></span>

### Miért van tranzakció, ha nem nyomtam Sendet?

Az automatikus CoinJoin részvételbekapcsolás után minden alkalommal szokásos **Send** fizetés nélkül is közös tranzakciót hozhat létre. Nézd meg a tranzakciót, saját kimeneteket, díjakat és kimeneti célt, ne feltételezd a megmagyarázatlan költésről automatikusan, hogy CoinJoin. Ha továbbra is megmagyarázatlan vagy a kulcsok kiszivároghattak, őrizd a nyilvántartást és védd a megmaradt pénzt.

<span id="can-i-spend-at-99-and-does-100-mean-i-am-anonymous" data-ginger-heading="költhetek-99-nál-és-100-névtelenséget-jelent" aria-hidden="true"></span>

### Költhetek 99%-nál, és 100% névtelenséget jelent?

Szokásos fizetést elkölthető pénznél és elérhető küldési folyamatnál végezhetsz; az adatvédelmi százalék nem Bitcoin-költési követelmény. A Ginger helyi becslése a választott cél mellett, nem más ismereteire vonatkozó garancia. Fizetés, újrahasznált cím vagy azonosított tőzsde továbbra is kapcsolatot teremthet.

<span id="why-is-the-play-control-missing-when-all-funds-are-private" data-ginger-heading="miért-hiányzik-az-indítógomb-ha-minden-pénz-privát" aria-hidden="true"></span>

### Miért hiányzik az indítógomb, ha minden pénz privát?

A szokásos kézi vezérlőpanel elrejtheti az indítást, ha minden pénz teljesíti a célt. A szokásos indítás csak privát elérhető UTXO-k készletét is elutasítja, ezért másik cél nem kényszerít újabb kört. Ha csak mozgatnád a pénzt, szokásos fizetést mérlegelj.

<span id="payments-and-hardware" data-ginger-heading="fizetések-és-hardver" aria-hidden="true"></span>

## Fizetések és hardver

<span id="why-is-a-payment-still-pending-after-the-estimated-time" data-ginger-heading="miért-függő-a-fizetés-a-becsült-idő-után-is" aria-hidden="true"></span>

### Miért függő a fizetés a becsült idő után is?

A becslés nem határidő: versengő tranzakciók és szabálytalan blokkérkezés hat a visszaigazolásra. Nézd az előzményeket; ha **Speed Up Transaction** elérhető, használat előtt nézd át a többletdíjat. Kapcsolati hiba vagy késés nem ok második fizetés küldésére.

<span id="can-i-cancel-a-payment-or-recover-one-sent-to-the-wrong-address" data-ginger-heading="visszavonhatok-fizetést-vagy-visszaszerezhetem-a-rossz-címre-küldöttet" aria-hidden="true"></span>

### Visszavonhatok fizetést vagy visszaszerezhetem a rossz címre küldöttet?

A Ginger nem fordíthat vissza visszaigazolt fizetést. Előtte megfelelő tranzakciónál **Cancel Transaction** lehetőséget kínálhat, de ez helyettesítési kísérlet, amely elveszítheti a versenyt. Az eredmény megállapításáig ne ígérd a címzettnek, hogy az eredeti törölve lett.

<span id="why-are-there-insufficient-funds-when-my-balance-looks-large-enough" data-ginger-heading="miért-elégtelen-a-pénz-ha-elégnek-látszik-az-egyenleg" aria-hidden="true"></span>

### Miért elégtelen a pénz, ha elégnek látszik az egyenleg?

A kijelzett teljes összeg nem mindig költhető: lehet még nem visszaigazolt, CoinJoinban átmenetileg lekötött vagy díj után elégtelen. Nézd meg a pénztárcát, összeget és végső előnézetet. Teljes összeg küldésekor a díj csökkentheti a beérkezést, ezért vesd össze a címzett összegét a rögzített számlával.

<span id="why-did-my-payment-create-another-address-or-leave-change" data-ginger-heading="miért-lett-másik-cím-vagy-visszajáró-a-fizetésemben" aria-hidden="true"></span>

### Miért lett másik cím vagy visszajáró a fizetésemben?

A fizetés nagyobb bitcoinrészt költhet el, és a megmaradt értéket saját pénztárcádba adhatja visszajáróként. Az új visszajárócím normális, nem idegennek küldött pénz. Nem kell kézzel visszaküldened; ha bármi megmagyarázatlan, nézd meg a teljes tranzakciót.

<span id="can-i-use-a-hardware-wallet-including-after-coinjoin" data-ginger-heading="használhatok-hardverpénztárcát-coinjoin-után-is" aria-hidden="true"></span>

### Használhatok hardverpénztárcát, CoinJoin után is?

A Ginger kompatibilis hardverpénztárcához támogatja a dokumentált fogadási és aláírási folyamatot. A szavak a hardver helyreállítási útján maradjanak, ne a gépen. Hardverpénztárca fogadhat alkalmas CoinJoin-kimenetet, de nem a szokásos Ginger CoinJoin aláíró forrása; a választható irányítás [haladó kérdés](/hu/help/advanced-faq/#can-coinjoin-send-directly-to-my-hardware-wallet).

<span id="will-an-exchange-accept-my-bitcoin-after-coinjoin" data-ginger-heading="elfogadja-a-tőzsde-a-bitcoinomat-coinjoin-után" aria-hidden="true"></span>

### Elfogadja a tőzsde a bitcoinomat CoinJoin után?

A Ginger előkészíthet szokásos fizetést, de nem garantál szolgáltatói elfogadást vagy fiókszabályzatot. Küldés vagy eladás előtt ellenőrizd az adott tőzsde aktuális követelményeit. A magas pontszám nem elfogadási tanúsítvány, és további pénztárcaművelet sem ígérheti ezt.

<span id="getting-help-safely" data-ginger-heading="biztonságos-segítségkérés" aria-hidden="true"></span>

## Biztonságos segítségkérés

<span id="what-can-i-share-with-support-and-where-do-i-report-a-bug" data-ginger-heading="mit-oszthatok-meg-a-támogatással-és-hol-jelentsek-hibát" aria-hidden="true"></span>

### Mit oszthatok meg a támogatással, és hol jelentsek hibát?

Használd a [hivatalos Ginger-repository](https://github.com/GingerPrivacy/GingerWallet/issues) hivatkozásait, és add meg a verziót, rendszert, pontos hibát és nem titkos lépéseket. Megosztás előtt nézd át a naplórészletet; soha ne küldj szavakat, jelmondatot, hitelesítő kódot vagy teljes adatmappát. A támogatáshoz nem kell webes pénztárca-hitelesítés vagy aktiválási fizetés; lásd a [hasznos hibajelentést](/hu/help/troubleshooting/#report-a-useful-issue).

<span id="about-this-manual" data-ginger-heading="a-kézikönyvről" aria-hidden="true"></span>

## A kézikönyvről

Az angol kézikönyv a Ginger v2.0.26-ot írja le, és angol felületfeliratokat használ. A dokumentáció és fordításai hibákat tartalmazhatnak. A Ginger nem garantálja a pontosságukat; folytatás előtt az alkalmazásban ellenőrizd a kritikus részleteket. Ha hibát találsz, [jelentsd a dokumentáció repositoryjában](https://github.com/GingerPrivacy/GingerDoc/issues) pénztárcatitkok nélkül.
