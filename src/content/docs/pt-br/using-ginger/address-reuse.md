---
doc_id: "learn-privacy.habits"
title: "Hábitos de privacidade do Bitcoin antes e depois de um pagamento"
description: "Adote hábitos práticos relacionados a endereços de recebimento, rótulos, seleção de moedas, navegadores e pedidos de suporte ao usar o Ginger Wallet."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são uma continuação opcional.

É mais fácil manter melhorias de privacidade quando elas se encaixam na maneira como você realmente usa bitcoin. Antes de alterar uma configuração, identifique quais informações deseja divulgar de forma menos ampla e a pessoa ou o serviço que poderia vê-las.

<span id="before-receiving" data-ginger-heading="antes-de-receber" aria-hidden="true"></span>

## Antes de receber

Gere um endereço novo para o pagamento específico e use um rótulo local que faça sentido mais tarde. Evite um único endereço público reutilizável para recebimentos sem relação quando puder fornecer solicitações de pagamento individuais. Verifique os endereços de carteiras de hardware no dispositivo.

Pense também no canal de comunicação. Se você envia um endereço de recebimento por uma conta identificada, aquele destinatário pode associar o endereço a você, embora a própria blockchain não tenha um campo para nomes. Um endereço novo reduz a reutilização; ele não apaga a conversa em que você o compartilhou.

<span id="before-sending" data-ginger-heading="antes-de-enviar" aria-hidden="true"></span>

## Antes de enviar

Revise de onde vieram as moedas disponíveis. Combinar pagamentos de atividades distintas pode revelar que suas entradas foram gastas juntas. No Ginger, **Manual Control** pode ajudar a examinar e escolher moedas, enquanto a seleção automática e as sugestões de privacidade podem auxiliar nos pagamentos comuns. Sempre revise a prévia resultante.

Peça um destino novo e confirme o valor e o endereço. Se uma sugestão evita o troco modificando o valor para o destinatário, certifique-se de que ele realmente aceita o valor ajustado. Enviar um pagamento à pessoa errada ou pagar uma fatura abaixo do valor devido não melhora a privacidade.

<span id="after-coinjoin" data-ginger-heading="depois-do-coinjoin" aria-hidden="true"></span>

## Depois do CoinJoin

Trate as moedas resultantes como fundos cujo uso futuro ainda importa. Combinar todas as saídas em uma transação posterior pode criar uma nova associação. Reutilizar um endereço identificado ou gastar por meio de um provedor identificado cria mais informações, independentemente da pontuação que o Ginger mostrava antes do pagamento.

Um analista também pode comparar horários e valores entre transações. Não existe um período de espera universal que garanta segurança. Planeje como pretende gastar, em vez de esperar que uma rodada ou um atraso fixo resolva todas as formas de observação.

<span id="on-the-network-and-computer" data-ginger-heading="na-rede-e-no-computador" aria-hidden="true"></span>

## Na rede e no computador

Mantenha o Tor habilitado para o uso privado de rede previsto para a carteira. Ele encaminha conexões por retransmissores para reduzir a exposição direta do IP; a [explicação do Projeto Tor](https://support.torproject.org/about-tor/introduction/what-is-tor/) descreve sua função. O Tor não oculta aquilo que você envia explicitamente ao serviço na outra ponta.

Verifique o navegador usado para os links de provedores e exploradores. Seu navegador habitual pode conter contas conectadas e cookies de identificação. A preferência de navegador do Ginger e sua própria configuração do Tor são separadas. Prefira o histórico local da carteira a pesquisas repetidas dos seus próprios endereços em exploradores públicos.

Use **Discreet Mode** nos campos de tela compatíveis quando alguém puder ver sua tela, e o bloqueio do sistema operacional quando se afastar. Proteja os meios de backup e os rótulos locais. Uma carteira somente de observação pode vazar atividade financeira mesmo sem expor as chaves de assinatura.

<span id="when-asking-for-help" data-ginger-heading="ao-pedir-ajuda" aria-hidden="true"></span>

## Ao pedir ajuda

Descreva a versão, o sistema operacional, o erro e os passos de reprodução que não contêm segredos. Compartilhe somente o menor trecho relevante e revisado dos registros. Não publique um xpub, a pasta inteira de dados da carteira, as palavras de recuperação nem o QR code do autenticador. Um voluntário de suporte não pode corrigir a falta de uma frase-senha recebendo seus segredos de maneira segura em um canal público.

<span id="choose-a-sustainable-routine" data-ginger-heading="escolha-uma-rotina-sustentável" aria-hidden="true"></span>

## Escolha uma rotina sustentável

Para um pagamento ocasional, endereços novos, prévias cuidadosas, backups protegidos e Tor podem ser as primeiras melhorias a estabelecer. Se você precisa de maior privacidade nas ligações entre transações, avalie as taxas do CoinJoin, as condições do serviço e o comportamento de gasto após o CoinJoin. Uma rotina complicada que você não consegue recuperar ou seguir de maneira consistente pode criar riscos diferentes daqueles que esperava reduzir.

Para doações ou parcelas, veja o guia de uso cotidiano sobre [pagamentos repetidos](/pt-br/learn-privacy/repeated-payments/). Guias avançados opcionais abordam [gastos após o CoinJoin](/pt-br/learn-privacy/spending-after-coinjoin/), [migração de carteira](/pt-br/learn-privacy/wallet-migration/) e [para onde vão as informações da carteira](/pt-br/learn-privacy/information-sharing/). Escolha um deles quando precisar daquela decisão específica; não são passos obrigatórios para seu primeiro pagamento.
