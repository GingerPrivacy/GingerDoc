---
doc_id: "learn-self-custody.security-routine"
title: "Helyreállítható Bitcoin-biztonsági rutin kialakítása"
description: "Alakíts ki helyreállítható Bitcoin-biztonsági rutint, és reagálj megfelelően címek, xpubok, pénztárcafájlok, helyreállító szavak vagy eszközök kiszivárgására."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Az alapvető helyreállítási mentés legyen elérhető; a kiszivárgott adatnak megfelelő incidenslépéseket használd.

A hasznos biztonsági rutin véd a jogosulatlan hozzáféréstől, miközben érthető utat hagy a jogos helyreállításhoz. A titkok hozzáadása szerepük dokumentálása nélkül növelheti a véletlen elvesztés esélyét.

<span id="record-the-recovery-plan" data-ginger-heading="rögzítsd-a-helyreállítási-tervet" aria-hidden="true"></span>

## Rögzítsd a helyreállítási tervet

Vezess privát leltárt a pénztárcáidról, aláíróik típusáról, a mentések helyéről és a BIP39-jelmondat szükségességéről. A leltárnak nem kell magukat a titkokat tartalmaznia. Akkor is legyen hasznos, ha már nincs meg a számítógép vagy telefon, ne csak addig, amíg emlékszel a beállításokra.

Őrizz elég pénztárcaszabály-adatot a megfelelő helyreállított fiók felismeréséhez, különösen hardvereszköz vagy több pénztárca mellett. Ha fontosak a nyilvántartáshoz, tarts címke- és metaadatmentést; a blokklánc nem tudja újraépíteni a privát jegyzeteidet.

Ha szeretnéd, hogy cselekvőképtelenség vagy halál után más állítsa helyre a pénzt, a körülményeidhez illő világos, kipróbált hozzáférési tervet készíts. Kerüld minden titok gondatlan megosztását most, vagy annak feltételezését, hogy az illető kitalálja, mely jelszóra gondoltál. Az öröklési és hozzáférési megoldásoknak lehetnek helyi szakmai tanácsot igénylő jogi vonatkozásaik; ez az oldal nem ír elő jogi konstrukciót.

<span id="check-before-funding-and-before-signing" data-ginger-heading="ellenőrzés-feltöltés-és-aláírás-előtt" aria-hidden="true"></span>

## Ellenőrzés feltöltés és aláírás előtt

Ellenőrizd az alkalmazás letöltését, a pénztárca megnyitását és a mentést. Hardverpénztárcánál az eszközön hasonlítsd össze a fogadási címet, és aláírás előtt ellenőrizd minden fizetés célját és összegét.

Kis összeggel tanulj új folyamatot. Egyeztesd, mit küldtél, mi érkezett és milyen díjakat fizettél. A nagyobb összeg nem könnyíti meg egy ismeretlen folyamat hibafeltárását.

A számítógépet és aláíróeszközt hitelesített forrásokon keresztül frissítsd. A privát üzenetben érkező frissítési értesítés nem bizonyítja a fájl hitelességét. Soha ne telepíts „helyreállító szoftvert”, és ne engedj távoli vezérlést pusztán azért, mert egy idegen szerint szinkronizálni kell a bitcoinjaidat.

<span id="understand-ginger-2fa" data-ginger-heading="értsd-meg-a-ginger-2fa-ját" aria-hidden="true"></span>

## Értsd meg a Ginger 2FA-ját

A Ginger választható 2FA-ja helyi pénztárcafájl-titkosítást és szolgáltatással végzett indítási ellenőrzést ad hozzá. Hasznos lehet a helyi fájlhozzáférés egyes formái ellen, de a szokásos indítást függővé teszi a hitelesítőtől és szolgáltatástól.

A helyreállító szavak és eredeti jelmondat függetlenül legyenek elérhetők. Ne feltételezd, hogy a `2fa_info.gws` offline helyreállító mesterkulcs. Azt se feltételezd, hogy a 2FA megállítja a szavakkal és jelmondattal már rendelkező támadót, vagy megakadályoz egy jóváhagyott tranzakciót a feloldott alkalmazásból.

<span id="first-identify-what-was-exposed" data-ginger-heading="először-azonosítsd-a-kiszivárgott-adatot" aria-hidden="true"></span>

## Először azonosítsd a kiszivárgott adatot

A cím és a helyreállító szavak kiszivárgása eltérő választ igényel. A feltáráshoz ne másold a gyanús anyagot nyilvános bejegyzésbe vagy ismeretlen „pénztárcaellenőrzőbe”.

| Kiszivárgott elem | Mit tehet lehetővé? | Első válasz |
| --- | --- | --- |
| Egy fogadási cím vagy tranzakcióazonosító | A cím vagy tranzakció megfigyelése és lehetséges kapcsolatok követése; nem ad aláírókulcsokat | Szüntesd meg a felesleges újrahasználatot és további közlést; ellenőrizd az összekapcsolt identitásokat és fizetéseket |
| Címkék, rendelési adatok vagy előzményexport | Egyébként külön tranzakciók társítása emberekhez, célokhoz vagy egyenlegekhez | Korlátozd a hozzáférést, szükség esetén őrizz privát másolatot, és módosítsd a megosztást |
| Kiterjesztett nyilvános kulcs, gyakran xpub | A származtatási hatókör címeinek követése, esetleg jövőbelieké is; önmagában rendszerint nem enged költést | Azonosítsd az érintett fiókot vagy ágat, és fontolj meg új pénztárcát, ha a további követés elfogadhatatlan |
| Pénztárcafájl vagy teljes alkalmazásadat-másolat | A kitettség a titkosítástól, elérhető jelszavaktól és másolt kísérőfájloktól függ; kulcsokat és privát metaadatot is tartalmazhat | Vedd komolyan a bizonytalanságot, és megbízható környezetből mérd fel az aláírókulcsok kitettségét |
| Helyreállító szavak és szükséges jelmondat, vagy használható privát kulcsok | Pénz elköltése és további kulcsok származtatása az érintett hatókörben | Megbízható eszközön készíts új pénztárcát új kulcsokkal, és mozgasd a még kezelt pénzt |
| Ellopott számítógép, feloldott alkalmazás vagy távoli vezérlési munkamenet | Állapottól függően pénztárcaadatok, aláírási műveletek és más fiókok elérése | Szüntesd meg az illetéktelen hozzáférést, és megbízható eszközről mérd fel és védd a megmaradt pénzt |

A kiterjesztett nyilvános kulcs nem feltétlenül mutatja egy eszköz minden fiókját; a származtatási hatóköre számít. Egy kiszivárgott nyilvános ág új fogadási címének létrehozása azonban általában nem gátolja az ág további követését. [A BIP32 írja le e nyilvánoskulcs-származtatási határokat](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).

Ha csak a helyreállító szavak szivárogtak ki, és külön jelmondatot használtál, a kockázat attól is függ, hogy titokban maradt-e, és milyen nehéz kitalálni. Ne feltételezd, hogy egy ismeretlen vagy gyenge jelmondat korlátlan ideig biztonságossá teszi a kiszivárgott mentést. Hiányos bizonyíték mellett, ha a kiszivárgás költést engedhet, az aláírókulcs-kiszivárgás válaszát használd.

<span id="respond-to-exposed-signing-keys" data-ginger-heading="válasz-kiszivárgott-aláírókulcsokra" aria-hidden="true"></span>

## Válasz kiszivárgott aláírókulcsokra

A számítógép jelszavának módosítása, 2FA kikapcsolása vagy Ginger újratelepítése nem vonja vissza a másolt Bitcoin-kulcsokat. A pénztárca átnevezése is változatlanul hagyja őket. Nincs Bitcoin-ügyfélszolgálati eljárás, amely érvénytelenít egy másolt helyreállítószó-készletet.

1. Olyan eszközt használj, amelyben okod van megbízni. Ha az eredeti gép feltörhető volt, ne ott hozd létre a pótpénztárcát.
2. Hozz létre pénztárcát új helyreállítási adatokkal, és védd a mentését. Ne állítsd helyre a kiszivárgott szavakat, és ne nevezd az eredményt új biztonsági határnak.
3. Szerezz és ellenőrizz fogadási címet. Hardvernél az aláíróeszközön ellenőrizd; új szavait soha ne írd a gyanús gépbe.
4. Gondos cél- és díjellenőrzéssel utald át a még kezelt pénzt. Azonos kulcsú támadó versenyezhet veled; a védelem előtt ne iktass be választható CoinJoin-várakozást.
5. Ellenőrizd az eredményt a megbízható pénztárcában és a visszaigazolást. Cseréld le az ismétlődő befizetési utasításokat és régi nyilvános fogadási adatokat, hogy a jövőbeli fizetések ne a feltört kulcsokra érkezzenek.

A pénz mozgatása megfigyelhető blokkláncos kapcsolatot teremthet. Kulcskompromittáláskor a pénz feletti rendelkezés megőrzése az első; az adatvédelmet az azonnali hozzáférési probléma rendezése után lehet újra mérlegelni. Az új cél nem garantálja az átutalás összekapcsolhatatlanságát.

Vizsgálatkor a szükséges nyilvántartást bizalmasan őrizd. Soha ne adj állítólagos ügyfélszolgálatosnak helyreállító szavakat, jelmondatot, korlátlan pénztárcafájl-másolatot vagy hozzáférést az új eszközhöz. Nem kell weboldalon „hitelesíteni” az új helyreállító szavakat.

<span id="respond-to-a-privacy-only-disclosure" data-ginger-heading="válasz-csak-adatvédelmi-kiszivárgásra" aria-hidden="true"></span>

## Válasz csak adatvédelmi kiszivárgásra

Kiszivárgott címnél döntsd el, elfogadható-e a további használat. Jövőbeli fizetéseket új címeken fogadhatsz, és kerülheted extra tranzakcióadatok közlését, de a megfigyelő megtartja a már tanultakat. Nem kell automatikusan minden UTXO-t mozgatni pusztán egy cím nyilvánossá válása miatt.

Kiszivárgott xpubnál először állapítsd meg az érintett fiókot. További használata a jövőbeli tevékenységet is felfedheti. Független kulcsú új pénztárca más címtartományt hoz létre, bár közvetlen átutalás láthatóan kapcsolhatja hozzá a régi pénzt. A megfigyelő és ismerete alapján tervezd a váltást és későbbi költést. Az alkalmazás újratelepítése vagy azonos fiók máshová importálása nem szünteti meg a fiók kitettségét.

Kiszivárgott nyilvántartásnál korlátozd a további elérést, és mérd fel az adatok együttes jelentését. Egy tranzakcióazonosító ügyfélnévvel párosítva többet árul el, mint bármelyik külön. A probléma bemutatásához ne tedd közzé a teljes kiszivárgott anyagot.

<span id="keep-privacy-separate-from-key-protection" data-ginger-heading="különítsd-el-az-adatvédelmet-a-kulcsvédelemtől" aria-hidden="true"></span>

## Különítsd el az adatvédelmet a kulcsvédelemtől

A tranzakciót ismerő megfigyelőnek nem feltétlenül vannak költési kulcsai. Fordítva, egy kulcsokkal rendelkező tolvaj nehezen elemezhető előzményű pénzt is elkölthet. A második problémához használj helyreállításvédelmet és eszközellenőrzést, az elsőhöz címhasználati gyakorlatot, Tort, UTXO-kiválasztást és átgondolt CoinJoint.

Pénztárca hozzáadása, hardverváltás, 2FA-bekapcsolás vagy mentésmozgatás után nézd át a rutint. A változott részeket ellenőrizd ahelyett, hogy szükségtelen teljes helyreállítási gyakorlatért minden titkot ismételten elővennél.
