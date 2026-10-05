---
doc_id: "learn-privacy.spending-after-coinjoin"
title: "Gastar después de CoinJoin: ejemplos prácticos"
description: "Usa ejemplos prácticos de pagos de Bitcoin para comprender la selección de monedas, el cambio, la consolidación y lo que puede hacerse visible después de CoinJoin."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Comprende primero las direcciones de recepción nuevas y la revisión habitual de los pagos.

CoinJoin cambia la incertidumbre sobre los vínculos entre entradas y salidas. La próxima transacción puede añadir información nueva. Antes de pagar, decide qué monedas podría asociar ya contigo el destinatario u otro observador y qué revelaría el pago propuesto.

Los ejemplos siguientes usan importes ficticios en satoshis. Las comisiones se eligen para facilitar los cálculos, no son cotizaciones de la red. Una moneda es una salida de transacción sin gastar, o UTXO; no es lo mismo que un monedero o una dirección de Bitcoin.

<span id="start-with-the-payment-you-need-to-make" data-ginger-heading="empieza-por-el-pago-que-necesitas-hacer" aria-hidden="true"></span>

## Empieza por el pago que necesitas hacer

En Ginger, abre **Wallet Coins** para inspeccionar importes, etiquetas e información de privacidad. Para un pago normal, **Send** → **Manual Control** permite elegir monedas candidatas. Seleccionar candidatas no sustituye la revisión de la transacción final: inspecciona las entradas realmente utilizadas, el importe enviado, el cambio y la comisión antes de **Confirm**.

La selección automática y las sugerencias de Ginger también pueden ayudar. El control manual es útil cuando sabes algo sobre los fondos que el monedero no puede conocer, como qué cliente ya reconoce una recepción. No es inherentemente la mejor opción para todos los pagos.

<span id="example-1-one-coin-covers-a-purchase" data-ginger-heading="ejemplo-1-una-moneda-cubre-una-compra" aria-hidden="true"></span>

## Ejemplo 1: una moneda cubre una compra

Alex tiene una moneda de 120 000 satoshis procedente de CoinJoin y quiere pagar 70 000 satoshis. Supongamos que la comisión es de 1 000 satoshis.

| Parte de la transacción | Importe |
| --- | --- |
| Entrada gastada | 120 000 sats |
| El comerciante recibe | 70 000 sats |
| El cambio vuelve a Alex | 49 000 sats |
| Comisión de minería | 1 000 sats |

El comerciante conoce su dirección de pago y el importe. Puede inspeccionar la transacción e inferir que la otra salida es el cambio de Alex. El comerciante no conoce todo el saldo del monedero de Alex solo por esta transacción, pero puede ver la entrada y seguir el gasto posterior del probable cambio.

Alex no necesita devolver ese cambio manualmente: ya pertenece a su monedero. El punto de revisión útil es el próximo pago en el que se utilice ese cambio.

<span id="example-2-two-unrelated-receipts-are-combined" data-ginger-heading="ejemplo-2-se-combinan-dos-recepciones-sin-relación" aria-hidden="true"></span>

## Ejemplo 2: se combinan dos recepciones sin relación

Blair tiene una moneda de 90 000 satoshis asociada a trabajo autónomo y una moneda de 80 000 satoshis asociada a una dirección pública de donaciones. Un pago de 150 000 satoshis con una comisión de 2 000 satoshis necesita más valor que cualquiera de las monedas por separado; usar ambas devuelve 18 000 satoshis de cambio.

Un gasto conjunto normal puede sugerir que ambas entradas tienen el mismo propietario. Alguien que ya reconozca la moneda de las donaciones puede obtener una nueva pista sobre la moneda del trabajo autónomo. Es una inferencia a partir de la transacción y de otros conocimientos, no una prueba automática de la identidad de una persona.

Si Blair tiene otra moneda suficiente que ya esté asociada a la misma actividad, puede revelar menos información nueva. Si la única forma práctica de hacer el pago requerido usa ambas entradas, la elección es una decisión de coste y privacidad. No pagues menos de lo que exige una factura ni consideres «nunca combinar monedas» como una regla absoluta.

CoinJoin y PayJoin implican colaboración, por lo que la suposición de que todas las entradas tienen un propietario no es universalmente válida. Conserva esa distinción al interpretar una transacción.

<span id="example-3-change-carries-a-connection-forward" data-ginger-heading="ejemplo-3-el-cambio-arrastra-una-conexión" aria-hidden="true"></span>

## Ejemplo 3: el cambio arrastra una conexión

Más adelante, Alex combina los 49 000 satoshis de cambio del Ejemplo 1 con una moneda de 60 000 satoshis sin relación para pagar 100 000 satoshis. Con una comisión supuesta de 1 000 satoshis, recibe 8 000 satoshis como nuevo cambio.

El primer comerciante puede observar que la salida que probablemente era cambio de su pago se gastó junto con la entrada de 60 000 satoshis. Aunque la dirección del nuevo destinatario sea nueva, la asociación entre las entradas permanece. Una dirección de salida nueva no deshace la decisión de gastar ambas entradas juntas.

Usa etiquetas para conservar el contexto de futuras decisiones. Las etiquetas son notas locales; no publican un nombre en la cadena de bloques ni impiden que un observador haga inferencias.

<span id="example-4-moving-the-entire-balance-to-hardware" data-ginger-heading="ejemplo-4-mover-todo-el-saldo-a-un-dispositivo-de-hardware" aria-hidden="true"></span>

## Ejemplo 4: mover todo el saldo a un dispositivo de hardware

Casey tiene cuatro monedas de 200 000 satoshis cada una. Enviar las cuatro a una única dirección de recepción de un monedero de hardware gasta 800 000 satoshis de entradas en una transacción. Con una comisión supuesta de 2 000 satoshis, el monedero de hardware recibe 798 000 satoshis.

El monedero de hardware mejora el aislamiento de las claves, pero la transferencia expone un gasto conjunto de las cuatro entradas. Las transferencias separadas podrían evitar esa asociación concreta, a cambio de añadir comisiones y otros patrones observables de tiempos e importes. Recibir salidas directamente en un monedero de hardware durante un CoinJoin apto puede evitar una transferencia posterior, pero tiene comprobaciones de admisibilidad y destino específicas de la versión; no es una forma general de remezclar monedas guardadas en un dispositivo de hardware.

No gastes todo un saldo simplemente porque la lista de monedas parezca desordenada. La consolidación puede reducir el número de entradas futuras, pero una tasa de comisión baja solo cambia el coste; no elimina la divulgación de información.

<span id="other-participants-and-future-observations-matter" data-ginger-heading="otros-participantes-y-las-observaciones-futuras-también-importan" aria-hidden="true"></span>

## Otros participantes y las observaciones futuras también importan

Tu propio comportamiento no es la única influencia. Las transacciones posteriores de otros participantes pueden reducir las posibilidades que considera un observador. La investigación sobre consolidación después de CoinJoin estudia este efecto y reconoce los límites para convertir esas observaciones en una identificación utilizable. Sus mediciones no son una probabilidad de que un usuario concreto sea rastreado. [Gavenda y colaboradores, 2025](https://arxiv.org/html/2510.17284v1)

No hay un número universal de rondas ni un período de espera que garantice la privacidad. Esperar no borra información ya divulgada a un comerciante identificado, un exchange u otro servicio de monedero.

<span id="a-short-review-before-confirming" data-ginger-heading="una-breve-revisión-antes-de-confirmar" aria-hidden="true"></span>

## Una breve revisión antes de confirmar

1. Confirma el destinatario y el importe requerido mediante un canal de confianza.
2. Inspecciona las entradas finales y pregúntate quién ya conoce cada una de ellas.
3. Comprueba si la selección combina actividades que querías mantener separadas.
4. Inspecciona el cambio y recuerda su conexión cuando lo gastes más adelante.
5. Acepta únicamente un equilibrio entre comisión y privacidad adecuado para el pago; comprueba el historial antes de repetir un pago después de un resultado incierto.

Para las decisiones relacionadas con el monedero y el navegador, continúa con los [hábitos de privacidad](/es/using-ginger/address-reuse/) y [adónde va la información del monedero](/es/learn-privacy/information-sharing/).
