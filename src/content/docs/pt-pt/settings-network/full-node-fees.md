---
doc_id: "settings-network.full-node-fees"
title: "Use o seu próprio nó Bitcoin e escolha estimativas de taxas"
description: "Configure o download de blocos do Ginger a partir de um nó que controla, confira o recurso opcional Bitcoin Core incluído e escolha um prestador de estimativas de taxas."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Confira primeiro o estado normal da ligação e da sincronização.

Usar o seu próprio nó Bitcoin pode reduzir a dependência de pares públicos para obter dados dos blocos. Também acrescenta responsabilidades de armazenamento, largura de banda, disponibilidade e manutenção. Pode usar o Ginger sem ativar o nó completo opcional.

<span id="start-the-bundled-node" data-ginger-heading="inicie-o-nó-incluído" aria-hidden="true"></span>

## Inicie o nó incluído

Em **Settings** → **Bitcoin**, a opção se chama **(EXPERIMENTAL) Run Bitcoin Core on startup**. A versão 2.0.26 inclui Bitcoin Core 31. Use instruções correspondentes a esse nó incluído e à versão instalada.

1. Escolha uma **Bitcoin Core Data Folder** com espaço adequado e armazenamento de confiança. Não aponte para uma pasta sem relação nem permita que dois processos de nó giram o mesmo diretório simultaneamente.
2. Ative **(EXPERIMENTAL) Run Bitcoin Core on startup** e reinicie o Ginger quando solicitado.
3. Permita que a sincronização inicial do nó prossiga. Acompanhe o estado da ligação e do download; a primeira sincronização pode levar muito tempo.
4. Defina **Stop Bitcoin Core on shutdown** de acordo com sua intenção de manter ou não o nó em execução após sair do Ginger.

Não ative essa opção apenas para corrigir um saldo ausente da carteira. Um nó não pode recuperar uma frase de segurança desconhecida nem restaurar etiquetas. Um diretório de nó existente pode conter definições importantes e suas próprias carteiras; preserve a sua cópia de segurança antes de alterar qual programa o gere.

O nó completo pode verificar blocos localmente, mas isso não elimina as dependências do Ginger de coordenador, 2FA, compra e venda ou outros serviços. Também não oculta uma transação que divulga voluntariamente a uma corretora.

<span id="connect-to-an-existing-node" data-ginger-heading="ligue-se-a-um-nó-existente" aria-hidden="true"></span>

## Ligue-se a um nó existente

Com a opção de iniciar o nó incluído desativada, **Bitcoin P2P Endpoint** permite especificar um nó que controla para obter os blocos. Insira seu host acessível e a porta P2P. Para um nó Bitcoin Core da mainnet no mesmo computador, o endpoint usual é `127.0.0.1:8333`, desde que seu nó realmente esteja à escuta ali. Esse campo recebe um endpoint de par Bitcoin, não uma URL de explorador de blocos ou credencial RPC.

Confira se o nó permite a ligação da carteira e tem os dados de blocos necessários. Um nó podado pode não manter blocos antigos de que uma carteira recuperada precisa. Verifique a disponibilidade se uma pesquisa histórica parar, em vez de presumir que todas as definições de nó sejam equivalentes.

Uma ligação com um nó remoto tem sua própria exposição de rede. Use um nó e um transporte que compreenda; simplesmente definir um endpoint não comprova que toda ligação com ele seja privada. Evite abrir o acesso administrativo RPC à internet pública para fazer uma ligação de carteira funcionar.

<span id="choose-fee-estimates-separately" data-ginger-heading="escolha-as-estimativas-de-taxas-separadamente" aria-hidden="true"></span>

## Escolha as estimativas de taxas separadamente

**Fee Rate Provider** oferece **Mempool Space**, **Blockstream Info** e **Full Node**. Os prestadores públicos fornecem estimativas segundo sua visão das condições da rede. A opção de nó completo exige a integração de nó/RPC funcional do Ginger; inserir apenas um endpoint P2P não comprova que a estimativa de taxas por RPC esteja configurada.

Quando **Full Node** é selecionado, mas o nó está indisponível, a v2.0.26 informa que a estimativa de taxas está indisponível e ainda permite a entrada manual de uma taxa por byte virtual no processo de pagamento. Pode aguardar o nó, selecionar um prestador de estimativas funcional ou inserir uma taxa por byte virtual em que tenha motivos para confiar. Não use uma taxa enorme como uma correção genérica de ligação.

Estimativas de taxas são previsões, não reservas de espaço em blocos. Uma diferença entre prestadores pode refletir observações diferentes do mempool. Confira a taxa total da transação, além da taxa por byte virtual exibida.

<span id="dust-threshold" data-ginger-heading="limite-de-poeira" aria-hidden="true"></span>

## Limite de poeira

**Dust Threshold**, também em **Settings** → **Bitcoin**, controla como a carteira trata valores recebidos muito pequenos. É diferente da política de retransmissão da rede, do limite de paragem do CoinJoin e do valor mínimo de entrada de um coordenador. Aumentá-lo pode afetar quais pagamentos pequenos a carteira processa; não exclui suas saídas da cadeia de blocos nem impede que alguém os envie. Preserve sua configuração anterior ao investigar um pagamento pequeno inesperadamente ausente.
