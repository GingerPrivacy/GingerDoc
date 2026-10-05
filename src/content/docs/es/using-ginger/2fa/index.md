---
doc_id: "backup-recovery.two-factor-authentication"
title: "Usa la autenticación de dos factores en Ginger"
description: "Configura la autenticación de dos factores de Ginger y comprende el cifrado de los archivos de monedero, el requisito de Tor y sus límites de recuperación."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-the-default-2fa-state-of-gingerwallet"></span>
<span id="how-do-i-enable-2fa-in-gingerwallet"></span>
<span id="how-do-i-set-up-2fa-using-an-authenticator-app"></span>
<span id="what-is-the-purpose-of-the-2fagws-file"></span>
<span id="do-i-need-to-restart-the-application-after-enabling-2fa"></span>
<span id="how-does-the-login-process-change-after-enabling-2fa"></span>
<span id="how-do-i-disable-2fa"></span>
<span id="what-should-i-do-if-i-change-devices-or-lose-data"></span>
<span id="what-are-the-security-best-practices-for-using-gingerwallet"></span>
<span id="does-gingerwallet-store-any-personal-information"></span>
<span id="what-happens-if-i-lose-access-to-my-authenticator-app"></span>
<span id="how-does-gingerwallet-ensure-security-with-2fa"></span>
<span id="how-can-i-recover-my-labels-and-extra-options-for-my-wallet-if-ive-lost-the-2fa-key"></span>
<span id="why-does-ginger-wallet-require-an-8-digit-2fa-code"></span>
<span id="what-should-i-do-if-my-authenticator-app-only-provides-6-digit-codes"></span>

> Nivel de lectura: Guía avanzada. Conserva la información de recuperación original y los archivos de monedero antes de cambiar la configuración de recuperación o de los archivos.

La autenticación de dos factores (2FA) opcional de Ginger añade una comprobación al iniciar la aplicación y cifra los archivos locales de monedero. Es independiente de la frase de contraseña de cada monedero. No es una regla de Bitcoin que exija una segunda firma para cada gasto, y no protege una copia de las palabras de recuperación de alguien que también conozca su frase de contraseña.

<span id="understand-the-dependency-first" data-ginger-heading="comprende-primero-la-dependencia" aria-hidden="true"></span>

## Comprende primero la dependencia

Ginger verifica el código del autenticador mediante su servicio de 2FA y obtiene el secreto necesario para descifrar los archivos de monedero protegidos. Por tanto, el proceso habitual de inicio con 2FA requiere una conexión operativa con ese servicio. Para usar esta función, Tor debe estar activado.

El archivo local `2fa_info.gws` almacena un identificador de cliente y servidor. No es una copia cifrada de tus palabras de recuperación ni una clave de recuperación autosuficiente. Copiar únicamente ese archivo no permitirá recuperar un monedero. Ni la frase de contraseña de un monedero ni la activación de 2FA implican que todas las etiquetas, los registros o los archivos auxiliares reciban el mismo cifrado. Protege toda la carpeta de datos y sus copias de seguridad.

Antes de activar 2FA, comprueba que tienes las palabras de recuperación y la frase de contraseña original exacta de cada monedero de software que necesites recuperar. Conserva también copias protegidas de los archivos de monedero y de metadatos.

<span id="enable-2fa" data-ginger-heading="activa-2fa" aria-hidden="true"></span>

## Activa 2FA

1. Abre **Settings** → **Security**. Si es necesario, activa **Network anonymization (Tor)** y reinicia cuando se te indique para que Tor esté activo.
2. Activa **Two-factor authentication**. El diálogo de configuración muestra un código QR para un autenticador.
3. Añade ese código QR a tu autenticador en privado. Contiene un secreto, así que no lo compartas. La configuración de Ginger requiere un autenticador compatible con SHA256 y códigos de ocho dígitos; una entrada predeterminada de seis dígitos creada manualmente no es equivalente.
4. Introduce el código actual y elige **Verify**. Si la verificación falla, comprueba la sincronización de la hora de tu teléfono y que la entrada proceda de esta configuración.
5. Reinicia Ginger según las instrucciones. Completa la solicitud de 2FA al iniciar. Tras un inicio autenticado correcto, Ginger obtiene el secreto de cifrado y se asegura de que los archivos JSON de monedero y sus copias de seguridad automáticas estén cifrados.

No des por hecho que los archivos copiados antes de la configuración o antes del reinicio autenticado hayan adquirido la nueva protección. Protege esas copias anteriores de forma independiente. Activar el interruptor no es motivo para borrar el único material de recuperación que sabes que funciona.

<span id="everyday-use-and-disabling" data-ginger-heading="uso-cotidiano-y-desactivación" aria-hidden="true"></span>

## Uso cotidiano y desactivación

Al iniciar, introduce el código actual del autenticador. Una vez cargada la aplicación, las frases de contraseña de los monederos individuales y las aprobaciones de los dispositivos de hardware siguen cumpliendo sus propias funciones. Un ordenador que ya esté desbloqueado sigue siendo un riesgo de seguridad.

Para desactivar 2FA mientras tienes acceso, abre **Settings** → **Security** y desactiva **Two-factor authentication**. Ginger elimina el cifrado adicional de los archivos de monedero y su asociación local con 2FA. La protección habitual mediante la frase de contraseña de los monederos de software es independiente y sigue siendo relevante. Haz una copia de los archivos resultantes si tu procedimiento de copia de seguridad depende de su estado de cifrado actual.

<span id="lost-phone-missing-file-or-unavailable-service" data-ginger-heading="teléfono-perdido-archivo-ausente-o-servicio-no-disponible" aria-hidden="true"></span>

## Teléfono perdido, archivo ausente o servicio no disponible

La pérdida del autenticador o una interrupción del servicio pueden impedir el inicio habitual. Primero, conserva la carpeta de datos existente. Si un código se rechaza, comprueba la hora y la conectividad; reinstalar repetidamente sobre los mismos datos no recrea un secreto de autenticador perdido.

Para recuperar los fondos de un monedero de software, usa una instalación de confianza independiente o un entorno limpio de la aplicación y restaura con las palabras y la frase de contraseña originales. Verifica el historial conocido y el acceso antes de modificar los archivos antiguos. Las claves recuperadas no dependen de conservar la configuración anterior de 2FA, pero descargar y sincronizar Ginger sigue requiriendo sus servicios de red habituales. Un software de recuperación compatible puede ser una opción si admite los tipos de cuenta originales.

Las etiquetas y otros atributos locales no se reconstruyen a partir de las palabras. Conserva sus copias `.attr` antes de investigar cómo recuperar los metadatos. Conserva los datos de monedero existentes al configurar 2FA o resolver problemas con él.

Si el material de recuperación quedó expuesto, crear un monedero nuevo y transferir los fondos restantes cambia las claves que los controlan. Desactivar 2FA o reinstalar la aplicación no invalida las palabras de recuperación antiguas.
