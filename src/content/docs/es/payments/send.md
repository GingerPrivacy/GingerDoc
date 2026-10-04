---
doc_id: "payments.send"
title: "Envía bitcoin y revisa las comisiones"
description: "Prepara un pago Ginger, verifica destinatario e importe, comprende las tasas de comisión y el cambio y autoriza la transacción."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son lecturas posteriores opcionales.

Ginger no puede revertir un pago de Bitcoin confirmado. Antes de confirmar, verifica el destinatario por un canal de confianza y revisa destino completo, importe y comisión. Empieza con un pago pequeño al aprender un procedimiento nuevo.

<span id="prepare-a-payment" data-ginger-heading="prepara-un-pago" aria-hidden="true"></span>

## Prepara un pago

1. Abre la cartera con los fondos y elige **Send**. Elige **Automatic** para el procedimiento normal. Puedes aprender selección manual por separado cuando la necesites.
2. Introduce la dirección Bitcoin o URI de pago del destinatario en **To:**. Una solicitud puede incluir el importe; compruébalo tras pegar. Si **Scan QR Code** está disponible en tu plataforma, puedes utilizar la cámara y revisar el destino decodificado.
3. Introduce el importe y una etiqueta informativa del destinatario. Comprueba si se muestra en BTC o moneda fiduciaria. Una estimación fiduciaria cambia con el tipo de cambio y no es el importe que transfiere la red Bitcoin.
4. Elige **Continue** y revisa la vista previa, fondos seleccionados, sugerencias de privacidad y cambio esperado. Una sugerencia que modifica el importe solo es apropiada si satisface la solicitud del destinatario.
5. Revisa comisión y tiempo estimado de confirmación. Elige **Confirm** cuando los detalles sean correctos y completa la autorización por frase de contraseña o dispositivo de hardware.
6. Comprueba en el historial la transacción difundida. Si el resultado es incierto tras un error de red, inspecciónalo antes de empezar otro pago.

Enviar todos los fondos disponibles puede descontar la comisión del importe que recibe el destinatario. Las solicitudes de importe fijo y PayJoin tienen restricciones distintas. La vista previa permite comprobar el importe real recibido en vez de suponer que todo el saldo llegará al destino.

<span id="check-the-fee-without-custom-settings" data-ginger-heading="comprueba-la-comisión-sin-ajustes-personalizados" aria-hidden="true"></span>

## Comprueba la comisión sin ajustes personalizados

Revisa la comisión total y la preferencia estimada de confirmación en la vista previa. Una comisión paga espacio de transacción; no es simplemente un porcentaje del pago. El tiempo estimado puede cambiar y no es una garantía.

Utiliza una estimación disponible que entiendas. Si no hay estimaciones y no sabes qué elegir, espera e investiga en vez de adivinar una comisión personalizada muy alta.

<span id="the-leftover-money-is-change" data-ginger-heading="el-dinero-sobrante-es-cambio" aria-hidden="true"></span>

## El dinero sobrante es cambio

El pago puede utilizar una porción de bitcoin mayor que el importe del destinatario más comisión. El sobrante vuelve a tu cartera como cambio, a veces a una dirección desconocida para ti. Sigues controlándolo; no debes reenviar nada manualmente.

Una sugerencia de privacidad puede modificar el importe propuesto. Acéptala solo si sigue cumpliendo la solicitud del destinatario. En particular, no pagues menos de una factura fija para evitar cambio.

Referencia avanzada opcional: [tasas de comisión personalizadas y cambio](/es/using-ginger/fee/), o [control manual de monedas e historial](/es/payments/coin-control-history/).

<span id="when-a-payment-cannot-be-prepared" data-ginger-heading="cuando-no-se-puede-preparar-un-pago" aria-hidden="true"></span>

## Cuando no se puede preparar un pago

Fondos insuficientes puede significar que no queda valor gastable suficiente después de comisiones, aunque el saldo total parezca suficiente. También pueden estar sin confirmar, bloqueados en una fase crítica CoinJoin o en una cadena sin confirmar que no pueda ampliarse en ese momento.

Es normal que falte la acción de enviar durante la recuperación. Una cartera de solo observación no puede firmar por sí sola. Esta versión no admite direcciones ni facturas Lightning; solicita una dirección Bitcoin on-chain.
