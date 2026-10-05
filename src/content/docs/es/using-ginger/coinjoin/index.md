---
doc_id: "coinjoin.use-coinjoin"
title: "Usa CoinJoin en Ginger Wallet"
description: "Inicia, pausa y supervisa CoinJoin en Ginger, comprende qué fondos son aptos y evita interrumpir una ronda activa."
lang: "es"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

<span id="what-is-a-coinjoin"></span>
<span id="what-are-the-fees-for-coinjoins"></span>
<span id="do-i-need-to-trust-ginger-with-my-coins"></span>

> Nivel de lectura: Empieza aquí. Los pasos esenciales aparecen primero; las referencias avanzadas son una continuación opcional.

CoinJoin crea una transacción de Bitcoin con otros participantes para que sea más difícil inferir la relación entre sus entradas y salidas. Ginger firma únicamente las entradas de tu monedero; no envías un depósito a una cuenta controlada por el coordinador. Las rondas completadas siguen teniendo comisiones y no garantizan el anonimato.

<span id="before-starting" data-ginger-heading="antes-de-empezar" aria-hidden="true"></span>

## Antes de empezar

Abre un monedero de software del que tengas una copia de seguridad y deja que se sincronice. Debes disponer de bitcoin confirmado, mantener el ordenador conectado y revisar el coste previsto antes de empezar. Las rondas completadas tienen comisiones de minería y también pueden tener una comisión del coordinador; repetir rondas puede añadir costes. La [referencia avanzada sobre costes](/es/using-ginger/annonset/), de consulta opcional, explica el cálculo. Un monedero de hardware puede recibir y enviar pagos normales, pero no puede ser el monedero que firma en el proceso automático de CoinJoin de Ginger.

La comisión del coordinador se comprueba para cada moneda utilizada como entrada en la ronda. Las monedas con un valor de 0.03 BTC (3 000 000 satoshis) o menos no pagan comisión del coordinador. Las monedas de mayor valor normalmente pagan un 0.3% de su valor total, aunque las remezclas que cumplan los requisitos también pueden estar exentas. Las comisiones de minería siguen aplicándose, incluso cuando la comisión del coordinador es cero.

El monedero necesita fondos confirmados y utilizables, además de unas condiciones de ronda adecuadas. Ningún saldo ni tiempo de espera garantiza un inicio inmediato. Lee el estado actual antes de cambiar los ajustes.

<span id="start-and-pause" data-ginger-heading="inicia-y-pausa" aria-hidden="true"></span>

## Inicia y pausa

1. Abre **Coinjoin Settings** desde el menú del panel de control de CoinJoin, o búscalo mediante la búsqueda de Ginger mientras el monedero esté abierto.
2. Revisa las preferencias de coste del monedero y, para el procedimiento habitual, deja este mismo monedero como destino de las salidas. Los objetivos personalizados y el encaminamiento de las salidas se explican en la guía avanzada opcional de configuración.
3. Activa **Automatically start coinjoin** si quieres participar sin intervención cuando las condiciones lo permitan. Para iniciar manualmente, usa el botón de inicio del panel de control. Cuando está detenido, puede mostrar **Press Play to start**.
4. Observa el estado debajo del panel de control. El monedero puede esperar confirmaciones, una ronda adecuada o comisiones más baratas antes de participar.
5. Usa el botón de pausa cuando quieras detener las participaciones posteriores. Deja que termine cualquier fase crítica de la transacción. Desactivar el inicio automático cambia el comportamiento futuro; no revierte una transacción que ya se haya difundido.

No envíes bitcoin a una dirección facilitada por alguien que afirme que debe «activar» CoinJoin. No hay ningún pago de activación independiente a un agente de soporte.

<span id="read-the-status" data-ginger-heading="interpreta-el-estado" aria-hidden="true"></span>

## Interpreta el estado

| Mensaje | Significado y siguiente paso |
| --- | --- |
| **Awaiting auto-start of coinjoin** | Está transcurriendo la demora del inicio automático. Mantén el monedero abierto. |
| **Awaiting confirmed funds** | Espera a que se confirmen los fondos entrantes aptos. |
| **Awaiting cheaper coinjoins** | Tus preferencias de coste mantienen el monedero fuera de las rondas actuales. Comprueba los ajustes antes de flexibilizarlos. |
| **Skipping a round for better privacy** | Está activo el salto aleatorio de rondas. No es un fallo de conexión. |
| **Awaiting other participants** | El registro está en curso. Los demás participantes también tienen que completar sus pasos. |
| **Awaiting the blame round** | El intento anterior no pudo completarse; el protocolo vuelve a intentarlo con los participantes aptos. No te está pidiendo que identifiques a nadie. |
| **Insufficient participants, retrying...** | El intento no alcanzó la participación necesaria. Espera otra ronda. |
| **Awaiting closure of send dialog** | Termina o cierra el proceso de pago antes de esperar que CoinJoin se reanude. |
| **Coinjoin may be uneconomical** | Ten en cuenta el umbral de parada. Añadir fondos o anularlo manualmente es una decisión con costes, no una reparación obligatoria. |
| **Coinjoin successful! Continuing...** | Una ronda se completó correctamente. Pueden seguir otras rondas si al monedero todavía le queda trabajo por hacer. |

Si aparecen mensajes de rechazo, conexión o admisibilidad, conserva el texto exacto del error. Reinstalar Ginger o crear nuevas palabras de recuperación no es una respuesta habitual a un estado de espera.

<span id="keep-the-wallet-available" data-ginger-heading="mantén-el-monedero-disponible" aria-hidden="true"></span>

## Mantén el monedero disponible

El monedero necesita tener las claves disponibles mientras participa. Un monedero de software protegido con una frase de contraseña debe abrirse antes de poder firmar. La autenticación de dos factores protege el inicio de la aplicación; no pide al autenticador que apruebe cada ronda.

La suspensión del equipo, la pérdida de conexión a internet o un apagado forzado pueden interrumpir una ronda. Si una transacción ya se difundió, cerrar la aplicación no la deshace. Vuelve a abrir Ginger, deja que se sincronice y comprueba el historial antes de dar por hecho que hubo un fallo o repetir una acción. Nunca envíes un segundo pago solo porque la aplicación se cerró durante el primero.

Según los ajustes generales, la ventana puede cerrarse mientras Ginger sigue funcionando en segundo plano. Para apagarlo completamente, usa la acción normal de salida y deja que termine cualquier fase crítica.

<span id="spend-after-coinjoin" data-ginger-heading="gasta-después-de-coinjoin" aria-hidden="true"></span>

## Gasta después de CoinJoin

Cuando las monedas resultantes se puedan utilizar, puedes gastarlas como cualquier otro bitcoin. La transacción CoinJoin sigue siendo pública. Combinar monedas privadas y no privadas sin relación entre sí, reutilizar una dirección o revelar una transacción a un servicio que te identifica puede crear nuevos vínculos. Revisa las monedas seleccionadas y el cambio al hacer un pago; haber participado en CoinJoin no hace que todas las acciones futuras sean privadas.

<span id="you-do-not-need-to-manage-the-protocol" data-ginger-heading="no-necesitas-gestionar-el-protocolo" aria-hidden="true"></span>

## No necesitas gestionar el protocolo

Ginger se encarga del registro, la firma y los reintentos. Si las comprobaciones básicas del estado no explican lo que ves, consulta las referencias avanzadas opcionales: [detalles de las rondas](/es/coinjoin/round-details/), [ajustes personalizados](/es/coinjoin/settings/) y [comisiones y progreso de privacidad](/es/using-ginger/annonset/).
