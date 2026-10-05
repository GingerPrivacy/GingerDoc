---
doc_id: "hardware-wallets.exchange-to-cold-storage"
title: "Da corretora ao armazenamento a frio com o Ginger"
description: "Levante bitcoin, use o CoinJoin do Ginger e mova os fundos para uma carteira de hardware verificada, contabilizando as taxas e preservando a privacidade."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, prepare uma carteira de hardware verificada e a sua cópia de segurança independente.

O Ginger pode ajudar a separar sua atividade futura com bitcoin de um levantamento de corretora antes de armazenar os fundos numa carteira de hardware. A corretora mantém seu registo de levantamento. A carteira de hardware protege as chaves de assinatura; as transações e seus gastos posteriores ainda determinam o que outras pessoas podem inferir.

Há dois caminhos diferentes. Escolha um antes de começar para saber onde as saídas devem aparecer.

| Caminho | O que acontece | Principal consideração |
| --- | --- | --- |
| Fazer CoinJoin na carteira de software e depois uma transferência normal | As saídas ficam na carteira de software do Ginger até selecionar fundos e enviá-los para o hardware | Pode rever sua privacidade primeiro; cada transferência posterior custa uma taxa e expõe a relação entre suas entradas e saídas |
| Receber as saídas do CoinJoin diretamente na carteira de hardware | Uma carteira de software elegível assina o CoinJoin; suas saídas vão para a carteira de hardware carregada | Evita uma transferência separada para essas saídas, mas elas deixam a origem após aquela ronda, sem garantia de atingir sua meta |

<span id="prepare-both-wallets" data-ginger-heading="prepare-as-duas-carteiras" aria-hidden="true"></span>

## Prepare as duas carteiras

1. Use uma instalação verificada do Ginger. Crie a carteira de software e faça a sua cópia de segurança com as palavras de recuperação e a frase de segurança original. Mantenha nessa carteira apenas o valor que pretende processar.
2. Inicialize a carteira de hardware e faça a sua cópia de segurança pelo processo compatível do fabricante. [Ligue-a ao Ginger](/pt-pt/using-ginger/hardware-wallet/) e deixe a carteira sincronizar.
3. Na carteira de hardware, escolha **Receive** e use **Show on the hardware wallet** quando estiver disponível. Compare o endereço completo de receção no dispositivo e no computador. Faça um pequeno teste de receção e assinatura antes de depender de uma nova configuração para um valor maior.
4. Dê nomes distintos às carteiras para reconhecer a origem e o destino. Mantenha uma cópia de segurança recuperável para cada uma; uma cópia de segurança da carteira de software não recupera uma carteira de hardware com chaves diferentes.

Nunca introduza as palavras de recuperação da carteira de hardware no Ginger para fazer o CoinJoin funcionar. Isso daria ao computador acesso às chaves de assinatura da carteira de hardware.

<span id="withdraw-from-the-exchange" data-ginger-heading="levante-da-corretora" aria-hidden="true"></span>

## Levante da corretora

Na carteira de software, escolha **Receive**, adicione uma etiqueta útil e crie um endereço novo. Copie esse endereço para o fluxo de levantamento de Bitcoin da corretora e verifique o endereço completo e a rede antes de autorizar o levantamento lá. O Ginger usa Bitcoin on-chain; uma fatura Lightning ou a rede de outro ativo não são alternativas intercambiáveis.

Registe a taxa de levantamento da corretora separadamente. O valor que chega ao Ginger pode ser menor do que o debitado pela corretora. Aguarde a sincronização da carteira e a confirmação dos fundos recebidos antes de esperar que participem do CoinJoin. Um ID de transação é útil para conferir os valores, mas evite publicá-lo ou pesquisá-lo repetidamente em exploradores públicos.

<span id="route-a-review-coinjoin-results-then-transfer" data-ginger-heading="caminho-a-reveja-os-resultados-do-coinjoin-e-depois-transfira" aria-hidden="true"></span>

## Caminho A: reveja os resultados do CoinJoin e depois transfira

1. Em **Coinjoin Settings** da carteira de origem, deixe **Coinjoin to this wallet** definido para a própria origem. Reveja a meta, as preferências de taxas e as moedas excluídas antes de iniciar a participação com o controlo de início do painel.
2. Acompanhe as rondas concluídas e as informações de privacidade das moedas. Pode pausar para rever taxas e progresso. Se uma ronda estiver numa fase crítica, deixe o Ginger terminar o trabalho necessário em vez de encerrar o programa.
3. Obtenha um endereço novo de receção do hardware e verifique-o no dispositivo. Na carteira de software, escolha **Send** → **Manual Control** e selecione os fundos que pretende mover.
4. Reveja as entradas realmente selecionadas, o destino, o valor para o destinatário, o troco e a taxa. Confirme a transferência apenas quando corresponderem à sua intenção.
5. Verifique o histórico sincronizado da carteira de hardware e as moedas restantes na carteira de origem. Aguarde a confirmação da transferência antes de considerá-la concluída.

Enviar todas as saídas juntas cria uma associação visível entre elas. Mover moedas individualmente evita essa associação específica entre várias entradas, mas custa taxas adicionais e ainda revela uma transação para cada transferência. Valores, horários e informações em poder de um observador podem fornecer outras ligações. Escolha um plano de transferência que consiga administrar; não suponha que qualquer uma das abordagens garanta anonimato.

<span id="route-b-choose-hardware-as-the-coinjoin-destination" data-ginger-heading="caminho-b-escolha-o-hardware-como-destino-do-coinjoin" aria-hidden="true"></span>

## Caminho B: escolha o hardware como destino do CoinJoin

Use esse caminho enquanto a carteira de software ainda tiver fundos elegíveis para o CoinJoin. O fluxo normal da v2.0.26 rejeita a participação quando a carteira ou todas as moedas candidatas disponíveis já atingiram sua meta de privacidade. Selecionar outro destino não contorna essa verificação. Em particular, excluir todas as moedas não privadas não é uma forma de confiança de forçar uma ronda extra contendo apenas moedas que já passaram por CoinJoin. Use o caminho A para esses fundos em vez de alterar a meta apenas para evitar a condição de paragem.

1. Carregue e verifique a carteira de hardware no Ginger. Pare a participação no CoinJoin na origem e aguarde até que o seletor de destino fique disponível.
2. Abra **Coinjoin Settings** da carteira de origem. Defina **Coinjoin to this wallet** para a carteira de hardware pretendida. Selecione apenas um destino oferecido pelo Ginger.
3. Reveja **Exclude Coins** para fundos que devem permanecer fora do CoinJoin. A exclusão aplica-se a moedas específicas e não reserva toda a receção futura da mesma origem.
4. Verifique novamente o destino selecionado e inicie a participação. Mantenha o programa em execução enquanto conclui a ronda.
5. Após uma ronda bem-sucedida, examine as duas carteiras. Apenas as entradas selecionadas foram gastas, e as saídas resultantes podem ser divididas em várias moedas. Um saldo restante na origem não significa necessariamente uma falha.

O destino recebe as saídas da ronda concluída; essa configuração não espera um evento separado de alcance da meta antes de encaminhá-las. Reveja as informações de privacidade resultantes. Fundos mantidos no hardware não podem fornecer entradas de CoinJoin posteriormente pelo fluxo normal de carteira de hardware desta versão.

A seleção de destino é redefinida depois que o Ginger reinicia. Verifique-a novamente antes de cada sessão. Não pode alterá-la enquanto a participação está ativa, e alterá-la depois que uma transação foi assinada não pode redirecionar aquela transação. Verifique explicitamente qualquer configuração de participação automática em vez de presumir um arranjo permanente de transferência em segundo plano.

<span id="reconcile-balances-and-plan-the-next-spend" data-ginger-heading="confira-os-saldos-e-planeie-o-próximo-gasto" aria-hidden="true"></span>

## Confira os saldos e planeie o próximo gasto

Compare a redução na origem com as saídas recebidas no hardware e os fundos restantes na origem. A diferença pode incluir os custos do CoinJoin. Um saldo de origem igual a zero não significa que os fundos foram perdidos se o destino pretendido os recebeu. Por outro lado, uma ronda bem-sucedida não significa que toda moeda da origem foi movida ou atingiu a meta.

Quando gastar pelo hardware mais tarde, reveja novamente a seleção de moedas. Combinar moedas sem relação pode revelar associações, independentemente de onde suas chaves de assinatura estão armazenadas. Use um endereço novo do destinatário, examine o troco e confirme o pagamento no dispositivo. O [fluxo de PSBT](/pt-pt/hardware-wallets/psbt/) oferece um caminho compatível de assinatura por ficheiros para hardware adequado; ele não altera as consequências de privacidade da transação que assina.

Se suspeitar que as chaves de assinatura já foram comprometidas, proteger os fundos restantes tem prioridade sobre esperar por um fluxo de privacidade. Um dispositivo novo contendo a mesma semente exposta não revoga essa semente.
