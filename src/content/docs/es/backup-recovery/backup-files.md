---
doc_id: "backup-recovery.backup-files"
title: "Archivos de monedero, metadatos y detalles de la frase de contraseña"
description: "Conserva los archivos JSON y ATTR de Ginger, comprende la dependencia del archivo 2FA y mantén recuperable la frase de contraseña sin sustituir la copia de seguridad básica de palabras."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Conserva la información de recuperación original y los archivos del monedero antes de cambiar la configuración de recuperación o archivos.

Utiliza esta referencia cuando copies datos locales del monedero o investigues qué conserva una copia de seguridad. Empieza con [la guía básica de copia de seguridad](/es/backup-recovery/backups/) para conocer la información de recuperación que necesita todo monedero de software.

<span id="what-to-keep" data-ginger-heading="qué-conservar" aria-hidden="true"></span>

## Qué conservar

| Elemento de la copia de seguridad | Finalidad | Límite importante |
| --- | --- | --- |
| Palabras de recuperación, en orden | Recrear las claves del monedero | Necesitan la frase de contraseña original si se utilizó una |
| Frase de contraseña original, incluidas mayúsculas y caracteres | Seleccionar el monedero BIP39 correcto y desbloquear su secreto protegido | Ginger no puede restablecerla |
| Archivo `.json` del monedero | Conservar la información de claves y sincronización almacenada | Un archivo cifrado sigue necesitando sus credenciales; 2FA puede añadir una dependencia de servicio |
| Archivo `.attr` correspondiente | Conservar etiquetas locales y atributos específicos | Contiene metadatos sensibles; las palabras de recuperación no lo restauran |
| Copia de seguridad de recuperación del dispositivo de hardware | Recuperar claves con el proceso del fabricante | Mantenerla fuera del ordenador de escritorio |

El directorio de copia de seguridad automática local está en el mismo ordenador. Puede ayudar ante un archivo de monedero dañado, pero no protege contra la pérdida de todo el disco, el robo o el ransomware.

<span id="make-a-file-backup" data-ginger-heading="haz-una-copia-de-seguridad-de-archivos" aria-hidden="true"></span>

## Haz una copia de seguridad de archivos

Utiliza la búsqueda de Ginger para abrir **Data Folder**. Anota la ubicación y cierra Ginger normalmente antes de copiar archivos. En una carpeta de datos mainnet normal, `Wallets` contiene archivos `.json` de monedero y sus `.attr` asociados, y `WalletBackups` contiene copias de seguridad automáticas. Otras redes utilizan subdirectorios separados.

Copia los archivos pertinentes a un almacenamiento de copia de seguridad protegido, conservando nombres y la asociación entre cada archivo JSON y ATTR. Una copia de la carpeta de datos es sensible para la privacidad incluso si estableces una frase de contraseña: direcciones, etiquetas, registros, configuración y metadatos de pedidos pueden revelar actividad. No la subas a un gestor de incidencias ni la envíes por correo al soporte.

Con 2FA activado, conserva también `2fa_info.gws`, pero no lo confundas con una clave de recuperación independiente. Registra un identificador utilizado con el servicio 2FA de Ginger. Las palabras de recuperación y la frase de contraseña original siguen siendo la vía que no depende de descifrar ese archivo local de monedero concreto.

<span id="choose-and-preserve-a-passphrase" data-ginger-heading="elige-y-conserva-una-frase-de-contraseña" aria-hidden="true"></span>

## Elige y conserva una frase de contraseña

Utiliza una frase de contraseña difícil de adivinar para otra persona y que puedas reproducir exactamente. Palabras elegidas al azar de una lista definida, o una contraseña fuerte generada por un gestor de contraseñas de confianza, pueden evitar la previsibilidad de nombres, fechas, citas y frases normales. Las sustituciones de apariencia aleatoria elegidas por humanos suelen ser menos impredecibles de lo que parecen.

La entropía describe la impredecibilidad de un proceso concreto de generación; la longitud por sí sola no la establece. Seis palabras elegidas uniformemente de una lista grande y seis de una letra de canción favorita no ofrecen la misma resistencia a los intentos de adivinarlas. Este manual no promete que un número concreto de caracteres venza cualquier ataque.

Anota con precisión el resultado generado y confirma que tu plan de recuperación lo conserva. Evita espacios al principio o al final: la validación de Ginger puede eliminarlos o rechazarlos. Un gestor de contraseñas puede ayudar a conservar una frase fuerte, pero planifica cómo acceder a él tras perder ese mismo ordenador. Guardar palabras y frase de contraseña juntas crea un único punto cuya vulneración expone ambas; separarlas añade una dependencia de recuperación. Elige una organización que puedas mantener de verdad.

Para un monedero de software Ginger, la frase de contraseña también protege el secreto cifrado almacenado. Por eso no debes suponer que un ladrón de archivos o un intento de recuperación tendrá éxito sin ella. No cambies la frase de contraseña a la ligera en otra aplicación de monedero: una frase BIP39 distinta selecciona claves distintas, en lugar de simplemente renombrar la contraseña de acceso del antiguo monedero.

Para compatibilidad de cuentas, importación de archivos o un escaneo que omitió direcciones, utiliza [las opciones avanzadas de recuperación](/es/backup-recovery/recovery-options/).

<span id="a-single-private-key-is-not-the-full-recovery-backup" data-ginger-heading="una-sola-clave-privada-no-es-la-copia-de-seguridad-completa" aria-hidden="true"></span>

## Una sola clave privada no es la copia de seguridad completa

Una moneda física precargada cuyo fabricante generó la clave requiere confiar en que no la conservó. Una sola clave privada impresa o un secreto del fabricante no es la copia de seguridad completa de palabras de Ginger. Conserva las palabras y la frase de contraseña original del monedero de software en vez de suponer que una clave exportada cubre todas sus direcciones.
