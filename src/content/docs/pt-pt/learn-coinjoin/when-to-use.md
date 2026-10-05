---
doc_id: "learn-coinjoin.when-to-use"
title: "Quando o CoinJoin faz sentido?"
description: "Avalie se o CoinJoin atende à sua preocupação com a privacidade do Bitcoin, quanto custa e como planear os gastos posteriores."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nível de leitura: utilização quotidiana. Escolha este guia quando precisar realizar a tarefa descrita nele.

O CoinJoin é útil quando reduzir as informações sobre vínculos entre transações atende a uma preocupação que realmente tem. Ele é menos útil quando o principal problema é uma frase de recuperação roubada, um computador comprometido ou informações que está prestes a divulgar diretamente a um prestador.

<span id="start-with-a-concrete-objective" data-ginger-heading="comece-com-um-objetivo-concreto" aria-hidden="true"></span>

## Comece com um objetivo concreto

Por exemplo, pode querer que o destinatário de um pagamento futuro tenha uma visão menos direta do histórico de uma receção já identificada. Anote quem já conhece essa receção e o que seu próximo pagamento divulgará. O CoinJoin pode alterar o problema dos vínculos entre transações no intervalo, mas não pode desfazer a primeira divulgação nem impedir a segunda.

Se seu objetivo é apenas proteger as chaves enquanto guarda bitcoin, uma cópia de segurança recuperável e um fluxo adequado de carteira de hardware tratam desse problema de forma mais direta. Se sua preocupação é um endereço público de receção reutilizado para toda cobrança, pare primeiro de reutilizá-lo; o CoinJoin posterior não torna privadas as receções antigas.

<span id="compare-the-tradeoffs" data-ginger-heading="compare-as-escolhas-e-suas-consequências" aria-hidden="true"></span>

## Compare as escolhas e suas consequências

| Situação | Decisão a considerar |
| --- | --- |
| Muitas moedas pequenas durante um período de taxas de mineração altas | A participação pode consumir uma parcela grande do valor; examine as condições das taxas e considere esperar |
| Um pagamento precisa ser feito imediatamente | A conclusão do CoinJoin não é agendada; evite depender de uma ronda para cumprir um prazo exato |
| Gastos ao longo do tempo a partir de uma fonte identificada | Considere como o CoinJoin, endereços separados de receção e a seleção posterior de moedas funcionam juntos |
| Um prestador exige identidade e prova de endereço | Essa divulgação direta permanece; confira se o CoinJoin altera as informações que importam para si |
| O destino é uma carteira de hardware | Verifique a conta de receção e o fluxo de destino desta versão; não importe palavras de recuperação do hardware para uma carteira quente |
| Não consegue manter o computador disponível | A participação automática exige conectividade e capacidade de assinatura desbloqueada durante a ronda |

São escolhas com consequências, não uma recomendação para mover um valor específico nem uma garantia de resultado financeiro. Use um valor pequeno que consiga gerir para aprender o fluxo e conciliar as taxas antes de aumentar a exposição.

<span id="set-a-cost-and-attention-budget" data-ginger-heading="defina-um-orçamento-de-custo-e-atenção" aria-hidden="true"></span>

## Defina um orçamento de custo e atenção

Confira os dois componentes das taxas e como funcionam as rondas repetidas. Decida quanto aceita gastar pela melhoria de privacidade pretendida e com que frequência examinará o resultado. Uma meta local de anonimato é um parâmetro de controlo, não uma cotação de taxa nem uma garantia mensurável sobre um adversário.

O limite de paragem do Ginger pode impedir algumas participações automáticas economicamente inviáveis. Sua preferência de tempo e seu limite de taxa podem reduzir a participação em condições caras. Essas definições não são um limite máximo universal para o valor total que pode gastar ao longo de muitas rondas.

<span id="plan-the-next-spend" data-ginger-heading="planeie-o-próximo-gasto" aria-hidden="true"></span>

## Planeie o próximo gasto

Solicite um destino novo, mantenha etiquetas locais úteis e confira as entradas selecionadas. Evite consolidar por impulso todas as saídas resultantes apenas para fazer a carteira parecer mais simples. Se um comerciante ou uma corretora vier a saber a sua identidade, compreenda essa divulgação antes de pagar.

Não trate a aceitação anunciada por outro prestador como permanente. Um serviço pode mudar sua política ou fazer perguntas sobre uma transferência. O Ginger não pode certificar a aceitação futura de uma transação nem garantir que o CoinJoin elimine todas as associações históricas.

<span id="try-the-released-workflow-deliberately" data-ginger-heading="experimente-o-fluxo-desta-versão-de-forma-consciente" aria-hidden="true"></span>

## Experimente o fluxo desta versão de forma consciente

Depois de esclarecer o objetivo, a cópia de segurança e os custos, abra uma carteira de software sincronizada, confira **Coinjoin Settings** e decida entre o início manual e **Automatically start coinjoin**. Acompanhe o estado e examine uma ronda concluída no histórico. Pause se o comportamento ou a mudança de saldo forem diferentes do esperado e investigue antes de continuar.

Para as premissas dessa decisão, leia [em que confia ao participar em CoinJoin](/pt-pt/learn-coinjoin/trust-and-limits/). O guia separa o controlo das chaves, a privacidade das transações, a disponibilidade dos serviços e a confiança no software que executa.
