---
doc_id: "learn-coinjoin.explained"
title: "O que é CoinJoin? Uma explicação simples"
description: "Aprenda em linguagem simples como uma transação Bitcoin partilhada pode ajudar a privacidade, quanto ela custa e o que não pode ocultar."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: comece aqui. As etapas essenciais vêm primeiro; as referências avançadas são um complemento opcional.

O CoinJoin reúne a atividade de várias pessoas com Bitcoin numa única transação partilhada. Isso pode dificultar que alguém que examine o histórico público de transações determine quais moedas resultantes pertencem a cada pessoa.

Imagine várias pessoas a contribuir para uma transação partilhada e a receber novas partes de bitcoin de volta. O público pode ver os valores movimentados. O que pode ficar menos claro é qual dinheiro de cada pessoa se tornou qual parte. Isso é apenas uma ilustração: as rondas reais têm valores diferentes e detalhes mais complexos.

<span id="do-i-hand-my-bitcoin-to-someone-else" data-ginger-heading="entrego-o-meu-bitcoin-a-outra-pessoa" aria-hidden="true"></span>

## Entrego o meu bitcoin a outra pessoa?

A carteira do Ginger mantém as informações usadas para autorizar gastos e confere a transação proposta antes de assinar. Não faz primeiro um depósito num saldo controlado por um serviço de mistura.

Ainda precisa de uma instalação de confiança, um computador protegido e uma cópia de segurança de recuperação. O serviço que organiza a ronda também precisa estar disponível. Manter o controlo das chaves não significa que todos os outros problemas desapareçam.

<span id="why-might-i-use-it" data-ginger-heading="porque-é-que-usaria-coinjoin" aria-hidden="true"></span>

## Porque é que usaria CoinJoin?

Pode querer que uma pessoa a quem paga saiba menos sobre seus outros pagamentos. Ou pode querer que gastos futuros tenham uma ligação menos direta com um endereço que publicou anteriormente.

O CoinJoin pode ajudar com esses vínculos. Ele não pode apagar o registo de levantamento de uma corretora nem fazer um comerciante esquecer quem fez um pedido. A cadeia de blocos continua pública, e um pagamento posterior pode revelar uma nova ligação.

<span id="what-will-it-cost" data-ginger-heading="quanto-vai-custar" aria-hidden="true"></span>

## Quanto vai custar?

Uma ronda bem-sucedida paga taxas de mineração do Bitcoin e também pode cobrar uma taxa de coordenador. Uma isenção da taxa de coordenador não elimina as taxas de mineração. Várias rondas podem gerar vários custos.

Não há um prazo fixo para a conclusão. O Ginger pode esperar por confirmações, taxas aceitáveis ou outros participantes. Leia o estado e confira o resultado antes de deixar a participação repetida a funcionar sem acompanhamento.

<span id="do-i-need-it-before-my-first-payment" data-ginger-heading="preciso-disso-antes-do-meu-primeiro-pagamento" aria-hidden="true"></span>

## Preciso disso antes do meu primeiro pagamento?

Não. Receber, enviar e participar em CoinJoin são ações distintas. Pode aprender primeiro a fazer pagamentos comuns e depois decidir qual problema de privacidade quer resolver.

Para tomar essa decisão, leia [quando o CoinJoin é útil](/pt-pt/learn-coinjoin/when-to-use/). Leitura avançada opcional: [confiança e limitações](/pt-pt/learn-coinjoin/trust-and-limits/), incluindo o que diferentes observadores podem descobrir. Não precisa estudar o protocolo para usar os controlos comuns de início e pausa.
