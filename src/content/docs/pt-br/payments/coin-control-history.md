---
doc_id: "payments.coin-control-history"
title: "Controle de moedas, histórico e transações paradas"
description: "Inspecione UTXOs do Ginger, entradas e saídas das transações e histórico de pagamentos; selecione moedas deliberadamente e gerencie pagamentos não confirmados."
lang: "pt-BR"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Primeiro, entenda a prévia normal de envio, o valor do destinatário e a taxa.

O saldo total da carteira pode conter muitas moedas separadas com origens, estados de confirmação e históricos de privacidade diferentes. O controle de moedas ajuda a decidir quais delas gastar. Também facilita relacionar acidentalmente fundos que antes estavam separados, portanto use-o com uma finalidade específica.

<span id="inspect-and-select-coins" data-ginger-heading="inspecione-e-selecione-moedas" aria-hidden="true"></span>

## Inspecione e selecione moedas

Abra o menu da carteira e escolha **Wallet Coins**. Inspecione o valor, os rótulos, as informações de confirmação e os dados de privacidade das moedas que você possui. Uma transação pode criar várias moedas, e um endereço pode receber vários pagamentos separados; nem uma linha nem um endereço representa necessariamente uma carteira inteira.

Escolha **Send** → **Manual Control** para trabalhar com moedas individuais no processo de pagamento. Selecione valor suficiente para o pagamento e a taxa. Confira as entradas e o troco resultantes antes de confirmar. Selecionar moedas as disponibiliza para o construtor da transação; confira a prévia final para ver quais são efetivamente utilizadas.

Mantenha rótulos que expliquem de onde vieram os fundos ou quem já sabe sobre eles. Pagar com moedas já associadas ao mesmo destinatário pode revelar menos informações novas do que combinar fontes sem relação entre si. Um rótulo, por si só, não estabelece anonimato nem impede a análise da blockchain por outra pessoa.

<span id="consolidation-and-small-coins" data-ginger-heading="consolidação-e-moedas-pequenas" aria-hidden="true"></span>

## Consolidação e moedas pequenas

A consolidação gasta várias moedas pequenas em menos saídas, geralmente para uma carteira que você controla. Ela custa uma taxa agora e pode reduzir a quantidade de entradas necessárias para um pagamento posterior. Também associa publicamente as entradas selecionadas. Condições de taxas baixas podem tornar a consolidação mais barata, mas não eliminam essa contrapartida de privacidade.

Não combine moedas sem relação automaticamente apenas para organizar a lista de moedas. Saídas recebidas muito pequenas podem ser antieconômicas de gastar. O limite de poeira do Ginger e as exclusões de CoinJoin tratam de situações diferentes; excluir uma moeda de CoinJoin não impede sua seleção para um pagamento normal.

Enviar fundos para sua carteira de hardware é uma transação on-chain normal se você usar **Send**. Obtenha e verifique um novo endereço de recebimento do hardware e confira a taxa e as moedas selecionadas na carteira de software. A transferência em si continua visível na blockchain.

<span id="read-transaction-history" data-ginger-heading="leia-o-histórico-de-transações" aria-hidden="true"></span>

## Leia o histórico de transações

A tela inicial da carteira mostra recebimentos, envios e atividade de CoinJoin. Expanda as entradas de CoinJoin agrupadas quando precisar inspecionar rodadas individuais. Os controles de ordenação ajudam a comparar data, valor, rótulos e estado. Abra os detalhes da transação para inspecionar seu identificador e as informações disponíveis de confirmação ou taxa.

Use **Copy Transaction ID** quando precisar identificar uma transação específica. Mantenha os identificadores de transação privados quando possível: compartilhar um deles pode revelar endereços, valores e vínculos com outras atividades. Um explorador público também fica sabendo as consultas que você faz. O histórico local do Ginger é o primeiro lugar para conferir seus próprios pagamentos.

Você pode inspecionar, ordenar e agrupar o histórico e copiar identificadores de transação. Esta versão não oferece um controle de busca de transações ou exportação CSV neste processo de histórico.

<span id="inspect-inputs-and-outputs" data-ginger-heading="inspecione-entradas-e-saídas" aria-hidden="true"></span>

## Inspecione entradas e saídas

Escolha **View transaction** em uma prévia de envio ou nos detalhes de uma transação para abrir o visualizador de transações. Para um item agrupado de CoinJoin no histórico, expanda o grupo e abra os detalhes de um CoinJoin individual para encontrar a mesma ação. O visualizador abre em uma janela separada que pode ser redimensionada; arraste os divisores para dar mais espaço ao diagrama, aos detalhes da seleção ou ao resumo.

O lado esquerdo lista as entradas e o direito lista as saídas. Role para inspecionar transações maiores e selecione uma entrada ou saída para ver seu valor, estimativa atual em moeda fiduciária, endereço, outpoint, tipo de script, rótulos e pontuação de anonimato conhecida. A propriedade é indicada como **Own wallet**, **External** ou **Change**, conforme aplicável. Um outpoint identifica uma saída específica pelo ID da transação e pelo índice da saída.

Use os botões de cópia para copiar o ID da transação ou o endereço ou outpoint da moeda selecionada. O resumo mostra os totais de entradas e saídas, a taxa de mineração e a taxa por byte virtual, o tamanho virtual, a data e se a transação é uma prévia, está pendente ou confirmada. Visualizar uma prévia não assina nem transmite a transação.

Algumas informações sobre entradas externas não estão disponíveis para a carteira. Um valor de entrada desconhecido também pode tornar desconhecidos o total das entradas e a taxa. Uma pontuação de anonimato só é mostrada quando o Ginger conhece a pontuação dessa moeda da carteira; as saídas novas de uma prévia de envio ainda não têm pontuação. **Unknown** ou um traço não representa uma pontuação zero. Os valores em moeda fiduciária usam a taxa de câmbio atual, inclusive ao inspecionar uma transação antiga.

**Discreet Mode** oculta os dados da transação e desativa as ações de cópia do visualizador. Desative-o quando puder inspecionar os detalhes com privacidade. Abrir esse visualizador local não exige compartilhar a transação com um explorador público.

<span id="speed-up-an-unconfirmed-transaction" data-ginger-heading="acelere-uma-transação-não-confirmada" aria-hidden="true"></span>

## Acelere uma transação não confirmada

Quando o Ginger oferecer **Speed Up Transaction** para um item do histórico, abra a opção e confira a taxa adicional antes de confirmar. Dependendo da transação e das saídas disponíveis, a aceleração por aumento de taxa pode substituir uma transação por uma versão com taxa maior ou gastar uma saída em uma transação filha que pague o suficiente pelas duas.

Nem toda transação pode ser acelerada pela sua carteira. Ela precisa de uma estrutura de transação compatível e acesso às chaves e aos fundos relevantes. Uma taxa maior melhora o incentivo para os mineradores; não garante confirmação imediata. A substituição pode alterar o identificador da transação, portanto confira o histórico atualizado ao coordenar com um destinatário.

<span id="cancel-an-unconfirmed-transaction" data-ginger-heading="cancele-uma-transação-não-confirmada" aria-hidden="true"></span>

## Cancele uma transação não confirmada

**Cancel Transaction**, quando disponível, tenta substituir o pagamento pendente por uma transação que devolva os fundos relevantes ao seu controle e pague uma taxa. É uma disputa com a confirmação do pagamento original, não um comando de desfazer aceito por todos os nós.

Leia a caixa de diálogo de cancelamento e a taxa, confirme apenas se essa for sua intenção e acompanhe o que realmente é confirmado. Se a transação original for confirmada primeiro, o cancelamento não poderá revertê-la. Depois que um pagamento for confirmado, peça ao destinatário um reembolso separado, se for apropriado; o Ginger não pode recuperar o valor.

Não inicie um segundo pagamento nem prometa um reembolso até entender qual transação foi confirmada. Um explorador e sua carteira podem mostrar temporariamente informações diferentes do mempool porque observam nós diferentes.
