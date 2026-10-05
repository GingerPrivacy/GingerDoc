---
doc_id: "payments.fees-and-change"
title: "Comisiones de transacción, tasas personalizadas y cambio"
description: "Comprende las tasas de comisión en satoshis por byte, la introducción manual de comisiones, las salidas de cambio y las sugerencias de privacidad que modifican importes en Ginger."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> Nivel de lectura: Guía avanzada. Comprende primero la vista previa habitual de envío, el importe del destinatario y la comisión.

Para los pasos habituales de pago, empieza por [Envía bitcoin](/es/payments/send/). Esta referencia explica con más detalle los controles de comisiones y el cambio; no es necesario elegir una tasa personalizada para cada pago.

<span id="understand-the-fee" data-ginger-heading="comprende-la-comisión" aria-hidden="true"></span>

## Comprende la comisión

Una tasa de comisión se mide en satoshis por byte virtual y se muestra como **Fee Rate (sat/vByte)**. La comisión total de minería es la tasa de comisión multiplicada por el tamaño virtual de la transacción. No es un porcentaje del importe del pago. Gastar muchas monedas pequeñas puede costar más que gastar una moneda mayor del mismo valor total.

Usa el control de comisiones de la vista previa para cambiar la preferencia de confirmación deseada o introducir una **Custom Fee Rate**. Un tiempo estimado no es una garantía: las nuevas transacciones compiten por espacio y los bloques llegan a intervalos irregulares. El control de introducción manual de la versión publicada rechaza tasas inferiores a 1 sat/vByte; la política de los nodos puede exigir más que el mínimo del editor.

Cuando las estimaciones automáticas no estén disponibles, Ginger todavía puede ofrecer la introducción manual de comisiones. Si no sabes qué tasa es adecuada, es preferible esperar a que se recuperen las estimaciones que adivinar un número muy alto. Las comisiones de transacciones normales y las del coordinador de CoinJoin son independientes.

<span id="change-is-still-your-bitcoin" data-ginger-heading="el-cambio-sigue-siendo-tu-bitcoin" aria-hidden="true"></span>

## El cambio sigue siendo tu bitcoin

Bitcoin gasta monedas completas, también llamadas UTXOs. Si las entradas seleccionadas superan el importe del destinatario más la comisión, el exceso normalmente vuelve a una dirección nueva de cambio de tu cartera. Por ejemplo, una entrada de 100 000 satoshis que financie un pago de 60 000 satoshis con una comisión de 1 000 satoshis deja 39 000 satoshis de cambio.

La dirección de cambio puede ser diferente de las direcciones de recepción que ya hayas mostrado a alguien. No necesitas copiarla ni devolver el cambio manualmente. El análisis de transacciones puede vincular el cambio al pago, lo que importa si después lo combinas con otros fondos.

Las sugerencias de privacidad de Ginger pueden ofrecer un pago sin cambio ajustando la selección de monedas o el importe del destinatario. Revisa el resultado cuidadosamente. No debes pagar menos de una factura de importe fijo únicamente para eliminar el cambio.

Para seleccionar monedas concretas o gestionar una transacción pendiente, consulta [Control de monedas e historial](/es/payments/coin-control-history/).
