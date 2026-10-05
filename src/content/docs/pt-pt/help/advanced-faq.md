---
doc_id: "help.advanced-faq"
title: "Perguntas frequentes avançadas sobre o Ginger Wallet"
description: "Respostas da versão lançada do Ginger sobre pesquisa de recuperação, metadados da carteira, xpubs, controlo de moedas, progresso de privacidade, custos completos de CoinJoin, carteiras de destino e partilha de dados."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Comece pelas perguntas básicas se estiver a configurar ou a usar uma carteira pela primeira vez.

Estas perguntas abrangem definições personalizadas, escolhas mais aprofundadas de privacidade e casos especiais de recuperação. Para as perguntas comuns da primeira utilização, volte às [perguntas frequentes básicas](/pt-pt/help/).

- [Recuperação e dados locais](#recovery-and-local-data)
- [Seleção de moedas e gastos](#coin-selection-and-spending)
- [Custos e progresso do CoinJoin](#coinjoin-costs-and-progress)
- [Hardware e limites da privacidade](#hardware-and-privacy-boundaries)

<span id="recovery-and-local-data" data-ginger-heading="recuperação-e-dados-locais" aria-hidden="true"></span>

## Recuperação e dados locais

<span id="why-can-the-same-words-produce-a-different-wallet" data-ginger-heading="porque-é-que-as-mesmas-palavras-podem-produzir-uma-carteira-diferente" aria-hidden="true"></span>

### Porque é que as mesmas palavras podem produzir uma carteira diferente?

A frase de segurança original participa da derivação das chaves, e outro programa de carteira pode usar uma conta ou um tipo de endereço diferente. Um conjunto válido de palavras, por si só, não comprova que os programas estejam a mostrar a mesma conta. Primeiro confira a frase de segurança original e o progresso da pesquisa; investigue a compatibilidade de contas apenas depois das verificações comuns de recuperação.

<span id="when-should-i-increase-the-recovery-gap-limit" data-ginger-heading="quando-devo-aumentar-o-limite-de-endereços-não-utilizados-na-recuperação" aria-hidden="true"></span>

### Quando devo aumentar o limite de endereços não utilizados na recuperação?

Considere isso quando houver evidências de muitos endereços não utilizados antes de um endereço que recebeu pagamento, como endereços gerados noutro programa. **Advanced Recovery Options** → **Minimum Gap Limit:** amplia a pesquisa e pode aumentar o trabalho e sua duração; na v2.0.26, o valor inicial no ecrã de recuperação é 114. Isso não corrige palavras erradas, uma frase de segurança incorreta ou uma conta incompatível.

<span id="why-did-labels-or-privacy-information-change-after-recovery" data-ginger-heading="porque-é-que-as-etiquetas-ou-as-informações-de-privacidade-mudaram-após-a-recuperação" aria-hidden="true"></span>

### Porque é que as etiquetas ou as informações de privacidade mudaram após a recuperação?

As palavras restauram as chaves, não todas as notas privadas nem todos os itens de análise local das transações. O JSON da carteira e os dados ATTR correspondentes têm funções diferentes; preserve os ficheiros originais e use cópias durante a investigação. A ausência de etiquetas ou uma pontuação local diferente não comprova, por si só, que uma transação Bitcoin ou seu histórico público tenha mudado.

<span id="can-i-use-the-same-recovery-words-in-two-wallet-applications" data-ginger-heading="posso-usar-as-mesmas-palavras-de-recuperação-em-dois-programas-de-carteira" aria-hidden="true"></span>

### Posso usar as mesmas palavras de recuperação em dois programas de carteira?

Aplicações compatíveis podem controlar as mesmas chaves, mas isso não cria uma carteira nova nem revoga as informações partilhadas com o programa anterior. O segundo programa pode revelar endereços ou uma chave pública estendida a seus serviços, e gastos simultâneos podem causar confusão sobre quais moedas continuam disponíveis. Não introduza as palavras de recuperação do hardware no computador apenas para ligar um dispositivo.

<span id="what-does-an-exposed-address-or-xpub-allow-someone-to-do" data-ginger-heading="o-que-um-endereço-ou-xpub-exposto-permite-que-alguém-faça" aria-hidden="true"></span>

### O que um endereço ou xpub exposto permite que alguém faça?

Um endereço aponta para uma parte específica do histórico público de transações. Uma chave pública estendida pode revelar muitos endereços, inclusive futuros dentro de seu âmbito de derivação, mas normalmente não dá, sozinha, autoridade para gastar. Endereços novos sob o mesmo ramo exposto não revogam essa monitorização; a exposição dos segredos de assinatura exige uma resposta diferente, com chaves novas.

<span id="does-the-2fa-file-recover-the-wallet-without-the-service" data-ginger-heading="o-ficheiro-2fa-recupera-a-carteira-sem-o-serviço" aria-hidden="true"></span>

### O ficheiro 2FA recupera a carteira sem o serviço?

Não trate `2fa_info.gws` como uma chave independente de recuperação offline. O arranque normal com 2FA usa um identificador de instalação e a verificação do autenticador junto a um serviço para obter o segredo adicional de encriptação dos ficheiros. Preserve as palavras e a frase de segurança original de forma independente; ativar a 2FA não revoga uma chave copiada.

<span id="how-do-i-delete-a-local-wallet-without-confusing-deletion-with-revocation" data-ginger-heading="como-elimino-uma-carteira-local-sem-confundir-exclusão-com-revogação" aria-hidden="true"></span>

### Como elimino uma carteira local sem confundir exclusão com revogação?

Faça uma cópia de segurança primeiro, depois use **Wallet Settings** → **Tools** → **Delete Wallet** e leia a confirmação. Remover dados locais não apaga transações Bitcoin nem invalida cópias das palavras de recuperação. Se as chaves de assinatura foram expostas, apenas eliminar a carteira não impede que outra pessoa gaste com elas.

<span id="coin-selection-and-spending" data-ginger-heading="seleção-de-moedas-e-gastos" aria-hidden="true"></span>

## Seleção de moedas e gastos

<span id="what-is-the-difference-between-a-coin-an-address-and-a-wallet" data-ginger-heading="qual-é-a-diferença-entre-uma-moeda-um-endereço-e-uma-carteira" aria-hidden="true"></span>

### Qual é a diferença entre uma moeda, um endereço e uma carteira?

Uma moeda, ou UTXO, é uma saída não gasta de uma transação Bitcoin anterior. Um endereço pode ter recebido várias moedas, e uma carteira pode administrar muitos endereços e moedas. As decisões de gasto e CoinJoin dizem respeito às moedas disponíveis, não apenas ao saldo total da carteira; o [glossário](/pt-pt/help/glossary/) explica os termos.

<span id="does-combining-coinjoined-coins-always-destroy-all-privacy" data-ginger-heading="combinar-moedas-que-passaram-por-coinjoin-sempre-destrói-toda-a-privacidade" aria-hidden="true"></span>

### Combinar moedas que passaram por CoinJoin sempre destrói toda a privacidade?

Nenhuma regra única descreve todos os observadores ou pagamentos. Um gasto conjunto comum pode associar suas entradas, especialmente se uma delas já estiver ligada a uma identidade, mas não revela automaticamente todas as ligações anteriores de propriedade. Confira as entradas e o troco do pagamento que realmente precisa fazer, em vez de tratar «combinar sempre» ou «nunca combinar» como uma garantia.

<span id="does-a-reused-address-automatically-publish-my-entire-wallet" data-ginger-heading="um-endereço-reutilizado-publica-automaticamente-a-minha-carteira-inteira" aria-hidden="true"></span>

### Um endereço reutilizado publica automaticamente a minha carteira inteira?

Não, mas as receções nesse endereço podem ser examinadas em conjunto e ligadas a quem o publicou ou forneceu. Gastos conjuntos posteriores e informações mantidas noutros locais podem revelar mais. As etiquetas ajudam suas decisões locais; elas não impõem uma separação pública nem comprovam que a seleção automática de moedas preservará o limite que pretende manter.

<span id="does-manual-control-force-exactly-those-inputs-into-the-final-payment" data-ginger-heading="manual-control-obriga-o-pagamento-final-a-usar-exatamente-aquelas-entradas" aria-hidden="true"></span>

### Manual Control obriga o pagamento final a usar exatamente aquelas entradas?

**Manual Control** seleciona moedas candidatas para um pagamento comum. Confira as entradas realmente usadas na pré-visualização final, o valor do destinatário, o troco e a taxa antes de autorizar. Isso é separado da seleção de entradas CoinJoin e não define uma lista exata para uma ronda futura.

<span id="should-i-consolidate-many-small-coins-while-fees-are-low" data-ginger-heading="devo-consolidar-muitas-moedas-pequenas-quando-as-taxas-estão-baixas" aria-hidden="true"></span>

### Devo consolidar muitas moedas pequenas quando as taxas estão baixas?

A consolidação pode reduzir o número de entradas necessárias depois, mas a transação que as combina custa uma taxa e pode associar atividades antes separadas. Uma taxa por byte virtual mais baixa muda esse custo, não a divulgação. Considere a finalidade, o valor e o histórico conhecido das moedas antes de combiná-las.

<span id="why-is-a-tiny-payment-missing-and-does-exclude-coins-freeze-it" data-ginger-heading="porque-é-que-um-pagamento-minúsculo-não-aparece-e-exclude-coins-o-congela" aria-hidden="true"></span>

### Porque é que um pagamento minúsculo não aparece e Exclude Coins o congela?

Confira a sincronização e o limite de poeira configurado antes de concluir que uma saída minúscula foi perdida. **Exclude Coins** afeta a participação em CoinJoin, não os gastos comuns, e não congela uma moeda. Recebimentos minúsculos inesperados não exigem resposta imediata; avalie seu custo de gasto e possíveis associações antes de incluí-los num pagamento.

<span id="can-i-set-any-custom-fee-rate-or-guarantee-a-confirmation-time" data-ginger-heading="posso-definir-qualquer-taxa-por-byte-virtual-personalizada-ou-garantir-um-tempo-de-confirmação" aria-hidden="true"></span>

### Posso definir qualquer taxa por byte virtual personalizada ou garantir um tempo de confirmação?

Não. O editor manual de taxas desta versão rejeita valores abaixo de 1 sat/vByte, e a política da rede pode exigir mais que esse mínimo. Uma taxa por byte virtual personalizada ainda compete com outras transações e não pode reservar um prazo de confirmação. Confira a taxa total, não apenas a taxa por byte virtual, antes de confirmar.

<span id="coinjoin-costs-and-progress" data-ginger-heading="custos-e-progresso-do-coinjoin" aria-hidden="true"></span>

## Custos e progresso do CoinJoin

<span id="why-can-the-private-balance-percentage-differ-from-overall-progress" data-ginger-heading="porque-é-que-a-percentagem-do-saldo-privado-pode-diferir-do-progresso-geral" aria-hidden="true"></span>

### Porque é que a percentagem do saldo privado pode diferir do progresso geral?

São medidas locais diferentes. O progresso geral pondera a pontuação de cada moeda em direção à meta pelo seu valor, enquanto o saldo privado colorido conta o valor que já atinge essa meta. Nenhuma dessas medidas é uma probabilidade calculada de que um observador externo possa identificar o utilizador. As duas exibições podem diferir mesmo quando ambos os saldos estão corretos.

<span id="why-can-progress-fall-or-change-when-i-adjust-the-target" data-ginger-heading="porque-é-que-o-progresso-pode-cair-ou-mudar-quando-ajusto-a-meta" aria-hidden="true"></span>

### Porque é que o progresso pode cair ou mudar quando ajusto a meta?

Receber fundos, gastar moedas em conjunto, restaurar sem a análise local ou mudar a meta pode alterar a exibição da carteira. Reduzir uma meta pode reclassificar moedas sem mudar seu histórico publicado. Investigue as transações e definições envolvidas, em vez de presumir que uma mudança de pontuação comprova roubo ou garante um novo resultado de privacidade.

<span id="can-i-choose-exactly-which-coins-join-a-round" data-ginger-heading="posso-escolher-exatamente-quais-moedas-participam-de-uma-ronda" aria-hidden="true"></span>

### Posso escolher exatamente quais moedas participam de uma ronda?

O cliente seleciona entradas elegíveis usando as definições CoinJoin da versão lançada. Pode excluir moedas específicas e ajustar as preferências disponíveis, mas a seleção manual comum do envio não força uma lista de entradas CoinJoin. A exclusão é vinculada àquelas moedas; não é uma regra que reserva todas as receções futuras do mesmo endereço.

<span id="what-do-rejected-coins-or-a-blame-round-mean" data-ginger-heading="o-que-significam-moedas-rejeitadas-ou-uma-blame-round" aria-hidden="true"></span>

### O que significam moedas rejeitadas ou uma blame round?

Uma blame round é uma nova tentativa do protocolo após a tentativa anterior não conseguir terminar; não é uma instrução para identificar ou acusar outro utilizador. Uma rejeição ou indisponibilidade temporária exige examinar seu motivo exato e o estado atual. Nenhuma dessas mensagens, por si só, transfere o controlo dos fundos ao coordenador; veja a [tabela de estado desta versão](/pt-pt/help/troubleshooting/#coinjoin-does-not-start).

<span id="how-do-i-reconcile-the-full-cost-of-a-round" data-ginger-heading="como-concilio-o-custo-completo-de-uma-ronda" aria-hidden="true"></span>

### Como concilio o custo completo de uma ronda?

Some o valor de suas entradas gastas e subtraia todas as saídas que lhe pertencem naquela transação, inclusive as enviadas a outra carteira. A diferença pode incluir cobranças do coordenador, taxas de mineração e uma diferença restante na alocação das saídas. Não conte as saídas de outro participante como suas nem trate uma única etiqueta de taxa como se necessariamente cobrisse toda a diferença.

<span id="is-a-remix-exemption-permanent-or-applied-to-my-entire-balance" data-ginger-heading="uma-isenção-de-remix-é-permanente-ou-aplicada-ao-meu-saldo-inteiro" aria-hidden="true"></span>

### Uma isenção de remix é permanente ou aplicada ao meu saldo inteiro?

Não. É uma regra de elegibilidade de entrada segundo a política da ronda oferecida, não um direito perpétuo para todas as transações de uma carteira. A política anunciada pelo Ginger inclui remixes elegíveis e um gasto direto através de uma transação; as taxas de mineração continuam a ser devidas. Confira os termos atuais novamente, em vez de dividir ou mover moedas apenas para pesquisar uma isenção presumida.

<span id="hardware-and-privacy-boundaries" data-ginger-heading="hardware-e-limites-da-privacidade" aria-hidden="true"></span>

## Hardware e limites da privacidade

<span id="can-coinjoin-send-directly-to-my-hardware-wallet" data-ginger-heading="o-coinjoin-pode-enviar-diretamente-para-a-minha-carteira-de-hardware" aria-hidden="true"></span>

### O CoinJoin pode enviar diretamente para a minha carteira de hardware?

Uma carteira de software elegível pode selecionar uma carteira de hardware oferecida e carregada em **Coinjoin to this wallet**. O destino recebe as saídas daquela ronda sem esperar um evento separado de alcance da meta; o início normal do CoinJoin não força uma ronda com moedas candidatas já privadas. Verifique o destino após cada reinicialização, pois a seleção é redefinida, e nunca importe a semente do hardware para o computador para fazer isso funcionar.

<span id="does-an-own-node-replace-every-ginger-service-or-make-tor-unnecessary" data-ginger-heading="um-nó-próprio-substitui-todos-os-serviços-do-ginger-ou-torna-tor-desnecessário" aria-hidden="true"></span>

### Um nó próprio substitui todos os serviços do Ginger ou torna Tor desnecessário?

Não. Um nó configurado pode cumprir funções específicas, como fornecer blocos ou estimativas de taxas, enquanto CoinJoin e os fluxos opcionais de prestadores ou 2FA ainda podem contactar seus serviços. Tor trata da exposição da ligação, enquanto o serviço destinatário ainda vê o conteúdo da solicitação enviada a ele. Examine o fluxo de dados específico, em vez de presumir que configurar um nó significa não fazer solicitações externas.

<span id="does-payjoin-hide-my-payment-from-its-recipient" data-ginger-heading="payjoin-oculta-o-meu-pagamento-do-destinatário" aria-hidden="true"></span>

### PayJoin oculta o meu pagamento do destinatário?

Não. O destinatário já conhece seu pedido de pagamento e pode ver o pagamento proposto durante a negociação. Uma colaboração bem-sucedida pode enfraquecer as suposições de propriedade de um observador externo, mas padrões de transação e outras informações podem limitar esse benefício. O Ginger pode voltar a um pagamento comum se a construção falhar, portanto a autorização, por si só, não garante que a transação final tenha usado PayJoin.

<span id="how-do-i-prove-control-of-an-address-without-paying" data-ginger-heading="como-provo-o-controlo-de-um-endereço-sem-pagar" aria-hidden="true"></span>

### Como provo o controlo de um endereço sem pagar?

Use **Sign Message** para um endereço da carteira, leia a declaração exata e partilhe a assinatura resultante apenas com o verificador pretendido. A compatibilidade do dispositivo, do tipo de endereço e do verificador ainda importa. Assinar não transfere bitcoin nem comprova a propriedade de todos os endereços da carteira; isso pode ligar o endereço assinado à identidade conhecida pelo verificador.

<span id="what-information-do-secret-hunt-and-buysell-services-receive" data-ginger-heading="quais-informações-secret-hunt-e-os-serviços-de-compra-e-venda-recebem" aria-hidden="true"></span>

### Quais informações Secret Hunt e os serviços de compra e venda recebem?

As verificações pertinentes de Secret Hunt podem enviar identificadores de ronda e transação, um outpoint de entrada e uma prova de controlo. A validação de endereços e os pedidos de compra e venda enviam os detalhes exigidos de endereço e pedido; os sites dos prestadores têm suas próprias divulgações de identidade e navegador. São fluxos opcionais separados, portanto a privacidade da sincronização comum não deve ser generalizada para todos eles.
