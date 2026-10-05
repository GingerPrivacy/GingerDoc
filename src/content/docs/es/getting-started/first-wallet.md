---
doc_id: "getting-started.first-wallet"
title: "Crea y abre tu primera cartera Ginger"
description: "Crea una cartera Bitcoin, anota sus palabras de recuperación y frase de contraseña y comprende la primera sincronización y los ajustes CoinJoin."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Crea tu primera cartera
prev:
  link: /getting-started/install/
  label: Instala Ginger Wallet
next: false
---

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son lecturas posteriores opcionales.

Una cartera Ginger contiene la información necesaria para reconocer y gastar tus bitcoin. Los bitcoin en sí se registran en la red Bitcoin. Puedes recuperarte de perder el ordenador si tienes el respaldo correcto; perder tanto la cartera como su información de recuperación puede ser irrecuperable.

<span id="create-a-software-wallet" data-ginger-heading="crea-una-cartera-de-software" aria-hidden="true"></span>

## Crea una cartera de software

1. Abre la pantalla para añadir una cartera y elige **New**. Si se solicita **Wallet Name**, elige un nombre que la distinga de otras. La primera cartera puede recibir un nombre automático sin mostrar ese paso.
2. Ginger muestra doce **Recovery Words** en inglés. Escríbelas en el orden mostrado y mantenlas sin conexión. No las fotografíes, envíes por correo ni compartas con soporte. Ginger no volverá a mostrarlas después de la creación.
3. Continúa a **Confirm Recovery Words** y selecciona las palabras solicitadas de tu respaldo escrito. Así compruebas que anotaste la secuencia en lugar de solo reconocer las palabras en pantalla.
4. En **Add Passphrase**, introduce y confirma una frase de contraseña, o deja ambos campos vacíos si eliges deliberadamente una cartera sin ella. Anota si utilizaste una. Una frase no vacía es necesaria tanto para recuperar como para abrir la cartera protegida; Ginger no puede restablecerla.
5. Completa cualquier aviso de términos de servicio. Permite que la cartera se conecte y sincronice antes de confiar en el saldo.

El nombre de tu cartera es una etiqueta local. No es una credencial de recuperación ni cambia las claves. Renombrar una cartera no equivale a crear una nueva.

<span id="decide-how-to-use-coinjoin" data-ginger-heading="decide-cómo-utilizar-coinjoin" aria-hidden="true"></span>

## Decide cómo utilizar CoinJoin

Ginger puede mostrar una invitación a personalizar los ajustes CoinJoin. Revisa los ajustes y comisiones antes de dejar fondos disponibles para CoinJoin automático. En **Coinjoin Settings**, **Automatically start coinjoin** determina si la cartera empieza sin pulsar el control de reproducción. Comprueba el interruptor real de tu cartera; una importada o configurada anteriormente puede tener ajustes distintos.

CoinJoin consume comisiones de transacción y puede tardar. Recibir bitcoin, enviar un pago normal y utilizar CoinJoin son acciones separadas. Puedes aprender primero a recibir y enviar con una cantidad pequeña cuya pérdida sea asumible.

<span id="open-an-existing-wallet" data-ginger-heading="abre-una-cartera-existente" aria-hidden="true"></span>

## Abre una cartera existente

Selecciona su nombre en la lista de carteras de Ginger. Introduce la frase de contraseña original si se solicita. Si activaste la autenticación de dos factores de la aplicación, completa ese aviso de inicio antes de abrir carteras individuales. Una cartera de hardware utiliza la autorización del dispositivo en vez de un secreto de cartera de software de escritorio.

Para añadir una cartera mediante sus palabras de recuperación, elige **Recover** en la pantalla para añadirla. Para cargar un respaldo JSON compatible o una exportación de hardware admitida, elige **Import File**. No pegues palabras de recuperación en un diálogo de importación ni importes las palabras de una cartera de hardware solo para conectar el dispositivo.

<span id="know-when-the-wallet-is-ready" data-ginger-heading="identifica-cuándo-está-lista" aria-hidden="true"></span>

## Identifica cuándo está lista

La sincronización encuentra transacciones de tu cartera. Hasta que termine, el saldo o historial pueden estar incompletos. Una cartera recuperada puede ocultar las acciones normales de recibir o enviar mientras busca. Un pago entrante sin confirmar ya se ha detectado, pero todavía no está incluido en un bloque.

Antes de recibir una cantidad importante, comprueba que la cartera se abre, que el respaldo es legible y que entiendes tu elección de frase de contraseña. Utiliza **Wallet Settings** → **Tools** → **Verify Recovery Words** con **Verify** para comprobar las palabras de una cartera de software accesible. Esto verifica un respaldo; no revela palabras olvidadas.

<span id="close-safely" data-ginger-heading="cierra-de-forma-segura" aria-hidden="true"></span>

## Cierra de forma segura

Cerrar la ventana puede dejar Ginger en ejecución si **Run in background when window closed** está activado en **Settings** → **General**. Utiliza la salida normal de la aplicación cuando necesites detenerla. Durante una fase crítica de CoinJoin, deja que Ginger termine el procedimiento de cierre. Forzar el cierre puede interrumpir la participación.

<span id="next-receive-and-send" data-ginger-heading="siguiente-recibir-y-enviar" aria-hidden="true"></span>

## Siguiente: recibir y enviar

Una vez comprobado el respaldo y completada la sincronización, vuelve a [Recibe un primer pago pequeño](/es/getting-started/#3-receive-a-small-first-payment). La siguiente sección explica cómo realizar tu primer pago.
