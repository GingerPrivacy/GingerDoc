---
doc_id: "settings-network.tor-sync"
title: "Tor, sincronização e privacidade na rede"
description: "Entenda como o Ginger se conecta, o que o Tor protege e como investigar uma sincronização lenta sem expor a atividade da carteira."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nível de leitura: uso cotidiano. Escolha este guia quando precisar realizar a tarefa descrita nele.

O Ginger precisa de dados da rede para encontrar suas transações, transmitir pagamentos e participar de CoinJoin. O Tor vem incluído e ativado por padrão para as conexões de rede comuns. Ele ajuda a separar seu endereço IP dos serviços que você acessa, mas não oculta os valores e as transações públicos do Bitcoin.

<span id="tor-settings" data-ginger-heading="configurações-do-tor" aria-hidden="true"></span>

## Configurações do Tor

Abra **Settings** → **Security** e encontre **Network anonymization (Tor)**. Mantenha essa opção ativada para o uso privado normal. Reinicie quando solicitado para que a configuração de rede em execução corresponda às configurações escolhidas. O recurso de 2FA do Ginger exige Tor, e a interface restringe sua desativação enquanto o 2FA está ativado.

**Terminate Tor when Ginger shuts down** controla o comportamento de encerramento do Tor. Um processo do Tor pode permanecer ativo depois que a janela da carteira é fechada porque a carteira está funcionando em segundo plano ou porque o Tor não foi configurado para encerrar. Fechar uma janela e sair do aplicativo são ações distintas.

Desativar o Tor altera as informações expostas aos serviços e pares acessados. Não é uma simples opção de desempenho sem consequências. Em particular, as conexões com um coordenador ou com um par usado para transmitir transações podem passar a ser associadas ao seu endereço de rede. Não o desative como resposta habitual a um CoinJoin em espera.

A conexão Tor do Ginger também não transforma um navegador externo em Tor Browser. As páginas de provedores, os exploradores e outros links usam o navegador configurado. Avalie esse navegador separadamente antes de presumir que suas requisições recebem a proteção de rede da carteira.

<span id="what-synchronization-does" data-ginger-heading="o-que-a-sincronização-faz" aria-hidden="true"></span>

## O que a sincronização faz

O Ginger usa filtros compactos de blocos para encontrar blocos potencialmente relevantes e processa localmente os dados de blocos baixados para sua carteira. Isso reduz a necessidade de enviar uma lista de todos os seus endereços a um servidor público de carteiras. Ainda assim, ele depende de serviços e pares da rede para obter dados e do funcionamento correto do software local.

O primeiro uso e a recuperação podem demorar mais do que reabrir uma carteira usada recentemente. O progresso pode incluir conexão, obtenção de filtros, download de blocos e processamento da carteira. Uma carteira recuperada pode mostrar temporariamente um histórico incompleto ou ocultar ações até terminar a varredura.

Executar um nó completo e sincronizar uma carteira são tarefas distintas. O nó completo opcional valida a blockchain; depois, a carteira precisa encontrar suas próprias transações. O estado sincronizado de um nó completo não significa necessariamente que uma carteira recém-recuperada terminou a varredura.

<span id="when-synchronization-appears-stuck" data-ginger-heading="quando-a-sincronização-parece-travada" aria-hidden="true"></span>

## Quando a sincronização parece travada

1. Confira o estado exato e veja se ele muda com o tempo. Uma varredura extensa de recuperação é diferente de **Awaiting connection**.
2. Confirme que o computador tem acesso à internet, que a data e a hora estão corretas e que há espaço em disco. Confira se o Ginger tem permissão para gravar seus dados.
3. Se você configurou um nó completo, confira se ele está acessível e sincronizado. Revise o endereço configurado em vez de alterar as credenciais da carteira.
4. Feche o Ginger normalmente e abra-o novamente uma vez se a conexão continuar travada. Guarde o texto do erro e o contexto do log se a falha voltar.

Se o Tor estiver bloqueado na sua rede, consulte as [orientações de conexão do Tor Project](https://support.torproject.org/). As configurações desta versão do Ginger não oferecem um assistente documentado para configurar pontes. Não copie as configurações do Tor Browser para campos de configuração arbitrários do Ginger presumindo que funcionarão.

Use **Wallet Settings** → **Tools** → **Resync** somente quando houver motivo para reconstruir a visualização da carteira. Preserve os backups primeiro e deixe uma nova varredura terminar. Excluir a pasta de dados não é a primeira etapa para resolver problemas.

<span id="separate-network-choice-from-real-funds" data-ginger-heading="separe-a-escolha-da-rede-dos-fundos-reais" aria-hidden="true"></span>

## Separe a escolha da rede dos fundos reais

O seletor de rede em **Settings** → **Bitcoin** desta versão oferece Main e RegTest. RegTest serve para um ambiente de teste isolado e não tem valor real em bitcoin; este manual não aborda a operação desse ambiente. Esta versão não oferece a seleção de uma testnet pública nessa interface. Mudar de rede não transfere fundos entre elas.
