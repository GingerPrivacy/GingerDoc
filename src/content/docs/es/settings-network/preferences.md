---
doc_id: "settings-network.preferences"
title: "Apariencia, idioma y ajustes cotidianos"
description: "Cambia el idioma, los formatos de visualización, el comportamiento en segundo plano, las preferencias de navegador y el modo discreto de Ginger sin confundirlos con la seguridad del monedero."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

Usa **Settings** para las preferencias de toda la aplicación y **Wallet Settings** para el nombre, la configuración de CoinJoin y las herramientas del monedero seleccionado. La búsqueda de la aplicación puede encontrar acciones como **Data Folder**, **Wallet Info** y **Discreet Mode** sin depender de la posición de un icono.

<span id="language-and-amounts" data-ginger-heading="idioma-e-importes" aria-hidden="true"></span>

## Idioma e importes

En **Settings** → **Appearance**, **Language** selecciona el idioma de la interfaz. La versión 2.0.26 ofrece inglés, español, húngaro, francés, chino, alemán, portugués, turco e italiano. Sigue cualquier indicación de reinicio. Este manual en inglés usa las etiquetas inglesas publicadas; las etiquetas traducidas pueden diferir.

**Dark mode** cambia la apariencia. **Exchange currency** cambia la visualización de referencia en moneda fiduciaria, mientras que los separadores decimales y de grupos, la agrupación de fracciones de Bitcoin y **Fee display unit** controlan la presentación numérica. Estos ajustes no cambian el importe subyacente en BTC ni la comisión de transacción de la red. Lee los ejemplos de los ajustes antes de introducir un importe con un formato desconocido.

## Discreet Mode

Usa **Discreet Mode** cuando alguien pueda ver tu pantalla. Oculta los campos sensibles de visualización compatibles para reducir la observación casual. Comprueba qué se oculta realmente antes de compartir una pantalla: la función no garantiza que todos los diálogos, direcciones o aplicaciones externas estén ocultos.

Discreet Mode no cifra archivos, bloquea el monedero, detiene la firma ni cambia la privacidad de la cadena de bloques. Una persona con acceso al ordenador todavía puede interactuar con la aplicación. Usa el bloqueo de pantalla de tu sistema operativo cuando te alejes.

<span id="general-settings" data-ginger-heading="ajustes-generales" aria-hidden="true"></span>

## Ajustes generales

| Ajuste | Efecto práctico |
| --- | --- |
| **Run Ginger when computer starts** | Abre Ginger con la sesión del sistema operativo. |
| **Run in background when window closed** | Permite que la aplicación siga activa después de cerrar su ventana. Por tanto, CoinJoin y la sincronización pueden continuar. |
| **Auto copy addresses** | Puede colocar automáticamente una dirección mostrada en el portapapeles. |
| **Auto paste addresses** | Puede usar el contenido del portapapeles al introducir direcciones. Revisa siempre el destino resultante. |
| **Auto download new version** | Controla la descarga de una actualización disponible; sigue por separado las indicaciones de instalación. |
| **Browser used by Ginger** | Elige el navegador usado para páginas externas; la opción personalizada muestra **Custom browser path**. |

La comodidad del portapapeles no autentica al destinatario. Otras aplicaciones pueden leer o sustituir sus datos. Nunca pongas palabras de recuperación en el portapapeles como parte de la recepción o el envío normales.

Las páginas externas usan el comportamiento de red y privacidad del navegador seleccionado. Un proveedor de compra o venta puede pedir información identificativa aunque Ginger esté usando Tor. Cambiar una preferencia de visualización o navegador no modifica los registros del proveedor.

<span id="wallet-information-and-tools" data-ginger-heading="información-y-herramientas-de-monedero" aria-hidden="true"></span>

## Información y herramientas de monedero

**Wallet Info** puede mostrar información de cuenta y de claves públicas extendidas. Una clave pública extendida no puede gastar monedas directamente, pero puede revelar muchas direcciones relacionadas. No la publiques en una solicitud pública de soporte.

En **Wallet Settings** → **General**, usa el control de nombre para cambiar el nombre del monedero. En **Tools**, **Verify Recovery Words** comprueba la copia de un monedero de software accesible, **Resync** reconstruye su vista y **Delete Wallet** elimina un monedero local mediante su proceso de confirmación. Eliminarlo no destruye el bitcoin, revoca las palabras de recuperación ni sustituye una copia de seguridad. Conserva información de recuperación funcional antes de eliminar el acceso local.
