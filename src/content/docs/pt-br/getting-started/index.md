---
doc_id: "getting-started.start-here"
title: "Comece aqui: seus primeiros passos com o Ginger"
description: "Aprenda o que o Ginger faz, proteja seu backup de recuperação e siga um caminho simples para receber e enviar antes de explorar os recursos avançados opcionais."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Comece aqui
prev: false
next:
  link: /pt-br/getting-started/install/
  label: Instale o Ginger Wallet
---

> Nível de leitura: Comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são leituras complementares opcionais.

O Ginger é um aplicativo para receber e enviar bitcoin no seu computador. Você controla as informações que permitem gastar seus bitcoins. O Ginger também pode ajudar a dificultar o rastreamento do histórico de pagamentos por meio de um recurso opcional chamado CoinJoin.

Você pode aprender primeiro o funcionamento normal da carteira. Não precisa de um nó Bitcoin próprio, de um dispositivo de hardware ou de configurações avançadas de CoinJoin para criar uma carteira de software.

<!-- Preserve links to the questions previously published on this page. -->
<span id="whats-the-officially-supported-operating-systems" aria-hidden="true"></span>
<span id="is-there-an-androidios-version" aria-hidden="true"></span>
<span id="does-ginger-support-altcoins" aria-hidden="true"></span>
<span id="what-are-the-minimal-requirements-to-run-ginger" aria-hidden="true"></span>
<span id="do-i-need-to-run-tor" aria-hidden="true"></span>

<span id="1-install-the-real-application" data-ginger-heading="1-instale-o-aplicativo-verdadeiro" aria-hidden="true"></span>

## 1. Instale o aplicativo verdadeiro

Siga [Instale o Ginger Wallet](/pt-br/getting-started/install/) e use os links oficiais de download. Escolha o download para o seu computador. Não instale um aplicativo de celular com nome semelhante nem software enviado por um desconhecido que oferece suporte.

O Ginger é compatível com Windows, macOS e Linux; o guia de instalação lista as versões e os processadores compatíveis. Esta versão aceita apenas Bitcoin e não tem aplicativo para Android ou iOS. Você precisa de conexão à internet e armazenamento com permissão de gravação. O Tor está incluído, portanto não é necessário instalá-lo separadamente.

Mantenha as verificações de download indicadas nesse guia. A [referência avançada de verificação de assinatura](/pt-br/getting-started/verify-download/) explica separadamente as verificações pela linha de comando quando você precisar delas.

<span id="what-is-the-password-used-for" aria-hidden="true"></span>

<span id="2-create-a-wallet-and-make-its-backup" data-ginger-heading="2-crie-uma-carteira-e-faça-seu-backup" aria-hidden="true"></span>

## 2. Crie uma carteira e faça seu backup

Siga [Crie sua primeira carteira](/pt-br/getting-started/first-wallet/). Escolha **New**, anote as doze **Recovery Words** na ordem correta e conclua **Confirm Recovery Words**. Mantenha o backup escrito em sigilo e disponível mesmo se perder o computador.

Na etapa **Add Passphrase**, entenda a escolha antes de continuar. Se usar uma frase de senha, as palavras originais e essa frase de senha exata serão necessárias para a recuperação. A frase de senha também protege o acesso à carteira no computador. O Ginger não pode redefini-la. Deixar os campos vazios cria uma carteira sem essa frase de senha adicional; anote qual opção você escolheu.

Não prossiga com um saldo significativo até que o backup esteja legível e você consiga abrir a carteira pretendida. Nunca compartilhe as palavras ou a frase de senha com o suporte.

<span id="why-is-it-important-to-use-a-new-address-for-every-payment" aria-hidden="true"></span>

<span id="3-receive-a-small-first-payment" data-ginger-heading="3-receba-um-primeiro-pagamento-pequeno" aria-hidden="true"></span>

## 3. Receba um primeiro pagamento pequeno

Aguarde a carteira terminar a sincronização: isso significa verificar suas transações na rede Bitcoin. Escolha **Receive**, adicione um rótulo útil e gere um endereço de recebimento. Compartilhe-o com o pagador pretendido ou use-o no processo de saque on-chain de Bitcoin de uma corretora.

Gere um endereço novo para cada pagamento. Reutilizar um endereço facilita relacionar pagamentos separados no registro público do Bitcoin.

Confira o endereço inteiro e a rede antes de autorizar o pagamento. O Ginger recebe Bitcoin on-chain; a rede de outro ativo ou uma fatura Lightning não é equivalente. Uma confirmação significa que a transação foi incluída em um bloco Bitcoin. Uma captura de tela enviada pelo pagador, por si só, não é uma confirmação.

<span id="4-make-a-small-first-payment" data-ginger-heading="4-faça-um-primeiro-pagamento-pequeno" aria-hidden="true"></span>

## 4. Faça um primeiro pagamento pequeno

Escolha **Send** e use a seleção **Automatic** para o procedimento normal. Informe o endereço do destinatário e o valor, escolha **Continue** e confira o destino, o valor que o destinatário receberá e a taxa. Escolha **Confirm** apenas quando tudo estiver correto.

A taxa paga pelo espaço da transação no Bitcoin. Se sobrar parte do dinheiro selecionado, ela volta à sua carteira como troco. Você não precisa devolver esse troco manualmente. O Ginger não pode reverter um pagamento confirmado.

Após um erro de conexão, verifique o histórico antes de tentar pagar novamente. Isso ajuda a evitar um pagamento duplicado quando a primeira transação já foi enviada.

<span id="5-decide-whether-to-use-coinjoin" data-ginger-heading="5-decida-se-quer-usar-coinjoin" aria-hidden="true"></span>

## 5. Decida se quer usar CoinJoin

O CoinJoin combina a atividade de várias pessoas em uma transação Bitcoin compartilhada para dificultar a dedução dos vínculos de propriedade. Sua carteira mantém as chaves de assinatura. Há custos de taxas, o processo pode levar tempo e ele não apaga informações que um destinatário ou uma corretora já conhece.

Confira **Automatically start coinjoin** em **Coinjoin Settings** para a carteira selecionada. Desative a participação automática enquanto aprende, se não quiser que ela comece sem sua intervenção. Se uma rodada já estiver ativa, use o controle de pausa do painel e permita que as etapas críticas terminem.

Você pode receber e fazer pagamentos normais sem esperar que um indicador de privacidade chegue a 100%. Também não precisa ajustar todas as configurações avançadas para começar a usar a carteira.

<span id="you-have-finished-the-first-use-path" data-ginger-heading="você-concluiu-o-caminho-de-primeiro-uso" aria-hidden="true"></span>

## Você concluiu o caminho de primeiro uso

As verificações essenciais são um backup que permita a recuperação, a carteira pretendida, a rede de pagamento correta, o destinatário e a taxa efetiva. Continue usando novos endereços de recebimento e confira cada pagamento.

Volte a este guia sempre que precisar da lista de verificações para receber e enviar. A seção **Uso avançado** é separada deste caminho de primeiro uso. Por exemplo, [Verifique um download do Ginger Wallet](/pt-br/getting-started/verify-download/) explica em detalhes as verificações de assinatura pela linha de comando.
