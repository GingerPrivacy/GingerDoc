---
doc_id: "coinjoin.use-coinjoin"
title: "Use CoinJoin no Ginger Wallet"
description: "Inicie, pause e acompanhe o CoinJoin do Ginger, compreenda quais fundos são elegíveis e evite interromper uma ronda ativa."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

<span id="what-is-a-coinjoin"></span>
<span id="what-are-the-fees-for-coinjoins"></span>
<span id="do-i-need-to-trust-ginger-with-my-coins"></span>

> Nível de leitura: Comece aqui. Os passos essenciais aparecem primeiro; as referências avançadas são uma continuação opcional.

O CoinJoin cria uma transação de Bitcoin com outros participantes para dificultar a inferência da relação entre suas entradas e saídas. O Ginger assina apenas as entradas da sua carteira; não envia um depósito para uma conta controlada pelo coordenador. As rondas concluídas ainda têm taxas e não garantem anonimato.

<span id="before-starting" data-ginger-heading="antes-de-começar" aria-hidden="true"></span>

## Antes de começar

Abra uma carteira de software com cópia de segurança e deixe-a sincronizar. Tenha bitcoin confirmado disponível, mantenha o computador ligado e reveja o custo esperado antes de começar. As rondas concluídas têm taxas de mineração e também podem ter uma taxa do coordenador; repetir rondas pode acrescentar custos. A [referência avançada sobre custos](/pt-pt/using-ginger/annonset/), de consulta opcional, explica o cálculo. Uma carteira de hardware pode receber e enviar pagamentos comuns, mas não pode ser a origem das assinaturas no processo automático de CoinJoin do Ginger.

A taxa do coordenador é verificada para cada moeda usada como entrada na ronda. Moedas que valem 0.03 BTC (3 000 000 satoshis) ou menos não pagam taxa do coordenador. Moedas maiores normalmente pagam 0.3% de seu valor total, embora remixes elegíveis também possam ser isentos. As taxas de mineração ainda se aplicam, mesmo quando a taxa do coordenador é zero.

A carteira precisa de fundos confirmados e utilizáveis, além de condições adequadas de ronda. Nenhum saldo ou tempo de espera garante um início imediato. Leia o estado atual antes de alterar as definições.

<span id="start-and-pause" data-ginger-heading="inicie-e-pause" aria-hidden="true"></span>

## Inicie e pause

1. Abra **Coinjoin Settings** no menu do painel de controlo de CoinJoin ou encontre-o pela pesquisa do Ginger enquanto a carteira estiver aberta.
2. Reveja as preferências de custo da carteira e deixe o destino das saídas configurado para essa mesma carteira no procedimento comum. Os objetivos personalizados e o direcionamento de saídas são abordados no guia avançado opcional de definições.
3. Ative **Automatically start coinjoin** se quiser participar sem supervisão quando as condições permitirem. Para iniciar manualmente, use o botão de início do painel de controlo. Quando parado, o painel pode exibir **Press Play to start**.
4. Observe o estado abaixo do painel de controlo. A carteira pode esperar confirmações, uma ronda adequada ou taxas mais baixas antes de participar.
5. Use o controlo de pausa quando quiser interromper as próximas participações. Deixe qualquer fase crítica da transação terminar. Desativar o início automático muda o comportamento futuro; não reverte uma transação já transmitida.

Não envie bitcoin para um endereço fornecido por alguém que alegue ser necessário “ativar” o CoinJoin. Não existe um pagamento separado de ativação para um agente de apoio.

<span id="read-the-status" data-ginger-heading="interprete-o-estado" aria-hidden="true"></span>

## Interprete o estado

| Mensagem | Significado e próximo passo |
| --- | --- |
| **Awaiting auto-start of coinjoin** | O atraso de início automático está em curso. Mantenha a carteira aberta. |
| **Awaiting confirmed funds** | Espere os fundos recebidos elegíveis serem confirmados. |
| **Awaiting cheaper coinjoins** | As suas preferências de custo estão a manter a carteira fora das rondas atuais. Verifique as definições antes de flexibilizá-las. |
| **Skipping a round for better privacy** | A opção de saltar rondas aleatoriamente está ativa. Isso não é uma falha de ligação. |
| **Awaiting other participants** | O registo está em curso. Os outros participantes também precisam completar seus passos. |
| **Awaiting the blame round** | A tentativa anterior não pôde ser concluída; o protocolo está a tentar novamente com os participantes elegíveis. Não é um pedido para que identifique alguém. |
| **Insufficient participants, retrying...** | A tentativa não atingiu a participação necessária. Espere outra ronda. |
| **Awaiting closure of send dialog** | Conclua ou feche o procedimento de pagamento antes de esperar que o CoinJoin seja retomado. |
| **Coinjoin may be uneconomical** | Considere o limite de paragem. Acrescentar fundos ou ignorá-lo manualmente é uma escolha com custos, não uma correção obrigatória. |
| **Coinjoin successful! Continuing...** | Uma ronda foi concluída. Outras rondas podem ocorrer se a carteira ainda tiver trabalho a fazer. |

Para mensagens de rejeição, ligação e elegibilidade, preserve o texto exato do erro. Reinstalar o Ginger ou criar novas palavras de recuperação não é uma resposta normal a um estado de espera.

<span id="keep-the-wallet-available" data-ginger-heading="mantenha-a-carteira-disponível" aria-hidden="true"></span>

## Mantenha a carteira disponível

A carteira precisa ter as chaves disponíveis enquanto participa. Uma carteira de software protegida por frase de segurança precisa ser aberta antes de poder assinar. A autenticação de dois fatores protege o arranque; ela não pede ao autenticador que aprove cada ronda.

A suspensão do computador, a perda da ligação com a internet ou um encerramento forçado podem interromper uma ronda. Se uma transação já foi transmitida, fechar o programa não a desfaz. Reabra o Ginger, deixe-o sincronizar e verifique o histórico antes de presumir uma falha ou repetir uma ação. Nunca envie um segundo pagamento apenas porque o programa fechou durante o primeiro.

A janela pode fechar enquanto o Ginger continua em segundo plano, dependendo das definições gerais. Para encerrar completamente, use a ação normal de saída e deixe qualquer fase crítica terminar.

<span id="spend-after-coinjoin" data-ginger-heading="gaste-depois-do-coinjoin" aria-hidden="true"></span>

## Gaste depois do CoinJoin

Depois que as moedas resultantes ficarem utilizáveis, poderá gastá-las como qualquer outro bitcoin. A transação de CoinJoin continua pública. Combinar moedas privadas e não privadas sem relação entre si, reutilizar um endereço ou divulgar uma transação a um serviço que o identifica pode criar novos vínculos. Reveja as moedas selecionadas e o troco ao fazer um pagamento; um CoinJoin anterior não torna privadas todas as ações futuras.

<span id="you-do-not-need-to-manage-the-protocol" data-ginger-heading="não-precisa-gerir-o-protocolo" aria-hidden="true"></span>

## Não precisa gerir o protocolo

O Ginger cuida do registo, das assinaturas e das novas tentativas. Se as verificações básicas de estado não explicarem o que vê, use as referências avançadas opcionais: [detalhes das rondas](/pt-pt/coinjoin/round-details/), [definições personalizadas](/pt-pt/coinjoin/settings/) e [taxas e progresso de privacidade](/pt-pt/using-ginger/annonset/).
