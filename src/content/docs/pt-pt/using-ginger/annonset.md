---
doc_id: "coinjoin.fees-and-progress"
title: "Taxas de CoinJoin e progresso de privacidade"
description: "Planeie o custo completo do CoinJoin, diferencie isenções de taxas de transações gratuitas e interprete as pontuações de privacidade do Ginger com exemplos detalhados."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Compreenda primeiro os controlos comuns de início e pausa e o facto de que rondas concluídas têm taxas.

O CoinJoin tem um custo e um objetivo de privacidade. Reveja os dois antes de começar: uma isenção da taxa do coordenador não torna uma ronda gratuita, e um indicador de progresso não consegue medir tudo que outra pessoa sabe sobre si.

<span id="coordinator-fee-versus-mining-fee" data-ginger-heading="taxa-do-coordenador-e-taxa-de-mineração" aria-hidden="true"></span>

## Taxa do coordenador e taxa de mineração

Com as definições atuais de taxa do coordenador do Ginger, cada entrada de 3 000 000 satoshis (0.03 BTC) ou menos não paga taxa do coordenador. O limite inclui exatamente 0.03 BTC. Uma entrada acima desse limite normalmente paga 0.3% de seu valor total, não apenas da parte acima de 0.03 BTC. A taxa em forma decimal é 0.003, e as frações de satoshi da taxa calculada são arredondadas para baixo.

O limite é verificado separadamente para cada entrada, não em relação ao saldo total da carteira nem à soma das entradas que regista. Remixes elegíveis também podem ser isentos; a isenção anunciada pelo Ginger inclui o gasto direto de fundos que passaram por CoinJoin através de uma transação. Essas isenções adicionais dependem da ronda oferecida e da elegibilidade da entrada. Consulte novamente a [explicação atual das taxas do Ginger](https://gingerwallet.io/) antes de participar.

Para entradas sem outra isenção da taxa do coordenador:

| Valor da entrada | Valor em BTC | Taxa do coordenador |
| --- | --- | --- |
| 2 999 999 satoshis | 0.02999999 BTC | 0 satoshis |
| 3 000 000 satoshis | 0.03 BTC | 0 satoshis |
| 3 000 001 satoshis | 0.03000001 BTC | 9 000 satoshis |
| 4 000 000 satoshis | 0.04 BTC | 12 000 satoshis |

Por exemplo, a entrada de 0.04 BTC paga 0.00012 BTC (12 000 satoshis), não 0.3% apenas dos 0.01 BTC acima do limite. As taxas de mineração são adicionais, inclusive para entradas cuja taxa do coordenador seja zero. Esses exemplos explicam o cálculo configurado, não são uma cotação para uma ronda futura.

As taxas de mineração remuneram os mineradores pelo espaço da transação. Elas dependem da taxa por byte virtual e das entradas e saídas da transação. Gastar uma moeda de baixo valor pode custar uma grande percentagem de seu valor. Cada CoinJoin repetido pode gerar novas taxas de mineração mesmo que se qualifique para uma isenção da taxa do coordenador.

Não divida moedas apenas para pesquisar uma isenção sem compreender as transações extras, as taxas e os vínculos públicos que isso cria.

<span id="account-for-the-complete-cost" data-ginger-heading="contabilize-o-custo-completo" aria-hidden="true"></span>

## Contabilize o custo completo

O valor que gasta pode envolver mais do que a percentagem anunciada do coordenador. Um CoinJoin também precisa de espaço de transação, e os valores de suas saídas podem deixar uma pequena sobra depois que o cliente distribui o valor disponível. Essa sobra pode contribuir para a receita do coordenador ou para a taxa de mineração da transação; não é necessariamente um item separado de taxa exibido na carteira.

Para um CoinJoin concluído, compare o valor total das suas entradas com o valor total de todas as saídas que pertencem a si nessa transação. Inclua as saídas enviadas para outra carteira de destino. Não subtraia todas as saídas da transação partilhada apenas das suas entradas: algumas dessas saídas pertencem aos outros participantes.

O exemplo a seguir ilustra a contabilização, não é uma previsão dos valores de saída do Ginger nem um ecrã do programa:

| Item | Satoshis |
| --- | ---: |
| Sua entrada sujeita à taxa | 5 000 000 |
| Suas saídas, somadas entre suas duas carteiras | 4 980 800 |
| Diferença de valor | 19 200 |
| Taxa do coordenador assumida neste exemplo: 0.3% da entrada | 15 000 |
| Taxas de mineração atribuídas à sua participação neste exemplo | 3 600 |
| Diferença restante de distribuição neste exemplo | 600 |

Aqui, 15 000 + 3 600 + 600 = 19 200 satoshis. As três últimas linhas explicam a mesma diferença; não acrescente essa diferença novamente como outra cobrança. A taxa de mineração de toda a ronda também não é uma taxa que cada participante paga integralmente. Não presuma que um campo individual de taxa ou uma linha de log represente todos os componentes da sua diferença de valor.

Se as saídas foram para uma carteira de hardware, seu desaparecimento do saldo da carteira de software é uma transferência de valor que ainda possui. Espere as duas carteiras sincronizarem antes de conciliar os valores. Transações não confirmadas, pagamentos simultâneos e fundos recebidos podem tornar enganosa uma simples comparação do saldo da carteira antes e depois.

<span id="budget-for-the-whole-journey" data-ginger-heading="planeie-o-orçamento-de-todo-o-percurso" aria-hidden="true"></span>

## Planeie o orçamento de todo o percurso

Inclua os passos anteriores e posteriores ao CoinJoin ao decidir se o resultado vale o custo:

| Passo | Custo a considerar |
| --- | --- |
| Levantar de uma corretora | A taxa de levantamento, que pode diferir da taxa de mineração da transação da corretora |
| Participar numa ou mais rondas | A diferença real de valor de cada participação concluída |
| Mover fundos para outra carteira | Outra taxa de mineração se fizer uma transferência comum |
| Gastar as moedas resultantes mais tarde | As taxas das entradas e saídas desse pagamento posterior |

Por exemplo, uma participação que custe 19 200 satoshis seguida de uma transferência de 1 200 satoshis custa 20 400 satoshis por esses dois passos. Um pagamento posterior é uma despesa separada. Mais saídas podem fornecer partes menores para gastar separadamente, mas gastar essas partes também consome espaço de transação. Esse custo futuro não foi pago antecipadamente pela criação das saídas.

Escolha um valor que possa gastar para aprender e reveja o primeiro resultado concluído antes de deixar que as rondas repetidas continuem. Mantenha um orçamento pessoal de custos; uma preferência de tempo de CoinJoin ou uma definição de seleção de moedas não garante um limite para o custo total de todo o percurso.

<span id="when-ginger-waits-or-refuses-a-round" data-ginger-heading="quando-o-ginger-espera-ou-recusa-uma-ronda" aria-hidden="true"></span>

## Quando o Ginger espera ou recusa uma ronda

O cliente verifica as condições propostas antes de participar. Ele pode exibir **Mining fee rate was too high**, **Coordination fee rate was too high**, **Min input count was too low** ou **Server did not give remix fee exemption**. Investigue as condições oferecidas em vez de aumentar os limites sem examiná-las.

As preferências de taxas também podem causar **Awaiting cheaper coinjoins**. Uma preferência de tempo significa esperar condições relativamente mais baratas, não uma reserva que garanta a conclusão num dia ou uma semana. Uma ronda que falhe antes da transmissão não cria, por si só, uma nova transação confirmada de Bitcoin.

O início normal do CoinJoin nesta versão também recusa uma carteira cujos fundos já atinjam seu objetivo de privacidade, ou uma seleção que contenha apenas moedas que o atinjam. Escolher outra carteira de destino não contorna essa verificação. Se o objetivo for mover fundos que já são privados, considere uma transferência comum em vez de esperar que a seleção de destino force outra ronda.

<span id="what-the-privacy-score-can-tell-you" data-ginger-heading="o-que-a-pontuação-de-privacidade-pode-mostrar" aria-hidden="true"></span>

## O que a pontuação de privacidade pode mostrar

O Ginger acompanha informações de privacidade das moedas e as compara com o objetivo de pontuação de anonimato da carteira. A pontuação é uma estimativa local baseada no conhecimento da carteira sobre as transações. Ela não é uma contagem de pessoas verificadas de forma independente nem a probabilidade de um observador conseguir identificar o utilizador.

O progresso geral usa um cálculo das pontuações em direção ao objetivo ponderado por valor. O detalhamento separado do saldo por cores representa valores em categorias de privacidade. São medidas diferentes.

Num exemplo simplificado, suponha que o objetivo seja 5 e que a carteira tenha apenas estas duas moedas:

| Moeda | Valor | Pontuação local | Atinge o objetivo? |
| --- | ---: | ---: | --- |
| A | 1 000 000 satoshis | 5 | Sim |
| B | 3 000 000 satoshis | 3 | Não |

Apenas 25% do valor atinge o objetivo. Para o progresso geral, esta versão pondera o progresso acima da pontuação 1: a moeda A contribui com 1 000 000 × 4 e a moeda B com 3 000 000 × 2, em relação a um máximo de 4 000 000 × 4. Isso resulta em 62.5%, exibido como o valor inteiro 62%. Portanto, ver percentagens diferentes nessas duas visualizações não é, por si só, um erro.

A mensagem **Hurray! All your funds are private!** significa que a carteira considera os fundos privados segundo seu objetivo e sua contabilização atuais. Não significa que o histórico desapareceu, que é anónimo na internet ou que um pagamento posterior não possa criar um vínculo.

<span id="decide-when-you-have-achieved-your-objective" data-ginger-heading="decida-quando-seu-objetivo-foi-alcançado" aria-hidden="true"></span>

## Decida quando seu objetivo foi alcançado

Reduzir um objetivo pode mudar quais moedas se qualificam sem alterar nada que já foi publicado na cadeia de blocos. Aumentá-lo pode exigir mais participação e taxas; não compra um número garantido de pessoas anónimas. Receber novos fundos, combinar moedas ou recuperar uma carteira sem seus metadados locais também pode mudar o resultado exibido.

Decida o conhecimento de quem quer limitar: uma corretora, um destinatário específico ou alguém que acompanhe um endereço divulgado. Eles podem conhecer valores, horários e identidades que o Ginger não consegue ver. Avalie o próximo pagamento além da pontuação atual.

Faça uma pausa para rever as rondas concluídas, conciliar suas moedas e considerar como vai gastá-las. Preserve os metadados locais ao mudar de instalação se quiser manter mais desse contexto. Consulte [Definições de CoinJoin](/pt-pt/coinjoin/settings/) para os controlos de objetivo, preferências de taxas e destino.
