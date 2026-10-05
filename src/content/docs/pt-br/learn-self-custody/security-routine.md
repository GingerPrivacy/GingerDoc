---
doc_id: "learn-self-custody.security-routine"
title: "Crie uma rotina de segurança Bitcoin que permita a recuperação"
description: "Crie uma rotina de segurança Bitcoin que permita a recuperação e responda adequadamente à exposição de endereços, xpubs, arquivos da carteira, palavras de recuperação ou dispositivos."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Mantenha disponível o backup básico de recuperação; use os passos de incidente correspondentes às informações expostas.

Uma rotina de segurança útil protege contra acesso não autorizado e mantém um caminho compreensível para a recuperação legítima. Acrescentar segredos sem documentar suas funções pode aumentar a probabilidade de perda acidental.

<span id="record-the-recovery-plan" data-ginger-heading="registre-o-plano-de-recuperação" aria-hidden="true"></span>

## Registre o plano de recuperação

Mantenha um inventário privado de suas carteiras, do tipo de assinador usado por cada uma, dos locais dos backups e de quais exigem uma frase-senha BIP39. O inventário não precisa conter os próprios segredos. Ele deve ser útil após a perda do computador ou celular, não apenas enquanto você lembra como tudo foi configurado.

Preserve informações suficientes sobre as convenções da carteira para reconhecer a conta correta após a recuperação, especialmente ao usar dispositivos de hardware ou várias carteiras. Mantenha backups de rótulos e metadados quando forem importantes para os registros; a blockchain não pode reconstruir as anotações privadas que você escreveu.

Se pretende que outra pessoa recupere os fundos após incapacidade ou morte, organize um plano de acesso claro, testado e adequado às suas circunstâncias. Evite compartilhar casualmente todos os segredos agora ou presumir que essa pessoa irá adivinhar a qual senha você se referia. A organização de sucessão e acesso pode ter implicações jurídicas que exigem orientação profissional local; esta página não prescreve uma estrutura jurídica.

<span id="check-before-funding-and-before-signing" data-ginger-heading="confira-antes-de-colocar-fundos-e-antes-de-assinar" aria-hidden="true"></span>

## Confira antes de colocar fundos e antes de assinar

Verifique o download do aplicativo, confirme que a carteira abre e confira o backup. Para uma carteira de hardware, compare os endereços de recebimento no dispositivo e inspecione o destino e o valor de cada pagamento antes de assinar.

Use uma quantia pequena para aprender um novo procedimento. Concilie o que foi enviado, o que chegou e quais taxas foram pagas. Aumentar o valor não torna um procedimento desconhecido mais fácil de diagnosticar.

Mantenha o computador e o dispositivo de assinatura atualizados por fontes autenticadas. Um aviso de atualização em mensagem privada não comprova que um arquivo é legítimo. Nunca instale “software de recuperação” nem permita controle remoto apenas porque um desconhecido diz que suas moedas precisam de sincronização.

<span id="understand-ginger-2fa" data-ginger-heading="entenda-a-2fa-do-ginger" aria-hidden="true"></span>

## Entenda a 2FA do Ginger

A 2FA opcional do Ginger acrescenta criptografia dos arquivos locais da carteira e uma verificação de inicialização com um serviço. Ela pode ser útil contra algumas formas de acesso a arquivos locais, mas introduz uma dependência do autenticador e do serviço na inicialização normal.

Mantenha as palavras de recuperação e a frase-senha original disponíveis de forma independente. Não presuma que `2fa_info.gws` seja uma chave mestra de recuperação offline. Tampouco presuma que a 2FA impedirá um invasor que já tenha as palavras e a frase-senha ou que impedirá uma transação autorizada em um aplicativo desbloqueado.

<span id="first-identify-what-was-exposed" data-ginger-heading="primeiro-identifique-o-que-foi-exposto" aria-hidden="true"></span>

## Primeiro, identifique o que foi exposto

Uma exposição de endereço e uma exposição de palavras de recuperação exigem respostas diferentes. Evite copiar o material suspeito para uma publicação pública ou um “verificador de carteira” desconhecido para diagnosticá-lo.

| Item exposto | O que ele pode permitir | Primeira resposta |
| --- | --- | --- |
| Um endereço de recebimento ou identificador de transação | Observar esse endereço ou transação e seguir possíveis vínculos; não fornece chaves de assinatura | Interrompa reutilizações e divulgações desnecessárias; confira quais identidades e pagamentos foram vinculados |
| Rótulos, registros de pedidos ou exportação de histórico da carteira | Associar transações que estariam separadas a pessoas, finalidades ou saldos | Restrinja o acesso, preserve uma cópia privada se necessário e altere a forma de compartilhar os registros |
| Uma chave pública estendida, frequentemente chamada xpub | Monitorar endereços no escopo de derivação coberto, potencialmente incluindo futuros; normalmente não autoriza gastos por si só | Identifique a conta ou ramo afetado e considere uma nova carteira se o monitoramento contínuo for inaceitável |
| Um arquivo de carteira ou uma cópia de todos os dados do aplicativo | A exposição depende da criptografia, das senhas disponíveis e dos outros arquivos copiados; pode incluir chaves e metadados privados | Trate a incerteza com seriedade e avalie a exposição das chaves de assinatura em um ambiente confiável |
| Palavras de recuperação e qualquer frase-senha exigida, ou chaves privadas utilizáveis | Gastar fundos e derivar mais chaves no escopo comprometido | Prepare uma nova carteira com novas chaves em um dispositivo confiável e mova os fundos que ainda controla |
| Um computador roubado, aplicativo desbloqueado ou sessão de controle remoto | Dependendo do estado, acesso aos dados da carteira, operações de assinatura e outras contas | Encerre o acesso não autorizado e use um dispositivo confiável para avaliar e proteger os fundos restantes |

Uma chave pública estendida não necessariamente mostra todas as contas de um dispositivo; seu escopo de derivação importa. Porém, gerar outro endereço de recebimento em um ramo público divulgado normalmente não impede que o monitoramento desse ramo continue. [A BIP32 descreve esses limites de derivação de chaves públicas](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).

Se apenas as palavras de recuperação foram divulgadas e você usava uma frase-senha separada, o risco também depende de ela continuar secreta e de sua dificuldade de adivinhação. Não presuma que uma frase-senha desconhecida ou fraca torne o backup exposto seguro indefinidamente. Se as evidências forem incompletas e a exposição puder autorizar gastos, use a resposta à exposição de chaves.

<span id="respond-to-exposed-signing-keys" data-ginger-heading="responda-à-exposição-de-chaves-de-assinatura" aria-hidden="true"></span>

## Responda à exposição de chaves de assinatura

Alterar a senha do computador, desativar a 2FA ou reinstalar o Ginger não revoga chaves Bitcoin copiadas. Alterar o nome de uma carteira também deixa suas chaves iguais. O Bitcoin não tem um processo de suporte que cancele uma frase de recuperação copiada.

1. Use um dispositivo em que tenha motivos para confiar. Se o computador original puder estar comprometido, não gere a carteira substituta nele.
2. Crie uma carteira com novas informações de recuperação e proteja seu backup. Não restaure as palavras expostas e chame a carteira restaurada de uma nova fronteira de segurança.
3. Obtenha e verifique um endereço de recebimento. Com hardware, verifique no dispositivo de assinatura; nunca insira as novas palavras de recuperação no computador suspeito.
4. Transfira os fundos restantes que ainda controla, conferindo o destino e a taxa com cuidado. Um invasor com as mesmas chaves pode agir antes de você; evite acrescentar uma espera opcional por CoinJoin antes de proteger os fundos.
5. Confira o resultado na carteira confiável e acompanhe a confirmação. Substitua instruções de depósitos recorrentes e os dados públicos de recebimento antigos para que pagamentos futuros não continuem chegando às chaves comprometidas.

Mover fundos pode criar uma ligação observável on-chain. Preservar o controle dos fundos é a prioridade durante um comprometimento de chaves; a privacidade pode ser considerada novamente após conter o problema imediato de acesso. Um destino novo não garante que a transferência não possa ser vinculada.

Mantenha os registros necessários privados durante a investigação. Nunca forneça a um suposto agente de suporte palavras de recuperação, frase-senha, uma cópia irrestrita dos arquivos da carteira ou acesso ao dispositivo substituto. Não é necessário “validar” novas palavras de recuperação em um site.

<span id="respond-to-a-privacy-only-disclosure" data-ginger-heading="responda-a-uma-exposição-apenas-de-privacidade" aria-hidden="true"></span>

## Responda a uma exposição apenas de privacidade

Para um endereço exposto, decida se continuar a usá-lo é aceitável. Você pode receber pagamentos futuros em endereços novos e evitar publicar detalhes adicionais de transações, mas o observador mantém o que já aprendeu. Não há necessidade automática de mover todas as moedas apenas porque um endereço se tornou público.

Para um xpub divulgado, primeiro determine qual conta ele cobre. Continuar usando essa conta pode expor atividades futuras. Uma nova carteira com chaves independentes estabelece outro conjunto de endereços, embora uma transferência direta possa ligar visivelmente os fundos antigos a ele. Planeje a mudança e os gastos posteriores de acordo com quem está observando e o que sabe. Reinstalar um aplicativo de carteira ou importar a mesma conta em outro lugar não remove a exposição dessa conta.

Para registros vazados, restrinja o acesso adicional e avalie o que eles revelam em conjunto. Um identificador de transação associado ao nome de um cliente é mais revelador do que cada um isoladamente. Não publique o vazamento completo para demonstrar o problema.

<span id="keep-privacy-separate-from-key-protection" data-ginger-heading="separe-a-privacidade-da-proteção-de-chaves" aria-hidden="true"></span>

## Separe a privacidade da proteção de chaves

Um observador que conhece uma transação não necessariamente possui as chaves para gastá-la. Por outro lado, um ladrão com as chaves pode gastar fundos cujo histórico de transações era difícil de analisar. Use a proteção de recuperação e a verificação do dispositivo para o segundo problema e as práticas de endereços, Tor, seleção de moedas e uso ponderado de CoinJoin para o primeiro.

Revise a rotina após adicionar uma carteira, mudar o hardware, ativar a 2FA ou mover os backups. Verifique as partes alteradas, em vez de expor repetidamente todos os segredos para um exercício de recuperação completa desnecessário.
