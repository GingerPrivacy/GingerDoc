---
doc_id: "coinjoin.use-coinjoin"
title: "Use CoinJoin no Ginger Wallet"
description: "Inicie, pause e acompanhe o CoinJoin do Ginger, entenda quais fundos são elegíveis e evite interromper uma rodada ativa."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

<span id="what-is-a-coinjoin"></span>
<span id="what-are-the-fees-for-coinjoins"></span>
<span id="do-i-need-to-trust-ginger-with-my-coins"></span>

> Nível de leitura: Comece aqui. Os passos essenciais aparecem primeiro; as referências avançadas são uma continuação opcional.

O CoinJoin cria uma transação de Bitcoin com outros participantes para dificultar a inferência da relação entre suas entradas e saídas. O Ginger assina apenas as entradas da sua carteira; você não envia um depósito para uma conta controlada pelo coordenador. As rodadas concluídas ainda têm taxas e não garantem anonimato.

<span id="before-starting" data-ginger-heading="antes-de-começar" aria-hidden="true"></span>

## Antes de começar

Abra uma carteira de software com backup e deixe-a sincronizar. Tenha bitcoin confirmado disponível, mantenha o computador conectado e revise o custo esperado antes de começar. As rodadas concluídas têm taxas de mineração e também podem ter uma taxa do coordenador; repetir rodadas pode acrescentar custos. A [referência avançada sobre custos](/pt-br/using-ginger/annonset/), de consulta opcional, explica o cálculo. Uma carteira de hardware pode receber e enviar pagamentos comuns, mas não pode ser a origem das assinaturas no processo automático de CoinJoin do Ginger.

A taxa do coordenador é verificada para cada moeda usada como entrada na rodada. Moedas que valem 0.03 BTC (3 000 000 satoshis) ou menos não pagam taxa do coordenador. Moedas maiores normalmente pagam 0.3% de seu valor total, embora remixes elegíveis também possam ser isentos. As taxas de mineração ainda se aplicam, mesmo quando a taxa do coordenador é zero.

A carteira precisa de fundos confirmados e utilizáveis, além de condições adequadas de rodada. Nenhum saldo ou tempo de espera garante um início imediato. Leia o estado atual antes de alterar as configurações.

<span id="start-and-pause" data-ginger-heading="inicie-e-pause" aria-hidden="true"></span>

## Inicie e pause

1. Abra **Coinjoin Settings** no menu do painel de controle de CoinJoin ou encontre-o pela pesquisa do Ginger enquanto a carteira estiver aberta.
2. Revise as preferências de custo da carteira e deixe o destino das saídas configurado para essa mesma carteira no procedimento comum. Os objetivos personalizados e o direcionamento de saídas são abordados no guia avançado opcional de configurações.
3. Ative **Automatically start coinjoin** se quiser participar sem supervisão quando as condições permitirem. Para iniciar manualmente, use o botão de início do painel de controle. Quando parado, o painel pode exibir **Press Play to start**.
4. Observe o estado abaixo do painel de controle. A carteira pode esperar confirmações, uma rodada adequada ou taxas mais baixas antes de participar.
5. Use o controle de pausa quando quiser interromper as próximas participações. Deixe qualquer fase crítica da transação terminar. Desativar o início automático muda o comportamento futuro; não reverte uma transação já transmitida.

Não envie bitcoin para um endereço fornecido por alguém que alegue ser necessário “ativar” o CoinJoin. Não existe um pagamento separado de ativação para um agente de suporte.

<span id="read-the-status" data-ginger-heading="interprete-o-estado" aria-hidden="true"></span>

## Interprete o estado

| Mensagem | Significado e próximo passo |
| --- | --- |
| **Awaiting auto-start of coinjoin** | O atraso de início automático está em andamento. Mantenha a carteira aberta. |
| **Awaiting confirmed funds** | Espere os fundos recebidos elegíveis serem confirmados. |
| **Awaiting cheaper coinjoins** | Suas preferências de custo estão mantendo a carteira fora das rodadas atuais. Verifique as configurações antes de flexibilizá-las. |
| **Skipping a round for better privacy** | A opção de pular rodadas aleatoriamente está ativa. Isso não é uma falha de conexão. |
| **Awaiting other participants** | O registro está em andamento. Os outros participantes também precisam completar seus passos. |
| **Awaiting the blame round** | A tentativa anterior não pôde ser concluída; o protocolo está tentando novamente com os participantes elegíveis. Não é um pedido para você identificar alguém. |
| **Insufficient participants, retrying...** | A tentativa não atingiu a participação necessária. Espere outra rodada. |
| **Awaiting closure of send dialog** | Conclua ou feche o procedimento de pagamento antes de esperar que o CoinJoin seja retomado. |
| **Coinjoin may be uneconomical** | Considere o limite de parada. Acrescentar fundos ou ignorá-lo manualmente é uma escolha com custos, não uma correção obrigatória. |
| **Coinjoin successful! Continuing...** | Uma rodada foi concluída. Outras rodadas podem ocorrer se a carteira ainda tiver trabalho a fazer. |

Para mensagens de rejeição, conexão e elegibilidade, preserve o texto exato do erro. Reinstalar o Ginger ou criar novas palavras de recuperação não é uma resposta normal a um estado de espera.

<span id="keep-the-wallet-available" data-ginger-heading="mantenha-a-carteira-disponível" aria-hidden="true"></span>

## Mantenha a carteira disponível

A carteira precisa ter as chaves disponíveis enquanto participa. Uma carteira de software protegida por frase-senha precisa ser aberta antes de poder assinar. A autenticação de dois fatores protege a inicialização; ela não pede ao autenticador que aprove cada rodada.

A suspensão do computador, a perda da conexão com a internet ou um desligamento forçado podem interromper uma rodada. Se uma transação já foi transmitida, fechar o aplicativo não a desfaz. Reabra o Ginger, deixe-o sincronizar e verifique o histórico antes de presumir uma falha ou repetir uma ação. Nunca envie um segundo pagamento apenas porque o aplicativo fechou durante o primeiro.

A janela pode fechar enquanto o Ginger continua em segundo plano, dependendo das configurações gerais. Para encerrar completamente, use a ação normal de saída e deixe qualquer fase crítica terminar.

<span id="spend-after-coinjoin" data-ginger-heading="gaste-depois-do-coinjoin" aria-hidden="true"></span>

## Gaste depois do CoinJoin

Depois que as moedas resultantes ficarem utilizáveis, você poderá gastá-las como qualquer outro bitcoin. A transação de CoinJoin continua pública. Combinar moedas privadas e não privadas sem relação entre si, reutilizar um endereço ou divulgar uma transação a um serviço que identifica você pode criar novos vínculos. Revise as moedas selecionadas e o troco ao fazer um pagamento; um CoinJoin anterior não torna privadas todas as ações futuras.

<span id="you-do-not-need-to-manage-the-protocol" data-ginger-heading="você-não-precisa-gerenciar-o-protocolo" aria-hidden="true"></span>

## Você não precisa gerenciar o protocolo

O Ginger cuida do registro, das assinaturas e das novas tentativas. Se as verificações básicas de estado não explicarem o que você vê, use as referências avançadas opcionais: [detalhes das rodadas](/pt-br/coinjoin/round-details/), [configurações personalizadas](/pt-br/coinjoin/settings/) e [taxas e progresso de privacidade](/pt-br/using-ginger/annonset/).
