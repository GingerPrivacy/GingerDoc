---
doc_id: "backup-recovery.backups"
title: "Haz una copia de seguridad de tu monedero Ginger"
description: "Conserva y verifica las palabras de recuperación y la frase de contraseña original necesarias para recuperar un monedero de software Ginger si pierdes el ordenador."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son lecturas posteriores opcionales.

Para un monedero de software Ginger, conserva las palabras de recuperación y la frase de contraseña original exacta, si utilizaste una. Te permiten recuperar el acceso si pierdes el ordenador. Un monedero de hardware utiliza su propio proceso de copia de seguridad del dispositivo; mantén sus palabras fuera del ordenador.

<span id="the-backup-you-need-first" data-ginger-heading="la-copia-de-seguridad-que-necesitas-primero" aria-hidden="true"></span>

## La copia de seguridad que necesitas primero

1. Escribe las palabras en el orden mostrado y mantenlas privadas.
2. Anota la frase de contraseña exacta, o que el monedero se creó sin ninguna. Ginger no puede restablecerla.
3. Guarda la copia donde puedas acceder a ella tras perder el ordenador, impidiendo que otros la lean.
4. Verifica la copia mientras el monedero siga siendo accesible.

El nombre del monedero no es un secreto de recuperación. Un código del autenticador o un PIN del dispositivo no sustituye a las palabras y la frase de contraseña original.

<span id="store-recovery-information-safely" data-ginger-heading="guarda-la-información-de-recuperación-de-forma-segura" aria-hidden="true"></span>

## Guarda la información de recuperación de forma segura

Escribe las palabras con claridad y en su orden original. Guárdalas donde puedas recuperarlas tras perder el ordenador, impidiendo que otras personas las lean. Considera más de una copia duradera si un incendio, el agua o una única ubicación inaccesible inutilizarían tu copia de seguridad. Lleva un inventario de dónde están las copias sin incluir las palabras en una nota normal en la nube.

Mantén también recuperable una frase de contraseña no vacía. La memorización por sí sola puede fallar. Guardarla por separado reduce la posibilidad de que un solo hallazgo exponga todo, pero la organización debe seguir siendo comprensible para ti o alguien a quien autorices deliberadamente. No inventes un método casero que divida las palabras en fragmentos sin saber cómo recuperarlo.

Una contraseña de aplicación, un PIN de dispositivo, un código de autenticador y una frase de contraseña BIP39 no son intercambiables. Identifica claramente las instrucciones de tu copia de seguridad sin revelar los secretos a un lector no autorizado.

<span id="choose-something-durable-and-readable" data-ginger-heading="elige-algo-duradero-y-legible" aria-hidden="true"></span>

## Elige algo duradero y legible

El papel puede dañarse por fuego, agua o decoloración. El metal puede resistir algunos daños, pero también necesita protección contra su lectura por otras personas. Comprueba que la copia de seguridad siga siendo legible y accesible.

Evita fotografías, notas normales en la nube e impresoras para las palabras de recuperación: pueden dejar copias que no controlas. Si guardas más de una copia, protege y registra cada una. No dividas las palabras en un rompecabezas improvisado que quizá no puedas reconstruir.

<span id="check-the-backup-before-you-need-it" data-ginger-heading="comprueba-la-copia-de-seguridad-antes-de-necesitarla" aria-hidden="true"></span>

## Comprueba la copia de seguridad antes de necesitarla

En un monedero de software abierto, utiliza **Wallet Settings** → **Tools** → **Verify Recovery Words** y después **Verify**. Introduce las palabras de la copia. Una comprobación satisfactoria es un indicio útil de que las palabras pertenecen a ese monedero. Asegúrate también de que la frase de contraseña anotada sea correcta y puedas encontrar los archivos que quieres conservar.

Si las palabras no se verifican, comprueba en privado su ortografía y orden. Si todavía puedes gastar pero no puedes establecer una copia de seguridad de recuperación utilizable, crea un monedero nuevo con una copia de seguridad verificada y transfiere los fondos con cuidado. No borres el monedero antiguo durante la investigación.

Vuelve a respaldar los metadatos locales después de cambios importantes de etiquetas o ajustes. Recibir más bitcoin normalmente no requiere nuevas palabras de recuperación, pero un monedero nuevo o una frase de contraseña diferente sí.

<span id="what-about-labels-and-computer-files" data-ginger-heading="y-las-etiquetas-y-los-archivos-del-ordenador" aria-hidden="true"></span>

## ¿Y las etiquetas y los archivos del ordenador?

Las palabras de recuperación no restauran todas las etiquetas, ajustes o registros de pedidos de proveedores. Las copias automáticas locales están en el mismo ordenador y no protegen contra su pérdida completa.

Referencia avanzada opcional: [archivos del monedero, metadatos y detalles de la frase de contraseña](/es/backup-recovery/backup-files/). Explica las copias de archivos y los archivos relacionados con 2FA por separado de la copia de seguridad esencial de palabras.
