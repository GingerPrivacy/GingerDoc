---
doc_id: "help.advanced-faq"
title: "Preguntas frecuentes avanzadas de Ginger Wallet"
description: "Encuentra respuestas de la versión publicada de Ginger sobre escaneo de recuperación, metadatos, xpub, control de monedas, progreso de privacidad, coste completo CoinJoin, monederos de salida y compartición de datos."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Empieza por las preguntas frecuentes básicas si estás configurando o utilizando un monedero por primera vez.

Estas preguntas cubren ajustes personalizados, decisiones más profundas de privacidad y casos especiales de recuperación. Para las preguntas habituales del primer uso, vuelve a [las preguntas frecuentes básicas](/es/help/).

- [Recuperación y datos locales](#recovery-and-local-data)
- [Selección de monedas y gasto](#coin-selection-and-spending)
- [Costes y progreso de CoinJoin](#coinjoin-costs-and-progress)
- [Hardware y límites de privacidad](#hardware-and-privacy-boundaries)

<span id="recovery-and-local-data" data-ginger-heading="recuperación-y-datos-locales" aria-hidden="true"></span>

## Recuperación y datos locales

<span id="why-can-the-same-words-produce-a-different-wallet" data-ginger-heading="por-qué-las-mismas-palabras-pueden-producir-un-monedero-diferente" aria-hidden="true"></span>

### ¿Por qué las mismas palabras pueden producir un monedero diferente?

La frase de contraseña original interviene en la derivación de las claves, y otra aplicación de monedero puede utilizar una cuenta o un tipo de dirección diferentes. Un conjunto válido de palabras por sí solo no demuestra que las aplicaciones estén mostrando la misma cuenta. Comprueba primero la frase de contraseña original y el progreso del escaneo; investiga la compatibilidad de cuentas solo después de realizar las comprobaciones habituales de recuperación.

<span id="when-should-i-increase-the-recovery-gap-limit" data-ginger-heading="cuándo-debo-aumentar-el-límite-de-direcciones-sin-usar-de-la-recuperación" aria-hidden="true"></span>

### ¿Cuándo debo aumentar el límite de direcciones sin usar de la recuperación?

Considéralo cuando tengas pruebas de muchas direcciones sin usar antes de una dirección que recibió un pago, por ejemplo direcciones generadas en otra aplicación. **Advanced Recovery Options** → **Minimum Gap Limit:** amplía el escaneo y puede aumentar su trabajo y duración; en v2.0.26 la pantalla de recuperación comienza con 114. No corrige palabras erróneas, una frase de contraseña equivocada ni una cuenta incompatible.

<span id="why-did-labels-or-privacy-information-change-after-recovery" data-ginger-heading="por-qué-cambiaron-las-etiquetas-o-la-información-de-privacidad-después-de-recuperar" aria-hidden="true"></span>

### ¿Por qué cambiaron las etiquetas o la información de privacidad después de recuperar?

Las palabras restauran las claves, no todas las notas privadas ni cada elemento del análisis local de transacciones. El JSON del monedero y los datos ATTR correspondientes cumplen funciones diferentes; conserva los archivos originales y utiliza copias durante la investigación. La ausencia de etiquetas o un cambio de puntuación local no demuestran por sí solos que haya cambiado una transacción Bitcoin o su historial público.

<span id="can-i-use-the-same-recovery-words-in-two-wallet-applications" data-ginger-heading="puedo-utilizar-las-mismas-palabras-de-recuperación-en-dos-aplicaciones" aria-hidden="true"></span>

### ¿Puedo utilizar las mismas palabras de recuperación en dos aplicaciones?

Las aplicaciones compatibles pueden controlar las mismas claves, pero eso no crea un monedero nuevo ni revoca la información compartida con la aplicación anterior. La segunda aplicación puede revelar direcciones o una clave pública extendida a sus servicios, y gastar simultáneamente desde ambas puede generar confusión sobre qué monedas siguen disponibles. No escribas palabras de recuperación de un dispositivo de hardware en el ordenador simplemente para conectar un dispositivo.

<span id="what-does-an-exposed-address-or-xpub-allow-someone-to-do" data-ginger-heading="qué-permite-hacer-a-alguien-una-dirección-o-un-xpub-expuestos" aria-hidden="true"></span>

### ¿Qué permite hacer a alguien una dirección o un xpub expuestos?

Una dirección señala una parte concreta del historial público de transacciones. Una clave pública extendida puede revelar muchas direcciones, incluidas las futuras dentro de su ámbito de derivación, pero normalmente no concede por sí sola autoridad para gastar. Las direcciones nuevas bajo la misma rama expuesta no revocan ese seguimiento; los secretos de firma expuestos requieren una respuesta diferente utilizando claves nuevas.

<span id="does-the-2fa-file-recover-the-wallet-without-the-service" data-ginger-heading="el-archivo-2fa-recupera-el-monedero-sin-el-servicio" aria-hidden="true"></span>

### ¿El archivo 2FA recupera el monedero sin el servicio?

No trates `2fa_info.gws` como una clave de recuperación independiente y sin conexión. El inicio normal con 2FA utiliza un identificador de instalación y la verificación del autenticador con un servicio para obtener el secreto adicional de cifrado de archivos. Conserva las palabras y la frase de contraseña original de forma independiente; activar 2FA no revoca una clave copiada.

<span id="how-do-i-delete-a-local-wallet-without-confusing-deletion-with-revocation" data-ginger-heading="cómo-elimino-un-monedero-local-sin-confundir-eliminación-con-revocación" aria-hidden="true"></span>

### ¿Cómo elimino un monedero local sin confundir eliminación con revocación?

Haz primero una copia de seguridad y después utiliza **Wallet Settings** → **Tools** → **Delete Wallet** y lee la confirmación. Eliminar los datos locales no borra transacciones Bitcoin ni invalida copias de las palabras de recuperación. Si las claves de firma fueron expuestas, borrar simplemente el monedero no impide que otra persona gaste con ellas.

<span id="coin-selection-and-spending" data-ginger-heading="selección-de-monedas-y-gasto" aria-hidden="true"></span>

## Selección de monedas y gasto

<span id="what-is-the-difference-between-a-coin-an-address-and-a-wallet" data-ginger-heading="qué-diferencia-hay-entre-una-moneda-una-dirección-y-un-monedero" aria-hidden="true"></span>

### ¿Qué diferencia hay entre una moneda, una dirección y un monedero?

Una moneda, o UTXO, es una salida sin gastar de una transacción Bitcoin anterior. Una dirección puede haber recibido varias monedas, y un monedero puede gestionar muchas direcciones y monedas. Las decisiones sobre gasto y CoinJoin afectan a las monedas disponibles, no solo al saldo total; [el glosario](/es/help/glossary/) explica estos términos.

<span id="does-combining-coinjoined-coins-always-destroy-all-privacy" data-ginger-heading="combinar-monedas-de-coinjoin-siempre-destruye-toda-la-privacidad" aria-hidden="true"></span>

### ¿Combinar monedas de CoinJoin siempre destruye toda la privacidad?

Ninguna regla única describe todos los observadores o pagos. Un gasto conjunto normal puede asociar sus entradas, especialmente si alguna ya estaba vinculada a una identidad, pero no revela automáticamente todos los vínculos anteriores de propiedad. Revisa las entradas y el cambio del pago que realmente necesitas, en lugar de tratar «combinar siempre» o «no combinar nunca» como garantías.

<span id="does-a-reused-address-automatically-publish-my-entire-wallet" data-ginger-heading="una-dirección-reutilizada-publica-automáticamente-todo-mi-monedero" aria-hidden="true"></span>

### ¿Una dirección reutilizada publica automáticamente todo mi monedero?

No, pero las recepciones de esa dirección pueden inspeccionarse juntas y vincularse con quien la publicó o facilitó. Los gastos conjuntos posteriores y la información almacenada en otros lugares pueden revelar más. Las etiquetas ayudan a tus decisiones locales; no imponen una separación pública ni demuestran que la selección automática conservará el límite que deseas.

<span id="does-manual-control-force-exactly-those-inputs-into-the-final-payment" data-ginger-heading="manual-control-obliga-a-utilizar-exactamente-esas-entradas-en-el-pago-final" aria-hidden="true"></span>

### ¿Manual Control obliga a utilizar exactamente esas entradas en el pago final?

**Manual Control** selecciona monedas candidatas para un pago normal. Antes de autorizar, revisa las entradas realmente utilizadas en la vista previa final, el importe del destinatario, el cambio y la comisión. Esto es independiente de la selección de entradas CoinJoin y no fija una lista exacta para una ronda futura.

<span id="should-i-consolidate-many-small-coins-while-fees-are-low" data-ginger-heading="debo-consolidar-muchas-monedas-pequeñas-cuando-las-comisiones-son-bajas" aria-hidden="true"></span>

### ¿Debo consolidar muchas monedas pequeñas cuando las comisiones son bajas?

La consolidación puede reducir las entradas necesarias más adelante, pero la transacción que las combina cuesta una comisión y puede asociar actividades antes separadas. Una tasa menor cambia ese coste, no la revelación de información. Considera el propósito, valor e historial conocido de las monedas antes de combinarlas.

<span id="why-is-a-tiny-payment-missing-and-does-exclude-coins-freeze-it" data-ginger-heading="por-qué-falta-un-pago-diminuto-y-exclude-coins-lo-congela" aria-hidden="true"></span>

### ¿Por qué falta un pago diminuto y Exclude Coins lo congela?

Comprueba la sincronización y el umbral de polvo configurado antes de concluir que se perdió una salida diminuta. **Exclude Coins** afecta a la participación CoinJoin, no al gasto normal, y no congela una moneda. Las recepciones diminutas inesperadas no necesitan una respuesta inmediata; evalúa su coste de gasto y posibles asociaciones antes de incluirlas en un pago.

<span id="can-i-set-any-custom-fee-rate-or-guarantee-a-confirmation-time" data-ginger-heading="puedo-fijar-cualquier-tasa-personalizada-o-garantizar-un-tiempo-de-confirmación" aria-hidden="true"></span>

### ¿Puedo fijar cualquier tasa personalizada o garantizar un tiempo de confirmación?

No. El editor manual publicado rechaza tasas inferiores a 1 sat/vByte, y la política de red puede exigir más que ese mínimo. Una tasa personalizada sigue compitiendo con otras transacciones y no puede reservar un plazo de confirmación. Revisa la comisión total, no solo la tasa, antes de confirmar.

<span id="coinjoin-costs-and-progress" data-ginger-heading="costes-y-progreso-de-coinjoin" aria-hidden="true"></span>

## Costes y progreso de CoinJoin

<span id="why-can-the-private-balance-percentage-differ-from-overall-progress" data-ginger-heading="por-qué-puede-diferir-el-porcentaje-de-saldo-privado-del-progreso-global" aria-hidden="true"></span>

### ¿Por qué puede diferir el porcentaje de saldo privado del progreso global?

Son medidas locales diferentes. El progreso global pondera por valor el avance de la puntuación de cada moneda hacia el objetivo, mientras el saldo privado coloreado cuenta el valor que ya lo cumple. Ninguno es una probabilidad medida de que un observador externo pueda identificarte. Las dos vistas pueden diferir aunque ambos saldos sean correctos.

<span id="why-can-progress-fall-or-change-when-i-adjust-the-target" data-ginger-heading="por-qué-puede-bajar-el-progreso-o-cambiar-al-ajustar-el-objetivo" aria-hidden="true"></span>

### ¿Por qué puede bajar el progreso o cambiar al ajustar el objetivo?

Recibir fondos, gastar monedas juntas, restaurar sin el análisis local o cambiar el objetivo puede modificar la visualización. Reducir el objetivo puede reclasificar monedas sin cambiar su historial publicado. Investiga las transacciones y ajustes implicados en vez de suponer que una puntuación distinta demuestra robo o garantiza un nuevo resultado de privacidad.

<span id="can-i-choose-exactly-which-coins-join-a-round" data-ginger-heading="puedo-elegir-exactamente-qué-monedas-participan-en-una-ronda" aria-hidden="true"></span>

### ¿Puedo elegir exactamente qué monedas participan en una ronda?

El cliente selecciona entradas elegibles con los ajustes CoinJoin publicados. Puedes excluir monedas concretas y modificar las preferencias disponibles, pero la selección manual de un envío normal no fuerza una lista de entradas CoinJoin. La exclusión está asociada a esas monedas; no es una regla que reserve todas las recepciones futuras de la misma dirección.

<span id="what-do-rejected-coins-or-a-blame-round-mean" data-ginger-heading="qué-significan-monedas-rechazadas-o-una-ronda-de-atribución-de-fallos" aria-hidden="true"></span>

### ¿Qué significan monedas rechazadas o una ronda de atribución de fallos?

Una ronda de atribución de fallos es un reintento del protocolo tras un intento que no pudo completarse; no es una instrucción para identificar o acusar a otro usuario. Ante un rechazo o una indisponibilidad temporal debes examinar el motivo exacto y el estado actual. Ningún mensaje transfiere por sí solo el control de los fondos al coordinador; consulta [la tabla de estados publicados](/es/help/troubleshooting/#coinjoin-does-not-start).

<span id="how-do-i-reconcile-the-full-cost-of-a-round" data-ginger-heading="cómo-concilio-el-coste-completo-de-una-ronda" aria-hidden="true"></span>

### ¿Cómo concilio el coste completo de una ronda?

Suma el valor de tus entradas gastadas y resta todas las salidas que te pertenecen de esa transacción, incluidas las enviadas a otro monedero. La diferencia puede incluir cargos de coordinador, comisiones de minería y una diferencia restante de asignación de salidas. No cuentes como tuyas las salidas de otro participante ni supongas que una etiqueta de comisión cubre necesariamente toda la diferencia.

<span id="is-a-remix-exemption-permanent-or-applied-to-my-entire-balance" data-ginger-heading="una-exención-de-remix-es-permanente-o-se-aplica-a-todo-mi-saldo" aria-hidden="true"></span>

### ¿Una exención de remix es permanente o se aplica a todo mi saldo?

No. Es una regla de elegibilidad de entradas bajo la política de la ronda ofrecida, no un derecho perpetuo para todas las transacciones de un monedero. La política anunciada de Ginger incluye remixes elegibles y un gasto directo mediante una transacción; las comisiones de minería siguen siendo pagaderas. Revisa las condiciones actuales en lugar de dividir o mover monedas solo para perseguir una exención supuesta.

<span id="hardware-and-privacy-boundaries" data-ginger-heading="hardware-y-límites-de-privacidad" aria-hidden="true"></span>

## Hardware y límites de privacidad

<span id="can-coinjoin-send-directly-to-my-hardware-wallet" data-ginger-heading="puede-coinjoin-enviar-directamente-a-mi-monedero-de-hardware" aria-hidden="true"></span>

### ¿Puede CoinJoin enviar directamente a mi monedero de hardware?

Un monedero de software elegible puede seleccionar un monedero de hardware ofrecido y cargado en **Coinjoin to this wallet**. El destino recibe las salidas de esa ronda sin esperar un evento separado de logro del objetivo; el inicio normal no fuerza una ronda de candidatos ya privados. Comprueba el destino después de cada reinicio, porque la selección se restablece, y nunca importes la semilla de hardware al ordenador para hacer que funcione.

<span id="does-an-own-node-replace-every-ginger-service-or-make-tor-unnecessary" data-ginger-heading="un-nodo-propio-sustituye-todos-los-servicios-de-ginger-o-hace-innecesario-tor" aria-hidden="true"></span>

### ¿Un nodo propio sustituye todos los servicios de Ginger o hace innecesario Tor?

No. Un nodo configurado puede cumplir funciones concretas, como suministrar bloques o estimaciones de comisión, mientras CoinJoin y los flujos opcionales de proveedores o 2FA pueden seguir contactando sus servicios. Tor aborda la exposición de conexión, mientras un servicio receptor sigue viendo el contenido de la solicitud. Revisa el flujo específico en lugar de suponer que configurar un nodo implica ausencia de solicitudes externas.

<span id="does-payjoin-hide-my-payment-from-its-recipient" data-ginger-heading="payjoin-oculta-mi-pago-al-destinatario" aria-hidden="true"></span>

### ¿PayJoin oculta mi pago al destinatario?

No. El destinatario ya conoce su solicitud y puede ver el pago propuesto durante la negociación. La colaboración exitosa puede debilitar las suposiciones de propiedad de un observador externo, pero los patrones y demás información pueden limitar el beneficio. Ginger puede recurrir a un pago normal si falla la construcción, así que autorizar no garantiza que la transacción final utilizara PayJoin.

<span id="how-do-i-prove-control-of-an-address-without-paying" data-ginger-heading="cómo-demuestro-control-de-una-dirección-sin-pagar" aria-hidden="true"></span>

### ¿Cómo demuestro control de una dirección sin pagar?

Utiliza **Sign Message** para una dirección del monedero, lee la declaración exacta y comparte la firma resultante solo con el verificador previsto. Sigue importando la compatibilidad de dispositivo, tipo de dirección y verificador. Firmar no transfiere bitcoin ni prueba la propiedad de todas las direcciones; puede vincular la dirección firmada con la identidad conocida por el verificador.

<span id="what-information-do-secret-hunt-and-buysell-services-receive" data-ginger-heading="qué-información-reciben-secret-hunt-y-los-servicios-de-compraventa" aria-hidden="true"></span>

### ¿Qué información reciben Secret Hunt y los servicios de compra/venta?

Las comprobaciones pertinentes de Secret Hunt pueden enviar identificadores de ronda y transacción, un outpoint de entrada y una prueba de control. La validación de direcciones y los pedidos de compra/venta envían la dirección y datos requeridos; las webs de proveedores tienen sus propias revelaciones de identidad y navegador. Son flujos opcionales separados, por lo que la privacidad de la sincronización habitual no debe generalizarse a todos ellos.
