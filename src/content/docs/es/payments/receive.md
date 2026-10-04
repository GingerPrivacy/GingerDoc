---
doc_id: "payments.receive"
title: "Recibe bitcoin y gestiona direcciones"
description: "Genera una dirección de recepción Ginger, elige SegWit o Taproot cuando sea compatible, etiqueta los pagos y comprueba las confirmaciones."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son lecturas posteriores opcionales.

Utiliza una dirección de recepción nueva para cada pago. La dirección indica al pagador dónde enviar bitcoin; no revela tus palabras de recuperación. Sin embargo, reutilizarla permite a observadores relacionar pagos al mismo destino.

<span id="request-a-payment" data-ginger-heading="solicita-un-pago" aria-hidden="true"></span>

## Solicita un pago

1. Abre la cartera prevista y espera a que termine la recuperación o sincronización.
2. Elige **Receive**. Añade una etiqueta que describa el pagador o propósito, como «Factura de junio». Usa detalle suficiente para reconocerla después sin registrar datos personales innecesarios.
3. Elige **Generate**. La acción normal crea una dirección SegWit nativa. Si la cartera admite Taproot, la acción alternativa ofrece **Taproot**, mostrado como **TR**; utilízalo solo cuando el pagador admita ese tipo.
4. Copia la dirección o comparte el QR de recepción. Para una cartera de hardware, utiliza **Show on the hardware wallet** y compara la dirección completa en el dispositivo antes de entregarla al pagador.
5. Comprueba el destino después de pegarlo en otra aplicación. Un malware del portapapeles puede sustituirlo aunque el QR o pantalla original fueran correctos.

En mainnet Bitcoin, las direcciones SegWit nativas normalmente empiezan por `bc1q`; las Taproot por `bc1p`. Las de redes de prueba son diferentes. Si un servicio rechaza una dirección Bitcoin admitida, comprueba con él su compatibilidad de red y tipo en vez de modificar caracteres.

<span id="labels-and-unused-addresses" data-ginger-heading="etiquetas-y-direcciones-sin-usar" aria-hidden="true"></span>

## Etiquetas y direcciones sin usar

**Addresses Awaiting Payment** muestra direcciones que todavía no han recibido un pago y siguen ofreciéndose en esa lista. Puedes inspeccionar sus QR, copiarlas, cambiar etiquetas u ocultarlas con las acciones disponibles.

Ocultar una dirección no la revoca en Bitcoin. Un pago a una dirección previamente generada sigue perteneciendo a la cartera si controlas sus claves. Las utilizadas pueden desaparecer de la lista por diseño; esto fomenta nuevas direcciones, no indica que se hayan eliminado las claves antiguas.

Las etiquetas son metadatos locales, no mensajes escritos en la cadena ni enviados automáticamente al pagador. Aun así pueden exponerse mediante respaldos, registros, exportaciones o pantalla compartida. Mantén un respaldo de archivos si te importan: las palabras de recuperación no pueden reconstruirlas.

<span id="know-when-you-have-been-paid" data-ginger-heading="identifica-cuándo-te-han-pagado" aria-hidden="true"></span>

## Identifica cuándo te han pagado

Que el remitente difunda una transacción, que Ginger la vea sin confirmar y que un minero la incluya en un bloque son hechos distintos. Comprueba historial y detalles. Un pago sin confirmar puede sustituirse o no confirmarse; decide cuánta garantía de confirmación requiere la situación antes de entregar algo irreversible a cambio.

Ginger puede recibir con la aplicación cerrada. El pagador necesita una dirección válida, no una cartera conectada. Al reabrirla, la sincronización encuentra la transacción. Un CoinJoin o pago enviado a otra cartera cargada solo aparece en la que controla sus salidas.

<span id="if-the-payment-is-missing" data-ginger-heading="si-falta-el-pago" aria-hidden="true"></span>

## Si falta el pago

Pide al remitente el ID de transacción y verifica el destino por tu canal de comunicación existente. Comprueba cartera seleccionada, mainnet frente a testnet, sincronización y si realmente difundió una transacción. Evita pegar cada dirección en un explorador público: aprende qué consultas.

Si restauraste mediante palabras y generaste muchas direcciones sin usar en el pasado, puede importar el límite de direcciones sin uso de recuperación. Una solicitud nueva de recepción no repara por sí sola un escaneo histórico incompleto. Conserva respaldos antes de volver a escanear o recuperar.
