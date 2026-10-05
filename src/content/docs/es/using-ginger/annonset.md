---
doc_id: "coinjoin.fees-and-progress"
title: "Comisiones de CoinJoin y progreso de privacidad"
description: "Presupuesta el coste completo de CoinJoin, distingue las exenciones de comisiones de las transacciones gratuitas e interpreta las puntuaciones de privacidad de Ginger con ejemplos."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Comprende primero los controles habituales de inicio y pausa y el hecho de que las rondas completadas tienen comisiones.

CoinJoin tiene un coste y un objetivo de privacidad. Revisa ambos antes de empezar: una exención de la comisión del coordinador no hace que una ronda sea gratuita, y un indicador de progreso no puede medir todo lo que otra persona sabe sobre ti.

<span id="coordinator-fee-versus-mining-fee" data-ginger-heading="comisión-del-coordinador-frente-a-comisión-de-minería" aria-hidden="true"></span>

## Comisión del coordinador frente a comisión de minería

Con los ajustes actuales de comisiones del coordinador de Ginger, cada entrada de 3 000 000 satoshis (0.03 BTC) o menos no paga comisión del coordinador. El umbral incluye exactamente 0.03 BTC. Una entrada por encima de ese umbral normalmente paga el 0.3% de su valor total, no solo de la parte que excede 0.03 BTC. La tasa expresada como decimal es 0.003, y las fracciones de satoshi de la comisión calculada se redondean hacia abajo.

El umbral se comprueba por separado para cada entrada, no frente al saldo total del monedero ni a la suma de las entradas que registras. Las remezclas que cumplen los requisitos también pueden estar exentas; la exención anunciada por Ginger incluye el gasto directo de fondos procedentes de CoinJoin a través de una transacción. Estas exenciones adicionales dependen de la ronda ofrecida y de la admisibilidad de la entrada. Vuelve a consultar la [explicación actual de comisiones de Ginger](https://gingerwallet.io/) antes de participar.

Para las entradas sin otra exención de la comisión del coordinador:

| Valor de la entrada | Valor en BTC | Comisión del coordinador |
| --- | --- | --- |
| 2 999 999 satoshis | 0.02999999 BTC | 0 satoshis |
| 3 000 000 satoshis | 0.03 BTC | 0 satoshis |
| 3 000 001 satoshis | 0.03000001 BTC | 9 000 satoshis |
| 4 000 000 satoshis | 0.04 BTC | 12 000 satoshis |

Por ejemplo, la entrada de 0.04 BTC paga 0.00012 BTC (12 000 satoshis), no el 0.3% de únicamente los 0.01 BTC que exceden el umbral. Las comisiones de minería son adicionales, incluso para las entradas cuya comisión del coordinador sea cero. Estos ejemplos explican el cálculo configurado, no una cotización para una ronda futura.

Las comisiones de minería compensan a los mineros por el espacio ocupado en la transacción. Dependen de la tasa de comisión y de las entradas y salidas de la transacción. Gastar una moneda de poco valor puede costar un porcentaje elevado de su valor. Cada CoinJoin repetido puede generar nuevas comisiones de minería aunque cumpla los requisitos para una exención de la comisión del coordinador.

No dividas monedas únicamente para buscar una exención sin comprender las transacciones adicionales, las comisiones y los vínculos públicos que esto crea.

<span id="account-for-the-complete-cost" data-ginger-heading="contabiliza-el-coste-completo" aria-hidden="true"></span>

## Contabiliza el coste completo

El importe que gastas puede incluir más que el porcentaje anunciado del coordinador. Un CoinJoin también necesita espacio de transacción, y los importes de sus salidas pueden dejar un pequeño remanente después de que el cliente distribuya el valor disponible. Ese remanente puede contribuir a los ingresos del coordinador o a la comisión de minería de la transacción; no es necesariamente un concepto de comisión independiente mostrado en el monedero.

Para un CoinJoin completado, compara el valor total de tus entradas con el valor total de todas las salidas que te pertenezcan de esa transacción. Incluye las salidas enviadas a un monedero de destino diferente. No restes todas las salidas de la transacción compartida únicamente de tus entradas: algunas de esas salidas pertenecen a otros participantes.

El siguiente ejemplo ilustra la contabilidad; no predice los importes de salida de Ginger ni es una pantalla de la aplicación:

| Concepto | Satoshis |
| --- | ---: |
| Tu entrada sujeta a comisión | 5 000 000 |
| Tus salidas, sumadas entre tus dos monederos | 4 980 800 |
| Diferencia de valor | 19 200 |
| Comisión del coordinador supuesta para este ejemplo: 0.3% de la entrada | 15 000 |
| Comisiones de minería atribuidas a tu participación en este ejemplo | 3 600 |
| Diferencia restante de distribución en este ejemplo | 600 |

Aquí, 15 000 + 3 600 + 600 = 19 200 satoshis. Las últimas tres filas explican la misma diferencia; no añadas esa diferencia de nuevo como otro cargo. La comisión de minería de toda la ronda tampoco es una comisión que cada participante pague íntegramente. No debes suponer que un campo individual de comisión o una línea de registro represente todos los componentes de tu diferencia de valor.

Si las salidas fueron a un monedero de hardware, su desaparición del saldo del monedero de software es una transferencia de valor que sigues poseyendo. Espera a que ambos monederos se sincronicen antes de conciliarlo. Las transacciones sin confirmar, los pagos simultáneos y los fondos entrantes pueden hacer engañosa una simple comparación del saldo del monedero antes y después.

<span id="budget-for-the-whole-journey" data-ginger-heading="presupuesta-todo-el-recorrido" aria-hidden="true"></span>

## Presupuesta todo el recorrido

Incluye los pasos anteriores y posteriores a CoinJoin al decidir si el resultado merece su coste:

| Paso | Coste que debes considerar |
| --- | --- |
| Retirar de un exchange | Su cargo de retirada, que puede ser distinto de la comisión de minería de su transacción |
| Participar en una o varias rondas | La diferencia real de valor de cada participación completada |
| Mover fondos a otro monedero | Otra comisión de minería si haces una transferencia normal |
| Gastar las monedas resultantes más adelante | Las comisiones de las entradas y salidas de ese pago posterior |

Por ejemplo, una participación que cueste 19 200 satoshis seguida de una transferencia de 1 200 satoshis cuesta 20 400 satoshis por esos dos pasos. Un pago posterior es un gasto independiente. Tener más salidas puede ofrecerte partes más pequeñas para gastar por separado, pero gastar esas partes también consume espacio de transacción. Crear las salidas no ha pagado ya ese coste futuro.

Elige un importe que puedas permitirte utilizar para aprender y revisa el primer resultado completado antes de dejar que continúen las rondas repetidas. Mantén un presupuesto personal de costes; una preferencia de tiempo de CoinJoin o un ajuste de selección de monedas no garantiza un límite del coste total de todo el recorrido.

<span id="when-ginger-waits-or-refuses-a-round" data-ginger-heading="cuando-ginger-espera-o-rechaza-una-ronda" aria-hidden="true"></span>

## Cuando Ginger espera o rechaza una ronda

El cliente comprueba las condiciones propuestas antes de participar. Puede mostrar **Mining fee rate was too high**, **Coordination fee rate was too high**, **Min input count was too low** o **Server did not give remix fee exemption**. Investiga las condiciones ofrecidas en vez de subir los límites sin examinarlas.

Las preferencias de comisiones también pueden provocar **Awaiting cheaper coinjoins**. Una preferencia de tiempo significa esperar condiciones relativamente más baratas, no reservar una finalización garantizada en un día o una semana. Una ronda fallida antes de la difusión no crea por sí misma una nueva transacción confirmada de Bitcoin.

El inicio habitual de CoinJoin en esta versión también rechaza un monedero cuyos fondos ya cumplan su objetivo de privacidad, o una selección que solo contenga monedas que lo cumplan. Elegir otro monedero de destino no evita esta comprobación. Si el objetivo es mover fondos que ya son privados, considera una transferencia normal en vez de esperar que la selección de destino fuerce otra ronda.

<span id="what-the-privacy-score-can-tell-you" data-ginger-heading="qué-puede-decirte-la-puntuación-de-privacidad" aria-hidden="true"></span>

## Qué puede decirte la puntuación de privacidad

Ginger lleva un seguimiento de la información de privacidad de las monedas y la compara con el objetivo de puntuación de anonimato del monedero. La puntuación es una estimación local basada en el conocimiento que el monedero tiene de las transacciones. No es un recuento de personas verificadas independientemente ni la probabilidad de que un observador pueda identificarte.

El progreso global utiliza un cálculo de las puntuaciones hacia el objetivo ponderado por importe. El desglose de saldo por colores, que es independiente, representa importes en categorías de privacidad. Son mediciones diferentes.

Como ejemplo simplificado, supongamos que el objetivo es 5 y el monedero solo tiene estas dos monedas:

| Moneda | Valor | Puntuación local | ¿Cumple el objetivo? |
| --- | ---: | ---: | --- |
| A | 1 000 000 satoshis | 5 | Sí |
| B | 3 000 000 satoshis | 3 | No |

Solo el 25% del valor cumple el objetivo. Para el progreso global, esta versión pondera el progreso por encima de la puntuación 1: la moneda A aporta 1 000 000 × 4 y la moneda B aporta 3 000 000 × 2, frente a un máximo de 4 000 000 × 4. Eso es un 62.5%, mostrado como el valor entero 62%. Por tanto, ver porcentajes diferentes en estas dos vistas no es, por sí solo, un error.

El mensaje **Hurray! All your funds are private!** significa que el monedero considera privados los fondos según su objetivo y su contabilidad actuales. No significa que el historial haya desaparecido, que seas anónimo en internet o que un pago posterior no pueda crear un vínculo.

<span id="decide-when-you-have-achieved-your-objective" data-ginger-heading="decide-cuándo-has-alcanzado-tu-objetivo" aria-hidden="true"></span>

## Decide cuándo has alcanzado tu objetivo

Bajar un objetivo puede cambiar qué monedas cumplen los requisitos sin cambiar nada que ya esté publicado en la cadena de bloques. Subirlo puede requerir más participación y comisiones; no compra un número garantizado de personas anónimas. Recibir fondos nuevos, combinar monedas o recuperar un monedero sin sus metadatos locales también puede cambiar el resultado mostrado.

Decide el conocimiento de quién quieres limitar: un exchange, un destinatario concreto o alguien que siga una dirección divulgada. Pueden conocer importes, tiempos e identidades que Ginger no puede ver. Evalúa el próximo pago además de la puntuación actual.

Haz una pausa para revisar las rondas completadas, conciliar tus monedas y considerar cómo las gastarás. Conserva los metadatos locales al cambiar de instalación si quieres retener más de ese contexto. Consulta [Ajustes de CoinJoin](/es/coinjoin/settings/) para el objetivo, las preferencias de comisiones y los controles de destino.
