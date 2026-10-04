---
doc_id: "payments.coin-control-history"
title: "Control de monedas, historial y transacciones atascadas"
description: "Inspecciona los UTXOs y el historial de pagos de Ginger, selecciona monedas deliberadamente y comprende cuándo es posible acelerar o cancelar una transacción."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Comprende primero la vista previa habitual de envío, el importe del destinatario y la comisión.

El saldo total de la cartera puede contener muchas monedas separadas con distintos orígenes, estados de confirmación e historiales de privacidad. El control de monedas te ayuda a decidir cuáles gastar. También facilita vincular por accidente fondos que antes estaban separados, así que úsalo con un propósito concreto.

<span id="inspect-and-select-coins" data-ginger-heading="inspecciona-y-selecciona-monedas" aria-hidden="true"></span>

## Inspecciona y selecciona monedas

Abre el menú de la cartera y elige **Wallet Coins**. Inspecciona el importe, las etiquetas, la información de confirmación y los datos de privacidad de las monedas que posees. Una transacción puede crear varias monedas, y una dirección puede recibir varios pagos separados; ni una fila ni una dirección representan necesariamente una cartera completa.

Elige **Send** → **Manual Control** para trabajar con monedas individuales durante el proceso de pago. Selecciona suficiente valor para el pago y la comisión. Revisa las entradas y el cambio resultantes antes de confirmar. Seleccionar monedas las pone a disposición del constructor de transacciones; revisa la vista previa final para ver cuáles se utilizan realmente.

Mantén etiquetas que expliquen de dónde proceden los fondos o quién ya los conoce. Pagar con monedas ya asociadas al mismo destinatario puede revelar menos información nueva que combinar fuentes sin relación. Una etiqueta no establece por sí sola el anonimato ni bloquea el análisis de la cadena de bloques de otra persona.

<span id="consolidation-and-small-coins" data-ginger-heading="consolidación-y-monedas-pequeñas" aria-hidden="true"></span>

## Consolidación y monedas pequeñas

La consolidación gasta varias monedas pequeñas en un número menor de salidas, normalmente hacia una cartera que controlas. Cuesta una comisión ahora y puede reducir el número de entradas necesarias para un pago posterior. También asocia públicamente las entradas seleccionadas. Unas condiciones de comisiones bajas pueden abaratar la consolidación, pero no eliminan ese compromiso de privacidad.

No combines automáticamente monedas sin relación solo para tener una lista ordenada. Gastar salidas entrantes muy pequeñas puede resultar antieconómico. El umbral de polvo de Ginger y las exclusiones de CoinJoin abordan situaciones diferentes; excluir una moneda de CoinJoin no impide que la selecciones para un pago normal.

Enviar fondos a tu cartera física mediante **Send** es una transacción normal en cadena. Obtén y verifica una dirección de recepción nueva del dispositivo físico y después revisa la comisión y las monedas seleccionadas de la cartera de software. La propia transferencia sigue siendo visible en la cadena de bloques.

<span id="read-transaction-history" data-ginger-heading="lee-el-historial-de-transacciones" aria-hidden="true"></span>

## Lee el historial de transacciones

La pantalla principal de la cartera muestra la actividad entrante, saliente y de CoinJoin. Expande las entradas agrupadas de CoinJoin cuando necesites inspeccionar rondas individuales. Los controles de ordenación ayudan a comparar fechas, importes, etiquetas y estados. Abre los detalles de la transacción para inspeccionar su identificador y la información disponible sobre confirmaciones o comisiones.

Usa **Copy Transaction ID** cuando necesites identificar una transacción concreta. Mantén los identificadores de transacción privados siempre que sea posible: compartir uno puede revelar direcciones, importes y vínculos con otras actividades. Un explorador público también conoce las consultas que haces. El historial local de Ginger es el primer lugar donde comprobar tus propios pagos.

Puedes inspeccionar, ordenar y agrupar el historial y copiar identificadores de transacción. Esta versión no ofrece un control de búsqueda de transacciones ni de exportación CSV en este procedimiento de historial.

<span id="speed-up-an-unconfirmed-transaction" data-ginger-heading="acelera-una-transacción-sin-confirmar" aria-hidden="true"></span>

## Acelera una transacción sin confirmar

Cuando Ginger ofrezca **Speed Up Transaction** para una entrada del historial, ábrelo y revisa la comisión adicional antes de confirmar. Según la transacción y las salidas disponibles, la aceleración mediante comisiones puede sustituir una transacción por una versión con mayor comisión o gastar una salida en una transacción hija que pague suficiente por ambas.

Tu cartera no puede acelerar todas las transacciones. Necesita una estructura de transacción compatible y acceso a las claves y los fondos correspondientes. Una comisión mayor mejora el incentivo para los mineros; no garantiza una confirmación inmediata. La sustitución puede cambiar el identificador de transacción, así que comprueba el historial actualizado al coordinarte con un destinatario.

<span id="cancel-an-unconfirmed-transaction" data-ginger-heading="cancela-una-transacción-sin-confirmar" aria-hidden="true"></span>

## Cancela una transacción sin confirmar

**Cancel Transaction**, cuando se ofrece, intenta sustituir el pago pendiente por una transacción que devuelve los fondos correspondientes a tu control y paga una comisión. Compite con la confirmación del pago original; no es una orden de deshacer aceptada por todos los nodos.

Lee el diálogo de cancelación y la comisión, confirma únicamente si esa es tu intención y supervisa qué se confirma realmente. Si la transacción original se confirma primero, la cancelación no puede revertirla. Una vez confirmado un pago, solicita al destinatario un reembolso independiente si procede; Ginger no puede recuperar los fondos.

No inicies un segundo pago ni prometas un reembolso hasta comprender qué transacción se ha confirmado. Un explorador y tu cartera pueden mostrar temporalmente información distinta de la mempool porque ven nodos diferentes.
