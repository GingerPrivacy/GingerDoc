---
doc_id: "settings-network.secret-hunt"
title: "Secret Hunt a Ginger Walletben"
description: "Keresd meg a Ginger Secret Hunt-események eredményeit, szabályozd a pénztárca részvételét, és értsd meg az eseményszolgáltatásnak átadott adatokat."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nehézségi szint: Mindennapi használat. Akkor válaszd ezt az útmutatót, amikor az általa bemutatott feladatra van szükséged.

A **Secret Hunt** Ginger-funkció, amely alkalmas CoinJoin-tevékenységhez kapcsolódó eseménytitkokat jelenít meg. Elkülönül a pénztárca adatvédelmi pontszámától és a szokásos bitcoinfogadástól vagy -költéstől. Az esemény elérhetősége szolgáltatásfüggő; a funkció jelenléte nem ígér aktuális eseményt, nyereményt vagy jutalmat.

<span id="view-and-control-participation" data-ginger-heading="részvétel-megtekintése-és-szabályozása" aria-hidden="true"></span>

## Részvétel megtekintése és szabályozása

Nyisd meg egy szoftverpénztárca menüjét, és válaszd a **Secret Hunt** lehetőséget. Az ablak fában mutatja az eseményeredményeket, például felfedezett szavakat vagy mondatokat és további titkot, ha az előírt titkokat összegyűjtötték. Bontsd ki az eseményt a bejegyzésekhez.

Az **Enable/disable the use of this wallet for Secret Hunt.** vezérli az adott pénztárca részvételét. A kiadott alapértelmezés bekapcsolt. Kikapcsolása a kikapcsolt nézetben törli a kijelzett fát, és leállítja e pénztárca kiválasztását az eseményalkalmassági ellenőrzésekhez. Nem törli a CoinJoint, a blokklánctranzakciókat vagy a szolgáltatásnak már elküldött adatokat.

A menüpont nem elérhető csak megfigyelésre szolgáló pénztárcáknál. Nem hardverpénztárcás CoinJoin-funkció, és nem igényli helyreállító szavak megadását eseményweboldalon.

<span id="what-is-shared" data-ginger-heading="mi-kerül-megosztásra" aria-hidden="true"></span>

## Mi kerül megosztásra?

A kliens a Ginger szolgáltatásától kér eseményadatot. Alkalmassági ellenőrzésnél CoinJoin-tranzakcióazonosítót, kiválasztott bemenethivatkozást és kriptográfiai tulajdonosi igazolást küldhet. Az igazolás a privát kulcs elküldése nélkül bizonyítja a rendelkezést az eseménykéréshez. Ezek Tor-kapcsolat mellett is kiegészítő alkalmazásszintű adatközlések.

A Tor a hálózati kitettséget kezeli; a kérés tartalmát nem távolítja el a címzetttől. Ha nem szeretnéd e pénztárcát eseményellenőrzésekre használni, kapcsold ki a Secret Hunt-részvételét. Az eseménylista-kérések és szokásos hálózati tevékenység elkülönül e pénztárcánkénti kapcsolótól.

<span id="missing-or-incomplete-results" data-ginger-heading="hiányzó-vagy-hiányos-eredmények" aria-hidden="true"></span>

## Hiányzó vagy hiányos eredmények

Az eredmények az esemény dátumaitól, megfelelő visszaigazolt tevékenységtől, szolgáltatás-elérhetőségtől és időszakos frissítéstől függenek. Egy kör új titok felfedése nélkül is sikeresen befejeződhet. Az eredményre várás nem bizonyít hiányzó bitcoint.

Ne hozz létre extra díjas tranzakciókat arra számítva, hogy a jutalom kárpótol. Részvételi döntés előtt hitelesített forrásból olvasd el az esemény tényleges feltételeit. Hagyd figyelmen kívül a pénztárcafájl feltöltésére vagy külön „igénylési díj” kéretlen támogatási címre küldésére szóló kéréseket.
