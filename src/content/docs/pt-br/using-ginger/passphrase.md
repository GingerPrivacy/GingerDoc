---
doc_id: "backup-recovery.passphrase"
title: "O que é uma frase-senha?"
description: "Entenda a frase-senha da sua carteira Ginger, o que incluir no backup e por que a recuperação precisa da frase-senha original, mesmo quando outra abre uma carteira vazia."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "Frase-senha"
prev: false
next: false
---

> Nível de leitura: comece aqui. Este guia aborda carteiras de software no Ginger v2.0.26. Para uma carteira de hardware, siga as instruções de recuperação do fabricante do dispositivo e mantenha suas palavras de recuperação fora do computador.

Uma frase-senha é um segredo opcional que você escolhe ao criar uma carteira. No Ginger, ela protege o acesso à carteira de software e também faz parte das informações de recuperação. Para recuperar a mesma carteira, você precisa das palavras de recuperação originais e da frase-senha original exata, caso tenha usado uma. O Ginger não pode redefinir uma frase-senha esquecida.

<span id="do-i-have-to-use-a-passphrase" data-ginger-heading="preciso-usar-uma-frase-senha" aria-hidden="true"></span>

## Preciso usar uma frase-senha?

Ao criar uma carteira, o Ginger mostra **Add Passphrase** depois de **Confirm Recovery Words**. Você pode inserir e confirmar uma frase-senha ou deixar ambos os campos vazios para criar uma carteira sem ela.

Sem uma frase-senha, alguém que obtenha suas palavras de recuperação pode recuperar e gastar seu bitcoin. Uma frase-senha acrescenta outro segredo a proteger, mas esquecê-la pode deixar você incapaz de recuperar a carteira mesmo que ainda tenha as palavras. Escolha algo difícil de adivinhar que possa registrar e reproduzir com precisão. Evite espaços no começo ou no fim; as verificações de entrada do Ginger os rejeitam.

<span id="is-it-the-same-as-recovery-words-or-a-2fa-code" data-ginger-heading="é-o-mesmo-que-as-palavras-de-recuperação-ou-um-código-2fa" aria-hidden="true"></span>

## É o mesmo que as palavras de recuperação ou um código 2FA?

Não. O Ginger gera doze **Recovery Words** para uma nova carteira de software. Você escolhe a frase-senha separadamente. Mantenha-a separada da lista numerada de palavras; não a insira como uma palavra de recuperação adicional.

O nome da carteira é apenas um rótulo local. Um código de autenticador para autenticação de dois fatores (2FA) é uma verificação separada na inicialização do aplicativo. Nenhum deles substitui as palavras e a frase-senha originais ao recuperar uma carteira de software.

<span id="what-should-i-back-up" data-ginger-heading="o-que-devo-incluir-no-backup" aria-hidden="true"></span>

## O que devo incluir no backup?

- As palavras de recuperação, na ordem exibida.
- A frase-senha original exata, incluindo maiúsculas, minúsculas e caracteres, ou uma nota clara de que você criou a carteira sem ela.

Mantenha essas informações privadas e recuperáveis depois de perder o computador. Escreva as palavras off-line; evite fotografias, e-mail e notas comuns na nuvem. Mantenha a frase-senha recuperável também. Armazená-la separadamente pode proteger contra alguém encontrar os dois segredos juntos, mas certifique-se de conseguir localizar ambos quando necessário. Não dependa apenas da memória.

As palavras de recuperação restauram o acesso ao bitcoin, mas não restauram todos os rótulos ou configurações. Mantenha os arquivos existentes da carteira enquanto investiga um problema de recuperação. Um backup automático no mesmo computador não protege contra a perda daquele computador.

<span id="how-do-i-check-my-backup" data-ginger-heading="como-verifico-meu-backup" aria-hidden="true"></span>

## Como verifico meu backup?

Enquanto sua carteira de software estiver acessível, abra **Wallet Settings** → **Tools**. Encontre **Verify Recovery Words** e escolha **Verify**; depois, insira as palavras do seu backup e conclua a verificação.

Isso verifica se aquelas palavras pertencem à carteira. Não mostra palavras esquecidas nem redefine a frase-senha. Certifique-se também de que seu registro da frase-senha esteja correto. Se a verificação falhar, confira a grafia e a ordem das palavras de maneira privada antes de confiar no backup.

<span id="how-do-i-use-the-passphrase-during-recovery" data-ginger-heading="como-uso-a-frase-senha-durante-a-recuperação" aria-hidden="true"></span>

## Como uso a frase-senha durante a recuperação?

Esses passos são para recuperar uma carteira de software Ginger a partir de suas palavras. Preserve quaisquer arquivos existentes da carteira até que a recuperação seja confirmada.

1. Abra o Ginger em um computador confiável. Na tela de adicionar carteira, escolha **Recover**.
2. Insira um **Wallet Name** distinto se solicitado, para distinguir a carteira recuperada das existentes.
3. Insira as **Recovery Words** originais em ordem.
4. Em **Enter Passphrase**, insira e confirme a frase-senha original. Deixe os campos vazios somente se a carteira original não tinha frase-senha. Você não está escolhendo uma nova senha aqui.
5. Deixe a recuperação e a sincronização terminarem; depois, verifique seu histórico de transações conhecido. Sincronizar significa verificar na rede Bitcoin as transações que pertencem à carteira.

<span id="why-is-my-recovered-wallet-empty" data-ginger-heading="por-que-minha-carteira-recuperada-está-vazia" aria-hidden="true"></span>

## Por que minha carteira recuperada está vazia?

Durante a recuperação por palavras, uma frase-senha diferente produz uma carteira diferente. Portanto, o Ginger pode aceitar uma frase-senha digitada incorretamente e recuperar uma carteira vazia sem informar um erro de frase-senha incorreta. Isso é diferente de abrir um arquivo existente de carteira protegida, em que uma frase-senha incorreta é rejeitada.

Confira a frase-senha original, as maiúsculas e minúsculas, os espaços e o layout do teclado. Verifique também que selecionou a carteira e a rede Bitcoin pretendidas e que a recuperação terminou. Uma varredura inacabada pode mostrar um saldo incompleto. Um saldo vazio, por si só, não prova que o bitcoin original desapareceu.

Se o histórico esperado ainda estiver ausente, preserve os originais e procure ajuda pelos [links de suporte do projeto oficial Ginger](https://gingerwallet.io/). Compartilhe somente detalhes que não contêm segredos, como a versão do aplicativo e o texto do erro. Nunca envie ao suporte suas palavras de recuperação, frase-senha ou arquivos da carteira.

<span id="can-i-reset-or-replace-a-forgotten-passphrase" data-ginger-heading="posso-redefinir-ou-substituir-uma-frase-senha-esquecida" aria-hidden="true"></span>

## Posso redefinir ou substituir uma frase-senha esquecida?

O Ginger não pode redefini-la. Recuperar com as mesmas palavras e uma nova frase-senha cria acesso a uma carteira diferente; não altera a frase-senha da carteira original nem move seu bitcoin.

Se você ainda consegue enviar da carteira original, mas não consegue estabelecer um backup de recuperação utilizável, crie uma nova carteira, verifique seu backup e transfira cuidadosamente os fundos enquanto o acesso permanece. Preserve a carteira antiga até que a transferência seja confirmada. Se você não tem acesso para gastar nem as informações de recuperação necessárias, o suporte não pode recriar o segredo ausente.
