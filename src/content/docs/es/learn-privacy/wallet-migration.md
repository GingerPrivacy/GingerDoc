---
doc_id: "learn-privacy.wallet-migration"
title: "Pásate a Ginger sin exponer más historial de monedero"
description: "Compara restaurar las mismas claves de Bitcoin, conectar un dispositivo de hardware a otra aplicación y mover fondos a claves nuevas sin suponer que desaparezcan las divulgaciones anteriores."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Comprende primero las direcciones de recepción nuevas y la revisión habitual de los pagos.

Cambiar de software de monedero cambia la aplicación que utilizas. No cambia necesariamente las claves de Bitcoin, las direcciones ni la información que un servicio anterior ya conoce. Decide si estás recuperando el acceso, cambiando de software por comodidad o creando una nueva separación para la actividad futura.

<span id="choose-the-kind-of-move" data-ginger-heading="elige-el-tipo-de-cambio" aria-hidden="true"></span>

## Elige el tipo de cambio

| Opción | Qué sigue igual | Qué cambia |
| --- | --- | --- |
| Restaurar las mismas palabras de recuperación, frase de contraseña y cuenta compatible | Las claves y direcciones correspondientes | La aplicación que las explora y gestiona; pueden faltar las notas locales |
| Conectar la misma cuenta del dispositivo de hardware a Ginger | Las claves guardadas en el dispositivo y las direcciones de esa cuenta | La aplicación de escritorio que conserva su información pública de cuenta |
| Crear un monedero nuevo con claves nuevas y transferir fondos | El historial existente permanece en la cadena de bloques | Las claves y direcciones futuras; se necesitan una copia de seguridad independiente y una transferencia en cadena |

Restaurar el mismo monedero no mueve su bitcoin, así que no hay una comisión de red únicamente por restaurarlo. Una transferencia en cadena a claves nuevas sí cuesta una comisión y crea una transacción visible. Son operaciones diferentes aunque ambas terminen mostrando un saldo en Ginger.

<span id="understand-what-an-xpub-exposes" data-ginger-heading="comprende-qué-expone-un-xpub" aria-hidden="true"></span>

## Comprende qué expone un xpub

Una clave pública extendida, habitualmente llamada xpub, permite al software derivar una rama de direcciones públicas sin tener su autoridad habitual de firma. Un xpub de cuenta suele revelar más de una dirección de recepción, incluidas las futuras direcciones derivadas de esa cuenta. Su alcance depende de su posición en el árbol de claves; no revela todas las demás cuentas con derivación endurecida. [BIP32: Monederos deterministas jerárquicos](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

Una aplicación anterior de monedero, un servicio de seguimiento de patrimonio o una herramienta contable pueden haber recibido un xpub o consultas de direcciones. Eliminar esa aplicación no revoca las copias que existan en otros lugares. Continuar usando la misma cuenta puede permitir que ese observador reconozca también la actividad posterior. Tor puede ocultar una conexión IP directa; no puede hacer que el servicio receptor olvide la información de monedero que le enviaste.

Si no sabes qué recibió un servicio, considera que existe esa incertidumbre. No subas un xpub a un «comprobador de privacidad» en línea para investigarlo.

<span id="restore-access-to-an-existing-software-wallet" data-ginger-heading="restaura-el-acceso-a-un-monedero-de-software-existente" aria-hidden="true"></span>

## Restaura el acceso a un monedero de software existente

1. Conserva las copias de seguridad y los registros originales antes de modificar una instalación. Una migración no es motivo para borrar los únicos archivos de monedero que sabes que funcionan.
2. Usa el proceso de recuperación de Ginger con las palabras originales del monedero y la frase de contraseña original exacta. Confirma que el formato de monedero, los tipos de dirección y la cuenta sean compatibles. Una frase mnemónica válida por sí sola no demuestra compatibilidad.
3. Deja que termine la exploración. Compara transacciones conocidas o una dirección de recepción de tus registros privados antes de concluir que una pantalla vacía significa que el dinero ha desaparecido.
4. Revisa las etiquetas restauradas, los ajustes de CoinJoin y la información de privacidad. Las palabras de recuperación recuperan claves; no recrean todas las notas o ajustes guardados por la aplicación anterior.
5. Comprueba el CoinJoin automático y la selección de destino antes de dejar los fondos funcionando sin supervisión. Evita usar dos aplicaciones para gastar las mismas monedas al mismo tiempo.

Una frase de contraseña incorrecta puede producir un monedero distinto y válido. No pruebes ajustes aleatorios de manera indiscriminada, no envíes fondos de prueba a una cuenta vacía que no puedas explicar ni entregues las palabras de recuperación a un desconocido que se presente como soporte para resolver la discrepancia.

<span id="use-the-same-hardware-wallet-in-ginger" data-ginger-heading="usa-el-mismo-monedero-de-hardware-en-ginger" aria-hidden="true"></span>

## Usa el mismo monedero de hardware en Ginger

Añade el dispositivo mediante **Hardware Wallet**, sigue sus solicitudes compatibles de PIN y frase de contraseña y verifica una dirección de recepción en su propia pantalla. Confirma que Ginger muestre la cuenta prevista. La importación habitual de dispositivos en esta versión utiliza SegWit nativo; otro software puede haber mostrado una cuenta o un tipo de dirección diferente.

Conectar el dispositivo permite que Ginger conserve la información pública de monedero mientras las claves de firma permanecen en el dispositivo. No deshace la información ya compartida por la aplicación complementaria del fabricante. Abrir la misma cuenta en otra aplicación de solo observación puede revelar más historial aunque ninguna de las aplicaciones pueda gastar sin el dispositivo.

No importes las palabras de recuperación del dispositivo en el ordenador como solución alternativa a una conexión o cuenta no compatible. Consulta el procedimiento compatible del dispositivo si la cuenta no puede representarse correctamente.

<span id="create-a-new-separation-for-future-activity" data-ginger-heading="crea-una-nueva-separación-para-la-actividad-futura" aria-hidden="true"></span>

## Crea una nueva separación para la actividad futura

Si tu objetivo requiere claves diferentes, crea y verifica un monedero nuevo y su copia de seguridad. Obtén un destino nuevo y haz una prueba pequeña cuando la situación no sea urgente. Confirma que el monedero nuevo pueda recibir y que tengas una vía funcional de firma o recuperación antes de mover el resto previsto.

Revisa las entradas de cada transferencia. Enviar juntas todas las monedas antiguas puede asociar actividades que antes estaban separadas. Una transferencia normal también vincula el historial de sus entradas y salidas. Las claves nuevas por sí solas no ocultan ese vínculo; un procedimiento de CoinJoin meditado puede abordar algunos objetivos de privacidad de vínculos entre transacciones, sujeto a las comisiones, la admisibilidad y el gasto posterior.

Elige cuándo y cómo dejarás de usar las direcciones de recepción antiguas. Actualiza las instrucciones de pago que controles, conserva suficientes registros para reconocer pagos tardíos y no supongas que una dirección compartida anteriormente deja de funcionar porque la hayas eliminado de un sitio web. Conserva el material de recuperación de los monederos que todavía puedan recibir dinero.

<span id="when-the-move-is-urgent" data-ginger-heading="cuando-el-cambio-es-urgente" aria-hidden="true"></span>

## Cuando el cambio es urgente

Un xpub expuesto plantea principalmente un problema de privacidad. Los secretos de firma expuestos plantean un problema inmediato de control de los fondos. Si es posible que un atacante ya pueda gastar los fondos, prioriza un destino de confianza con claves nuevas frente a esperar un proceso de privacidad elaborado. Cambiar la contraseña de una aplicación o poner una semilla expuesta en un dispositivo de hardware nuevo no revoca las claves copiadas.

Después del cambio, revisa los [ejemplos de gasto](/es/learn-privacy/spending-after-coinjoin/) y la [divulgación de información](/es/learn-privacy/information-sharing/). El objetivo sostenible es comprender qué sigue siendo conocido y evitar nuevas divulgaciones innecesarias.
