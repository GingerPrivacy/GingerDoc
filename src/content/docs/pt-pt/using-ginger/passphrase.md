---
doc_id: "backup-recovery.passphrase"
title: "O que é uma frase de segurança?"
description: "Compreenda a frase de segurança da sua carteira Ginger, o que incluir na cópia de segurança e porque a recuperação precisa da frase de segurança original, mesmo quando outra abre uma carteira vazia."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "Frase de segurança"
prev: false
next: false
---

> Nível de leitura: comece aqui. Este guia aborda carteiras de software no Ginger v2.0.26. Para uma carteira de hardware, siga as instruções de recuperação do fabricante do dispositivo e mantenha suas palavras de recuperação fora do computador.

Uma frase de segurança é um segredo opcional que escolhe ao criar uma carteira. No Ginger, ela protege o acesso à carteira de software e também faz parte das informações de recuperação. Para recuperar a mesma carteira, precisa das palavras de recuperação originais e da frase de segurança original exata, caso tenha usado uma. O Ginger não pode redefinir uma frase de segurança esquecida.

<span id="do-i-have-to-use-a-passphrase" data-ginger-heading="preciso-usar-uma-frase-de-segurança" aria-hidden="true"></span>

## Preciso usar uma frase de segurança?

Ao criar uma carteira, o Ginger mostra **Add Passphrase** depois de **Confirm Recovery Words**. Pode inserir e confirmar uma frase de segurança ou deixar ambos os campos vazios para criar uma carteira sem ela.

Sem uma frase de segurança, alguém que obtenha suas palavras de recuperação pode recuperar e gastar seu bitcoin. Uma frase de segurança acrescenta outro segredo a proteger, mas esquecê-la pode deixá-lo incapaz de recuperar a carteira mesmo que ainda tenha as palavras. Escolha algo difícil de adivinhar que possa registar e reproduzir com precisão. Evite espaços no começo ou no fim; as verificações de entrada do Ginger os rejeitam.

<span id="is-it-the-same-as-recovery-words-or-a-2fa-code" data-ginger-heading="é-o-mesmo-que-as-palavras-de-recuperação-ou-um-código-2fa" aria-hidden="true"></span>

## É o mesmo que as palavras de recuperação ou um código 2FA?

Não. O Ginger gera doze **Recovery Words** para uma nova carteira de software. Escolhe a frase de segurança separadamente. Mantenha-a separada da lista numerada de palavras; não a insira como uma palavra de recuperação adicional.

O nome da carteira é apenas uma etiqueta local. Um código de autenticador para autenticação de dois fatores (2FA) é uma verificação separada no arranque do programa. Nenhum deles substitui as palavras e a frase de segurança originais ao recuperar uma carteira de software.

<span id="what-should-i-back-up" data-ginger-heading="o-que-devo-incluir-na-cópia-de-segurança" aria-hidden="true"></span>

## O que devo incluir na cópia de segurança?

- As palavras de recuperação, na ordem exibida.
- A frase de segurança original exata, incluindo maiúsculas, minúsculas e caracteres, ou uma nota clara de que criou a carteira sem ela.

Mantenha essas informações privadas e recuperáveis depois de perder o computador. Escreva as palavras off-line; evite fotografias, e-mail e notas comuns na nuvem. Mantenha a frase de segurança recuperável também. Armazená-la separadamente pode proteger contra alguém encontrar os dois segredos juntos, mas certifique-se de conseguir localizar ambos quando necessário. Não dependa apenas da memória.

As palavras de recuperação restauram o acesso ao bitcoin, mas não restauram todas as etiquetas ou definições. Mantenha os ficheiros existentes da carteira enquanto investiga um problema de recuperação. Uma cópia de segurança automática no mesmo computador não protege contra a perda daquele computador.

<span id="how-do-i-check-my-backup" data-ginger-heading="como-verifico-a-minha-cópia-de-segurança" aria-hidden="true"></span>

## Como verifico a minha cópia de segurança?

Enquanto sua carteira de software estiver acessível, abra **Wallet Settings** → **Tools**. Encontre **Verify Recovery Words** e escolha **Verify**; depois, insira as palavras da sua cópia de segurança e conclua a verificação.

Isso verifica se aquelas palavras pertencem à carteira. Não mostra palavras esquecidas nem redefine a frase de segurança. Certifique-se também de que seu registo da frase de segurança esteja correto. Se a verificação falhar, confira a grafia e a ordem das palavras de maneira privada antes de confiar na cópia de segurança.

<span id="how-do-i-use-the-passphrase-during-recovery" data-ginger-heading="como-uso-a-frase-de-segurança-durante-a-recuperação" aria-hidden="true"></span>

## Como uso a frase de segurança durante a recuperação?

Esses passos são para recuperar uma carteira de software Ginger a partir de suas palavras. Preserve quaisquer ficheiros existentes da carteira até que a recuperação seja confirmada.

1. Abra o Ginger num computador de confiança. No ecrã de adicionar carteira, escolha **Recover**.
2. Insira um **Wallet Name** distinto se solicitado, para distinguir a carteira recuperada das existentes.
3. Insira as **Recovery Words** originais em ordem.
4. Em **Enter Passphrase**, insira e confirme a frase de segurança original. Deixe os campos vazios apenas se a carteira original não tinha frase de segurança. Não está a escolher uma nova palavra-passe aqui.
5. Deixe a recuperação e a sincronização terminarem; depois, verifique seu histórico de transações conhecido. Sincronizar significa verificar na rede Bitcoin as transações que pertencem à carteira.

<span id="why-is-my-recovered-wallet-empty" data-ginger-heading="porque-é-que-a-minha-carteira-recuperada-está-vazia" aria-hidden="true"></span>

## Porque é que a minha carteira recuperada está vazia?

Durante a recuperação por palavras, uma frase de segurança diferente produz uma carteira diferente. Portanto, o Ginger pode aceitar uma frase de segurança introduzida incorretamente e recuperar uma carteira vazia sem informar um erro de frase de segurança incorreta. Isso é diferente de abrir um ficheiro existente de carteira protegida, em que uma frase de segurança incorreta é rejeitada.

Confira a frase de segurança original, as maiúsculas e minúsculas, os espaços e a disposição do teclado. Verifique também que selecionou a carteira e a rede Bitcoin pretendidas e que a recuperação terminou. Uma pesquisa inacabada pode mostrar um saldo incompleto. Um saldo vazio, por si só, não prova que o bitcoin original desapareceu.

Se o histórico esperado ainda estiver ausente, preserve os originais e procure ajuda pelas [ligações de apoio do projeto oficial Ginger](https://gingerwallet.io/). Partilhe apenas detalhes que não contêm segredos, como a versão do programa e o texto do erro. Nunca envie ao apoio suas palavras de recuperação, frase de segurança ou ficheiros da carteira.

<span id="can-i-reset-or-replace-a-forgotten-passphrase" data-ginger-heading="posso-redefinir-ou-substituir-uma-frase-de-segurança-esquecida" aria-hidden="true"></span>

## Posso redefinir ou substituir uma frase de segurança esquecida?

O Ginger não pode redefini-la. Recuperar com as mesmas palavras e uma nova frase de segurança cria acesso a uma carteira diferente; não altera a frase de segurança da carteira original nem move seu bitcoin.

Se ainda consegue enviar da carteira original, mas não consegue estabelecer uma cópia de segurança de recuperação utilizável, crie uma nova carteira, verifique a sua cópia de segurança e transfira cuidadosamente os fundos enquanto o acesso permanece. Preserve a carteira antiga até que a transferência seja confirmada. Se não tem acesso para gastar nem as informações de recuperação necessárias, o apoio não pode recriar o segredo ausente.
