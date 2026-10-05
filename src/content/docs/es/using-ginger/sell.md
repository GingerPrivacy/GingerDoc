---
doc_id: "buy-sell.sell-and-orders"
title: "Vende bitcoin y resuelve órdenes de proveedores"
description: "Completa una orden de venta de Ginger con el importe y la dirección exactos del proveedor, sigue su estado y contacta con el soporte adecuado."
lang: "es"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="how-it-works"></span>
<span id="step-1-selecting-your-country"></span>
<span id="step-2-entering-purchase-amount"></span>
<span id="step-3-choosing-an-offer"></span>
<span id="step-4-completing-the-transaction"></span>
<span id="step-5-viewing-transaction-history"></span>
<span id="bitcoin-purchase-faq"></span>
<span id="how-can-i-sell-bitcoin-through-ginger-wallet"></span>
<span id="do-i-need-to-select-my-country-before-selling-bitcoin"></span>
<span id="how-do-i-enter-the-amount-i-want-to-sell"></span>
<span id="are-there-minimum-and-maximum-limits-for-sales"></span>
<span id="how-do-i-choose-the-best-offer-for-my-sale"></span>
<span id="what-happens-after-i-accept-an-offer"></span>
<span id="how-do-i-complete-the-bitcoin-sale-transaction"></span>
<span id="can-i-view-my-past-sales"></span>
<span id="what-does-it-mean-if-a-transaction-is-on-hold"></span>
<span id="can-i-change-the-browser-used-for-redirection"></span>

> Nivel de lectura: Uso cotidiano. Elige esta guía cuando necesites realizar la tarea que describe.

Una venta intercambia bitcoin por el método de pago ofrecido por un proveedor. Ginger ayuda a obtener ofertas y preparar el pago en cadena, pero el proveedor controla el abono en moneda fiduciaria y la revisión de la orden. Lee los requisitos del proveedor antes de comprometer fondos.

<span id="create-and-fund-a-sale" data-ginger-heading="crea-y-financia-una-venta" aria-hidden="true"></span>

## Crea y financia una venta

1. Abre un monedero sincronizado con bitcoin que se pueda gastar y elige **Sell**. Si la acción no aparece, comprueba el progreso de recuperación y si el monedero puede enviar.
2. Selecciona tu país o región cuando se solicite. Introduce el importe que quieres vender y la moneda en la que quieres recibir el pago. Comprueba las unidades y los límites mostrados.
3. Elige **Continue**, filtra **Offers** por método de pago y compara el abono neto y los cargos del proveedor.
4. Elige **Accept**. Completa los pasos del proveedor en el navegador hasta obtener el destino exacto de Bitcoin, el importe y cualquier plazo de pago.
5. Vuelve al diálogo de venta de Ginger y elige **Send**. Introduce o verifica el destino y el importe exactos proporcionados por el proveedor. No supongas que el navegador haya rellenado automáticamente todos los campos correctamente.
6. Revisa la comisión de la transacción y el importe del destinatario antes de confirmar. El importe solicitado por el proveedor debe llegar después de cualquier deducción de comisiones; no confundas por accidente «enviar todo» con pagar una factura de importe fijo.
7. Comprueba el progreso en el historial de transacciones y en **Previous Orders**. Conserva el identificador de la orden del proveedor y el identificador de transacción para tus registros.

El diálogo de venta conserva el contexto del proveedor, pero no elimina tu responsabilidad de comparar la solicitud de pago con la vista previa. Si la cotización caduca antes de enviar, obtén instrucciones actualizadas del proveedor en vez de pagar una dirección antigua de manera especulativa.

<span id="understand-status" data-ginger-heading="comprende-el-estado" aria-hidden="true"></span>

## Comprende el estado

| Estado en los detalles de la orden | Qué hacer |
| --- | --- |
| **Created** | La orden existe; comprueba qué pasos del proveedor quedan pendientes antes de volver a pagar. |
| **Pending** | El procesamiento sigue en curso. Compara el estado del proveedor con el historial del monedero. |
| **Your transaction is on hold. Please contact Support.** | Contacta con el proveedor seleccionado usando el identificador de la orden. Ginger no puede resolver su revisión. |
| **Expired** | No supongas que una cotización o dirección de pago antigua siga siendo utilizable. Consulta al proveedor si ya se enviaron fondos. |
| **Failed** | Comprueba si se transfirió el pago o el bitcoin antes de intentar una nueva orden. |
| **Refunded** | Confirma con el proveedor el método, el destino y la liquidación del reembolso. |
| **Completed** | Verifica la recepción de bitcoin o el abono en moneda fiduciaria previstos mediante el monedero o la cuenta de pago correspondiente. |

Las etiquetas de estado reflejan la información más reciente de la integración del proveedor y pueden retrasarse respecto a los hechos. Un indicador de retención en **Buy** o **Sell** señala una orden que necesita atención; no indica que se haya perdido una clave de monedero.

<span id="which-support-channel-to-use" data-ginger-heading="qué-canal-de-soporte-usar" aria-hidden="true"></span>

## Qué canal de soporte usar

Para las comprobaciones de identidad, los retrasos del abono, los métodos de pago aceptados, las condiciones de reembolso o la retención de una orden, contacta con el proveedor mediante su sitio web autenticado. Facilita el identificador de la orden y únicamente la información de transacción necesaria para ese caso concreto. No publiques datos privados de tu cuenta en incidencias públicas de GitHub.

Si Ginger falla, no abre el navegador o muestra una orden incorrectamente, comunica la versión de la aplicación, el sistema operativo, el texto del error y los pasos mediante los enlaces de soporte oficiales de Ginger. No incluyas palabras de recuperación, frases de contraseña, secretos de 2FA, archivos de monedero ni registros completos sin revisar su contenido.

<span id="privacy-and-fees" data-ginger-heading="privacidad-y-comisiones" aria-hidden="true"></span>

## Privacidad y comisiones

El proveedor puede vincular su solicitud de pago a la identidad o al método de pago que le facilites. Gastar fondos que hayan pasado por CoinJoin no elimina ese registro, y el proveedor puede aplicar su propia política de aceptación. Ginger no puede garantizar que todos los exchanges acepten cualquier historial de transacciones.

Compara el abono cotizado con el importe de bitcoin, la comisión mostrada por el proveedor y la comisión de minería independiente de tu pago. Conserva suficiente valor disponible para esta última. Un saldo bajo, una subida de comisiones o monedas que participen en una fase crítica de CoinJoin pueden impedir el pago inmediato de una orden que, por lo demás, sea válida.
