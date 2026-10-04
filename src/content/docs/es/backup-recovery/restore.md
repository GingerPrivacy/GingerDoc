---
doc_id: "backup-recovery.restore"
title: "Recupera una cartera o un saldo ausente"
description: "Recupera una cartera Ginger con sus palabras y frase de contraseña originales y comprueba la cartera seleccionada y el progreso del escaneo antes de investigar casos especiales."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

La recuperación busca claves y su historial de transacciones. Antes de empezar, conserva los archivos de cartera del ordenador antiguo si puedes acceder a ellos. Trabaja con copias y mantén los originales hasta verificar la cartera recuperada.

<span id="recover-from-words" data-ginger-heading="recupera-mediante-palabras" aria-hidden="true"></span>

## Recupera mediante palabras

1. Instala y verifica Ginger en un ordenador de confianza. En la pantalla para añadir una cartera, elige **Recover**.
2. Indica un **Wallet Name** si se solicita. Utiliza un nombre distinto para evitar confundirla con una cartera existente.
3. Introduce en orden las palabras de recuperación originales. Utiliza el respaldo real, no un conjunto nuevo de palabras.
4. En **Enter Passphrase**, introduce la frase utilizada al crear la cartera original. Déjala vacía solo si la original no tenía frase de contraseña. No estás estableciendo una contraseña de sustitución.
5. Deja que terminen la sincronización y la recuperación. Comprueba transacciones y direcciones conocidas, no solo el valor mostrado en moneda fiduciaria. Algunas acciones normales están ocultas durante la recuperación.

Frases de contraseña diferentes derivan carteras válidas diferentes. Por tanto, un error de escritura puede producir una cartera vacía sin un error de «frase de contraseña incorrecta» durante la recuperación. Comprueba mayúsculas, espacios, distribución del teclado y respaldo original antes de concluir que desaparecieron los fondos.

<span id="an-apparently-empty-recovered-wallet" data-ginger-heading="una-cartera-recuperada-aparentemente-vacía" aria-hidden="true"></span>

## Una cartera recuperada aparentemente vacía

Comprueba primero que has seleccionado la cartera y red previstas. Mainnet y las redes de prueba tienen monedas separadas. Después comprueba la conexión y el progreso de recuperación. Si la aplicación sigue buscando, un saldo incompleto no es el resultado final.

Si esas comprobaciones son correctas pero siguen faltando transacciones conocidas, deja de cambiar ajustes al azar. Una cartera creada con otra aplicación o muchas direcciones sin usar puede necesitar una investigación más específica.

Referencia avanzada opcional: [cuentas, escaneo de direcciones e importación de archivos](/es/backup-recovery/recovery-options/). Explica esos casos sin convertir ajustes de recuperación personalizados en parte del procedimiento normal con palabras.

La recuperación mediante palabras restaura el acceso a las claves correspondientes. Las etiquetas privadas y otros registros locales pueden necesitar un respaldo de archivos separado.

<span id="if-something-is-missing" data-ginger-heading="si-falta-algo" aria-hidden="true"></span>

## Si falta algo

| Qué conservas | Siguiente paso práctico |
| --- | --- |
| Palabras y frase de contraseña original | Recupera en una instalación de confianza |
| Cartera accesible, pero palabras ausentes o inválidas | Crea una cartera nueva respaldada y transfiere los fondos mientras tengas acceso |
| Archivo de cartera y credenciales originales | Intenta importar una copia; conserva todos los archivos acompañantes |
| Palabras, pero frase de contraseña no vacía olvidada | Ginger no puede restablecerla; no confundas una cartera recuperada vacía con una recuperación exitosa |
| Dispositivo de hardware sin respaldo fiable | Sigue el proceso de comprobación del fabricante antes de arriesgar el dispositivo |
| Ni acceso para gastar ni información de recuperación utilizable | El soporte no puede fabricar las claves ausentes |

Nunca entregues tus palabras, frase de contraseña, claves privadas ni archivo de cartera a un «ayudante de recuperación». Un diagnóstico legítimo empieza por detalles no secretos como versión de aplicación, red y texto del error.
