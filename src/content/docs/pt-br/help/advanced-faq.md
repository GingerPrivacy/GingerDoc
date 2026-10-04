---
doc_id: "help.advanced-faq"
title: "Perguntas frequentes avançadas sobre o Ginger Wallet"
description: "Respostas da versão lançada do Ginger sobre varredura de recuperação, metadados da carteira, xpubs, controle de moedas, progresso de privacidade, custos completos de CoinJoin, carteiras de destino e compartilhamento de dados."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Comece pelas perguntas básicas se estiver configurando ou usando uma carteira pela primeira vez.

Estas perguntas abrangem configurações personalizadas, escolhas mais aprofundadas de privacidade e casos especiais de recuperação. Para as perguntas comuns do primeiro uso, volte às [perguntas frequentes básicas](/pt-br/help/).

- [Recuperação e dados locais](#recovery-and-local-data)
- [Seleção de moedas e gastos](#coin-selection-and-spending)
- [Custos e progresso do CoinJoin](#coinjoin-costs-and-progress)
- [Hardware e limites da privacidade](#hardware-and-privacy-boundaries)

<span id="recovery-and-local-data" data-ginger-heading="recuperação-e-dados-locais" aria-hidden="true"></span>

## Recuperação e dados locais

<span id="why-can-the-same-words-produce-a-different-wallet" data-ginger-heading="por-que-as-mesmas-palavras-podem-produzir-uma-carteira-diferente" aria-hidden="true"></span>

### Por que as mesmas palavras podem produzir uma carteira diferente?

A frase-senha original participa da derivação das chaves, e outro aplicativo de carteira pode usar uma conta ou um tipo de endereço diferente. Um conjunto válido de palavras, por si só, não comprova que os aplicativos estejam mostrando a mesma conta. Primeiro confira a frase-senha original e o progresso da varredura; investigue a compatibilidade de contas somente depois das verificações comuns de recuperação.

<span id="when-should-i-increase-the-recovery-gap-limit" data-ginger-heading="quando-devo-aumentar-o-limite-de-lacuna-de-recuperação" aria-hidden="true"></span>

### Quando devo aumentar o limite de lacuna de recuperação?

Considere isso quando houver evidências de muitos endereços não utilizados antes de um endereço que recebeu pagamento, como endereços gerados em outro aplicativo. **Advanced Recovery Options** → **Minimum Gap Limit:** amplia a varredura e pode aumentar o trabalho e sua duração; na v2.0.26, o valor inicial na tela de recuperação é 114. Isso não corrige palavras erradas, uma frase-senha incorreta ou uma conta incompatível.

<span id="why-did-labels-or-privacy-information-change-after-recovery" data-ginger-heading="por-que-os-rótulos-ou-as-informações-de-privacidade-mudaram-após-a-recuperação" aria-hidden="true"></span>

### Por que os rótulos ou as informações de privacidade mudaram após a recuperação?

As palavras restauram as chaves, não todas as notas privadas nem todos os itens de análise local das transações. O JSON da carteira e os dados ATTR correspondentes têm funções diferentes; preserve os arquivos originais e use cópias durante a investigação. A ausência de rótulos ou uma pontuação local diferente não comprova, por si só, que uma transação Bitcoin ou seu histórico público tenha mudado.

<span id="can-i-use-the-same-recovery-words-in-two-wallet-applications" data-ginger-heading="posso-usar-as-mesmas-palavras-de-recuperação-em-dois-aplicativos-de-carteira" aria-hidden="true"></span>

### Posso usar as mesmas palavras de recuperação em dois aplicativos de carteira?

Aplicativos compatíveis podem controlar as mesmas chaves, mas isso não cria uma carteira nova nem revoga as informações compartilhadas com o aplicativo anterior. O segundo aplicativo pode revelar endereços ou uma chave pública estendida a seus serviços, e gastos simultâneos podem causar confusão sobre quais moedas continuam disponíveis. Não digite as palavras de recuperação do hardware no computador apenas para conectar um dispositivo.

<span id="what-does-an-exposed-address-or-xpub-allow-someone-to-do" data-ginger-heading="o-que-um-endereço-ou-xpub-exposto-permite-que-alguém-faça" aria-hidden="true"></span>

### O que um endereço ou xpub exposto permite que alguém faça?

Um endereço aponta para uma parte específica do histórico público de transações. Uma chave pública estendida pode revelar muitos endereços, inclusive futuros dentro de seu escopo de derivação, mas normalmente não dá, sozinha, autoridade para gastar. Endereços novos sob o mesmo ramo exposto não revogam esse monitoramento; a exposição dos segredos de assinatura exige uma resposta diferente, com chaves novas.

<span id="does-the-2fa-file-recover-the-wallet-without-the-service" data-ginger-heading="o-arquivo-2fa-recupera-a-carteira-sem-o-serviço" aria-hidden="true"></span>

### O arquivo 2FA recupera a carteira sem o serviço?

Não trate `2fa_info.gws` como uma chave independente de recuperação offline. A inicialização normal com 2FA usa um identificador de instalação e a verificação do autenticador junto a um serviço para obter o segredo adicional de criptografia dos arquivos. Preserve as palavras e a frase-senha original de forma independente; ativar a 2FA não revoga uma chave copiada.

<span id="how-do-i-delete-a-local-wallet-without-confusing-deletion-with-revocation" data-ginger-heading="como-excluo-uma-carteira-local-sem-confundir-exclusão-com-revogação" aria-hidden="true"></span>

### Como excluo uma carteira local sem confundir exclusão com revogação?

Faça backup primeiro, depois use **Wallet Settings** → **Tools** → **Delete Wallet** e leia a confirmação. Remover dados locais não apaga transações Bitcoin nem invalida cópias das palavras de recuperação. Se as chaves de assinatura foram expostas, apenas excluir a carteira não impede que outra pessoa gaste com elas.

<span id="coin-selection-and-spending" data-ginger-heading="seleção-de-moedas-e-gastos" aria-hidden="true"></span>

## Seleção de moedas e gastos

<span id="what-is-the-difference-between-a-coin-an-address-and-a-wallet" data-ginger-heading="qual-é-a-diferença-entre-uma-moeda-um-endereço-e-uma-carteira" aria-hidden="true"></span>

### Qual é a diferença entre uma moeda, um endereço e uma carteira?

Uma moeda, ou UTXO, é uma saída não gasta de uma transação Bitcoin anterior. Um endereço pode ter recebido várias moedas, e uma carteira pode administrar muitos endereços e moedas. As decisões de gasto e CoinJoin dizem respeito às moedas disponíveis, não apenas ao saldo total da carteira; o [glossário](/pt-br/help/glossary/) explica os termos.

<span id="does-combining-coinjoined-coins-always-destroy-all-privacy" data-ginger-heading="combinar-moedas-que-passaram-por-coinjoin-sempre-destrói-toda-a-privacidade" aria-hidden="true"></span>

### Combinar moedas que passaram por CoinJoin sempre destrói toda a privacidade?

Nenhuma regra única descreve todos os observadores ou pagamentos. Um gasto conjunto comum pode associar suas entradas, especialmente se uma delas já estiver ligada a uma identidade, mas não revela automaticamente todas as ligações anteriores de propriedade. Confira as entradas e o troco do pagamento que você realmente precisa fazer, em vez de tratar sempre combinar ou nunca combinar como uma garantia.

<span id="does-a-reused-address-automatically-publish-my-entire-wallet" data-ginger-heading="um-endereço-reutilizado-publica-automaticamente-minha-carteira-inteira" aria-hidden="true"></span>

### Um endereço reutilizado publica automaticamente minha carteira inteira?

Não, mas os recebimentos nesse endereço podem ser examinados em conjunto e ligados a quem o publicou ou forneceu. Gastos conjuntos posteriores e informações mantidas em outros lugares podem revelar mais. Os rótulos ajudam suas decisões locais; eles não impõem uma separação pública nem comprovam que a seleção automática de moedas preservará o limite que você pretende manter.

<span id="does-manual-control-force-exactly-those-inputs-into-the-final-payment" data-ginger-heading="manual-control-obriga-o-pagamento-final-a-usar-exatamente-aquelas-entradas" aria-hidden="true"></span>

### Manual Control obriga o pagamento final a usar exatamente aquelas entradas?

**Manual Control** seleciona moedas candidatas para um pagamento comum. Confira as entradas realmente usadas na prévia final, o valor do destinatário, o troco e a taxa antes de autorizar. Isso é separado da seleção de entradas CoinJoin e não define uma lista exata para uma rodada futura.

<span id="should-i-consolidate-many-small-coins-while-fees-are-low" data-ginger-heading="devo-consolidar-muitas-moedas-pequenas-quando-as-taxas-estão-baixas" aria-hidden="true"></span>

### Devo consolidar muitas moedas pequenas quando as taxas estão baixas?

A consolidação pode reduzir o número de entradas necessárias depois, mas a transação que as combina custa uma taxa e pode associar atividades antes separadas. Uma taxa mais baixa muda esse custo, não a divulgação. Considere a finalidade, o valor e o histórico conhecido das moedas antes de combiná-las.

<span id="why-is-a-tiny-payment-missing-and-does-exclude-coins-freeze-it" data-ginger-heading="por-que-um-pagamento-minúsculo-não-aparece-e-exclude-coins-o-congela" aria-hidden="true"></span>

### Por que um pagamento minúsculo não aparece e Exclude Coins o congela?

Confira a sincronização e o limite de dust configurado antes de concluir que uma saída minúscula foi perdida. **Exclude Coins** afeta a participação em CoinJoin, não os gastos comuns, e não congela uma moeda. Recebimentos minúsculos inesperados não exigem resposta imediata; avalie seu custo de gasto e possíveis associações antes de incluí-los em um pagamento.

<span id="can-i-set-any-custom-fee-rate-or-guarantee-a-confirmation-time" data-ginger-heading="posso-definir-qualquer-taxa-personalizada-ou-garantir-um-tempo-de-confirmação" aria-hidden="true"></span>

### Posso definir qualquer taxa personalizada ou garantir um tempo de confirmação?

Não. O editor manual de taxas desta versão rejeita valores abaixo de 1 sat/vByte, e a política da rede pode exigir mais que esse mínimo. Uma taxa personalizada ainda compete com outras transações e não pode reservar um prazo de confirmação. Confira a taxa total, não apenas a taxa por byte, antes de confirmar.

<span id="coinjoin-costs-and-progress" data-ginger-heading="custos-e-progresso-do-coinjoin" aria-hidden="true"></span>

## Custos e progresso do CoinJoin

<span id="why-can-the-private-balance-percentage-differ-from-overall-progress" data-ginger-heading="por-que-a-porcentagem-do-saldo-privado-pode-diferir-do-progresso-geral" aria-hidden="true"></span>

### Por que a porcentagem do saldo privado pode diferir do progresso geral?

São medidas locais diferentes. O progresso geral pondera a pontuação de cada moeda em direção à meta pelo seu valor, enquanto o saldo privado colorido conta o valor que já atinge essa meta. Nenhuma dessas medidas é uma probabilidade calculada de que um observador externo possa identificar você. As duas exibições podem diferir mesmo quando ambos os saldos estão corretos.

<span id="why-can-progress-fall-or-change-when-i-adjust-the-target" data-ginger-heading="por-que-o-progresso-pode-cair-ou-mudar-quando-ajusto-a-meta" aria-hidden="true"></span>

### Por que o progresso pode cair ou mudar quando ajusto a meta?

Receber fundos, gastar moedas em conjunto, restaurar sem a análise local ou mudar a meta pode alterar a exibição da carteira. Reduzir uma meta pode reclassificar moedas sem mudar seu histórico publicado. Investigue as transações e configurações envolvidas, em vez de presumir que uma mudança de pontuação comprova roubo ou garante um novo resultado de privacidade.

<span id="can-i-choose-exactly-which-coins-join-a-round" data-ginger-heading="posso-escolher-exatamente-quais-moedas-participam-de-uma-rodada" aria-hidden="true"></span>

### Posso escolher exatamente quais moedas participam de uma rodada?

O cliente seleciona entradas elegíveis usando as configurações CoinJoin da versão lançada. Você pode excluir moedas específicas e ajustar as preferências disponíveis, mas a seleção manual comum do envio não força uma lista de entradas CoinJoin. A exclusão é vinculada àquelas moedas; não é uma regra que reserva todos os recebimentos futuros do mesmo endereço.

<span id="what-do-rejected-coins-or-a-blame-round-mean" data-ginger-heading="o-que-significam-moedas-rejeitadas-ou-uma-blame-round" aria-hidden="true"></span>

### O que significam moedas rejeitadas ou uma blame round?

Uma blame round é uma nova tentativa do protocolo após a tentativa anterior não conseguir terminar; não é uma instrução para identificar ou acusar outro usuário. Uma rejeição ou indisponibilidade temporária exige examinar seu motivo exato e o status atual. Nenhuma dessas mensagens, por si só, transfere o controle dos fundos ao coordenador; veja a [tabela de status desta versão](/pt-br/help/troubleshooting/#coinjoin-does-not-start).

<span id="how-do-i-reconcile-the-full-cost-of-a-round" data-ginger-heading="como-concilio-o-custo-completo-de-uma-rodada" aria-hidden="true"></span>

### Como concilio o custo completo de uma rodada?

Some o valor de suas entradas gastas e subtraia todas as saídas que lhe pertencem naquela transação, inclusive as enviadas a outra carteira. A diferença pode incluir cobranças do coordenador, custos de mineração e uma diferença restante na alocação das saídas. Não conte as saídas de outro participante como suas nem trate um único rótulo de taxa como se necessariamente cobrisse toda a diferença.

<span id="is-a-remix-exemption-permanent-or-applied-to-my-entire-balance" data-ginger-heading="uma-isenção-de-remix-é-permanente-ou-aplicada-ao-meu-saldo-inteiro" aria-hidden="true"></span>

### Uma isenção de remix é permanente ou aplicada ao meu saldo inteiro?

Não. É uma regra de elegibilidade de entrada segundo a política da rodada oferecida, não um direito perpétuo para todas as transações de uma carteira. A política anunciada pelo Ginger inclui remixes elegíveis e um gasto direto por meio de uma transação; as taxas de mineração continuam sendo devidas. Confira os termos atuais novamente, em vez de dividir ou mover moedas apenas para buscar uma isenção presumida.

<span id="hardware-and-privacy-boundaries" data-ginger-heading="hardware-e-limites-da-privacidade" aria-hidden="true"></span>

## Hardware e limites da privacidade

<span id="can-coinjoin-send-directly-to-my-hardware-wallet" data-ginger-heading="o-coinjoin-pode-enviar-diretamente-para-minha-carteira-de-hardware" aria-hidden="true"></span>

### O CoinJoin pode enviar diretamente para minha carteira de hardware?

Uma carteira de software elegível pode selecionar uma carteira de hardware oferecida e carregada em **Coinjoin to this wallet**. O destino recebe as saídas daquela rodada sem esperar um evento separado de alcance da meta; a inicialização normal não força uma rodada com moedas candidatas já privadas. Confira o destino após cada reinicialização, pois a seleção é redefinida, e nunca importe a seed do hardware para o computador para fazer isso funcionar.

<span id="does-an-own-node-replace-every-ginger-service-or-make-tor-unnecessary" data-ginger-heading="um-nó-próprio-substitui-todos-os-serviços-do-ginger-ou-torna-tor-desnecessário" aria-hidden="true"></span>

### Um nó próprio substitui todos os serviços do Ginger ou torna Tor desnecessário?

Não. Um nó configurado pode cumprir funções específicas, como fornecer blocos ou estimativas de taxas, enquanto CoinJoin e os fluxos opcionais de provedores ou 2FA ainda podem contatar seus serviços. Tor trata da exposição da conexão, enquanto o serviço destinatário ainda vê o conteúdo da solicitação enviada a ele. Examine o fluxo de dados específico, em vez de presumir que configurar um nó significa não fazer solicitações externas.

<span id="does-payjoin-hide-my-payment-from-its-recipient" data-ginger-heading="payjoin-oculta-meu-pagamento-do-destinatário" aria-hidden="true"></span>

### PayJoin oculta meu pagamento do destinatário?

Não. O destinatário já conhece seu pedido de pagamento e pode ver o pagamento proposto durante a negociação. Uma colaboração bem-sucedida pode enfraquecer as suposições de propriedade de um observador externo, mas padrões de transação e outras informações podem limitar esse benefício. O Ginger pode voltar a um pagamento comum se a construção falhar, portanto a autorização, por si só, não garante que a transação final tenha usado PayJoin.

<span id="how-do-i-prove-control-of-an-address-without-paying" data-ginger-heading="como-provo-o-controle-de-um-endereço-sem-pagar" aria-hidden="true"></span>

### Como provo o controle de um endereço sem pagar?

Use **Sign Message** para um endereço da carteira, leia a declaração exata e compartilhe a assinatura resultante apenas com o verificador pretendido. A compatibilidade do dispositivo, do tipo de endereço e do verificador ainda importa. Assinar não transfere bitcoin nem comprova a propriedade de todos os endereços da carteira; isso pode ligar o endereço assinado à identidade conhecida pelo verificador.

<span id="what-information-do-secret-hunt-and-buysell-services-receive" data-ginger-heading="quais-informações-secret-hunt-e-os-serviços-de-compra-e-venda-recebem" aria-hidden="true"></span>

### Quais informações Secret Hunt e os serviços de compra e venda recebem?

As verificações pertinentes de Secret Hunt podem enviar identificadores de rodada e transação, um outpoint de entrada e uma prova de controle. A validação de endereços e os pedidos de compra e venda enviam os detalhes exigidos de endereço e pedido; os sites dos provedores têm suas próprias divulgações de identidade e navegador. São fluxos opcionais separados, portanto a privacidade da sincronização comum não deve ser generalizada para todos eles.
