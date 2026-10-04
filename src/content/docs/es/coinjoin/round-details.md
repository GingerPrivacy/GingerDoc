---
doc_id: "coinjoin.round-details"
title: "Rondas de CoinJoin y admisibilidad de las entradas"
description: "Comprende las fases de CoinJoin de Ginger, la admisibilidad de las entradas y los reintentos cuando las comprobaciones habituales de inicio, pausa y espera no expliquen el resultado."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Comprende primero los controles habituales de inicio y pausa y el hecho de que las rondas completadas tienen comisiones.

Empieza por la [guía habitual de CoinJoin](/es/using-ginger/coinjoin/). Ginger gestiona el protocolo automáticamente; esta referencia sirve para comprender un estado o una limitación concretos.

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="por-qué-un-saldo-puede-no-ser-apto" aria-hidden="true"></span>

## Por qué un saldo puede no ser apto

No hay un tiempo de espera fijo ni un saldo mínimo universal que garantice la participación. La admisibilidad depende de los parámetros de la ronda, los tamaños de las monedas, el estado de confirmación, las comisiones, las exclusiones y los ajustes de tu cartera. Un saldo puede superar el valor mínimo de entrada y aun así no contener ninguna moneda apta que sea económicamente viable.

<span id="what-happens-during-a-round" data-ginger-heading="qué-ocurre-durante-una-ronda" aria-hidden="true"></span>

## Qué ocurre durante una ronda

| Fase | Qué espera tu cartera |
| --- | --- |
| Registro de entradas | Se proponen monedas aptas para la transacción compartida. |
| Confirmación de conexión | Los participantes registrados confirman que siguen disponibles. |
| Registro de salidas | Los participantes organizan mediante el protocolo las salidas que deben recibir. |
| Firma | Las carteras comprueban la propuesta y firman sus propias entradas. Mantén Ginger disponible durante esta fase crítica. |
| Ronda de atribución de fallos, cuando sea necesaria | Un reintento excluye a los participantes que no completaron los pasos requeridos. |
| Difusión | La transacción completada se envía a los nodos de Bitcoin y después espera la confirmación. |

La aplicación gestiona estas fases; no necesitas intercambiar claves ni coordinarte manualmente con desconocidos. La ronda y la selección de monedas determinan el número de entradas aceptadas y salidas resultantes. No hay un número fijo de entradas o salidas que debas esperar en todas las carteras, y el saldo total de una cartera no garantiza que todo pueda participar en una ronda.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="monedas-privadas-y-otra-cartera-de-destino" aria-hidden="true"></span>

## Monedas privadas y otra cartera de destino

El inicio habitual de v2.0.26 rechaza una cartera o un conjunto de candidatos disponibles cuyas monedas ya cumplan su objetivo de privacidad. Seleccionar otra cartera de destino no fuerza una ronda exclusivamente privada. Comprueba los [ajustes de cartera de destino](/es/coinjoin/settings/) antes de confiar en una rutina de reenvío.

Para los cálculos de puntuación y la conciliación completa de valores, usa [Comisiones y progreso de privacidad](/es/using-ginger/annonset/).
