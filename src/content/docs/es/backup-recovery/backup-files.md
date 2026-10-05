---
doc_id: "backup-recovery.backup-files"
title: "Archivos de cartera, metadatos y detalles de la frase de contraseña"
description: "Conserva los archivos JSON y ATTR de Ginger, comprende la dependencia del archivo 2FA y mantén recuperable la frase de contraseña sin sustituir el respaldo básico de palabras."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Conserva la información de recuperación original y los archivos de la cartera antes de cambiar la configuración de recuperación o archivos.

Utiliza esta referencia cuando copies datos locales de la cartera o investigues qué conserva un respaldo. Empieza con [la guía básica de respaldo](/es/backup-recovery/backups/) para conocer la información de recuperación que necesita toda cartera de software.

<span id="what-to-keep" data-ginger-heading="qué-conservar" aria-hidden="true"></span>

## Qué conservar

| Elemento del respaldo | Finalidad | Límite importante |
| --- | --- | --- |
| Palabras de recuperación, en orden | Recrear las claves de la cartera | Necesitan la frase de contraseña original si se utilizó una |
| Frase de contraseña original, incluidas mayúsculas y caracteres | Seleccionar la cartera BIP39 correcta y desbloquear su secreto protegido | Ginger no puede restablecerla |
| Archivo `.json` de la cartera | Conservar la información de claves y sincronización almacenada | Un archivo cifrado sigue necesitando sus credenciales; 2FA puede añadir una dependencia de servicio |
| Archivo `.attr` correspondiente | Conservar etiquetas locales y atributos específicos | Contiene metadatos sensibles; las palabras de recuperación no lo restauran |
| Respaldo de recuperación del dispositivo de hardware | Recuperar claves con el proceso del fabricante | Mantenerlo fuera del ordenador de escritorio |

El directorio de respaldo automático local está en el mismo ordenador. Puede ayudar ante un archivo de cartera dañado, pero no protege contra la pérdida de todo el disco, el robo o el ransomware.

<span id="make-a-file-backup" data-ginger-heading="haz-un-respaldo-de-archivos" aria-hidden="true"></span>

## Haz un respaldo de archivos

Utiliza la búsqueda de Ginger para abrir **Data Folder**. Anota la ubicación y cierra Ginger normalmente antes de copiar archivos. En una carpeta de datos mainnet normal, `Wallets` contiene archivos `.json` de cartera y sus `.attr` asociados, y `WalletBackups` contiene respaldos automáticos. Otras redes utilizan subdirectorios separados.

Copia los archivos pertinentes a un almacenamiento de respaldo protegido, conservando nombres y la asociación entre cada archivo JSON y ATTR. Una copia de la carpeta de datos es sensible para la privacidad incluso si estableces una frase de contraseña: direcciones, etiquetas, registros, configuración y metadatos de pedidos pueden revelar actividad. No la subas a un gestor de incidencias ni la envíes por correo al soporte.

Con 2FA activado, conserva también `2fa_info.gws`, pero no lo confundas con una clave de recuperación independiente. Registra un identificador utilizado con el servicio 2FA de Ginger. Las palabras de recuperación y la frase de contraseña original siguen siendo la vía que no depende de descifrar ese archivo local de cartera concreto.

<span id="choose-and-preserve-a-passphrase" data-ginger-heading="elige-y-conserva-una-frase-de-contraseña" aria-hidden="true"></span>

## Elige y conserva una frase de contraseña

Utiliza una frase de contraseña difícil de adivinar para otra persona y que puedas reproducir exactamente. Palabras elegidas al azar de una lista definida, o una contraseña fuerte generada por un gestor de contraseñas de confianza, pueden evitar la previsibilidad de nombres, fechas, citas y frases normales. Las sustituciones de apariencia aleatoria elegidas por humanos suelen ser menos impredecibles de lo que parecen.

La entropía describe la impredecibilidad de un proceso concreto de generación; la longitud por sí sola no la establece. Seis palabras elegidas uniformemente de una lista grande y seis de una letra de canción favorita no ofrecen la misma resistencia a los intentos de adivinarlas. Este manual no promete que un número concreto de caracteres venza cualquier ataque.

Anota con precisión el resultado generado y confirma que tu plan de recuperación lo conserva. Evita espacios al principio o al final: la validación de Ginger puede eliminarlos o rechazarlos. Un gestor de contraseñas puede ayudar a conservar una frase fuerte, pero planifica cómo acceder a él tras perder ese mismo ordenador. Guardar palabras y frase de contraseña juntas crea un único punto cuya vulneración expone ambas; separarlas añade una dependencia de recuperación. Elige una organización que puedas mantener de verdad.

Para una cartera de software Ginger, la frase de contraseña también protege el secreto cifrado almacenado. Por eso no debes suponer que un ladrón de archivos o un intento de recuperación tendrá éxito sin ella. No cambies la frase de contraseña a la ligera en otra aplicación de cartera: una frase BIP39 distinta selecciona claves distintas, en lugar de simplemente renombrar la contraseña de acceso de la antigua cartera.

Para compatibilidad de cuentas, importación de archivos o un escaneo que omitió direcciones, utiliza [las opciones avanzadas de recuperación](/es/backup-recovery/recovery-options/).

<span id="a-single-private-key-is-not-the-full-recovery-backup" data-ginger-heading="una-sola-clave-privada-no-es-el-respaldo-completo" aria-hidden="true"></span>

## Una sola clave privada no es el respaldo completo

Una moneda física precargada cuyo fabricante generó la clave requiere confiar en que no la conservó. Una sola clave privada impresa o un secreto del fabricante no es el respaldo completo de palabras de Ginger. Conserva las palabras y la frase de contraseña original de la cartera de software en vez de suponer que una clave exportada cubre todas sus direcciones.
