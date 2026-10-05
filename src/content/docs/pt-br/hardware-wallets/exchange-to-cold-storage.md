---
doc_id: "hardware-wallets.exchange-to-cold-storage"
title: "Da corretora ao armazenamento frio com o Ginger"
description: "Saque bitcoin, use o CoinJoin do Ginger e mova os fundos para uma carteira de hardware verificada, contabilizando as taxas e preservando a privacidade."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, prepare uma carteira de hardware verificada e seu backup independente.

O Ginger pode ajudar a separar sua atividade futura com bitcoin de um saque de corretora antes de armazenar os fundos em uma carteira de hardware. A corretora mantém seu registro de saque. A carteira de hardware protege as chaves de assinatura; as transações e seus gastos posteriores ainda determinam o que outras pessoas podem inferir.

Há dois caminhos diferentes. Escolha um antes de começar para saber onde as saídas devem aparecer.

| Caminho | O que acontece | Principal consideração |
| --- | --- | --- |
| Fazer CoinJoin na carteira de software e depois uma transferência normal | As saídas ficam na carteira de software do Ginger até você selecionar fundos e enviá-los para o hardware | Você pode revisar sua privacidade primeiro; cada transferência posterior custa uma taxa e expõe a relação entre suas entradas e saídas |
| Receber as saídas do CoinJoin diretamente na carteira de hardware | Uma carteira de software elegível assina o CoinJoin; suas saídas vão para a carteira de hardware carregada | Evita uma transferência separada para essas saídas, mas elas deixam a origem após aquela rodada, sem garantia de atingir sua meta |

<span id="prepare-both-wallets" data-ginger-heading="prepare-as-duas-carteiras" aria-hidden="true"></span>

## Prepare as duas carteiras

1. Use uma instalação verificada do Ginger. Crie a carteira de software e faça seu backup com as palavras de recuperação e a frase-senha original. Mantenha nessa carteira somente o valor que pretende processar.
2. Inicialize a carteira de hardware e faça seu backup pelo processo compatível do fabricante. [Conecte-a ao Ginger](/pt-br/using-ginger/hardware-wallet/) e deixe a carteira sincronizar.
3. Na carteira de hardware, escolha **Receive** e use **Show on the hardware wallet** quando estiver disponível. Compare o endereço completo de recebimento no dispositivo e no computador. Faça um pequeno teste de recebimento e assinatura antes de depender de uma nova configuração para um valor maior.
4. Dê nomes distintos às carteiras para reconhecer a origem e o destino. Mantenha um backup recuperável para cada uma; um backup da carteira de software não recupera uma carteira de hardware com chaves diferentes.

Nunca digite as palavras de recuperação da carteira de hardware no Ginger para fazer o CoinJoin funcionar. Isso daria ao computador acesso às chaves de assinatura da carteira de hardware.

<span id="withdraw-from-the-exchange" data-ginger-heading="saque-da-corretora" aria-hidden="true"></span>

## Saque da corretora

Na carteira de software, escolha **Receive**, adicione um rótulo útil e crie um endereço novo. Copie esse endereço para o fluxo de saque de Bitcoin da corretora e verifique o endereço completo e a rede antes de autorizar o saque lá. O Ginger usa Bitcoin on-chain; uma fatura Lightning ou a rede de outro ativo não são alternativas intercambiáveis.

Registre a taxa de saque da corretora separadamente. O valor que chega ao Ginger pode ser menor do que o debitado pela corretora. Aguarde a sincronização da carteira e a confirmação dos fundos recebidos antes de esperar que participem do CoinJoin. Um ID de transação é útil para conferir os valores, mas evite publicá-lo ou pesquisá-lo repetidamente em exploradores públicos.

<span id="route-a-review-coinjoin-results-then-transfer" data-ginger-heading="caminho-a-revise-os-resultados-do-coinjoin-e-depois-transfira" aria-hidden="true"></span>

## Caminho A: revise os resultados do CoinJoin e depois transfira

1. Em **Coinjoin Settings** da carteira de origem, deixe **Coinjoin to this wallet** definido para a própria origem. Revise a meta, as preferências de taxas e as moedas excluídas antes de iniciar a participação com o controle de início do painel.
2. Acompanhe as rodadas concluídas e as informações de privacidade das moedas. Você pode pausar para revisar taxas e progresso. Se uma rodada estiver em uma fase crítica, deixe o Ginger terminar o trabalho necessário em vez de encerrar o aplicativo.
3. Obtenha um endereço novo de recebimento do hardware e verifique-o no dispositivo. Na carteira de software, escolha **Send** → **Manual Control** e selecione os fundos que pretende mover.
4. Revise as entradas realmente selecionadas, o destino, o valor para o destinatário, o troco e a taxa. Confirme a transferência somente quando corresponderem à sua intenção.
5. Verifique o histórico sincronizado da carteira de hardware e as moedas restantes na carteira de origem. Aguarde a confirmação da transferência antes de considerá-la concluída.

Enviar todas as saídas juntas cria uma associação visível entre elas. Mover moedas individualmente evita essa associação específica entre várias entradas, mas custa taxas adicionais e ainda revela uma transação para cada transferência. Valores, horários e informações em poder de um observador podem fornecer outras ligações. Escolha um plano de transferência que consiga administrar; não suponha que qualquer uma das abordagens garanta anonimato.

<span id="route-b-choose-hardware-as-the-coinjoin-destination" data-ginger-heading="caminho-b-escolha-o-hardware-como-destino-do-coinjoin" aria-hidden="true"></span>

## Caminho B: escolha o hardware como destino do CoinJoin

Use esse caminho enquanto a carteira de software ainda tiver fundos elegíveis para o CoinJoin. O fluxo normal da v2.0.26 rejeita a participação quando a carteira ou todas as moedas candidatas disponíveis já atingiram sua meta de privacidade. Selecionar outro destino não contorna essa verificação. Em particular, excluir todas as moedas não privadas não é uma forma confiável de forçar uma rodada extra contendo apenas moedas que já passaram por CoinJoin. Use o caminho A para esses fundos em vez de alterar a meta somente para evitar a condição de parada.

1. Carregue e verifique a carteira de hardware no Ginger. Pare a participação no CoinJoin na origem e aguarde até que o seletor de destino fique disponível.
2. Abra **Coinjoin Settings** da carteira de origem. Defina **Coinjoin to this wallet** para a carteira de hardware pretendida. Selecione somente um destino oferecido pelo Ginger.
3. Revise **Exclude Coins** para fundos que devem permanecer fora do CoinJoin. A exclusão se aplica a moedas específicas e não reserva todo recebimento futuro da mesma origem.
4. Verifique novamente o destino selecionado e inicie a participação. Mantenha o aplicativo em execução enquanto conclui a rodada.
5. Após uma rodada bem-sucedida, examine as duas carteiras. Somente as entradas selecionadas foram gastas, e as saídas resultantes podem ser divididas em várias moedas. Um saldo restante na origem não significa necessariamente uma falha.

O destino recebe as saídas da rodada concluída; essa configuração não espera um evento separado de alcance da meta antes de encaminhá-las. Revise as informações de privacidade resultantes. Fundos mantidos no hardware não podem fornecer entradas de CoinJoin posteriormente pelo fluxo normal de carteira de hardware desta versão.

A seleção de destino é redefinida depois que o Ginger reinicia. Verifique-a novamente antes de cada sessão. Você não pode alterá-la enquanto a participação está ativa, e alterá-la depois que uma transação foi assinada não pode redirecionar aquela transação. Verifique explicitamente qualquer configuração de participação automática em vez de presumir um arranjo permanente de transferência em segundo plano.

<span id="reconcile-balances-and-plan-the-next-spend" data-ginger-heading="confira-os-saldos-e-planeje-o-próximo-gasto" aria-hidden="true"></span>

## Confira os saldos e planeje o próximo gasto

Compare a redução na origem com as saídas recebidas no hardware e os fundos restantes na origem. A diferença pode incluir os custos do CoinJoin. Um saldo de origem igual a zero não significa que os fundos foram perdidos se o destino pretendido os recebeu. Por outro lado, uma rodada bem-sucedida não significa que toda moeda da origem foi movida ou atingiu a meta.

Quando você gastar pelo hardware mais tarde, revise novamente a seleção de moedas. Combinar moedas sem relação pode revelar associações, independentemente de onde suas chaves de assinatura estão armazenadas. Use um endereço novo do destinatário, examine o troco e confirme o pagamento no dispositivo. O [fluxo de PSBT](/pt-br/hardware-wallets/psbt/) oferece um caminho compatível de assinatura por arquivos para hardware adequado; ele não altera as consequências de privacidade da transação que você assina.

Se você suspeitar que as chaves de assinatura já foram comprometidas, proteger os fundos restantes tem prioridade sobre esperar por um fluxo de privacidade. Um dispositivo novo contendo a mesma semente exposta não revoga essa semente.
