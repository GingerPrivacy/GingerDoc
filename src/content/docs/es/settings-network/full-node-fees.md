---
doc_id: "settings-network.full-node-fees"
title: "Usa tu propio nodo de Bitcoin y elige estimaciones de comisiones"
description: "Configura las descargas de bloques de Ginger desde un nodo que controles, revisa la función opcional de Bitcoin Core incluido y elige un proveedor de estimaciones de comisiones."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Comprueba primero el estado habitual de conexión y sincronización.

Usar tu propio nodo de Bitcoin puede reducir la dependencia de pares públicos para obtener datos de bloques. También añade responsabilidades de almacenamiento, ancho de banda, disponibilidad y mantenimiento. Puedes usar Ginger sin activar el nodo completo opcional.

<span id="start-the-bundled-node" data-ginger-heading="inicia-el-nodo-incluido" aria-hidden="true"></span>

## Inicia el nodo incluido

En **Settings** → **Bitcoin**, el interruptor se llama **(EXPERIMENTAL) Run Bitcoin Core on startup**. La versión 2.0.26 incluye Bitcoin Core 31. Usa instrucciones que correspondan a este nodo incluido y a la versión que tengas instalada.

1. Elige una **Bitcoin Core Data Folder** con suficiente espacio y un almacenamiento fiable. No la dirijas a una carpeta ajena ni permitas que dos procesos de nodo gestionen el mismo directorio simultáneamente.
2. Activa **(EXPERIMENTAL) Run Bitcoin Core on startup** y reinicia Ginger cuando se solicite.
3. Deja que avance la sincronización inicial del nodo. Observa el estado de conexión y descarga; la primera sincronización puede tardar mucho tiempo.
4. Configura **Stop Bitcoin Core on shutdown** según quieras que el nodo siga funcionando después de salir de Ginger.

No actives este interruptor únicamente para corregir un saldo de monedero ausente. Un nodo no puede recuperar una frase de contraseña desconocida ni restaurar etiquetas. El directorio de un nodo existente puede contener una configuración valiosa y sus propios monederos; conserva su copia de seguridad antes de cambiar la aplicación que lo gestiona.

El nodo completo puede verificar bloques localmente, pero esto no elimina las dependencias de Ginger respecto al coordinador, 2FA, compra y venta u otros servicios. Tampoco oculta una transacción que reveles voluntariamente a un exchange.

<span id="connect-to-an-existing-node" data-ginger-heading="conecta-con-un-nodo-existente" aria-hidden="true"></span>

## Conecta con un nodo existente

Con el interruptor de inicio del nodo incluido desactivado, **Bitcoin P2P Endpoint** permite especificar un nodo que controles para descargar bloques. Introduce su host accesible y su puerto P2P. Para un nodo de Bitcoin Core en mainnet en el mismo ordenador, el punto de conexión habitual es `127.0.0.1:8333`, siempre que tu nodo realmente escuche allí. Este campo acepta un punto de conexión de un par de Bitcoin, no una URL de un explorador de bloques ni credenciales RPC.

Asegúrate de que el nodo permita la conexión de tu monedero y tenga los datos de bloques necesarios. Un nodo podado puede no conservar los bloques antiguos que necesita un monedero recuperado. Comprueba su disponibilidad si una exploración histórica se atasca, en vez de suponer que todas las configuraciones de nodo son intercambiables.

La conexión con un nodo remoto tiene su propia exposición de red. Usa un nodo y un transporte que comprendas; especificar un punto de conexión no demuestra que todas las conexiones con él sean privadas. Evita abrir el acceso administrativo RPC a internet público para conseguir que funcione una conexión de monedero.

<span id="choose-fee-estimates-separately" data-ginger-heading="elige-las-estimaciones-de-comisiones-por-separado" aria-hidden="true"></span>

## Elige las estimaciones de comisiones por separado

**Fee Rate Provider** ofrece **Mempool Space**, **Blockstream Info** y **Full Node**. Los proveedores públicos suministran estimaciones basadas en su visión de las condiciones de la red. La opción del nodo completo necesita una integración operativa entre Ginger y el nodo/RPC; introducir únicamente un punto de conexión P2P no demuestra que esté configurada la estimación de comisiones mediante RPC.

Cuando se selecciona **Full Node** pero el nodo no está disponible, v2.0.26 informa de que la estimación de comisiones no está disponible y sigue permitiendo introducir una tasa de comisión manualmente durante el pago. Puedes esperar al nodo, seleccionar un proveedor de estimaciones que funcione o introducir una tasa en la que tengas motivos para confiar. No uses una comisión enorme como reparación genérica de una conexión.

Las estimaciones de comisiones son predicciones, no reservas de espacio en un bloque. Las diferencias entre proveedores pueden reflejar distintas observaciones del mempool. Revisa la comisión total de la transacción además de la tasa mostrada.

<span id="dust-threshold" data-ginger-heading="umbral-de-polvo" aria-hidden="true"></span>

## Umbral de polvo

**Dust Threshold**, también en **Settings** → **Bitcoin**, controla cómo trata el monedero los importes recibidos muy pequeños. Es distinto de la política de retransmisión de la red, del umbral de parada de CoinJoin y del importe mínimo de entrada de un coordinador. Subirlo puede afectar a los pagos pequeños que procesa el monedero; no borra sus salidas de la cadena de bloques ni impide que alguien las envíe. Conserva tu ajuste anterior cuando investigues un pago pequeño que parezca faltar inesperadamente.
