---
doc_id: "backup-recovery.two-factor-authentication"
title: "Use a autenticação de dois fatores no Ginger"
description: "Configure a autenticação de dois fatores do Ginger e compreenda a encriptação dos ficheiros de carteira, a exigência do Tor e os limites de recuperação."
lang: "pt-PT"
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

> Nível de leitura: Guia avançado. Preserve as informações originais de recuperação e os ficheiros de carteira antes de alterar a configuração de recuperação ou dos ficheiros.

A autenticação de dois fatores (2FA) opcional do Ginger acrescenta uma verificação no arranque do programa e encripta os ficheiros locais de carteira. É independente da frase de segurança de cada carteira. Não é uma regra do Bitcoin que exija uma segunda assinatura para cada gasto e não protege uma cópia de segurança das palavras de recuperação contra alguém que também conheça a sua frase de segurança.

<span id="understand-the-dependency-first" data-ginger-heading="compreenda-primeiro-a-dependência" aria-hidden="true"></span>

## Compreenda primeiro a dependência

O Ginger verifica o código do autenticador com o seu serviço de 2FA e obtém o segredo necessário para desencriptar os ficheiros de carteira protegidos. Portanto, o processo normal de arranque com 2FA exige uma ligação funcional com esse serviço. O Tor precisa de estar ativado para usar essa funcionalidade.

O ficheiro local `2fa_info.gws` armazena um identificador de cliente e servidor. Ele não é uma cópia encriptada das suas palavras de recuperação nem uma chave de recuperação autossuficiente. Copiar apenas esse ficheiro não recupera uma carteira. Nem a frase de segurança de uma carteira nem a ativação de 2FA significam que todas as etiquetas, logs ou ficheiros auxiliares recebam a mesma encriptação. Proteja toda a pasta de dados e as suas cópias de segurança.

Antes de ativar 2FA, verifique se tem as palavras de recuperação e a frase de segurança original exata de cada carteira de software que precisa recuperar. Mantenha também cópias protegidas dos ficheiros de carteira e de metadados.

<span id="enable-2fa" data-ginger-heading="ative-2fa" aria-hidden="true"></span>

## Ative 2FA

1. Abra **Settings** → **Security**. Ative **Network anonymization (Tor)** se necessário e reinicie quando solicitado para que o Tor fique ativo.
2. Ative **Two-factor authentication**. A caixa de diálogo de configuração exibe um código QR para um autenticador.
3. Adicione esse código QR ao seu autenticador em particular. Ele contém um segredo, portanto não o partilhe. A configuração do Ginger exige um autenticador compatível com SHA256 e códigos de oito dígitos; uma entrada predefinida de seis dígitos criada manualmente não é equivalente.
4. Introduza o código atual e escolha **Verify**. Se a verificação falhar, confira a sincronização de horário do telemóvel e se a entrada foi criada a partir dessa configuração.
5. Reinicie o Ginger conforme as instruções. Conclua o pedido de 2FA no arranque. Após um arranque autenticado bem-sucedido, o Ginger obtém o segredo de encriptação e garante que os ficheiros JSON da carteira e das cópias de segurança automáticas da carteira estejam encriptados.

Não presuma que ficheiros copiados antes da configuração ou antes da reinicialização autenticada tenham recebido a nova proteção. Proteja essas cópias de segurança anteriores de forma independente. Ativar o interruptor não é motivo para apagar o único material de recuperação que sabe que funciona.

<span id="everyday-use-and-disabling" data-ginger-heading="utilização-quotidiana-e-desativação" aria-hidden="true"></span>

## Utilização quotidiana e desativação

No arranque, introduza o código atual do autenticador. Depois de o programa carregar, as frases de segurança das carteiras individuais e as aprovações dos dispositivos de hardware continuarão a ter as suas próprias funções. Um computador já desbloqueado continua a ser uma preocupação de segurança.

Para desativar 2FA enquanto tem acesso, abra **Settings** → **Security** e desative **Two-factor authentication**. O Ginger remove a encriptação adicional dos ficheiros de carteira e a sua associação local com 2FA. A proteção normal por frase de segurança da carteira de software é independente e continua relevante. Faça uma cópia de segurança dos ficheiros resultantes se o seu procedimento de cópia de segurança depender do estado atual de encriptação deles.

<span id="lost-phone-missing-file-or-unavailable-service" data-ginger-heading="telemóvel-perdido-ficheiro-ausente-ou-serviço-indisponível" aria-hidden="true"></span>

## Telemóvel perdido, ficheiro ausente ou serviço indisponível

A perda do autenticador ou uma interrupção do serviço podem impedir o arranque normal. Primeiro, preserve a pasta de dados existente. Se um código for rejeitado, verifique o horário e a conectividade; reinstalar repetidamente sobre os mesmos dados não recria um segredo de autenticador perdido.

Para recuperar os fundos de uma carteira de software, use uma instalação de confiança separada ou um ambiente limpo do programa e restaure com as palavras e a frase de segurança originais. Verifique o histórico conhecido e o acesso antes de alterar os ficheiros antigos. As chaves recuperadas não dependem de manter a configuração antiga de 2FA, mas descarregar e sincronizar o Ginger ainda exige seus serviços normais de rede. Um software de recuperação compatível pode ser uma opção se aceitar os tipos de conta originais.

As etiquetas e outros atributos locais não são reconstruídos a partir das palavras. Preserve as suas cópias de segurança `.attr` antes de investigar a recuperação dos metadados. Preserve os dados de carteira existentes ao configurar 2FA ou resolver problemas com a 2FA.

Se o material de recuperação foi exposto, criar uma carteira nova e transferir os fundos restantes muda quais chaves os controlam. Desativar 2FA ou reinstalar o programa não invalida as palavras de recuperação antigas.
