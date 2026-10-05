---
doc_id: "backup-recovery.two-factor-authentication"
title: "Use a autenticação de dois fatores no Ginger"
description: "Configure a autenticação de dois fatores do Ginger e entenda a criptografia dos arquivos de carteira, a exigência do Tor e os limites de recuperação."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-the-default-2fa-state-of-gingerwallet"></span>
<span id="how-do-i-enable-2fa-in-gingerwallet"></span>
<span id="how-do-i-set-up-2fa-using-an-authenticator-app"></span>
<span id="what-is-the-purpose-of-the-2fagws-file"></span>
<span id="do-i-need-to-restart-the-application-after-enabling-2fa"></span>
<span id="how-does-the-login-process-change-after-enabling-2fa"></span>
<span id="how-do-i-disable-2fa"></span>
<span id="what-should-i-do-if-i-change-devices-or-lose-data"></span>
<span id="what-are-the-security-best-practices-for-using-gingerwallet"></span>
<span id="does-gingerwallet-store-any-personal-information"></span>
<span id="what-happens-if-i-lose-access-to-my-authenticator-app"></span>
<span id="how-does-gingerwallet-ensure-security-with-2fa"></span>
<span id="how-can-i-recover-my-labels-and-extra-options-for-my-wallet-if-ive-lost-the-2fa-key"></span>
<span id="why-does-ginger-wallet-require-an-8-digit-2fa-code"></span>
<span id="what-should-i-do-if-my-authenticator-app-only-provides-6-digit-codes"></span>

> Nível de leitura: Guia avançado. Preserve as informações originais de recuperação e os arquivos de carteira antes de alterar a configuração de recuperação ou dos arquivos.

A autenticação de dois fatores (2FA) opcional do Ginger acrescenta uma verificação na inicialização do aplicativo e criptografa os arquivos locais de carteira. Ela é independente da frase-senha de cada carteira. Não é uma regra do Bitcoin que exija uma segunda assinatura para cada gasto e não protege um backup das palavras de recuperação contra alguém que também conheça sua frase-senha.

<span id="understand-the-dependency-first" data-ginger-heading="entenda-primeiro-a-dependência" aria-hidden="true"></span>

## Entenda primeiro a dependência

O Ginger verifica o código do autenticador com seu serviço de 2FA e obtém o segredo necessário para descriptografar os arquivos de carteira protegidos. Portanto, o processo normal de inicialização com 2FA exige uma conexão funcional com esse serviço. O Tor precisa estar ativado para usar esse recurso.

O arquivo local `2fa_info.gws` armazena um identificador de cliente e servidor. Ele não é uma cópia criptografada das suas palavras de recuperação nem uma chave de recuperação autossuficiente. Copiar apenas esse arquivo não recupera uma carteira. Nem a frase-senha de uma carteira nem a ativação de 2FA significam que todos os rótulos, logs ou arquivos auxiliares recebam a mesma criptografia. Proteja toda a pasta de dados e seus backups.

Antes de ativar 2FA, verifique se você tem as palavras de recuperação e a frase-senha original exata de cada carteira de software que precisa recuperar. Mantenha também cópias protegidas dos arquivos de carteira e de metadados.

<span id="enable-2fa" data-ginger-heading="ative-2fa" aria-hidden="true"></span>

## Ative 2FA

1. Abra **Settings** → **Security**. Ative **Network anonymization (Tor)** se necessário e reinicie quando solicitado para que o Tor fique ativo.
2. Ative **Two-factor authentication**. A caixa de diálogo de configuração exibe um código QR para um autenticador.
3. Adicione esse código QR ao seu autenticador em particular. Ele contém um segredo, portanto não o compartilhe. A configuração do Ginger exige um autenticador compatível com SHA256 e códigos de oito dígitos; uma entrada padrão de seis dígitos criada manualmente não é equivalente.
4. Digite o código atual e escolha **Verify**. Se a verificação falhar, confira a sincronização de horário do celular e se a entrada foi criada a partir dessa configuração.
5. Reinicie o Ginger conforme as instruções. Complete a solicitação de 2FA na inicialização. Após uma inicialização autenticada bem-sucedida, o Ginger obtém o segredo de criptografia e garante que os arquivos JSON da carteira e dos backups automáticos da carteira estejam criptografados.

Não presuma que arquivos copiados antes da configuração ou antes da reinicialização autenticada tenham recebido a nova proteção. Proteja esses backups anteriores de forma independente. Ativar o interruptor não é motivo para apagar o único material de recuperação que você sabe que funciona.

<span id="everyday-use-and-disabling" data-ginger-heading="uso-cotidiano-e-desativação" aria-hidden="true"></span>

## Uso cotidiano e desativação

Na inicialização, digite o código atual do autenticador. Depois que o aplicativo carregar, as frases-senha das carteiras individuais e as aprovações dos dispositivos de hardware ainda terão suas próprias funções. Um computador já desbloqueado continua sendo uma preocupação de segurança.

Para desativar 2FA enquanto você tem acesso, abra **Settings** → **Security** e desative **Two-factor authentication**. O Ginger remove a criptografia adicional dos arquivos de carteira e sua associação local com 2FA. A proteção normal por frase-senha da carteira de software é independente e continua relevante. Faça backup dos arquivos resultantes se seu procedimento de backup depender do estado atual de criptografia deles.

<span id="lost-phone-missing-file-or-unavailable-service" data-ginger-heading="celular-perdido-arquivo-ausente-ou-serviço-indisponível" aria-hidden="true"></span>

## Celular perdido, arquivo ausente ou serviço indisponível

A perda do autenticador ou uma interrupção do serviço podem impedir a inicialização normal. Primeiro, preserve a pasta de dados existente. Se um código for rejeitado, verifique o horário e a conectividade; reinstalar repetidamente sobre os mesmos dados não recria um segredo de autenticador perdido.

Para recuperar os fundos de uma carteira de software, use uma instalação confiável separada ou um ambiente limpo do aplicativo e restaure com as palavras e a frase-senha originais. Verifique o histórico conhecido e o acesso antes de alterar os arquivos antigos. As chaves recuperadas não dependem de manter a configuração antiga de 2FA, mas baixar e sincronizar o Ginger ainda exige seus serviços normais de rede. Um software de recuperação compatível pode ser uma opção se aceitar os tipos de conta originais.

Os rótulos e outros atributos locais não são reconstruídos a partir das palavras. Preserve seus backups `.attr` antes de investigar a recuperação dos metadados. Preserve os dados de carteira existentes ao configurar 2FA ou solucionar problemas com ele.

Se o material de recuperação foi exposto, criar uma carteira nova e transferir os fundos restantes muda quais chaves os controlam. Desativar 2FA ou reinstalar o aplicativo não invalida as palavras de recuperação antigas.
