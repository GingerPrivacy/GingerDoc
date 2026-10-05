---
doc_id: "help.glossary"
title: "Glossário de Bitcoin e Ginger Wallet"
description: "Compreenda os termos usados no Ginger: UTXO, troco, frase de segurança, CoinJoin, pontuação de anonimato, Tor, PSBT e outros."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nível de leitura: utilização quotidiana. Escolha este guia quando precisar realizar a tarefa que ele descreve.

<span id="amounts-and-transactions" data-ginger-heading="valores-e-transações" aria-hidden="true"></span>

## Valores e transações

| Termo | Significado para quem usa uma carteira |
| --- | --- |
| Bitcoin / BTC | A rede e a sua unidade monetária. Uma carteira administra chaves e transações, em vez de armazenar moedas físicas. |
| Satoshi / sat | Uma das cem milhões de partes iguais de um bitcoin: 100 000 000 sats = 1 BTC. |
| Endereço | Um destino de pagamento derivado das condições de gasto. Use um novo para cada receção. |
| UTXO / moeda | Uma saída de transação não gasta, disponível para ser gasta como uma entrada inteira. |
| Entrada | Uma referência a uma saída anterior que está a ser gasta. Várias entradas podem financiar uma transação. |
| Saída | Um novo destino e valor criados por uma transação. |
| Troco | O valor devolvido à sua carteira quando as entradas selecionadas excedem o pagamento mais a taxa. |
| Identificador de transação / txid | Um identificador de uma transação. Partilhá-lo revela qual transação pública está a discutir. |
| Mempool | O conjunto de transações não confirmadas de um nó. Nós diferentes podem ter visões diferentes. |
| Confirmação | A inclusão num bloco, seguida de outros blocos construídos sobre ele. |
| Taxa por byte virtual | Satoshis pagos por byte virtual do tamanho da transação; é diferente da taxa total. |
| vByte | A unidade de tamanho usada para comparar taxas por byte virtual entre transações com dados de witness diferentes. |
| RBF | Replace-by-fee: uma transação pendente pode ser substituída segundo a política dos nós, geralmente para aumentar sua taxa. |
| CPFP | Child-pays-for-parent: gastar uma saída com uma transação filha de taxa mais alta pode incentivar também a confirmação de sua transação pai não confirmada. |
| Poeira | Um valor pequeno demais para ser útil sob uma política ou uma hipótese de custo específica. O limite da carteira e a política da rede não são necessariamente iguais. |

<span id="the-network-in-context" data-ginger-heading="a-rede-em-contexto" aria-hidden="true"></span>

## A rede em contexto

| Termo | Significado para quem usa uma carteira |
| --- | --- |
| Bloco / cadeia de blocos | Um lote de transações e a cadeia de blocos construída sobre o histórico anterior. |
| Minerador / prova de trabalho | Um participante que monta blocos candidatos e realiza o trabalho usado pelas regras de seleção de cadeia do Bitcoin. |
| Transação coinbase | A primeira transação de um bloco, que cria a recompensa de mineração permitida; não está relacionada a uma conta específica de corretora. As suas saídas precisam atingir maturidade antes de serem gastas. |
| Regras de consenso | As regras que um nó validador aplica para decidir se blocos e transações são válidos. |
| Dificuldade | Uma medida que regula a prova de trabalho exigida para um bloco; não determina o saldo da sua carteira. |
| Mainnet / RegTest | A rede real do Bitcoin e um modo separado de testes locais, respectivamente. As moedas não se movem entre eles. |
| BIP | Uma Bitcoin Improvement Proposal, que documenta um padrão ou processo proposto. A publicação de uma BIP não significa que todas as carteiras a implementem. |
| Carteira HD | Uma carteira determinística hierárquica que deriva muitas chaves de dados secretos iniciais e de convenções. |
| Hash | Um identificador compacto calculado a partir de dados. Um identificador de transação identifica dados, não o nome da conta de uma pessoa. |
| Fungibilidade | A possibilidade prática de intercambiar unidades; classificações de histórico feitas por terceiros podem afetar seu tratamento mesmo quando são bitcoins válidos. |

Lightning, canais de pagamento, construção de transações com múltiplas assinaturas, configuração de testnet pública ou Signet e detalhes internos de scripts estão fora dos fluxos documentados para utilizadores desta versão. A sua presença num glossário geral de Bitcoin não comprova a existência de um recurso no Ginger.

<span id="keys-and-recovery" data-ginger-heading="chaves-e-recuperação" aria-hidden="true"></span>

## Chaves e recuperação

| Termo | Significado para quem usa uma carteira |
| --- | --- |
| Chave privada | Informações secretas que autorizam gastos. Nunca as partilhe com o apoio. |
| Chave pública | Informações usadas para verificar assinaturas; não são um segredo de gasto, mas ainda podem ser sensíveis para a privacidade. |
| Palavras de recuperação / frase mnemónica / seed phrase | A cópia de segurança ordenada de palavras a partir da qual as chaves da carteira podem ser recriadas com a frase de segurança correta e as convenções da carteira. |
| Frase de segurança BIP39 | Texto adicional usado com as palavras de recuperação para derivar uma carteira. Cada frase de segurança diferente seleciona chaves diferentes. |
| PIN do dispositivo | Um controlo de acesso de carteira de hardware. Não é o mesmo que uma frase de segurança BIP39. |
| 2FA | Um segundo fator de autenticação. O Ginger usa um autenticador e encriptação local de ficheiros da carteira dependente de um serviço no arranque. |
| xpub / chave pública estendida | Informações que podem derivar muitos endereços públicos relacionados. Não podem assinar diretamente, mas podem expor a atividade de uma carteira. |
| Caminho de derivação / conta | Uma convenção que identifica um ramo das chaves de uma carteira. Ferramentas de recuperação precisam de convenções compatíveis. |
| Limite de endereços não utilizados | A sequência de endereços não utilizados que uma pesquisa de recuperação tolera antes de terminar a pesquisa ao longo de um ramo. |
| Carteira só de observação | Um registo de carteira que pode observar a atividade, mas não possui as chaves locais de assinatura. Um dispositivo de hardware pode fornecer a assinatura separadamente. |
| Carteira de hardware | Um dispositivo separado concebido para proteger chaves e aprovar transações compatíveis. |
| PSBT | Um ficheiro de transação Bitcoin parcialmente assinada que contém uma transação proposta e informações de assinatura. |
| SegWit / Taproot | Formatos de saída e gasto do Bitcoin. Endereços nativos de receção da rede principal geralmente começam com `bc1q` e `bc1p`, respectivamente. |

<span id="privacy-and-ginger" data-ginger-heading="privacidade-e-ginger" aria-hidden="true"></span>

## Privacidade e Ginger

| Termo | Significado para quem usa uma carteira |
| --- | --- |
| CoinJoin | Uma transação colaborativa com entradas de vários participantes, destinada a tornar mais difícil inferir ligações de propriedade. |
| WabiSabi | O protocolo baseado em credenciais usado na coordenação CoinJoin do Ginger. Ele não apaga a transação da cadeia de blocos. |
| Coordenador | Um serviço que organiza uma ronda. Ele pode afetar a disponibilidade e a elegibilidade sem normalmente manter as chaves privadas dos participantes. |
| Remix | Uma nova participação CoinJoin com fundos que atendem às condições de remix do serviço; taxas de mineração ainda podem ser aplicadas. |
| Pontuação de anonimato | A estimativa local do Ginger usada para classificar a privacidade das moedas, não uma contagem verificada de pessoas independentes. |
| Conjunto de anonimato | Um grupo conceptual de alternativas plausíveis. Ele não é automaticamente idêntico à pontuação calculada pela carteira. |
| Cluster | Endereços ou moedas que um observador infere pertencerem ao mesmo grupo. Algumas associações são factos; outras são heurísticas que podem falhar. |
| Reutilização de endereço | Receber mais de uma vez no mesmo endereço, ligando diretamente essas receções. |
| Controlo de moedas | A inspeção e seleção deliberada de moedas para um pagamento. |
| Tor | Um sistema de retransmissão de rede que ajuda a separar as ligações de um programa do endereço IP do utilizador. |
| Filtro de blocos | Um resumo compacto usado para identificar blocos que podem conter transações relevantes para a carteira antes de processar esses blocos localmente. |
| Nó completo | Software que valida os dados do Bitcoin segundo as suas regras de consenso. A sua função é diferente da de um coordenador CoinJoin. |
| PayJoin | Um pagamento colaborativo em que o destinatário pode contribuir com uma entrada. O fluxo de envio lançado pelo Ginger tem uma alternativa de fallback e limites de compatibilidade. |
| Discreet Mode | A ocultação de campos sensíveis de exibição compatíveis, não encriptação nem bloqueio da carteira. |
| KYC | O processo de verificação de identidade de um prestador. Tor não oculta as informações enviadas diretamente a ele. |
| Fiat | Moeda emitida por governos, usada em cotações ou estimativas de exibição; é diferente dos BTC liquidados na cadeia de blocos. |

Termos como “privado” e “seguro” descrevem propriedades diferentes. Pergunte o que é protegido, de quem e em que condições, em vez de tratar qualquer uma dessas palavras como uma garantia incondicional.
