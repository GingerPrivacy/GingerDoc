---
doc_id: "payments.send"
title: "Envía bitcoin y revisa las comisiones"
description: "Prepara pagos de Bitcoin individuales o por lotes, verifica cada destinatario e importe final, revisa las comisiones y el cambio y autoriza la transacción."
lang: "es"
verified_release: "v2.0.27"
reader_level: "beginner"
prev: false
next: false
---

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son lecturas posteriores opcionales.

Ginger no puede revertir un pago de Bitcoin confirmado. Antes de confirmar, verifica el destinatario por un canal de confianza y revisa destino completo, importe y comisión. Empieza con un pago pequeño al aprender un procedimiento nuevo.

<span id="prepare-a-payment" data-ginger-heading="prepara-un-pago" aria-hidden="true"></span>

## Prepara un pago

1. Abre el monedero con los fondos y elige **Send**. Elige **Automatic** para el procedimiento normal. Puedes aprender selección manual por separado cuando la necesites.
2. Introduce la dirección Bitcoin o URI de pago del destinatario en **To:**. Una solicitud puede incluir el importe; compruébalo tras pegar. Si **Scan QR Code** está disponible en tu plataforma, puedes utilizar la cámara y revisar el destino decodificado.
3. Introduce el importe y una etiqueta informativa del destinatario. Comprueba si se muestra en BTC o moneda fiduciaria. Una estimación fiduciaria cambia con el tipo de cambio y no es el importe que transfiere la red Bitcoin.
4. Elige **Continue** y revisa la vista previa, fondos seleccionados, sugerencias de privacidad y cambio esperado. Una sugerencia que modifica el importe solo es apropiada si satisface la solicitud del destinatario.
5. Revisa comisión y tiempo estimado de confirmación. Elige **Confirm** cuando los detalles sean correctos y completa la autorización por frase de contraseña o dispositivo de hardware.
6. Comprueba en el historial la transacción difundida. Si el resultado es incierto tras un error de red, inspecciónalo antes de empezar otro pago.

Enviar todos los fondos disponibles puede descontar la comisión del importe que recibe el destinatario. Las solicitudes de importe fijo y PayJoin tienen restricciones distintas. La vista previa permite comprobar el importe real recibido en vez de suponer que todo el saldo llegará al destino.

<span id="pay-several-recipients-in-one-transaction" data-ginger-heading="pagar-a-varios-destinatarios-en-una-transacción" aria-hidden="true"></span>

## Pagar a varios destinatarios en una transacción

Elige **Pay to multiple recipients** en el editor de envío para crear un pago por lotes. El primer pago conserva la dirección, el importe y las etiquetas que ya hayas introducido.

1. Introduce una dirección de Bitcoin diferente, un importe y una etiqueta de destinatario para cada pago. Usa direcciones simples en este editor; las URI de pago y Payjoin corresponden al procedimiento de un solo destinatario. Una solicitud de pago de importe fijo no puede ampliarse a un lote.
2. Elige **Add another payment** para añadir filas o **Delete** junto a un pago para eliminarlo. Si solo queda un pago, el editor vuelve al diseño de un solo destinatario y conserva los detalles de ese pago.
3. Decide quién asume la comisión de minería. Con **Subtract the transaction fee from the first payment** seleccionado, el primer destinatario recibe menos del importe introducido, mientras los demás importes permanecen iguales. Si está desmarcado, tu monedero paga la comisión además de los importes introducidos. Usar **Max** en un lote activa el descuento de comisiones; comprueba la opción antes de continuar.
4. Elige **Continue**. Revisa cada dirección numerada, etiqueta de destinatario e importe final en la vista previa, además de la comisión total. En particular, verifica que el primer destinatario siga recibiendo el importe acordado si se descuenta la comisión.
5. Vuelve atrás para corregir los pagos si hace falta. Se conservan las filas introducidas y la opción de descuento de comisiones. Revisa otra vez la vista previa reconstruida y la comisión antes de elegir **Confirm** y completar la autorización.

Todos los destinatarios de un lote comparten una transacción pública, por lo que los pagos pueden relacionarse entre sí. Tenlo en cuenta antes de combinar pagos sin relación. Las etiquetas de destinatarios siguen siendo metadatos locales del monedero; no se envían a los destinatarios ni se publican en la cadena de bloques.

<span id="check-the-fee-without-custom-settings" data-ginger-heading="comprueba-la-comisión-sin-ajustes-personalizados" aria-hidden="true"></span>

## Comprueba la comisión sin ajustes personalizados

Revisa la comisión total y la preferencia estimada de confirmación en la vista previa. Una comisión paga espacio de transacción; no es simplemente un porcentaje del pago. El tiempo estimado puede cambiar y no es una garantía.

Utiliza una estimación disponible que entiendas. Si no hay estimaciones y no sabes qué elegir, espera e investiga en vez de adivinar una comisión personalizada muy alta.

Para examinarla con más detalle antes de confirmar, elige **View transaction** en la vista previa. Se abre una ventana independiente con las entradas y salidas. Consulta [cómo inspeccionar una transacción](/es/payments/coin-control-history/#inspect-inputs-and-outputs) para conocer los detalles disponibles.

<span id="the-leftover-money-is-change" data-ginger-heading="el-dinero-sobrante-es-cambio" aria-hidden="true"></span>

## El dinero sobrante es cambio

El pago puede utilizar una porción de bitcoin mayor que el importe del destinatario más comisión. El sobrante vuelve a tu monedero como cambio, a veces a una dirección desconocida para ti. Sigues controlándolo; no necesitas reenviar nada manualmente.

Una sugerencia de privacidad puede modificar el importe propuesto. Acéptala solo si sigue cumpliendo la solicitud del destinatario. En particular, no pagues menos de una factura fija para evitar cambio.

Referencia avanzada opcional: [tasas de comisión personalizadas y cambio](/es/using-ginger/fee/), o [control manual de monedas e historial](/es/payments/coin-control-history/).

<span id="when-a-payment-cannot-be-prepared" data-ginger-heading="cuando-no-se-puede-preparar-un-pago" aria-hidden="true"></span>

## Cuando no se puede preparar un pago

Fondos insuficientes puede significar que no queda valor gastable suficiente después de comisiones, aunque el saldo total parezca suficiente. También pueden estar sin confirmar, bloqueados en una fase crítica CoinJoin o en una cadena sin confirmar que no pueda ampliarse en ese momento.

Es normal que falte la acción de enviar durante la recuperación. Un monedero solo de observación no puede firmar por sí solo. Esta versión no admite direcciones ni facturas Lightning; solicita una dirección Bitcoin on-chain.
