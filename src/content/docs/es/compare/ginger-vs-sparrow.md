---
title: "Ginger Wallet frente a Sparrow Wallet: privacidad, control y compromisos"
description: "Compara Ginger y Sparrow en CoinJoin, privacidad de red, carteras físicas, multifirma, control de transacciones y comisiones para elegir lo que mejor se adapte a ti."
doc_id: "compare.ginger-vs-sparrow"
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet y Sparrow Wallet son carteras de escritorio de Bitcoin de código abierto que permiten conservar tus propias claves. Ambas admiten pagos normales, carteras físicas y una selección deliberada de monedas.

**Ginger ofrece CoinJoin con una conexión al coordinador ya configurada. Sparrow ofrece una variedad más amplia de configuraciones de cartera y herramientas para inspeccionar y firmar transacciones, incluida la multifirma.** La elección depende del procedimiento que necesites y de las responsabilidades que estés dispuesto a asumir.

Última comprobación: **14 de septiembre de 2026**. Versiones cubiertas: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) y [Sparrow 2.5.4](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4). Esta comparación cubre los procedimientos documentados en estas versiones; no mide su velocidad, fiabilidad ni anonimato.

<span id="at-a-glance" data-ginger-heading="de-un-vistazo" aria-hidden="true"></span>

## De un vistazo

| Pregunta | Ginger Wallet | Sparrow Wallet |
| --- | --- | --- |
| ¿Quién controla las claves de firma? | Tú, en una cartera de software o en un dispositivo físico compatible. | Tú, mediante los firmantes de software o físicos que configures. |
| ¿Incluye mezcla coordinada mediante CoinJoin? | Sí, con una conexión al coordinador proporcionada. | No tiene una integración actual de mezcla Whirlpool; conserva otras herramientas de privacidad. |
| ¿Cómo obtiene el historial de la cartera? | Filtros compactos y bloques procesados localmente; Tor está activado por defecto. | Un servidor Electrum público, tu nodo de Bitcoin Core o un servidor Electrum privado; admite Tor. |
| ¿Puedo usar una cartera física? | Sí, con dispositivos compatibles y un procedimiento PSBT basado en archivos. | Sí, con procedimientos compatibles mediante USB, códigos QR y tarjetas SD. |
| ¿Puedo configurar multifirma? | No hay una configuración general de multifirma en la interfaz documentada. | Sí, con varios firmantes y un umbral de firmas elegido. |
| ¿Puedo elegir monedas individuales? | Sí, mediante Manual Control. | Sí, con inspección y edición detalladas de transacciones. |
| ¿Qué comisiones debo esperar? | Comisiones de minería; CoinJoin también puede generar comisiones del coordinador y pequeños remanentes. | Comisiones de minería; añadir entradas o salidas a una transacción puede aumentar los costes. |

Las secciones siguientes explican estas diferencias y enlazan las guías correspondientes.

<span id="privacy-and-coinjoin-different-tools-for-different-links" data-ginger-heading="privacidad-y-coinjoin-herramientas-distintas-para-vínculos-distintos" aria-hidden="true"></span>

## Privacidad y CoinJoin: herramientas distintas para vínculos distintos

Un saldo individual de bitcoin está formado por monedas separadas, también llamadas UTXOs. Gastar varias juntas puede asociar sus historiales. CoinJoin combina entradas de distintos participantes en una transacción para que sea más difícil inferir algunos vínculos de propiedad.

La [configuración publicada](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) de Ginger incluye su conexión al coordinador. Después de hacer una copia de seguridad de una cartera de software y recibir fondos confirmados, puedes revisar los [controles de CoinJoin](/es/using-ginger/coinjoin/) y empezar a participar. El coordinador organiza las rondas sin conservar tus claves de firma. La disponibilidad, los fondos aptos, las comisiones y una participación suficiente siguen influyendo en que una ronda se complete.

Sparrow eliminó su cliente Whirlpool en la [versión 1.9.0](https://github.com/sparrowwallet/sparrow/releases/tag/1.9.0). Las instrucciones antiguas para mezclar con Whirlpool dentro de Sparrow no describen la versión actual.

Sparrow sigue ofreciendo formas de hacer que los gastos revelen menos información. Su opción de transacción **Privacy** puede construir una transacción Stonewall con una salida adicional que coincida con el importe del pago. Todas las entradas pertenecen a tu cartera, de modo que esto crea ambigüedad sin mezclar fondos con otros participantes. Necesita monedas adecuadas, fondos suficientes y tipos de dirección coincidentes; las entradas y salidas adicionales pueden aumentar las comisiones de minería. Sparrow también admite códigos de pago BIP47 para derivar direcciones de pago nuevas. Consulta [Spending Privately](https://sparrowwallet.com/docs/spending-privately.html).

Ambas carteras también admiten el envío de PayJoin en procedimientos compatibles. PayJoin implica a un destinatario compatible en la construcción de un pago, de forma independiente de una ronda de mezcla de un coordinador. Ginger requiere una cartera de software para ello. Consulta la [guía de PayJoin de Ginger](/es/payments/payjoin-message-signing/) y las [actualizaciones de PayJoin de Sparrow](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4).

Ninguna de estas herramientas borra los registros de un exchange ni hace privada la cadena de bloques. Las combinaciones posteriores de monedas, la reutilización de direcciones o la información compartida con un destinatario pueden revelar nuevos vínculos. Consulta [Confianza y límites de CoinJoin](/es/learn-coinjoin/trust-and-limits/).

<span id="network-privacy-who-learns-about-your-wallet" data-ginger-heading="privacidad-de-red-quién-conoce-información-de-tu-cartera" aria-hidden="true"></span>

## Privacidad de red: ¿quién conoce información de tu cartera?

Ginger usa filtros de bloques compactos para identificar bloques potencialmente relevantes y después procesa localmente los datos de los bloques descargados. Esto reduce la necesidad de revelar una lista de direcciones de cartera a un servidor público de carteras. Tor está incluido y activado de forma predeterminada para las conexiones de red habituales. Ginger también ofrece un [nodo opcional de Bitcoin Core](/es/settings-network/full-node-fees/). Lee [Tor y sincronización](/es/using-ginger/tor/) para conocer el modelo de conexión y sus límites.

Sparrow permite elegir un servidor Electrum público, tu propio nodo de Bitcoin Core o un servidor Electrum privado. Un servidor público resulta cómodo, pero su operador puede asociar las consultas de cartera que recibe y conocer tu actividad. La [guía de inicio rápido](https://sparrowwallet.com/docs/quick-start.html) de Sparrow explica este compromiso; su [guía de Bitcoin Core](https://sparrowwallet.com/docs/connect-node.html) explica cómo conectar tu propio nodo.

Usar infraestructura que controles evita revelar esas consultas al operador de un servidor público ajeno. Sparrow también admite conexiones Tor, incluso a la dirección onion de un servidor privado. Su [guía de buenas prácticas](https://sparrowwallet.com/docs/best-practices.html) explica estas configuraciones.

Tor ayuda a proteger los metadatos de conexión, como tu dirección IP. No oculta el contenido de las solicitudes al servicio que las recibe. Ejecutar tu propio nodo tampoco elimina las pistas de propiedad de una transacción que ya esté en la cadena de bloques. Elige conjuntamente los ajustes de red y las prácticas de gasto.

<span id="hardware-wallets-and-multisig" data-ginger-heading="carteras-físicas-y-multifirma" aria-hidden="true"></span>

## Carteras físicas y multifirma

Ambas aplicaciones pueden preparar pagos mientras un dispositivo físico compatible conserva las claves de firma. Sparrow documenta las [carteras físicas conectadas por USB](https://sparrowwallet.com/docs/connected-wallet.html), la [firma mediante códigos QR](https://sparrowwallet.com/docs/airgapped-wallet-qr.html) y la [firma mediante tarjetas SD](https://sparrowwallet.com/docs/airgapped-wallet-sdcard.html). El método disponible depende del dispositivo y del firmware.

Ginger admite pagos normales con carteras físicas y un [procedimiento mediante archivos PSBT](/es/hardware-wallets/psbt/). Una PSBT contiene una transacción propuesta y la información necesaria para firmarla por separado. Su presencia no demuestra compatibilidad con todas las configuraciones de cartera: la [guía de carteras físicas](/es/using-ginger/hardware-wallet/) de Ginger describe los límites de la interfaz publicada.

Sparrow permite crear carteras multifirma, en las que gastar requiere un número elegido de firmas, como dos de tres. Esto añade flexibilidad para distribuir la autoridad de firma, junto con más responsabilidades de configuración y copia de seguridad. Ginger no proporciona una configuración general de multifirma comparable. Para las opciones de política de cartera de Sparrow, consulta su [guía de creación de carteras](https://sparrowwallet.com/docs/quick-start.html#creating-your-first-wallet).

CoinJoin de Ginger utiliza una cartera de software para firmar las entradas participantes. Una cartera física compatible cargada en Ginger puede recibir las salidas en su lugar. Eso no significa que el dispositivo haya firmado las entradas ni que las salidas hayan alcanzado tu objetivo de privacidad previsto. La selección de destino se restablece al reiniciar. Sigue la [guía de almacenamiento en frío de Ginger](/es/hardware-wallets/exchange-to-cold-storage/) para conocer las condiciones, y nunca introduzcas las palabras de recuperación de un dispositivo físico en el ordenador para activar CoinJoin.

<span id="transaction-control-and-everyday-use" data-ginger-heading="control-de-transacciones-y-uso-cotidiano" aria-hidden="true"></span>

## Control de transacciones y uso cotidiano

Ambas carteras permiten etiquetar fondos y elegir monedas concretas para un pago. En Ginger, **Wallet Coins** muestra las monedas individuales, mientras que **Send** → **Manual Control** permite seleccionar fondos e inspeccionar el pago resultante. Consulta [Control de monedas e historial](/es/payments/coin-control-history/).

El diagrama y el editor de transacciones de Sparrow muestran entradas, salidas, comisiones y detalles de firma, con herramientas para inspeccionar la transacción antes de difundirla. Su [guía de funciones](https://sparrowwallet.com/features/) describe este nivel de control. Esto puede encajar con alguien que trabaje habitualmente con PSBTs o quiera examinar cómo se construye un pago.

En cualquiera de las carteras, revisa el destinatario, las entradas seleccionadas, el cambio y la comisión antes de autorizar un pago. La selección manual también puede vincular fondos sin relación si los gastas juntos.

<span id="fees-and-service-conditions" data-ginger-heading="comisiones-y-condiciones-del-servicio" aria-hidden="true"></span>

## Comisiones y condiciones del servicio

Los pagos normales en cadena en cualquiera de las carteras tienen comisiones de minería. El tamaño de la transacción y la tasa de comisión elegida afectan al coste; usar las salidas adicionales de privacidad de Sparrow puede hacer que un pago sea más grande.

Según los [ajustes documentados del coordinador](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi/WabiSabi/Backend/WabiSabiConfig.cs) de Ginger, una entrada de **0.03 BTC o menos** está exenta de la comisión del coordinador. Una entrada mayor normalmente paga el **0.3% de su valor total**, con exenciones para las remezclas que cumplan los requisitos. El umbral se aplica por entrada, no al saldo total de la cartera.

Por ejemplo, una entrada de 0.10 BTC sujeta a comisión genera una comisión del coordinador de 30,000 satoshis, más los costes de minería. CoinJoin también puede dejar un pequeño remanente no devuelto al distribuir las salidas. Comprueba las condiciones reales de la ronda y la [explicación del coste completo](/es/using-ginger/annonset/); estos ajustes no son una cotización para rondas futuras. Los pagos normales de Sparrow no compran un servicio equivalente de mezcla coordinada, así que comparar únicamente sus comisiones de minería no es una comparación de precios de servicios CoinJoin equivalentes.

El operador del coordinador de Ginger, InvisibleBit LLC, publica restricciones relacionadas con ubicaciones y nacionalidad estadounidenses. Sus condiciones también permiten comprobaciones de entradas por terceros y el rechazo de determinadas monedas. Revisa las [condiciones actuales del servicio](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt). Conservar tus claves no garantiza la admisión a una ronda. Con Sparrow, considera la privacidad y la disponibilidad del nodo o servidor que uses.

<span id="which-fits-your-needs" data-ginger-heading="cuál-encaja-con-tus-necesidades" aria-hidden="true"></span>

## ¿Cuál encaja con tus necesidades?

**Merece la pena considerar Ginger si tu prioridad es CoinJoin con una conexión al coordinador proporcionada**, y sus comisiones y condiciones del servicio se adaptan a tus necesidades. Empieza por [Primeros pasos](/es/getting-started/) y revisa los ajustes de CoinJoin después de establecer tu copia de seguridad.

**Merece la pena considerar Sparrow si tu prioridad es la multifirma, un procedimiento concreto de firma con un dispositivo físico o un control detallado de las transacciones.** Elige deliberadamente su conexión al servidor y comprueba la compatibilidad con tu configuración exacta de cartera.

Las dos también pueden cumplir funciones distintas. Podrías usar Ginger para CoinJoin y Sparrow para gestionar una cartera física independiente. Una transferencia normal entre ellas cuesta una comisión de minería y deja una transacción visible; combinar salidas puede volver a vincularlas. El destino directo de las salidas de CoinJoin de Ginger debe ser una cartera compatible cargada en Ginger, no simplemente una que esté abierta en Sparrow. Mantén copias de seguridad independientes y revisa [Gastar después de CoinJoin](/es/learn-privacy/spending-after-coinjoin/) antes de combinar fondos.
