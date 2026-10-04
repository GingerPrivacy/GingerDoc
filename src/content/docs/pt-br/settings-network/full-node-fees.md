---
doc_id: "settings-network.full-node-fees"
title: "Use seu próprio nó Bitcoin e escolha estimativas de taxas"
description: "Configure o download de blocos do Ginger a partir de um nó que você controla, confira o recurso opcional Bitcoin Core incluído e escolha um provedor de estimativas de taxas."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Confira primeiro o estado normal da conexão e da sincronização.

Usar seu próprio nó Bitcoin pode reduzir a dependência de pares públicos para obter dados dos blocos. Também acrescenta responsabilidades de armazenamento, largura de banda, disponibilidade e manutenção. Você pode usar o Ginger sem ativar o nó completo opcional.

<span id="start-the-bundled-node" data-ginger-heading="inicie-o-nó-incluído" aria-hidden="true"></span>

## Inicie o nó incluído

Em **Settings** → **Bitcoin**, a opção se chama **(EXPERIMENTAL) Run Bitcoin Core on startup**. A versão 2.0.26 inclui Bitcoin Core 31. Use instruções correspondentes a esse nó incluído e à versão instalada.

1. Escolha uma **Bitcoin Core Data Folder** com espaço adequado e armazenamento confiável. Não aponte para uma pasta sem relação nem permita que dois processos de nó gerenciem o mesmo diretório simultaneamente.
2. Ative **(EXPERIMENTAL) Run Bitcoin Core on startup** e reinicie o Ginger quando solicitado.
3. Permita que a sincronização inicial do nó prossiga. Acompanhe o estado da conexão e do download; a primeira sincronização pode levar muito tempo.
4. Defina **Stop Bitcoin Core on shutdown** de acordo com sua intenção de manter ou não o nó em execução após sair do Ginger.

Não ative essa opção apenas para corrigir um saldo ausente da carteira. Um nó não pode recuperar uma frase de senha desconhecida nem restaurar rótulos. Um diretório de nó existente pode conter configurações importantes e suas próprias carteiras; preserve seu backup antes de alterar qual aplicativo o gerencia.

O nó completo pode verificar blocos localmente, mas isso não elimina as dependências do Ginger de coordenador, 2FA, compra e venda ou outros serviços. Também não oculta uma transação que você divulga voluntariamente a uma corretora.

<span id="connect-to-an-existing-node" data-ginger-heading="conecte-se-a-um-nó-existente" aria-hidden="true"></span>

## Conecte-se a um nó existente

Com a opção de iniciar o nó incluído desativada, **Bitcoin P2P Endpoint** permite especificar um nó que você controla para obter os blocos. Insira seu host acessível e a porta P2P. Para um nó Bitcoin Core da mainnet no mesmo computador, o endpoint usual é `127.0.0.1:8333`, desde que seu nó realmente esteja escutando ali. Esse campo recebe um endpoint de par Bitcoin, não uma URL de explorador de blocos ou credencial RPC.

Confira se o nó permite a conexão da carteira e tem os dados de blocos necessários. Um nó podado pode não manter blocos antigos de que uma carteira recuperada precisa. Verifique a disponibilidade se uma busca histórica parar, em vez de presumir que todas as configurações de nó sejam equivalentes.

Uma conexão com um nó remoto tem sua própria exposição de rede. Use um nó e um transporte que você entenda; simplesmente definir um endpoint não comprova que toda conexão com ele seja privada. Evite abrir o acesso administrativo RPC à internet pública para fazer uma conexão de carteira funcionar.

<span id="choose-fee-estimates-separately" data-ginger-heading="escolha-as-estimativas-de-taxas-separadamente" aria-hidden="true"></span>

## Escolha as estimativas de taxas separadamente

**Fee Rate Provider** oferece **Mempool Space**, **Blockstream Info** e **Full Node**. Os provedores públicos fornecem estimativas segundo sua visão das condições da rede. A opção de nó completo exige a integração de nó/RPC funcional do Ginger; inserir apenas um endpoint P2P não comprova que a estimativa de taxas por RPC esteja configurada.

Quando **Full Node** é selecionado, mas o nó está indisponível, a v2.0.26 informa que a estimativa de taxas está indisponível e ainda permite a entrada manual no processo de pagamento. Você pode aguardar o nó, selecionar um provedor de estimativas funcional ou inserir uma taxa em que tenha motivos para confiar. Não use uma taxa enorme como uma correção genérica de conexão.

Estimativas de taxas são previsões, não reservas de espaço em blocos. Uma diferença entre provedores pode refletir observações diferentes da mempool. Confira a taxa total da transação, além da taxa por tamanho exibida.

<span id="dust-threshold" data-ginger-heading="limite-de-dust" aria-hidden="true"></span>

## Limite de dust

**Dust Threshold**, também em **Settings** → **Bitcoin**, controla como a carteira trata valores recebidos muito pequenos. É diferente da política de retransmissão da rede, do limite de parada do CoinJoin e do valor mínimo de entrada de um coordenador. Aumentá-lo pode afetar quais pagamentos pequenos a carteira processa; não exclui suas saídas da blockchain nem impede que alguém os envie. Preserve sua configuração anterior ao investigar um pagamento pequeno inesperadamente ausente.
