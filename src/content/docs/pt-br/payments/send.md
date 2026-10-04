---
doc_id: "payments.send"
title: "Envie bitcoin e confira as taxas"
description: "Prepare um pagamento no Ginger, verifique o destinatário e o valor, entenda as taxas por tamanho e o troco e autorize a transação."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: Comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são leituras complementares opcionais.

O Ginger não pode desfazer um pagamento Bitcoin confirmado. Antes de confirmar, verifique o destinatário por um canal confiável e confira o destino completo, o valor e a taxa. Comece com um pagamento pequeno ao aprender um novo procedimento.

<span id="prepare-a-payment" data-ginger-heading="prepare-um-pagamento" aria-hidden="true"></span>

## Prepare um pagamento

1. Abra a carteira que contém os fundos e escolha **Send**. Escolha **Automatic** para o processo normal de pagamento. Você pode aprender a seleção manual de moedas separadamente quando precisar dela.
2. Insira o endereço Bitcoin ou URI de pagamento do destinatário em **To:**. Uma solicitação de pagamento pode incluir o valor; confira-o após colar. Se a ação **Scan QR Code** estiver disponível na sua plataforma, você pode usar a câmera e conferir o destino decodificado.
3. Insira o valor e um rótulo informativo do destinatário. Confira se a exibição está em BTC ou moeda fiduciária. Uma estimativa em moeda fiduciária varia com a taxa de câmbio e não é o valor que a rede Bitcoin transfere.
4. Escolha **Continue** e confira a prévia da transação, os fundos selecionados, quaisquer sugestões de privacidade e o troco esperado. Uma sugestão que altera o valor é adequada apenas se ainda atender à solicitação do destinatário.
5. Confira a taxa e o tempo estimado de confirmação. Escolha **Confirm** quando os detalhes estiverem corretos e conclua qualquer autorização por frase de senha ou dispositivo de hardware.
6. Confira no histórico a transação transmitida. Se o resultado estiver incerto após um erro de rede, inspecione o histórico antes de iniciar outro pagamento.

Enviar todos os fundos disponíveis pode descontar a taxa do valor recebido pelo destinatário. Solicitações de valor fixo e PayJoin têm restrições diferentes. A prévia é o lugar para conferir o valor efetivo do destinatário, em vez de presumir que todo o saldo da carteira chegará ao destino.

<span id="check-the-fee-without-custom-settings" data-ginger-heading="confira-a-taxa-sem-configurações-personalizadas" aria-hidden="true"></span>

## Confira a taxa sem configurações personalizadas

Confira a taxa total e a preferência estimada de confirmação na prévia. Uma taxa paga pelo espaço da transação; não é simplesmente uma porcentagem do pagamento. A estimativa de tempo pode mudar e não é uma garantia.

Use uma estimativa de taxa disponível que você entenda. Se as estimativas não estiverem disponíveis e você não souber o que escolher, aguarde e investigue em vez de adivinhar uma taxa personalizada muito alta.

<span id="the-leftover-money-is-change" data-ginger-heading="o-dinheiro-que-sobra-é-troco" aria-hidden="true"></span>

## O dinheiro que sobra é troco

O pagamento pode usar uma parcela de bitcoin maior que o valor do destinatário somado à taxa. O valor restante volta à sua carteira como troco, às vezes em um endereço que você ainda não viu. Você continua controlando-o; não há nada para devolver manualmente.

Uma sugestão de privacidade pode alterar o valor proposto para o destinatário. Aceite-a apenas se ainda atender à solicitação dele. Em particular, não pague menos do que uma fatura de valor fixo para evitar troco.

Referência avançada opcional: [taxas personalizadas e troco](/pt-br/using-ginger/fee/) ou [controle manual de moedas e histórico de transações](/pt-br/payments/coin-control-history/).

<span id="when-a-payment-cannot-be-prepared" data-ginger-heading="quando-não-é-possível-preparar-um-pagamento" aria-hidden="true"></span>

## Quando não é possível preparar um pagamento

Fundos insuficientes podem significar que não há valor gastável suficiente após as taxas, mesmo se o saldo total exibido parecer suficiente. Os fundos também podem estar não confirmados, presos em uma fase crítica de CoinJoin ou fazer parte de uma cadeia não confirmada que não pode ser ampliada no momento.

A ausência da ação de enviar durante a recuperação é esperada. Uma carteira somente de observação não consegue assinar sozinha. Esta versão não aceita endereços ou faturas Lightning; solicite um endereço de pagamento Bitcoin on-chain.
