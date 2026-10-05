---
doc_id: "getting-started.install"
title: "Instala Ginger Wallet"
description: "Elige la descarga de escritorio adecuada de Ginger Wallet, comprueba la compatibilidad e instala la aplicación publicada."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Instala Ginger
prev:
  link: /getting-started/
  label: Empieza aquí
next:
  link: /getting-started/first-wallet/
  label: Crea tu primer monedero
---

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son lecturas posteriores opcionales.

Ginger Wallet es un monedero Bitcoin de escritorio. Tú conservas las claves de tus bitcoin y puedes utilizar CoinJoin para dificultar el rastreo de transacciones. Esta versión no ofrece monedero móvil, monedero Lightning ni compatibilidad con otras criptomonedas.

Esta guía cubre la versión 2.0.26. Obtén el software desde [el sitio oficial de Ginger](https://gingerwallet.io/) o la [versión de GitHub enlazada](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26). Un anuncio de búsqueda, un mensaje privado o una aplicación móvil de nombre similar no son fuentes de descarga fiables.

<span id="choose-a-download" data-ginger-heading="elige-una-descarga" aria-hidden="true"></span>

## Elige una descarga

| Ordenador | Sistema admitido en esta versión | Descarga |
| --- | --- | --- |
| PC Windows, x64 | Windows 10, versión 1607 o posterior; Windows 11, compilación 22000 o posterior | `Ginger-2.0.26.msi` |
| Mac con Apple silicon | macOS 12 o posterior | `Ginger-2.0.26-arm64.dmg` |
| Mac con procesador Intel | macOS 12 o posterior | `Ginger-2.0.26.dmg` |
| Ubuntu o Debian, x64 | Ubuntu 22.04 o posterior; Debian 11 o posterior | `Ginger-2.0.26.deb` |
| Otros Linux admitidos, x64 | La versión también enumera Fedora 37 o posterior | `Ginger-2.0.26.tar.gz` |

En un Mac, **About This Mac** identifica el chip o procesador. La versión también contiene archivos ZIP etiquetados `win-x64`, `linux-x64`, `macOS-x64` y `macOS-arm64`. No hay paquetes Windows ARM ni Linux ARM en esta versión. No supongas que funcionará un archivo para otro procesador.

Ginger necesita conexión a internet y almacenamiento escribible para los datos de monedero y sincronización. El nodo completo opcional necesita mucho más espacio, ancho de banda y tiempo de sincronización inicial que el uso normal. No necesitas un nodo completo, una instalación Tor separada ni herramientas de desarrollo para empezar.

<span id="install-the-application" data-ginger-heading="instala-la-aplicación" aria-hidden="true"></span>

## Instala la aplicación

1. Descarga el paquete para tu sistema desde la versión oficial. Comprueba fuente, versión y nombre del paquete, y presta atención a las comprobaciones de firma y seguridad del sistema operativo. Para una verificación PGP independiente, utiliza el archivo `.asc` correspondiente y [la guía avanzada de verificación](/es/getting-started/verify-download/) antes de abrir el paquete.
2. En Windows, abre el `.msi` y sigue el instalador. En macOS, abre el `.dmg` y copia Ginger a Applications. En Ubuntu o Debian, abre el `.deb` con el instalador de software del sistema. Para el archivo Linux, extrae el archivo completo y ejecuta la aplicación incluida; mantén juntos sus archivos acompañantes.
3. Abre Ginger. Deja tiempo para la primera conexión y sincronización. Tor está incluido y normalmente se inicia con el monedero.
4. Continúa con [Crea y abre un monedero](/es/getting-started/first-wallet/).

Un ZIP o archivo tar evita el instalador normal, pero no convierte tu monedero en desechable ni evita que deje datos en el ordenador. Los archivos de monedero se almacenan por separado de la aplicación. Conserva copias de seguridad antes de mover o eliminar cualquiera de ellos.

<span id="if-your-operating-system-displays-a-warning" data-ginger-heading="si-tu-sistema-operativo-muestra-una-advertencia" aria-hidden="true"></span>

## Si tu sistema operativo muestra una advertencia

Una versión nueva puede no tener todavía una reputación de descarga sólida. Una advertencia también puede indicar un archivo dañado o no fiable. Comprueba primero la fuente, la versión correspondiente y la firma. Si falla la verificación, detente y descarga de nuevo desde la versión oficial. No desactives el antivirus ni las comprobaciones de seguridad generales del sistema para superar una advertencia sin explicar.

Para problemas de acceso a dispositivos en Linux, consulta las instrucciones de permisos USB del fabricante de tu monedero de hardware. Instalar un monedero no requiere ejecutarlo permanentemente como administrador.

<span id="updates-and-availability" data-ginger-heading="actualizaciones-y-disponibilidad" aria-hidden="true"></span>

## Actualizaciones y disponibilidad

[La lista de versiones](https://github.com/GingerPrivacy/GingerWallet/releases) muestra las versiones publicadas y sus cambios. En **Settings** → **General**, **Auto download new version** controla la descarga de actualizaciones. Descargar una actualización es distinto de instalarla; sigue el aviso y deja que Ginger se cierre normalmente. Ten disponible tu copia de seguridad de recuperación antes de actualizar. Los archivos de aplicación pueden sustituirse sin eliminar intencionadamente los datos de monedero.

Lee los términos actuales de servicio presentados por Ginger antes de aceptarlos, incluidas restricciones de elegibilidad. Instalar la aplicación no establece la elegibilidad para utilizar todos los servicios conectados.
