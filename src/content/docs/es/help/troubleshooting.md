---
doc_id: "help.troubleshooting"
title: "Resuelve problemas de Ginger Wallet"
description: "Diagnostica saldos ausentes, problemas de conexión, estados de espera de CoinJoin, fallos de 2FA y problemas de dispositivos de hardware conservando los datos de recuperación."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

Empieza por el error exacto, la cartera seleccionada, la red y la versión de la aplicación. Conserva la información de recuperación y los archivos de cartera antes de modificar los datos. Reinstalar, borrar carpetas o crear palabras nuevas rara vez es el primer paso para un problema de conexión o visualización.

<span id="balance-recovery-and-receiving" data-ginger-heading="saldo-recuperación-y-recepción" aria-hidden="true"></span>

## Saldo, recuperación y recepción

| Síntoma | Comprueba primero | Siguiente paso |
| --- | --- | --- |
| La cartera recuperada está vacía | Las palabras originales, la frase de contraseña exacta, la red y el progreso de exploración | Compara direcciones o historial conocidos después de sincronizar; usa las comprobaciones avanzadas de recuperación solo si estas comprobaciones habituales no lo explican |
| Falta un pago entrante | La dirección correcta, el identificador de transacción del remitente y la cartera seleccionada | Comprueba la difusión y la confirmación, y después la sincronización local |
| No aparece Receive o Send | ¿Sigue activa la recuperación? ¿Es una cartera de solo observación? | Espera a que se complete la recuperación o usa el dispositivo de firma necesario |
| Una dirección antigua desapareció de la lista de recepción | ¿Recibió un pago o se ocultó? | Comprueba el historial; la visibilidad en la lista no invalida las claves |
| Solo falta un pago diminuto | El umbral de polvo y la sincronización | Compara el umbral configurado antes de suponer que se robaron los fondos |
| Las etiquetas desaparecieron después de recuperar con la semilla | ¿Se hizo una copia del archivo ATTR correspondiente? | Conserva ese archivo; las etiquetas no pueden reconstruirse a partir de la cadena de bloques |

No introduzcas palabras de recuperación en un sitio web para «resincronizar» una cartera. Usa el proceso de recuperación de la cartera instalada y verificada únicamente en un ordenador de confianza.

<span id="connection-or-synchronization" data-ginger-heading="conexión-o-sincronización" aria-hidden="true"></span>

## Conexión o sincronización

Comprueba la conectividad, el reloj del ordenador, el espacio libre y el estado de un nodo completo configurado. La primera exploración puede simplemente necesitar tiempo. Si el progreso nunca cambia, cierra Ginger normalmente y vuelve a abrirlo una vez. Anota lo que sucede en vez de reiniciar repetidamente una exploración.

**Awaiting connection** puede impedir CoinJoin y otros servicios aunque la cartera tenga un historial almacenado en caché. Considera que un saldo sin conexión puede estar incompleto. Mantén Tor activado mientras investigas. La conexión P2P de un nodo configurado y las estimaciones de comisiones mediante RPC son independientes; que una funcione no demuestra que la otra funcione.

Si usas **Wallet Settings** → **Tools** → **Resync**, conserva primero las copias de seguridad y espera otra exploración. No borres `Wallets`, `WalletBackups` ni archivos de 2FA simplemente para quitar un mensaje de progreso.

<span id="coinjoin-does-not-start" data-ginger-heading="coinjoin-no-empieza" aria-hidden="true"></span>

## CoinJoin no empieza

| Mensaje o condición | Acción probable |
| --- | --- |
| **Insufficient funds eligible for coinjoin** | Inspecciona las confirmaciones, los importes de las monedas, las comisiones y las exclusiones; el saldo total por sí solo no demuestra admisibilidad |
| **Only excluded funds are available** | Revisa **Exclude Coins** si quieres que participen algunas monedas |
| **Only immature funds are available** | Espera la madurez requerida; las salidas recién minadas tienen reglas especiales de gasto |
| **Some funds are rejected from coinjoining** | Lee el motivo correspondiente y las condiciones actuales del servicio; un rechazo no transfiere la propiedad de tus fondos |
| **Awaiting cheaper coinjoins** | Revisa las preferencias de coste y decide si esperar encaja con tu objetivo |
| **Coinjoin may be uneconomical** | Revisa el umbral de parada y los costes relativos antes de anularlo manualmente |
| **Awaiting the blame round** | Espera el reintento del protocolo; no es una instrucción para culpar a otro usuario |
| **Awaiting closure of send dialog** | Termina o cierra el proceso de envío |
| **Mining fee rate was too high** o **Coordination fee rate was too high** | Espera o investiga las condiciones ofrecidas; no subas los límites sin examinarlos |
| Una cartera de hardware como origen | La firma de CoinJoin automático requiere una cartera de software apta |

Los participantes de una ronda pueden no terminar, o una moneda puede quedar temporalmente no disponible después de una participación interrumpida. Los reintentos repetidos, las importaciones o los intentos de eludir un rechazo del coordinador no son una reparación. Usa el motivo y el estado actual para decidir si debes esperar o contactar con el soporte oficial.

<span id="payment-or-fee-problems" data-ginger-heading="problemas-de-pago-o-comisiones" aria-hidden="true"></span>

## Problemas de pago o comisiones

Cuando las estimaciones de comisiones no estén disponibles, espera, repara la conexión con el proveedor o nodo seleccionado, o usa una tasa de comisión elegida manualmente que comprendas. Asegúrate de que el importe final más las comisiones quepa en los fondos disponibles para gastar. Una cadena larga de transacciones sin confirmar puede requerir esperar confirmaciones anteriores.

Usa **Speed Up Transaction** o **Cancel Transaction** únicamente cuando Ginger lo ofrezca y después de revisar la comisión. La cancelación es un intento de sustituir un pago pendiente, no una reversión de un pago confirmado. Después de un resultado incierto de difusión, comprueba el historial antes de pagar dos veces.

<span id="2fa-and-hardware" data-ginger-heading="2fa-y-dispositivos-de-hardware" aria-hidden="true"></span>

## 2FA y dispositivos de hardware

Si se rechaza un código del autenticador, comprueba la hora del teléfono, la entrada seleccionada, la compatibilidad del autenticador con Ginger y la conectividad de Tor y del servicio. Conserva los archivos existentes de cartera y 2FA. Si no se puede restablecer el inicio habitual, las palabras de recuperación junto con la frase de contraseña original son la copia independiente de las claves; reinstalar sobre los mismos datos no recrea un autenticador perdido. Las [preguntas frecuentes avanzadas](/es/help/advanced-faq/#does-the-2fa-file-recover-the-wallet-without-the-service) explican la dependencia del archivo.

Para la detección del dispositivo, usa una sola cartera de hardware desbloqueada, un cable de datos y un puerto USB directo, con las aplicaciones que compitan por el dispositivo cerradas. Completa los pasos requeridos de aplicación de Bitcoin, PIN o frase de contraseña en el propio dispositivo. En Linux, comprueba los permisos USB del fabricante. Mantén la semilla del dispositivo fuera del ordenador.

<span id="report-a-useful-issue" data-ginger-heading="informa-de-un-problema-de-forma-útil" aria-hidden="true"></span>

## Informa de un problema de forma útil

Usa los enlaces del [repositorio oficial de Ginger](https://github.com/GingerPrivacy/GingerWallet/issues). Incluye la versión publicada, el sistema operativo y el procesador, el error exacto, el resultado esperado y los pasos más breves que lo reproduzcan sin secretos. Menciona el modelo y el firmware del dispositivo de hardware cuando sean relevantes.

La acción de búsqueda **Logs** de Ginger abre los registros de diagnóstico. Inspecciona y oculta datos antes de compartir: las rutas, direcciones, identificadores de transacción, etiquetas e información de órdenes pueden ser sensibles. Comparte un fragmento pertinente mínimo, no toda la carpeta de datos. Una incidencia pública es pública; ninguna solicitud de soporte debería requerir tus palabras de recuperación o tu frase de contraseña.
