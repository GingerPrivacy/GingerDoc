---
doc_id: "coinjoin.settings"
title: "Configura CoinJoin y las carteras de destino"
description: "Comprende los ajustes de privacidad y coste de CoinJoin en Ginger, las monedas excluidas y el envío de salidas de CoinJoin a otra cartera cargada."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Comprende primero los controles habituales de inicio y pausa y el hecho de que las rondas completadas tienen comisiones.

**Coinjoin Settings** se aplica a la cartera seleccionada. Cambia un ajuste cada vez y observa su efecto. Los ajustes más agresivos pueden aumentar las comisiones o el tiempo de espera sin mejorar la privacidad que importe en tu situación.

<span id="automatic-participation-and-cost-preferences" data-ginger-heading="participación-automática-y-preferencias-de-coste" aria-hidden="true"></span>

## Participación automática y preferencias de coste

| Ajuste | Qué controla |
| --- | --- |
| **Automatically start coinjoin** | Inicia la participación cuando la cartera y unos fondos adecuados están disponibles. |
| **Stop coinjoin threshold** | Detiene el CoinJoin automático cuando el saldo de la cartera está por debajo del importe BTC seleccionado. Es una regla de parada a nivel de cartera. No establece el umbral de exención de comisiones del coordinador ni la entrada mínima aceptada. |
| **Coinjoin time preference** | Compara las comisiones de minería actuales con la mediana del período seleccionado. Influye en cuándo participar, no en una fecha límite de finalización prometida. |
| **Ignore coinjoin time preference below** | Permite participar por debajo de este umbral de tasa de comisión incluso cuando la comparación de preferencia temporal indicaría esperar. |
| **Random Skip** | Selecciona con qué frecuencia se omiten rondas adecuadas. Las opciones son **Disabled**, **Rarely**, **Sometimes** y **Often**. Omitir más rondas generalmente implica esperar más. |

Cuando el reproductor informa de un saldo antieconómico, pulsar el botón de inicio puede eludir el umbral de parada. Eso no elimina las comisiones de transacción. Considera los importes de las monedas disponibles y los costes previstos antes de anularlo.

<span id="privacy-settings" data-ginger-heading="ajustes-de-privacidad" aria-hidden="true"></span>

## Ajustes de privacidad

**Anonymity score target** es la puntuación interna mínima para que Ginger considere privada una moneda. El editor de la versión publicada acepta números enteros de 2 a 1000. Subir el objetivo puede generar más actividad de CoinJoin; no compra una garantía de que exactamente ese número de personas independientes puedan ser propietarias de la moneda.

**Single non-private coin restriction** permite solo una moneda con puntuación de anonimato 1 en un registro. Esto puede reducir la asociación directa creada al registrar juntas varias monedas que antes no eran privadas, pero también puede ralentizar el progreso de una cartera con muchas monedas de ese tipo.

Bajar el objetivo puede cambiar inmediatamente lo que la interfaz llama privado sin cambiar la cadena de bloques. Considera los indicadores de privacidad como estimaciones y ajustes de política, no como pruebas de que un observador externo haya perdido toda la información.

<span id="exclude-specific-coins" data-ginger-heading="excluye-monedas-concretas" aria-hidden="true"></span>

## Excluye monedas concretas

Abre **Exclude Coins** desde el menú del reproductor de CoinJoin. Revisa la lista de monedas y marca las que quieras excluir de CoinJoin. Vuelve a esta lista para que sean aptas otra vez. La exclusión se aplica a esas monedas; no es una regla permanente para todos los pagos futuros a la misma dirección.

Excluir una moneda de CoinJoin no la bloquea para el gasto normal ni sustituye al almacenamiento en una cartera de hardware. Si todas las monedas disponibles están excluidas, el reproductor puede mostrar **Only excluded funds are available**. Comprueba esta lista antes de cambiar los ajustes de comisiones o privacidad.

<span id="receive-outputs-in-another-wallet" data-ginger-heading="recibe-salidas-en-otra-cartera" aria-hidden="true"></span>

## Recibe salidas en otra cartera

**Coinjoin to this wallet** elige dónde se reciben las salidas de CoinJoin de la cartera de origen. Por defecto, es la propia cartera de origen.

1. Carga en Ginger la cartera de destino prevista. Haz una copia de seguridad y verifica que controlas sus direcciones de recepción.
2. Sin ningún CoinJoin en curso, abre **Coinjoin Settings** de la cartera de origen y elige el destino en **Coinjoin to this wallet**.
3. Comprueba el nombre seleccionado antes de empezar. Solo aparecen carteras cargadas y aptas; no supongas que una cartera que simplemente figure en el disco esté cargada.
4. Después de una transacción completada, comprueba el historial sincronizado de la cartera de destino y el saldo de la de origen.

El destino no puede cambiarse durante un CoinJoin activo. **Esta selección se restablece después de reiniciar Ginger**, así que compruébala de nuevo antes de cada sesión en la que importe el destino. Evita configurar dos carteras para enviarse salidas de CoinJoin entre sí; las opciones disponibles restringen las configuraciones recursivas.

La selección de destino de la versión publicada puede incluir una cartera de hardware cargada. El origen sigue siendo la cartera de software que firma el CoinJoin; un destino de hardware no convierte ese origen en una cartera fría ni permite que la cartera de hardware ejecute CoinJoin por sí misma. Usa únicamente un destino que la aplicación ofrezca realmente y verifica su copia de seguridad y el control de sus direcciones antes de confiar en esta vía.

<span id="experimental-coin-selection" data-ginger-heading="selección-experimental-de-monedas" aria-hidden="true"></span>

## Selección experimental de monedas

La versión ofrece **(EXPERIMENTAL) Improved Coin Selection**. Su configuración es una interfaz avanzada de ajuste, no un requisito previo para CoinJoin. Los controles disponibles son:

| Control | Efecto previsto |
| --- | --- |
| **Force to use low privacy coins** | Exige que la selección incluya una moneda del grupo de menor privacidad. |
| **Can select already private coins** | Permite que el selector utilice monedas que ya estén por encima del objetivo de privacidad. Esa participación todavía puede generar comisiones de minería. |
| **Coin privacy difference normalization for score calculation** | Los valores menores favorecen selecciones con puntuaciones de privacidad más próximas entre sí. |
| **Amount loss normalization for score calculation** | Los valores menores favorecen selecciones con una pérdida relativa de importe menor. |
| **Target coin number per wallet bucket** | Influye en la selección desde grupos sobrerrepresentados de importes de moneda. |
| **Use the Old Coin Selector for fallback** | Compara los resultados de la selección antigua y la nueva y elige entre ellos. |

Mantén los valores iniciales salvo que comprendas las ventajas e inconvenientes del cambio. Son preferencias de selección; no constituyen un límite exacto de la comisión total ni una promesa sobre el número de salidas que producirá una ronda.

<span id="when-another-round-cannot-start" data-ginger-heading="cuando-otra-ronda-no-puede-empezar" aria-hidden="true"></span>

## Cuando otra ronda no puede empezar

En esta versión, el inicio habitual de CoinJoin rechaza una cartera cuyos fondos ya cumplan su objetivo de privacidad y también rechaza una selección disponible compuesta únicamente por monedas privadas. Seleccionar una cartera de destino distinta no elude esta regla. El reproductor puede ocultar el control de reproducción manual cuando todos los fondos son privados. No confíes en excluir todas las monedas no privadas y después forzar una ronda únicamente para reenviar las monedas privadas restantes.

Elige el destino antes de iniciar una participación apta o considera una transferencia normal de fondos que ya sean privados. Bajar los requisitos de privacidad o incluir fondos sin relación solo para hacer que una ronda empiece puede cambiar el resultado de privacidad y el coste.
