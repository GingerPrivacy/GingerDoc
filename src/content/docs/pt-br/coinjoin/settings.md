---
doc_id: "coinjoin.settings"
title: "Configure o CoinJoin e as carteiras de destino"
description: "Entenda as configurações de privacidade e custo do CoinJoin no Ginger, a exclusão de moedas e o envio das saídas do CoinJoin para outra carteira carregada."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, entenda os controles comuns de iniciar e pausar e o fato de que rodadas concluídas têm custos de taxas.

**Coinjoin Settings** se aplica à carteira selecionada. Altere uma configuração por vez e observe seu efeito. Configurações mais agressivas podem aumentar as taxas ou o tempo de espera sem melhorar a privacidade que importa na sua situação.

<span id="automatic-participation-and-cost-preferences" data-ginger-heading="participação-automática-e-preferências-de-custo" aria-hidden="true"></span>

## Participação automática e preferências de custo

| Configuração | O que ela controla |
| --- | --- |
| **Automatically start coinjoin** | Inicia a participação quando a carteira e os fundos adequados estão disponíveis. |
| **Stop coinjoin threshold** | Interrompe o CoinJoin automático quando o saldo da carteira está abaixo do valor em BTC selecionado. É uma regra de parada no nível da carteira. Ela não define o limite de isenção da taxa do coordenador nem a entrada mínima aceita. |
| **Coinjoin time preference** | Compara as taxas de mineração atuais com a mediana do período selecionado. Influencia quando participar, sem prometer um prazo de conclusão. |
| **Ignore coinjoin time preference below** | Permite a participação abaixo deste limite de taxa, mesmo quando a comparação da preferência de tempo normalmente levaria à espera. |
| **Random Skip** | Seleciona a frequência com que rodadas adequadas são ignoradas. As opções são **Disabled**, **Rarely**, **Sometimes** e **Often**. Ignorar mais rodadas geralmente significa esperar mais. |

Quando o painel de participação informa que o saldo não é econômico, pressionar o botão de iniciar pode contornar o limite de parada. Isso não elimina as taxas da transação. Considere o tamanho das moedas disponíveis e os custos esperados antes de ignorar esse limite.

<span id="privacy-settings" data-ginger-heading="configurações-de-privacidade" aria-hidden="true"></span>

## Configurações de privacidade

**Anonymity score target** é a pontuação interna mínima para o Ginger considerar uma moeda privada. O editor desta versão aceita números inteiros de 2 a 1000. Aumentar a meta pode levar a mais atividade de CoinJoin; isso não compra uma garantia de que exatamente esse número de pessoas independentes poderia possuir a moeda.

**Single non-private coin restriction** permite apenas uma moeda com pontuação de anonimato 1 em um registro. Isso pode reduzir a associação direta criada pelo registro conjunto de várias moedas anteriormente não privadas, mas também pode retardar o progresso em uma carteira com muitas dessas moedas.

Reduzir a meta pode mudar imediatamente o que a interface chama de privado sem alterar a blockchain. Trate os indicadores de privacidade como estimativas e configurações de política, não como prova de que um observador externo perdeu todas as informações.

<span id="exclude-specific-coins" data-ginger-heading="exclua-moedas-específicas" aria-hidden="true"></span>

## Exclua moedas específicas

Abra **Exclude Coins** pelo menu do painel de participação do CoinJoin. Revise a lista e marque as moedas que deseja excluir do CoinJoin. Volte a essa lista para torná-las elegíveis novamente. A exclusão se aplica àquelas moedas; não é uma regra permanente para todo pagamento futuro ao mesmo endereço.

Excluir uma moeda do CoinJoin não impede seu gasto normal e não substitui o armazenamento em uma carteira de hardware. Se todas as moedas disponíveis estiverem excluídas, o painel poderá mostrar **Only excluded funds are available**. Verifique essa lista antes de alterar as configurações de taxas ou privacidade.

<span id="receive-outputs-in-another-wallet" data-ginger-heading="receba-as-saídas-em-outra-carteira" aria-hidden="true"></span>

## Receba as saídas em outra carteira

**Coinjoin to this wallet** escolhe onde as saídas de CoinJoin da carteira de origem serão recebidas. Por padrão, é a própria carteira de origem.

1. Carregue no Ginger a carteira de destino pretendida. Faça seu backup e verifique que você controla seus endereços de recebimento.
2. Sem um CoinJoin em andamento, abra **Coinjoin Settings** na carteira de origem e escolha o destino em **Coinjoin to this wallet**.
3. Verifique o nome selecionado antes de iniciar. Somente carteiras carregadas e elegíveis aparecem; não suponha que uma carteira apenas listada no disco esteja carregada.
4. Após uma transação bem-sucedida, verifique o histórico sincronizado da carteira de destino, além do saldo da origem.

O destino não pode ser alterado durante um CoinJoin ativo. **Essa seleção é redefinida depois que o Ginger reinicia**, portanto, verifique-a novamente antes de cada sessão em que o destino importa. Evite configurar duas carteiras para enviar saídas de CoinJoin uma para a outra; as opções disponíveis restringem arranjos recursivos.

A seleção de destino desta versão pode incluir uma carteira de hardware carregada. A origem continua sendo a carteira de software que assina o CoinJoin; um destino de hardware não transforma essa origem em uma carteira fria nem permite que a carteira de hardware execute o CoinJoin por conta própria. Use somente um destino realmente oferecido pelo aplicativo e verifique seu backup e o controle dos endereços antes de depender desse caminho.

<span id="experimental-coin-selection" data-ginger-heading="seleção-experimental-de-moedas" aria-hidden="true"></span>

## Seleção experimental de moedas

Esta versão disponibiliza **(EXPERIMENTAL) Improved Coin Selection**. Sua configuração é uma interface de ajuste avançado, não um pré-requisito para o CoinJoin. Os controles disponíveis são:

| Controle | Efeito pretendido |
| --- | --- |
| **Force to use low privacy coins** | Exige que a seleção inclua uma moeda do grupo com menor privacidade. |
| **Can select already private coins** | Permite que o seletor use moedas que já estão acima da meta de privacidade. Essa participação ainda pode incorrer em taxas de mineração. |
| **Coin privacy difference normalization for score calculation** | Valores menores favorecem seleções cujas pontuações de privacidade são mais próximas entre si. |
| **Amount loss normalization for score calculation** | Valores menores favorecem seleções com uma perda relativa de valor menor. |
| **Target coin number per wallet bucket** | Influencia a seleção a partir de grupos de tamanhos de moedas que estão representados em excesso. |
| **Use the Old Coin Selector for fallback** | Compara os resultados dos seletores antigo e novo e escolhe entre eles. |

Mantenha os valores iniciais, a menos que você entenda a relação entre vantagens e desvantagens que está alterando. Essas são preferências de seleção; não são um limite exato para a taxa total nem uma promessa sobre o número de saídas que uma rodada produzirá.

<span id="when-another-round-cannot-start" data-ginger-heading="quando-outra-rodada-não-pode-começar" aria-hidden="true"></span>

## Quando outra rodada não pode começar

Nesta versão, o início normal do CoinJoin rejeita uma carteira cujos fundos já atingem sua meta de privacidade e também rejeita uma seleção disponível composta apenas por moedas privadas. Selecionar outra carteira de destino não contorna essa regra. O painel pode ocultar o controle de início manual quando todos os fundos são privados. Não dependa de excluir todas as moedas não privadas e depois forçar uma rodada apenas para encaminhar as moedas privadas restantes.

Escolha o destino antes de iniciar uma participação elegível ou avalie uma transferência normal de fundos que já são privados. Reduzir os requisitos de privacidade ou incluir fundos sem relação apenas para iniciar uma rodada pode alterar o resultado de privacidade e o custo.
