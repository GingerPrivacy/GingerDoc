---
doc_id: "backup-recovery.restore"
title: "Recupere uma carteira ou um saldo ausente"
description: "Recupere uma carteira Ginger com suas palavras e frase de segurança originais e confira a carteira selecionada e o progresso da pesquisa antes de investigar casos especiais de recuperação."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nível de leitura: Utilização quotidiana. Escolha este guia quando precisar realizar a tarefa que ele descreve.

A recuperação é uma pesquisa por chaves e seu histórico de transações. Antes de começar, preserve os ficheiros da carteira do computador antigo se conseguir aceder-lhes. Trabalhe com cópias e mantenha os originais até verificar a carteira recuperada.

<span id="recover-from-words" data-ginger-heading="recupere-a-partir-das-palavras" aria-hidden="true"></span>

## Recupere a partir das palavras

1. Instale e verifique o Ginger num computador de confiança. No ecrã de adição de carteira, escolha **Recover**.
2. Informe um **Wallet Name** se for solicitado. Use um nome diferente para evitar confundi-la com uma carteira existente.
3. Insira as palavras de recuperação originais na ordem correta. Use a cópia de segurança real, não um conjunto de palavras recém-gerado.
4. Em **Enter Passphrase**, insira a frase de segurança usada para criar a carteira original. Deixe o campo vazio apenas se a carteira original não tinha frase de segurança. Não está a definir uma palavra-passe substituta.
5. Aguarde o fim da sincronização e da recuperação. Confira as transações e os endereços de receção conhecidos, não apenas o valor exibido em moeda fiduciária. Algumas ações normais da carteira ficam ocultas durante a recuperação.

Frases de segurança diferentes derivam carteiras válidas diferentes. Um erro de introdução pode, portanto, produzir uma carteira vazia sem um erro de “frase de segurança incorreta” durante a recuperação da semente. Confira maiúsculas e minúsculas, espaços, disposição do teclado e a cópia de segurança original antes de concluir que os fundos desapareceram.

<span id="an-apparently-empty-recovered-wallet" data-ginger-heading="uma-carteira-recuperada-aparentemente-vazia" aria-hidden="true"></span>

## Uma carteira recuperada aparentemente vazia

Primeiro, confira se selecionou a carteira e a rede pretendidas. A mainnet e as redes de teste têm moedas separadas. Em seguida, confira a ligação e o progresso da recuperação. Se o programa ainda estiver a pesquisar, um saldo incompleto não é um resultado final.

Se essas verificações estiverem corretas, mas as transações conhecidas continuarem ausentes, pare de alterar definições aleatoriamente. Uma carteira criada noutro programa ou uma grande quantidade de endereços não utilizados pode exigir uma investigação mais específica.

Referência avançada opcional: [contas, pesquisa de endereços e importação de ficheiros](/pt-pt/backup-recovery/recovery-options/). Ela aborda esses casos sem transformar definições personalizadas de recuperação em parte dos passos normais de recuperação pelas palavras.

A recuperação pelas palavras restaura o acesso às chaves correspondentes. Etiquetas privadas e outros registos locais podem precisar de uma cópia de segurança separada dos ficheiros.

<span id="if-something-is-missing" data-ginger-heading="se-faltar-alguma-coisa" aria-hidden="true"></span>

## Se faltar alguma coisa

| O que ainda tem | Próximo passo prático |
| --- | --- |
| Palavras e a frase de segurança original | Recupere numa instalação de confiança |
| Carteira acessível, mas palavras ausentes ou inválidas | Crie uma nova carteira com cópia de segurança e transfira os fundos enquanto ainda tiver acesso |
| Ficheiro da carteira e suas credenciais originais | Tente importar uma cópia; preserve todos os ficheiros associados |
| Palavras, mas uma frase de segurança não vazia esquecida | O Ginger não pode redefini-la; não confunda uma carteira recuperada vazia com uma recuperação bem-sucedida |
| Dispositivo de hardware, mas nenhuma cópia de segurança de confiança | Siga o processo de verificação de cópia de segurança do fabricante antes de colocar o dispositivo em risco |
| Nem acesso para gastar nem informações de recuperação utilizáveis | O apoio não pode produzir as chaves ausentes |

Nunca forneça suas palavras, frase de segurança, chaves privadas ou ficheiro da carteira a um “ajudante de recuperação”. Um diagnóstico legítimo começa com informações não secretas, como versão do programa, rede e texto do erro.
