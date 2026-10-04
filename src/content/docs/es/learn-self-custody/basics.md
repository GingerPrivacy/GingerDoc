---
doc_id: "learn-self-custody.basics"
title: "Autocustodia de Bitcoin: copias de seguridad, frases de contraseña y carteras físicas"
description: "Aprende quién puede gastar tu bitcoin, qué hace que una copia de recuperación esté completa y en qué se diferencian las carteras de software y físicas de Ginger."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son una continuación opcional.

La autocustodia significa que tú conservas la información necesaria para gastar tu bitcoin. Apruebas un pago sin pedir a un proveedor de cuentas que libere el dinero. A cambio, necesitas proteger esa información, conservar una copia de seguridad utilizable y comprobar cuidadosamente cada pago.

<span id="keys-records-and-recovery" data-ginger-heading="claves-registros-y-recuperación" aria-hidden="true"></span>

## Claves, registros y recuperación

La red Bitcoin mantiene un registro público de las transacciones. Tu cartera usa claves secretas para autorizar el gasto de las partes que controlas. Instalar la aplicación en un ordenador de sustitución no recrea esos secretos; por eso es importante la copia de recuperación.

En una cartera de software de Ginger, las palabras de recuperación y la frase de contraseña original recrean las claves. Los archivos locales de cartera pueden conservar contexto adicional, como etiquetas y ajustes. Un autenticador, el PIN de un dispositivo físico y un archivo copiado del ordenador cumplen funciones distintas; no debes suponer que ninguno de ellos sustituya a la copia de las palabras.

<span id="the-passphrase-changes-the-wallet" data-ginger-heading="la-frase-de-contraseña-cambia-la-cartera" aria-hidden="true"></span>

## La frase de contraseña cambia la cartera

Ginger utiliza una frase de contraseña BIP39 con sus palabras de recuperación. Una frase de contraseña diferente produce claves diferentes. Por eso una recuperación puede completarse correctamente y aun así mostrar una cartera vacía si escribiste mal la frase de contraseña original. [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) define esa relación.

Anota si utilizaste una y consérvala con exactitud. Elige una protección que puedas recuperar, en vez de un secreto complejo que solo exista en tu memoria. Guarda las instrucciones de recuperación de modo que en el futuro puedas distinguir la frase de contraseña de la cartera del inicio de sesión del ordenador o del código del autenticador.

<span id="software-versus-hardware" data-ginger-heading="software-frente-a-dispositivo-físico" aria-hidden="true"></span>

## Software frente a dispositivo físico

| Configuración | Dónde se firma | Responsabilidad práctica |
| --- | --- | --- |
| Cartera de software de Ginger | En el ordenador, utilizando su secreto disponible | Protege el ordenador y la información de recuperación; debe poder firmar para el CoinJoin automático |
| Cartera física utilizada mediante Ginger | En el dispositivo, para las operaciones compatibles | Verifica los detalles en el dispositivo y conserva la copia de recuperación del fabricante |
| Registro de solo observación sin firmante | No puede autorizar un gasto por sí mismo | Protege sus datos públicos sensibles para la privacidad y conserva el acceso a un firmante independiente |

Una cartera física puede reducir la exposición de las claves al malware del ordenador, pero aún puedes autorizar un pago malicioso si no examinas la pantalla del dispositivo. Importar su semilla en una cartera de escritorio cambia la configuración de seguridad: esas claves quedan expuestas a ese ordenador.

<span id="recovery-is-part-of-the-setup" data-ginger-heading="la-recuperación-forma-parte-de-la-configuración" aria-hidden="true"></span>

## La recuperación forma parte de la configuración

Antes de confiar en una cartera, asegúrate de que puedes encontrar y comprender su copia de seguridad. En una cartera de software de Ginger accesible, **Verify Recovery Words** comprueba las palabras que proporcionas. Mantén disponible también la frase de contraseña original. Para una cartera física, usa el procedimiento adecuado del fabricante para comprobar la copia de seguridad sin introducir la semilla en el ordenador.

Conserva más que los archivos de la aplicación. Los instaladores descargados pueden obtenerse de nuevo; un secreto perdido no puede recuperarse del sitio web del proyecto. Piensa en un fallo de disco, la pérdida de un dispositivo y el acceso al lugar donde guardas la copia. Las [indicaciones de seguridad de carteras](https://bitcoin.org/en/secure-your-wallet) de Bitcoin.org explican las copias de seguridad y la protección de dispositivos como prácticas complementarias.

<span id="evaluate-a-wallet-with-evidence" data-ginger-heading="evalúa-una-cartera-con-pruebas" aria-hidden="true"></span>

## Evalúa una cartera con pruebas

Usa versiones oficiales, verifica las firmas y lee los límites de las funciones que quieras utilizar. El código abierto permite la inspección; no demuestra que todos los binarios o dependencias hayan sido auditados. Las fichas externas, como la [entrada de Ginger en Bitcoin.org](https://bitcoin.org/en/wallets/desktop/windows/ginger/) y la [página de Ginger en WalletScrutiny](https://walletscrutiny.com/desktop/gingerwallet/), ofrecen contexto adicional. Comprueba su alcance y sus fechas en vez de considerar que una ficha garantice algo sobre tu versión instalada.

Ginger integra la recuperación de carteras de software, la conexión con dispositivos físicos y las herramientas de privacidad en un procedimiento de escritorio. Lectura avanzada opcional: [crea una rutina de seguridad que permita recuperar la cartera](/es/learn-self-custody/security-routine/), incluidas las respuestas a la exposición de direcciones, datos de cartera o claves.
