---
doc_id: "learn-privacy.repeated-payments"
title: "Receber doações e pagamentos recorrentes"
description: "Receba doações e pagamentos recorrentes em Bitcoin com endereços novos, etiquetas úteis, reembolsos cuidadosos e tratamento consciente das moedas recebidas."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nível de leitura: uso cotidiano. Escolha este guia quando precisar realizar a tarefa descrita nele.

Receber bitcoin publicamente não exige publicar todos os endereços da sua carteira. Exige decidir o que cada pagador ou visitante do site verá e manter recebimentos sem relação entre si separados quando isso for útil. O Ginger oferece recebimento comum on-chain e etiquetas locais; ele não é um servidor de cobranças nem um serviço automático de troca de endereços para sites.

<span id="choose-how-to-give-out-addresses" data-ginger-heading="escolha-como-fornecer-os-endereços" aria-hidden="true"></span>

## Escolha como fornecer os endereços

| Abordagem | O que ela facilita | O que fica visível |
| --- | --- | --- |
| Um endereço permanente em um site ou perfil | Qualquer pessoa pode pagar sem entrar em contato com você | Os recebimentos nesse endereço e os gastos posteriores podem ser examinados em conjunto; a página vincula o endereço a seu proprietário |
| Um endereço novo fornecido a cada pagador | Cada solicitação de pagamento tem um destino separado | O pagador e o serviço de comunicação podem conhecer o endereço e sua identidade; transações posteriores podem criar vínculos |
| Um endereço novo para cada parcela recorrente | Você pode manter registros privados por pagamento | É necessário comunicar a nova instrução; um pagador ainda pode reutilizar um endereço antigo |

Os recebimentos de um endereço público não representam necessariamente o saldo total, a renda ou o número de doadores de seu proprietário. Alguém pode enviar bitcoin para si mesmo, os doadores podem pagar várias vezes e outros endereços podem existir. Evite tirar conclusões mais fortes do que as transações visíveis permitem.

<span id="receive-and-keep-useful-records" data-ginger-heading="receba-e-mantenha-registros-úteis" aria-hidden="true"></span>

## Receba e mantenha registros úteis

1. Abra a carteira pretendida e escolha **Receive**. Adicione uma etiqueta que ajude a reconhecer a finalidade mais tarde, como uma referência privada de cobrança ou a atividade correspondente.
2. Gere um endereço novo de recebimento para esse pagamento. Para hardware, confira-o no dispositivo com **Show on the hardware wallet**, quando disponível.
3. Compartilhe o endereço e o valor combinado em Bitcoin on-chain pelo canal pretendido. Confira o que você colou; não reutilize um endereço apenas porque ele já está no histórico de uma conversa.
4. Confira o recebimento real e as confirmações no Ginger. Uma mensagem do pagador ou uma imagem da tela de pagamento não é a confirmação da carteira de que os fundos chegaram.
5. Preserve a associação entre o recebimento, a etiqueta e qualquer registro privado de cobrança ou doação. As palavras de recuperação não reconstroem todas essas notas.

As etiquetas pertencem aos registros locais; elas não são publicadas como nomes na transação Bitcoin. Porém, qualquer pessoa que leia seus arquivos locais, backup ou tela compartilhada pode vê-las. Use detalhes suficientes para entender a seleção de moedas no futuro sem coletar informações pessoais desnecessárias sobre os doadores.

<span id="handle-a-permanently-published-address" data-ginger-heading="cuide-de-um-endereço-publicado-permanentemente" aria-hidden="true"></span>

## Cuide de um endereço publicado permanentemente

Se você usar um endereço permanente para doações, presuma que seu histórico de recebimentos pode ser examinado. Substituir o endereço em um site não apaga o endereço anterior nem o impede de receber pagamentos futuros. Guarde seu material de recuperação e contexto suficiente para reconhecer recebimentos tardios.

O CoinJoin pode ajudar a reduzir vínculos com gastos posteriores sob suas premissas; ele não faz desaparecer as doações para esse endereço público. Mover todos os recebimentos juntos em uma única transação comum pode criar uma nova associação. Planeje o próximo gasto com o mesmo cuidado que o recebimento inicial.

Para uma assinatura ou um pagamento recorrente de cliente, comunique um destino novo para cada parcela quando for viável. O Ginger não revoga um endereço antigo nem obriga o pagador a seguir a solicitação atualizada. Concilie pagamentos tardios e duplicados antes de prometer um reembolso.

<span id="refund-the-payer-through-a-verified-destination" data-ginger-heading="reembolse-o-pagador-por-um-destino-verificado" aria-hidden="true"></span>

## Reembolse o pagador por um destino verificado

Não envie automaticamente um reembolso a um dos endereços de entrada do pagamento original. O pagador pode ter usado um saque de corretora, um serviço custodial ou uma transação colaborativa e pode não controlar esse endereço de entrada.

1. Confirme o pagamento original e o pedido de reembolso usando seus registros privados e um canal de contato confiável.
2. Combine o valor do reembolso e quem pagará a taxa de transação. Obtenha um endereço Bitcoin novo para reembolso do destinatário pretendido e confira-o por esse canal.
3. Use **Send**, examine as entradas selecionadas e a taxa e autorize apenas o pagamento combinado.
4. Registre a transação de reembolso e confira seu resultado antes de tentar novamente após um erro de rede.

Um reembolso é um novo pagamento on-chain. Ele não desfaz o recebimento original nem apaga seus registros. Considere o que a transação de reembolso revela sobre as moedas que você escolheu gastar.

<span id="keep-receipt-handling-deliberate" data-ginger-heading="trate-os-recebimentos-de-forma-consciente" aria-hidden="true"></span>

## Trate os recebimentos de forma consciente

Abra **Wallet Coins** para examinar as moedas resultantes. **Send** → **Manual Control** pode ajudar a selecionar fundos já associados à atividade relevante. Confira a transação final em vez de presumir que uma etiqueta impõe automaticamente a separação.

Pagamentos minúsculos inesperados não exigem uma resposta imediata. Gastar uma saída pequena pode custar uma porcentagem alta de seu valor e associá-la a outras entradas selecionadas. **Exclude Coins** afeta apenas a participação em CoinJoin; não bloqueia uma moeda contra um gasto comum. Não siga instruções incluídas em um pagamento não solicitado nem de um contato que alegue que você precisa enviar fundos para desbloqueá-lo.

Se você direcionar saídas elegíveis de CoinJoin a outra carteira carregada para armazenamento, confira essa escolha antes de cada sessão. Ela é redefinida após reiniciar, e o fluxo normal desta versão não força uma rodada extra quando todos os fundos elegíveis já são privados. Uma configuração de recebimentos recorrentes não deve depender da suposição não verificada de que tudo está sendo continuamente encaminhado para hardware.

Continue com [gastos após CoinJoin](/pt-br/learn-privacy/spending-after-coinjoin/) para exemplos concretos e [compartilhamento de informações](/pt-br/learn-privacy/information-sharing/) para entender o que sites, exploradores e outros aplicativos podem descobrir.
