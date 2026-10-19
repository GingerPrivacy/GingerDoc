---
doc_id: "coinjoin.round-details"
title: "Rondas de CoinJoin y admisibilidad de las entradas"
description: "Comprende las fases de CoinJoin de Ginger, la admisibilidad de las entradas y los reintentos cuando las comprobaciones habituales de inicio, pausa y espera no expliquen el resultado."
lang: "es"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Comprende primero los controles habituales de inicio y pausa y el hecho de que las rondas completadas tienen comisiones.

Empieza por la [guía habitual de CoinJoin](/es/using-ginger/coinjoin/). Ginger gestiona el protocolo automáticamente; esta referencia sirve para comprender un estado o una limitación concretos.

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="por-qué-un-saldo-puede-no-ser-apto" aria-hidden="true"></span>

## Por qué un saldo puede no ser apto

No hay un tiempo de espera fijo ni un saldo mínimo universal que garantice la participación. La admisibilidad depende de los parámetros de la ronda, los importes de las monedas, el estado de confirmación, las comisiones, las exclusiones y los ajustes de tu monedero. Un saldo puede superar el valor mínimo de entrada y aun así no contener ninguna moneda apta que sea económicamente viable.

<span id="what-happens-during-a-round" data-ginger-heading="qué-ocurre-durante-una-ronda" aria-hidden="true"></span>

## Qué ocurre durante una ronda

| Fase | Qué espera tu monedero |
| --- | --- |
| Registro de entradas | Se proponen monedas aptas para la transacción compartida. |
| Confirmación de conexión | Los participantes registrados confirman que siguen disponibles. |
| Registro de salidas | Los participantes organizan mediante el protocolo las salidas que deben recibir. |
| Firma | Los monederos comprueban la propuesta y firman sus propias entradas. Mantén Ginger disponible durante esta fase crítica. |
| Ronda de atribución de fallos, cuando sea necesaria | Un reintento utiliza participantes aptos de la transacción anterior y aplica comprobaciones adicionales de coherencia. |
| Difusión | La transacción completada se envía a los nodos de Bitcoin y después espera la confirmación. |

La aplicación gestiona estas fases; no necesitas intercambiar claves ni coordinarte manualmente con desconocidos. La ronda y la selección de monedas determinan el número de entradas aceptadas y salidas resultantes. No hay un número fijo de entradas o salidas que debas esperar en todos los monederos, y el saldo total de un monedero no garantiza que todo pueda participar en una ronda.

<span id="why-signing-can-stop-a-round" data-ginger-heading="por-qué-la-firma-puede-detener-una-ronda" aria-hidden="true"></span>

## Por qué la firma puede detener una ronda

Antes de completar la firma, Ginger comprueba la transacción realmente propuesta, incluido si:

- Todas las entradas que registró este monedero siguen presentes, sin duplicar ninguna de ellas.
- La transacción contiene suficientes entradas y, salvo que la configuración permita CoinJoin en solitario, incluye entradas ajenas al registro de este monedero.
- La tasa efectiva de comisión de minería está suficientemente cerca de la tasa anunciada para la ronda, admitiendo diferencias de estimación.
- Las salidas prometidas al monedero están presentes con, al menos, los importes esperados.

Los ajustes de participantes o comisiones de una ronda ofrecida no sustituyen estas comprobaciones de la propia transacción. En particular, una tasa de comisión demasiado inferior a la anunciada puede hacer fallar las comprobaciones de firma aunque el importe descontado de tu monedero pareciera aceptable. El número de entradas cuenta monedas y no demuestra que haya personas independientes; consulta [la confianza y los límites de CoinJoin](/es/learn-coinjoin/trust-and-limits/).

Si estas comprobaciones fallan, Ginger no completa todas las firmas de sus entradas. Cuando quedan entradas registradas del monedero en la propuesta, retiene la firma de una de esas entradas presentes. Esto importa porque retener una firma de una entrada omitida no detendría la transacción propuesta. Si no queda ninguna entrada del monedero, no envía firmas. Una propuesta que duplique una entrada registrada del monedero se rechaza directamente.

Por tanto, una ronda puede alcanzar la fase de firma y aun así fallar o reintentarse. Mantén Ginger disponible hasta que salga de la fase crítica y comprueba el estado resultante antes de realizar otra acción con esas monedas. No cambies límites que no comprendas solo para que continúe una ronda rechazada.

<span id="checks-on-blame-rounds" data-ginger-heading="comprobaciones-en-las-rondas-de-atribución-de-fallos" aria-hidden="true"></span>

## Comprobaciones en las rondas de atribución de fallos

Cuando una ronda se interrumpe, Ginger solo incorpora al reintento sus monedas para las que se enviaron firmas. Una ronda de atribución de fallos debe usar entradas de la transacción anterior y mantener el mismo importe máximo de entrada sugerido. Ginger comprueba esta relación antes de registrar salidas, además de comprobar la fase, el número mínimo de entradas y los límites de comisiones de la ronda de atribución de fallos.

Estas comprobaciones limitan lo que puede cambiar durante un reintento. No garantizan que la ronda se complete, no determinan quién controla las otras entradas ni convierten una ronda fallida en una prueba de ataque.

<span id="inspect-a-completed-round" data-ginger-heading="inspeccionar-una-ronda-completada" aria-hidden="true"></span>

## Inspeccionar una ronda completada

Despliega una entrada agrupada de CoinJoin en el historial y abre los detalles de una ronda individual. Elige **View transaction** para inspeccionar sus entradas y salidas en el visor de transacciones, cuya ventana se puede redimensionar. Muestra la pertenencia, las etiquetas y las puntuaciones de anonimato conocidas cuando están disponibles; los valores desconocidos no determinan a quién pertenecen las monedas de otro participante. Consulta [la guía del visor de transacciones](/es/payments/coin-control-history/#inspect-inputs-and-outputs) para conocer los detalles y las acciones de copia disponibles.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="monedas-privadas-y-otro-monedero-de-destino" aria-hidden="true"></span>

## Monedas privadas y otro monedero de destino

El inicio habitual rechaza un monedero o un conjunto de candidatos disponibles cuyas monedas ya cumplan su objetivo de privacidad. Seleccionar otro monedero de destino no fuerza una ronda compuesta únicamente por monedas ya privadas. Comprueba los [ajustes de monedero de destino](/es/coinjoin/settings/) antes de confiar en una rutina de reenvío.

Para los cálculos de puntuación y la conciliación completa de valores, usa [Comisiones y progreso de privacidad](/es/using-ginger/annonset/).
