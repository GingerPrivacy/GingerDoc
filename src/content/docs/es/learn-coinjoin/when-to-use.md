---
doc_id: "learn-coinjoin.when-to-use"
title: "¿Cuándo tiene sentido CoinJoin?"
description: "Evalúa si CoinJoin responde a tu preocupación de privacidad de Bitcoin, qué cuesta y cómo planificar el gasto posterior."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

CoinJoin es útil cuando reducir la información sobre vínculos entre transacciones responde a una preocupación que realmente tienes. Resulta menos útil cuando el problema principal es una frase de recuperación robada, un ordenador comprometido o información que estás a punto de revelar directamente a un proveedor.

<span id="start-with-a-concrete-objective" data-ginger-heading="empieza-por-un-objetivo-concreto" aria-hidden="true"></span>

## Empieza por un objetivo concreto

Por ejemplo, quizá quieras que un futuro destinatario de un pago tenga menos visibilidad directa del historial de una recepción identificada anteriormente. Anota quién ya conoce esa recepción y qué revelará tu próximo pago. CoinJoin puede cambiar el problema de vínculos entre transacciones entre ambos momentos, pero no puede deshacer la primera divulgación ni impedir la segunda.

Si tu objetivo es simplemente proteger las claves mientras conservas bitcoin, una copia recuperable y un procedimiento adecuado de monedero de hardware abordan ese problema más directamente. Si te preocupa una dirección pública de recepción reutilizada para todas las facturas, deja primero de reutilizarla; usar CoinJoin después no hace privadas las recepciones antiguas.

<span id="compare-the-tradeoffs" data-ginger-heading="compara-las-ventajas-e-inconvenientes" aria-hidden="true"></span>

## Compara las ventajas e inconvenientes

| Situación | Decisión que considerar |
| --- | --- |
| Muchas monedas pequeñas durante unas comisiones de minería altas | La participación puede consumir un importe relativo elevado; inspecciona las condiciones de las comisiones y considera esperar |
| Un pago vence inmediatamente | La finalización de CoinJoin no está programada; evita depender de una ronda para cumplir un plazo exacto |
| Gastos a largo plazo desde una fuente identificada | Considera cómo funcionan conjuntamente CoinJoin, las direcciones de recepción separadas y la selección posterior de monedas |
| Un proveedor requiere identidad y prueba de dirección | Esa divulgación directa permanece; comprueba si CoinJoin cambia la información que te importa |
| El destino es un monedero de hardware | Verifica la cuenta receptora y el procedimiento de destino publicado; no importes las palabras de recuperación del dispositivo en un monedero conectado |
| No puedes mantener disponible el ordenador | La participación automática necesita conectividad y capacidad de firma desbloqueada durante la ronda |

Son ventajas e inconvenientes que sopesar, no una recomendación de mover un importe concreto ni una garantía de resultado financiero. Usa un importe pequeño y manejable para aprender el procedimiento y conciliar las comisiones antes de aumentar la exposición.

<span id="set-a-cost-and-attention-budget" data-ginger-heading="establece-un-presupuesto-de-coste-y-atención" aria-hidden="true"></span>

## Establece un presupuesto de coste y atención

Revisa los dos componentes de las comisiones y cómo funcionan las rondas repetidas. Decide cuánto estás dispuesto a gastar por la mejora de privacidad prevista y con qué frecuencia inspeccionarás el resultado. Un objetivo local de anonimato es un parámetro de control, no una cotización de comisiones ni una garantía medible sobre un adversario.

El umbral de parada de Ginger puede evitar algunas participaciones automáticas antieconómicas. Su preferencia temporal y su umbral de comisiones pueden reducir la participación en condiciones caras. Estos ajustes no son un límite universal del importe total que podrías gastar en muchas rondas.

<span id="plan-the-next-spend" data-ginger-heading="planifica-el-próximo-gasto" aria-hidden="true"></span>

## Planifica el próximo gasto

Solicita un destino nuevo, conserva etiquetas locales útiles y revisa las entradas seleccionadas. Evita consolidar por reflejo todas las salidas resultantes simplemente para que el monedero parezca más sencillo. Si un comerciante o exchange conocerá tu identidad, comprende esa divulgación antes de pagar.

No consideres permanente la aceptación anunciada por otro proveedor. Un servicio puede cambiar su política o hacer preguntas sobre una transferencia. Ginger no puede certificar la aceptación futura de una transacción ni garantizar que CoinJoin elimine todas las asociaciones históricas.

<span id="try-the-released-workflow-deliberately" data-ginger-heading="prueba-deliberadamente-el-procedimiento-publicado" aria-hidden="true"></span>

## Prueba deliberadamente el procedimiento publicado

Cuando estén claros el objetivo, la copia de seguridad y los costes, abre un monedero de software sincronizado, revisa **Coinjoin Settings** y decide entre el inicio manual y **Automatically start coinjoin**. Observa el estado y examina una ronda completada en el historial. Pausa si el comportamiento o el cambio de saldo difieren de lo que esperabas e investiga antes de continuar.

Para los supuestos de esa decisión, lee [En qué confías cuando usas CoinJoin](/es/learn-coinjoin/trust-and-limits/). Distingue el control de las claves, la privacidad de las transacciones, la disponibilidad del servicio y la confianza en el software que ejecutas.
