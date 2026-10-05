---
doc_id: "getting-started.first-wallet"
title: "Crie e abra a sua primeira carteira Ginger"
description: "Crie uma carteira Bitcoin, registe suas palavras de recuperação e frase de segurança e compreenda a primeira sincronização e as definições de CoinJoin."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Crie a sua primeira carteira
prev:
  link: /getting-started/install/
  label: Instale o Ginger Wallet
next: false
---

> Nível de leitura: Comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são leituras complementares opcionais.

Uma carteira Ginger contém as informações necessárias para reconhecer e gastar seus bitcoins. Os bitcoins em si são registados na rede Bitcoin. É possível recuperar o acesso após perder o computador se tiver a cópia de segurança correta; perder a carteira e suas informações de recuperação pode ser irrecuperável.

<span id="create-a-software-wallet" data-ginger-heading="crie-uma-carteira-de-software" aria-hidden="true"></span>

## Crie uma carteira de software

1. Abra o ecrã de adição de carteira e escolha **New**. Se for solicitado **Wallet Name**, escolha um nome que diferencie esta carteira das outras. A primeira carteira pode receber um nome gerado automaticamente sem mostrar essa etapa.
2. O Ginger exibe doze **Recovery Words** em inglês. Anote-as na ordem exibida e mantenha-as offline. Não tire fotos delas, não as coloque em e-mails nem as partilhe com o apoio. O Ginger não voltará a exibi-las depois da criação.
3. Continue em **Confirm Recovery Words** e selecione as palavras solicitadas com a sua cópia de segurança escrita. Isso verifica se registou a sequência, em vez de apenas reconhecer as palavras no ecrã.
4. Em **Add Passphrase**, insira e confirme uma frase de segurança ou deixe ambos os campos vazios se escolher deliberadamente uma carteira sem ela. Registe se uma frase de segurança foi usada. Uma frase de segurança não vazia é necessária tanto para a recuperação como para abrir a carteira protegida; não é uma palavra-passe que o Ginger possa redefinir.
5. Conclua qualquer solicitação de termos de serviço. Permita que a carteira se ligue e sincronize antes de confiar no saldo.

O nome da carteira é uma etiqueta local. Não é uma credencial de recuperação e não altera as chaves. Renomear uma carteira não é o mesmo que criar uma nova.

<span id="decide-how-to-use-coinjoin" data-ginger-heading="decida-como-usar-coinjoin" aria-hidden="true"></span>

## Decida como usar CoinJoin

O Ginger pode exibir uma solicitação para personalizar as definições de CoinJoin. Confira as definições e as taxas antes de deixar fundos disponíveis para CoinJoin automático. Em **Coinjoin Settings**, **Automatically start coinjoin** determina se a carteira inicia sem que prima o controlo de início do painel. Verifique a opção efetiva da sua carteira; uma carteira importada ou configurada anteriormente pode ter definições diferentes.

O CoinJoin consome taxas de transação e pode levar tempo. Receber bitcoin, enviar um pagamento normal e usar CoinJoin são ações separadas. Pode primeiro aprender o processo de receber e enviar usando uma quantia pequena cuja perda seria suportável.

<span id="open-an-existing-wallet" data-ginger-heading="abra-uma-carteira-existente" aria-hidden="true"></span>

## Abra uma carteira existente

Selecione seu nome na lista de carteiras do Ginger. Insira a frase de segurança original se for solicitada. Se ativou a autenticação de dois fatores do programa, conclua essa solicitação de arranque antes de abrir carteiras individuais. Uma carteira de hardware usa o processo de autorização do dispositivo em vez de um segredo de carteira de software no computador.

Para adicionar uma carteira a partir de suas palavras de recuperação, escolha **Recover** no ecrã de adição de carteira. Para carregar uma cópia de segurança JSON de carteira compatível ou uma exportação de hardware aceite, escolha **Import File**. Não cole palavras de recuperação numa caixa de diálogo de importação de ficheiro nem importe as palavras de recuperação de uma carteira de hardware apenas para ligar o dispositivo.

<span id="know-when-the-wallet-is-ready" data-ginger-heading="saiba-quando-a-carteira-está-pronta" aria-hidden="true"></span>

## Saiba quando a carteira está pronta

A sincronização encontra as transações que pertencem à sua carteira. Até ela terminar, os saldos ou o histórico podem estar incompletos. Uma carteira recuperada pode ocultar as ações normais de receber ou enviar enquanto realiza a pesquisa. Um pagamento recebido ainda não confirmado já foi observado, mas ainda não foi incluído num bloco.

Antes de receber uma quantia significativa, confira se a carteira abre, se a sua cópia de segurança de recuperação está legível e se entende sua escolha de frase de segurança. Use **Wallet Settings** → **Tools** → **Verify Recovery Words** com o botão **Verify** para verificar as palavras de uma carteira de software acessível. Isso verifica uma cópia de segurança; não revela palavras esquecidas.

<span id="close-safely" data-ginger-heading="feche-com-segurança" aria-hidden="true"></span>

## Feche com segurança

Fechar a janela pode deixar o Ginger em execução se **Run in background when window closed** estiver ativado em **Settings** → **General**. Use a ação normal de saída do programa quando precisar fechá-lo. Durante uma fase crítica de CoinJoin, permita que o Ginger conclua o procedimento de encerramento. Forçar o encerramento pode interromper a participação.

<span id="next-receive-and-send" data-ginger-heading="próximo-passo-receber-e-enviar" aria-hidden="true"></span>

## Próximo passo: receber e enviar

Depois de verificar a cópia de segurança e concluir a sincronização, volte a [Receba um primeiro pagamento pequeno](/pt-pt/getting-started/#3-receive-a-small-first-payment). A secção seguinte nessa página explica como fazer seu primeiro pagamento.
