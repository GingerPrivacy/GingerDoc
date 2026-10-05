---
doc_id: "learn-privacy.who-can-see"
title: "Quem pode ver as minhas transações Bitcoin?"
description: "Saiba o que um endereço Bitcoin revela, como a identidade e as ligações entre transações se combinam e onde as ferramentas de privacidade do Ginger podem ajudar."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são uma continuação opcional.

As transações Bitcoin são públicas, mas o nome do proprietário de uma carteira não é escrito automaticamente ao lado de cada endereço. A pergunta prática é quem pode ligar um endereço ou uma transação a si e o que mais essa pessoa pode inferir a partir dessa ligação.

Um cliente pode conhecer o endereço da fatura que lhe forneceu. Uma corretora pode conhecer seu endereço de levantamento e sua identidade verificada. Alguém a acompanhar um endereço público de doações pode observar as suas receções. Esses observadores partem de informações diferentes, por isso é mais útil pensar na privacidade como uma divulgação controlada do que como um único interruptor entre anónimo e não anónimo.

<span id="what-the-blockchain-reveals" data-ginger-heading="o-que-a-cadeia-de-blocos-revela" aria-hidden="true"></span>

## O que a cadeia de blocos revela

As transações mostram entradas, saídas, valores e suas relações por meio dos gastos. Uma saída gasta posteriormente por outra transação cria uma ligação pública. Isso não prova automaticamente quem possui cada saída: uma transação pode ser um pagamento, uma transferência entre suas próprias carteiras ou uma transação colaborativa com vários proprietários. A [secção sobre privacidade do artigo original do Bitcoin](https://bitcoin.org/bitcoin.pdf) discute a separação entre transações públicas e identidades, além do problema de ligar chaves entre si.

Depois que alguém associa um endereço a uma pessoa, pode investigar a atividade conectada a ele. Algumas associações são diretas, como pagamentos repetidos a um mesmo endereço. Outras dependem de suposições sobre a propriedade comum das entradas ou sobre qual saída é o troco. Essas suposições podem estar erradas, mas ainda assim influenciar a forma como os serviços classificam as transações.

<span id="who-can-learn-what" data-ginger-heading="quem-pode-descobrir-o-quê" aria-hidden="true"></span>

## Quem pode descobrir o quê?

| Observador | Informações que pode ter inicialmente | O que pode controlar |
| --- | --- | --- |
| Um pagador | O endereço que forneceu e o pagamento que fez | Forneça um endereço novo para cada receção |
| Um destinatário de pagamento | Sua transação de pagamento e informações da compra | Reveja as entradas selecionadas e evite divulgar sua identidade desnecessariamente |
| Uma corretora ou um prestador de compra | Registos da conta, detalhes de pagamento e endereços de depósito/levantamento | Compreenda os registos do prestador antes de usá-lo |
| Um analista da cadeia de blocos pública | Dados de transações e etiquetas obtidos noutros locais | Evite criar ligações fáceis; avalie o CoinJoin e seus hábitos de gasto posteriores |
| Um serviço de rede contactado | Conteúdo das solicitações e, possivelmente, metadados da ligação | Mantenha o Tor ativado nas ligações compatíveis e compreenda as divulgações específicas de cada recurso |
| Alguém com acesso ao seu computador ou às cópias de segurança | Ficheiros da carteira, etiquetas, endereços, registos e, possivelmente, chaves | Proteja o dispositivo, a cópia de segurança de recuperação e os metadados locais |

Nenhuma definição de carteira resolve sozinha todas as linhas. Uma carteira de hardware ajuda a proteger as chaves, mas não oculta um endereço público. O Tor ajuda com os metadados da ligação, mas não oculta as informações introduzidas no formulário de um prestador.

<span id="why-this-matters-in-ordinary-life" data-ginger-heading="porque-é-que-isso-importa-na-vida-quotidiana" aria-hidden="true"></span>

## Porque é que isso importa na vida quotidiana

Se cobra vários clientes usando o mesmo endereço, cada cliente pode ver as receções destinadas àquele endereço, incluindo os pagamentos de outros clientes. Um endereço novo evita esse identificador diretamente partilhado. Ele não impede automaticamente ligações posteriores se gastar todas as receções juntas.

Se paga alguém com fundos associados a uma campanha pública de doações, a transação pode revelar mais contexto do que apenas o valor do pagamento. Manter registos de quais moedas pertencem a cada atividade ajuda a fazer uma escolha informada antes de gastar.

A privacidade financeira pode proteger a confidencialidade dos clientes, informações comerciais, relações pessoais e a segurança física. Querer esses limites não exige ter feito algo errado. A pergunta relevante é se outra pessoa precisa aceder àquelas informações para concluir a interação.

<span id="privacy-and-fungibility" data-ginger-heading="privacidade-e-fungibilidade" aria-hidden="true"></span>

## Privacidade e fungibilidade

Fungibilidade significa que as unidades podem ser trocadas em condições equivalentes. As regras de transação do Bitcoin contabilizam valores, mas pessoas e serviços podem classificar as saídas de maneiras diferentes com base em seus históricos aparentes. Esses julgamentos podem introduzir dificuldades mesmo quando uma saída é válida segundo as regras do Bitcoin.

As ferramentas de privacidade podem tornar algumas classificações históricas mais difíceis de estabelecer com confiança. Elas não podem obrigar um prestador a aceitar uma transferência nem apagar um registo que ele já possui. Trate com cuidado as alegações sobre moedas “limpas” ou aceitação garantida: a estimativa de privacidade de uma carteira e a política de um serviço são coisas diferentes.

<span id="where-ginger-fits" data-ginger-heading="onde-o-ginger-se-encaixa" aria-hidden="true"></span>

## Onde o Ginger se encaixa

O Ginger oferece receção em endereços novos, etiquetas locais, controlo de moedas, integração com o Tor, sincronização da carteira com filtros compactos e CoinJoin. Esses recursos permitem reduzir divulgações específicas e examinar um pagamento antes de autorizá-lo. O programa de computador também oferece fluxos de carteiras de hardware para proteger as chaves.

Comece por receber num endereço novo e compreender as suas moedas existentes. Se a privacidade das ligações entre transações é uma preocupação, aprenda o que o CoinJoin pode e não pode mudar antes de ativar rondas automáticas. Para escolhas quotidianas, continue com [Hábitos de privacidade antes e depois de um pagamento](/pt-pt/using-ginger/address-reuse/).

O objetivo é uma melhoria deliberada para sua situação. O Ginger não pode apagar informações já recolhidas por uma corretora, prometer aceitação por todos os serviços nem impedir que uma divulgação voluntária posterior crie uma nova ligação.
