---
doc_id: "settings-network.secret-hunt"
title: "Secret Hunt en Ginger Wallet"
description: "Encuentra resultados de eventos Secret Hunt de Ginger, controla la participación de la cartera y comprende qué información recibe el servicio del evento."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

**Secret Hunt** es una función de Ginger que muestra secretos de eventos asociados a actividad apta de CoinJoin. Es independiente de la puntuación de privacidad de la cartera y del proceso habitual de recibir o gastar bitcoin. La disponibilidad de eventos depende del servicio; la presencia de la función no promete un evento, premio o recompensa actuales.

<span id="view-and-control-participation" data-ginger-heading="consulta-y-controla-la-participación" aria-hidden="true"></span>

## Consulta y controla la participación

Abre el menú de una cartera de software y elige **Secret Hunt**. El diálogo muestra los resultados de los eventos en un árbol, incluidas las palabras o frases descubiertas y un secreto adicional cuando se han reunido los secretos requeridos del evento. Expande un evento para inspeccionar sus entradas.

Usa **Enable/disable the use of this wallet for Secret Hunt.** para controlar la participación de esa cartera. El valor predeterminado de la versión publicada es activado. Desactivarlo vacía el árbol mostrado en la vista desactivada y evita que el actualizador seleccione esa cartera para las comprobaciones de admisibilidad de eventos. No cancela CoinJoin, borra transacciones de la cadena de bloques ni elimina información ya enviada a un servicio.

La entrada no se ofrece para carteras de solo observación. No es una función de CoinJoin de carteras de hardware y no requiere introducir palabras de recuperación en un sitio web de eventos.

<span id="what-is-shared" data-ginger-heading="qué-se-comparte" aria-hidden="true"></span>

## Qué se comparte

El cliente obtiene información de eventos del servicio de Ginger. Para una comprobación de admisibilidad, puede enviar un identificador de transacción de CoinJoin, una referencia de una entrada seleccionada y una prueba criptográfica de propiedad. La prueba demuestra el control para la solicitud del evento sin enviar la clave privada. Son divulgaciones adicionales a nivel de aplicación incluso cuando la conexión utiliza Tor.

Tor aborda la exposición a nivel de red; no elimina el contenido de una solicitud para su destinatario. Si no quieres que se use una cartera para estas comprobaciones de eventos, desactiva su participación en Secret Hunt. Las solicitudes de listas de eventos y la actividad habitual de red de la cartera son independientes de este interruptor por cartera.

<span id="missing-or-incomplete-results" data-ginger-heading="resultados-ausentes-o-incompletos" aria-hidden="true"></span>

## Resultados ausentes o incompletos

Los resultados dependen de las fechas del evento, la actividad confirmada apta, la disponibilidad del servicio y las actualizaciones periódicas. Una ronda puede completarse correctamente sin revelar un secreto nuevo. Esperar resultados no demuestra que falte bitcoin.

No generes transacciones adicionales que paguen comisiones suponiendo que una recompensa te compensará. Lee las condiciones reales de un evento mediante una fuente autenticada antes de decidir si participas. Ignora las solicitudes de subir un archivo de cartera o enviar una «comisión de reclamación» independiente a una dirección de soporte no solicitada.
