---
doc_id: "learn-privacy.habits"
title: "Hábitos de privacidade do Bitcoin antes e depois de um pagamento"
description: "Adote hábitos práticos relacionados a endereços de receção, etiquetas, seleção de moedas, navegadores e pedidos de apoio ao usar o Ginger Wallet."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são uma continuação opcional.

É mais fácil manter melhorias de privacidade quando elas se encaixam na maneira como realmente usa bitcoin. Antes de alterar uma definição, identifique quais informações deseja divulgar de forma menos ampla e a pessoa ou o serviço que poderia vê-las.

<span id="before-receiving" data-ginger-heading="antes-de-receber" aria-hidden="true"></span>

## Antes de receber

Gere um endereço novo para o pagamento específico e use uma etiqueta local que faça sentido mais tarde. Evite um único endereço público reutilizável para receções sem relação quando puder fornecer solicitações de pagamento individuais. Verifique os endereços de carteiras de hardware no dispositivo.

Pense também no canal de comunicação. Se envia um endereço de receção por uma conta identificada, aquele destinatário pode associar o endereço a si, embora a própria cadeia de blocos não tenha um campo para nomes. Um endereço novo reduz a reutilização; ele não apaga a conversa em que o partilhou.

<span id="before-sending" data-ginger-heading="antes-de-enviar" aria-hidden="true"></span>

## Antes de enviar

Reveja de onde vieram as moedas disponíveis. Combinar pagamentos de atividades distintas pode revelar que suas entradas foram gastas juntas. No Ginger, **Manual Control** pode ajudar a examinar e escolher moedas, enquanto a seleção automática e as sugestões de privacidade podem auxiliar nos pagamentos comuns. Sempre reveja a pré-visualização resultante.

Peça um destino novo e confirme o valor e o endereço. Se uma sugestão evita o troco modificando o valor para o destinatário, certifique-se de que ele realmente aceita o valor ajustado. Enviar um pagamento à pessoa errada ou pagar uma fatura abaixo do valor devido não melhora a privacidade.

<span id="after-coinjoin" data-ginger-heading="depois-do-coinjoin" aria-hidden="true"></span>

## Depois do CoinJoin

Trate as moedas resultantes como fundos cujo uso futuro ainda importa. Combinar todas as saídas numa transação posterior pode criar uma nova associação. Reutilizar um endereço identificado ou gastar através de um prestador identificado cria mais informações, independentemente da pontuação que o Ginger mostrava antes do pagamento.

Um analista também pode comparar horários e valores entre transações. Não existe um período de espera universal que garanta segurança. Planeie como pretende gastar, em vez de esperar que uma ronda ou um atraso fixo resolva todas as formas de observação.

<span id="on-the-network-and-computer" data-ginger-heading="na-rede-e-no-computador" aria-hidden="true"></span>

## Na rede e no computador

Mantenha o Tor ativado para o uso privado de rede previsto para a carteira. Ele encaminha ligações por retransmissores para reduzir a exposição direta do IP; a [explicação do Projeto Tor](https://support.torproject.org/about-tor/introduction/what-is-tor/) descreve sua função. O Tor não oculta aquilo que envia explicitamente ao serviço na outra ponta.

Verifique o navegador usado para as ligações de prestadores e exploradores. Seu navegador habitual pode conter contas ligadas e cookies de identificação. A preferência de navegador do Ginger e sua própria configuração do Tor são separadas. Prefira o histórico local da carteira a pesquisas repetidas dos seus próprios endereços em exploradores públicos.

Use **Discreet Mode** nos campos de ecrã compatíveis quando alguém puder ver o seu ecrã, e o bloqueio do sistema operativo quando se afastar. Proteja os meios de cópia de segurança e as etiquetas locais. Uma carteira só de observação pode revelar atividade financeira mesmo sem expor as chaves de assinatura.

<span id="when-asking-for-help" data-ginger-heading="ao-pedir-ajuda" aria-hidden="true"></span>

## Ao pedir ajuda

Descreva a versão, o sistema operativo, o erro e os passos de reprodução que não contêm segredos. Partilhe apenas o menor excerto relevante e revisto dos registos. Não publique um xpub, a pasta inteira de dados da carteira, as palavras de recuperação nem o QR code do autenticador. Um voluntário de apoio não pode corrigir a falta de uma frase de segurança recebendo seus segredos de maneira segura num canal público.

<span id="choose-a-sustainable-routine" data-ginger-heading="escolha-uma-rotina-sustentável" aria-hidden="true"></span>

## Escolha uma rotina sustentável

Para um pagamento ocasional, endereços novos, pré-visualizações cuidadosas, cópias de segurança protegidas e Tor podem ser as primeiras melhorias a estabelecer. Se precisa de maior privacidade nas ligações entre transações, avalie as taxas do CoinJoin, as condições do serviço e o comportamento de gasto após o CoinJoin. Uma rotina complicada que não consegue recuperar ou seguir de maneira consistente pode criar riscos diferentes daqueles que esperava reduzir.

Para doações ou parcelas, veja o guia de utilização quotidiana sobre [pagamentos repetidos](/pt-pt/learn-privacy/repeated-payments/). Guias avançados opcionais abordam [gastos após o CoinJoin](/pt-pt/learn-privacy/spending-after-coinjoin/), [migração de carteira](/pt-pt/learn-privacy/wallet-migration/) e [para onde vão as informações da carteira](/pt-pt/learn-privacy/information-sharing/). Escolha um deles quando precisar daquela decisão específica; não são passos obrigatórios para seu primeiro pagamento.
