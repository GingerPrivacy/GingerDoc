---
doc_id: "learn-coinjoin.explained"
title: "¿Qué es CoinJoin? Una explicación sencilla"
description: "Aprende con palabras sencillas cómo una transacción compartida de Bitcoin puede ayudar a la privacidad, qué cuesta y qué no puede ocultar."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son una continuación opcional.

CoinJoin reúne la actividad de Bitcoin de varias personas en una transacción compartida. Esto puede dificultar que alguien que lea el historial público de transacciones distinga qué monedas resultantes pertenecen a cada persona.

Imagina que varias personas aportan a una transacción compartida y reciben nuevas partes de bitcoin. El público puede ver los importes que se mueven. Lo que puede resultar menos claro es qué dinero de cada persona se convirtió en qué parte. Es solo una ilustración: las rondas reales tienen importes diferentes y detalles más complejos.

<span id="do-i-hand-my-bitcoin-to-someone-else" data-ginger-heading="entrego-mi-bitcoin-a-otra-persona" aria-hidden="true"></span>

## ¿Entrego mi bitcoin a otra persona?

El monedero de Ginger conserva la información utilizada para autorizar el gasto y comprueba la transacción propuesta antes de firmar. No depositas primero en un saldo controlado por un servicio de mezcla.

Sigues necesitando una instalación de confianza, un ordenador protegido y una copia de recuperación. El servicio que organiza una ronda también necesita estar disponible. Mantener el control de las claves no significa que desaparezcan todos los demás problemas.

<span id="why-might-i-use-it" data-ginger-heading="por-qué-podría-usarlo" aria-hidden="true"></span>

## ¿Por qué podría usarlo?

Quizá quieras que una persona a la que pagas conozca menos de tus otros pagos. O quizá quieras que los gastos futuros estén menos directamente conectados con una dirección que publicaste anteriormente.

CoinJoin puede ayudar con esos vínculos. No puede borrar el registro de retirada de un exchange ni hacer que un comerciante olvide quién hizo un pedido. La cadena de bloques sigue siendo pública, y un pago posterior puede revelar una conexión nueva.

<span id="what-will-it-cost" data-ginger-heading="qué-costará" aria-hidden="true"></span>

## ¿Qué costará?

Una ronda completada paga comisiones de minería de Bitcoin y también puede cobrar una comisión del coordinador. Una exención de la comisión del coordinador no elimina las comisiones de minería. Varias rondas pueden implicar varios costes.

No hay un tiempo fijo de finalización. Ginger puede esperar confirmaciones, comisiones aceptables u otros participantes. Lee el estado y revisa el resultado antes de dejar participaciones repetidas sin supervisión.

<span id="do-i-need-it-before-my-first-payment" data-ginger-heading="lo-necesito-antes-de-mi-primer-pago" aria-hidden="true"></span>

## ¿Lo necesito antes de mi primer pago?

No. La recepción, el envío y CoinJoin son acciones independientes. Puedes aprender primero a hacer pagos normales y después decidir qué problema de privacidad quieres abordar.

Para esa decisión, lee [Cuándo es útil CoinJoin](/es/learn-coinjoin/when-to-use/). Lectura avanzada opcional: [Confianza y límites](/es/learn-coinjoin/trust-and-limits/), incluido lo que pueden aprender distintos observadores. No necesitas estudiar el protocolo para usar los controles habituales de inicio y pausa.
