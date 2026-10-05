---
doc_id: "learn-privacy.who-can-see"
title: "Quem pode ver minhas transações Bitcoin?"
description: "Saiba o que um endereço Bitcoin revela, como a identidade e as ligações entre transações se combinam e onde as ferramentas de privacidade do Ginger podem ajudar."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são uma continuação opcional.

As transações Bitcoin são públicas, mas o nome do proprietário de uma carteira não é escrito automaticamente ao lado de cada endereço. A pergunta prática é quem pode ligar um endereço ou uma transação a você e o que mais essa pessoa pode inferir a partir dessa ligação.

Um cliente pode conhecer o endereço da fatura que você lhe forneceu. Uma corretora pode conhecer seu endereço de saque e sua identidade verificada. Alguém acompanhando um endereço público de doações pode observar seus recebimentos. Esses observadores partem de informações diferentes, por isso é mais útil pensar na privacidade como uma divulgação controlada do que como um único interruptor entre anônimo e não anônimo.

<span id="what-the-blockchain-reveals" data-ginger-heading="o-que-a-blockchain-revela" aria-hidden="true"></span>

## O que a blockchain revela

As transações mostram entradas, saídas, valores e suas relações por meio dos gastos. Uma saída gasta posteriormente por outra transação cria uma ligação pública. Isso não prova automaticamente quem possui cada saída: uma transação pode ser um pagamento, uma transferência entre suas próprias carteiras ou uma transação colaborativa com vários proprietários. A [seção sobre privacidade do artigo original do Bitcoin](https://bitcoin.org/bitcoin.pdf) discute a separação entre transações públicas e identidades, além do problema de ligar chaves entre si.

Depois que alguém associa um endereço a uma pessoa, pode investigar a atividade conectada a ele. Algumas associações são diretas, como pagamentos repetidos a um mesmo endereço. Outras dependem de suposições sobre a propriedade comum das entradas ou sobre qual saída é o troco. Essas suposições podem estar erradas, mas ainda assim influenciar a forma como os serviços classificam as transações.

<span id="who-can-learn-what" data-ginger-heading="quem-pode-descobrir-o-quê" aria-hidden="true"></span>

## Quem pode descobrir o quê?

| Observador | Informações que pode ter inicialmente | O que você pode controlar |
| --- | --- | --- |
| Um pagador | O endereço que você forneceu e o pagamento que fez | Forneça um endereço novo para cada recebimento |
| Um destinatário de pagamento | Sua transação de pagamento e informações da compra | Revise as entradas selecionadas e evite divulgar sua identidade desnecessariamente |
| Uma corretora ou um provedor de compra | Registros da conta, detalhes de pagamento e endereços de depósito/saque | Entenda os registros do provedor antes de usá-lo |
| Um analista da blockchain pública | Dados de transações e rótulos obtidos em outros lugares | Evite criar ligações fáceis; avalie o CoinJoin e seus hábitos de gasto posteriores |
| Um serviço de rede contatado | Conteúdo das solicitações e, possivelmente, metadados da conexão | Mantenha o Tor habilitado onde houver suporte e entenda as divulgações específicas de cada recurso |
| Alguém com acesso ao seu computador ou aos backups | Arquivos da carteira, rótulos, endereços, registros e, possivelmente, chaves | Proteja o dispositivo, o backup de recuperação e os metadados locais |

Nenhuma configuração de carteira resolve sozinha todas as linhas. Uma carteira de hardware ajuda a proteger as chaves, mas não oculta um endereço público. O Tor ajuda com os metadados da conexão, mas não oculta as informações digitadas no formulário de um provedor.

<span id="why-this-matters-in-ordinary-life" data-ginger-heading="por-que-isso-importa-na-vida-cotidiana" aria-hidden="true"></span>

## Por que isso importa na vida cotidiana

Se você cobra vários clientes usando o mesmo endereço, cada cliente pode ver os recebimentos destinados àquele endereço, incluindo os pagamentos de outros clientes. Um endereço novo evita esse identificador diretamente compartilhado. Ele não impede automaticamente ligações posteriores se você gastar todos os recebimentos juntos.

Se você paga alguém com fundos associados a uma campanha pública de doações, a transação pode revelar mais contexto do que apenas o valor do pagamento. Manter registros de quais moedas pertencem a cada atividade ajuda a fazer uma escolha informada antes de gastar.

A privacidade financeira pode proteger a confidencialidade dos clientes, informações comerciais, relações pessoais e a segurança física. Querer esses limites não exige ter feito algo errado. A pergunta relevante é se outra pessoa precisa acessar aquelas informações para concluir a interação.

<span id="privacy-and-fungibility" data-ginger-heading="privacidade-e-fungibilidade" aria-hidden="true"></span>

## Privacidade e fungibilidade

Fungibilidade significa que as unidades podem ser trocadas em condições equivalentes. As regras de transação do Bitcoin contabilizam valores, mas pessoas e serviços podem classificar as saídas de maneiras diferentes com base em seus históricos aparentes. Esses julgamentos podem introduzir dificuldades mesmo quando uma saída é válida segundo as regras do Bitcoin.

As ferramentas de privacidade podem tornar algumas classificações históricas mais difíceis de estabelecer com confiança. Elas não podem obrigar um provedor a aceitar uma transferência nem apagar um registro que ele já possui. Trate com cuidado as alegações sobre moedas “limpas” ou aceitação garantida: a estimativa de privacidade de uma carteira e a política de um serviço são coisas diferentes.

<span id="where-ginger-fits" data-ginger-heading="onde-o-ginger-se-encaixa" aria-hidden="true"></span>

## Onde o Ginger se encaixa

O Ginger oferece recebimento em endereços novos, rótulos locais, controle de moedas, integração com o Tor, sincronização da carteira com filtros compactos e CoinJoin. Esses recursos permitem reduzir divulgações específicas e examinar um pagamento antes de autorizá-lo. O aplicativo de computador também oferece fluxos de carteiras de hardware para proteger as chaves.

Comece recebendo em um endereço novo e entendendo suas moedas existentes. Se a privacidade das ligações entre transações é uma preocupação, aprenda o que o CoinJoin pode e não pode mudar antes de habilitar rodadas automáticas. Para escolhas cotidianas, continue com [Hábitos de privacidade antes e depois de um pagamento](/pt-br/using-ginger/address-reuse/).

O objetivo é uma melhoria deliberada para sua situação. O Ginger não pode apagar informações já coletadas por uma corretora, prometer aceitação por todos os serviços nem impedir que uma divulgação voluntária posterior crie uma nova ligação.
