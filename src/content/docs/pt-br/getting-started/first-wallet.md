---
doc_id: "getting-started.first-wallet"
title: "Crie e abra sua primeira carteira Ginger"
description: "Crie uma carteira Bitcoin, registre suas palavras de recuperação e frase de senha e entenda a primeira sincronização e as configurações de CoinJoin."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Crie sua primeira carteira
prev:
  link: /getting-started/install/
  label: Instale o Ginger Wallet
next: false
---

> Nível de leitura: Comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são leituras complementares opcionais.

Uma carteira Ginger contém as informações necessárias para reconhecer e gastar seus bitcoins. Os bitcoins em si são registrados na rede Bitcoin. É possível se recuperar da perda do computador se você tiver o backup correto; perder a carteira e suas informações de recuperação pode ser irrecuperável.

<span id="create-a-software-wallet" data-ginger-heading="crie-uma-carteira-de-software" aria-hidden="true"></span>

## Crie uma carteira de software

1. Abra a tela de adição de carteira e escolha **New**. Se for solicitado **Wallet Name**, escolha um nome que diferencie esta carteira das outras. A primeira carteira pode receber um nome gerado automaticamente sem mostrar essa etapa.
2. O Ginger exibe doze **Recovery Words** em inglês. Anote-as na ordem exibida e mantenha-as offline. Não tire fotos delas, não as coloque em e-mails nem as compartilhe com o suporte. O Ginger não voltará a exibi-las depois da criação.
3. Continue em **Confirm Recovery Words** e selecione as palavras solicitadas usando seu backup escrito. Isso verifica se você registrou a sequência, em vez de apenas reconhecer as palavras na tela.
4. Em **Add Passphrase**, insira e confirme uma frase de senha ou deixe ambos os campos vazios se escolher deliberadamente uma carteira sem ela. Registre se uma frase de senha foi usada. Uma frase de senha não vazia é necessária tanto para a recuperação quanto para abrir a carteira protegida; não é uma senha que o Ginger possa redefinir.
5. Conclua qualquer solicitação de termos de serviço. Permita que a carteira se conecte e sincronize antes de confiar no saldo.

O nome da carteira é um rótulo local. Não é uma credencial de recuperação e não altera as chaves. Renomear uma carteira não é o mesmo que criar uma nova.

<span id="decide-how-to-use-coinjoin" data-ginger-heading="decida-como-usar-coinjoin" aria-hidden="true"></span>

## Decida como usar CoinJoin

O Ginger pode exibir uma solicitação para personalizar as configurações de CoinJoin. Confira as configurações e as taxas antes de deixar fundos disponíveis para CoinJoin automático. Em **Coinjoin Settings**, **Automatically start coinjoin** determina se a carteira inicia sem que você pressione o controle de reprodução do painel. Verifique a opção efetiva da sua carteira; uma carteira importada ou configurada anteriormente pode ter configurações diferentes.

O CoinJoin consome taxas de transação e pode levar tempo. Receber bitcoin, enviar um pagamento normal e usar CoinJoin são ações separadas. Você pode primeiro aprender o processo de receber e enviar usando uma quantia pequena cuja perda seria administrável.

<span id="open-an-existing-wallet" data-ginger-heading="abra-uma-carteira-existente" aria-hidden="true"></span>

## Abra uma carteira existente

Selecione seu nome na lista de carteiras do Ginger. Insira a frase de senha original se for solicitada. Se você ativou a autenticação de dois fatores do aplicativo, conclua essa solicitação de inicialização antes de abrir carteiras individuais. Uma carteira de hardware usa o processo de autorização do dispositivo em vez de um segredo de carteira de software no computador.

Para adicionar uma carteira a partir de suas palavras de recuperação, escolha **Recover** na tela de adição de carteira. Para carregar um backup JSON de carteira compatível ou uma exportação de hardware aceita, escolha **Import File**. Não cole palavras de recuperação em uma caixa de diálogo de importação de arquivo nem importe as palavras de recuperação de uma carteira de hardware apenas para conectar o dispositivo.

<span id="know-when-the-wallet-is-ready" data-ginger-heading="saiba-quando-a-carteira-está-pronta" aria-hidden="true"></span>

## Saiba quando a carteira está pronta

A sincronização encontra as transações que pertencem à sua carteira. Até ela terminar, os saldos ou o histórico podem estar incompletos. Uma carteira recuperada pode ocultar as ações normais de receber ou enviar enquanto realiza a busca. Um pagamento recebido ainda não confirmado já foi observado, mas ainda não foi incluído em um bloco.

Antes de receber uma quantia significativa, confira se a carteira abre, se seu backup de recuperação está legível e se você entende sua escolha de frase de senha. Use **Wallet Settings** → **Tools** → **Verify Recovery Words** com o botão **Verify** para verificar as palavras de uma carteira de software acessível. Isso verifica um backup; não revela palavras esquecidas.

<span id="close-safely" data-ginger-heading="feche-com-segurança" aria-hidden="true"></span>

## Feche com segurança

Fechar a janela pode deixar o Ginger em execução se **Run in background when window closed** estiver ativado em **Settings** → **General**. Use a ação normal de saída do aplicativo quando precisar encerrá-lo. Durante uma fase crítica de CoinJoin, permita que o Ginger conclua o procedimento de encerramento. Forçar o fechamento pode interromper a participação.

<span id="next-receive-and-send" data-ginger-heading="próximo-passo-receber-e-enviar" aria-hidden="true"></span>

## Próximo passo: receber e enviar

Depois de verificar o backup e concluir a sincronização, volte a [Receba um primeiro pagamento pequeno](/pt-br/getting-started/#3-receive-a-small-first-payment). A seção seguinte nessa página explica como fazer seu primeiro pagamento.
