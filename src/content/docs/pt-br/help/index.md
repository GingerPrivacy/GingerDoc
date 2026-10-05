---
doc_id: "help.faq"
title: "Perguntas frequentes sobre o Ginger Wallet: comece aqui"
description: "Respostas curtas sobre fundos ausentes, backups, recuperação, espera e taxas do CoinJoin, pagamentos pendentes, carteiras de hardware e suporte seguro."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: comece aqui. As respostas curtas e as primeiras verificações vêm antes dos materiais avançados opcionais.

Comece pela pergunta mais próxima do que você está vendo. Estas respostas abrangem o uso comum e as primeiras verificações seguras; as [perguntas frequentes avançadas](/pt-br/help/advanced-faq/), em uma página separada, são um complemento opcional para configurações personalizadas e casos especiais.

- [Comece aqui](#start-here)
- [Recuperação e fundos ausentes](#recovery-and-missing-funds)
- [Conexão e atualizações](#connection-and-updates)
- [Noções básicas de CoinJoin](#coinjoin-basics)
- [Pagamentos e hardware](#payments-and-hardware)
- [Como obter ajuda com segurança](#getting-help-safely)

<span id="start-here" data-ginger-heading="comece-aqui" aria-hidden="true"></span>

## Comece aqui

<span id="what-is-ginger-and-does-it-hold-my-bitcoin" data-ginger-heading="o-que-é-o-ginger-e-ele-fica-com-meus-bitcoins" aria-hidden="true"></span>

### O que é o Ginger e ele fica com meus bitcoins?

O Ginger é um aplicativo para computador que recebe e envia Bitcoin na blockchain, com recursos opcionais de privacidade CoinJoin. Você controla as chaves que autorizam os gastos; participar de uma rodada não transfere, por si só, a custódia dos fundos ao coordenador CoinJoin. Proteja o computador e o backup de recuperação, pois controlar as chaves não elimina a possibilidade de roubo, erros ou perda de acesso.

<span id="is-there-an-official-mobile-or-web-wallet" data-ginger-heading="existe-uma-carteira-oficial-para-celular-ou-para-a-web" aria-hidden="true"></span>

### Existe uma carteira oficial para celular ou para a web?

A versão v2.0.26 oferece software para computadores compatíveis com Windows, macOS e Linux. Ela não oferece carteira para Android, iOS ou navegador, pagamentos Lightning ou outras criptomoedas. Comece pelo [site oficial do Ginger](https://gingerwallet.io/) e pelos links de versões disponibilizados nele; não digite palavras de recuperação em um aplicativo ou site apenas porque ele usa o nome Ginger.

<span id="do-i-need-an-account-my-own-node-or-a-hardware-wallet" data-ginger-heading="preciso-de-uma-conta-de-meu-próprio-nó-ou-de-uma-carteira-de-hardware" aria-hidden="true"></span>

### Preciso de uma conta, de meu próprio nó ou de uma carteira de hardware?

Não. A criação normal de uma carteira de software usa informações locais de recuperação e não exige uma conta de cliente, seu próprio nó Bitcoin ou um dispositivo de hardware. A 2FA opcional usa um serviço, e os provedores de compra e venda podem exigir contas ou informações de identidade; portanto, esses recursos têm requisitos adicionais.

<span id="do-i-have-to-use-coinjoin-before-receiving-or-sending" data-ginger-heading="preciso-usar-coinjoin-antes-de-receber-ou-enviar" aria-hidden="true"></span>

### Preciso usar CoinJoin antes de receber ou enviar?

Não. Receber, fazer um envio comum e usar CoinJoin são ações separadas. Confira **Automatically start coinjoin** em **Coinjoin Settings** se você não quiser participar sem intervenção enquanto aprende; se uma rodada já estiver em andamento, pause a participação e deixe o trabalho crítico terminar.

<span id="can-i-buy-bitcoin-in-ginger-or-receive-an-exchange-withdrawal" data-ginger-heading="posso-comprar-bitcoin-no-ginger-ou-receber-um-saque-de-uma-corretora" aria-hidden="true"></span>

### Posso comprar bitcoin no Ginger ou receber um saque de uma corretora?

Você pode usar um endereço novo de **Receive** para um saque de Bitcoin na blockchain, verificando o endereço e a rede antes de autorizá-lo na corretora. O Ginger também oferece os fluxos **Buy** e **Sell** com provedores, quando disponíveis. Confira os termos atuais, a cotação e o status do pedido do provedor escolhido; a confirmação de compra de um provedor não é o mesmo que o recebimento confirmado de Bitcoin.

<span id="recovery-and-missing-funds" data-ginger-heading="recuperação-e-fundos-ausentes" aria-hidden="true"></span>

## Recuperação e fundos ausentes

<span id="what-do-i-need-to-back-up" data-ginger-heading="o-que-preciso-guardar-em-backup" aria-hidden="true"></span>

### O que preciso guardar em backup?

Guarde as palavras de recuperação na ordem original e a frase-senha original exata, caso tenha usado uma. Registre que a frase-senha estava vazia se a carteira foi criada sem ela. Esses dados recuperam o acesso às chaves; rótulos e alguns outros registros locais precisam de um backup separado dos arquivos.

<span id="is-my-passphrase-just-a-password-i-can-reset" data-ginger-heading="minha-frase-senha-é-apenas-uma-senha-que-posso-redefinir" aria-hidden="true"></span>

### Minha frase-senha é apenas uma senha que posso redefinir?

Não. Em uma carteira de software Ginger, a frase-senha original ajuda a determinar quais chaves Bitcoin são recuperadas, além de proteger o segredo armazenado. Palavras diferentes ou uma frase-senha diferente podem levar a outra carteira válida. O nome da carteira, o PIN de um dispositivo de hardware ou um código de autenticador não substituem esses dados.

<span id="i-have-the-words-but-forgot-the-passphrase-can-ginger-reset-it" data-ginger-heading="tenho-as-palavras-mas-esqueci-a-frase-senha-o-ginger-pode-redefini-la" aria-hidden="true"></span>

### Tenho as palavras, mas esqueci a frase-senha. O Ginger pode redefini-la?

O Ginger não pode redefinir a frase-senha original e manter as mesmas chaves da carteira. Confira seus registros privados de backup e preserve qualquer instalação em que ainda seja possível gastar os fundos. Se você ainda consegue gastar, mas não consegue estabelecer um backup completo de recuperação, crie uma carteira nova, verifique seu backup e transfira os fundos com cuidado; nunca envie as palavras a alguém que se apresente como ajudante de recuperação.

<span id="can-ginger-show-my-recovery-words-again" data-ginger-heading="o-ginger-pode-mostrar-minhas-palavras-de-recuperação-novamente" aria-hidden="true"></span>

### O Ginger pode mostrar minhas palavras de recuperação novamente?

O processo de criação avisa que não as mostrará novamente depois. **Wallet Settings** → **Tools** → **Verify Recovery Words** verifica as palavras fornecidas por você; não revela um backup esquecido. Se o acesso permanece, mas o backup foi perdido, estabeleça e verifique um backup de uma nova carteira antes de transferir os fundos com cuidado.

<span id="why-is-my-recovered-wallet-empty-or-missing-transactions" data-ginger-heading="por-que-minha-carteira-recuperada-está-vazia-ou-faltam-transações" aria-hidden="true"></span>

### Por que minha carteira recuperada está vazia ou faltam transações?

Confira a carteira selecionada, as palavras originais e a frase-senha exata, além de verificar se a sincronização e a recuperação terminaram. Um erro de digitação na frase-senha pode abrir outra carteira válida sem apresentar erro de senha incorreta. Preserve os arquivos antigos e compare uma transação conhecida antes de alterar configurações; a [solução de problemas de recuperação](/pt-br/help/troubleshooting/#balance-recovery-and-receiving) apresenta as primeiras verificações.

<span id="the-sender-says-paid-why-have-i-received-nothing" data-ginger-heading="o-remetente-diz-que-pagou-por-que-não-recebi-nada" aria-hidden="true"></span>

### O remetente diz que pagou. Por que não recebi nada?

Peça o identificador da transação Bitcoin e confira o endereço de recebimento pretendido e a rede. Um serviço pode marcar um pedido como pago antes de transmitir sua transação Bitcoin, e o Ginger também precisa sincronizar para exibi-la. Confira a transação e o progresso local antes de pedir que o remetente pague novamente; veja a [solução de problemas de recebimento](/pt-br/help/troubleshooting/#balance-recovery-and-receiving).

<span id="will-changing-the-network-make-missing-bitcoin-appear" data-ginger-heading="mudar-de-rede-fará-aparecer-os-bitcoins-ausentes" aria-hidden="true"></span>

### Mudar de rede fará aparecer os bitcoins ausentes?

Use Main para Bitcoin real na blockchain. Outra rede tem moedas diferentes; selecioná-la não move nem recupera fundos da rede principal. Confira a carteira pretendida e a sincronização, em vez de mudar de rede para melhorar a aparência do indicador de conexão.

<span id="why-has-a-receiving-address-disappeared-does-it-expire" data-ginger-heading="por-que-um-endereço-de-recebimento-desapareceu-ele-expira" aria-hidden="true"></span>

### Por que um endereço de recebimento desapareceu? Ele expira?

Um endereço pode sair da lista de pagamentos aguardados após receber um pagamento ou ser ocultado; isso não invalida suas chaves. Um endereço antigo ainda pode receber bitcoin, portanto preserve seu backup. Use um endereço novo para cada novo pagamento para evitar agrupar recebimentos diretamente em um único endereço público.

<span id="why-are-receive-or-send-missing" data-ginger-heading="por-que-receive-ou-send-não-aparecem" aria-hidden="true"></span>

### Por que Receive ou Send não aparecem?

A recuperação pode ainda estar fazendo a varredura e ocultar as ações comuns da carteira até terminar. Uma carteira somente de observação também precisa de seu dispositivo de assinatura ou de outro método de assinatura compatível para gastar. Confira o tipo de carteira e o progresso antes de reinstalar ou criar palavras de substituição.

<span id="i-lost-my-authenticator-or-my-2fa-code-is-rejected-what-now" data-ginger-heading="perdi-meu-autenticador-ou-meu-código-2fa-foi-rejeitado-e-agora" aria-hidden="true"></span>

### Perdi meu autenticador ou meu código 2FA foi rejeitado. E agora?

Confira a entrada correta no autenticador, a hora do telefone e a conexão do Ginger com Tor e com o serviço. Preserve os arquivos existentes da carteira e da 2FA; reinstalar não recria um segredo perdido do autenticador. As palavras de recuperação mais a frase-senha original exata oferecem um caminho independente para recuperar as chaves; use a [solução de problemas de 2FA](/pt-br/help/troubleshooting/#2fa-and-hardware) antes de alterar arquivos.

<span id="connection-and-updates" data-ginger-heading="conexão-e-atualizações" aria-hidden="true"></span>

## Conexão e atualizações

<span id="do-i-need-tor-browser-or-a-vpn-to-make-ginger-work" data-ginger-heading="preciso-do-tor-browser-ou-de-uma-vpn-para-o-ginger-funcionar" aria-hidden="true"></span>

### Preciso do Tor Browser ou de uma VPN para o Ginger funcionar?

O Ginger inclui Tor para suas conexões comuns de carteira; não é necessário instalar o Tor Browser apenas para usar a carteira. Um navegador separado ou uma VPN não corrige automaticamente a sincronização do Ginger nem oculta as informações que você envia a um provedor. Mantenha a proteção normal do Tor ativada enquanto segue as [verificações de conexão](/pt-br/help/troubleshooting/#connection-or-synchronization).

<span id="why-is-ginger-still-connecting-or-synchronizing" data-ginger-heading="por-que-o-ginger-ainda-está-conectando-ou-sincronizando" aria-hidden="true"></span>

### Por que o Ginger ainda está conectando ou sincronizando?

Uma primeira varredura ou uma carteira recuperada pode precisar de tempo, enquanto uma varredura parada pode indicar um problema de conexão ou um problema local. Confira o acesso à Internet, o relógio do computador, o espaço livre e qualquer nó configurado por você; registre o status exato se o progresso parar. Siga a [solução de problemas de conexão](/pt-br/help/troubleshooting/#connection-or-synchronization), em vez de reiniciar repetidamente ou apagar dados da carteira.

<span id="why-did-reinstalling-not-reset-a-broken-setting" data-ginger-heading="por-que-reinstalar-não-redefiniu-uma-configuração-com-problema" aria-hidden="true"></span>

### Por que reinstalar não redefiniu uma configuração com problema?

Os arquivos do aplicativo e os dados das carteiras são armazenados separadamente, portanto uma reinstalação comum pode preservar a mesma configuração e as mesmas carteiras. Preserve os backups e diagnostique o erro real antes de alterar dados. Não apague toda a pasta de dados como uma correção geral para fundos ausentes ou um status de espera.

<span id="coinjoin-basics" data-ginger-heading="noções-básicas-de-coinjoin" aria-hidden="true"></span>

## Noções básicas de CoinJoin

<span id="why-is-coinjoin-waiting-instead-of-starting" data-ginger-heading="por-que-o-coinjoin-está-esperando-em-vez-de-começar" aria-hidden="true"></span>

### Por que o CoinJoin está esperando em vez de começar?

Leia o status: a carteira pode precisar de confirmações, taxas aceitáveis, outros participantes, conexão ou moedas elegíveis. A espera, por si só, não significa perda de fundos. A [tabela de solução de problemas de CoinJoin](/pt-br/help/troubleshooting/#coinjoin-does-not-start) explica as mensagens desta versão e a primeira ação para cada uma.

<span id="what-is-the-minimum-amount-and-why-are-some-coins-left-behind" data-ginger-heading="qual-é-o-valor-mínimo-e-por-que-algumas-moedas-ficam-de-fora" aria-hidden="true"></span>

### Qual é o valor mínimo e por que algumas moedas ficam de fora?

Não há um saldo total da carteira que garanta participação. Cada moeda disponível precisa atender às condições da rodada e às verificações de elegibilidade e custo da carteira; algumas moedas pequenas, não confirmadas ou excluídas podem ficar fora de uma rodada. Não combine nem adicione fundos apenas para atingir um mínimo citado em um guia antigo.

<span id="how-long-will-it-take-and-how-many-rounds-do-i-need" data-ginger-heading="quanto-tempo-levará-e-de-quantas-rodadas-preciso" aria-hidden="true"></span>

### Quanto tempo levará e de quantas rodadas preciso?

Não há duração garantida nem número universal de rodadas. Confirmações, taxas, participantes disponíveis, suas moedas e a meta de privacidade selecionada são relevantes. Confira o status real e os custos das rodadas já concluídas, em vez de tratar uma preferência de tempo como um prazo prometido.

<span id="why-did-my-balance-decrease-if-coinjoin-was-described-as-free" data-ginger-heading="por-que-meu-saldo-diminuiu-se-o-coinjoin-foi-descrito-como-gratuito" aria-hidden="true"></span>

### Por que meu saldo diminuiu se o CoinJoin foi descrito como gratuito?

Uma isenção da taxa do coordenador não elimina as taxas de mineração do Bitcoin, e cada rodada repetida e concluída pode custar dinheiro. Confira também se as saídas foram para outra carteira e se ambas sincronizaram. Pause e concilie as transações concluídas se a mudança não tiver explicação; não presuma que toda redução inesperada seja uma taxa normal.

<span id="what-coordinator-fee-does-ginger-currently-advertise" data-ginger-heading="qual-taxa-de-coordenador-o-ginger-anuncia-atualmente" aria-hidden="true"></span>

### Qual taxa de coordenador o Ginger anuncia atualmente?

Com as configurações atuais, cada entrada de 0.03 BTC (3 000 000 satoshis) ou menos não paga taxa de coordenador, inclusive uma entrada de exatamente 0.03 BTC. Acima desse limite, a taxa é de 0.3% do valor total da entrada, a menos que outra isenção se aplique, como um remix elegível. O limite é aplicado separadamente a cada entrada, e não ao saldo total da carteira. As taxas de mineração continuam sendo cobradas. Confira novamente a [explicação atual das taxas do Ginger](https://gingerwallet.io/) e a rodada oferecida antes de participar.

<span id="can-i-stop-coinjoin-or-turn-off-the-computer" data-ginger-heading="posso-parar-o-coinjoin-ou-desligar-o-computador" aria-hidden="true"></span>

### Posso parar o CoinJoin ou desligar o computador?

Use o botão de pausa do player para interromper novas participações e deixe qualquer fase crítica terminar. Suspensão, perda de conexão ou desligamento forçado podem interromper uma rodada ativa; saia do aplicativo normalmente e deixe o procedimento de encerramento terminar. Uma transação já transmitida continua no Bitcoin após o fechamento do aplicativo.

<span id="why-is-there-a-transaction-when-i-never-pressed-send" data-ginger-heading="por-que-existe-uma-transação-se-nunca-apertei-send" aria-hidden="true"></span>

### Por que existe uma transação se nunca apertei Send?

O CoinJoin automático pode criar transações compartilhadas depois que você habilita a participação, sem um pagamento comum por **Send** a cada vez. Inspecione a transação, as saídas que lhe pertencem, as taxas e qualquer seleção de carteira de destino, em vez de presumir que um gasto sem explicação necessariamente seja CoinJoin. Se continuar sem explicação ou as chaves puderem ter sido expostas, preserve os registros e proteja os fundos restantes.

<span id="can-i-spend-at-99-and-does-100-mean-i-am-anonymous" data-ginger-heading="posso-gastar-com-99-e-100-significa-que-sou-anônimo" aria-hidden="true"></span>

### Posso gastar com 99% e 100% significa que sou anônimo?

Você pode fazer um pagamento comum quando os fundos estão disponíveis para gastar e o fluxo de envio está disponível; a porcentagem de privacidade não é um requisito do Bitcoin para gastar. Ela é uma estimativa local do Ginger sob a meta selecionada, não uma garantia sobre o que outra pessoa sabe. Um pagamento, um endereço reutilizado ou uma corretora que conhece sua identidade ainda podem criar uma ligação.

<span id="why-is-the-play-control-missing-when-all-funds-are-private" data-ginger-heading="por-que-o-botão-de-reprodução-desapareceu-quando-todos-os-fundos-estão-privados" aria-hidden="true"></span>

### Por que o botão de reprodução desapareceu quando todos os fundos estão privados?

O player manual comum pode ocultar o botão de reprodução quando todos os fundos atingem a meta de privacidade da carteira. A inicialização normal também rejeita um conjunto de moedas disponíveis formado apenas por moedas privadas, portanto escolher outro destino não força uma nova rodada. Se você só quer mover esses fundos, considere um pagamento comum.

<span id="payments-and-hardware" data-ginger-heading="pagamentos-e-hardware" aria-hidden="true"></span>

## Pagamentos e hardware

<span id="why-is-a-payment-still-pending-after-the-estimated-time" data-ginger-heading="por-que-um-pagamento-continua-pendente-depois-do-tempo-estimado" aria-hidden="true"></span>

### Por que um pagamento continua pendente depois do tempo estimado?

A estimativa não é um prazo: transações concorrentes e a chegada irregular de blocos afetam a confirmação. Inspecione o histórico; se o Ginger oferecer **Speed Up Transaction**, confira a taxa adicional antes de usar. Um erro de conexão ou atraso não é motivo para enviar um segundo pagamento ao destinatário.

<span id="can-i-cancel-a-payment-or-recover-one-sent-to-the-wrong-address" data-ginger-heading="posso-cancelar-um-pagamento-ou-recuperar-um-enviado-ao-endereço-errado" aria-hidden="true"></span>

### Posso cancelar um pagamento ou recuperar um enviado ao endereço errado?

Um pagamento confirmado não pode ser revertido pelo Ginger. Antes da confirmação, o Ginger pode oferecer **Cancel Transaction** para uma transação apropriada, mas isso é uma tentativa de substituição que pode perder a corrida para a confirmação. Não prometa ao destinatário que o pagamento original foi cancelado antes de estabelecer o resultado.

<span id="why-are-there-insufficient-funds-when-my-balance-looks-large-enough" data-ginger-heading="por-que-os-fundos-são-insuficientes-se-meu-saldo-parece-grande-o-bastante" aria-hidden="true"></span>

### Por que os fundos são insuficientes se meu saldo parece grande o bastante?

O total exibido nem sempre está todo disponível para gastar: os fundos podem estar não confirmados, temporariamente envolvidos em CoinJoin ou ser insuficientes após a taxa. Confira a carteira selecionada, o valor e a prévia final. Ao enviar todo o valor disponível, a taxa pode reduzir o que chega, portanto compare o valor do destinatário com qualquer fatura de valor fixo.

<span id="why-did-my-payment-create-another-address-or-leave-change" data-ginger-heading="por-que-meu-pagamento-criou-outro-endereço-ou-deixou-troco" aria-hidden="true"></span>

### Por que meu pagamento criou outro endereço ou deixou troco?

Um pagamento pode gastar uma parcela maior de bitcoin e devolver o valor restante à sua própria carteira como troco. Um endereço novo de troco é normal e não significa que dinheiro foi enviado a um desconhecido. Não é necessário enviá-lo de volta manualmente; confira a transação completa se algum valor continuar sem explicação.

<span id="can-i-use-a-hardware-wallet-including-after-coinjoin" data-ginger-heading="posso-usar-uma-carteira-de-hardware-inclusive-após-coinjoin" aria-hidden="true"></span>

### Posso usar uma carteira de hardware, inclusive após CoinJoin?

O Ginger oferece os fluxos documentados de recebimento e assinatura para carteiras de hardware compatíveis. Mantenha as palavras de recuperação do hardware dentro do procedimento de recuperação do dispositivo, não no computador. Uma carteira de hardware pode receber saídas elegíveis de CoinJoin, mas não é a fonte de assinatura do CoinJoin comum do Ginger; esse encaminhamento opcional é uma [questão avançada](/pt-br/help/advanced-faq/#can-coinjoin-send-directly-to-my-hardware-wallet).

<span id="will-an-exchange-accept-my-bitcoin-after-coinjoin" data-ginger-heading="uma-corretora-aceitará-meus-bitcoins-após-coinjoin" aria-hidden="true"></span>

### Uma corretora aceitará meus bitcoins após CoinJoin?

O Ginger pode preparar um pagamento comum de Bitcoin, mas não pode garantir a aceitação nem a política de contas de um provedor. Confira os requisitos atuais da corretora pretendida antes de enviar ou vender. Uma pontuação alta de privacidade não é um certificado de aceitação, e nenhuma operação adicional da carteira pode prometer esse resultado.

<span id="getting-help-safely" data-ginger-heading="como-obter-ajuda-com-segurança" aria-hidden="true"></span>

## Como obter ajuda com segurança

<span id="what-can-i-share-with-support-and-where-do-i-report-a-bug" data-ginger-heading="o-que-posso-compartilhar-com-o-suporte-e-onde-relato-um-erro" aria-hidden="true"></span>

### O que posso compartilhar com o suporte e onde relato um erro?

Use os links do [repositório oficial do Ginger](https://github.com/GingerPrivacy/GingerWallet/issues) e informe a versão, o sistema operacional, o erro exato e os passos sem segredos. Revise qualquer trecho de log antes de compartilhar; nunca envie palavras de recuperação, frases-senha, códigos de autenticador ou uma pasta completa de dados da carteira. O suporte não precisa de uma validação de carteira por site nem de um pagamento de ativação; veja [como relatar um problema de forma útil](/pt-br/help/troubleshooting/#report-a-useful-issue).

<span id="about-this-manual" data-ginger-heading="sobre-este-manual" aria-hidden="true"></span>

## Sobre este manual

O manual original em inglês descreve o Ginger v2.0.26 e usa os nomes em inglês da interface. A documentação e as traduções podem conter erros. O Ginger não garante sua precisão; verifique os detalhes críticos no aplicativo antes de prosseguir. Se encontrar um erro, [relate-o no repositório da documentação](https://github.com/GingerPrivacy/GingerDoc/issues), sem incluir segredos da carteira.
