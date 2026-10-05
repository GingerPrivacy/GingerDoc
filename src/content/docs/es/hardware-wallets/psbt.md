---
doc_id: "hardware-wallets.psbt"
title: "Usa el procedimiento PSBT"
description: "Prepara una transacción de Bitcoin en Ginger, fírmala con un monedero de hardware mediante un archivo e importa el resultado para difundirlo."
lang: "es"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nivel de lectura: Guía avanzada. Establece primero un monedero de hardware verificado y su copia de seguridad independiente.

Una transacción de Bitcoin parcialmente firmada (PSBT) es un archivo que contiene una transacción y la información necesaria para un firmante. Permite separar la preparación en el ordenador de la firma en un monedero de hardware. Una PSBT puede revelar direcciones, importes e información de monedero, así que trátala como privada incluso antes de que pueda gastar nada.

<span id="prepare-the-wallet-connection" data-ginger-heading="prepara-la-conexión-del-monedero" aria-hidden="true"></span>

## Prepara la conexión del monedero

Necesitas un registro de monedero de hardware compatible en Ginger, vinculado a las claves del dispositivo de firma. Para una exportación JSON de monedero Coldcard compatible, añade el archivo mediante **Import File**. Usa las instrucciones actuales de exportación del fabricante para ese firmware; un archivo de transacción PSBT no es un archivo de importación de monedero.

La exportación contiene información pública de cuenta y una huella del dispositivo, no las palabras de recuperación. Verifica que la dirección de recepción de Ginger coincida con la del dispositivo antes de añadir fondos al monedero. Una cuenta importada con una ruta de derivación o frase de contraseña diferente puede ser un monedero distinto aunque el dispositivo sea el mismo.

<span id="export-a-transaction" data-ginger-heading="exporta-una-transacción" aria-hidden="true"></span>

## Exporta una transacción

1. Abre el monedero de hardware en Ginger. En **Wallet Settings** → **General**, activa **PSBT workflow**.
2. Elige **Send** y prepara el destino y el importe como de costumbre. Revisa las entradas seleccionadas, el cambio y la comisión.
3. En la vista previa, elige **Save PSBT file** y guarda la transacción propuesta. La alternativa **Send Now** sigue el proceso de firma inmediata en vez de guardar para el procedimiento mediante archivos.
4. Transfiere el archivo al dispositivo de firma mediante el método que admita, como un medio extraíble. Sigue las instrucciones de ese dispositivo e inspecciona el destino, el importe, la comisión y el cambio en su pantalla de confianza.
5. Guarda el resultado firmado sin confundirlo con la propuesta original sin firmar.

No apruebes una transacción únicamente porque Ginger la haya preparado. El dispositivo debe autorizar el pago previsto. Mantén las palabras de recuperación fuera tanto del archivo PSBT como del ordenador.

<span id="import-and-broadcast" data-ginger-heading="importa-y-difunde" aria-hidden="true"></span>

## Importa y difunde

Vuelve al monedero de hardware en Ginger y elige **Broadcast**, visible con el procedimiento PSBT. El diálogo de archivos **Import Transaction** acepta archivos de transacción compatibles, incluidos archivos PSBT y de transacciones. Selecciona el resultado firmado e inspecciona la pantalla de difusión antes de enviarlo a la red.

Una PSBT sin firmar o firmada de manera incompleta no puede difundirse como un pago válido. Una firma correcta tampoco garantiza la aceptación si sus entradas ya se han gastado o su comisión ya no cumple las condiciones de la red. Mantén disponible el monedero original, sincroniza y comprueba el historial antes de crear otro pago.

Una vez difundida una transacción, el dispositivo de firma ya no tiene que permanecer conectado para que se confirme. Comprueba la entrada final del historial y las confirmaciones en Ginger. Borrar un archivo firmado no cancela una transacción que otra parte ya podría difundir.

<span id="handle-files-carefully" data-ginger-heading="maneja-los-archivos-con-cuidado" aria-hidden="true"></span>

## Maneja los archivos con cuidado

Usa nombres de archivo que permitan distinguir las propuestas de los resultados firmados. No envíes PSBT por correo ni las subas a un decodificador en línea para inspeccionar tu propia transacción. Protege también las exportaciones sensibles de cuenta: una clave pública extendida puede revelar muchas direcciones aunque no pueda firmar directamente un gasto.

Este procedimiento documenta la interfaz de monederos de hardware de la versión publicada. No establece un coordinador general de multifirma, una API de firma para desarrolladores ni compatibilidad con todos los formatos PSBT producidos por otras aplicaciones.
