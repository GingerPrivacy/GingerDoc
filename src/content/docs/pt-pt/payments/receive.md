---
doc_id: "payments.receive"
title: "Receba bitcoin e gira endereços"
description: "Gere um endereço de receção no Ginger, escolha SegWit ou Taproot quando forem compatíveis, atribua etiquetas aos pagamentos e confira as confirmações."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: Comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são leituras complementares opcionais.

Use um endereço de receção novo para cada pagamento. O endereço informa ao pagador para onde enviar bitcoin; não revela suas palavras de recuperação. Reutilizá-lo, porém, permite que observadores relacionem os pagamentos ao mesmo destino.

<span id="request-a-payment" data-ginger-heading="solicite-um-pagamento" aria-hidden="true"></span>

## Solicite um pagamento

1. Abra a carteira pretendida e aguarde o fim da recuperação ou sincronização.
2. Escolha **Receive**. Adicione uma etiqueta que descreva o pagador ou a finalidade, como “Fatura de junho”. Use detalhes suficientes para reconhecê-lo depois, sem registar dados pessoais desnecessários.
3. Escolha **Generate**. A ação normal cria um endereço SegWit nativo. Se a carteira for compatível com Taproot, a ação alternativa oferece **Taproot**, indicado por **TR**; use-o apenas quando o pagador aceitar esse tipo de endereço.
4. Copie o endereço ou partilhe o código QR de receção. Para uma carteira de hardware, use **Show on the hardware wallet** e compare o endereço completo no dispositivo antes de fornecê-lo ao pagador.
5. Confira o destino após colá-lo noutro programa. Um malware que afeta a área de transferência pode substituir um endereço mesmo quando o QR original ou a exibição da carteira estava correta.

Na mainnet do Bitcoin, endereços de receção SegWit nativos normalmente começam com `bc1q`; endereços Taproot começam com `bc1p`. Os endereços das redes de teste são diferentes. Se um serviço rejeitar um endereço Bitcoin compatível, confira com esse serviço a rede e os tipos de endereço aceites, em vez de alterar caracteres do endereço.

<span id="labels-and-unused-addresses" data-ginger-heading="etiquetas-e-endereços-não-utilizados" aria-hidden="true"></span>

## Etiquetas e endereços não utilizados

**Addresses Awaiting Payment** mostra endereços de receção que ainda não receberam pagamento e continuam disponíveis nessa lista. Pode inspecionar seus códigos QR, copiá-los, alterar as suas etiquetas ou ocultar um endereço pelas ações disponíveis.

Ocultar um endereço não o revoga no Bitcoin. Um pagamento para um endereço gerado anteriormente ainda pertence à carteira se controla suas chaves. Os endereços utilizados podem desaparecer da lista de pagamentos aguardados por conceção; isso incentiva novos endereços, em vez de indicar que as chaves antigas foram excluídas.

As etiquetas são metadados locais da carteira, não mensagens gravadas na cadeia de blocos ou entregues automaticamente ao pagador. Ainda assim, podem ser expostas por cópias de segurança, logs, exportações ou partilha de ecrã. Mantenha uma cópia de segurança dos ficheiros se as etiquetas forem importantes para si: as palavras de recuperação não podem reconstruí-las.

<span id="know-when-you-have-been-paid" data-ginger-heading="saiba-quando-o-pagamento-foi-recebido" aria-hidden="true"></span>

## Saiba quando o pagamento foi recebido

O remetente transmitir uma transação, o Ginger identificá-la como não confirmada e um minerador incluí-la num bloco são eventos diferentes. Confira o histórico da carteira e os detalhes da transação. Um pagamento não confirmado pode ser substituído ou não ser confirmado; decida quanta segurança de confirmação a situação exige antes de fornecer algo irreversível em troca.

O Ginger pode receber enquanto o programa estiver fechado. O pagador precisa de um endereço válido, não de uma carteira online. Ao reabri-lo, a sincronização encontra a transação. Um CoinJoin ou um pagamento enviado a outra carteira carregada aparecerá apenas na carteira que controla suas saídas.

<span id="if-the-payment-is-missing" data-ginger-heading="se-o-pagamento-estiver-ausente" aria-hidden="true"></span>

## Se o pagamento estiver ausente

Peça ao remetente o identificador da transação e verifique o destino pelo canal de comunicação já utilizado. Confira a carteira selecionada, mainnet ou testnet, o estado da sincronização e se o remetente realmente transmitiu uma transação. Evite colar todos os endereços num explorador público: ele fica a conhecer o que consulta.

Se restaurou pelas palavras e gerou muitos endereços não utilizados no passado, o limite de endereços não utilizados na recuperação pode ser relevante. Uma nova solicitação de receção, por si só, não corrige uma pesquisa histórica incompleta. Preserve as cópias de segurança antes de tentar uma nova pesquisa ou recuperação.
