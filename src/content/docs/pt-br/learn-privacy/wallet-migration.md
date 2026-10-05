---
doc_id: "learn-privacy.wallet-migration"
title: "Migrar para o Ginger sem expor mais o histórico da carteira"
description: "Compare restaurar as mesmas chaves Bitcoin, conectar hardware a outro aplicativo de carteira e mover fundos para chaves novas sem presumir que as divulgações anteriores desaparecem."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, entenda o uso de endereços novos para receber e a conferência de pagamentos comuns.

Mudar o software da carteira altera qual aplicativo você usa. Isso não muda necessariamente as chaves Bitcoin, os endereços ou as informações que um serviço anterior já conhece. Decida se você está recuperando acesso, mudando de software por conveniência ou criando uma nova separação para a atividade futura.

<span id="choose-the-kind-of-move" data-ginger-heading="escolha-o-tipo-de-mudança" aria-hidden="true"></span>

## Escolha o tipo de mudança

| Escolha | O que permanece igual | O que muda |
| --- | --- | --- |
| Restaurar as mesmas palavras de recuperação, frase-senha e conta compatível | As chaves e os endereços correspondentes | O aplicativo que os procura e gerencia; notas locais podem estar ausentes |
| Conectar a mesma conta de hardware ao Ginger | As chaves mantidas no hardware e os endereços dessa conta | O aplicativo de computador que guarda suas informações públicas de conta |
| Criar uma carteira com chaves novas e transferir os fundos | O histórico existente permanece na blockchain | Chaves e endereços futuros; são necessários um backup separado e uma transferência on-chain |

Restaurar a mesma carteira não move seus bitcoins, portanto não há taxa de rede apenas pela restauração. Uma transferência on-chain para chaves novas tem uma taxa e cria uma transação visível. São operações diferentes, mesmo que ambas terminem com um saldo exibido no Ginger.

<span id="understand-what-an-xpub-exposes" data-ginger-heading="entenda-o-que-um-xpub-expõe" aria-hidden="true"></span>

## Entenda o que um xpub expõe

Uma chave pública estendida, geralmente chamada de xpub, permite que o software derive um ramo de endereços públicos sem ter a autoridade comum para assinar por eles. Um xpub de conta normalmente revela mais do que um único endereço de recebimento, incluindo endereços futuros derivados dessa conta. Seu alcance depende de sua posição na árvore de chaves; ele não revela todas as outras contas com derivação endurecida. [BIP32: carteiras determinísticas hierárquicas](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

Um aplicativo de carteira anterior, serviço de acompanhamento de portfólio ou ferramenta de contabilidade pode ter recebido um xpub ou consultas de endereços. Remover esse aplicativo não revoga cópias guardadas em outros lugares. Continuar usando a mesma conta também pode permitir que esse observador reconheça a atividade posterior. O Tor pode ocultar uma conexão IP direta; ele não pode fazer o serviço receptor esquecer as informações da carteira que você enviou.

Se você não sabe o que um serviço recebeu, trate isso como uma incerteza. Não envie um xpub a um “verificador de privacidade” on-line para investigar.

<span id="restore-access-to-an-existing-software-wallet" data-ginger-heading="restaure-o-acesso-a-uma-carteira-de-software-existente" aria-hidden="true"></span>

## Restaure o acesso a uma carteira de software existente

1. Preserve os backups e registros originais antes de mudar uma instalação. Uma migração não é motivo para excluir seus únicos arquivos funcionais de carteira.
2. Use o fluxo de recuperação do Ginger com as palavras originais da carteira e a frase-senha original exata. Confirme que o formato da carteira, os tipos de endereço e a conta são compatíveis. Uma frase mnemônica válida, sozinha, não comprova compatibilidade.
3. Deixe a varredura terminar. Compare transações conhecidas ou um endereço de recebimento de seus registros privados antes de concluir que uma tela vazia significa que o dinheiro desapareceu.
4. Confira as etiquetas restauradas, as configurações de CoinJoin e as informações de privacidade. As palavras de recuperação recuperam chaves; elas não recriam todas as notas ou configurações armazenadas pelo aplicativo anterior.
5. Confira o CoinJoin automático e a seleção de destino antes de deixar os fundos funcionando sem supervisão. Evite usar dois aplicativos para gastar as mesmas moedas ao mesmo tempo.

Uma frase-senha incorreta pode produzir outra carteira válida. Não percorra configurações aleatórias, não envie fundos de teste a uma conta inexplicavelmente vazia nem entregue as palavras de recuperação a um desconhecido que se apresenta como suporte para resolver a diferença.

<span id="use-the-same-hardware-wallet-in-ginger" data-ginger-heading="use-a-mesma-carteira-de-hardware-no-ginger" aria-hidden="true"></span>

## Use a mesma carteira de hardware no Ginger

Adicione o dispositivo por **Hardware Wallet**, siga as solicitações de PIN e frase-senha compatíveis e confira um endereço de recebimento na própria tela dele. Confirme que o Ginger mostra a conta pretendida. A importação normal de dispositivos nesta versão usa SegWit nativo; outro software pode ter mostrado outra conta ou tipo de endereço.

Conectar o hardware permite ao Ginger guardar informações públicas da carteira enquanto as chaves de assinatura permanecem no dispositivo. Isso não desfaz as informações já compartilhadas pelo aplicativo auxiliar do fabricante. Abrir a mesma conta em outro aplicativo somente de observação pode divulgar mais histórico, mesmo que nenhum dos aplicativos consiga gastar sem o hardware.

Não importe as palavras de recuperação do hardware para o computador como solução alternativa para uma conexão ou conta incompatível. Consulte o fluxo compatível do dispositivo se a conta não puder ser representada corretamente.

<span id="create-a-new-separation-for-future-activity" data-ginger-heading="crie-uma-nova-separação-para-a-atividade-futura" aria-hidden="true"></span>

## Crie uma nova separação para a atividade futura

Se seu objetivo exige chaves diferentes, crie e verifique uma nova carteira e um backup. Obtenha um destino novo e use um teste pequeno quando a situação não for urgente. Confirme que a nova carteira consegue receber e que você tem um caminho funcional de assinatura ou recuperação antes de mover o restante pretendido.

Confira as entradas de cada transferência. Enviar todas as moedas antigas juntas pode associar atividades antes separadas. Uma transferência comum também vincula os históricos de transações de suas entradas e saídas. Chaves novas, sozinhas, não ocultam esse vínculo; um fluxo de CoinJoin bem considerado pode atender a alguns objetivos de privacidade dos vínculos entre transações, sujeito a taxas, elegibilidade e gastos posteriores.

Escolha quando e como parar de usar os endereços antigos de recebimento. Atualize as instruções de pagamento que você controla, guarde registros suficientes para reconhecer pagamentos tardios e não presuma que um endereço compartilhado anteriormente para de funcionar porque você o removeu de um site. Guarde o material de recuperação das carteiras que ainda podem receber dinheiro.

<span id="when-the-move-is-urgent" data-ginger-heading="quando-a-mudança-é-urgente" aria-hidden="true"></span>

## Quando a mudança é urgente

Um xpub exposto gera principalmente um problema de privacidade. Segredos de assinatura expostos geram um problema imediato de controle dos fundos. Se for possível que um atacante já consiga gastar os fundos, dê prioridade a um destino confiável com chaves novas em vez de esperar por um processo elaborado de privacidade. Mudar a senha de um aplicativo ou colocar uma seed exposta em um dispositivo de hardware novo não revoga as chaves copiadas.

Depois da mudança, confira os [exemplos de gastos](/pt-br/learn-privacy/spending-after-coinjoin/) e o [compartilhamento de informações](/pt-br/learn-privacy/information-sharing/). O objetivo sustentável é entender o que continua conhecido e evitar novas divulgações desnecessárias.
