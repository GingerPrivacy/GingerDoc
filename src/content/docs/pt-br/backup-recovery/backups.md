---
doc_id: "backup-recovery.backups"
title: "Faça backup da sua carteira Ginger"
description: "Guarde e verifique as palavras de recuperação e a frase-senha original necessárias para recuperar uma carteira de software Ginger após perder o computador."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: Comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são leituras complementares opcionais.

Para uma carteira de software Ginger, guarde as palavras de recuperação e a frase-senha original exata, se tiver usado uma. Elas permitem recuperar o acesso após perder o computador. Uma carteira de hardware usa seu próprio processo de backup do dispositivo; mantenha as palavras dela fora do computador.

<span id="the-backup-you-need-first" data-ginger-heading="o-backup-de-que-você-precisa-primeiro" aria-hidden="true"></span>

## O backup de que você precisa primeiro

1. Anote as palavras na ordem exibida e mantenha-as em sigilo.
2. Registre a frase-senha exata ou registre que a carteira foi criada sem ela. O Ginger não pode redefini-la.
3. Guarde o backup em um lugar que possa acessar após perder o computador, impedindo que outras pessoas o leiam.
4. Verifique o backup enquanto a carteira ainda estiver acessível.

O nome da carteira não é um segredo de recuperação. Um código de autenticador ou PIN de hardware não substitui as palavras e a frase-senha original.

<span id="store-recovery-information-safely" data-ginger-heading="armazene-as-informações-de-recuperação-com-segurança" aria-hidden="true"></span>

## Armazene as informações de recuperação com segurança

Escreva as palavras de forma clara e na ordem original. Guarde-as onde possa recuperá-las após perder o computador, impedindo que outras pessoas as leiam. Considere mais de uma cópia durável se um incêndio, a água ou um único local inacessível puder inutilizar seu backup. Mantenha um registro dos locais onde as cópias estão, sem listar as palavras em uma anotação comum na nuvem.

Uma frase-senha não vazia também deve ser recuperável. Depender apenas da memória pode falhar. Guardá-la separadamente reduz a chance de uma única descoberta expor tudo, mas a organização ainda precisa ser compreensível para você ou para alguém que autorize intencionalmente. Não invente um esquema caseiro que divida as palavras em fragmentos sem saber como recuperá-las.

Uma senha de aplicativo, um PIN de dispositivo, um código de autenticador e uma frase-senha BIP39 não são equivalentes. Identifique claramente as instruções do backup sem revelar os segredos a um leitor não autorizado.

<span id="choose-something-durable-and-readable" data-ginger-heading="escolha-algo-durável-e-legível" aria-hidden="true"></span>

## Escolha algo durável e legível

O papel pode ser danificado pelo fogo, pela água ou pelo desbotamento. O metal pode resistir a alguns danos, mas ainda precisa de proteção contra outras pessoas que possam lê-lo. Confira se seu backup continua legível e acessível.

Evite fotografias, anotações comuns na nuvem e impressoras para as palavras de recuperação: elas podem deixar cópias que você não controla. Se mantiver mais de uma cópia, proteja e acompanhe cada uma. Não divida as palavras em um quebra-cabeça improvisado que talvez não consiga reconstruir.

<span id="check-the-backup-before-you-need-it" data-ginger-heading="confira-o-backup-antes-de-precisar-dele" aria-hidden="true"></span>

## Confira o backup antes de precisar dele

Em uma carteira de software aberta, use **Wallet Settings** → **Tools** → **Verify Recovery Words** e, depois, **Verify**. Insira as palavras do backup. Uma verificação bem-sucedida é uma evidência útil de que as palavras pertencem àquela carteira. Confira também se o registro da frase-senha está correto e se você consegue encontrar os arquivos que pretende preservar.

Se as palavras não forem verificadas, confira a grafia e a ordem em particular. Se ainda tiver acesso para gastar, mas não conseguir estabelecer um backup de recuperação utilizável, crie uma nova carteira com backup verificado e transfira os fundos com cuidado. Não exclua a carteira antiga durante a investigação.

Faça novamente o backup dos metadados locais após alterações importantes nos rótulos ou nas configurações. Receber mais bitcoin normalmente não exige um novo conjunto de palavras de recuperação, mas uma nova carteira ou uma frase-senha diferente exige.

<span id="what-about-labels-and-computer-files" data-ginger-heading="e-os-rótulos-e-arquivos-do-computador" aria-hidden="true"></span>

## E os rótulos e arquivos do computador?

As palavras de recuperação não restauram todos os rótulos, configurações ou registros de pedidos de provedores. Os backups automáticos locais ficam no mesmo computador, portanto não protegem contra a perda do computador inteiro.

Referência avançada opcional: [arquivos da carteira, metadados e detalhes da frase-senha](/pt-br/backup-recovery/backup-files/). Ela explica as cópias de arquivos e os arquivos relacionados à autenticação de dois fatores separadamente do backup essencial das palavras.
