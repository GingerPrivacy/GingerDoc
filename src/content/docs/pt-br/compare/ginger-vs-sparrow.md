---
title: "Ginger Wallet ou Sparrow Wallet: privacidade, controle e vantagens e desvantagens"
description: "Compare Ginger e Sparrow em CoinJoin, privacidade de rede, carteiras de hardware, multisig, controle de transações e taxas para escolher o que atende às suas necessidades."
doc_id: "compare.ginger-vs-sparrow"
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet e Sparrow Wallet são carteiras Bitcoin de código aberto para computador que permitem manter suas próprias chaves. Ambos oferecem pagamentos comuns, carteiras de hardware e seleção deliberada de moedas.

**O Ginger oferece CoinJoin com uma conexão ao coordenador já configurada. O Sparrow oferece uma variedade maior de configurações de carteira e ferramentas para inspecionar e assinar transações, inclusive multisig.** A escolha depende do fluxo de que você precisa e das responsabilidades que está disposto a assumir.

Última verificação: **14 de setembro de 2026**. Versões abrangidas: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) e [Sparrow 2.5.4](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4). Esta comparação abrange os fluxos documentados dessas versões; não mede sua velocidade, confiabilidade ou anonimato.

<span id="at-a-glance" data-ginger-heading="comparação-rápida" aria-hidden="true"></span>

## Comparação rápida

| Pergunta | Ginger Wallet | Sparrow Wallet |
| --- | --- | --- |
| Quem controla as chaves de assinatura? | Você, em uma carteira de software ou em um dispositivo de hardware compatível. | Você, pelos assinadores de software ou hardware que configura. |
| Há mistura CoinJoin coordenada integrada? | Sim, com uma conexão ao coordenador já fornecida. | Não há integração atual de mistura Whirlpool; outras ferramentas de privacidade permanecem. |
| Como ele obtém o histórico da carteira? | Filtros compactos e blocos processados localmente; Tor é ativado por padrão. | Um servidor Electrum público, seu nó Bitcoin Core ou um servidor Electrum privado; Tor é compatível. |
| Posso usar uma carteira de hardware? | Sim, com dispositivos compatíveis e um fluxo PSBT baseado em arquivos. | Sim, com fluxos compatíveis de USB, QR code e cartão SD. |
| Posso configurar multisig? | Não há configuração geral de multisig na interface documentada. | Sim, com múltiplos assinadores e um número mínimo de assinaturas escolhido. |
| Posso escolher moedas individuais? | Sim, por Manual Control. | Sim, com inspeção e edição detalhadas da transação. |
| Quais taxas devo esperar? | Taxas de mineração; CoinJoin também pode incorrer em taxas de coordenador e pequenos restos. | Taxas de mineração; entradas ou saídas extras podem aumentar os custos. |

As seções abaixo explicam essas diferenças e trazem links para os guias pertinentes.

<span id="privacy-and-coinjoin-different-tools-for-different-links" data-ginger-heading="privacidade-e-coinjoin-ferramentas-diferentes-para-ligações-diferentes" aria-hidden="true"></span>

## Privacidade e CoinJoin: ferramentas diferentes para ligações diferentes

Um saldo individual de bitcoin consiste em moedas separadas, também chamadas de UTXOs. Gastar várias em conjunto pode associar seus históricos. CoinJoin combina entradas de participantes em uma transação para tornar mais difícil inferir algumas ligações de propriedade.

A [configuração da versão lançada do Ginger](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) inclui sua conexão ao coordenador. Depois de fazer backup de uma carteira de software e receber fundos confirmados, você pode revisar os [controles CoinJoin](/pt-br/using-ginger/coinjoin/) e iniciar a participação. O coordenador organiza rodadas sem manter suas chaves de assinatura. A disponibilidade, os fundos elegíveis, as taxas e uma participação suficiente ainda afetam a conclusão de uma rodada.

O Sparrow removeu seu cliente Whirlpool na [versão 1.9.0](https://github.com/sparrowwallet/sparrow/releases/tag/1.9.0). Instruções antigas para misturar via Whirlpool dentro do Sparrow não descrevem a versão atual.

O Sparrow ainda oferece maneiras de tornar os gastos menos reveladores. Sua opção de transação **Privacy** pode construir uma transação Stonewall com uma saída adicional do mesmo valor do pagamento. Todas as entradas pertencem à sua carteira, portanto isso cria ambiguidade sem misturar fundos com outros participantes. São necessárias moedas apropriadas, fundos suficientes e tipos de endereço correspondentes; entradas e saídas extras podem aumentar as taxas de mineração. O Sparrow também oferece códigos de pagamento BIP47 para derivar endereços novos de pagamento. Veja [como gastar com privacidade](https://sparrowwallet.com/docs/spending-privately.html).

As duas carteiras também oferecem envio PayJoin em fluxos compatíveis. PayJoin envolve um destinatário compatível na construção de um pagamento, separadamente de uma rodada de mistura de coordenador. O Ginger exige uma carteira de software para isso. Veja o [guia PayJoin do Ginger](/pt-br/payments/payjoin-message-signing/) e as [atualizações PayJoin do Sparrow](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4).

Nenhuma dessas ferramentas apaga os registros de uma corretora nem torna a blockchain privada. Combinações posteriores de moedas, reutilização de endereço ou informações compartilhadas com um destinatário podem revelar novas ligações. Veja [confiança e limites do CoinJoin](/pt-br/learn-coinjoin/trust-and-limits/).

<span id="network-privacy-who-learns-about-your-wallet" data-ginger-heading="privacidade-de-rede-quem-descobre-informações-sobre-sua-carteira" aria-hidden="true"></span>

## Privacidade de rede: quem descobre informações sobre sua carteira?

O Ginger usa filtros compactos de blocos para identificar blocos potencialmente relevantes e depois processa localmente os dados de blocos baixados. Isso reduz a necessidade de revelar uma lista dos endereços da carteira a um servidor público de carteiras. Tor está incluído e ativado por padrão nas conexões de rede comuns. O Ginger também oferece um [nó Bitcoin Core opcional](/pt-br/settings-network/full-node-fees/). Leia [Tor e sincronização](/pt-br/using-ginger/tor/) para entender o modelo de conexão e seus limites.

O Sparrow permite escolher um servidor Electrum público, seu próprio nó Bitcoin Core ou um servidor Electrum privado. Um servidor público é conveniente, mas seu operador pode associar as consultas da carteira que recebe e conhecer sua atividade. O [guia de início rápido do Sparrow](https://sparrowwallet.com/docs/quick-start.html) explica essas vantagens e desvantagens; seu [guia Bitcoin Core](https://sparrowwallet.com/docs/connect-node.html) aborda a conexão do seu próprio nó.

Usar uma infraestrutura sob seu controle evita divulgar essas consultas a um operador não relacionado de servidor público. O Sparrow também oferece conexões Tor, inclusive ao endereço onion de um servidor privado. Seu [guia de boas práticas](https://sparrowwallet.com/docs/best-practices.html) discute essas configurações.

Tor ajuda a proteger metadados de conexão, como seu endereço IP. Ele não oculta o conteúdo das solicitações do serviço que as recebe. Operar seu próprio nó também não remove indícios de propriedade de uma transação já na blockchain. Escolha as configurações de rede e as práticas de gasto em conjunto.

<span id="hardware-wallets-and-multisig" data-ginger-heading="carteiras-de-hardware-e-multisig" aria-hidden="true"></span>

## Carteiras de hardware e multisig

Os dois aplicativos podem preparar pagamentos enquanto um dispositivo de hardware compatível mantém as chaves de assinatura. O Sparrow documenta [carteiras de hardware conectadas por USB](https://sparrowwallet.com/docs/connected-wallet.html), [assinatura por QR code](https://sparrowwallet.com/docs/airgapped-wallet-qr.html) e [assinatura por cartão SD](https://sparrowwallet.com/docs/airgapped-wallet-sdcard.html). O método disponível depende do dispositivo e do firmware.

O Ginger oferece pagamentos comuns com carteiras de hardware e um [fluxo de arquivos PSBT](/pt-br/hardware-wallets/psbt/). Um PSBT contém uma transação proposta e as informações necessárias para assiná-la separadamente. Sua presença não comprova compatibilidade com toda configuração de carteira: o [guia de carteiras de hardware do Ginger](/pt-br/using-ginger/hardware-wallet/) descreve os limites da interface lançada.

O Sparrow permite criar carteiras multisig, nas quais gastar exige um número escolhido de assinaturas, como duas de três. Isso acrescenta flexibilidade para distribuir a autoridade de assinatura, além de mais responsabilidades de configuração e backup. O Ginger não fornece uma configuração geral comparável de multisig. Para as escolhas de política de carteira do Sparrow, veja seu [guia de criação de carteiras](https://sparrowwallet.com/docs/quick-start.html#creating-your-first-wallet).

O CoinJoin do Ginger usa uma carteira de software para assinar as entradas participantes. Uma carteira de hardware compatível carregada no Ginger pode, em vez disso, receber as saídas. Isso não significa que seu dispositivo assinou as entradas nem que as saídas atingiram sua meta de privacidade. A seleção do destino é redefinida na reinicialização. Siga o [guia de armazenamento a frio do Ginger](/pt-br/hardware-wallets/exchange-to-cold-storage/) para conhecer as condições e nunca digite as palavras de recuperação da carteira de hardware no computador para habilitar CoinJoin.

<span id="transaction-control-and-everyday-use" data-ginger-heading="controle-de-transações-e-uso-cotidiano" aria-hidden="true"></span>

## Controle de transações e uso cotidiano

As duas carteiras permitem rotular fundos e escolher moedas específicas para um pagamento. No Ginger, **Wallet Coins** mostra moedas individuais, enquanto **Send** → **Manual Control** permite selecionar fundos e inspecionar o pagamento resultante. Veja [controle de moedas e histórico](/pt-br/payments/coin-control-history/).

O diagrama e o editor de transações do Sparrow expõem entradas, saídas, taxas e detalhes de assinatura, com ferramentas para inspecionar a transação antes de transmiti-la. Seu [guia de recursos](https://sparrowwallet.com/features/) descreve esse nível de controle. Isso pode atender a quem trabalha regularmente com PSBTs ou quer examinar como um pagamento é montado.

Em qualquer carteira, confira o destinatário, as entradas selecionadas, o troco e a taxa antes de autorizar um pagamento. A seleção manual ainda pode ligar fundos não relacionados se você os gastar em conjunto.

<span id="fees-and-service-conditions" data-ginger-heading="taxas-e-condições-do-serviço" aria-hidden="true"></span>

## Taxas e condições do serviço

Os pagamentos comuns na blockchain de qualquer uma das carteiras têm taxas de mineração. O tamanho da transação e a taxa por byte virtual escolhida afetam o custo; usar saídas adicionais de privacidade do Sparrow pode tornar um pagamento maior.

Segundo as [configurações documentadas do coordenador Ginger](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi/WabiSabi/Backend/WabiSabiConfig.cs), uma entrada de **0.03 BTC ou menos** é isenta da taxa de coordenador. Uma entrada maior normalmente paga **0.3% de seu valor total**, com isenções para remixes elegíveis. O limite é aplicado por entrada, e não ao saldo total da carteira.

Por exemplo, uma entrada de 0.10 BTC sujeita à cobrança incorre em uma taxa de coordenador de 30 000 satoshis, além dos custos de mineração. CoinJoin também pode deixar um pequeno resto não devolvido ao alocar saídas. Confira as condições reais da rodada e a [explicação do custo completo](/pt-br/using-ginger/annonset/); essas configurações não são uma cotação para rodadas futuras. Os pagamentos comuns do Sparrow não compram um serviço equivalente de mistura coordenada, portanto comparar apenas suas taxas de mineração não é comparar preços equivalentes de CoinJoin.

O operador do coordenador Ginger, InvisibleBit LLC, publica restrições relativas à localização nos EUA e à nacionalidade estadunidense. Seus termos também permitem verificações de entradas por terceiros e a recusa de moedas específicas. Revise os [termos atuais do serviço](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt). Manter suas chaves não garante admissão a uma rodada. No Sparrow, considere a privacidade e a disponibilidade do nó ou servidor usado.

<span id="which-fits-your-needs" data-ginger-heading="qual-atende-às-suas-necessidades" aria-hidden="true"></span>

## Qual atende às suas necessidades?

**Vale considerar o Ginger se sua prioridade é CoinJoin com uma conexão ao coordenador já fornecida**, e suas taxas e condições do serviço atendem às suas necessidades. Comece pelos [primeiros passos](/pt-br/getting-started/) e revise as configurações CoinJoin depois de estabelecer seu backup.

**Vale considerar o Sparrow se sua prioridade é multisig, um fluxo específico de assinatura com hardware ou controle detalhado de transações.** Escolha sua conexão ao servidor deliberadamente e verifique a compatibilidade da configuração exata da sua carteira.

Os dois também podem cumprir funções diferentes. Você pode usar o Ginger para CoinJoin e o Sparrow para administrar uma carteira de hardware separada. Uma transferência comum entre eles custa uma taxa de mineração e deixa uma transação visível; combinar saídas pode ligá-las novamente. O destino direto de saídas CoinJoin do Ginger precisa ser uma carteira compatível carregada no Ginger, não apenas uma aberta no Sparrow. Mantenha backups independentes e confira [como gastar após CoinJoin](/pt-br/learn-privacy/spending-after-coinjoin/) antes de combinar fundos.
