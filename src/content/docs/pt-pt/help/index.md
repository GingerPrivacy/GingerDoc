---
doc_id: "help.faq"
title: "Perguntas frequentes sobre o Ginger Wallet: comece aqui"
description: "Respostas curtas sobre fundos ausentes, cópias de segurança, recuperação, espera e taxas do CoinJoin, pagamentos pendentes, carteiras de hardware e apoio seguro."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: comece aqui. As respostas curtas e as primeiras verificações vêm antes dos materiais avançados opcionais.

Comece pela pergunta mais próxima do que está a ver. Estas respostas abrangem o uso comum e as primeiras verificações seguras; as [perguntas frequentes avançadas](/pt-pt/help/advanced-faq/), numa página separada, são um complemento opcional para definições personalizadas e casos especiais.

- [Comece aqui](#start-here)
- [Recuperação e fundos ausentes](#recovery-and-missing-funds)
- [Ligação e atualizações](#connection-and-updates)
- [Noções básicas de CoinJoin](#coinjoin-basics)
- [Pagamentos e hardware](#payments-and-hardware)
- [Como obter ajuda com segurança](#getting-help-safely)

<span id="start-here" data-ginger-heading="comece-aqui" aria-hidden="true"></span>

## Comece aqui

<span id="what-is-ginger-and-does-it-hold-my-bitcoin" data-ginger-heading="o-que-é-o-ginger-e-ele-fica-com-os-meus-bitcoins" aria-hidden="true"></span>

### O que é o Ginger e ele fica com os meus bitcoins?

O Ginger é um programa para computador que recebe e envia Bitcoin na cadeia de blocos, com recursos opcionais de privacidade CoinJoin. Controla as chaves que autorizam os gastos; participar numa ronda não transfere, por si só, a custódia dos fundos ao coordenador CoinJoin. Proteja o computador e a cópia de segurança de recuperação, pois controlar as chaves não elimina a possibilidade de roubo, erros ou perda de acesso.

<span id="is-there-an-official-mobile-or-web-wallet" data-ginger-heading="existe-uma-carteira-oficial-para-telemóvel-ou-para-a-web" aria-hidden="true"></span>

### Existe uma carteira oficial para telemóvel ou para a web?

A versão v2.0.26 oferece software para computadores compatíveis com Windows, macOS e Linux. Ela não oferece carteira para Android, iOS ou navegador, pagamentos Lightning ou outras criptomoedas. Comece pelo [site oficial do Ginger](https://gingerwallet.io/) e pelas ligações de versões disponibilizadas nele; não introduza palavras de recuperação num programa ou site apenas porque ele usa o nome Ginger.

<span id="do-i-need-an-account-my-own-node-or-a-hardware-wallet" data-ginger-heading="preciso-de-uma-conta-do-meu-próprio-nó-ou-de-uma-carteira-de-hardware" aria-hidden="true"></span>

### Preciso de uma conta, do meu próprio nó ou de uma carteira de hardware?

Não. A criação normal de uma carteira de software usa informações locais de recuperação e não exige uma conta de cliente, o seu próprio nó Bitcoin ou um dispositivo de hardware. A 2FA opcional usa um serviço, e os prestadores de compra e venda podem exigir contas ou informações de identidade; portanto, esses recursos têm requisitos adicionais.

<span id="do-i-have-to-use-coinjoin-before-receiving-or-sending" data-ginger-heading="preciso-usar-coinjoin-antes-de-receber-ou-enviar" aria-hidden="true"></span>

### Preciso usar CoinJoin antes de receber ou enviar?

Não. Receber, fazer um envio comum e usar CoinJoin são ações separadas. Confira **Automatically start coinjoin** em **Coinjoin Settings** se não quiser participar sem intervenção enquanto aprende; se uma ronda já estiver em curso, pause a participação e deixe o trabalho crítico terminar.

<span id="can-i-buy-bitcoin-in-ginger-or-receive-an-exchange-withdrawal" data-ginger-heading="posso-comprar-bitcoin-no-ginger-ou-receber-um-levantamento-de-uma-corretora" aria-hidden="true"></span>

### Posso comprar bitcoin no Ginger ou receber um levantamento de uma corretora?

Pode usar um endereço novo de **Receive** para um levantamento de Bitcoin na cadeia de blocos, verificando o endereço e a rede antes de autorizá-lo na corretora. O Ginger também oferece os fluxos **Buy** e **Sell** com prestadores, quando disponíveis. Confira os termos atuais, a cotação e o estado do pedido do prestador escolhido; a confirmação de compra de um prestador não é o mesmo que uma receção confirmada de Bitcoin.

<span id="recovery-and-missing-funds" data-ginger-heading="recuperação-e-fundos-ausentes" aria-hidden="true"></span>

## Recuperação e fundos ausentes

<span id="what-do-i-need-to-back-up" data-ginger-heading="o-que-preciso-guardar-em-cópia-de-segurança" aria-hidden="true"></span>

### O que preciso guardar em cópia de segurança?

Guarde as palavras de recuperação na ordem original e a frase de segurança original exata, caso tenha usado uma. Registe que a frase de segurança estava vazia se a carteira foi criada sem ela. Esses dados recuperam o acesso às chaves; etiquetas e alguns outros registos locais precisam de uma cópia de segurança separada dos ficheiros.

<span id="is-my-passphrase-just-a-password-i-can-reset" data-ginger-heading="a-minha-frase-de-segurança-é-apenas-uma-palavra-passe-que-posso-redefinir" aria-hidden="true"></span>

### A minha frase de segurança é apenas uma palavra-passe que posso redefinir?

Não. Numa carteira de software Ginger, a frase de segurança original ajuda a determinar quais chaves Bitcoin são recuperadas, além de proteger o segredo armazenado. Palavras diferentes ou uma frase de segurança diferente podem levar a outra carteira válida. O nome da carteira, o PIN de um dispositivo de hardware ou um código de autenticador não substituem esses dados.

<span id="i-have-the-words-but-forgot-the-passphrase-can-ginger-reset-it" data-ginger-heading="tenho-as-palavras-mas-esqueci-a-frase-de-segurança-o-ginger-pode-redefini-la" aria-hidden="true"></span>

### Tenho as palavras, mas esqueci a frase de segurança. O Ginger pode redefini-la?

O Ginger não pode redefinir a frase de segurança original e manter as mesmas chaves da carteira. Confira seus registos privados de cópia de segurança e preserve qualquer instalação em que ainda seja possível gastar os fundos. Se ainda consegue gastar, mas não consegue estabelecer uma cópia de segurança completa de recuperação, crie uma carteira nova, verifique a sua cópia de segurança e transfira os fundos com cuidado; nunca envie as palavras a alguém que se apresente como ajudante de recuperação.

<span id="can-ginger-show-my-recovery-words-again" data-ginger-heading="o-ginger-pode-mostrar-as-minhas-palavras-de-recuperação-novamente" aria-hidden="true"></span>

### O Ginger pode mostrar as minhas palavras de recuperação novamente?

O processo de criação avisa que não as mostrará novamente depois. **Wallet Settings** → **Tools** → **Verify Recovery Words** verifica as palavras fornecidas por si; não revela uma cópia de segurança esquecida. Se o acesso permanece, mas a cópia de segurança foi perdida, estabeleça e verifique uma cópia de segurança de uma nova carteira antes de transferir os fundos com cuidado.

<span id="why-is-my-recovered-wallet-empty-or-missing-transactions" data-ginger-heading="porque-é-que-a-minha-carteira-recuperada-está-vazia-ou-faltam-transações" aria-hidden="true"></span>

### Porque é que a minha carteira recuperada está vazia ou faltam transações?

Confira a carteira selecionada, as palavras originais e a frase de segurança exata, além de verificar se a sincronização e a recuperação terminaram. Um erro de introdução na frase de segurança pode abrir outra carteira válida sem apresentar erro de palavra-passe incorreta. Preserve os ficheiros antigos e compare uma transação conhecida antes de alterar definições; a [resolução de problemas de recuperação](/pt-pt/help/troubleshooting/#balance-recovery-and-receiving) apresenta as primeiras verificações.

<span id="the-sender-says-paid-why-have-i-received-nothing" data-ginger-heading="o-remetente-diz-que-pagou-porque-é-que-não-recebi-nada" aria-hidden="true"></span>

### O remetente diz que pagou. Porque é que não recebi nada?

Peça o identificador da transação Bitcoin e confira o endereço de receção pretendido e a rede. Um serviço pode marcar um pedido como pago antes de transmitir sua transação Bitcoin, e o Ginger também precisa sincronizar para exibi-la. Confira a transação e o progresso local antes de pedir que o remetente pague novamente; veja a [resolução de problemas de receção](/pt-pt/help/troubleshooting/#balance-recovery-and-receiving).

<span id="will-changing-the-network-make-missing-bitcoin-appear" data-ginger-heading="mudar-de-rede-fará-aparecer-os-bitcoins-ausentes" aria-hidden="true"></span>

### Mudar de rede fará aparecer os bitcoins ausentes?

Use Main para Bitcoin real na cadeia de blocos. Outra rede tem moedas diferentes; selecioná-la não move nem recupera fundos da rede principal. Confira a carteira pretendida e a sincronização, em vez de mudar de rede para melhorar a aparência do indicador de ligação.

<span id="why-has-a-receiving-address-disappeared-does-it-expire" data-ginger-heading="porque-é-que-um-endereço-de-receção-desapareceu-ele-expira" aria-hidden="true"></span>

### Porque é que um endereço de receção desapareceu? Ele expira?

Um endereço pode sair da lista de pagamentos aguardados após receber um pagamento ou ser ocultado; isso não invalida suas chaves. Um endereço antigo ainda pode receber bitcoin, portanto preserve a sua cópia de segurança. Use um endereço novo para cada novo pagamento para evitar agrupar receções diretamente num único endereço público.

<span id="why-are-receive-or-send-missing" data-ginger-heading="porque-é-que-receive-ou-send-não-aparecem" aria-hidden="true"></span>

### Porque é que Receive ou Send não aparecem?

A recuperação pode ainda estar a fazer a pesquisa e ocultar as ações comuns da carteira até terminar. Uma carteira só de observação também precisa de seu dispositivo de assinatura ou de outro método de assinatura compatível para gastar. Confira o tipo de carteira e o progresso antes de reinstalar ou criar palavras de substituição.

<span id="i-lost-my-authenticator-or-my-2fa-code-is-rejected-what-now" data-ginger-heading="perdi-o-meu-autenticador-ou-o-meu-código-2fa-foi-rejeitado-e-agora" aria-hidden="true"></span>

### Perdi o meu autenticador ou o meu código 2FA foi rejeitado. E agora?

Confira a entrada correta no autenticador, a hora do telefone e a ligação do Ginger com Tor e com o serviço. Preserve os ficheiros existentes da carteira e da 2FA; reinstalar não recria um segredo perdido do autenticador. As palavras de recuperação mais a frase de segurança original exata oferecem um caminho independente para recuperar as chaves; use a [resolução de problemas de 2FA](/pt-pt/help/troubleshooting/#2fa-and-hardware) antes de alterar ficheiros.

<span id="connection-and-updates" data-ginger-heading="ligação-e-atualizações" aria-hidden="true"></span>

## Ligação e atualizações

<span id="do-i-need-tor-browser-or-a-vpn-to-make-ginger-work" data-ginger-heading="preciso-do-tor-browser-ou-de-uma-vpn-para-o-ginger-funcionar" aria-hidden="true"></span>

### Preciso do Tor Browser ou de uma VPN para o Ginger funcionar?

O Ginger inclui Tor para suas ligações comuns de carteira; não é necessário instalar o Tor Browser apenas para usar a carteira. Um navegador separado ou uma VPN não corrige automaticamente a sincronização do Ginger nem oculta as informações que envia a um prestador. Mantenha a proteção normal do Tor ativada enquanto segue as [verificações de ligação](/pt-pt/help/troubleshooting/#connection-or-synchronization).

<span id="why-is-ginger-still-connecting-or-synchronizing" data-ginger-heading="porque-é-que-o-ginger-ainda-está-a-ligar-se-ou-a-sincronizar" aria-hidden="true"></span>

### Porque é que o Ginger ainda está a ligar-se ou a sincronizar?

Uma primeira pesquisa ou uma carteira recuperada pode precisar de tempo, enquanto uma pesquisa parada pode indicar um problema de ligação ou um problema local. Confira o acesso à Internet, o relógio do computador, o espaço livre e qualquer nó configurado por si; registe o estado exato se o progresso parar. Siga a [resolução de problemas de ligação](/pt-pt/help/troubleshooting/#connection-or-synchronization), em vez de reiniciar repetidamente ou apagar dados da carteira.

<span id="why-did-reinstalling-not-reset-a-broken-setting" data-ginger-heading="porque-é-que-reinstalar-não-redefiniu-uma-definição-com-problema" aria-hidden="true"></span>

### Porque é que reinstalar não redefiniu uma definição com problema?

Os ficheiros do programa e os dados das carteiras são armazenados separadamente, portanto uma reinstalação comum pode preservar a mesma configuração e as mesmas carteiras. Preserve as cópias de segurança e diagnostique o erro real antes de alterar dados. Não apague toda a pasta de dados como uma correção geral para fundos ausentes ou um estado de espera.

<span id="coinjoin-basics" data-ginger-heading="noções-básicas-de-coinjoin" aria-hidden="true"></span>

## Noções básicas de CoinJoin

<span id="why-is-coinjoin-waiting-instead-of-starting" data-ginger-heading="porque-é-que-o-coinjoin-está-à-espera-em-vez-de-começar" aria-hidden="true"></span>

### Porque é que o CoinJoin está à espera em vez de começar?

Leia o estado: a carteira pode precisar de confirmações, taxas aceitáveis, outros participantes, ligação ou moedas elegíveis. A espera, por si só, não significa perda de fundos. A [tabela de resolução de problemas de CoinJoin](/pt-pt/help/troubleshooting/#coinjoin-does-not-start) explica as mensagens desta versão e a primeira ação para cada uma.

<span id="what-is-the-minimum-amount-and-why-are-some-coins-left-behind" data-ginger-heading="qual-é-o-valor-mínimo-e-porque-algumas-moedas-ficam-de-fora" aria-hidden="true"></span>

### Qual é o valor mínimo e porque algumas moedas ficam de fora?

Não há um saldo total da carteira que garanta participação. Cada moeda disponível precisa de cumprir as condições da ronda e as verificações de elegibilidade e custo da carteira; algumas moedas pequenas, não confirmadas ou excluídas podem ficar fora de uma ronda. Não combine nem adicione fundos apenas para atingir um mínimo citado num guia antigo.

<span id="how-long-will-it-take-and-how-many-rounds-do-i-need" data-ginger-heading="quanto-tempo-levará-e-de-quantas-rondas-preciso" aria-hidden="true"></span>

### Quanto tempo levará e de quantas rondas preciso?

Não há duração garantida nem número universal de rondas. Confirmações, taxas, participantes disponíveis, suas moedas e a meta de privacidade selecionada são relevantes. Confira o estado real e os custos das rondas já concluídas, em vez de tratar uma preferência de tempo como um prazo prometido.

<span id="why-did-my-balance-decrease-if-coinjoin-was-described-as-free" data-ginger-heading="porque-é-que-o-meu-saldo-diminuiu-se-o-coinjoin-foi-descrito-como-gratuito" aria-hidden="true"></span>

### Porque é que o meu saldo diminuiu se o CoinJoin foi descrito como gratuito?

Uma isenção da taxa do coordenador não elimina as taxas de mineração do Bitcoin, e cada ronda repetida e concluída pode custar dinheiro. Confira também se as saídas foram para outra carteira e se ambas sincronizaram. Pause e concilie as transações concluídas se a mudança não tiver explicação; não presuma que toda redução inesperada seja uma taxa normal.

<span id="what-coordinator-fee-does-ginger-currently-advertise" data-ginger-heading="qual-taxa-de-coordenador-o-ginger-anuncia-atualmente" aria-hidden="true"></span>

### Qual taxa de coordenador o Ginger anuncia atualmente?

Com as definições atuais, cada entrada de 0.03 BTC (3 000 000 satoshis) ou menos não paga taxa de coordenador, inclusive uma entrada de exatamente 0.03 BTC. Acima desse limite, a taxa é de 0.3% do valor total da entrada, a menos que outra isenção se aplique, como um remix elegível. O limite é aplicado separadamente a cada entrada, e não ao saldo total da carteira. As taxas de mineração continuam a ser cobradas. Confira novamente a [explicação atual das taxas do Ginger](https://gingerwallet.io/) e a ronda oferecida antes de participar.

<span id="can-i-stop-coinjoin-or-turn-off-the-computer" data-ginger-heading="posso-parar-o-coinjoin-ou-desligar-o-computador" aria-hidden="true"></span>

### Posso parar o CoinJoin ou desligar o computador?

Use o botão de pausa do painel de controlo para interromper novas participações e deixe qualquer fase crítica terminar. Suspensão, perda de ligação ou encerramento forçado podem interromper uma ronda ativa; saia do programa normalmente e deixe o procedimento de encerramento terminar. Uma transação já transmitida continua no Bitcoin após o encerramento do programa.

<span id="why-is-there-a-transaction-when-i-never-pressed-send" data-ginger-heading="porque-é-que-existe-uma-transação-se-nunca-premi-send" aria-hidden="true"></span>

### Porque é que existe uma transação se nunca premi Send?

O CoinJoin automático pode criar transações partilhadas depois que ativa a participação, sem um pagamento comum por **Send** a cada vez. Inspecione a transação, as saídas que lhe pertencem, as taxas e qualquer seleção de carteira de destino, em vez de presumir que um gasto sem explicação necessariamente seja CoinJoin. Se continuar sem explicação ou as chaves puderem ter sido expostas, preserve os registos e proteja os fundos restantes.

<span id="can-i-spend-at-99-and-does-100-mean-i-am-anonymous" data-ginger-heading="posso-gastar-com-99-e-100-significa-que-sou-anónimo" aria-hidden="true"></span>

### Posso gastar com 99% e 100% significa que sou anónimo?

Pode fazer um pagamento comum quando os fundos estão disponíveis para gastar e o fluxo de envio está disponível; a percentagem de privacidade não é um requisito do Bitcoin para gastar. Ela é uma estimativa local do Ginger sob a meta selecionada, não uma garantia sobre o que outra pessoa sabe. Um pagamento, um endereço reutilizado ou uma corretora que conhece sua identidade ainda podem criar uma ligação.

<span id="why-is-the-play-control-missing-when-all-funds-are-private" data-ginger-heading="porque-é-que-o-botão-de-início-desapareceu-quando-todos-os-fundos-estão-privados" aria-hidden="true"></span>

### Porque é que o botão de início desapareceu quando todos os fundos estão privados?

O painel de controlo manual comum pode ocultar o botão de início quando todos os fundos atingem a meta de privacidade da carteira. O início normal do CoinJoin também rejeita um conjunto de moedas disponíveis formado apenas por moedas privadas, portanto escolher outro destino não força uma nova ronda. Se só quer mover esses fundos, considere um pagamento comum.

<span id="payments-and-hardware" data-ginger-heading="pagamentos-e-hardware" aria-hidden="true"></span>

## Pagamentos e hardware

<span id="why-is-a-payment-still-pending-after-the-estimated-time" data-ginger-heading="porque-é-que-um-pagamento-continua-pendente-depois-do-tempo-estimado" aria-hidden="true"></span>

### Porque é que um pagamento continua pendente depois do tempo estimado?

A estimativa não é um prazo: transações concorrentes e a chegada irregular de blocos afetam a confirmação. Inspecione o histórico; se o Ginger oferecer **Speed Up Transaction**, confira a taxa adicional antes de usar. Um erro de ligação ou atraso não é motivo para enviar um segundo pagamento ao destinatário.

<span id="can-i-cancel-a-payment-or-recover-one-sent-to-the-wrong-address" data-ginger-heading="posso-cancelar-um-pagamento-ou-recuperar-um-enviado-ao-endereço-errado" aria-hidden="true"></span>

### Posso cancelar um pagamento ou recuperar um enviado ao endereço errado?

Um pagamento confirmado não pode ser revertido pelo Ginger. Antes da confirmação, o Ginger pode oferecer **Cancel Transaction** para uma transação apropriada, mas isso é uma tentativa de substituição que pode perder a corrida para a confirmação. Não prometa ao destinatário que o pagamento original foi cancelado antes de estabelecer o resultado.

<span id="why-are-there-insufficient-funds-when-my-balance-looks-large-enough" data-ginger-heading="porque-é-que-os-fundos-são-insuficientes-se-o-meu-saldo-parece-grande-o-bastante" aria-hidden="true"></span>

### Porque é que os fundos são insuficientes se o meu saldo parece grande o bastante?

O total exibido nem sempre está todo disponível para gastar: os fundos podem estar não confirmados, temporariamente envolvidos em CoinJoin ou ser insuficientes após a taxa. Confira a carteira selecionada, o valor e a pré-visualização final. Ao enviar todo o valor disponível, a taxa pode reduzir o que chega, portanto compare o valor do destinatário com qualquer fatura de valor fixo.

<span id="why-did-my-payment-create-another-address-or-leave-change" data-ginger-heading="porque-é-que-o-meu-pagamento-criou-outro-endereço-ou-deixou-troco" aria-hidden="true"></span>

### Porque é que o meu pagamento criou outro endereço ou deixou troco?

Um pagamento pode gastar uma parcela maior de bitcoin e devolver o valor restante à sua própria carteira como troco. Um endereço novo de troco é normal e não significa que dinheiro foi enviado a um desconhecido. Não é necessário enviá-lo de volta manualmente; confira a transação completa se algum valor continuar sem explicação.

<span id="can-i-use-a-hardware-wallet-including-after-coinjoin" data-ginger-heading="posso-usar-uma-carteira-de-hardware-inclusive-após-coinjoin" aria-hidden="true"></span>

### Posso usar uma carteira de hardware, inclusive após CoinJoin?

O Ginger oferece os fluxos documentados de receção e assinatura para carteiras de hardware compatíveis. Mantenha as palavras de recuperação do hardware dentro do procedimento de recuperação do dispositivo, não no computador. Uma carteira de hardware pode receber saídas elegíveis de CoinJoin, mas não é a fonte de assinatura do CoinJoin comum do Ginger; esse encaminhamento opcional é uma [questão avançada](/pt-pt/help/advanced-faq/#can-coinjoin-send-directly-to-my-hardware-wallet).

<span id="will-an-exchange-accept-my-bitcoin-after-coinjoin" data-ginger-heading="uma-corretora-aceitará-os-meus-bitcoins-após-coinjoin" aria-hidden="true"></span>

### Uma corretora aceitará os meus bitcoins após CoinJoin?

O Ginger pode preparar um pagamento comum de Bitcoin, mas não pode garantir a aceitação nem a política de contas de um prestador. Confira os requisitos atuais da corretora pretendida antes de enviar ou vender. Uma pontuação alta de privacidade não é um certificado de aceitação, e nenhuma operação adicional da carteira pode prometer esse resultado.

<span id="getting-help-safely" data-ginger-heading="como-obter-ajuda-com-segurança" aria-hidden="true"></span>

## Como obter ajuda com segurança

<span id="what-can-i-share-with-support-and-where-do-i-report-a-bug" data-ginger-heading="o-que-posso-partilhar-com-o-apoio-e-onde-relato-um-erro" aria-hidden="true"></span>

### O que posso partilhar com o apoio e onde relato um erro?

Use as ligações do [repositório oficial do Ginger](https://github.com/GingerPrivacy/GingerWallet/issues) e informe a versão, o sistema operativo, o erro exato e os passos sem segredos. Reveja qualquer excerto de log antes de partilhar; nunca envie palavras de recuperação, frases de segurança, códigos de autenticador ou uma pasta completa de dados da carteira. O apoio não precisa de uma validação de carteira por site nem de um pagamento de ativação; veja [como relatar um problema de forma útil](/pt-pt/help/troubleshooting/#report-a-useful-issue).

<span id="about-this-manual" data-ginger-heading="sobre-este-manual" aria-hidden="true"></span>

## Sobre este manual

O manual original em inglês descreve o Ginger v2.0.26 e usa os nomes em inglês da interface. A documentação e as traduções podem conter erros. O Ginger não garante sua precisão; verifique os detalhes críticos no programa antes de prosseguir. Se encontrar um erro, [relate-o no repositório da documentação](https://github.com/GingerPrivacy/GingerDoc/issues), sem incluir segredos da carteira.
