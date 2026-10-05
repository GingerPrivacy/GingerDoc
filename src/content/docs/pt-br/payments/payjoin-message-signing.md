---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin e assinatura de mensagens"
description: "Envie uma solicitação de pagamento PayJoin, entenda o conhecimento do destinatário, os padrões identificadores das carteiras e o fallback e assine uma mensagem de escopo restrito sobre o controle de um endereço."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Primeiro, entenda a prévia normal de envio, o valor do destinatário e a taxa.

PayJoin e assinatura de mensagens são ferramentas separadas. O PayJoin altera a forma como uma transação de pagamento é construída. A assinatura de mensagens comprova o controle de uma chave para uma declaração específica sem realizar um pagamento. Nenhum desses recursos deve ser usado como motivo para revelar suas palavras de recuperação.

<span id="send-a-payjoin-request" data-ginger-heading="envie-uma-solicitação-payjoin" aria-hidden="true"></span>

## Envie uma solicitação PayJoin

PayJoin é um pagamento colaborativo em que o recebedor pode contribuir com uma entrada. Isso pode enfraquecer a suposição de que todas as entradas de um pagamento com aparência normal pertencem a um único remetente. O recebedor deve fornecer uma URI de pagamento Bitcoin compatível que contenha um endpoint PayJoin; um endereço normal, por si só, não o ativa. O protocolo é descrito na [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

1. Use uma carteira de software com fundos gastáveis. Esta versão rejeita solicitações PayJoin para envios de carteiras de hardware.
2. Cole a URI de pagamento completa em **Send**, em vez de copiar apenas seu endereço. Confira o destino e o valor pelo mesmo canal confiável que usaria para qualquer pagamento.
3. Confira a prévia da transação e o indicador de PayJoin e autorize o pagamento se o valor e as taxas forem aceitáveis.
4. Confira a transação resultante no histórico.

A implementação desta versão pode recorrer à transação de pagamento normal se a construção de PayJoin falhar. Portanto, autorizar esse processo não garante que a transação transmitida seja um PayJoin. Não o use quando o fallback para pagamento normal violar sua exigência de privacidade.

Use um endpoint HTTPS compatível para a mainnet. Na v2.0.26, as verificações de endpoint rejeitam endpoints onion enquanto o Tor está ativado; uma solicitação que ofereça apenas onion não deve ser tratada como um caminho compatível. Mantenha o Tor ativado e peça ao destinatário uma alternativa compatível, em vez de desativar a privacidade de rede para forçar a solicitação.

Este guia aborda o envio de uma solicitação fornecida pelo destinatário. O processo normal de **Receive** do Ginger não opera um servidor de recebimento PayJoin, e esta versão não fornece um procedimento de configuração de um para o usuário.

<span id="what-the-recipient-and-an-observer-learn" data-ginger-heading="o-que-o-destinatário-e-um-observador-descobrem" aria-hidden="true"></span>

## O que o destinatário e um observador descobrem

O destinatário já conhece a solicitação de pagamento, seu endereço de recebimento e o valor pretendido. Se a solicitação estiver vinculada a um pedido identificado, o PayJoin não apaga essa identidade. Durante a negociação, o serviço de recebimento também vê a transação de pagamento proposta, incluindo as entradas propostas pelo remetente. Não deve ser tratado como alguém de quem o próprio pagamento esteja oculto.

Um observador externo vê a transação eventualmente publicada no Bitcoin. Um PayJoin bem-sucedido pode tornar a suposição usual de que “todas as entradas pertencem ao remetente” pouco confiável. Esse benefício depende da transação e das outras informações que o observador possui; não garante que a transação seja indistinguível de todo pagamento normal.

Separe esses públicos. Um destinatário pode descobrir detalhes pelo pedido ou pela negociação mesmo que um observador sem relação não consiga atribuir com confiança as entradas da transação. Um explorador público de transações pode criar outra exposição se você consultar o pagamento em uma sessão de navegador identificada.

<span id="wallet-fingerprints-and-the-ordinary-payment-fallback" data-ginger-heading="padrões-identificadores-das-carteiras-e-o-fallback-para-pagamento-normal" aria-hidden="true"></span>

## Padrões identificadores das carteiras e o fallback para pagamento normal

As carteiras fazem escolhas sobre os tipos de endereço das entradas, a estrutura da transação e a assinatura. Combinações dessas escolhas podem deixar padrões reconhecíveis. Uma transação pode, portanto, perder parte da ambiguidade mesmo quando suas mensagens do protocolo PayJoin são válidas. Os [exemplos publicados de padrões identificadores em PayJoin](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/) ilustram esse problema em combinações específicas de carteiras; não estabelecem que o Ginger tenha os mesmos problemas nem quantificam sua privacidade.

Como usuário, escolha um serviço de recebimento atualizado e compatível, verifique a solicitação de pagamento e confira a taxa e o valor propostos. Não altere opções de transação que desconhece apenas para imitar outra carteira: uma transação de aparência plausível não comprova um bom resultado de privacidade.

Se você exige um pagamento colaborativo, combine um método compatível com o destinatário antes de autorizar o processo de envio do Ginger. O fallback para pagamento normal significa que uma negociação malsucedida ainda pode resultar em um pagamento válido. Após a transmissão, não envie novamente apenas porque o resultado está incerto; primeiro confira a transação e o estado do pagamento junto ao destinatário. Uma negociação PayJoin malsucedida e um pagamento Bitcoin malsucedido são situações diferentes.

<span id="sign-a-message-for-an-address" data-ginger-heading="assine-uma-mensagem-para-um-endereço" aria-hidden="true"></span>

## Assine uma mensagem para um endereço

Alguns serviços pedem que você demonstre que controla um endereço de recebimento. Abra o menu da carteira e escolha **Sign Message**. Insira um endereço pertencente a esta carteira e a declaração exata que pretende assinar. O Ginger rejeita endereços que não pertencem a ela. Insira a mensagem, escolha **Continue** e copie a assinatura resultante para o verificador pretendido.

Para uma carteira de hardware, siga a solicitação de assinatura do dispositivo; a disponibilidade depende do dispositivo e do suporte à assinatura de mensagens. Uma carteira somente de observação sem dispositivo de assinatura não consegue produzir uma assinatura. O tipo de endereço e o formato de assinatura aceito pelo verificador também precisam ser compatíveis.

Leia a mensagem com o mesmo cuidado de uma declaração de autorização. Prefira um texto de escopo restrito que identifique o destinatário, a finalidade e a data ou o desafio. Não assine uma declaração em branco ou cujas consequências não entenda. Uma assinatura pode ser copiada e mostrada a outras pessoas depois que você a compartilhar.

A assinatura de mensagens não transfere bitcoin nem estabelece a propriedade de todos os endereços da sua carteira. Ela também cria um vínculo entre o endereço assinado e a pessoa que o verificador identifica como você. Se uma corretora a solicitar, essa exposição continua existindo mesmo após você usar CoinJoin.
