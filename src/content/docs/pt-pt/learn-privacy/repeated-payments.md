---
doc_id: "learn-privacy.repeated-payments"
title: "Receber doações e pagamentos recorrentes"
description: "Receba doações e pagamentos recorrentes em Bitcoin com endereços novos, etiquetas úteis, reembolsos cuidadosos e tratamento consciente das moedas recebidas."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nível de leitura: utilização quotidiana. Escolha este guia quando precisar realizar a tarefa descrita nele.

Receber bitcoin publicamente não exige publicar todos os endereços da sua carteira. Exige decidir o que cada pagador ou visitante do site verá e manter receções sem relação entre si separadas quando isso for útil. O Ginger oferece receção comum on-chain e etiquetas locais; ele não é um servidor de cobranças nem um serviço automático de troca de endereços para sites.

<span id="choose-how-to-give-out-addresses" data-ginger-heading="escolha-como-fornecer-os-endereços" aria-hidden="true"></span>

## Escolha como fornecer os endereços

| Abordagem | O que ela facilita | O que fica visível |
| --- | --- | --- |
| Um endereço permanente num site ou perfil | Qualquer pessoa pode pagar sem entrar em contacto consigo | As receções nesse endereço e os gastos posteriores podem ser examinados em conjunto; a página vincula o endereço a seu proprietário |
| Um endereço novo fornecido a cada pagador | Cada solicitação de pagamento tem um destino separado | O pagador e o serviço de comunicação podem conhecer o endereço e sua identidade; transações posteriores podem criar vínculos |
| Um endereço novo para cada parcela recorrente | Pode manter registos privados por pagamento | É necessário comunicar a nova instrução; um pagador ainda pode reutilizar um endereço antigo |

As receções de um endereço público não representam necessariamente o saldo total, o rendimento ou o número de doadores de seu proprietário. Alguém pode enviar bitcoin para si mesmo, os doadores podem pagar várias vezes e outros endereços podem existir. Evite tirar conclusões mais fortes do que as transações visíveis permitem.

<span id="receive-and-keep-useful-records" data-ginger-heading="receba-e-mantenha-registos-úteis" aria-hidden="true"></span>

## Receba e mantenha registos úteis

1. Abra a carteira pretendida e escolha **Receive**. Adicione uma etiqueta que ajude a reconhecer a finalidade mais tarde, como uma referência privada de cobrança ou a atividade correspondente.
2. Gere um endereço novo de receção para esse pagamento. Para hardware, confira-o no dispositivo com **Show on the hardware wallet**, quando disponível.
3. Partilhe o endereço e o valor combinado em Bitcoin on-chain pelo canal pretendido. Confira o que colou; não reutilize um endereço apenas porque ele já está no histórico de uma conversa.
4. Confira a receção efetiva e as confirmações no Ginger. Uma mensagem do pagador ou uma imagem do ecrã de pagamento não é a confirmação da carteira de que os fundos chegaram.
5. Preserve a associação entre a receção, a etiqueta e qualquer registo privado de cobrança ou doação. As palavras de recuperação não reconstroem todas essas notas.

As etiquetas pertencem aos registos locais; elas não são publicadas como nomes na transação Bitcoin. Porém, qualquer pessoa que leia seus ficheiros locais, cópia de segurança ou ecrã partilhado pode vê-las. Use detalhes suficientes para compreender a seleção de moedas no futuro sem recolher informações pessoais desnecessárias sobre os doadores.

<span id="handle-a-permanently-published-address" data-ginger-heading="cuide-de-um-endereço-publicado-permanentemente" aria-hidden="true"></span>

## Cuide de um endereço publicado permanentemente

Se usar um endereço permanente para doações, presuma que seu histórico de receções pode ser examinado. Substituir o endereço num site não apaga o endereço anterior nem o impede de receber pagamentos futuros. Guarde seu material de recuperação e contexto suficiente para reconhecer receções tardias.

O CoinJoin pode ajudar a reduzir vínculos com gastos posteriores sob suas premissas; ele não faz desaparecer as doações para esse endereço público. Mover todas as receções juntas numa única transação comum pode criar uma nova associação. Planeie o próximo gasto com o mesmo cuidado que a receção inicial.

Para uma assinatura ou um pagamento recorrente de cliente, comunique um destino novo para cada parcela quando for viável. O Ginger não revoga um endereço antigo nem obriga o pagador a seguir a solicitação atualizada. Concilie pagamentos tardios e duplicados antes de prometer um reembolso.

<span id="refund-the-payer-through-a-verified-destination" data-ginger-heading="reembolse-o-pagador-por-um-destino-verificado" aria-hidden="true"></span>

## Reembolse o pagador por um destino verificado

Não envie automaticamente um reembolso a um dos endereços de entrada do pagamento original. O pagador pode ter usado um levantamento de corretora, um serviço custodial ou uma transação colaborativa e pode não controlar esse endereço de entrada.

1. Confirme o pagamento original e o pedido de reembolso usando seus registos privados e um canal de contacto de confiança.
2. Combine o valor do reembolso e quem pagará a taxa de transação. Obtenha um endereço Bitcoin novo para reembolso do destinatário pretendido e confira-o por esse canal.
3. Use **Send**, examine as entradas selecionadas e a taxa e autorize apenas o pagamento combinado.
4. Registe a transação de reembolso e confira seu resultado antes de tentar novamente após um erro de rede.

Um reembolso é um novo pagamento on-chain. Ele não desfaz a receção original nem apaga seus registos. Considere o que a transação de reembolso revela sobre as moedas que escolheu gastar.

<span id="keep-receipt-handling-deliberate" data-ginger-heading="trate-as-receções-de-forma-consciente" aria-hidden="true"></span>

## Trate as receções de forma consciente

Abra **Wallet Coins** para examinar as moedas resultantes. **Send** → **Manual Control** pode ajudar a selecionar fundos já associados à atividade relevante. Confira a transação final em vez de presumir que uma etiqueta impõe automaticamente a separação.

Pagamentos minúsculos inesperados não exigem uma resposta imediata. Gastar uma saída pequena pode custar uma percentagem alta de seu valor e associá-la a outras entradas selecionadas. **Exclude Coins** afeta apenas a participação em CoinJoin; não bloqueia uma moeda contra um gasto comum. Não siga instruções incluídas num pagamento não solicitado nem de um contacto que alegue que precisa enviar fundos para desbloqueá-lo.

Se direcionar saídas elegíveis de CoinJoin a outra carteira carregada para armazenamento, confira essa escolha antes de cada sessão. Ela é redefinida após reiniciar, e o fluxo normal desta versão não força uma ronda extra quando todos os fundos elegíveis já são privados. Uma configuração de receções recorrentes não deve depender da suposição não verificada de que tudo está a ser continuamente encaminhado para hardware.

Continue com [gastos após CoinJoin](/pt-pt/learn-privacy/spending-after-coinjoin/) para exemplos concretos e [partilha de informações](/pt-pt/learn-privacy/information-sharing/) para compreender o que sites, exploradores e outros programas podem descobrir.
