---
doc_id: "hardware-wallets.exchange-to-cold-storage"
title: "Del exchange al almacenamiento en frío con Ginger"
description: "Retira bitcoin, usa CoinJoin de Ginger y mueve fondos a un monedero de hardware verificado mientras contabilizas las comisiones y conservas la privacidad."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Establece primero un monedero de hardware verificado y su copia de seguridad independiente.

Ginger puede ayudarte a separar la actividad futura de bitcoin de una retirada de exchange antes de almacenar los fondos en un monedero de hardware. El exchange conserva su registro de retirada. El monedero de hardware protege las claves de firma; las transacciones y tus gastos posteriores siguen determinando lo que otras personas pueden inferir.

Hay dos rutas diferentes. Elige una antes de empezar para saber dónde deberían aparecer las salidas.

| Ruta | Qué sucede | Consideración principal |
| --- | --- | --- |
| Participar en CoinJoin en el monedero de software y después hacer una transferencia normal | Las salidas permanecen en el monedero de software de Ginger hasta que seleccionas fondos y los envías al dispositivo de hardware | Puedes revisar primero su privacidad; cada transferencia posterior cuesta una comisión y expone su relación entre entradas y salidas |
| Recibir las salidas de CoinJoin directamente en el monedero de hardware | Un monedero de software apto firma el CoinJoin; sus salidas van al monedero de hardware cargado | Evita una transferencia independiente de esas salidas, pero abandonan el origen después de esa ronda sin una garantía de que cumplan tu objetivo |

<span id="prepare-both-wallets" data-ginger-heading="prepara-ambos-monederos" aria-hidden="true"></span>

## Prepara ambos monederos

1. Usa una instalación verificada de Ginger. Crea el monedero de software y haz una copia con sus palabras de recuperación y su frase de contraseña original. Mantén en este monedero únicamente el importe que quieras procesar.
2. Inicializa el monedero de hardware y haz una copia de seguridad mediante el proceso compatible del fabricante. [Conéctalo con Ginger](/es/using-ginger/hardware-wallet/) y deja que se sincronice.
3. En el monedero de hardware, elige **Receive** y usa **Show on the hardware wallet** cuando esté disponible. Compara la dirección de recepción completa en el dispositivo y en el ordenador. Completa una pequeña prueba de recepción y firma antes de confiar un importe mayor a una configuración nueva.
4. Da nombres distintos a los monederos para reconocer el origen y el destino. Conserva una copia recuperable de cada uno; la copia del monedero de software no recupera un monedero de hardware con claves diferentes.

Nunca introduzcas las palabras de recuperación del monedero de hardware en Ginger para hacer que CoinJoin funcione. Eso daría al ordenador acceso a las claves de firma del dispositivo de hardware.

<span id="withdraw-from-the-exchange" data-ginger-heading="retira-del-exchange" aria-hidden="true"></span>

## Retira del exchange

En el monedero de software, elige **Receive**, añade una etiqueta útil y crea una dirección nueva. Copia esa dirección al proceso de retirada de Bitcoin del exchange y verifica la dirección completa y la red antes de autorizar allí la retirada. Ginger utiliza Bitcoin en cadena; una factura Lightning o la red de otro activo no son intercambiables.

Anota por separado la comisión de retirada del exchange. El importe que llegue a Ginger puede ser menor que el descontado por el exchange. Espera a que el monedero se sincronice y los fondos recibidos se confirmen antes de esperar que participen en CoinJoin. Un identificador de transacción es útil para conciliar, pero evita publicarlo o buscarlo repetidamente en exploradores públicos.

<span id="route-a-review-coinjoin-results-then-transfer" data-ginger-heading="ruta-a-revisa-los-resultados-de-coinjoin-y-después-transfiere" aria-hidden="true"></span>

## Ruta A: revisa los resultados de CoinJoin y después transfiere

1. En **Coinjoin Settings** del monedero de origen, deja **Coinjoin to this wallet** configurado en el origen. Revisa el objetivo, las preferencias de comisiones y las monedas excluidas antes de iniciar la participación con el control de reproducción.
2. Supervisa las rondas completadas y la información de privacidad de las monedas. Puedes pausar para revisar las comisiones y el progreso. Si una ronda está en una fase crítica, deja que Ginger termine el trabajo requerido en vez de cerrar la aplicación forzosamente.
3. Obtén una dirección de recepción nueva del monedero de hardware y verifícala en el dispositivo. En el monedero de software, elige **Send** → **Manual Control** y selecciona los fondos que quieras mover.
4. Revisa las entradas realmente seleccionadas, el destino, el importe del destinatario, el cambio y la comisión. Confirma la transferencia solo cuando coincidan con tu intención.
5. Comprueba el historial sincronizado del monedero de hardware y las monedas restantes del monedero de origen. Espera a que la transferencia se confirme antes de considerarla completada.

Enviar todas las salidas juntas crea una asociación visible entre ellas. Mover monedas individuales evita esa asociación concreta entre varias entradas, pero cuesta comisiones adicionales y sigue revelando una transacción por cada transferencia. Los importes, los tiempos y la información que tenga un observador pueden proporcionar otros vínculos. Elige un plan de transferencia manejable; no supongas que ninguno de los enfoques garantice el anonimato.

<span id="route-b-choose-hardware-as-the-coinjoin-destination" data-ginger-heading="ruta-b-elige-el-dispositivo-de-hardware-como-destino-de-coinjoin" aria-hidden="true"></span>

## Ruta B: elige el dispositivo de hardware como destino de CoinJoin

Usa esta ruta mientras el monedero de software todavía tenga fondos aptos para CoinJoin. El proceso habitual de v2.0.26 rechaza la participación cuando el monedero, o todos los candidatos disponibles, ya sean privados según su objetivo. Seleccionar otro destino no evita esa comprobación. En particular, excluir todas las monedas no privadas no es una forma fiable de forzar una ronda adicional que solo contenga monedas que ya han completado CoinJoin. Usa la Ruta A para esos fondos en vez de cambiar el objetivo únicamente para eludir la condición de parada.

1. Carga y verifica el monedero de hardware en Ginger. Detén la participación en CoinJoin del origen y espera hasta que el selector de destino esté disponible.
2. Abre **Coinjoin Settings** del monedero de origen. Configura **Coinjoin to this wallet** en el monedero de hardware previsto. Selecciona solo un destino que Ginger ofrezca.
3. Revisa **Exclude Coins** para los fondos que deban quedar fuera de CoinJoin. La exclusión se aplica a monedas concretas y no reserva todas las recepciones futuras de la misma fuente.
4. Vuelve a comprobar el destino seleccionado e inicia la participación. Mantén la aplicación en funcionamiento mientras completa la ronda.
5. Después de una ronda completada, inspecciona ambos monederos. Solo se gastaron las entradas seleccionadas, y las salidas resultantes pueden dividirse en varias monedas. El saldo restante del origen no indica necesariamente un fallo.

El destino recibe las salidas de la ronda completada; este ajuste no espera un acontecimiento independiente de logro del objetivo antes de enviarlas. Revisa su información de privacidad resultante. Los fondos guardados en el dispositivo de hardware no pueden aportar posteriormente entradas de CoinJoin mediante el proceso habitual de monederos de hardware de esta versión.

La selección de destino se restablece después de reiniciar Ginger. Compruébala de nuevo antes de cada sesión. No puedes cambiarla mientras la participación esté activa, y cambiarla después de firmar una transacción no puede redirigir esa transacción. Verifica explícitamente cualquier ajuste de participación automática en vez de suponer que exista un traslado permanente en segundo plano.

<span id="reconcile-balances-and-plan-the-next-spend" data-ginger-heading="concilia-los-saldos-y-planifica-el-próximo-gasto" aria-hidden="true"></span>

## Concilia los saldos y planifica el próximo gasto

Compara la disminución del origen con las salidas recibidas en el monedero de hardware y los fondos restantes del origen. La diferencia puede incluir costes de CoinJoin. Un saldo de origen de cero no significa que se hayan perdido los fondos si el destino previsto los recibió. A la inversa, una ronda completada no significa que todas las monedas del origen se movieran o alcanzaran el objetivo.

Cuando gastes después desde el monedero de hardware, revisa de nuevo la selección de monedas. Combinar monedas sin relación puede revelar asociaciones independientemente de dónde estén almacenadas sus claves de firma. Usa una dirección nueva del destinatario, inspecciona el cambio y confirma el pago en el dispositivo. El [procedimiento PSBT](/es/hardware-wallets/psbt/) ofrece una vía compatible de firma mediante archivos para dispositivos adecuados; no cambia las consecuencias de privacidad de la transacción que firmas.

Si sospechas que las claves de firma ya están comprometidas, proteger los fondos restantes tiene prioridad sobre esperar un procedimiento de privacidad. Un dispositivo nuevo con la misma semilla expuesta no revoca esa semilla.
