---
doc_id: "help.glossary"
title: "Glosario de Bitcoin y Ginger Wallet"
description: "Comprende los términos usados en Ginger: UTXO, cambio, frase de contraseña, CoinJoin, puntuación de anonimato, Tor, PSBT y otros."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

<span id="amounts-and-transactions" data-ginger-heading="importes-y-transacciones" aria-hidden="true"></span>

## Importes y transacciones

| Término | Significado para quien usa una cartera |
| --- | --- |
| Bitcoin /es/ BTC | La red y su unidad monetaria. Una cartera gestiona claves y transacciones en vez de almacenar monedas físicas. |
| Satoshi /es/ sat | Una cienmillonésima de bitcoin: 100,000,000 sats = 1 BTC. |
| Dirección | Un destino de pago derivado de condiciones de gasto. Usa una nueva para cada recepción. |
| UTXO /es/ moneda | Una salida de transacción sin gastar, disponible para gastarse como una entrada completa. |
| Entrada | Una referencia a una salida anterior que se está gastando. Varias entradas pueden financiar una transacción. |
| Salida | Un nuevo destino y valor creados por una transacción. |
| Cambio | El valor devuelto a tu cartera cuando las entradas seleccionadas superan el pago más la comisión. |
| Identificador de transacción /es/ txid | Un identificador de una transacción. Compartirlo revela a qué transacción pública te refieres. |
| Mempool | La colección de transacciones sin confirmar de un nodo. Los distintos nodos pueden tener visiones diferentes. |
| Confirmación | La inclusión en un bloque, seguida por otros bloques que se construyen sobre él. |
| Tasa de comisión | Los satoshis pagados por byte virtual del tamaño de una transacción; es distinta de la comisión total. |
| vByte | La unidad de tamaño utilizada para comparar tasas de comisión entre transacciones con distintos datos de testigo. |
| RBF | Sustitución por comisión: una transacción pendiente puede sustituirse según la política de los nodos, normalmente para aumentar su comisión. |
| CPFP | El hijo paga por el padre: gastar una salida con una transacción hija de mayor comisión puede incentivar también la confirmación de su transacción padre sin confirmar. |
| Polvo | Un importe demasiado pequeño para ser útil según una política o un supuesto de costes concretos. El umbral de una cartera y la política de la red no son necesariamente lo mismo. |

<span id="the-network-in-context" data-ginger-heading="la-red-en-contexto" aria-hidden="true"></span>

## La red en contexto

| Término | Significado para quien usa una cartera |
| --- | --- |
| Bloque /es/ cadena de bloques | Un conjunto de transacciones y la cadena de bloques que se construye sobre el historial anterior. |
| Minero /es/ prueba de trabajo | Un participante que construye bloques candidatos y realiza el trabajo utilizado por las reglas de selección de cadena de Bitcoin. |
| Transacción coinbase | La primera transacción de un bloque, que crea su recompensa de minería permitida; no está relacionada con una cuenta de un exchange concreto. Sus salidas requieren madurez antes de gastarse. |
| Reglas de consenso | Las reglas que aplica un nodo validador para decidir si los bloques y transacciones son válidos. |
| Dificultad | Una medida que regula la prueba de trabajo necesaria para un bloque; no determina el saldo de tu cartera. |
| Mainnet /es/ RegTest | Respectivamente, la red real de Bitcoin y un modo local de pruebas independiente. Las monedas no se mueven entre ellos. |
| BIP | Una propuesta de mejora de Bitcoin que documenta un estándar o proceso propuesto. Que un BIP esté publicado no significa que todas las carteras lo implementen. |
| Cartera HD | Una cartera determinista jerárquica que deriva muchas claves a partir de material secreto inicial y convenciones. |
| Hash | Un identificador compacto calculado a partir de datos. Un identificador de transacción identifica datos, no el nombre de cuenta de una persona. |
| Fungibilidad | La intercambiabilidad práctica de las unidades; las clasificaciones de historial realizadas por terceros pueden afectar a su tratamiento aunque sean bitcoin válidos. |

Lightning, los canales de pago, la construcción de multifirma, la configuración de testnet pública o Signet y los detalles internos de scripts quedan fuera de los procedimientos documentados para usuarios finales de esta versión. Su presencia en un glosario general de Bitcoin no demuestra que sean funciones de Ginger.

<span id="keys-and-recovery" data-ginger-heading="claves-y-recuperación" aria-hidden="true"></span>

## Claves y recuperación

| Término | Significado para quien usa una cartera |
| --- | --- |
| Clave privada | La información secreta que autoriza el gasto. Nunca la compartas con soporte. |
| Clave pública | La información usada para verificar firmas; no es un secreto de gasto, pero puede seguir siendo sensible para la privacidad. |
| Palabras de recuperación /es/ frase mnemónica /es/ frase semilla | La copia ordenada de palabras a partir de la cual se pueden recrear las claves de cartera con la frase de contraseña y las convenciones de cartera correctas. |
| Frase de contraseña BIP39 | Texto adicional usado con las palabras de recuperación para derivar una cartera. Cada frase de contraseña distinta selecciona claves diferentes. |
| PIN del dispositivo | Un control de acceso de la cartera física. No es lo mismo que una frase de contraseña BIP39. |
| 2FA | Un segundo factor de autenticación. Ginger usa un autenticador y un cifrado local de archivos de cartera dependiente de un servicio al iniciar. |
| xpub /es/ clave pública extendida | Información que permite derivar muchas direcciones públicas relacionadas. No puede firmar directamente, pero puede exponer la actividad de una cartera. |
| Ruta de derivación /es/ cuenta | Una convención que identifica una rama de las claves de una cartera. Las herramientas de recuperación necesitan convenciones compatibles. |
| Límite de direcciones sin usar | La secuencia de direcciones sin usar que una exploración de recuperación tolera antes de dejar de buscar en una rama. |
| Cartera de solo observación | Un registro de cartera que puede observar la actividad pero carece de las claves locales de firma. Un dispositivo físico puede aportar la firma por separado. |
| Cartera física | Un dispositivo independiente diseñado para proteger claves y aprobar transacciones compatibles. |
| PSBT | Un archivo de transacción de Bitcoin parcialmente firmada que contiene una transacción propuesta e información de firma. |
| SegWit /es/ Taproot | Formatos de salida y gasto de Bitcoin. Las direcciones nativas de recepción de mainnet suelen comenzar por `bc1q` y `bc1p`, respectivamente. |

<span id="privacy-and-ginger" data-ginger-heading="privacidad-y-ginger" aria-hidden="true"></span>

## Privacidad y Ginger

| Término | Significado para quien usa una cartera |
| --- | --- |
| CoinJoin | Una transacción colaborativa con entradas de varios participantes, destinada a dificultar la inferencia de vínculos de propiedad. |
| WabiSabi | El protocolo basado en credenciales utilizado para coordinar CoinJoin de Ginger. No borra la transacción de la cadena de bloques. |
| Coordinador | Un servicio que organiza una ronda. Puede afectar a la disponibilidad y la admisibilidad sin conservar normalmente las claves privadas de los participantes. |
| Remezcla | Una participación adicional en CoinJoin utilizando fondos que cumplen las condiciones de remezcla del servicio; las comisiones de minería pueden seguir aplicándose. |
| Puntuación de anonimato | La estimación local de Ginger utilizada para clasificar la privacidad de las monedas, no un recuento verificado de personas independientes. |
| Conjunto de anonimato | Un grupo conceptual de alternativas plausibles. No es automáticamente idéntico a la puntuación calculada por la cartera. |
| Clúster | Direcciones o monedas que un observador infiere que pertenecen a un mismo conjunto. Algunas asociaciones son hechos; otras son heurísticas que pueden fallar. |
| Reutilización de direcciones | Recibir más de una vez en la misma dirección, vinculando directamente esas recepciones. |
| Control de monedas | La inspección y selección deliberada de monedas para un pago. |
| Tor | Un sistema de retransmisión de red que ayuda a separar las conexiones de una aplicación de la dirección IP del usuario. |
| Filtro de bloques | Un resumen compacto usado para identificar bloques que puedan contener transacciones relevantes para la cartera antes de procesar esos bloques localmente. |
| Nodo completo | Software que valida datos de Bitcoin según sus reglas de consenso. Cumple una función distinta de la de un coordinador de CoinJoin. |
| PayJoin | Un pago colaborativo en el que el receptor puede aportar una entrada. El procedimiento de envío publicado de Ginger tiene límites de compatibilidad y un pago alternativo. |
| Discreet Mode | La ocultación de campos sensibles compatibles en pantalla, no cifrado ni un bloqueo de cartera. |
| KYC | El proceso de verificación de identidad de un proveedor. Tor no oculta la información que se le envía directamente. |
| Moneda fiduciaria | La moneda emitida por un gobierno, usada para cotizaciones o estimaciones visualizadas; es distinta de los BTC liquidados en cadena. |

Términos como «privado» y «seguro» describen propiedades distintas. Pregunta qué se protege, de quién y bajo qué condiciones, en vez de tratar cualquiera de esas palabras como una garantía incondicional.
