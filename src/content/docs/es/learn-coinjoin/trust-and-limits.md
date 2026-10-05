---
doc_id: "learn-coinjoin.trust-and-limits"
title: "¿En qué confías cuando usas CoinJoin?"
description: "Distingue el control de las claves de Bitcoin, los supuestos de privacidad de CoinJoin, la disponibilidad del coordinador, la independencia de los participantes y la verificación del software."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Lee primero la explicación sencilla de CoinJoin.

Con Ginger, conservas la autoridad de firma de Bitcoin en vez de depositar fondos en un saldo controlado por un mezclador. Eso responde a una pregunta importante sobre la custodia. La privacidad, la disponibilidad y la integridad del software plantean preguntas adicionales.

Antes de participar, identifica tu objetivo: quizá quieras que un destinatario conozca menos de tus otros pagos, o reducir los vínculos entre gastos futuros y una recepción conocida públicamente. CoinJoin puede ayudar con la privacidad de los vínculos entre transacciones, pero no puede eliminar información que el destinatario ya haya obtenido de ti.

<span id="four-separate-questions" data-ginger-heading="cuatro-preguntas-independientes" aria-hidden="true"></span>

## Cuatro preguntas independientes

| Pregunta | Protección y supuesto | Qué no demuestra |
| --- | --- | --- |
| ¿Quién puede gastar? | Tu cartera firma sus entradas después de comprobar la transacción propuesta. El coordinador no necesita tus palabras de recuperación. | Protección frente a claves robadas, malware o una transacción que autorices conscientemente al destino equivocado |
| ¿Quién puede vincular las entradas y salidas? | WabiSabi usa credenciales anónimas para ocultar las relaciones entre registros. Los datos públicos de la transacción y otras observaciones siguen existiendo. | Una garantía incondicional frente a un coordinador malicioso, participantes que colaboren contra ti o información externa |
| ¿Quién puede detener el progreso? | Una participación correcta necesita que el coordinador, la red y suficientes participantes que cooperen completen la ronda. | Un tiempo de finalización reservado o un derecho a participar en todas las rondas ofrecidas |
| ¿Qué software estoy ejecutando? | El código abierto permite inspeccionar; verificar la descarga ayuda a establecer el origen y la integridad del archivo que obtuviste. | Una prueba de que todas las compilaciones estén libres de errores, que tu ordenador no esté comprometido o que un servicio remoto ejecute exactamente el código publicado |

El [artículo WabiSabi, sección 7](https://cryptoeconomicsystems.pubpub.org/pub/ficsor-wabisabi-coordinated/release/3) trata por separado la privacidad, los ataques activos y la prevención del robo. Esta guía aplica esa distinción a las decisiones del usuario; no es una auditoría de seguridad de una cartera o un coordinador instalados.

<span id="consider-the-observer" data-ginger-heading="considera-al-observador" aria-hidden="true"></span>

## Considera al observador

Un observador pasivo de la cadena de bloques ve las entradas, salidas e importes de las transacciones y los gastos posteriores. Puede aplicar heurísticas y combinar esos datos con información obtenida en otros lugares. Un comerciante tiene conocimiento adicional de su propia factura y cliente. Un exchange conoce la retirada o el depósito que procesó.

Un participante también conoce sus propias entradas y salidas, lo que descarta algunas posibilidades. Un coordinador gestiona los registros y puede observar los tiempos del protocolo; un coordinador activamente malicioso puede influir en quién participa o en si las rondas se completan. Son capacidades diferentes, así que una afirmación que solo aborde la observación pública de la cadena no debe interpretarse como protección frente a todas ellas.

<span id="apparent-participants-are-not-independent-people" data-ginger-heading="los-participantes-aparentes-no-son-personas-independientes" aria-hidden="true"></span>

## Los participantes aparentes no son personas independientes

Un ataque Sybil significa que un actor aparece como varios participantes. Si un atacante controla la mayor parte de la actividad alrededor de un objetivo, puede excluir sus propias monedas de las posibilidades que considera. Una transacción puede parecer concurrida y ofrecer menos incertidumbre a ese observador que la que tendría un observador desinformado.

Las entradas reales y los costes de minería crean restricciones económicas. No permiten que un usuario normal verifique la identidad independiente de cada participante. Por tanto, el número de entradas, el número de salidas, el volumen de transacciones y la puntuación de anonimato de una cartera no son un censo de personas independientes.

Las rondas mayores pueden ofrecer más posibilidades, pero los importes, el conocimiento de los participantes y las transacciones posteriores siguen siendo importantes. No hay un número de rondas ni un valor objetivo que demuestre que un atacante no haya aprendido nada.

<span id="when-the-coordinator-or-connection-is-unavailable" data-ginger-heading="cuando-el-coordinador-o-la-conexión-no-están-disponibles" aria-hidden="true"></span>

## Cuando el coordinador o la conexión no están disponibles

Las monedas que ya controlan tus claves no se convierten en un saldo que te deba el coordinador. Un intento fallido antes de la difusión no se las transfiere por sí mismo. Sin embargo, durante una ronda activa, Ginger puede necesitar completar trabajo crítico antes de que las monedas estén disponibles para otra acción; usa el control de pausa del panel de control y sigue su estado actual.

Si CoinJoin no puede continuar, pausa e inspecciona el motivo. El envío normal sigue requiriendo una vía de firma disponible, monedas que puedas gastar, información sincronizada y una forma de difundir. Una interrupción del coordinador por sí sola no es motivo para descartar copias de seguridad ni subir palabras de recuperación a un servicio sustituto. El 2FA opcional de Ginger tiene su propia dependencia de servicio para el inicio habitual, así que conserva las palabras y la frase de contraseña original de forma que puedan recuperarse independientemente.

Un rechazo o una ronda fallida no son, por sí solos, pruebas de un ataque ni un juicio sobre tu identidad. A la inversa, una ronda completada no certifica la honestidad del coordinador. Conserva registros privados pertinentes si un problema concreto requiere una investigación.

<span id="decisions-you-can-make" data-ginger-heading="decisiones-que-puedes-tomar" aria-hidden="true"></span>

## Decisiones que puedes tomar

1. Obtén Ginger de su distribución oficial y verifica la descarga. Usa actualizaciones autenticadas y protege la máquina que firma.
2. Mantén Tor activado para la privacidad de red prevista de la cartera. No oculta información que envíes explícitamente al servicio que la recibe.
3. Revisa la cartera seleccionada, el destino de las salidas, las monedas aptas y las preferencias de coste. No subas los límites simplemente para silenciar un error sin explicar.
4. Conserva material de recuperación independiente. Nunca entregues a un coordinador o contacto de soporte tus palabras, frase de contraseña o claves privadas para «desbloquear» una ronda.
5. Revisa el resultado y los gastos posteriores. Una dirección nueva y una puntuación alta no pueden deshacer una nueva divulgación a un destinatario identificado.

Un nodo propio de Bitcoin es útil para las funciones que realmente realiza, como suministrar bloques o estimaciones de comisiones cuando está configurado. No sustituye al coordinador de CoinJoin ni demuestra que los participantes sean independientes. Una cartera de hardware aísla las claves, pero no hace privado el grafo de transacciones.

Para el modelo básico de transacción, lee [CoinJoin explicado](/es/learn-coinjoin/explained/). Para decidir si encaja con un propósito concreto, lee [Cuándo es útil CoinJoin](/es/learn-coinjoin/when-to-use/). Trata las afirmaciones contundentes sobre productos como preguntas que investigar: ¿qué observador, qué supuestos, qué versión del software y qué pruebas?
