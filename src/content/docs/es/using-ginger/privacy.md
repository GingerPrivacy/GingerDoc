---
doc_id: "learn-privacy.who-can-see"
title: "¿Quién puede ver mis transacciones Bitcoin?"
description: "Aprende qué revela una dirección Bitcoin, cómo se combinan la identidad y los vínculos de transacciones y dónde pueden ayudar las herramientas de privacidad de Ginger."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son lecturas posteriores opcionales.

Las transacciones Bitcoin son públicas, pero el nombre del propietario de una cartera no se escribe automáticamente junto a cada dirección. La pregunta práctica es quién puede relacionar una dirección o transacción contigo y qué más puede inferir de esa relación.

Un cliente puede conocer la dirección de la factura que le diste. Un exchange puede conocer tu dirección de retirada y tu identidad verificada. Quien sigue una dirección pública de donaciones puede observar sus recepciones. Estos observadores parten de información diferente, por lo que resulta más útil pensar en la privacidad como divulgación controlada que como un único interruptor de anónimo o no anónimo.

<span id="what-the-blockchain-reveals" data-ginger-heading="qué-revela-la-cadena-de-bloques" aria-hidden="true"></span>

## Qué revela la cadena de bloques

Las transacciones muestran entradas, salidas, valores y sus relaciones mediante el gasto. Una salida gastada después por otra transacción crea una conexión pública. Eso no demuestra automáticamente quién posee cada salida: una transacción puede ser un pago, una transferencia entre tus propias carteras o una colaboración con varios propietarios. [La sección de privacidad del documento Bitcoin original](https://bitcoin.org/bitcoin.pdf) trata la separación entre transacciones públicas e identidades y el problema de vincular claves.

Una vez que alguien asocia una dirección con una persona, puede investigar la actividad conectada. Algunas asociaciones son directas, como pagos repetidos a una dirección. Otras se apoyan en suposiciones sobre la propiedad común de las entradas o sobre qué salida es cambio. Estas suposiciones pueden ser incorrectas, pero aun así influyen en cómo clasifican las transacciones los servicios.

<span id="who-can-learn-what" data-ginger-heading="quién-puede-aprender-qué" aria-hidden="true"></span>

## ¿Quién puede aprender qué?

| Observador | Información de la que puede partir | Qué puedes controlar |
| --- | --- | --- |
| Un pagador | La dirección que facilitaste y su pago | Da una dirección nueva para cada recepción |
| Un destinatario de pago | Tu transacción y la información de la compra | Revisa las entradas seleccionadas y evita revelar identidad innecesariamente |
| Un exchange o proveedor de compra | Registros de cuenta, detalles de pago y direcciones de depósito o retirada | Comprende los registros del proveedor antes de utilizarlo |
| Un analista público de la cadena | Datos de transacciones y etiquetas obtenidas en otros lugares | Evita crear vínculos fáciles; evalúa CoinJoin y tus hábitos posteriores de gasto |
| Un servicio de red contactado | Contenido de solicitudes y posiblemente metadatos de conexión | Mantén Tor donde sea compatible y comprende las revelaciones específicas de cada función |
| Alguien con acceso a tu ordenador o respaldos | Archivos, etiquetas, direcciones, registros y posiblemente claves | Protege el dispositivo, el respaldo de recuperación y los metadatos locales |

Ningún ajuste único de cartera aborda todas las filas. Una cartera de hardware ayuda a proteger las claves, pero no oculta una dirección pública. Tor ayuda con los metadatos de conexión, pero no oculta información escrita en un formulario del proveedor.

<span id="why-this-matters-in-ordinary-life" data-ginger-heading="por-qué-importa-en-la-vida-cotidiana" aria-hidden="true"></span>

## Por qué importa en la vida cotidiana

Si facturas a varios clientes en la misma dirección, cada cliente puede ver las recepciones destinadas a ella, incluidos los pagos de otros clientes. Una dirección nueva evita ese identificador compartido directo. No impide automáticamente vínculos posteriores si gastas todas las recepciones juntas.

Si pagas con fondos asociados a una campaña pública de donaciones, la transacción puede revelar más contexto que el importe del pago. Registrar qué monedas pertenecen a qué actividad te ayuda a decidir de forma informada antes de gastar.

La privacidad financiera puede proteger la confidencialidad de clientes, la información comercial, las relaciones personales y la seguridad física. Desear esos límites no exige haber hecho nada malo. La pregunta pertinente es si la otra persona necesita acceder a esa información para completar la interacción.

<span id="privacy-and-fungibility" data-ginger-heading="privacidad-y-fungibilidad" aria-hidden="true"></span>

## Privacidad y fungibilidad

Fungibilidad significa que las unidades pueden intercambiarse en condiciones equivalentes. Las reglas de Bitcoin contabilizan valores, pero personas y servicios pueden clasificar las salidas de forma distinta según sus historiales aparentes. Esos juicios pueden introducir fricción incluso cuando una salida es válida según las reglas de Bitcoin.

Las herramientas de privacidad pueden dificultar establecer con confianza algunas clasificaciones históricas. No pueden obligar a un proveedor a aceptar una transferencia ni borrar un registro que ya conserva. Trata con cuidado las afirmaciones sobre monedas «limpias» o aceptación garantizada: una estimación de privacidad y la política de un servicio son cosas diferentes.

<span id="where-ginger-fits" data-ginger-heading="dónde-encaja-ginger" aria-hidden="true"></span>

## Dónde encaja Ginger

Ginger ofrece recepción con direcciones nuevas, etiquetas locales, control de monedas, integración Tor, sincronización mediante filtros compactos y CoinJoin. Permiten reducir revelaciones concretas e inspeccionar un pago antes de autorizarlo. La aplicación de escritorio también admite procedimientos de hardware para proteger claves.

Empieza por recibir en una dirección nueva y comprender las monedas existentes. Si te preocupa la privacidad de vínculos, aprende qué puede y qué no puede cambiar CoinJoin antes de activar rondas automáticas. Para decisiones cotidianas, continúa con [Hábitos de privacidad antes y después de un pago](/es/using-ginger/address-reuse/).

El objetivo es una mejora deliberada para tu situación. Ginger no puede borrar información que un exchange ya recopiló, prometer aceptación por todos los servicios ni impedir que una revelación voluntaria posterior cree un vínculo nuevo.
