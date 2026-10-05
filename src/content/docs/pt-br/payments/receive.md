---
doc_id: "payments.receive"
title: "Receba bitcoin e gerencie endereços"
description: "Gere um endereço de recebimento no Ginger, escolha SegWit ou Taproot quando houver suporte, rotule pagamentos e confira as confirmações."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: Comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são leituras complementares opcionais.

Use um endereço de recebimento novo para cada pagamento. O endereço informa ao pagador para onde enviar bitcoin; não revela suas palavras de recuperação. Reutilizá-lo, porém, permite que observadores relacionem os pagamentos ao mesmo destino.

<span id="request-a-payment" data-ginger-heading="solicite-um-pagamento" aria-hidden="true"></span>

## Solicite um pagamento

1. Abra a carteira pretendida e aguarde o término da recuperação ou sincronização.
2. Escolha **Receive**. Adicione um rótulo que descreva o pagador ou a finalidade, como “Fatura de junho”. Use detalhes suficientes para reconhecê-lo depois, sem registrar dados pessoais desnecessários.
3. Escolha **Generate**. A ação normal cria um endereço SegWit nativo. Se a carteira oferecer suporte a Taproot, a ação alternativa oferece **Taproot**, indicado por **TR**; use-o apenas quando o pagador aceitar esse tipo de endereço.
4. Copie o endereço ou compartilhe o código QR de recebimento. Para uma carteira de hardware, use **Show on the hardware wallet** e compare o endereço completo no dispositivo antes de fornecê-lo ao pagador.
5. Confira o destino após colá-lo em outro aplicativo. Um malware que afeta a área de transferência pode substituir um endereço mesmo quando o QR original ou a exibição da carteira estava correto.

Na mainnet do Bitcoin, endereços de recebimento SegWit nativos normalmente começam com `bc1q`; endereços Taproot começam com `bc1p`. Os endereços das redes de teste são diferentes. Se um serviço rejeitar um endereço Bitcoin compatível, confira com esse serviço a rede e os tipos de endereço aceitos, em vez de alterar caracteres do endereço.

<span id="labels-and-unused-addresses" data-ginger-heading="rótulos-e-endereços-não-utilizados" aria-hidden="true"></span>

## Rótulos e endereços não utilizados

**Addresses Awaiting Payment** mostra endereços de recebimento que ainda não receberam pagamento e continuam disponíveis nessa lista. Você pode inspecionar seus códigos QR, copiá-los, alterar seus rótulos ou ocultar um endereço pelas ações disponíveis.

Ocultar um endereço não o revoga no Bitcoin. Um pagamento para um endereço gerado anteriormente ainda pertence à carteira se você controla suas chaves. Os endereços utilizados podem desaparecer da lista de pagamentos aguardados por projeto; isso incentiva novos endereços, em vez de indicar que as chaves antigas foram excluídas.

Os rótulos são metadados locais da carteira, não mensagens gravadas na blockchain ou entregues automaticamente ao pagador. Ainda assim, podem ser expostos por backups, logs, exportações ou compartilhamento de tela. Mantenha um backup dos arquivos se os rótulos forem importantes para você: as palavras de recuperação não podem reconstruí-los.

<span id="know-when-you-have-been-paid" data-ginger-heading="saiba-quando-o-pagamento-foi-recebido" aria-hidden="true"></span>

## Saiba quando o pagamento foi recebido

O remetente transmitir uma transação, o Ginger identificá-la como não confirmada e um minerador incluí-la em um bloco são eventos diferentes. Confira o histórico da carteira e os detalhes da transação. Um pagamento não confirmado pode ser substituído ou não ser confirmado; decida quanta segurança de confirmação a situação exige antes de fornecer algo irreversível em troca.

O Ginger pode receber enquanto o aplicativo estiver fechado. O pagador precisa de um endereço válido, não de uma carteira online. Ao reabri-lo, a sincronização encontra a transação. Um CoinJoin ou um pagamento enviado a outra carteira carregada aparecerá apenas na carteira que controla suas saídas.

<span id="if-the-payment-is-missing" data-ginger-heading="se-o-pagamento-estiver-ausente" aria-hidden="true"></span>

## Se o pagamento estiver ausente

Peça ao remetente o identificador da transação e verifique o destino pelo canal de comunicação já utilizado. Confira a carteira selecionada, mainnet ou testnet, o estado da sincronização e se o remetente realmente transmitiu uma transação. Evite colar todos os endereços em um explorador público: ele fica sabendo o que você consulta.

Se você restaurou pelas palavras e gerou muitos endereços não utilizados no passado, o limite de endereços não utilizados na recuperação pode ser relevante. Uma nova solicitação de recebimento, por si só, não corrige uma busca histórica incompleta. Preserve os backups antes de tentar uma nova busca ou recuperação.
