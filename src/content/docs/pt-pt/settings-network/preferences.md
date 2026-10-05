---
doc_id: "settings-network.preferences"
title: "Aparência, idioma e definições do dia a dia"
description: "Altere o idioma do Ginger, os formatos de exibição, o comportamento em segundo plano, as preferências de navegador e o modo discreto sem confundi-los com a segurança da carteira."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nível de leitura: Utilização quotidiana. Escolha este guia quando precisar realizar a tarefa que ele descreve.

Use **Settings** para as preferências de todo o programa e **Wallet Settings** para o nome, a configuração de CoinJoin e as ferramentas da carteira selecionada. A pesquisa do programa pode encontrar ações como **Data Folder**, **Wallet Info** e **Discreet Mode** sem depender da posição de um ícone.

<span id="language-and-amounts" data-ginger-heading="idioma-e-valores" aria-hidden="true"></span>

## Idioma e valores

Em **Settings** → **Appearance**, **Language** seleciona o idioma da interface. A versão 2.0.26 oferece inglês, espanhol, húngaro, francês, chinês, alemão, português, turco e italiano. Siga qualquer solicitação de reinicialização. Este manual mantém as etiquetas em inglês da versão publicada; as etiquetas traduzidas podem ser diferentes.

**Dark mode** altera a aparência. **Exchange currency** altera a moeda fiduciária de referência exibida, enquanto os separadores decimais e de grupos, o agrupamento de frações de bitcoin e **Fee display unit** controlam a apresentação dos números. Isso não altera o valor subjacente em BTC nem a taxa de transação da rede. Leia os exemplos nas definições antes de inserir um valor num formato desconhecido.

<span id="discreet-mode" data-ginger-heading="modo-discreto" aria-hidden="true"></span>

## Modo discreto

Use **Discreet Mode** quando alguém puder ver o seu ecrã. Ele oculta os campos sensíveis de exibição que são compatíveis para reduzir a observação casual. Confira o que realmente está oculto antes de partilhar o ecrã: o recurso não garante que todas as caixas de diálogo, endereços ou programas externos estejam escondidos.

O modo discreto não encripta ficheiros, bloqueia a carteira, interrompe a assinatura ou altera a privacidade da cadeia de blocos. Uma pessoa com acesso ao computador ainda pode interagir com o programa. Use o bloqueio de ecrã do sistema operativo quando se afastar.

<span id="general-settings" data-ginger-heading="definições-gerais" aria-hidden="true"></span>

## Definições gerais

| Configuração | Efeito prático |
| --- | --- |
| **Run Ginger when computer starts** | Abre o Ginger junto com a sessão do sistema operativo. |
| **Run in background when window closed** | Permite que o programa continue ativo após fechar a janela. Portanto, o CoinJoin e a sincronização podem continuar. |
| **Auto copy addresses** | Pode colocar automaticamente um endereço exibido na área de transferência. |
| **Auto paste addresses** | Pode usar o conteúdo da área de transferência nos processos de entrada de endereço. Sempre confira o destino resultante. |
| **Auto download new version** | Controla a obtenção de uma atualização disponível; siga a solicitação de instalação separadamente. |
| **Browser used by Ginger** | Escolhe o navegador usado para páginas externas; a opção personalizada exibe **Custom browser path**. |

A conveniência da área de transferência não autentica o destinatário. Outros programas podem ler ou substituir seus dados. Nunca coloque palavras de recuperação na área de transferência como parte de uma receção ou envio normal.

Páginas externas usam o próprio comportamento de rede e privacidade do navegador selecionado. Um prestador de compra ou venda pode pedir informações de identificação mesmo que o próprio Ginger esteja a usar Tor. Alterar uma preferência de exibição ou navegador não altera os registos do prestador.

<span id="wallet-information-and-tools" data-ginger-heading="informações-e-ferramentas-da-carteira" aria-hidden="true"></span>

## Informações e ferramentas da carteira

**Wallet Info** pode exibir informações de conta e de chave pública estendida. Uma chave pública estendida não pode gastar moedas diretamente, mas pode revelar muitos endereços relacionados. Não a publique numa solicitação pública de apoio.

Em **Wallet Settings** → **General**, use o controlo de nome para renomear a carteira. Em **Tools**, **Verify Recovery Words** verifica a cópia de segurança de uma carteira de software acessível, **Resync** reconstrói sua visão e **Delete Wallet** remove uma carteira local por meio do processo de confirmação. A exclusão não destrói os bitcoins, não revoga as palavras de recuperação nem substitui uma cópia de segurança. Mantenha informações de recuperação funcionais antes de remover o acesso local.
