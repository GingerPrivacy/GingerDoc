---
title: "Ginger Wallet frente a Wasabi Wallet: configuración, comisiones y ventajas e inconvenientes"
description: "Compara la configuración del coordinador, los costes de CoinJoin, los procedimientos de carteras de hardware y los límites de privacidad de Ginger y Wasabi para elegir lo que mejor se adapte a ti."
doc_id: "compare.ginger-vs-wasabi"
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet y Wasabi Wallet son carteras de escritorio de Bitcoin de código abierto que permiten conservar tus propias claves y usar CoinJoin. Las principales diferencias prácticas para quien empieza con CoinJoin son la configuración del coordinador y sus comisiones.

**Ginger incluye la conexión con su coordinador ya configurada. Wasabi requiere que configures un coordinador antes de empezar con CoinJoin.** El coordinador de Ginger normalmente cobra el 0.3% de las entradas aptas superiores a 0.03 BTC, con las exenciones descritas más adelante. El Wasabi actual acepta únicamente rondas sin comisión del coordinador. Ambos tienen costes de minería.

Última comprobación: **7 de septiembre de 2026**. Versiones cubiertas: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) y [Wasabi v2.8.2](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.8.2). Esta comparación cubre sus procedimientos documentados, no una medición de velocidad, fiabilidad o anonimato.

<span id="at-a-glance" data-ginger-heading="de-un-vistazo" aria-hidden="true"></span>

## De un vistazo

| Pregunta | Ginger Wallet | Wasabi Wallet |
| --- | --- | --- |
| ¿Quién controla las claves de firma? | Tú; el coordinador no conserva un saldo de cartera con custodia por ti. | Tú; CoinJoin es un procedimiento de autocustodia. |
| ¿Qué debo configurar para CoinJoin? | La conexión con el coordinador está incluida; revisa los ajustes de cartera antes de empezar. | Elige y configura un coordinador compatible y después revisa los ajustes de cartera. |
| ¿Hay comisión del coordinador? | Normalmente el 0.3% del valor total de cada entrada sujeta a comisión; las entradas de 0.03 BTC o menos y las remezclas aptas están exentas. | El cliente actual acepta rondas sin comisión del coordinador. |
| ¿Puede haber otros costes? | Sí: comisiones de minería y posibles pequeños remanentes no devueltos. | Sí: comisiones de minería y posibles pequeños remanentes no devueltos. |
| ¿Pueden las claves guardadas en un dispositivo de hardware firmar entradas de CoinJoin? | No mediante el procedimiento habitual de carteras de hardware de esta versión. | No mediante el procedimiento actual de carteras de hardware. |
| ¿Pueden ir las salidas de CoinJoin a un dispositivo de hardware? | Sí, mediante una cartera de hardware compatible cargada como destino de las salidas. | Sí, mediante CoinJoin-to-wallet con una cartera compatible cargada. |

Las secciones siguientes explican las condiciones que hay detrás de estas diferencias y enlazan la documentación pertinente.

<span id="coordinator-setup-one-less-decision-with-ginger" data-ginger-heading="configuración-del-coordinador-una-decisión-menos-con-ginger" aria-hidden="true"></span>

## Configuración del coordinador: una decisión menos con Ginger

Un coordinador organiza una ronda de CoinJoin entre carteras participantes. Es un servicio independiente de la aplicación de cartera y no necesita tus palabras de recuperación ni claves privadas.

La [configuración publicada](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) de Ginger proporciona una conexión con el coordinador. Después de crear una cartera de software y hacer su copia de seguridad, puedes revisar los ajustes de CoinJoin y empezar sin buscar primero una dirección de coordinador. Consulta [Usar CoinJoin en Ginger](/es/using-ginger/coinjoin/).

La [guía de CoinJoin](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html) de Wasabi requiere un coordinador configurado antes de participar. Admite el inicio manual y la participación automática opcional. Elegir un coordinador también implica revisar la disponibilidad y las políticas de ese operador.

La ventaja práctica de Ginger aquí es una configuración inicial más corta. Una conexión proporcionada no garantiza una ronda inmediata: siguen siendo necesarios fondos confirmados, comisiones aceptables, un servicio disponible y suficientes entradas participantes.

<span id="privacy-with-future-use-in-mind" data-ginger-heading="privacidad-pensando-en-el-uso-futuro" aria-hidden="true"></span>

## Privacidad pensando en el uso futuro

Puede que quieras mejorar tu privacidad de Bitcoin hoy y usar un exchange más adelante. En un CoinJoin, tus monedas comparten una transacción con entradas de otros participantes. Esas conexiones pueden ser relevantes cuando un servicio con custodia revise tu depósito.

El coordinador de Ginger examina las entradas participantes y excluye las que no superan sus comprobaciones de riesgo. El objetivo es limitar la exposición a entradas señaladas de otros participantes, una posible fuente de controles adicionales al usar después tu bitcoin.

Con Wasabi, la aplicación de comprobaciones comparables depende del coordinador que elijas. Cada servicio receptor sigue tomando sus propias decisiones de aceptación.

<span id="fees-compare-the-complete-cost" data-ginger-heading="comisiones-compara-el-coste-completo" aria-hidden="true"></span>

## Comisiones: compara el coste completo

<span id="gingers-coordinator-fee" data-ginger-heading="comisión-del-coordinador-de-ginger" aria-hidden="true"></span>

### Comisión del coordinador de Ginger

El umbral de exención es **por entrada**, también llamada moneda o UTXO. No es un límite del saldo de tu cartera ni del importe combinado que registras.

Con los ajustes actuales del coordinador:

- Una entrada de **0.03 BTC o menos** no paga comisión del coordinador.
- Una entrada mayor normalmente paga el **0.3% de su valor total**.
- Las remezclas que cumplan los requisitos también pueden estar exentas, según la admisibilidad de la entrada y la ronda ofrecida.

Para una entrada sin otra exención:

| Valor de la entrada | Comisión del coordinador | Comisión de minería |
| --- | --- | --- |
| 0.03 BTC | 0 satoshis | Adicional |
| 0.10 BTC | 0.0003 BTC, o 30 000 satoshis | Adicional |

Estos ejemplos explican el cálculo; no son cotizaciones para rondas futuras. Las reglas completas y más ejemplos están en [Comisiones de CoinJoin y progreso de privacidad](/es/using-ginger/annonset/).

<span id="wasabis-coordinator-fee-policy" data-ginger-heading="política-de-comisiones-del-coordinador-de-wasabi" aria-hidden="true"></span>

### Política de comisiones del coordinador de Wasabi

Wasabi acepta únicamente rondas sin comisión del coordinador desde la versión 2.2.0.0. Las comisiones de minería siguen pagándose. Su documentación también describe remanentes poco frecuentes de distribución de salidas de hasta 10 000 satoshis por CoinJoin que recibe el coordinador. Consulta la [explicación de comisiones de Wasabi](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#fees).

<span id="budget-beyond-the-headline-percentage" data-ginger-heading="presupuesta-más-allá-del-porcentaje-anunciado" aria-hidden="true"></span>

### Presupuesta más allá del porcentaje anunciado

Ginger también puede dejar un pequeño remanente al distribuir los importes de las salidas. En cualquiera de las carteras, compara el valor de tus entradas participantes con **todas las salidas que te pertenezcan** de la transacción completada, incluidas las recibidas en otra cartera. Las rondas repetidas y las transferencias posteriores pueden añadir costes.

Una comisión del coordinador de cero es uno de los componentes de la comparación. El tamaño de la transacción, las tasas de comisiones de minería, la distribución de salidas y el número de rondas completadas afectan a lo que gastas finalmente. La [guía de costes](/es/using-ginger/annonset/) explica cómo conciliar esos importes.

<span id="hardware-wallets-signing-inputs-and-receiving-outputs-are-different" data-ginger-heading="carteras-de-hardware-firmar-entradas-y-recibir-salidas-son-cosas-diferentes" aria-hidden="true"></span>

## Carteras de hardware: firmar entradas y recibir salidas son cosas diferentes

Ambas aplicaciones admiten carteras de hardware para recibir y firmar pagos normales. Sus procedimientos documentados de CoinJoin requieren una cartera de software para firmar las entradas participantes; el dispositivo de hardware no puede ser ese origen de firma. Consulta la [compatibilidad de Ginger con carteras de hardware](/es/using-ginger/hardware-wallet/) y la [guía de carteras de hardware de Wasabi](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html).

Recibir las monedas resultantes es una operación independiente. Ambas permiten seleccionar otra cartera compatible y cargada como destino de las salidas de CoinJoin, incluida una cartera de hardware. Esto puede evitar una transferencia independiente después de la ronda. **No** significa que el dispositivo de hardware haya firmado las entradas de CoinJoin ni que las salidas hayan alcanzado necesariamente tu objetivo de privacidad antes de llegar allí.

En Ginger, revisa de nuevo el destino después de reiniciar porque la selección se restablece. Mantén copias de seguridad independientes para el origen de software y el destino de hardware. Nunca introduzcas las palabras de recuperación de una cartera de hardware en la aplicación de escritorio para activar CoinJoin.

Sigue la [guía de almacenamiento en frío de Ginger](/es/hardware-wallets/exchange-to-cold-storage/) o la [explicación de CoinJoin-to-wallet de Wasabi](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#can-i-coinjoin-to-another-wallet) para conocer el procedimiento compatible y sus condiciones.

<span id="privacy-and-service-policies" data-ginger-heading="privacidad-y-políticas-del-servicio" aria-hidden="true"></span>

## Privacidad y políticas del servicio

La autocustodia responde a quién puede autorizar gastos. No resuelve todas las preguntas de privacidad o disponibilidad del servicio. CoinJoin dificulta inferir algunos vínculos de propiedad, pero las transacciones siguen siendo públicas. Un exchange conserva sus propios registros; las combinaciones posteriores de monedas, la reutilización de direcciones o las divulgaciones a un destinatario pueden crear nuevos vínculos. La puntuación de privacidad de una cartera no garantiza el anonimato ni la aceptación por un exchange. Consulta [Confianza y límites de CoinJoin](/es/learn-coinjoin/trust-and-limits/).

El operador de Ginger, InvisibleBit LLC, publica restricciones del servicio, incluidas las relativas a ubicaciones y nacionalidad estadounidenses. Sus condiciones también permiten comprobaciones de terceros y el rechazo de entradas concretas. Revisa las [condiciones actuales de Ginger](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt) antes de usar el servicio. Con Wasabi, revisa las políticas del coordinador que configures; la política de comisiones de la cartera no establece las prácticas de admisión ni de tratamiento de datos de ese operador.

<span id="which-fits-your-needs" data-ginger-heading="cuál-encaja-con-tus-necesidades" aria-hidden="true"></span>

## ¿Cuál encaja con tus necesidades?

**Merece la pena considerar Ginger si quieres una conexión con el coordinador proporcionada** y su estructura de comisiones y sus políticas de servicio se adaptan a tus necesidades. Empieza por [Primeros pasos](/es/getting-started/), establece tu copia de seguridad y revisa los [controles de CoinJoin](/es/using-ginger/coinjoin/) antes de participar.

**Merece la pena considerar Wasabi si prefieres elegir un coordinador y necesitas rondas sin comisión del coordinador.** Comprueba el operador y los costes completos de transacción antes de empezar.

Si tu necesidad principal es recibir, conservar y enviar bitcoin con una cartera de hardware, compara primero los dispositivos compatibles y los procedimientos normales de pago. CoinJoin es opcional; su utilidad depende de qué información quieras proteger y de cómo gastarás las monedas resultantes.
