---
doc_id: "backup-recovery.restore"
title: "Recupera un monedero o un saldo ausente"
description: "Recupera un monedero Ginger con sus palabras y frase de contraseña originales y comprueba el monedero seleccionado y el progreso del escaneo antes de investigar casos especiales."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

La recuperación busca claves y su historial de transacciones. Antes de empezar, conserva los archivos de monedero del ordenador antiguo si puedes acceder a ellos. Trabaja con copias y mantén los originales hasta verificar el monedero recuperado.

<span id="recover-from-words" data-ginger-heading="recupera-mediante-palabras" aria-hidden="true"></span>

## Recupera mediante palabras

1. Instala y verifica Ginger en un ordenador de confianza. En la pantalla para añadir un monedero, elige **Recover**.
2. Indica un **Wallet Name** si se solicita. Utiliza un nombre distinto para evitar confundirlo con un monedero existente.
3. Introduce en orden las palabras de recuperación originales. Utiliza la copia de seguridad real, no un conjunto nuevo de palabras.
4. En **Enter Passphrase**, introduce la frase utilizada al crear el monedero original. Déjala vacía solo si el original no tenía frase de contraseña. No estás estableciendo una contraseña de sustitución.
5. Deja que terminen la sincronización y la recuperación. Comprueba transacciones y direcciones conocidas, no solo el valor mostrado en moneda fiduciaria. Algunas acciones normales están ocultas durante la recuperación.

Frases de contraseña diferentes derivan monederos válidos diferentes. Por tanto, un error de escritura puede producir un monedero vacío sin un error de «frase de contraseña incorrecta» durante la recuperación. Comprueba mayúsculas, espacios, distribución del teclado y copia de seguridad original antes de concluir que desaparecieron los fondos.

<span id="an-apparently-empty-recovered-wallet" data-ginger-heading="un-monedero-recuperado-aparentemente-vacío" aria-hidden="true"></span>

## Un monedero recuperado aparentemente vacío

Comprueba primero que has seleccionado el monedero y red previstos. Mainnet y las redes de prueba tienen monedas separadas. Después comprueba la conexión y el progreso de recuperación. Si la aplicación sigue buscando, un saldo incompleto no es el resultado final.

Si esas comprobaciones son correctas pero siguen faltando transacciones conocidas, deja de cambiar ajustes al azar. Un monedero creado con otra aplicación o muchas direcciones sin usar puede necesitar una investigación más específica.

Referencia avanzada opcional: [cuentas, escaneo de direcciones e importación de archivos](/es/backup-recovery/recovery-options/). Explica esos casos sin convertir ajustes de recuperación personalizados en parte del procedimiento normal con palabras.

La recuperación mediante palabras restaura el acceso a las claves correspondientes. Las etiquetas privadas y otros registros locales pueden necesitar una copia de seguridad de archivos separada.

<span id="if-something-is-missing" data-ginger-heading="si-falta-algo" aria-hidden="true"></span>

## Si falta algo

| Qué conservas | Siguiente paso práctico |
| --- | --- |
| Palabras y frase de contraseña original | Recupera en una instalación de confianza |
| Monedero accesible, pero palabras ausentes o inválidas | Crea un monedero nuevo respaldado y transfiere los fondos mientras tengas acceso |
| Archivo de monedero y credenciales originales | Intenta importar una copia; conserva todos los archivos acompañantes |
| Palabras, pero frase de contraseña no vacía olvidada | Ginger no puede restablecerla; no confundas un monedero recuperado vacío con una recuperación exitosa |
| Dispositivo de hardware sin copia de seguridad fiable | Sigue el proceso de comprobación del fabricante antes de arriesgar el dispositivo |
| Ni acceso para gastar ni información de recuperación utilizable | El soporte no puede fabricar las claves ausentes |

Nunca entregues tus palabras, frase de contraseña, claves privadas ni archivo de monedero a un «ayudante de recuperación». Un diagnóstico legítimo empieza por detalles no secretos como versión de aplicación, red y texto del error.
