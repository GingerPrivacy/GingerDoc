---
doc_id: "learn-privacy.repeated-payments"
title: "Recibe donaciones y pagos repetidos"
description: "Recibe donaciones y pagos recurrentes en Bitcoin con direcciones nuevas, etiquetas útiles, reembolsos cuidadosos y una gestión deliberada de las monedas resultantes."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

Recibir bitcoin públicamente no exige publicar todas las direcciones de tu cartera. Sí exige decidir qué verá cada pagador o visitante del sitio web y después mantener separadas las recepciones sin relación cuando resulte útil. Ginger admite la recepción normal en cadena y etiquetas locales; no es un servidor de facturación ni un servicio automático de rotación de direcciones para sitios web.

<span id="choose-how-to-give-out-addresses" data-ginger-heading="elige-cómo-facilitar-las-direcciones" aria-hidden="true"></span>

## Elige cómo facilitar las direcciones

| Enfoque | Qué facilita | Qué se hace visible |
| --- | --- | --- |
| Una dirección permanente en un sitio web o perfil | Cualquiera puede pagar sin contactar contigo | Las recepciones en esa dirección y sus gastos posteriores pueden inspeccionarse conjuntamente; la página vincula la dirección con su propietario |
| Una dirección nueva proporcionada a cada pagador | Cada solicitud de pago tiene un destino separado | El pagador y el servicio de comunicación pueden conocer la dirección y tu identidad; las transacciones posteriores pueden crear vínculos |
| Una dirección nueva para cada cuota recurrente | Puedes conservar registros privados de cada pago | Requiere comunicar las nuevas instrucciones; un pagador todavía puede reutilizar una dirección anterior |

Las recepciones de una dirección pública no representan necesariamente todo el saldo, los ingresos o el número de donantes de su propietario. Alguien puede enviarse bitcoin a sí mismo, los donantes pueden pagar varias veces y pueden existir otras direcciones. Evita sacar conclusiones más fuertes de las que sustentan las transacciones visibles.

<span id="receive-and-keep-useful-records" data-ginger-heading="recibe-y-conserva-registros-útiles" aria-hidden="true"></span>

## Recibe y conserva registros útiles

1. Abre la cartera prevista y elige **Receive**. Añade una etiqueta que te ayude a reconocer después el propósito, como una referencia privada de factura o la actividad correspondiente.
2. Genera una dirección de recepción nueva para ese pago. En un dispositivo físico, verifícala en el dispositivo mediante **Show on the hardware wallet** cuando esté disponible.
3. Comparte la dirección y el importe acordado de Bitcoin en cadena mediante el canal previsto. Verifica lo que pegaste; no reutilices una dirección solo porque ya aparezca en el historial de un chat.
4. Comprueba la recepción real y las confirmaciones en Ginger. Un mensaje del pagador o una imagen de su pantalla de pago no son la confirmación de la cartera de que los fondos hayan llegado.
5. Conserva la asociación entre la recepción, la etiqueta y cualquier registro privado de factura o donación. Las palabras de recuperación no reconstruyen todas esas notas.

Las etiquetas pertenecen a los registros locales; no se publican como nombres en la transacción de Bitcoin. Sin embargo, cualquiera que lea tus archivos locales, tu copia de seguridad o una pantalla compartida puede verlas. Usa suficientes detalles para comprender la selección futura de monedas sin recopilar información personal innecesaria de los donantes.

<span id="handle-a-permanently-published-address" data-ginger-heading="gestiona-una-dirección-publicada-permanentemente" aria-hidden="true"></span>

## Gestiona una dirección publicada permanentemente

Si usas una dirección permanente de donaciones, da por hecho que su historial de recepción puede inspeccionarse. Sustituir la dirección en un sitio web no borra la anterior ni impide que reciba pagos futuros. Conserva su material de recuperación y suficiente contexto para reconocer las recepciones tardías.

CoinJoin puede ayudar a reducir los vínculos con gastos posteriores bajo sus supuestos; no hace desaparecer las donaciones a esa dirección pública. Mover juntas todas las recepciones en una transacción normal puede añadir una nueva asociación. Planifica el próximo gasto con el mismo cuidado que la recepción inicial.

Para una suscripción o un pago repetido de un cliente, comunica un destino nuevo para cada cuota cuando sea práctico. Ginger no revoca una dirección antigua ni obliga al pagador a seguir la solicitud actualizada. Concilia los pagos tardíos y duplicados antes de prometer un reembolso.

<span id="refund-the-payer-through-a-verified-destination" data-ginger-heading="reembolsa-al-pagador-mediante-un-destino-verificado" aria-hidden="true"></span>

## Reembolsa al pagador mediante un destino verificado

No envíes automáticamente un reembolso a una de las direcciones de entrada del pago original. El pagador puede haber usado una retirada de exchange, un servicio con custodia o una transacción colaborativa, y puede no controlar esa dirección de entrada.

1. Confirma el pago original y la solicitud de reembolso usando tus registros privados y un canal de contacto de confianza.
2. Acuerda el importe del reembolso y quién asume la comisión de transacción. Obtén una dirección nueva de Bitcoin para el reembolso del destinatario previsto y verifícala por ese canal.
3. Usa **Send**, inspecciona las entradas seleccionadas y la comisión y autoriza únicamente el pago acordado.
4. Registra la transacción de reembolso y comprueba su resultado antes de reintentar después de un error de red.

Un reembolso es un nuevo pago en cadena. No deshace la recepción original ni borra sus registros. Considera qué revela la transacción de reembolso sobre las monedas que elegiste gastar.

<span id="keep-receipt-handling-deliberate" data-ginger-heading="gestiona-las-recepciones-deliberadamente" aria-hidden="true"></span>

## Gestiona las recepciones deliberadamente

Abre **Wallet Coins** para inspeccionar las monedas resultantes. **Send** → **Manual Control** puede ayudar a seleccionar fondos ya asociados a la actividad correspondiente. Revisa la transacción final en vez de suponer que una etiqueta imponga automáticamente la separación.

Los pagos diminutos inesperados no necesitan una respuesta inmediata. Gastar una salida pequeña puede costar un gran porcentaje de su valor y asociarla a otras entradas seleccionadas. **Exclude Coins** afecta únicamente a la participación en CoinJoin; no bloquea una moneda frente a un gasto normal. No sigas instrucciones incluidas en un pago o contacto no solicitado que afirme que debes enviar fondos para desbloquearlo.

Si diriges salidas aptas de CoinJoin a otra cartera cargada para almacenarlas, comprueba esa elección antes de cada sesión. Se restablece después de reiniciar, y el procedimiento normal de la versión no fuerza una ronda adicional cuando todos los fondos aptos ya son privados. Una configuración de recepción recurrente no debe depender de la suposición no verificada de que todo se envía continuamente a un dispositivo físico.

Continúa con [Gastar después de CoinJoin](/es/learn-privacy/spending-after-coinjoin/) para ver ejemplos concretos y con [Divulgación de información](/es/learn-privacy/information-sharing/) para saber qué pueden aprender los sitios web, exploradores y otras aplicaciones.
