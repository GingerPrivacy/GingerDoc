---
doc_id: "hardware-wallets.connect"
title: "Conecte e use uma carteira de hardware"
description: "Conecte uma carteira de hardware compatível ao Ginger, verifique os endereços de recebimento no dispositivo e aprove pagamentos com segurança."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="does-ginger-support-hardware-wallets"></span>

> Nível de leitura: Uso cotidiano. Escolha este guia quando precisar realizar a tarefa descrita nele.

Uma carteira de hardware mantém as chaves de assinatura em um dispositivo separado. O Ginger pode exibir seu saldo e preparar transações, enquanto o dispositivo autoriza as operações de assinatura compatíveis. O computador ainda lida com informações públicas sensíveis, portanto armazenar as chaves em hardware não torna anônima a atividade da carteira.

<span id="compatibility-in-this-release" data-ginger-heading="compatibilidade-nesta-versão" aria-hidden="true"></span>

## Compatibilidade nesta versão

O Ginger 2.0.26 inclui o Hardware Wallet Interface (HWI) 3.2.0. O reconhecimento de dispositivos no Ginger inclui Coldcard, Ledger Nano S, Nano S Plus e Nano X, Trezor One, Model T, Safe 3 e Safe 5, BitBox01, BitBox02, KeepKey e Blockstream Jade. O reconhecimento não garante que todos os dispositivos, firmwares, procedimentos de frase-senha e tipos de endereço funcionem na interface gráfica.

A [matriz de dispositivos do HWI 3.2.0](https://github.com/bitcoin-core/HWI/blob/3.2.0/docs/devices/index.rst) descreve as capacidades da camada de comunicação subjacente. O Ginger oferece um subconjunto: por exemplo, sua conexão normal com o dispositivo importa a conta SegWit nativa. A compatibilidade do HWI com multisig ou Taproot não cria, por si só, um procedimento correspondente de configuração de carteira no Ginger.

Antes de mover uma quantia significativa, confirme que seu dispositivo específico consegue se conectar, exibir um endereço de recebimento e assinar um pequeno pagamento de teste. Se ele exigir um método de entrada de PIN ou frase-senha que o Ginger não consiga concluir, complete o procedimento compatível no próprio dispositivo ou consulte o fabricante. Não digite as palavras de recuperação do dispositivo no Ginger como alternativa.

<span id="add-the-device" data-ginger-heading="adicione-o-dispositivo" aria-hidden="true"></span>

## Adicione o dispositivo

1. Inicialize a carteira de hardware e faça seu backup seguindo as instruções do fabricante. Use um firmware confiável e um cabo USB capaz de transmitir dados.
2. Conecte um dispositivo por vez, desbloqueie-o e abra seu aplicativo de Bitcoin se ele exigir um. Feche outros aplicativos de carteira que possam estar ocupando a conexão USB.
3. Na tela de adição de carteiras do Ginger, escolha **Hardware Wallet** e forneça um nome de carteira se solicitado.
4. Siga as instruções de detecção e do dispositivo. O Ginger pode reconhecer uma carteira que você já adicionou e oferecer abri-la em vez de criar uma duplicata.
5. Deixe o Ginger sincronizar. Confirme que a rede e a conta selecionadas são as que você pretendia usar.

O Ginger pode manter um registro público da carteira no computador sem o hardware conectado. Esse registro permite observar a atividade e gerar endereços; gastar ainda exige o dispositivo de assinatura ou uma recuperação válida de suas chaves.

<span id="receive-and-verify" data-ginger-heading="receba-e-verifique" aria-hidden="true"></span>

## Receba e verifique

Escolha **Receive**, adicione um rótulo e gere um endereço. Use **Show on the hardware wallet** quando disponível. Compare o endereço completo exibido pelo dispositivo com o endereço do Ginger antes de compartilhá-lo. Se o dispositivo e o computador mostrarem endereços diferentes, pare: aprovar um endereço diferente pode enviar fundos para fora da sua carteira.

O computador pode exibir um endereço convincente mesmo se estiver comprometido. A tela do dispositivo é útil porque fornece uma verificação separada com base nas próprias chaves do dispositivo. Use um endereço novo para cada pagamento para evitar vincular recebimentos sem relação entre si.

<span id="send-and-approve" data-ginger-heading="envie-e-aprove" aria-hidden="true"></span>

## Envie e aprove

Prepare um pagamento no Ginger e revise o destinatário, o valor, o troco e a taxa. Na carteira de hardware, examine o que ela pede para você assinar. Rejeite a solicitação se o destino ou o valor diferirem do que você pretendia, ou se o dispositivo informar uma condição de troco ou saída que você não consiga explicar.

Mantenha o dispositivo conectado até a conclusão da assinatura. Depois, verifique a transmissão e a confirmação no histórico de transações do Ginger. Remover um dispositivo não cancela uma transação já transmitida.

<span id="coinjoin-and-other-limits" data-ginger-heading="coinjoin-e-outras-limitações" aria-hidden="true"></span>

## CoinJoin e outras limitações

Uma carteira de hardware não pode ser a carteira de origem que assina no CoinJoin automático do Ginger. Uma carteira de hardware carregada pode aparecer como destino de saídas de CoinJoin para uma carteira de software; essa é uma função de recebimento, e sua seleção é redefinida na reinicialização. Use apenas o destino que o Ginger realmente oferecer e verifique seu controle antes de depender dele.

O [guia da corretora ao armazenamento frio](/pt-br/hardware-wallets/exchange-to-cold-storage/) compara o recebimento direto de saídas elegíveis de CoinJoin com uma transferência comum posterior. Ele inclui a restrição de inicialização para carteiras com apenas moedas privadas e verificações para conciliar as duas carteiras.

O envio de PayJoin é rejeitado para carteiras de hardware nesta versão. A assinatura de mensagens depende da compatibilidade do dispositivo e do verificador. Nem o dispositivo nem o Ginger podem reverter um pagamento confirmado. Para assinar por arquivos, leia [Use o procedimento PSBT](/pt-br/hardware-wallets/psbt/).

<span id="connection-problems" data-ginger-heading="problemas-de-conexão" aria-hidden="true"></span>

## Problemas de conexão

Tente um cabo de dados que você sabe que funciona, uma porta USB direta e um único dispositivo desbloqueado. No Linux, siga as instruções aplicáveis do fabricante sobre permissões udev/USB e reconecte depois. Evite executar a carteira como root como solução permanente. Se uma frase-senha diferente abrir uma conta vazia inesperada, verifique a frase-senha original do dispositivo em vez de redefini-lo.
