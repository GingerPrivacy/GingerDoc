---
doc_id: "hardware-wallets.connect"
title: "Conecta y usa una cartera física"
description: "Conecta una cartera física compatible con Ginger, verifica las direcciones de recepción en el dispositivo y aprueba los pagos de forma segura."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="does-ginger-support-hardware-wallets"></span>

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

Una cartera física conserva las claves de firma en un dispositivo independiente. Ginger puede mostrar su saldo y preparar transacciones, mientras que el dispositivo autoriza las operaciones de firma compatibles. El ordenador sigue manejando información pública sensible, por lo que guardar las claves en un dispositivo físico no hace que la actividad de la cartera sea anónima.

<span id="compatibility-in-this-release" data-ginger-heading="compatibilidad-en-esta-versión" aria-hidden="true"></span>

## Compatibilidad en esta versión

Ginger 2.0.26 incluye Hardware Wallet Interface (HWI) 3.2.0. Ginger reconoce Coldcard, Ledger Nano S, Nano S Plus y Nano X, Trezor One, Model T, Safe 3 y Safe 5, BitBox01, BitBox02, KeepKey y Blockstream Jade. Que un dispositivo sea reconocido no garantiza que todas las combinaciones de dispositivo, firmware, procedimiento de frase de contraseña y tipo de dirección funcionen en la interfaz gráfica.

La [matriz de dispositivos de HWI 3.2.0](https://github.com/bitcoin-core/HWI/blob/3.2.0/docs/devices/index.rst) describe las capacidades de la capa de comunicación subyacente. Ginger ofrece un subconjunto: por ejemplo, la conexión habitual con el dispositivo importa la cuenta SegWit nativa. Que HWI admita multifirma o Taproot no crea por sí solo un procedimiento de configuración de cartera correspondiente en Ginger.

Antes de mover una cantidad considerable de fondos, confirma que tu dispositivo concreto puede conectarse, mostrar una dirección de recepción y firmar un pequeño pago de prueba. Si requiere un método de introducción del PIN o de la frase de contraseña que Ginger no pueda completar, termina el procedimiento compatible en el propio dispositivo o consulta al fabricante. No introduzcas las palabras de recuperación del dispositivo en Ginger como solución alternativa.

<span id="add-the-device" data-ginger-heading="añade-el-dispositivo" aria-hidden="true"></span>

## Añade el dispositivo

1. Inicializa la cartera física y haz una copia de seguridad siguiendo las instrucciones del fabricante. Usa un firmware de confianza y un cable USB capaz de transmitir datos.
2. Conecta un solo dispositivo cada vez, desbloquéalo y abre su aplicación de Bitcoin si la necesita. Cierra las demás aplicaciones de cartera que puedan estar ocupando la conexión USB.
3. En la pantalla de Ginger para añadir carteras, elige **Hardware Wallet** y proporciona un nombre para la cartera si se te solicita.
4. Sigue las indicaciones de detección y del dispositivo. Ginger puede reconocer una cartera que ya añadiste y ofrecerte abrirla en vez de crear un duplicado.
5. Deja que Ginger se sincronice. Confirma que la red y la cuenta seleccionadas sean las que querías utilizar.

Ginger puede conservar en el ordenador un registro público de la cartera sin que el dispositivo esté conectado. Ese registro permite observar la actividad y generar direcciones; para gastar sigue siendo necesario el dispositivo de firma o una recuperación válida de sus claves.

<span id="receive-and-verify" data-ginger-heading="recibe-y-verifica" aria-hidden="true"></span>

## Recibe y verifica

Elige **Receive**, añade una etiqueta y genera una dirección. Usa **Show on the hardware wallet** cuando esté disponible. Compara la dirección completa que muestra el dispositivo con la de Ginger antes de compartirla. Si el dispositivo y el ordenador muestran direcciones distintas, detente: aprobar una dirección diferente puede enviar los fondos fuera de tu cartera.

El ordenador puede mostrar una dirección aparentemente válida aunque esté comprometido. La pantalla del dispositivo resulta útil porque ofrece una comprobación independiente basada en las propias claves del dispositivo. Usa una dirección nueva para cada pago para evitar vincular cobros que no tengan relación entre sí.

<span id="send-and-approve" data-ginger-heading="envía-y-aprueba" aria-hidden="true"></span>

## Envía y aprueba

Prepara un pago en Ginger y revisa el destinatario, el importe, el cambio y la comisión. En la cartera física, examina lo que se te pide firmar. Rechaza la solicitud si el destino o el importe difieren de lo que querías, o si el dispositivo informa de una condición relativa al cambio o a las salidas que no puedas explicar.

Mantén el dispositivo conectado hasta que termine la firma. Después, comprueba la difusión y la confirmación en el historial de transacciones de Ginger. Retirar un dispositivo no cancela una transacción que ya se haya difundido.

<span id="coinjoin-and-other-limits" data-ginger-heading="coinjoin-y-otras-limitaciones" aria-hidden="true"></span>

## CoinJoin y otras limitaciones

Una cartera física no puede ser la cartera de origen que firma para el CoinJoin automático de Ginger. Una cartera física cargada puede aparecer como destino de las salidas de CoinJoin de una cartera de software; esa es una función de recepción, y su selección se restablece al reiniciar. Usa únicamente el destino que Ginger ofrezca realmente y verifica que lo controlas antes de confiar en él.

La [guía del exchange al almacenamiento en frío](/es/hardware-wallets/exchange-to-cold-storage/) compara la recepción directa de las salidas aptas de CoinJoin con una transferencia normal posterior. Incluye la restricción de inicio para carteras que solo tienen monedas privadas y las comprobaciones para conciliar las dos carteras.

En esta versión se rechaza el envío de PayJoin desde carteras físicas. La firma de mensajes depende de la compatibilidad del dispositivo y del verificador. Ni el dispositivo ni Ginger pueden revertir un pago confirmado. Para firmar mediante archivos, lee [Usa el procedimiento PSBT](/es/hardware-wallets/psbt/).

<span id="connection-problems" data-ginger-heading="problemas-de-conexión" aria-hidden="true"></span>

## Problemas de conexión

Prueba un cable de datos que sepas que funciona, un puerto USB directo y un único dispositivo desbloqueado. En Linux, sigue las instrucciones pertinentes del fabricante para los permisos udev/USB y vuelve a conectar después. Evita ejecutar la cartera como root como solución permanente. Si una frase de contraseña distinta abre una cuenta vacía inesperada, comprueba la frase de contraseña original del dispositivo en vez de restablecerlo.
