---
title: "¿Por qué usar Ginger Wallet?"
description: "Elige las herramientas de privacidad de Bitcoin de Ginger según la información que quieras proteger y comprende sus límites."
doc_id: "learn-privacy.why-ginger"
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger es un monedero de escritorio de código abierto para Bitcoin en cadena. Tú controlas las claves, puedes recibir en direcciones nuevas y revisar los pagos antes de firmarlos. El CoinJoin opcional ayuda a dificultar la inferencia de vínculos de propiedad entre transacciones, mientras que Tor integrado ayuda a reducir la exposición directa de la IP en las conexiones que pasan por él.

<span id="start-with-what-you-want-to-protect" data-ginger-heading="empieza-por-lo-que-quieras-proteger" aria-hidden="true"></span>

## Empieza por lo que quieras proteger

- **Tus claves para gastar:** conserva una copia de recuperación completa y protege el ordenador que firma. Un monedero de hardware compatible puede mantener las claves de firma en un dispositivo independiente.
- **Tu historial de pagos:** usa direcciones de recepción nuevas, conserva etiquetas locales útiles y revisa qué monedas gasta un pago. [Consulta qué revela una transacción de Bitcoin](/es/using-ginger/privacy/).
- **Tus conexiones:** mantén activada la protección habitual de Tor de Ginger. Un navegador externo tiene su propio comportamiento de red, sus cookies y sus cuentas.

La recepción, el envío y CoinJoin son acciones independientes. Puedes aprender primero a hacer pagos normales y decidir después si CoinJoin responde a una preocupación de privacidad que tengas. Las rondas completadas tienen comisiones y no tienen un tiempo de finalización garantizado.

<span id="understand-the-limits" data-ginger-heading="comprende-los-límites" aria-hidden="true"></span>

## Comprende los límites

Las transacciones de Bitcoin siguen siendo públicas. Tor no oculta al servicio receptor la información que se le envía. Un proveedor de compra puede asociar una orden a tu identidad, y la puntuación de privacidad de un monedero no puede garantizar el anonimato ni la aceptación por un exchange.

Los servicios opcionales también tienen flujos de datos específicos: las órdenes de compra y venta revelan los detalles requeridos, 2FA usa un servicio durante el inicio habitual y Secret Hunt puede enviar referencias de transacciones y pruebas de propiedad. [Adónde va la información de tu monedero](/es/learn-privacy/information-sharing/) es una referencia avanzada opcional para estas decisiones.

Empieza por los [hábitos cotidianos de privacidad](/es/using-ginger/address-reuse/) y conserva una rutina que puedas comprender y recuperar. El código abierto permite inspeccionar; no garantiza que todas las instalaciones estén libres de errores ni que un ordenador comprometido sea seguro.
