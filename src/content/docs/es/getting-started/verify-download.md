---
doc_id: "getting-started.verify-download"
title: "Verifica una descarga de Ginger Wallet"
description: "Comprueba la firma de una versión de Ginger Wallet y la huella de la clave de firma antes de instalar la aplicación."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
sidebar:
  label: Verifica una descarga
  badge:
    text: Avanzado
    variant: caution
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Utiliza [la guía de instalación](/es/getting-started/install/) para identificar la descarga oficial y el paquete para tu ordenador.

Una firma separada ayuda a establecer que el archivo descargado fue firmado por el titular de una clave concreta y no cambió desde la firma. No demuestra que el software esté libre de errores. También debes establecer que la clave de firma es aquella en la que pretendías confiar.

<span id="collect-the-matching-files" data-ginger-heading="reúne-los-archivos-correspondientes" aria-hidden="true"></span>

## Reúne los archivos correspondientes

Desde [la versión v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), descarga el instalador o archivo y el archivo del mismo nombre seguido de `.asc`. Guárdalos en una carpeta. Por ejemplo, la pareja de Windows es `Ginger-2.0.26.msi` y `Ginger-2.0.26.msi.asc`. Una firma para un DMG, ZIP u otra versión no verifica ese MSI.

Obtén la clave pública de firma mediante el enlace PGP de [la web oficial](https://gingerwallet.io/). Guárdala como `PGP.txt`. Utiliza una aplicación OpenPGP de confianza, como GnuPG, para inspeccionarla e importarla. Si no tienes GnuPG, obténlo de [su página oficial de descargas](https://gnupg.org/download/).

<span id="check-the-fingerprint" data-ginger-heading="comprueba-la-huella" aria-hidden="true"></span>

## Comprueba la huella

La huella publicada por Ginger para esta versión es:

```text
FA0B 017A 3E75 CE65 CBF7 838F A8FF 3767 EDF5 DCE9
```

En una terminal abierta en la carpeta de descargas, inspecciona la clave antes de importarla:

```sh
gpg --show-keys --with-fingerprint PGP.txt
gpg --import PGP.txt
```

Compara la huella completa, no solo un ID corto de clave o el nombre mostrado. Siempre que sea posible, corrobórala mediante una copia de confianza anterior u otro canal establecido de Ginger. Obtener clave y firma de la misma fuente comprometida no establece por sí solo la autenticidad. Si Ginger anuncia un cambio de clave, verifica el anuncio antes de confiar en la huella nueva.

<span id="verify-the-actual-download" data-ginger-heading="verifica-la-descarga-real" aria-hidden="true"></span>

## Verifica la descarga real

Para el instalador Windows, ejecuta:

```sh
gpg --verify Ginger-2.0.26.msi.asc Ginger-2.0.26.msi
```

Para otra plataforma, sustituye ambos nombres exactos. Una verificación satisfactoria debe identificar una firma correcta de la clave prevista. GnuPG también puede advertir que la clave no está certificada por una firma de confianza: esto se refiere a cómo autenticaste la clave y no debe confundirse con una firma de archivo incorrecta.

Si el resultado indica **BAD signature**, falta la clave, la huella difiere o no puede completarse la verificación, no abras la descarga todavía. Comprueba la pareja de nombres, repite la descarga y busca ayuda mediante los enlaces del proyecto oficial si persiste el problema. No marques una clave desconocida como fiable solo para eliminar una advertencia.

<span id="checksums-and-platform-signatures" data-ginger-heading="sumas-de-verificación-y-firmas-de-plataforma" aria-hidden="true"></span>

## Sumas de verificación y firmas de plataforma

Comparar una suma de verificación puede detectar un error de descarga. Una suma obtenida de una página no fiable no autentica software, porque un atacante puede sustituir tanto la descarga como su suma. La versión también proporciona material de sumas de verificación; el procedimiento de firma separada anterior basta para verificar un paquete seleccionado.

La firma de código Windows y la firma o notarización macOS aportan comprobaciones adicionales de plataforma. Complementan la verificación de la versión descargada; no sustituyen la protección de tus palabras de recuperación ni la revisión de transacciones.

Tras verificar correctamente, vuelve a [Instala la aplicación](/es/getting-started/install/#install-the-application).
