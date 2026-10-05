---
doc_id: "getting-started.start-here"
title: "Empieza aquí: tus primeros pasos con Ginger"
description: "Aprende qué hace Ginger, protege tu copia de seguridad de recuperación y sigue un camino sencillo para recibir y enviar antes de explorar funciones avanzadas opcionales."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Empieza aquí
prev: false
next:
  link: /getting-started/install/
  label: Instala Ginger Wallet
---

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son lecturas posteriores opcionales.

Ginger es una aplicación para recibir y enviar bitcoin en tu ordenador. Tú controlas la información que permite gastar tus bitcoin. Ginger también puede dificultar el seguimiento del historial de pagos mediante una función opcional llamada CoinJoin.

Puedes aprender primero el funcionamiento normal del monedero. No necesitas tu propio nodo Bitcoin, un dispositivo de hardware ni ajustes CoinJoin avanzados para crear un monedero de software.

<!-- Conserva enlaces a las preguntas publicadas anteriormente en esta página. -->
<span id="whats-the-officially-supported-operating-systems" aria-hidden="true"></span>
<span id="is-there-an-androidios-version" aria-hidden="true"></span>
<span id="does-ginger-support-altcoins" aria-hidden="true"></span>
<span id="what-are-the-minimal-requirements-to-run-ginger" aria-hidden="true"></span>
<span id="do-i-need-to-run-tor" aria-hidden="true"></span>

<span id="1-install-the-real-application" data-ginger-heading="1-instala-la-aplicación-auténtica" aria-hidden="true"></span>

## 1. Instala la aplicación auténtica

Sigue [Instala Ginger Wallet](/es/getting-started/install/) y utiliza sus enlaces oficiales de descarga. Elige la descarga para tu ordenador. No instales una aplicación de teléfono de nombre similar ni software enviado por un desconocido que ofrece soporte.

Ginger admite Windows, macOS y Linux; la guía de instalación enumera las versiones y procesadores admitidos. Esta versión es solo para Bitcoin y no tiene aplicación Android o iOS. Necesitas conexión a internet y almacenamiento escribible. Tor está incluido y no necesitas instalarlo por separado.

Mantén las comprobaciones de descarga de esa guía. [La referencia avanzada de verificación de firmas](/es/getting-started/verify-download/) explica las comprobaciones de terminal cuando las necesites.

<span id="what-is-the-password-used-for" aria-hidden="true"></span>

<span id="2-create-a-wallet-and-make-its-backup" data-ginger-heading="2-crea-un-monedero-y-su-copia-de-seguridad" aria-hidden="true"></span>

## 2. Crea un monedero y su copia de seguridad

Sigue [Crea tu primer monedero](/es/getting-started/first-wallet/). Elige **New**, anota en orden las doce **Recovery Words** y completa **Confirm Recovery Words**. Mantén en privado la copia de seguridad escrita y asegúrate de tenerla disponible incluso si pierdes el ordenador.

En **Add Passphrase**, comprende la elección antes de continuar. Si utilizas una frase de contraseña, necesitarás tanto las palabras originales como esa frase exacta para recuperar. También protege el acceso al monedero en tu ordenador. Ginger no puede restablecerla. Dejar los campos vacíos crea un monedero sin esa frase adicional; anota qué opción elegiste.

No continúes con un saldo importante hasta que la copia de seguridad sea legible y puedas abrir el monedero previsto. Nunca compartas palabras o frase de contraseña con soporte.

<span id="why-is-it-important-to-use-a-new-address-for-every-payment" aria-hidden="true"></span>

<span id="3-receive-a-small-first-payment" data-ginger-heading="3-recibe-un-primer-pago-pequeño" aria-hidden="true"></span>

## 3. Recibe un primer pago pequeño

Espera a que el monedero termine de sincronizar: significa consultar la red Bitcoin en busca de tus transacciones. Elige **Receive**, añade una etiqueta útil y genera una dirección de recepción. Compártela con el pagador previsto o utilízala en el proceso de retirada Bitcoin on-chain de un exchange.

Genera una dirección nueva para cada pago. Reutilizarla facilita relacionar pagos separados en el registro público de Bitcoin.

Comprueba la dirección completa y la red antes de autorizar el pago. Ginger recibe Bitcoin on-chain; la red de otro activo o una factura Lightning no son intercambiables. Una confirmación significa que la transacción se incluyó en un bloque Bitcoin. Una captura del pagador por sí sola no es confirmación.

<span id="4-make-a-small-first-payment" data-ginger-heading="4-realiza-un-primer-pago-pequeño" aria-hidden="true"></span>

## 4. Realiza un primer pago pequeño

Elige **Send** y utiliza la selección **Automatic** para el funcionamiento normal. Introduce dirección e importe del destinatario, elige **Continue** y revisa destino, importe que recibirá y comisión. Elige **Confirm** solo si son correctos.

La comisión paga el espacio de transacción Bitcoin. Si sobra parte del dinero seleccionado, vuelve a tu monedero como cambio. No necesitas reenviarlo manualmente. Ginger no puede revertir un pago confirmado.

Tras un error de conexión, comprueba el historial antes de volver a pagar. Así evitas pagar dos veces cuando la primera transacción ya se envió.

<span id="5-decide-whether-to-use-coinjoin" data-ginger-heading="5-decide-si-utilizar-coinjoin" aria-hidden="true"></span>

## 5. Decide si utilizar CoinJoin

CoinJoin combina la actividad de varias personas en una transacción Bitcoin compartida para dificultar inferir vínculos de propiedad. Tu monedero conserva sus claves de firma. Cuesta comisiones, puede tardar y no borra información que un destinatario o exchange ya conoce.

Revisa **Automatically start coinjoin** en **Coinjoin Settings** para el monedero seleccionado. Desactiva la participación automática mientras aprendes si no quieres que comience sin supervisión. Si ya hay una ronda activa, utiliza la pausa del panel de control y permite que termine el trabajo crítico.

Puedes recibir y realizar pagos normales sin esperar a que un indicador de privacidad llegue al 100%. Tampoco necesitas ajustar todas las opciones avanzadas para empezar.

<span id="you-have-finished-the-first-use-path" data-ginger-heading="has-terminado-el-recorrido-inicial" aria-hidden="true"></span>

## Has terminado el recorrido inicial

Tus comprobaciones esenciales son una copia de seguridad recuperable, el monedero previsto, la red de pago correcta, el destinatario y la comisión real. Sigue utilizando direcciones nuevas y revisando cada pago.

Vuelve a esta guía cuando necesites la lista de comprobaciones para recibir y enviar. La sección **Uso avanzado** está separada de este recorrido inicial. Por ejemplo, [Verifica una descarga de Ginger Wallet](/es/getting-started/verify-download/) explica detalladamente las comprobaciones de firmas en terminal.
