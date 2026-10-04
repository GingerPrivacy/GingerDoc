---
title: "Ginger Wallet ou Wasabi Wallet: configuração, taxas e escolhas"
description: "Compare a configuração de coordenador, os custos de CoinJoin, os fluxos de carteiras de hardware e os limites de privacidade do Ginger e do Wasabi para escolher o que atende às suas necessidades."
doc_id: "compare.ginger-vs-wasabi"
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet e Wasabi Wallet são carteiras Bitcoin de código aberto para computador que permitem manter suas próprias chaves e usar CoinJoin. As principais diferenças práticas para quem está começando com CoinJoin são a configuração do coordenador e suas taxas.

**O Ginger já vem com a conexão ao coordenador configurada. O Wasabi exige que você configure um coordenador antes de iniciar CoinJoin.** O coordenador do Ginger normalmente cobra 0.3% sobre entradas elegíveis acima de 0.03 BTC, com as isenções descritas abaixo. O Wasabi atual aceita apenas rodadas sem taxa de coordenador. Ambos têm custos de mineração.

Última verificação: **7 de setembro de 2026**. Versões abrangidas: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) e [Wasabi v2.8.2](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.8.2). Esta comparação trata dos fluxos documentados, não de uma avaliação de velocidade, confiabilidade ou anonimato.

<span id="at-a-glance" data-ginger-heading="comparação-rápida" aria-hidden="true"></span>

## Comparação rápida

| Pergunta | Ginger Wallet | Wasabi Wallet |
| --- | --- | --- |
| Quem controla as chaves de assinatura? | Você; o coordenador não mantém um saldo de carteira sob custódia para você. | Você; CoinJoin é um fluxo de autocustódia. |
| O que preciso configurar para CoinJoin? | A conexão ao coordenador está incluída; confira as configurações da carteira antes de começar. | Escolha e configure um coordenador compatível, depois confira as configurações da carteira. |
| Existe taxa de coordenador? | Normalmente 0.3% do valor total de cada entrada sujeita à cobrança; entradas de até 0.03 BTC e remixes elegíveis são isentos. | O cliente atual aceita rodadas sem taxa de coordenador. |
| Ainda pode haver outros custos? | Sim: taxas de mineração e possíveis pequenos restos não devolvidos. | Sim: taxas de mineração e possíveis pequenos restos não devolvidos. |
| Chaves mantidas em hardware podem assinar entradas CoinJoin? | Não pelo fluxo comum de carteira de hardware desta versão. | Não pelo fluxo atual de carteira de hardware. |
| As saídas CoinJoin podem ir para armazenamento em hardware? | Sim, por meio de uma carteira de hardware compatível carregada como destino das saídas. | Sim, pelo recurso de CoinJoin para outra carteira, usando uma carteira compatível carregada. |

As seções abaixo explicam as condições por trás dessas diferenças e trazem links para a documentação pertinente.

<span id="coordinator-setup-one-less-decision-with-ginger" data-ginger-heading="configuração-do-coordenador-uma-decisão-a-menos-com-o-ginger" aria-hidden="true"></span>

## Configuração do coordenador: uma decisão a menos com o Ginger

Um coordenador organiza uma rodada CoinJoin entre carteiras participantes. É um serviço separado do aplicativo da carteira e não precisa de suas palavras de recuperação nem de suas chaves privadas.

A [configuração da versão lançada do Ginger](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) fornece uma conexão ao coordenador. Depois de criar uma carteira de software e fazer seu backup, você pode revisar as configurações CoinJoin e começar sem precisar primeiro encontrar um endereço de coordenador. Veja [como usar CoinJoin no Ginger](/pt-br/using-ginger/coinjoin/).

O [guia CoinJoin do Wasabi](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html) exige um coordenador configurado antes da participação. Ele oferece início manual e participação automática opcional. Escolher um coordenador também significa revisar a disponibilidade e as políticas desse operador.

A vantagem prática do Ginger aqui é um caminho de configuração mais curto. Uma conexão fornecida não garante uma rodada imediata: ainda são necessários fundos confirmados, taxas aceitáveis, um serviço disponível e entradas participantes suficientes.

<span id="privacy-with-future-use-in-mind" data-ginger-heading="privacidade-pensando-no-uso-futuro" aria-hidden="true"></span>

## Privacidade pensando no uso futuro

Você pode querer melhorar a privacidade dos seus bitcoins hoje e usar uma corretora mais tarde. Em um CoinJoin, suas moedas compartilham uma transação com entradas de outros participantes. Essas conexões podem importar quando um serviço de custódia examina seu depósito.

O coordenador do Ginger verifica as entradas participantes e exclui as que não passam em suas verificações de risco. O objetivo é limitar a exposição a entradas sinalizadas de outros participantes — uma possível fonte de análise adicional quando você usar seus bitcoins depois.

No Wasabi, a aplicação de uma verificação comparável depende do coordenador escolhido. Cada serviço recebedor ainda toma suas próprias decisões de aceitação.

<span id="fees-compare-the-complete-cost" data-ginger-heading="taxas-compare-o-custo-completo" aria-hidden="true"></span>

## Taxas: compare o custo completo

<span id="gingers-coordinator-fee" data-ginger-heading="a-taxa-de-coordenador-do-ginger" aria-hidden="true"></span>

### A taxa de coordenador do Ginger

O limite de isenção é **por entrada**, também chamada de moeda ou UTXO. Não é um limite sobre o saldo da carteira nem sobre o valor combinado que você registra.

Com as configurações atuais do coordenador:

- Uma entrada de **0.03 BTC ou menos** não paga taxa de coordenador.
- Uma entrada maior normalmente paga **0.3% de seu valor total**.
- Remixes elegíveis também podem ser isentos, dependendo da elegibilidade da entrada e da rodada oferecida.

Para uma entrada sem outra isenção:

| Valor da entrada | Taxa de coordenador | Taxa de mineração |
| --- | --- | --- |
| 0.03 BTC | 0 satoshis | Adicional |
| 0.10 BTC | 0.0003 BTC, ou 30,000 satoshis | Adicional |

Esses exemplos explicam o cálculo; não são cotações para rodadas futuras. As regras completas e outros exemplos estão em [taxas de CoinJoin e progresso de privacidade](/pt-br/using-ginger/annonset/).

<span id="wasabis-coordinator-fee-policy" data-ginger-heading="a-política-de-taxa-de-coordenador-do-wasabi" aria-hidden="true"></span>

### A política de taxa de coordenador do Wasabi

O Wasabi aceita apenas rodadas sem taxa de coordenador desde a versão 2.2.0.0. As taxas de mineração continuam sendo devidas. Sua documentação também descreve raros restos de alocação de saídas de até 10,000 satoshis por CoinJoin que vão para o coordenador. Veja a [explicação das taxas do Wasabi](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#fees).

<span id="budget-beyond-the-headline-percentage" data-ginger-heading="planeje-além-da-porcentagem-anunciada" aria-hidden="true"></span>

### Planeje além da porcentagem anunciada

O Ginger também pode deixar um pequeno resto ao alocar os valores das saídas. Em qualquer uma das carteiras, compare o valor das entradas participantes com **todas as saídas que lhe pertencem** na transação concluída, inclusive as recebidas em outra carteira. Rodadas repetidas e transferências posteriores podem acrescentar custos.

Uma taxa de coordenador zero é apenas um componente da comparação. O tamanho da transação, as taxas por byte de mineração, a alocação de saídas e o número de rodadas concluídas afetam o que você gasta no fim. O [guia de custos](/pt-br/using-ginger/annonset/) do Ginger explica como conciliar esses valores.

<span id="hardware-wallets-signing-inputs-and-receiving-outputs-are-different" data-ginger-heading="carteiras-de-hardware-assinar-entradas-e-receber-saídas-são-coisas-diferentes" aria-hidden="true"></span>

## Carteiras de hardware: assinar entradas e receber saídas são coisas diferentes

Os dois aplicativos oferecem carteiras de hardware para recebimentos comuns e assinatura de pagamentos. Seus fluxos documentados de CoinJoin exigem uma carteira de software para assinar as entradas participantes; o dispositivo de hardware não pode ser essa fonte de assinatura. Veja o [suporte a carteiras de hardware do Ginger](/pt-br/using-ginger/hardware-wallet/) e o [guia de carteiras de hardware do Wasabi](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html).

Receber as moedas resultantes é uma operação separada. Ambos permitem selecionar outra carteira compatível carregada como destino das saídas CoinJoin, inclusive uma carteira de hardware. Isso pode evitar uma transferência separada após a rodada. Isso **não** significa que o dispositivo de hardware assinou as entradas CoinJoin, nem que as saídas necessariamente atingiram a meta de privacidade pretendida antes de chegar ao destino.

No Ginger, confira o destino novamente após reiniciar, pois a seleção é redefinida. Mantenha backups separados para a origem de software e o destino de hardware. Nunca digite as palavras de recuperação da carteira de hardware no aplicativo para computador para habilitar CoinJoin.

Siga o [guia de armazenamento a frio do Ginger](/pt-br/hardware-wallets/exchange-to-cold-storage/) ou a [explicação de CoinJoin para outra carteira do Wasabi](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#can-i-coinjoin-to-another-wallet) para conhecer o fluxo compatível e suas condições.

<span id="privacy-and-service-policies" data-ginger-heading="privacidade-e-políticas-dos-serviços" aria-hidden="true"></span>

## Privacidade e políticas dos serviços

A autocustódia responde quem pode autorizar gastos. Ela não resolve todas as questões de privacidade ou disponibilidade do serviço. CoinJoin torna mais difícil inferir algumas ligações de propriedade, mas as transações continuam públicas. Uma corretora mantém seus próprios registros; combinações posteriores de moedas, reutilização de endereço ou divulgações a um destinatário podem criar novas ligações. A pontuação de privacidade de uma carteira não é garantia de anonimato nem de aceitação por uma corretora. Veja [confiança e limites do CoinJoin](/pt-br/learn-coinjoin/trust-and-limits/).

O operador do Ginger, InvisibleBit LLC, publica restrições do serviço, inclusive sobre localização nos EUA e nacionalidade. Seus termos também permitem verificações de terceiros e a recusa de entradas específicas. Revise os [termos atuais do Ginger](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt) antes de usar o serviço. No Wasabi, revise as políticas do coordenador configurado; a política de taxas da carteira não estabelece as práticas de admissão ou tratamento de dados desse operador.

<span id="which-fits-your-needs" data-ginger-heading="qual-atende-às-suas-necessidades" aria-hidden="true"></span>

## Qual atende às suas necessidades?

**Vale considerar o Ginger se você quer uma conexão ao coordenador já fornecida** e sua estrutura de taxas e políticas do serviço atendem às suas necessidades. Comece pelos [primeiros passos](/pt-br/getting-started/), estabeleça seu backup e revise os [controles CoinJoin](/pt-br/using-ginger/coinjoin/) antes de participar.

**Vale considerar o Wasabi se você prefere escolher um coordenador e exige rodadas sem taxa de coordenador.** Confira o operador e os custos completos das transações antes de começar.

Se você precisa principalmente receber, guardar e enviar bitcoin com uma carteira de hardware, compare primeiro os dispositivos compatíveis e os fluxos de pagamento comuns. CoinJoin é opcional; sua utilidade depende das informações que você quer proteger e de como gastará as moedas resultantes.
