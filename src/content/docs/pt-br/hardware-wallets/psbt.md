---
doc_id: "hardware-wallets.psbt"
title: "Use o fluxo de PSBT"
description: "Prepare uma transação Bitcoin no Ginger, assine-a com uma carteira de hardware usando um arquivo e importe o resultado para transmissão."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, prepare uma carteira de hardware verificada e seu backup independente.

Uma transação Bitcoin parcialmente assinada (PSBT) é um arquivo que transporta uma transação e as informações necessárias a quem a assina. Ela permite separar a preparação no computador da assinatura em uma carteira de hardware. Uma PSBT pode revelar endereços, valores e informações da carteira, portanto, trate-a como privada mesmo antes de ela poder gastar qualquer coisa.

<span id="prepare-the-wallet-connection" data-ginger-heading="prepare-a-conexão-da-carteira" aria-hidden="true"></span>

## Prepare a conexão da carteira

Você precisa de um registro compatível de carteira de hardware no Ginger, vinculado às chaves do dispositivo de assinatura. Para uma exportação JSON compatível de carteira Coldcard, adicione o arquivo com **Import File**. Use as instruções atuais de exportação do fabricante para aquela versão de firmware; um arquivo de transação PSBT não é um arquivo de importação de carteira.

A exportação contém informações públicas da conta e uma impressão digital do dispositivo, não as palavras de recuperação. Verifique que o endereço de recebimento do Ginger corresponde ao dispositivo antes de depositar fundos na carteira. Uma conta importada com outro caminho de derivação ou outra frase-senha pode ser uma carteira diferente, mesmo quando o dispositivo é o mesmo.

<span id="export-a-transaction" data-ginger-heading="exporte-uma-transação" aria-hidden="true"></span>

## Exporte uma transação

1. Abra a carteira de hardware no Ginger. Em **Wallet Settings** → **General**, habilite **PSBT workflow**.
2. Escolha **Send** e prepare o destino e o valor como de costume. Revise as entradas selecionadas, o troco e a taxa.
3. Na prévia, escolha **Save PSBT file** e salve a transação proposta. A alternativa **Send Now** segue a assinatura imediata em vez de salvar para o fluxo por arquivos.
4. Transfira o arquivo para o dispositivo de assinatura pelo método compatível, como uma mídia removível. Siga as instruções do dispositivo e examine o destino, o valor, a taxa e o troco em sua tela confiável.
5. Salve o resultado assinado sem confundi-lo com a proposta original não assinada.

Não aprove uma transação apenas porque o Ginger a preparou. O dispositivo deve autorizar o pagamento pretendido. Mantenha as palavras de recuperação fora do arquivo PSBT e do computador.

<span id="import-and-broadcast" data-ginger-heading="importe-e-transmita" aria-hidden="true"></span>

## Importe e transmita

Volte à carteira de hardware no Ginger e escolha **Broadcast**, visível com o fluxo de PSBT. O diálogo de arquivos **Import Transaction** aceita arquivos de transação compatíveis, incluindo PSBT e arquivos de transação. Selecione o resultado assinado e examine a tela de transmissão antes de enviá-lo para a rede.

Uma PSBT não assinada ou incompletamente assinada não pode ser transmitida como pagamento válido. Uma assinatura bem-sucedida também não garante a aceitação se suas entradas já foram gastas ou sua taxa não atende mais às condições da rede. Mantenha a carteira original disponível, sincronize e verifique o histórico antes de criar outro pagamento.

Depois que uma transação é transmitida, o dispositivo de assinatura não precisa mais ficar conectado para que ela seja confirmada. Verifique a entrada final no histórico e as confirmações no Ginger. Excluir um arquivo assinado não cancela uma transação que outra pessoa já poderia transmitir.

<span id="handle-files-carefully" data-ginger-heading="trate-os-arquivos-com-cuidado" aria-hidden="true"></span>

## Trate os arquivos com cuidado

Use nomes de arquivo distintos para propostas e resultados assinados. Não envie PSBTs por e-mail nem as carregue em um decodificador on-line para examinar sua própria transação. Proteja também as exportações sensíveis de contas: uma chave pública estendida pode revelar muitos endereços, embora não possa assinar diretamente um gasto.

Esse fluxo documenta a interface de carteira de hardware desta versão. Ele não estabelece um coordenador geral de múltiplas assinaturas, uma API de assinatura para desenvolvedores nem compatibilidade com todo formato PSBT produzido por outros aplicativos.
