---
doc_id: "getting-started.start-here"
title: "Comece aqui: seus primeiros passos com o Ginger"
description: "Aprenda o que o Ginger faz, proteja a sua cópia de segurança de recuperação e siga um caminho simples para receber e enviar antes de explorar os recursos avançados opcionais."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Comece aqui
prev: false
next:
  link: /getting-started/install/
  label: Instale o Ginger Wallet
---

> Nível de leitura: Comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são leituras complementares opcionais.

O Ginger é um programa para receber e enviar bitcoin no seu computador. Controla as informações que permitem gastar seus bitcoins. O Ginger também pode ajudar a dificultar o rastreio do histórico de pagamentos através de um recurso opcional chamado CoinJoin.

Pode aprender primeiro o funcionamento normal da carteira. Não precisa de um nó Bitcoin próprio, de um dispositivo de hardware ou de definições avançadas de CoinJoin para criar uma carteira de software.

<!-- Preserve links to the questions previously published on this page. -->
<span id="whats-the-officially-supported-operating-systems" aria-hidden="true"></span>
<span id="is-there-an-androidios-version" aria-hidden="true"></span>
<span id="does-ginger-support-altcoins" aria-hidden="true"></span>
<span id="what-are-the-minimal-requirements-to-run-ginger" aria-hidden="true"></span>
<span id="do-i-need-to-run-tor" aria-hidden="true"></span>

<span id="1-install-the-real-application" data-ginger-heading="1-instale-o-programa-oficial" aria-hidden="true"></span>

## 1. Instale o programa oficial

Siga [Instale o Ginger Wallet](/pt-pt/getting-started/install/) e use as ligações oficiais de download. Escolha o download para o seu computador. Não instale um programa de telemóvel com nome semelhante nem software enviado por um desconhecido que oferece apoio.

O Ginger é compatível com Windows, macOS e Linux; o guia de instalação lista as versões e os processadores compatíveis. Esta versão aceita apenas Bitcoin e não tem programa para Android ou iOS. Precisa de ligação à internet e armazenamento com permissão de escrita. O Tor está incluído, portanto não é necessário instalá-lo separadamente.

Mantenha as verificações de download indicadas nesse guia. A [referência avançada de verificação de assinatura](/pt-pt/getting-started/verify-download/) explica separadamente as verificações pela linha de comando quando precisar delas.

<span id="what-is-the-password-used-for" aria-hidden="true"></span>

<span id="2-create-a-wallet-and-make-its-backup" data-ginger-heading="2-crie-uma-carteira-e-faça-a-sua-cópia-de-segurança" aria-hidden="true"></span>

## 2. Crie uma carteira e faça a sua cópia de segurança

Siga [Crie a sua primeira carteira](/pt-pt/getting-started/first-wallet/). Escolha **New**, anote as doze **Recovery Words** na ordem correta e conclua **Confirm Recovery Words**. Mantenha a cópia de segurança escrita em sigilo e disponível mesmo se perder o computador.

Na etapa **Add Passphrase**, compreenda a escolha antes de continuar. Se usar uma frase de segurança, as palavras originais e essa frase de segurança exata serão necessárias para a recuperação. A frase de segurança também protege o acesso à carteira no computador. O Ginger não pode redefini-la. Deixar os campos vazios cria uma carteira sem essa frase de segurança adicional; anote qual opção escolheu.

Não prossiga com um saldo significativo até que a cópia de segurança esteja legível e consiga abrir a carteira pretendida. Nunca partilhe as palavras ou a frase de segurança com o apoio.

<span id="why-is-it-important-to-use-a-new-address-for-every-payment" aria-hidden="true"></span>

<span id="3-receive-a-small-first-payment" data-ginger-heading="3-receba-um-primeiro-pagamento-pequeno" aria-hidden="true"></span>

## 3. Receba um primeiro pagamento pequeno

Aguarde a carteira terminar a sincronização: isso significa verificar suas transações na rede Bitcoin. Escolha **Receive**, adicione uma etiqueta útil e gere um endereço de receção. Partilhe-o com o pagador pretendido ou use-o no processo de levantamento on-chain de Bitcoin de uma corretora.

Gere um endereço novo para cada pagamento. Reutilizar um endereço facilita associar pagamentos separados no registo público do Bitcoin.

Confira o endereço inteiro e a rede antes de autorizar o pagamento. O Ginger recebe Bitcoin on-chain; a rede de outro ativo ou uma fatura Lightning não é equivalente. Uma confirmação significa que a transação foi incluída num bloco Bitcoin. Uma captura de ecrã enviada pelo pagador, por si só, não é uma confirmação.

<span id="4-make-a-small-first-payment" data-ginger-heading="4-faça-um-primeiro-pagamento-pequeno" aria-hidden="true"></span>

## 4. Faça um primeiro pagamento pequeno

Escolha **Send** e use a seleção **Automatic** para o procedimento normal. Informe o endereço do destinatário e o valor, escolha **Continue** e confira o destino, o valor que o destinatário receberá e a taxa. Escolha **Confirm** apenas quando tudo estiver correto.

A taxa paga pelo espaço da transação no Bitcoin. Se sobrar parte do dinheiro selecionado, ela volta à sua carteira como troco. Não precisa devolver esse troco manualmente. O Ginger não pode reverter um pagamento confirmado.

Após um erro de ligação, verifique o histórico antes de tentar pagar novamente. Isso ajuda a evitar um pagamento duplicado quando a primeira transação já foi enviada.

<span id="5-decide-whether-to-use-coinjoin" data-ginger-heading="5-decida-se-quer-usar-coinjoin" aria-hidden="true"></span>

## 5. Decida se quer usar CoinJoin

O CoinJoin combina a atividade de várias pessoas numa transação Bitcoin partilhada para dificultar a dedução dos vínculos de propriedade. Sua carteira mantém as chaves de assinatura. Há custos de taxas, o processo pode levar tempo e ele não apaga informações que um destinatário ou uma corretora já conhece.

Confira **Automatically start coinjoin** em **Coinjoin Settings** para a carteira selecionada. Desative a participação automática enquanto aprende, se não quiser que ela comece sem sua intervenção. Se uma ronda já estiver ativa, use o controlo de pausa do painel e permita que as etapas críticas terminem.

Pode receber e fazer pagamentos normais sem esperar que um indicador de privacidade chegue a 100%. Também não precisa ajustar todas as definições avançadas para começar a usar a carteira.

<span id="you-have-finished-the-first-use-path" data-ginger-heading="concluiu-os-primeiros-passos" aria-hidden="true"></span>

## Concluiu os primeiros passos

As verificações essenciais são uma cópia de segurança que permita a recuperação, a carteira pretendida, a rede de pagamento correta, o destinatário e a taxa efetiva. Continue a usar novos endereços de receção e confira cada pagamento.

Volte a este guia sempre que precisar da lista de verificações para receber e enviar. A secção **Utilização avançada** é separada deste percurso inicial. Por exemplo, [Verifique um download do Ginger Wallet](/pt-pt/getting-started/verify-download/) explica em detalhes as verificações de assinatura pela linha de comando.
