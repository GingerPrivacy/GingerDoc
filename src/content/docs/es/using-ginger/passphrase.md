---
doc_id: "backup-recovery.passphrase"
title: "¿Qué es una frase de contraseña?"
description: "Comprende la frase de contraseña de tu monedero Ginger, qué respaldar y por qué la recuperación necesita la original aunque una diferente abra un monedero vacío."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "Frase de contraseña"
prev: false
next: false
---

> Nivel de lectura: Empieza aquí. Esta guía cubre monederos de software en Ginger v2.0.26. Para hardware, sigue las instrucciones de recuperación del fabricante y mantén sus palabras fuera del ordenador.

Una frase de contraseña es un secreto opcional que eliges al crear un monedero. En Ginger protege el acceso al monedero de software y también forma parte de su información de recuperación. Para recuperar el mismo monedero necesitas las palabras originales y la frase original exacta, si utilizaste una. Ginger no puede restablecer una frase olvidada.

<span id="do-i-have-to-use-a-passphrase" data-ginger-heading="tengo-que-utilizar-una-frase-de-contraseña" aria-hidden="true"></span>

## ¿Tengo que utilizar una frase de contraseña?

Al crear un monedero, Ginger muestra **Add Passphrase** después de **Confirm Recovery Words**. Puedes introducir y confirmar una frase o dejar ambos campos vacíos para crear sin ella.

Sin frase, quien obtenga tus palabras puede recuperar y gastar tus bitcoin. Una frase añade otro secreto que proteger, pero olvidarla puede impedirte recuperar aunque conserves las palabras. Elige algo difícil de adivinar que puedas registrar y reproducir con precisión. Evita espacios al principio o al final; Ginger los rechaza en sus comprobaciones de entrada.

<span id="is-it-the-same-as-recovery-words-or-a-2fa-code" data-ginger-heading="es-igual-que-las-palabras-o-un-código-2fa" aria-hidden="true"></span>

## ¿Es igual que las palabras o un código 2FA?

No. Ginger genera doce **Recovery Words** para un monedero de software nuevo. Tú eliges la frase por separado. Mantenla fuera de la lista numerada; no la introduzcas como una palabra adicional.

El nombre de tu monedero es solo una etiqueta local. Un código del autenticador 2FA es una comprobación separada de inicio. Ninguno sustituye a palabras y frase originales al recuperar un monedero de software.

<span id="what-should-i-back-up" data-ginger-heading="qué-debo-respaldar" aria-hidden="true"></span>

## ¿Qué debo respaldar?

- Las palabras en el orden mostrado.
- La frase original exacta, incluidas mayúsculas y caracteres, o una nota clara de que creaste sin ella.

Mantén esta información privada y recuperable después de perder el ordenador. Escribe las palabras sin conexión; evita fotos, correo y notas normales en la nube. Conserva también la frase recuperable. Guardarla por separado puede proteger frente a que alguien encuentre ambos secretos juntos, pero asegúrate de poder localizar los dos cuando los necesites. No dependas únicamente de memoria.

Las palabras restauran acceso a bitcoin, pero no todas las etiquetas o ajustes. Conserva archivos existentes durante la investigación de un problema de recuperación. Una copia de seguridad automática en el mismo ordenador no protege contra perderlo.

<span id="how-do-i-check-my-backup" data-ginger-heading="cómo-compruebo-mi-copia-de-seguridad" aria-hidden="true"></span>

## ¿Cómo compruebo mi copia de seguridad?

Mientras tu monedero de software sea accesible, abre **Wallet Settings** → **Tools**. Busca **Verify Recovery Words** y elige **Verify**; introduce después las palabras de la copia de seguridad y completa la comprobación.

Comprueba si esas palabras pertenecen al monedero. No muestra palabras olvidadas ni restablece la frase. Asegura también que su registro sea correcto. Si falla, comprueba ortografía y orden en privado antes de confiar en la copia de seguridad.

<span id="how-do-i-use-the-passphrase-during-recovery" data-ginger-heading="cómo-utilizo-la-frase-durante-la-recuperación" aria-hidden="true"></span>

## ¿Cómo utilizo la frase durante la recuperación?

Estos pasos sirven para recuperar un monedero de software Ginger mediante sus palabras. Conserva los archivos existentes hasta confirmar la recuperación.

1. Abre Ginger en un ordenador fiable. En la pantalla para añadir un monedero, elige **Recover**.
2. Introduce un **Wallet Name** diferente si se solicita, para distinguirlo de los existentes.
3. Introduce las **Recovery Words** originales en orden.
4. En **Enter Passphrase**, introduce y confirma la frase de contraseña original. Deja los campos vacíos solo si el monedero original no tenía frase de contraseña. Aquí no eliges una contraseña nueva.
5. Deja terminar recuperación y sincronización y comprueba tu historial conocido. Sincronizar significa consultar la red en busca de transacciones del monedero.

<span id="why-is-my-recovered-wallet-empty" data-ginger-heading="por-qué-está-vacío-mi-monedero-recuperado" aria-hidden="true"></span>

## ¿Por qué está vacío mi monedero recuperado?

Durante la recuperación mediante palabras, una frase diferente produce otro monedero. Ginger puede aceptar una mal escrita y recuperar un monedero vacío sin indicar un error de frase incorrecta. Es distinto de abrir un archivo protegido existente, donde sí se rechaza la incorrecta.

Comprueba la original, mayúsculas, espacios y distribución del teclado. Comprueba también monedero y red seleccionados y si terminó recuperación. Un escaneo incompleto puede mostrar saldo incompleto. Vacío por sí solo no demuestra que desaparecieron los bitcoin originales.

Si sigue faltando historial previsto, conserva originales y busca ayuda mediante [enlaces de soporte oficiales Ginger](https://gingerwallet.io/). Comparte solo detalles no secretos, como versión y texto del error. Nunca envíes palabras, frase o archivos de monedero al soporte.

<span id="can-i-reset-or-replace-a-forgotten-passphrase" data-ginger-heading="puedo-restablecer-o-sustituir-una-frase-olvidada" aria-hidden="true"></span>

## ¿Puedo restablecer o sustituir una frase olvidada?

Ginger no puede restablecerla. Recuperar con las mismas palabras y otra frase da acceso a un monedero diferente; no cambia la frase original ni mueve sus bitcoin.

Si aún puedes enviar desde el original pero no establecer una copia de seguridad utilizable, crea otro, verifica copia de seguridad y transfiere cuidadosamente mientras tengas acceso. Conserva el antiguo hasta confirmar traslado. Sin acceso de gasto ni información necesaria, el soporte no puede recrear el secreto ausente.
