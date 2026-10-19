---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin e assinatura de mensagens"
description: "Envie uma solicitação de pagamento PayJoin, compreenda o conhecimento do destinatário, os padrões identificadores das carteiras e o fallback e assine uma mensagem de âmbito restrito sobre o controlo de um endereço."
lang: "pt-PT"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Primeiro, compreenda a pré-visualização normal de envio, o valor do destinatário e a taxa.

PayJoin e assinatura de mensagens são ferramentas separadas. O PayJoin altera a forma como uma transação de pagamento é construída. A assinatura de mensagens comprova o controlo de uma chave para uma declaração específica sem realizar um pagamento. Nenhum desses recursos deve ser usado como motivo para revelar suas palavras de recuperação.

<span id="send-a-payjoin-request" data-ginger-heading="envie-uma-solicitação-payjoin" aria-hidden="true"></span>

## Envie uma solicitação PayJoin

PayJoin é um pagamento colaborativo em que o destinatário pode contribuir com uma entrada. Isso pode enfraquecer a suposição de que todas as entradas de um pagamento com aparência normal pertencem a um único remetente. O destinatário deve fornecer uma URI de pagamento Bitcoin compatível que contenha um endpoint PayJoin; um endereço normal, por si só, não o ativa. O protocolo é descrito na [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

1. Use uma carteira de software com fundos gastáveis. O PayJoin aceita entradas e troco SegWit e Taproot do remetente. Esta versão rejeita solicitações PayJoin para envios de carteiras de hardware.
2. Cole a URI de pagamento completa em **Send**, em vez de copiar apenas seu endereço. Confira o destino e o valor pelo mesmo canal de confiança que usaria para qualquer pagamento.
3. Confira a pré-visualização da transação e o indicador de PayJoin e autorize o pagamento se o valor e as definições de taxas forem aceitáveis. O PayJoin é um procedimento para um único destinatário; não pode ser combinado com um pagamento em lote ou com o desconto da taxa do valor do destinatário.
4. Confira a transação resultante no histórico.

A implementação desta versão pode recorrer à transação de pagamento normal se a construção de PayJoin falhar. Portanto, autorizar esse processo não garante que a transação transmitida seja um PayJoin. Não o use quando o fallback para pagamento normal violar sua exigência de privacidade.

Na mainnet, um endpoint comum da Internet deve usar HTTPS. Um endpoint `.onion` com HTTP ou HTTPS é aceite quando o Tor está ativado e rejeitado quando o Tor está desativado. Outros esquemas de URL são rejeitados. Se o endpoint não for compatível, o Ginger ignora o endpoint PayJoin; portanto, confira se a pré-visualização ainda identifica o pagamento como PayJoin antes de continuar.

Este guia aborda o envio de uma solicitação fornecida pelo destinatário. O processo normal de **Receive** do Ginger não opera um servidor de receção PayJoin, e esta versão não fornece um procedimento de configuração de um para o utilizador.

<span id="negotiated-outputs-and-fees" data-ginger-heading="saídas-e-taxas-negociadas" aria-hidden="true"></span>

## Saídas e taxas negociadas

A solicitação de pagamento pode restringir a substituição de saídas com `pjos=0`. O Ginger encaminha essa restrição ao destinatário e rejeita uma proposta que substitua a saída de pagamento solicitada ou reduza seu valor. Se a substituição for permitida, o destinatário pode usar uma saída de receção diferente durante a negociação. A entrada acrescentada pelo destinatário também pode tornar a saída de receção on-chain maior que o valor do seu pagamento.

O Ginger informa uma contribuição adicional máxima para a taxa de mineração, calculada automaticamente a partir da taxa por byte virtual original. Ele rejeita uma proposta que faça sua carteira contribuir acima desse limite informado. Essa rejeição usa a alternativa de pagamento comum descrita acima; ela não necessariamente cancela o pagamento.

A pré-visualização é construída antes da negociação final do PayJoin, que ocorre após a autorização. A transação negociada pode ter uma taxa diferente da pré-visualização original. O Ginger recalcula as informações de taxas da transação concluída a partir da transação final, mas não mostra uma segunda pré-visualização de confirmação após a negociação. Confira a transação final no histórico e não trate o indicador inicial de PayJoin como prova de que a negociação foi bem-sucedida.

<span id="what-the-recipient-and-an-observer-learn" data-ginger-heading="o-que-o-destinatário-e-um-observador-descobrem" aria-hidden="true"></span>

## O que o destinatário e um observador descobrem

O destinatário já conhece a solicitação de pagamento, seu endereço de receção e o valor pretendido. Se a solicitação estiver vinculada a um pedido identificado, o PayJoin não apaga essa identidade. Durante a negociação, o serviço de receção também vê a transação de pagamento proposta, incluindo as entradas propostas pelo remetente. Não deve ser tratado como alguém de quem o próprio pagamento esteja oculto.

Antes de enviar a solicitação de negociação, o Ginger remove os metadados de origem das chaves da carteira, incluindo caminhos de derivação Taproot e chaves públicas estendidas globais. Isso reduz as informações desnecessárias sobre a carteira enviadas ao destinatário; as entradas, saídas e valores da transação proposta continuam visíveis para ele.

Um observador externo vê a transação eventualmente publicada no Bitcoin. Um PayJoin bem-sucedido pode tornar a suposição usual de que “todas as entradas pertencem ao remetente” pouco fiável. Esse benefício depende da transação e das outras informações que o observador possui; não garante que a transação seja indistinguível de todo pagamento normal.

Separe esses públicos. Um destinatário pode descobrir detalhes pelo pedido ou pela negociação mesmo que um observador sem relação não consiga atribuir com confiança as entradas da transação. Um explorador público de transações pode criar outra exposição se consultar o pagamento numa sessão de navegador identificada.

<span id="wallet-fingerprints-and-the-ordinary-payment-fallback" data-ginger-heading="padrões-identificadores-das-carteiras-e-o-fallback-para-pagamento-normal" aria-hidden="true"></span>

## Padrões identificadores das carteiras e o fallback para pagamento normal

As carteiras fazem escolhas sobre os tipos de endereço das entradas, a estrutura da transação e a assinatura. Combinações dessas escolhas podem deixar padrões reconhecíveis. Uma transação pode, portanto, perder parte da ambiguidade mesmo quando suas mensagens do protocolo PayJoin são válidas. Os [exemplos publicados de padrões identificadores em PayJoin](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/) ilustram esse problema em combinações específicas de carteiras; não estabelecem que o Ginger tenha os mesmos problemas nem quantificam sua privacidade.

Como utilizador, escolha um serviço de receção atualizado e compatível, verifique a solicitação de pagamento e confira a taxa e o valor propostos. Não altere opções de transação que desconhece apenas para imitar outra carteira: uma transação de aparência plausível não comprova um bom resultado de privacidade.

Se exige um pagamento colaborativo, combine um método compatível com o destinatário antes de autorizar o processo de envio do Ginger. O fallback para pagamento normal significa que uma negociação malsucedida ainda pode resultar num pagamento válido. Após a transmissão, não envie novamente apenas porque o resultado está incerto; primeiro confira a transação e o estado do pagamento junto ao destinatário. Uma negociação PayJoin malsucedida e um pagamento Bitcoin malsucedido são situações diferentes.

<span id="sign-a-message-for-an-address" data-ginger-heading="assine-uma-mensagem-para-um-endereço" aria-hidden="true"></span>

## Assine uma mensagem para um endereço

Alguns serviços pedem que demonstre que controla um endereço de receção. Abra o menu da carteira e escolha **Sign Message**. Insira um endereço pertencente a esta carteira e a declaração exata que pretende assinar. O Ginger rejeita endereços que não pertencem a ela. Insira a mensagem, escolha **Continue** e copie a assinatura resultante para o verificador pretendido.

Para uma carteira de hardware, siga a solicitação de assinatura do dispositivo; a disponibilidade depende do dispositivo e da compatibilidade com a assinatura de mensagens. Uma carteira só de observação sem dispositivo de assinatura não consegue produzir uma assinatura. O tipo de endereço e o formato de assinatura aceite pelo verificador também precisam ser compatíveis.

Leia a mensagem com o mesmo cuidado de uma declaração de autorização. Prefira um texto de âmbito restrito que identifique o destinatário, a finalidade e a data ou o desafio. Não assine uma declaração em branco ou cujas consequências não compreenda. Uma assinatura pode ser copiada e mostrada a outras pessoas depois que a partilhar.

A assinatura de mensagens não transfere bitcoin nem estabelece a propriedade de todos os endereços da sua carteira. Ela também cria um vínculo entre o endereço assinado e a pessoa que o verificador identifica como sendo o utilizador. Se uma corretora a solicitar, essa exposição continua a existir mesmo após usar CoinJoin.
