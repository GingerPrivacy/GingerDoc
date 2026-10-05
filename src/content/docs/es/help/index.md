---
doc_id: "help.faq"
title: "Preguntas frecuentes de Ginger Wallet: empieza aquí"
description: "Encuentra respuestas breves sobre fondos ausentes, copias de seguridad, recuperación, espera y comisiones de CoinJoin, pagos pendientes, carteras de hardware y soporte seguro."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nivel de lectura: Empieza aquí. Las respuestas breves y las primeras comprobaciones aparecen antes de la continuación avanzada opcional.

Empieza por la pregunta más cercana a lo que ves. Estas respuestas cubren el uso normal y las primeras comprobaciones seguras; las [preguntas frecuentes avanzadas](/es/help/advanced-faq/) independientes son una continuación opcional para ajustes personalizados y casos especiales.

- [Empieza aquí](#start-here)
- [Recuperación y fondos ausentes](#recovery-and-missing-funds)
- [Conexión y actualizaciones](#connection-and-updates)
- [Conceptos básicos de CoinJoin](#coinjoin-basics)
- [Pagos y dispositivos de hardware](#payments-and-hardware)
- [Obtén ayuda de forma segura](#getting-help-safely)

<span id="start-here" data-ginger-heading="empieza-aquí" aria-hidden="true"></span>

## Empieza aquí

<span id="what-is-ginger-and-does-it-hold-my-bitcoin" data-ginger-heading="qué-es-ginger-y-custodia-mi-bitcoin" aria-hidden="true"></span>

### ¿Qué es Ginger y custodia mi bitcoin?

Ginger es una aplicación de escritorio para recibir y enviar Bitcoin en cadena, con funciones opcionales de privacidad mediante CoinJoin. Tú controlas las claves que autorizan el gasto; un coordinador de CoinJoin no recibe la custodia simplemente porque participes en una ronda. Protege el ordenador y la copia de recuperación, porque controlar las claves no elimina la posibilidad de robo, errores o pérdida de acceso.

<span id="is-there-an-official-mobile-or-web-wallet" data-ginger-heading="existe-una-cartera-móvil-o-web-oficial" aria-hidden="true"></span>

### ¿Existe una cartera móvil o web oficial?

La versión v2.0.26 proporciona software de escritorio para ordenadores compatibles con Windows, macOS y Linux. No proporciona una cartera Android, iOS o de navegador, pagos Lightning ni otras criptomonedas. Empieza por el [sitio web oficial de Ginger](https://gingerwallet.io/) y sus enlaces de versiones; no introduzcas palabras de recuperación en una aplicación o sitio web solo porque use el nombre Ginger.

<span id="do-i-need-an-account-my-own-node-or-a-hardware-wallet" data-ginger-heading="necesito-una-cuenta-un-nodo-propio-o-una-cartera-de-hardware" aria-hidden="true"></span>

### ¿Necesito una cuenta, un nodo propio o una cartera de hardware?

No. La creación normal de una cartera de software utiliza información local de recuperación y no requiere una cuenta de cliente, un nodo propio de Bitcoin ni un dispositivo de hardware. El 2FA opcional utiliza un servicio y los proveedores de compra y venta pueden exigir cuentas o información de identidad, así que esas funciones tienen requisitos adicionales.

<span id="do-i-have-to-use-coinjoin-before-receiving-or-sending" data-ginger-heading="tengo-que-usar-coinjoin-antes-de-recibir-o-enviar" aria-hidden="true"></span>

### ¿Tengo que usar CoinJoin antes de recibir o enviar?

No. La recepción, el envío normal y CoinJoin son acciones independientes. Revisa **Automatically start coinjoin** en **Coinjoin Settings** si no quieres participar sin supervisión mientras aprendes; si una ronda ya está activa, páusala y deja que termine el trabajo crítico.

<span id="can-i-buy-bitcoin-in-ginger-or-receive-an-exchange-withdrawal" data-ginger-heading="puedo-comprar-bitcoin-en-ginger-o-recibir-una-retirada-de-un-exchange" aria-hidden="true"></span>

### ¿Puedo comprar bitcoin en Ginger o recibir una retirada de un exchange?

Puedes usar una dirección nueva de **Receive** para una retirada de Bitcoin en cadena, comprobando la dirección y la red antes de autorizarla en el exchange. Ginger también tiene procesos de proveedores **Buy** y **Sell** donde estén disponibles. Comprueba las condiciones actuales, la cotización y el estado de la orden del proveedor seleccionado; una confirmación de compra del proveedor no es lo mismo que una recepción confirmada de Bitcoin.

<span id="recovery-and-missing-funds" data-ginger-heading="recuperación-y-fondos-ausentes" aria-hidden="true"></span>

## Recuperación y fondos ausentes

<span id="what-do-i-need-to-back-up" data-ginger-heading="de-qué-necesito-hacer-una-copia-de-seguridad" aria-hidden="true"></span>

### ¿De qué necesito hacer una copia de seguridad?

Conserva las palabras de recuperación en su orden original y la frase de contraseña original exacta si utilizaste una. Anota que la frase de contraseña estaba vacía si creaste la cartera sin ella. Estos elementos recuperan el acceso a las claves; las etiquetas y algunos otros registros locales necesitan una copia de archivos independiente.

<span id="is-my-passphrase-just-a-password-i-can-reset" data-ginger-heading="mi-frase-de-contraseña-es-simplemente-una-contraseña-que-puedo-restablecer" aria-hidden="true"></span>

### ¿Mi frase de contraseña es simplemente una contraseña que puedo restablecer?

No. En una cartera de software de Ginger, la frase de contraseña original ayuda a determinar qué claves de Bitcoin se recuperan, además de proteger el secreto almacenado. Otras palabras o una frase de contraseña distinta pueden producir una cartera diferente y válida. Un nombre de cartera, el PIN de un dispositivo de hardware o un código de autenticador no la sustituyen.

<span id="i-have-the-words-but-forgot-the-passphrase-can-ginger-reset-it" data-ginger-heading="tengo-las-palabras-pero-olvidé-la-frase-de-contraseña-puede-ginger-restablecerla" aria-hidden="true"></span>

### Tengo las palabras pero olvidé la frase de contraseña. ¿Puede Ginger restablecerla?

Ginger no puede restablecer la frase de contraseña original y conservar las mismas claves de cartera. Revisa tus registros privados de copia de seguridad y conserva cualquier instalación en la que todavía tengas acceso para gastar. Si aún puedes gastar pero no puedes establecer una copia completa de recuperación, crea y verifica una copia de una cartera nueva y transfiere los fondos cuidadosamente; nunca envíes las palabras a un supuesto ayudante de recuperación.

<span id="can-ginger-show-my-recovery-words-again" data-ginger-heading="puede-ginger-mostrarme-las-palabras-de-recuperación-otra-vez" aria-hidden="true"></span>

### ¿Puede Ginger mostrarme las palabras de recuperación otra vez?

El proceso de creación advierte que no las volverá a mostrar después. **Wallet Settings** → **Tools** → **Verify Recovery Words** comprueba las palabras que proporcionas; no revela una copia olvidada. Si conservas el acceso pero perdiste la copia, establece y verifica una copia de una cartera nueva antes de mover los fondos cuidadosamente.

<span id="why-is-my-recovered-wallet-empty-or-missing-transactions" data-ginger-heading="por-qué-mi-cartera-recuperada-está-vacía-o-le-faltan-transacciones" aria-hidden="true"></span>

### ¿Por qué mi cartera recuperada está vacía o le faltan transacciones?

Comprueba la cartera seleccionada, las palabras originales y la frase de contraseña exacta, y si la sincronización y la recuperación han terminado. Un error al escribir la frase de contraseña puede abrir una cartera distinta y válida sin producir un error de contraseña incorrecta. Conserva los archivos antiguos y compara una transacción conocida antes de cambiar los ajustes; el [diagnóstico de recuperación](/es/help/troubleshooting/#balance-recovery-and-receiving) ofrece las primeras comprobaciones.

<span id="the-sender-says-paid-why-have-i-received-nothing" data-ginger-heading="el-remitente-dice-que-pagó-por-qué-no-he-recibido-nada" aria-hidden="true"></span>

### El remitente dice que pagó. ¿Por qué no he recibido nada?

Pide el identificador de transacción de Bitcoin y comprueba la dirección de recepción prevista y la red. Un servicio puede marcar una orden como pagada antes de difundir su transacción de Bitcoin, y Ginger también necesita sincronizarse antes de mostrarla. Comprueba la transacción y el progreso local antes de pedir al remitente que pague otra vez; consulta el [diagnóstico de recepción](/es/help/troubleshooting/#balance-recovery-and-receiving).

<span id="will-changing-the-network-make-missing-bitcoin-appear" data-ginger-heading="cambiar-la-red-hará-aparecer-el-bitcoin-ausente" aria-hidden="true"></span>

### ¿Cambiar la red hará aparecer el bitcoin ausente?

Usa Main para Bitcoin real en cadena. Otra red tiene monedas diferentes; seleccionarla no mueve ni recupera fondos de mainnet. Comprueba la cartera prevista y la sincronización en vez de cambiar de red para mejorar el aspecto de un indicador de conexión.

<span id="why-has-a-receiving-address-disappeared-does-it-expire" data-ginger-heading="por-qué-ha-desaparecido-una-dirección-de-recepción-caduca" aria-hidden="true"></span>

### ¿Por qué ha desaparecido una dirección de recepción? ¿Caduca?

Una dirección puede salir de la lista de pagos en espera después de recibir un pago u ocultarse; eso no invalida sus claves. Una dirección antigua puede seguir recibiendo bitcoin, así que conserva su copia de seguridad. Usa una dirección nueva para cada nuevo pago para evitar agrupar directamente las recepciones en una dirección pública.

<span id="why-are-receive-or-send-missing" data-ginger-heading="por-qué-no-aparecen-receive-o-send" aria-hidden="true"></span>

### ¿Por qué no aparecen Receive o Send?

La recuperación puede seguir explorando y ocultar las acciones normales de la cartera hasta que termine. Una cartera de solo observación también necesita su dispositivo de firma u otra vía de firma compatible para gastar. Comprueba el tipo de cartera y el progreso antes de reinstalar o crear palabras de sustitución.

<span id="i-lost-my-authenticator-or-my-2fa-code-is-rejected-what-now" data-ginger-heading="perdí-el-autenticador-o-se-rechaza-mi-código-de-2fa-qué-hago" aria-hidden="true"></span>

### Perdí el autenticador o se rechaza mi código de 2FA. ¿Qué hago?

Comprueba que uses la entrada correcta del autenticador, la hora del teléfono y la conexión de Ginger con Tor y el servicio. Conserva los archivos existentes de cartera y 2FA; reinstalar no recrea un secreto de autenticador perdido. Las palabras de recuperación junto con la frase de contraseña original exacta ofrecen una vía independiente de recuperación de claves; usa el [diagnóstico de 2FA](/es/help/troubleshooting/#2fa-and-hardware) antes de modificar archivos.

<span id="connection-and-updates" data-ginger-heading="conexión-y-actualizaciones" aria-hidden="true"></span>

## Conexión y actualizaciones

<span id="do-i-need-tor-browser-or-a-vpn-to-make-ginger-work" data-ginger-heading="necesito-tor-browser-o-una-vpn-para-que-ginger-funcione" aria-hidden="true"></span>

### ¿Necesito Tor Browser o una VPN para que Ginger funcione?

Ginger incluye Tor para sus conexiones habituales de cartera; no necesitas instalar Tor Browser solo para ejecutar la cartera. Un navegador o una VPN independientes no arreglan automáticamente la sincronización de Ginger ni ocultan información que envíes a un proveedor. Mantén activada la protección habitual de Tor mientras sigues las [comprobaciones de conexión](/es/help/troubleshooting/#connection-or-synchronization).

<span id="why-is-ginger-still-connecting-or-synchronizing" data-ginger-heading="por-qué-ginger-sigue-conectándose-o-sincronizando" aria-hidden="true"></span>

### ¿Por qué Ginger sigue conectándose o sincronizando?

Una primera exploración o una cartera recuperada pueden necesitar tiempo, mientras que una exploración atascada puede indicar un problema local o de conexión. Comprueba el acceso a internet, el reloj del ordenador, el espacio libre y cualquier nodo que hayas configurado; anota el estado exacto si el progreso se detiene. Sigue el [diagnóstico de conexión](/es/help/troubleshooting/#connection-or-synchronization) en vez de reiniciar repetidamente o borrar datos de cartera.

<span id="why-did-reinstalling-not-reset-a-broken-setting" data-ginger-heading="por-qué-reinstalar-no-restableció-un-ajuste-defectuoso" aria-hidden="true"></span>

### ¿Por qué reinstalar no restableció un ajuste defectuoso?

Los archivos de la aplicación y los datos de cartera se almacenan por separado, así que una reinstalación normal puede conservar la misma configuración y las mismas carteras. Conserva las copias de seguridad y diagnostica el error real antes de modificar los datos. No borres toda la carpeta de datos como reparación general de fondos ausentes o de un estado de espera.

<span id="coinjoin-basics" data-ginger-heading="conceptos-básicos-de-coinjoin" aria-hidden="true"></span>

## Conceptos básicos de CoinJoin

<span id="why-is-coinjoin-waiting-instead-of-starting" data-ginger-heading="por-qué-coinjoin-espera-en-vez-de-empezar" aria-hidden="true"></span>

### ¿Por qué CoinJoin espera en vez de empezar?

Lee el estado: la cartera puede necesitar confirmaciones, comisiones aceptables, otros participantes, una conexión o monedas aptas. La espera no significa por sí sola que se hayan perdido los fondos. La [tabla de diagnóstico de CoinJoin](/es/help/troubleshooting/#coinjoin-does-not-start) explica los mensajes de la versión publicada y la primera acción para cada uno.

<span id="what-is-the-minimum-amount-and-why-are-some-coins-left-behind" data-ginger-heading="cuál-es-el-importe-mínimo-y-por-qué-quedan-algunas-monedas-fuera" aria-hidden="true"></span>

### ¿Cuál es el importe mínimo y por qué quedan algunas monedas fuera?

No hay un saldo total de cartera que garantice la participación. Cada moneda disponible debe cumplir las condiciones de la ronda y las comprobaciones de admisibilidad y coste de la cartera; algunas monedas pequeñas, sin confirmar o excluidas pueden quedar fuera de una ronda. No combines ni añadas fondos solo para alcanzar un mínimo citado en una guía antigua.

<span id="how-long-will-it-take-and-how-many-rounds-do-i-need" data-ginger-heading="cuánto-tardará-y-cuántas-rondas-necesito" aria-hidden="true"></span>

### ¿Cuánto tardará y cuántas rondas necesito?

No hay una duración garantizada ni un número universal de rondas. Importan las confirmaciones, las comisiones, los participantes disponibles, tus monedas y el objetivo de privacidad seleccionado. Comprueba el estado real y los costes de las rondas completadas en vez de considerar una preferencia temporal como una fecha límite prometida.

<span id="why-did-my-balance-decrease-if-coinjoin-was-described-as-free" data-ginger-heading="por-qué-bajó-mi-saldo-si-coinjoin-se-describía-como-gratuito" aria-hidden="true"></span>

### ¿Por qué bajó mi saldo si CoinJoin se describía como gratuito?

Una exención de la comisión del coordinador no elimina las comisiones de minería de Bitcoin, y cada ronda completada repetida puede costar dinero. Comprueba también si las salidas fueron a otra cartera y si ambas se han sincronizado. Pausa y concilia las transacciones completadas si el cambio no tiene explicación; no supongas que todas las disminuciones inesperadas sean comisiones normales.

<span id="what-coordinator-fee-does-ginger-currently-advertise" data-ginger-heading="qué-comisión-del-coordinador-anuncia-ginger-actualmente" aria-hidden="true"></span>

### ¿Qué comisión del coordinador anuncia Ginger actualmente?

Con los ajustes actuales, cada entrada de 0.03 BTC (3 000 000 satoshis) o menos no paga comisión del coordinador, incluida una entrada de exactamente 0.03 BTC. Por encima de ese umbral, la comisión es el 0.3% del valor total de la entrada salvo que se aplique otra exención, como una remezcla apta. El umbral se aplica por separado a cada entrada, no al saldo total de la cartera. Las comisiones de minería siguen aplicándose. Vuelve a consultar la [explicación actual de comisiones de Ginger](https://gingerwallet.io/) y la ronda ofrecida antes de participar.

<span id="can-i-stop-coinjoin-or-turn-off-the-computer" data-ginger-heading="puedo-detener-coinjoin-o-apagar-el-ordenador" aria-hidden="true"></span>

### ¿Puedo detener CoinJoin o apagar el ordenador?

Usa el control de pausa del reproductor para detener las participaciones posteriores y deja que termine cualquier fase crítica. La suspensión, la pérdida de conexión o un apagado forzado pueden interrumpir una ronda activa; usa la salida normal de la aplicación y deja que complete su procedimiento de cierre. Una transacción ya difundida continúa en Bitcoin después de cerrar la aplicación.

<span id="why-is-there-a-transaction-when-i-never-pressed-send" data-ginger-heading="por-qué-hay-una-transacción-si-nunca-pulsé-send" aria-hidden="true"></span>

### ¿Por qué hay una transacción si nunca pulsé Send?

El CoinJoin automático puede crear transacciones compartidas después de activar la participación, sin un pago normal mediante **Send** cada vez. Inspecciona la transacción, las salidas que te pertenecen, las comisiones y cualquier selección de cartera de destino en vez de suponer que un gasto inexplicado tiene que ser CoinJoin. Si sigue sin explicación o las claves pueden estar expuestas, conserva los registros y protege los fondos restantes.

<span id="can-i-spend-at-99-and-does-100-mean-i-am-anonymous" data-ginger-heading="puedo-gastar-al-99-el-100-significa-que-soy-anónimo" aria-hidden="true"></span>

### ¿Puedo gastar al 99%? ¿El 100% significa que soy anónimo?

Puedes hacer un pago normal cuando los fondos se puedan gastar y el proceso de envío esté disponible; el porcentaje de privacidad no es un requisito de gasto de Bitcoin. Es la estimación local de Ginger bajo el objetivo seleccionado, no una garantía sobre lo que sabe otra persona. Un pago, una dirección reutilizada o un exchange que te identifica todavía pueden crear un vínculo.

<span id="why-is-the-play-control-missing-when-all-funds-are-private" data-ginger-heading="por-qué-falta-el-control-de-reproducción-cuando-todos-los-fondos-son-privados" aria-hidden="true"></span>

### ¿Por qué falta el control de reproducción cuando todos los fondos son privados?

El reproductor manual habitual puede ocultar la reproducción cuando todos los fondos cumplen el objetivo de privacidad de la cartera. El inicio normal también rechaza un conjunto disponible de monedas exclusivamente privadas, así que elegir otro destino no fuerza otra ronda. Si solo quieres mover esos fondos, considera un pago normal.

<span id="payments-and-hardware" data-ginger-heading="pagos-y-dispositivos-de-hardware" aria-hidden="true"></span>

## Pagos y dispositivos de hardware

<span id="why-is-a-payment-still-pending-after-the-estimated-time" data-ginger-heading="por-qué-un-pago-sigue-pendiente-después-del-tiempo-estimado" aria-hidden="true"></span>

### ¿Por qué un pago sigue pendiente después del tiempo estimado?

La estimación no es una fecha límite: las transacciones que compiten y la llegada irregular de bloques afectan a la confirmación. Inspecciona el historial; si Ginger ofrece **Speed Up Transaction**, revisa la comisión adicional antes de usarlo. Un error de conexión o un retraso no son motivo para enviar un segundo pago al destinatario.

<span id="can-i-cancel-a-payment-or-recover-one-sent-to-the-wrong-address" data-ginger-heading="puedo-cancelar-un-pago-o-recuperar-uno-enviado-a-la-dirección-equivocada" aria-hidden="true"></span>

### ¿Puedo cancelar un pago o recuperar uno enviado a la dirección equivocada?

Ginger no puede revertir un pago confirmado. Antes de confirmarse, puede ofrecer **Cancel Transaction** para una transacción adecuada, pero es un intento de sustitución que puede perder la carrera contra la confirmación. No prometas al destinatario que el pago original se ha cancelado hasta conocer el resultado.

<span id="why-are-there-insufficient-funds-when-my-balance-looks-large-enough" data-ginger-heading="por-qué-no-hay-fondos-suficientes-si-mi-saldo-parece-bastante-grande" aria-hidden="true"></span>

### ¿Por qué no hay fondos suficientes si mi saldo parece bastante grande?

El total mostrado no siempre está íntegramente disponible para gastar: los fondos pueden estar sin confirmar, participando temporalmente en CoinJoin o ser insuficientes después de añadir la comisión. Comprueba la cartera seleccionada, el importe y la vista previa final. Al enviar todo el importe disponible, la comisión puede reducir lo que llegue, así que compara el importe del destinatario con cualquier factura de importe fijo.

<span id="why-did-my-payment-create-another-address-or-leave-change" data-ginger-heading="por-qué-mi-pago-creó-otra-dirección-o-dejó-cambio" aria-hidden="true"></span>

### ¿Por qué mi pago creó otra dirección o dejó cambio?

Un pago puede gastar una parte mayor de bitcoin y devolver el valor sobrante a tu propia cartera como cambio. Una dirección de cambio nueva es normal y no significa que se enviara dinero a un desconocido. No necesitas devolverlo manualmente; revisa la transacción completa si algún importe sigue sin explicación.

<span id="can-i-use-a-hardware-wallet-including-after-coinjoin" data-ginger-heading="puedo-usar-una-cartera-de-hardware-incluso-después-de-coinjoin" aria-hidden="true"></span>

### ¿Puedo usar una cartera de hardware, incluso después de CoinJoin?

Ginger admite los procedimientos documentados de recepción y firma de carteras de hardware compatibles. Mantén las palabras de recuperación del dispositivo en su vía de recuperación, fuera del ordenador. Una cartera de hardware puede recibir salidas aptas de CoinJoin, pero no es el origen de firma del CoinJoin habitual de Ginger; ese encaminamiento opcional es una [pregunta avanzada](/es/help/advanced-faq/#can-coinjoin-send-directly-to-my-hardware-wallet).

<span id="will-an-exchange-accept-my-bitcoin-after-coinjoin" data-ginger-heading="aceptará-un-exchange-mi-bitcoin-después-de-coinjoin" aria-hidden="true"></span>

### ¿Aceptará un exchange mi bitcoin después de CoinJoin?

Ginger puede preparar un pago normal de Bitcoin, pero no puede garantizar la aceptación de un proveedor ni su política de cuentas. Comprueba los requisitos actuales del exchange previsto antes de enviar o vender. Una puntuación de privacidad alta no es un certificado de aceptación, y ninguna operación adicional de la cartera puede prometer ese resultado.

<span id="getting-help-safely" data-ginger-heading="obtén-ayuda-de-forma-segura" aria-hidden="true"></span>

## Obtén ayuda de forma segura

<span id="what-can-i-share-with-support-and-where-do-i-report-a-bug" data-ginger-heading="qué-puedo-compartir-con-soporte-y-dónde-informo-de-un-error" aria-hidden="true"></span>

### ¿Qué puedo compartir con soporte y dónde informo de un error?

Usa los enlaces del [repositorio oficial de Ginger](https://github.com/GingerPrivacy/GingerWallet/issues) y proporciona la versión, el sistema operativo, el error exacto y pasos sin secretos. Revisa cualquier fragmento de registro antes de compartirlo; nunca envíes palabras de recuperación, frases de contraseña, códigos de autenticador ni una carpeta completa de datos de cartera. El soporte no necesita una validación de cartera mediante un sitio web ni un pago de activación; consulta [cómo informar de un problema de forma útil](/es/help/troubleshooting/#report-a-useful-issue).

<span id="about-this-manual" data-ginger-heading="acerca-de-este-manual" aria-hidden="true"></span>

## Acerca de este manual

Este manual en inglés describe Ginger v2.0.26 y usa las etiquetas de su interfaz en inglés. La documentación y las traducciones pueden contener errores. Ginger no garantiza su exactitud; verifica los detalles críticos en la aplicación antes de continuar. Si encuentras un error, [comunícalo en el repositorio de documentación](https://github.com/GingerPrivacy/GingerDoc/issues) sin incluir secretos de cartera.
