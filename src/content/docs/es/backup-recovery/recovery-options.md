---
doc_id: "backup-recovery.recovery-options"
title: "Recuperación avanzada: cuentas, escaneo de direcciones y archivos"
description: "Investiga la compatibilidad de recuperación de Ginger, el límite de direcciones sin uso, la importación JSON y los metadatos ausentes tras comprobar las palabras y frase de contraseña originales."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Conserva la información de recuperación original y los archivos de la cartera antes de cambiar la configuración de recuperación o archivos.

Completa primero [las comprobaciones normales de recuperación](/es/backup-recovery/restore/): la cartera prevista, palabras y frase de contraseña originales exactas, conexión y progreso del escaneo. Esta página explica motivos específicos por los que esas comprobaciones pueden no bastar.

<span id="address-scanning-and-account-compatibility" data-ginger-heading="escaneo-de-direcciones-y-compatibilidad-de-cuentas" aria-hidden="true"></span>

## Escaneo de direcciones y compatibilidad de cuentas

La pantalla de recuperación acepta conjuntos válidos de palabras en inglés de 12, 15, 18, 21 o 24 palabras y comprueba su suma de verificación. Que las palabras sean válidas no establece que una cuenta de otra aplicación sea compatible.

Si utilizaste un número inusualmente grande de direcciones de recepción sin usar antes de una que recibió fondos, **Advanced Recovery Options** ofrece **Minimum Gap Limit:**. La pantalla de recuperación publicada utiliza 114 por defecto. Aumentarlo puede ampliar la búsqueda a costa de más trabajo y tiempo; no corrige palabras erróneas, una frase de contraseña equivocada ni un formato incompatible. Utiliza un valor mayor solo cuando tu historial de direcciones lo justifique.

Una cartera creada originalmente por otra aplicación puede utilizar distintos tipos de dirección, cuentas o rutas de derivación. Las palabras BIP39 no garantizan que todas las carteras descubran todas las cuentas. Para las cuentas mainnet estándar de Ginger, SegWit nativo utiliza `m/84'/0'/0'` y Taproot `m/86'/0'/0'`. La recuperación avanzada en otra aplicación debe admitir la cuenta y el tipo de dirección correspondientes. Mantén la recuperación de hardware en un dispositivo de hardware siempre que sea posible.

Ginger no ofrece recuperación mediante fragmentos de recuperación SLIP39 en esta versión. No introduzcas un conjunto de esos fragmentos como si fuera una sola lista BIP39.

<span id="import-a-file" data-ginger-heading="importa-un-archivo" aria-hidden="true"></span>

## Importa un archivo

Elige **Import File** en la pantalla para añadir una cartera y selecciona un archivo `.json` compatible. Ginger puede pedir otro nombre si ya existe uno igual. Un JSON cualquiera, un PSBT de transacción o un xpub arbitrario pegado en un archivo de texto no es un respaldo compatible.

Utiliza la frase de contraseña original para abrir una cartera de software importada protegida. Un archivo cifrado mediante 2FA no equivale a un respaldo portátil sin cifrar. Conserva sus archivos y credenciales relacionados, o recupera mediante las palabras y la frase de contraseña original. Importar una exportación de hardware crea una cartera que sigue dependiendo del dispositivo para firmar.

<span id="what-recovery-does-not-restore" data-ginger-heading="qué-no-restaura-la-recuperación" aria-hidden="true"></span>

## Qué no restaura la recuperación

La cadena de bloques no puede restaurar etiquetas privadas, todos los ajustes de aplicación ni metadatos de pedidos de proveedores. Conserva el archivo `.attr` correspondiente cuando sean importantes. No sobrescribas archivos recién recuperados con metadatos antiguos mientras Ginger esté ejecutándose. Si necesitas ayuda para restaurar datos auxiliares, trabaja con copias y describe los nombres y la versión sin compartir públicamente su contenido.

Conserva los originales y trabaja con copias. Consulta [los respaldos de archivos de cartera](/es/backup-recovery/backup-files/) antes de manipular datos locales.
