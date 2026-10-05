---
doc_id: "learn-self-custody.security-routine"
title: "Crea una rutina de seguridad de Bitcoin que permita la recuperación"
description: "Crea una rutina de seguridad de Bitcoin que permita recuperar los fondos y responde adecuadamente a la exposición de direcciones, xpubs, archivos de cartera, palabras de recuperación o dispositivos."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Mantén disponible la copia básica de recuperación; usa los pasos de respuesta a incidentes que correspondan a la información expuesta.

Una rutina de seguridad útil protege frente al acceso no autorizado y deja una vía comprensible para una recuperación legítima. Añadir secretos sin documentar sus funciones puede aumentar la probabilidad de una pérdida accidental.

<span id="record-the-recovery-plan" data-ginger-heading="documenta-el-plan-de-recuperación" aria-hidden="true"></span>

## Documenta el plan de recuperación

Mantén un inventario privado de tus carteras, el tipo de firmante que usa cada una, dónde están las copias de seguridad y si se requiere una frase de contraseña BIP39. El inventario no necesita contener los propios secretos. Debe resultar útil cuando el ordenador o el teléfono ya no estén disponibles, no solo mientras recuerdes cómo se configuró todo.

Conserva suficiente información sobre las convenciones de la cartera para reconocer la cuenta recuperada correcta, especialmente si usas dispositivos de hardware o varias carteras. Guarda copias de las etiquetas y los metadatos cuando sean importantes para tus registros; la cadena de bloques no puede reconstruir las notas privadas que escribiste.

Si quieres que otra persona recupere los fondos en caso de incapacidad o fallecimiento, organiza un plan de acceso claro y probado que se adapte a tus circunstancias. Evita compartir ahora todos los secretos de manera informal o suponer que esa persona adivinará a qué contraseña te referías. Los acuerdos de sucesión y acceso pueden tener implicaciones legales que requieran asesoramiento profesional local; esta página no prescribe una estructura jurídica.

<span id="check-before-funding-and-before-signing" data-ginger-heading="comprueba-antes-de-añadir-fondos-y-antes-de-firmar" aria-hidden="true"></span>

## Comprueba antes de añadir fondos y antes de firmar

Verifica la descarga de la aplicación, confirma que la cartera se abre y comprueba la copia de seguridad. En una cartera de hardware, compara las direcciones de recepción en el dispositivo e inspecciona el destino y el importe de cada pago antes de firmarlo.

Usa un importe pequeño para aprender un procedimiento nuevo. Concilia lo que se envió, lo que llegó y las comisiones pagadas. Aumentar el importe no hace que un procedimiento desconocido sea más fácil de diagnosticar.

Mantén el ordenador y el dispositivo de firma actualizados mediante fuentes autenticadas. Un aviso de actualización recibido por mensaje privado no demuestra que un archivo sea legítimo. Nunca instales «software de recuperación» ni permitas el control remoto solo porque un desconocido diga que tus monedas necesitan sincronizarse.

<span id="understand-ginger-2fa" data-ginger-heading="comprende-el-2fa-de-ginger" aria-hidden="true"></span>

## Comprende el 2FA de Ginger

El 2FA opcional de Ginger añade cifrado a los archivos locales de cartera y una verificación con un servicio al iniciar. Puede ser útil frente a algunas formas de acceso a archivos locales, pero introduce una dependencia del autenticador y del servicio para el inicio habitual.

Conserva las palabras de recuperación y la frase de contraseña original disponibles de forma independiente. No supongas que `2fa_info.gws` sea una clave maestra de recuperación sin conexión. Tampoco debes suponer que 2FA detendrá a un atacante que ya tenga las palabras y la frase de contraseña, o que impedirá una transacción autorizada desde una aplicación desbloqueada.

<span id="first-identify-what-was-exposed" data-ginger-heading="identifica-primero-qué-se-expuso" aria-hidden="true"></span>

## Identifica primero qué se expuso

La divulgación de una dirección y la divulgación de las palabras de recuperación necesitan respuestas diferentes. Evita copiar el material sospechoso en una publicación pública o en un «comprobador de carteras» desconocido para diagnosticarlo.

| Elemento expuesto | Qué puede permitir | Primera respuesta |
| --- | --- | --- |
| Una dirección de recepción o un identificador de transacción | Observar esa dirección o transacción y seguir posibles vínculos; no proporciona claves de firma | Detén la reutilización innecesaria y las divulgaciones adicionales; revisa qué identidades y pagos quedaron vinculados |
| Etiquetas, registros de órdenes o exportación del historial de cartera | Asociar transacciones que de otro modo estarían separadas con personas, fines o saldos | Restringe el acceso, conserva una copia privada si hace falta y cambia cómo compartes los registros |
| Una clave pública extendida, habitualmente llamada xpub | Supervisar las direcciones del ámbito de derivación que cubre, posiblemente incluidas las futuras; normalmente no autoriza gastos por sí sola | Identifica la cuenta o rama afectada y considera una cartera nueva si la supervisión continua resulta inaceptable |
| Un archivo de cartera o una copia completa de los datos de la aplicación | La exposición depende del cifrado, las contraseñas disponibles y los demás archivos copiados; puede incluir claves y metadatos privados | Toma en serio la incertidumbre y evalúa la exposición de las claves de firma desde un entorno de confianza |
| Palabras de recuperación y cualquier frase de contraseña requerida, o claves privadas utilizables | Gastar fondos y derivar más claves dentro del ámbito comprometido | Prepara una cartera nueva con claves nuevas en un dispositivo de confianza y mueve los fondos que aún controles |
| Un ordenador robado, una aplicación desbloqueada o una sesión de control remoto | Según su estado, acceder a datos de cartera, operaciones de firma y otras cuentas | Termina el acceso no autorizado y usa un dispositivo de confianza para evaluar y proteger los fondos restantes |

Una clave pública extendida no ofrece necesariamente una vista de todas las cuentas de un dispositivo; su ámbito de derivación importa. Sin embargo, generar otra dirección de recepción bajo una rama pública divulgada normalmente no impide que se siga supervisando esa rama. [BIP32 describe estos límites de derivación de claves públicas](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).

Si solo se divulgaron las palabras de recuperación y usabas una frase de contraseña independiente, el riesgo también depende de si esa frase sigue siendo secreta y de lo difícil que sea adivinarla. No supongas que una frase de contraseña desconocida o débil haga segura indefinidamente la copia expuesta. Si las pruebas son incompletas y la exposición podría autorizar gastos, aplica la respuesta a la exposición de claves.

<span id="respond-to-exposed-signing-keys" data-ginger-heading="responde-a-la-exposición-de-claves-de-firma" aria-hidden="true"></span>

## Responde a la exposición de claves de firma

Cambiar la contraseña del ordenador, desactivar 2FA o reinstalar Ginger no revoca las claves de Bitcoin copiadas. Cambiar el nombre de una cartera tampoco cambia sus claves. Bitcoin no tiene un proceso de soporte que anule una frase de recuperación copiada.

1. Usa un dispositivo en el que tengas motivos para confiar. Si el ordenador original puede estar comprometido, no generes allí la cartera de sustitución.
2. Crea una cartera con información de recuperación nueva y protege su copia de seguridad. No restaures las palabras expuestas y consideres que la cartera restaurada establece una nueva barrera de seguridad.
3. Obtén y verifica una dirección de recepción. Con un dispositivo de hardware, verifícala en el dispositivo de firma; nunca introduzcas sus nuevas palabras de recuperación en el ordenador sospechoso.
4. Transfiere los fondos restantes que aún puedas controlar, revisando cuidadosamente el destino y la comisión. Un atacante con las mismas claves puede competir contigo; evita añadir una espera opcional de CoinJoin antes de proteger los fondos.
5. Comprueba el resultado en la cartera de confianza y supervisa la confirmación. Sustituye las instrucciones de depósito recurrente y los datos públicos antiguos de recepción para que los pagos futuros no sigan llegando a las claves comprometidas.

Mover fondos puede crear una conexión observable en cadena. Conservar el control de los fondos tiene prioridad cuando las claves están comprometidas; puedes volver a considerar la privacidad cuando hayas contenido el problema inmediato de acceso. Un destino nuevo no garantiza que la transferencia sea imposible de vincular.

Conserva los registros necesarios en privado mientras investigas. Nunca entregues a un supuesto agente de soporte las palabras de recuperación, la frase de contraseña, una copia sin restricciones de los archivos de cartera ni acceso al dispositivo de sustitución. No es necesario «validar» nuevas palabras de recuperación en un sitio web.

<span id="respond-to-a-privacy-only-disclosure" data-ginger-heading="responde-a-una-divulgación-que-solo-afecta-a-la-privacidad" aria-hidden="true"></span>

## Responde a una divulgación que solo afecta a la privacidad

Si se expuso una dirección, decide si seguir usándola es aceptable. Puedes recibir los pagos futuros en direcciones nuevas y evitar publicar detalles adicionales de transacciones, pero el observador conserva lo que ya aprendió. No hay una necesidad automática de mover todas las monedas solo porque una dirección se haya hecho pública.

Si se divulgó un xpub, averigua primero qué cuenta cubre. Continuar usando esa cuenta puede exponer la actividad futura. Una cartera nueva con claves independientes establece un conjunto de direcciones distinto, aunque una transferencia directa puede conectar visiblemente los fondos antiguos con ella. Planifica el movimiento y el gasto posterior según quién esté observando y qué sepa. Reinstalar una aplicación de cartera o importar la misma cuenta en otro lugar no elimina la exposición de esa cuenta.

Si se filtraron registros, restringe el acceso adicional y evalúa lo que revelan en conjunto. Un identificador de transacción asociado a un nombre de cliente revela más que cualquiera de los dos por separado. No publiques la filtración completa para demostrar el problema.

<span id="keep-privacy-separate-from-key-protection" data-ginger-heading="distingue-la-privacidad-de-la-protección-de-las-claves" aria-hidden="true"></span>

## Distingue la privacidad de la protección de las claves

Que un observador conozca una transacción no significa necesariamente que tenga las claves para gastarla. A la inversa, un ladrón con las claves puede gastar fondos cuyo historial de transacciones era difícil de analizar. Usa la protección de recuperación y la verificación en el dispositivo para el segundo problema, y las prácticas con direcciones, Tor, la selección de monedas y un uso meditado de CoinJoin para el primero.

Revisa la rutina después de añadir una cartera, cambiar el dispositivo de hardware, activar 2FA o mover las copias de seguridad. Verifica las partes que cambiaron en vez de exponer repetidamente todos los secretos para un ejercicio completo de recuperación innecesario.
