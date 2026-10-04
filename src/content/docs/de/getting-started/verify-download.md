---
doc_id: "getting-started.verify-download"
title: "Einen Ginger-Wallet-Download prüfen"
description: "Prüfe die Signatur einer Ginger-Wallet-Veröffentlichung und den Fingerabdruck des Signierschlüssels vor der Installation."
lang: "de"
verified_release: "v2.0.26"
reader_level: "advanced"
sidebar:
  label: Einen Download prüfen
  badge:
    text: Fortgeschritten
    variant: caution
prev: false
next: false
---

> Schwierigkeitsgrad: Fortgeschritten. Nutze die [Installationsanleitung](/de/getting-started/install/), um den offiziellen Download und das Paket für deinen Computer zu bestimmen.

Eine separate Signatur hilft festzustellen, dass deine heruntergeladene Datei vom Inhaber eines bestimmten Signierschlüssels signiert wurde und seither unverändert ist. Sie beweist nicht, dass die Software fehlerfrei ist. Du musst außerdem feststellen, ob du genau diesem Signierschlüssel vertrauen wolltest.

<span id="collect-the-matching-files" aria-hidden="true"></span>

## Die passenden Dateien beschaffen

Lade von der [Veröffentlichung v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) deinen Installer oder dein Archiv sowie die gleichnamige Datei mit zusätzlichem `.asc` herunter. Bewahre beide in einem Ordner auf. Unter Windows sind das beispielsweise `Ginger-2.0.26.msi` und `Ginger-2.0.26.msi.asc`. Eine Signatur für ein DMG, ZIP oder eine andere Version prüft diese MSI nicht.

Beziehe den öffentlichen Signierschlüssel über den PGP-Link auf der [offiziellen Website](https://gingerwallet.io/). Speichere ihn als `PGP.txt`. Verwende eine vertrauenswürdige OpenPGP-Anwendung wie GnuPG zum Prüfen und Importieren. Falls GnuPG fehlt, beziehe es von der [offiziellen GnuPG-Downloadseite](https://gnupg.org/download/).

<span id="check-the-fingerprint" aria-hidden="true"></span>

## Den Fingerabdruck prüfen

Ginger veröffentlicht für diese Version folgenden Fingerabdruck:

```text
FA0B 017A 3E75 CE65 CBF7 838F A8FF 3767 EDF5 DCE9
```

Prüfe den Schlüssel vor dem Import in einem Terminal im Downloadordner:

```sh
gpg --show-keys --with-fingerprint PGP.txt
gpg --import PGP.txt
```

Vergleiche den vollständigen Fingerabdruck, nicht nur eine kurze Schlüssel-ID oder den angezeigten Namen. Bestätige ihn nach Möglichkeit mit einer bereits vertrauenswürdigen Kopie oder einem anderen etablierten Ginger-Kanal. Schlüssel und Signatur aus derselben kompromittierten Quelle belegen allein keine Echtheit. Kündigt Ginger einen Schlüsselwechsel an, prüfe diese Mitteilung, bevor du dem neuen Fingerabdruck vertraust.

<span id="verify-the-actual-download" aria-hidden="true"></span>

## Den tatsächlichen Download prüfen

Führe für den Windows-Installer Folgendes aus:

```sh
gpg --verify Ginger-2.0.26.msi.asc Ginger-2.0.26.msi
```

Ersetze für andere Plattformen beide Dateinamen exakt. Eine erfolgreiche Prüfung sollte eine gültige Signatur des vorgesehenen Schlüssels melden. GnuPG kann zusätzlich warnen, dass der Schlüssel nicht durch eine vertrauenswürdige Signatur zertifiziert ist: Das betrifft deine Authentifizierung des Schlüssels und darf nicht mit einer ungültigen Dateisignatur verwechselt werden.

Wenn das Ergebnis **BAD signature** meldet, der Schlüssel fehlt, der Fingerabdruck abweicht oder die Prüfung nicht abgeschlossen werden kann, öffne den Download noch nicht. Prüfe das Dateinamenpaar, wiederhole den Download und suche bei anhaltenden Problemen über die offiziellen Projektlinks Hilfe. Markiere einen unbekannten Schlüssel nicht nur zum Entfernen einer Warnung als vertrauenswürdig.

<span id="checksums-and-platform-signatures" aria-hidden="true"></span>

## Prüfsummen und Plattformsignaturen

Ein Prüfsummenvergleich kann Downloadfehler erkennen. Eine Prüfsumme von einer nicht vertrauenswürdigen Seite kann Software nicht authentifizieren, weil ein Angreifer Download und Prüfsumme ersetzen kann. Die Veröffentlichung liefert auch Prüfsummendaten; das obige Verfahren mit der passenden separaten Signatur genügt zur Prüfung eines ausgewählten Pakets.

Windows-Codesignierung sowie macOS-Signierung oder Notarisierung bieten zusätzliche Plattformprüfungen. Sie ergänzen die Prüfung der heruntergeladenen Veröffentlichung; sie ersetzen weder den Schutz deiner Wiederherstellungswörter noch die Transaktionsprüfung.

Kehre nach erfolgreicher Prüfung zu [Die Anwendung installieren](/de/getting-started/install/#install-the-application) zurück.
