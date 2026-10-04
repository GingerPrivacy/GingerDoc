---
doc_id: "learn-privacy.information-sharing"
title: "Adónde va la información de tu cartera"
description: "Comprende qué pueden revelar la sincronización de Ginger, CoinJoin, los proveedores, exploradores, 2FA, Secret Hunt y otras aplicaciones de cartera, y qué cambia Tor."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Comprende primero las direcciones de recepción nuevas y la revisión habitual de los pagos.

Las distintas acciones de una cartera revelan información diferente. Consultar filtros públicos de bloques, presentar una entrada de CoinJoin y abrir una página de compra no son el mismo acontecimiento de privacidad. Usa esta referencia antes de compartir algo que no puedas retirar.

Tor reduce la exposición directa de la IP en las conexiones que pasan por él. No oculta una solicitud al servicio que la recibe, no elimina una transacción de la cadena de bloques, no protege un ordenador desbloqueado ni cambia automáticamente tu navegador externo. Un nodo local configurado es una conexión independiente con una máquina que controlas.

<span id="synchronization-and-bitcoin-network-activity" data-ginger-heading="sincronización-y-actividad-en-la-red-bitcoin" aria-hidden="true"></span>

## Sincronización y actividad en la red Bitcoin

| Acción y destinatario | Información implicada | Qué puedes elegir |
| --- | --- | --- |
| Descargar datos de sincronización del backend de Ginger | El cliente solicita filtros públicos desde su posición actual de sincronización. Compara los scripts de la cartera localmente, en vez de enviar un xpub de cuenta en esta solicitud. El servicio sigue observando las solicitudes y sus momentos de envío. | Mantén Tor activado; deja que termine la sincronización sin considerar que el backend sea ciego a todo uso. |
| Descargar un bloque coincidente de una fuente de bloques | La fuente sabe qué bloque completo se solicitó. Una coincidencia puede ser un falso positivo; solicitar un bloque no demuestra que poseas una transacción concreta de él. | Un nodo propio correctamente configurado puede suministrar bloques. Un ajuste de nodo no sustituye todos los demás servicios que usa Ginger. |
| Solicitar estimaciones de comisiones | El proveedor configurado recibe una solicitud de información pública sobre comisiones. Esta solicitud es distinta de consultar tu transacción o el saldo de tu cartera. | En **Fee Rate Provider**, elige entre las fuentes de la versión publicada según corresponda; la opción de nodo propio requiere un nodo configurado y operativo. |
| Difundir un pago | Un par o un servicio alternativo de difusión recibe la transacción firmada. Sus entradas, salidas e importes se hacen visibles al propagarse. | Revisa antes de firmar. Tor cambia la exposición de la conexión, no el contenido del pago. Ginger puede usar vías alternativas de difusión si falla un intento anterior. |

Si operas un nodo de Bitcoin, protege el acceso a su máquina y a cualquier conexión remota. Su operador puede observar las solicitudes, así que un servidor al que simplemente se llame «tu nodo» no es necesariamente privado si lo administra otra persona. El acceso normal a internet, el descubrimiento de pares y la disponibilidad de servicios siguen siendo importantes.

<span id="coinjoin-and-optional-services" data-ginger-heading="coinjoin-y-servicios-opcionales" aria-hidden="true"></span>

## CoinJoin y servicios opcionales

| Acción y destinatario | Información implicada | Qué puedes elegir |
| --- | --- | --- |
| Participar con un coordinador de CoinJoin | Las entradas presentadas y sus pruebas de propiedad, los registros de salidas, los mensajes del protocolo y los tiempos. WabiSabi busca dificultar la correspondencia entre entradas y salidas bajo sus supuestos. | Revisa la participación, los costes y el destino; mantén Tor activado. No equipares el funcionamiento sin custodia con la protección frente a cualquier observador activo. |
| Solicitar ofertas de compra o venta y validar una dirección | Los parámetros de la oferta incluyen el país, la moneda, el importe y el método de pago elegidos, cuando corresponda. La validación de dirección envía la dirección propuesta al servicio de compra y venta antes de completar una orden. | Considera esta divulgación antes de continuar, aunque después abandones la compra o venta. |
| Crear o continuar una orden de compra o venta | La integración envía los detalles de la orden y una dirección de recepción o reembolso, y después abre el proceso del proveedor. Este puede solicitar información de pago, contacto o identidad según sus propias condiciones. | Lee las condiciones actuales del proveedor seleccionado y proporciona solo lo que quieras proporcionar. Ginger no convierte una compra identificada en anónima. |
| Usar el 2FA opcional de Ginger | La verificación habitual al iniciar envía un código de autenticador con un identificador de instalación. El servicio devuelve la clave usada para la capa adicional de cifrado de archivos de cartera. | Decide si esa protección de acceso y esa dependencia del servicio te convienen. Mantén disponibles de forma independiente las palabras de recuperación y cualquier frase de contraseña original. |
| Participar en comprobaciones de Secret Hunt | Las comprobaciones de eventos aptos pueden enviar un identificador de ronda, un identificador de transacción, el outpoint de una entrada y una prueba de control de esa entrada. Un outpoint identifica una salida concreta de una transacción anterior. | Abre **Secret Hunt** y revisa el interruptor descrito como **Enable/disable the use of this wallet for Secret Hunt.** Está activado por defecto, aunque no necesariamente haya eventos pertinentes activos. Desactivarlo no retira las solicitudes anteriores. |

Tor no oculta a los servicios receptores una dirección presentada para validación, los detalles de una orden, un identificador de 2FA ni una prueba de propiedad de Secret Hunt. Estas observaciones tampoco significan que el servicio reciba las palabras de recuperación o la autoridad para gastar simplemente porque vea un identificador de transacción.

El identificador de 2FA puede asociar los intentos habituales de inicio en ese servicio. La clave de cifrado devuelta forma parte de un sistema adicional de protección de archivos locales, no es una nueva clave de Bitcoin que sustituya tus palabras de recuperación y tu frase de contraseña. No envíes esos secretos ni códigos del autenticador a contactos de soporte.

<span id="browsers-other-applications-and-people" data-ginger-heading="navegadores-otras-aplicaciones-y-personas" aria-hidden="true"></span>

## Navegadores, otras aplicaciones y personas

| Acción | Qué puede revelarse | Hábito útil |
| --- | --- | --- |
| Abrir un explorador público | La transacción o dirección consultada y la información de red y sesión del navegador | Empieza por el historial local de Ginger; abre un explorador solo cuando necesites su información adicional. |
| Usar el sitio web de un proveedor | Detalles de la orden, información de inicio de sesión o pago, cookies y observaciones del navegador específicas del sitio | Considera la sesión del navegador por separado del ajuste de Tor de Ginger. |
| Importar un xpub o usar la misma cuenta en otra aplicación | Una rama de direcciones públicas o consultas derivadas de la cartera, según la aplicación | Comprueba su comportamiento de sincronización y de intercambio de datos antes de importar. «Solo observación» describe la autoridad para gastar, no la confidencialidad. |
| Compartir una dirección en un mensaje o una publicación pública | Un vínculo entre esa dirección y la persona o cuenta que la envía | Comparte una dirección nueva con el pagador previsto mediante un canal de confianza. |
| Compartir registros, archivos de cartera o el contenido de una pantalla | Según el material: rutas, etiquetas, direcciones, identificadores de transacción o ronda y, posiblemente, secretos | Comparte el fragmento pertinente más pequeño y revisado. Nunca envíes los datos completos de la cartera ni secretos de recuperación solo porque alguien los solicite. |

La investigación sobre pagos web muestra por qué conviene considerar conjuntamente las observaciones del navegador y la información de la cadena de bloques. No establece la política actual de seguimiento de un proveedor concreto de Ginger. [Goldfeder y colaboradores, When the Cookie Meets the Blockchain](https://arxiv.org/abs/1708.04748)

<span id="local-information-also-needs-protection" data-ginger-heading="la-información-local-también-necesita-protección" aria-hidden="true"></span>

## La información local también necesita protección

Las etiquetas, la contabilidad de privacidad y los registros de órdenes de proveedores pueden estar en los metadatos de la cartera. Son útiles para decisiones posteriores y para la recuperación, pero no todos están protegidos de la misma forma que las claves de firma. Protege el ordenador, las copias de seguridad y las cuentas que puedan acceder a ellos. **Discreet Mode** ayuda con los campos de pantalla compatibles; el bloqueo de pantalla del sistema operativo protege de forma más amplia el acceso sin supervisión.

Restaurar a partir de las palabras puede recuperar claves con las que gastar sin restaurar todas las notas privadas. Borrar esas notas no elimina información que un destinatario o servicio ya tenga. Antes de cambiar instalaciones, lee [migración de cartera](/es/learn-privacy/wallet-migration/); antes de enviar un pago, revisa los [hábitos de privacidad](/es/using-ginger/address-reuse/).
