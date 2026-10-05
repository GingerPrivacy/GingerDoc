---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin y firma de mensajes"
description: "Envía una solicitud de pago PayJoin, comprende lo que sabe el destinatario, las huellas de carteras y el pago alternativo, y firma un mensaje de control de dirección de alcance limitado."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Comprende primero la vista previa habitual de envío, el importe del destinatario y la comisión.

PayJoin y la firma de mensajes son herramientas independientes. PayJoin cambia cómo se construye una transacción de pago. La firma de mensajes demuestra el control de una clave para una declaración concreta sin hacer un pago. Ninguna función debe servir como motivo para divulgar tus palabras de recuperación.

<span id="send-a-payjoin-request" data-ginger-heading="envía-una-solicitud-payjoin" aria-hidden="true"></span>

## Envía una solicitud PayJoin

PayJoin es un pago colaborativo en el que el receptor puede aportar una entrada. Esto puede debilitar la suposición de que todas las entradas de un pago de aspecto normal pertenecen a un único remitente. El receptor debe proporcionar una URI de pago Bitcoin compatible que contenga un punto de conexión PayJoin; una dirección normal por sí sola no lo activa. El protocolo se describe en [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

1. Usa una cartera de software con fondos que puedas gastar. Esta versión rechaza las solicitudes PayJoin para enviar desde carteras de hardware.
2. Pega la URI completa del pago en **Send**, en vez de copiar únicamente su dirección. Comprueba el destino y el importe mediante el mismo canal de confianza que usarías para cualquier pago.
3. Revisa la vista previa de la transacción y el indicador de PayJoin, y autoriza el pago si el importe y las comisiones son aceptables.
4. Comprueba la transacción resultante en el historial.

La implementación publicada puede recurrir a su transacción de pago normal si falla la construcción de PayJoin. Por tanto, autorizar este procedimiento no garantiza que la transacción difundida sea PayJoin. No lo uses cuando un pago normal alternativo incumpliría tus requisitos de privacidad.

Usa un punto de conexión HTTPS compatible para mainnet. En v2.0.26, las comprobaciones rechazan puntos de conexión onion mientras Tor esté activado; una solicitud que solo ofrezca onion no debe considerarse una vía admitida. Mantén Tor activado y pide al destinatario una alternativa compatible en vez de desactivar la privacidad de red para forzar la solicitud.

Esta guía cubre el envío de una solicitud proporcionada por el destinatario. El procedimiento habitual **Receive** de Ginger no opera un servidor receptor de PayJoin, y esta versión no ofrece un procedimiento de configuración de usuario para uno.

<span id="what-the-recipient-and-an-observer-learn" data-ginger-heading="qué-aprenden-el-destinatario-y-un-observador" aria-hidden="true"></span>

## Qué aprenden el destinatario y un observador

El destinatario ya conoce la solicitud de pago, su dirección de recepción y el importe previsto. Si la solicitud está asociada a una orden identificada, PayJoin no borra esa identidad. Durante la negociación, el servicio receptor también ve la transacción de pago propuesta, incluidas las entradas propuestas del remitente. No debes tratarlo como alguien a quien se oculta el propio pago.

Un observador externo ve la transacción que finalmente se publique en Bitcoin. Un PayJoin correcto puede hacer poco fiable la suposición habitual de que «todas las entradas pertenecen al remitente». Ese beneficio depende de la transacción y de la demás información que tenga el observador; no garantiza que la transacción sea indistinguible de cualquier pago normal.

Distingue estos públicos. Un destinatario puede aprender detalles mediante la orden o la negociación aunque un observador ajeno no pueda atribuir con confianza las entradas de la transacción. Un explorador público de transacciones puede crear otra divulgación si consultas el pago desde una sesión de navegador identificada.

<span id="wallet-fingerprints-and-the-ordinary-payment-fallback" data-ginger-heading="huellas-de-carteras-y-el-pago-normal-alternativo" aria-hidden="true"></span>

## Huellas de carteras y el pago normal alternativo

Las carteras toman decisiones sobre los tipos de dirección de las entradas, la estructura de la transacción y la firma. Las combinaciones de estas decisiones pueden dejar patrones reconocibles. Por tanto, una transacción puede perder parte de su ambigüedad aunque sus mensajes del protocolo PayJoin sean válidos. Los [ejemplos publicados de identificación de huellas de PayJoin](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/) ilustran este problema en combinaciones concretas de carteras; no demuestran que Ginger tenga los mismos problemas ni cuantifican su privacidad.

Como usuario, elige un servicio receptor actualizado y compatible, verifica la solicitud de pago y revisa la comisión y el importe propuestos. No cambies opciones de transacción que desconozcas simplemente para imitar otra cartera: una transacción de aspecto plausible no demuestra un buen resultado de privacidad.

Si necesitas un pago colaborativo, acuerda un método compatible con el destinatario antes de autorizar el procedimiento de envío de Ginger. Su alternativa de pago normal significa que una negociación fallida todavía puede producir un pago válido. Después de la difusión, no vuelvas a enviar solo porque el resultado no esté claro; comprueba primero la transacción y el estado del pago del destinatario. Una negociación PayJoin fallida y un pago Bitcoin fallido son situaciones diferentes.

<span id="sign-a-message-for-an-address" data-ginger-heading="firma-un-mensaje-para-una-dirección" aria-hidden="true"></span>

## Firma un mensaje para una dirección

Algunos servicios te piden demostrar que controlas una dirección de recepción. Abre el menú de la cartera y elige **Sign Message**. Introduce una dirección que pertenezca a esta cartera y la declaración exacta que quieras firmar. Ginger rechaza las direcciones que no le pertenecen. Introduce el mensaje, elige **Continue** y copia la firma resultante para el verificador previsto.

En una cartera de hardware, sigue la solicitud de firma del dispositivo; la disponibilidad depende del dispositivo y de su compatibilidad con la firma de mensajes. Una cartera de solo observación sin dispositivo de firma no puede producir una firma. El tipo de dirección y el formato de firma admitido por el verificador también deben ser compatibles.

Lee el mensaje con tanto cuidado como una declaración de autorización. Prefiere un texto de alcance limitado que identifique al destinatario, el propósito y la fecha o el desafío. No firmes una declaración vacía ni una cuyas consecuencias no comprendas. Una firma puede copiarse y mostrarse a otros después de compartirla.

Firmar un mensaje no transfiere bitcoin ni establece la propiedad de todas las direcciones de tu cartera. También crea un vínculo entre la dirección firmada y quien el verificador identifique como tú. Si lo solicita un exchange, esa divulgación permanece incluso después de que uses CoinJoin.
