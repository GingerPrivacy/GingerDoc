---
doc_id: "settings-network.tor-sync"
title: "Tor, sincronización y privacidad de red"
description: "Comprende cómo se conecta Ginger, qué protege Tor y cómo investigar una sincronización lenta sin exponer la actividad del monedero."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

Ginger necesita datos de la red para descubrir tus transacciones, difundir pagos y participar en CoinJoin. Tor está incluido y activado de forma predeterminada para sus conexiones de red habituales. Ayuda a separar tu dirección IP de los servicios con los que contactas, pero no oculta los importes ni las transacciones públicas de Bitcoin.

<span id="tor-settings" data-ginger-heading="ajustes-de-tor" aria-hidden="true"></span>

## Ajustes de Tor

Abre **Settings** → **Security** y busca **Network anonymization (Tor)**. Mantenlo activado para el uso privado habitual. Reinicia cuando se te indique para que la configuración de red en funcionamiento coincida con los ajustes. La función de 2FA de Ginger requiere Tor, y la interfaz restringe su desactivación mientras 2FA esté activado.

**Terminate Tor when Ginger shuts down** controla el comportamiento de cierre de Tor. Un proceso de Tor puede permanecer activo después de cerrar la ventana del monedero porque este sigue funcionando en segundo plano o porque Tor no está configurado para terminar. Cerrar una ventana y salir de la aplicación son acciones distintas.

Desactivar Tor cambia la información expuesta a los servicios y pares con los que contactas. No es un ajuste de rendimiento inofensivo. En particular, las conexiones con un coordinador o un par que difunda transacciones pueden quedar asociadas a tu dirección de red. No lo desactives como respuesta habitual a un CoinJoin en espera.

La conexión Tor de Ginger tampoco convierte un navegador externo en Tor Browser. Las páginas de proveedores, los exploradores y los demás enlaces usan el navegador configurado. Revisa ese navegador por separado antes de suponer que sus solicitudes heredan la protección de red del monedero.

<span id="what-synchronization-does" data-ginger-heading="qué-hace-la-sincronización" aria-hidden="true"></span>

## Qué hace la sincronización

Ginger usa filtros de bloques compactos para encontrar bloques que podrían ser relevantes y procesa localmente los datos de bloques descargados para su monedero. Esto reduce la necesidad de enviar una lista de todas tus direcciones a un servidor público de monederos. Aun así, depende de los servicios de red y de los pares para obtener datos, y del correcto funcionamiento de su software local.

El primer uso y la recuperación pueden tardar más que volver a abrir un monedero usado recientemente. El progreso puede incluir la conexión, la obtención de filtros, la descarga de bloques y el procesamiento del monedero. Un monedero recuperado puede mostrar temporalmente un historial incompleto u ocultar acciones hasta que termine su exploración.

Ejecutar un nodo completo y sincronizar un monedero son tareas independientes. El nodo completo opcional valida la cadena de bloques; después, el monedero necesita encontrar sus propias transacciones. Que el estado de un nodo completo indique que está sincronizado no significa necesariamente que un monedero recién recuperado haya terminado de explorar.

<span id="when-synchronization-appears-stuck" data-ginger-heading="cuando-la-sincronización-parece-atascada" aria-hidden="true"></span>

## Cuando la sincronización parece atascada

1. Comprueba el estado exacto y si cambia con el tiempo. Una exploración de recuperación extensa es distinta de **Awaiting connection**.
2. Confirma que el ordenador tenga acceso a internet, que su fecha y hora sean correctas y que haya espacio en el disco. Comprueba que Ginger tenga permiso para escribir sus datos.
3. Si configuraste un nodo completo, comprueba que sea accesible y esté sincronizado. Revisa el punto de conexión configurado en vez de cambiar las credenciales del monedero.
4. Si la conexión sigue atascada, cierra Ginger normalmente y vuelve a abrirlo una vez. Si el fallo se repite, conserva el texto del error y el contexto del registro.

Si tu red bloquea Tor, consulta las [indicaciones de conexión del Proyecto Tor](https://support.torproject.org/). Los ajustes de la versión publicada de Ginger no ofrecen un asistente documentado para configurar puentes. No copies ajustes de Tor Browser en campos arbitrarios de configuración de Ginger suponiendo que funcionarán.

Usa **Wallet Settings** → **Tools** → **Resync** solo cuando exista un motivo para reconstruir la vista del monedero. Conserva primero las copias de seguridad y deja que termine otra exploración. Borrar la carpeta de datos no es el primer paso para resolver problemas.

<span id="separate-network-choice-from-real-funds" data-ginger-heading="distingue-la-elección-de-red-de-los-fondos-reales" aria-hidden="true"></span>

## Distingue la elección de red de los fondos reales

El selector de red de **Settings** → **Bitcoin** de la versión publicada ofrece Main y RegTest. RegTest sirve para un entorno de pruebas aislado y no tiene valor en bitcoin real; este manual no explica cómo operar ese entorno. Esta versión no ofrece una selección de testnet pública en esa interfaz. Cambiar de red no mueve fondos entre ellas.
