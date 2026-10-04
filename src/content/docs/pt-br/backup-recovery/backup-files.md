---
doc_id: "backup-recovery.backup-files"
title: "Arquivos da carteira, metadados e detalhes da frase de senha"
description: "Preserve os arquivos JSON e ATTR da carteira Ginger, entenda a dependência do arquivo de 2FA e mantenha uma frase de senha recuperável sem substituir o backup básico das palavras."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Preserve as informações de recuperação originais e os arquivos da carteira antes de alterar a configuração de recuperação ou dos arquivos.

Use esta referência ao copiar dados locais da carteira ou investigar o que um backup preserva. Comece pelo [guia básico de backup](/pt-br/backup-recovery/backups/) para as informações de recuperação necessárias a toda carteira de software.

<span id="what-to-keep" data-ginger-heading="o-que-guardar" aria-hidden="true"></span>

## O que guardar

| Item do backup | Finalidade | Limite importante |
| --- | --- | --- |
| Palavras de recuperação, em ordem | Recriar as chaves da carteira | Exigem a frase de senha original quando ela foi usada |
| Frase de senha original, incluindo maiúsculas, minúsculas e caracteres | Selecionar a carteira BIP39 correta e desbloquear seu segredo protegido | O Ginger não pode redefini-la |
| Arquivo `.json` da carteira | Preservar as informações armazenadas de chaves e sincronização da carteira | Um arquivo criptografado ainda exige suas credenciais; a 2FA pode acrescentar uma dependência de serviço |
| Arquivo `.attr` correspondente | Preservar os rótulos locais e os atributos específicos da carteira | Contém metadados sensíveis; as palavras de recuperação não o restauram |
| Backup de recuperação do dispositivo de hardware | Recuperar as chaves usando o processo do fabricante do hardware | Mantenha-o fora do computador |

A pasta local de backups automáticos fica no mesmo computador. Ela pode ajudar após danos em um arquivo da carteira, mas não protege contra perda do disco inteiro, roubo ou ransomware.

<span id="make-a-file-backup" data-ginger-heading="faça-um-backup-dos-arquivos" aria-hidden="true"></span>

## Faça um backup dos arquivos

Use a pesquisa do Ginger para abrir **Data Folder**. Anote o local e feche o Ginger normalmente antes de copiar os arquivos. Em uma pasta de dados normal da mainnet, `Wallets` contém os arquivos `.json` das carteiras e os arquivos `.attr` associados, e `WalletBackups` contém os backups automáticos das carteiras. Outras redes usam subpastas separadas.

Copie os arquivos relevantes para um armazenamento de backup protegido, preservando os nomes e a associação entre cada arquivo JSON e ATTR. Uma cópia da pasta de dados é sensível à privacidade mesmo se você definir uma frase de senha: endereços, rótulos, logs, configurações e metadados de pedidos podem revelar atividades. Não a envie a um rastreador de problemas nem ao suporte por e-mail.

Com a 2FA ativada, preserve também `2fa_info.gws`, mas não o confunda com uma chave de recuperação independente. Ele registra um identificador usado com o serviço de 2FA do Ginger. As palavras de recuperação e a frase de senha original continuam sendo o caminho que não depende de descriptografar aquele arquivo local específico da carteira.

<span id="choose-and-preserve-a-passphrase" data-ginger-heading="escolha-e-preserve-uma-frase-de-senha" aria-hidden="true"></span>

## Escolha e preserve uma frase de senha

Use uma frase de senha difícil de adivinhar por outra pessoa e que você consiga reproduzir exatamente. Palavras selecionadas aleatoriamente de uma lista definida ou uma senha forte gerada por um gerenciador de senhas confiável podem evitar a previsibilidade de nomes, datas, citações e frases comuns. Substituições escolhidas por pessoas para “parecerem aleatórias” costumam ser menos imprevisíveis do que parecem.

A entropia descreve a imprevisibilidade em um determinado processo de geração; o comprimento, por si só, não a estabelece. Seis palavras escolhidas uniformemente de uma lista grande e seis palavras escolhidas de uma letra de música favorita não têm a mesma resistência a tentativas de adivinhação. Este manual não promete que uma quantidade específica de caracteres resista a todos os ataques.

Registre com precisão o resultado gerado e confirme que seu plano de recuperação o preserva. Evite espaços no início ou no fim: a validação de entrada do Ginger pode removê-los ou rejeitá-los. Um gerenciador de senhas pode ajudar a guardar uma frase de senha forte, mas planeje como acessar esse gerenciador após perder o mesmo computador. Armazenar as palavras e a frase de senha juntas cria um ponto único de comprometimento; separá-las cria uma dependência adicional para a recuperação. Escolha uma organização que realmente consiga manter.

Em uma carteira de software Ginger, a frase de senha também protege o segredo criptografado armazenado. Por isso, não se deve presumir que um ladrão do arquivo ou uma tentativa de recuperação terá sucesso sem ela. Não altere casualmente a frase de senha em outro aplicativo de carteira: uma frase de senha BIP39 diferente seleciona chaves diferentes, em vez de apenas renomear a senha de acesso da carteira antiga.

Para compatibilidade de contas, importação de arquivos ou uma busca que não encontrou endereços, use as [opções avançadas de recuperação](/pt-br/backup-recovery/recovery-options/).

<span id="a-single-private-key-is-not-the-full-recovery-backup" data-ginger-heading="uma-única-chave-privada-não-é-o-backup-completo-de-recuperação" aria-hidden="true"></span>

## Uma única chave privada não é o backup completo de recuperação

Uma moeda física previamente carregada cujo fabricante gerou a chave exige confiar que ele não guardou essa chave. Uma única chave privada impressa ou um segredo do fabricante não é o backup completo das palavras de recuperação do Ginger. Preserve as palavras e a frase de senha original da carteira de software, em vez de presumir que uma única chave exportada cubra todos os seus endereços.
