---
doc_id: "backup-recovery.backup-files"
title: "Ficheiros da carteira, metadados e detalhes da frase de segurança"
description: "Preserve os ficheiros JSON e ATTR da carteira Ginger, compreenda a dependência do ficheiro de 2FA e mantenha uma frase de segurança recuperável sem substituir a cópia de segurança básica das palavras."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Preserve as informações de recuperação originais e os ficheiros da carteira antes de alterar a configuração de recuperação ou dos ficheiros.

Use esta referência ao copiar dados locais da carteira ou investigar o que uma cópia de segurança preserva. Comece pelo [guia básico de cópia de segurança](/pt-pt/backup-recovery/backups/) para as informações de recuperação necessárias a toda carteira de software.

<span id="what-to-keep" data-ginger-heading="o-que-guardar" aria-hidden="true"></span>

## O que guardar

| Item da cópia de segurança | Finalidade | Limite importante |
| --- | --- | --- |
| Palavras de recuperação, em ordem | Recriar as chaves da carteira | Exigem a frase de segurança original quando ela foi usada |
| Frase de segurança original, incluindo maiúsculas, minúsculas e caracteres | Selecionar a carteira BIP39 correta e desbloquear seu segredo protegido | O Ginger não pode redefini-la |
| Ficheiro `.json` da carteira | Preservar as informações armazenadas de chaves e sincronização da carteira | Um ficheiro encriptado ainda exige suas credenciais; a 2FA pode acrescentar uma dependência de serviço |
| Ficheiro `.attr` correspondente | Preservar as etiquetas locais e os atributos específicos da carteira | Contém metadados sensíveis; as palavras de recuperação não o restauram |
| Cópia de segurança de recuperação do dispositivo de hardware | Recuperar as chaves usando o processo do fabricante do hardware | Mantenha-a fora do computador |

A pasta local de cópias de segurança automáticas fica no mesmo computador. Ela pode ajudar após danos num ficheiro da carteira, mas não protege contra perda do disco inteiro, roubo ou ransomware.

<span id="make-a-file-backup" data-ginger-heading="faça-uma-cópia-de-segurança-dos-ficheiros" aria-hidden="true"></span>

## Faça uma cópia de segurança dos ficheiros

Use a pesquisa do Ginger para abrir **Data Folder**. Anote o local e feche o Ginger normalmente antes de copiar os ficheiros. Numa pasta de dados normal da mainnet, `Wallets` contém os ficheiros `.json` das carteiras e os ficheiros `.attr` associados, e `WalletBackups` contém as cópias de segurança automáticas das carteiras. Outras redes usam subpastas separadas.

Copie os ficheiros relevantes para um armazenamento de cópia de segurança protegido, preservando os nomes e a associação entre cada ficheiro JSON e ATTR. Uma cópia da pasta de dados é sensível à privacidade mesmo se definir uma frase de segurança: endereços, etiquetas, logs, definições e metadados de pedidos podem revelar atividades. Não a envie a um sistema de registo de problemas nem ao apoio por e-mail.

Com a 2FA ativada, preserve também `2fa_info.gws`, mas não o confunda com uma chave de recuperação independente. Ele regista um identificador usado com o serviço de 2FA do Ginger. As palavras de recuperação e a frase de segurança original continuam a ser o caminho que não depende de desencriptar aquele ficheiro local específico da carteira.

<span id="choose-and-preserve-a-passphrase" data-ginger-heading="escolha-e-preserve-uma-frase-de-segurança" aria-hidden="true"></span>

## Escolha e preserve uma frase de segurança

Use uma frase de segurança difícil de adivinhar por outra pessoa e que consiga reproduzir exatamente. Palavras selecionadas aleatoriamente de uma lista definida ou uma palavra-passe forte gerada por um gestor de palavras-passe de confiança podem evitar a previsibilidade de nomes, datas, citações e frases comuns. Substituições escolhidas por pessoas para “parecerem aleatórias” costumam ser menos imprevisíveis do que parecem.

A entropia descreve a imprevisibilidade num determinado processo de geração; o comprimento, por si só, não a estabelece. Seis palavras escolhidas uniformemente de uma lista grande e seis palavras escolhidas de uma letra de música favorita não têm a mesma resistência a tentativas de adivinhação. Este manual não promete que uma quantidade específica de caracteres resista a todos os ataques.

Registe com precisão o resultado gerado e confirme que seu plano de recuperação o preserva. Evite espaços no início ou no fim: a validação de entrada do Ginger pode removê-los ou rejeitá-los. Um gestor de palavras-passe pode ajudar a guardar uma frase de segurança forte, mas planeie como aceder a esse gestor após perder o mesmo computador. Armazenar as palavras e a frase de segurança juntas cria um ponto único de comprometimento; separá-las cria uma dependência adicional para a recuperação. Escolha uma organização que realmente consiga manter.

Numa carteira de software Ginger, a frase de segurança também protege o segredo encriptado armazenado. Por isso, não se deve presumir que um ladrão do ficheiro ou uma tentativa de recuperação terá sucesso sem ela. Não altere casualmente a frase de segurança noutro programa de carteira: uma frase de segurança BIP39 diferente seleciona chaves diferentes, em vez de apenas renomear a palavra-passe de acesso da carteira antiga.

Para compatibilidade de contas, importação de ficheiros ou uma pesquisa que não encontrou endereços, use as [opções avançadas de recuperação](/pt-pt/backup-recovery/recovery-options/).

<span id="a-single-private-key-is-not-the-full-recovery-backup" data-ginger-heading="uma-única-chave-privada-não-é-a-cópia-de-segurança-completa-de-recuperação" aria-hidden="true"></span>

## Uma única chave privada não é a cópia de segurança completa de recuperação

Uma moeda física previamente carregada cujo fabricante gerou a chave exige confiar que ele não guardou essa chave. Uma única chave privada impressa ou um segredo do fabricante não é a cópia de segurança completa das palavras de recuperação do Ginger. Preserve as palavras e a frase de segurança original da carteira de software, em vez de presumir que uma única chave exportada cubra todos os seus endereços.
