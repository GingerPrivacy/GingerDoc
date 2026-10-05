---
doc_id: "learn-privacy.information-sharing"
title: "Para onde vão as informações da sua carteira"
description: "Entenda o que a sincronização do Ginger, CoinJoin, provedores, exploradores, 2FA, Secret Hunt e outros aplicativos de carteira podem revelar e o que muda com o Tor."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, entenda o uso de endereços novos para receber e a conferência de pagamentos comuns.

Ações diferentes na carteira divulgam informações diferentes. Consultar filtros públicos de blocos, enviar uma entrada de CoinJoin e abrir uma página de compra não são o mesmo evento de privacidade. Use esta referência antes de compartilhar algo que você não poderá retirar depois.

O Tor reduz a exposição direta do IP nas conexões roteadas por ele. Ele não oculta uma requisição do serviço que a recebe, não remove uma transação da blockchain, não protege um computador desbloqueado nem altera automaticamente seu navegador externo. Um nó local configurado é uma conexão separada com uma máquina que você controla.

<span id="synchronization-and-bitcoin-network-activity" data-ginger-heading="sincronização-e-atividade-na-rede-bitcoin" aria-hidden="true"></span>

## Sincronização e atividade na rede Bitcoin

| Ação e destinatário | Informações envolvidas | O que você pode escolher |
| --- | --- | --- |
| Baixar dados de sincronização do backend do Ginger | O cliente solicita filtros públicos a partir de sua posição atual de sincronização. Ele compara os scripts da carteira localmente em vez de enviar um xpub de conta nessa requisição. O serviço ainda observa as requisições e seus horários. | Mantenha o Tor ativado; deixe a sincronização terminar sem presumir que o backend não consegue observar nenhum uso. |
| Baixar um bloco correspondente de uma fonte de blocos | A fonte descobre qual bloco completo foi solicitado. Uma correspondência pode ser um falso positivo; solicitar um bloco não prova que você possui uma transação específica nele. | Um nó próprio configurado corretamente pode fornecer blocos. Configurar um nó não substitui todos os outros serviços usados pelo Ginger. |
| Solicitar estimativas de taxas | O provedor configurado recebe uma requisição de informações públicas sobre taxas. Essa requisição é diferente de consultar sua transação ou o saldo da carteira. | Em **Fee Rate Provider**, escolha entre as fontes disponíveis nesta versão conforme apropriado; a opção de nó próprio exige um nó configurado e funcionando. |
| Transmitir um pagamento | Um par ou serviço alternativo de transmissão recebe a transação assinada. Suas entradas, saídas e valores ficam visíveis conforme ela se propaga. | Confira antes de assinar. O Tor altera a exposição da conexão, não o conteúdo do pagamento. O Ginger pode usar caminhos alternativos de transmissão se uma tentativa anterior falhar. |

Para um nó Bitcoin que você opera, proteja o acesso à máquina e a qualquer conexão remota. Quem o opera pode observar as requisições; portanto, um servidor apenas chamado de “seu nó” não é necessariamente privado se outra pessoa o administra. O acesso normal à internet, a descoberta de pares e a disponibilidade dos serviços continuam sendo importantes.

<span id="coinjoin-and-optional-services" data-ginger-heading="coinjoin-e-serviços-opcionais" aria-hidden="true"></span>

## CoinJoin e serviços opcionais

| Ação e destinatário | Informações envolvidas | O que você pode escolher |
| --- | --- | --- |
| Participar com um coordenador de CoinJoin | Entradas enviadas e provas de propriedade, registros de saídas, mensagens do protocolo e horários. O WabiSabi busca ocultar a correspondência entre entradas e saídas, sob suas premissas. | Confira a participação, os custos e o destino; mantenha o Tor ativado. Não confunda operação sem custódia com proteção contra todo observador ativo. |
| Solicitar ofertas de compra ou venda e validar um endereço | Os parâmetros da oferta incluem o país, a moeda, o valor e a forma de pagamento escolhidos, quando aplicáveis. A validação de endereço envia o endereço proposto ao serviço de compra e venda antes de concluir um pedido. | Considere essa divulgação antes de continuar, mesmo que depois desista da compra ou venda. |
| Criar ou continuar um pedido de compra ou venda | A integração envia os detalhes do pedido e um endereço de recebimento ou reembolso e abre o fluxo do provedor. Um provedor pode solicitar informações de pagamento, contato ou identidade segundo seus próprios termos. | Leia os termos atuais do provedor escolhido e forneça apenas o que pretende. O Ginger não transforma uma compra identificada em uma compra anônima. |
| Usar o 2FA opcional do Ginger | A verificação normal de inicialização envia um código do autenticador junto com um identificador da instalação. O serviço retorna a chave usada na camada adicional de criptografia dos arquivos da carteira. | Decida se essa proteção de acesso e a dependência do serviço são adequadas para você. Mantenha as palavras de recuperação e qualquer frase-senha original disponíveis de forma independente. |
| Participar das verificações do Secret Hunt | As verificações de eventos elegíveis podem enviar um ID de rodada, ID de transação, outpoint de entrada e prova de controle da entrada. Um outpoint identifica uma saída específica de uma transação anterior. | Abra **Secret Hunt** e confira a opção descrita como **Enable/disable the use of this wallet for Secret Hunt.** Ela vem ativada por padrão, embora os eventos relevantes possam não estar ativos. Desativá-la não retira requisições anteriores. |

O Tor não oculta do serviço receptor um endereço enviado para validação, os detalhes de um pedido, um identificador de 2FA ou uma prova de propriedade do Secret Hunt. Essas observações também não significam que o serviço recebe palavras de recuperação ou autoridade para gastar simplesmente porque vê um identificador de transação.

O identificador de 2FA pode associar tentativas normais de inicialização nesse serviço. A chave de criptografia retornada faz parte de um mecanismo adicional de proteção dos arquivos locais; não é uma nova chave Bitcoin que substitui suas palavras de recuperação e frase-senha. Não envie esses segredos nem códigos do autenticador a contatos de suporte.

<span id="browsers-other-applications-and-people" data-ginger-heading="navegadores-outros-aplicativos-e-pessoas" aria-hidden="true"></span>

## Navegadores, outros aplicativos e pessoas

| Ação | O que pode ser divulgado | Hábito útil |
| --- | --- | --- |
| Abrir um explorador público | A transação ou o endereço consultados e as informações de rede e sessão do navegador | Comece pelo histórico local do Ginger; só abra um explorador quando precisar das informações adicionais que ele fornece. |
| Usar o site de um provedor | Detalhes do pedido, informações de login e pagamento, cookies e observações do navegador específicas do site | Trate a sessão do navegador separadamente da configuração Tor do Ginger. |
| Importar um xpub ou usar a mesma conta em outro aplicativo | Um ramo de endereços públicos ou consultas derivadas da carteira, dependendo do aplicativo | Confira o comportamento de sincronização e compartilhamento de dados antes de importar. “Somente observação” descreve a autoridade para gastar, não a confidencialidade. |
| Compartilhar um endereço em uma mensagem ou publicação pública | Um vínculo entre esse endereço e a pessoa ou conta que o envia | Compartilhe um endereço novo com o pagador pretendido por um canal confiável. |
| Compartilhar logs, arquivos da carteira ou o conteúdo da tela | Dependendo do material: caminhos, etiquetas, endereços, identificadores de transações ou rodadas e possivelmente segredos | Compartilhe o menor trecho relevante, depois de revisá-lo. Nunca envie todos os dados da carteira ou segredos de recuperação apenas porque alguém os pediu. |

Pesquisas sobre pagamentos na web mostram por que as observações do navegador e as informações da blockchain devem ser consideradas em conjunto. Elas não estabelecem a política atual de rastreamento de um provedor específico do Ginger. [Goldfeder e colegas, When the Cookie Meets the Blockchain](https://arxiv.org/abs/1708.04748)

<span id="local-information-also-needs-protection" data-ginger-heading="as-informações-locais-também-precisam-de-proteção" aria-hidden="true"></span>

## As informações locais também precisam de proteção

Etiquetas, registros de privacidade e registros de pedidos de provedores podem ficar nos metadados da carteira. Eles são úteis para decisões futuras e recuperação, mas nem todos recebem proteção idêntica à das chaves de assinatura. Proteja o computador, os backups e as contas que podem acessá-los. **Discreet Mode** ajuda com os campos de tela compatíveis; o bloqueio de tela do sistema operacional protege de forma mais ampla contra o acesso sem supervisão.

Restaurar a partir das palavras pode recuperar chaves capazes de gastar sem restaurar todas as notas privadas. Excluir essas notas não apaga as informações que um destinatário ou serviço já possui. Antes de mudar de instalação, leia sobre [migração de carteira](/pt-br/learn-privacy/wallet-migration/); antes de enviar um pagamento, confira os [hábitos de privacidade](/pt-br/using-ginger/address-reuse/).
