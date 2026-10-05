---
doc_id: "backup-recovery.restore"
title: "Recupere uma carteira ou um saldo ausente"
description: "Recupere uma carteira Ginger com suas palavras e frase-senha originais e confira a carteira selecionada e o progresso da busca antes de investigar casos especiais de recuperação."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nível de leitura: Uso cotidiano. Escolha este guia quando precisar realizar a tarefa que ele descreve.

A recuperação é uma busca por chaves e seu histórico de transações. Antes de começar, preserve os arquivos da carteira do computador antigo se conseguir acessá-los. Trabalhe com cópias e mantenha os originais até verificar a carteira recuperada.

<span id="recover-from-words" data-ginger-heading="recupere-a-partir-das-palavras" aria-hidden="true"></span>

## Recupere a partir das palavras

1. Instale e verifique o Ginger em um computador confiável. Na tela de adição de carteira, escolha **Recover**.
2. Informe um **Wallet Name** se for solicitado. Use um nome diferente para evitar confundi-la com uma carteira existente.
3. Insira as palavras de recuperação originais na ordem correta. Use o backup real, não um conjunto de palavras recém-gerado.
4. Em **Enter Passphrase**, insira a frase-senha usada para criar a carteira original. Deixe o campo vazio apenas se a carteira original não tinha frase-senha. Você não está definindo uma senha substituta.
5. Aguarde o término da sincronização e da recuperação. Confira as transações e os endereços de recebimento conhecidos, não apenas o valor exibido em moeda fiduciária. Algumas ações normais da carteira ficam ocultas durante a recuperação.

Frases-senha diferentes derivam carteiras válidas diferentes. Um erro de digitação pode, portanto, produzir uma carteira vazia sem um erro de “frase-senha incorreta” durante a recuperação da semente. Confira maiúsculas e minúsculas, espaços, layout do teclado e o backup original antes de concluir que os fundos desapareceram.

<span id="an-apparently-empty-recovered-wallet" data-ginger-heading="uma-carteira-recuperada-aparentemente-vazia" aria-hidden="true"></span>

## Uma carteira recuperada aparentemente vazia

Primeiro, confira se você selecionou a carteira e a rede pretendidas. A mainnet e as redes de teste têm moedas separadas. Em seguida, confira a conexão e o progresso da recuperação. Se o aplicativo ainda estiver buscando, um saldo incompleto não é um resultado final.

Se essas verificações estiverem corretas, mas as transações conhecidas continuarem ausentes, pare de alterar configurações aleatoriamente. Uma carteira criada em outro aplicativo ou uma grande quantidade de endereços não utilizados pode exigir uma investigação mais específica.

Referência avançada opcional: [contas, busca de endereços e importação de arquivos](/pt-br/backup-recovery/recovery-options/). Ela aborda esses casos sem transformar configurações personalizadas de recuperação em parte dos passos normais de recuperação pelas palavras.

A recuperação pelas palavras restaura o acesso às chaves correspondentes. Rótulos privados e outros registros locais podem precisar de um backup separado dos arquivos.

<span id="if-something-is-missing" data-ginger-heading="se-algo-estiver-faltando" aria-hidden="true"></span>

## Se algo estiver faltando

| O que você ainda tem | Próximo passo prático |
| --- | --- |
| Palavras e a frase-senha original | Recupere em uma instalação confiável |
| Carteira acessível, mas palavras ausentes ou inválidas | Crie uma nova carteira com backup e transfira os fundos enquanto ainda tiver acesso |
| Arquivo da carteira e suas credenciais originais | Tente importar uma cópia; preserve todos os arquivos associados |
| Palavras, mas uma frase-senha não vazia esquecida | O Ginger não pode redefini-la; não confunda uma carteira recuperada vazia com uma recuperação bem-sucedida |
| Dispositivo de hardware, mas nenhum backup confiável | Siga o processo de verificação de backup do fabricante antes de colocar o dispositivo em risco |
| Nem acesso para gastar nem informações de recuperação utilizáveis | O suporte não pode produzir as chaves ausentes |

Nunca forneça suas palavras, frase-senha, chaves privadas ou arquivo da carteira a um “ajudante de recuperação”. Um diagnóstico legítimo começa com informações não secretas, como versão do aplicativo, rede e texto do erro.
