---
doc_id: "learn-privacy.information-sharing"
title: "Para onde vão as informações da sua carteira"
description: "Compreenda o que a sincronização do Ginger, CoinJoin, prestadores, exploradores, 2FA, Secret Hunt e outros programas de carteira podem revelar e o que muda com o Tor."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, compreenda o uso de endereços novos para receber e a conferência de pagamentos comuns.

Ações diferentes na carteira divulgam informações diferentes. Consultar filtros públicos de blocos, enviar uma entrada de CoinJoin e abrir uma página de compra não são o mesmo evento de privacidade. Use esta referência antes de partilhar algo que não poderá retirar depois.

O Tor reduz a exposição direta do IP nas ligações encaminhadas por ele. Ele não oculta uma requisição do serviço que a recebe, não remove uma transação da cadeia de blocos, não protege um computador desbloqueado nem altera automaticamente seu navegador externo. Um nó local configurado é uma ligação separada com uma máquina que controla.

<span id="synchronization-and-bitcoin-network-activity" data-ginger-heading="sincronização-e-atividade-na-rede-bitcoin" aria-hidden="true"></span>

## Sincronização e atividade na rede Bitcoin

| Ação e destinatário | Informações envolvidas | O que pode escolher |
| --- | --- | --- |
| Descarregar dados de sincronização do backend do Ginger | O cliente solicita filtros públicos a partir de sua posição atual de sincronização. Ele compara os scripts da carteira localmente em vez de enviar um xpub de conta nessa requisição. O serviço ainda observa as requisições e seus horários. | Mantenha o Tor ativado; deixe a sincronização terminar sem presumir que o backend não consegue observar nenhuma utilização. |
| Descarregar um bloco correspondente de uma fonte de blocos | A fonte descobre qual bloco completo foi solicitado. Uma correspondência pode ser um falso positivo; solicitar um bloco não prova que possui uma transação específica nele. | Um nó próprio configurado corretamente pode fornecer blocos. Configurar um nó não substitui todos os outros serviços usados pelo Ginger. |
| Solicitar estimativas de taxas | O prestador configurado recebe uma requisição de informações públicas sobre taxas. Essa requisição é diferente de consultar sua transação ou o saldo da carteira. | Em **Fee Rate Provider**, escolha entre as fontes disponíveis nesta versão conforme apropriado; a opção de nó próprio exige um nó configurado e a funcionar. |
| Transmitir um pagamento | Um par ou serviço alternativo de transmissão recebe a transação assinada. Suas entradas, saídas e valores ficam visíveis conforme ela se propaga. | Confira antes de assinar. O Tor altera a exposição da ligação, não o conteúdo do pagamento. O Ginger pode usar caminhos alternativos de transmissão se uma tentativa anterior falhar. |

Para um nó Bitcoin que opera, proteja o acesso à máquina e a qualquer ligação remota. Quem o opera pode observar as requisições; portanto, um servidor apenas chamado de “seu nó” não é necessariamente privado se outra pessoa o administra. O acesso normal à internet, a descoberta de pares e a disponibilidade dos serviços continuam a ser importantes.

<span id="coinjoin-and-optional-services" data-ginger-heading="coinjoin-e-serviços-opcionais" aria-hidden="true"></span>

## CoinJoin e serviços opcionais

| Ação e destinatário | Informações envolvidas | O que pode escolher |
| --- | --- | --- |
| Participar com um coordenador de CoinJoin | Entradas enviadas e provas de propriedade, registos de saídas, mensagens do protocolo e horários. O WabiSabi procura ocultar a correspondência entre entradas e saídas, sob suas premissas. | Confira a participação, os custos e o destino; mantenha o Tor ativado. Não confunda operação sem custódia com proteção contra todo observador ativo. |
| Solicitar ofertas de compra ou venda e validar um endereço | Os parâmetros da oferta incluem o país, a moeda, o valor e a forma de pagamento escolhidos, quando aplicáveis. A validação de endereço envia o endereço proposto ao serviço de compra e venda antes de concluir um pedido. | Considere essa divulgação antes de continuar, mesmo que depois desista da compra ou venda. |
| Criar ou continuar um pedido de compra ou venda | A integração envia os detalhes do pedido e um endereço de receção ou reembolso e abre o fluxo do prestador. Um prestador pode solicitar informações de pagamento, contacto ou identidade segundo seus próprios termos. | Leia os termos atuais do prestador escolhido e forneça apenas o que pretende. O Ginger não transforma uma compra identificada numa compra anónima. |
| Usar o 2FA opcional do Ginger | A verificação normal de arranque envia um código do autenticador junto com um identificador da instalação. O serviço devolve a chave usada na camada adicional de encriptação dos ficheiros da carteira. | Decida se essa proteção de acesso e a dependência do serviço são adequadas para si. Mantenha as palavras de recuperação e qualquer frase de segurança original disponíveis de forma independente. |
| Participar das verificações do Secret Hunt | As verificações de eventos elegíveis podem enviar um ID de ronda, ID de transação, outpoint de entrada e prova de controlo da entrada. Um outpoint identifica uma saída específica de uma transação anterior. | Abra **Secret Hunt** e confira a opção descrita como **Enable/disable the use of this wallet for Secret Hunt.** Ela vem ativada por predefinição, embora os eventos relevantes possam não estar ativos. Desativá-la não retira requisições anteriores. |

O Tor não oculta do serviço destinatário um endereço enviado para validação, os detalhes de um pedido, um identificador de 2FA ou uma prova de propriedade do Secret Hunt. Essas observações também não significam que o serviço recebe palavras de recuperação ou autoridade para gastar simplesmente porque vê um identificador de transação.

O identificador de 2FA pode associar tentativas normais de arranque nesse serviço. A chave de encriptação devolvida faz parte de um mecanismo adicional de proteção dos ficheiros locais; não é uma nova chave Bitcoin que substitui suas palavras de recuperação e frase de segurança. Não envie esses segredos nem códigos do autenticador a contactos de apoio.

<span id="browsers-other-applications-and-people" data-ginger-heading="navegadores-outros-programas-e-pessoas" aria-hidden="true"></span>

## Navegadores, outros programas e pessoas

| Ação | O que pode ser divulgado | Hábito útil |
| --- | --- | --- |
| Abrir um explorador público | A transação ou o endereço consultados e as informações de rede e sessão do navegador | Comece pelo histórico local do Ginger; só abra um explorador quando precisar das informações adicionais que ele fornece. |
| Usar o site de um prestador | Detalhes do pedido, informações de login e pagamento, cookies e observações do navegador específicas do site | Trate a sessão do navegador separadamente da configuração Tor do Ginger. |
| Importar um xpub ou usar a mesma conta noutro programa | Um ramo de endereços públicos ou consultas derivadas da carteira, dependendo do programa | Confira o comportamento de sincronização e partilha de dados antes de importar. “Só de observação” descreve a autoridade para gastar, não a confidencialidade. |
| Partilhar um endereço numa mensagem ou publicação pública | Um vínculo entre esse endereço e a pessoa ou conta que o envia | Partilhe um endereço novo com o pagador pretendido por um canal de confiança. |
| Partilhar logs, ficheiros da carteira ou o conteúdo do ecrã | Dependendo do material: caminhos, etiquetas, endereços, identificadores de transações ou rondas e possivelmente segredos | Partilhe o menor excerto relevante, depois de o rever. Nunca envie todos os dados da carteira ou segredos de recuperação apenas porque alguém os pediu. |

Pesquisas sobre pagamentos na web mostram porque as observações do navegador e as informações da cadeia de blocos devem ser consideradas em conjunto. Elas não estabelecem a política atual de rastreio de um prestador específico do Ginger. [Goldfeder e colegas, When the Cookie Meets the Blockchain](https://arxiv.org/abs/1708.04748)

<span id="local-information-also-needs-protection" data-ginger-heading="as-informações-locais-também-precisam-de-proteção" aria-hidden="true"></span>

## As informações locais também precisam de proteção

Etiquetas, registos de privacidade e registos de pedidos de prestadores podem ficar nos metadados da carteira. Eles são úteis para decisões futuras e recuperação, mas nem todos recebem proteção idêntica à das chaves de assinatura. Proteja o computador, as cópias de segurança e as contas que podem aceder-lhes. **Discreet Mode** ajuda com os campos de ecrã compatíveis; o bloqueio de ecrã do sistema operativo protege de forma mais ampla contra o acesso sem supervisão.

Restaurar a partir das palavras pode recuperar chaves capazes de gastar sem restaurar todas as notas privadas. Excluir essas notas não apaga as informações que um destinatário ou serviço já possui. Antes de mudar de instalação, leia sobre [migração de carteira](/pt-pt/learn-privacy/wallet-migration/); antes de enviar um pagamento, confira os [hábitos de privacidade](/pt-pt/using-ginger/address-reuse/).
