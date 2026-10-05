---
doc_id: "getting-started.install"
title: "Instale o Ginger Wallet"
description: "Escolha o download correto do Ginger Wallet para computador, confira a compatibilidade e instale a versão publicada do aplicativo."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Instale o Ginger
prev:
  link: /getting-started/
  label: Comece aqui
next:
  link: /getting-started/first-wallet/
  label: Crie sua primeira carteira
---

> Nível de leitura: Comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são leituras complementares opcionais.

O Ginger Wallet é uma carteira Bitcoin para computador. Você mantém as chaves dos seus bitcoins e pode usar CoinJoin para dificultar o rastreamento das transações. Esta versão não oferece carteira para celular, carteira Lightning nem suporte a outras criptomoedas.

Este guia aborda a versão 2.0.26. Obtenha o software pelo [site oficial do Ginger](https://gingerwallet.io/) ou pela [versão publicada no GitHub](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) indicada nele. Um anúncio em um mecanismo de busca, uma mensagem privada ou um aplicativo de celular com nome semelhante não é uma fonte confiável de download.

<span id="choose-a-download" data-ginger-heading="escolha-um-download" aria-hidden="true"></span>

## Escolha um download

| Computador | Sistema compatível com esta versão | Download |
| --- | --- | --- |
| PC Windows, x64 | Windows 10, versão 1607 ou posterior; Windows 11, compilação 22000 ou posterior | `Ginger-2.0.26.msi` |
| Mac com Apple silicon | macOS 12 ou posterior | `Ginger-2.0.26-arm64.dmg` |
| Mac com processador Intel | macOS 12 ou posterior | `Ginger-2.0.26.dmg` |
| Ubuntu ou Debian, x64 | Ubuntu 22.04 ou posterior; Debian 11 ou posterior | `Ginger-2.0.26.deb` |
| Outro Linux compatível, x64 | A versão também lista Fedora 37 ou posterior | `Ginger-2.0.26.tar.gz` |

Em um Mac, **About This Mac** identifica o chip ou processador. A versão também contém arquivos ZIP identificados como `win-x64`, `linux-x64`, `macOS-x64` e `macOS-arm64`. Não há pacote Windows ARM ou Linux ARM nesta versão. Não presuma que um arquivo para outro processador funcionará.

O Ginger precisa de conexão à internet e armazenamento com permissão de gravação para os dados da carteira e da sincronização. O nó completo opcional exige muito mais espaço em disco, largura de banda e tempo de sincronização inicial do que o uso normal da carteira. Você não precisa de um nó completo, de uma instalação separada do Tor ou de ferramentas de desenvolvimento para começar.

<span id="install-the-application" data-ginger-heading="instale-o-aplicativo" aria-hidden="true"></span>

## Instale o aplicativo

1. Baixe o pacote para seu sistema na versão oficial. Confira a origem, a versão e o nome do pacote e observe as verificações de assinatura e segurança do sistema operacional. Para uma verificação PGP independente, use o arquivo `.asc` correspondente e o [guia avançado de verificação de download](/pt-br/getting-started/verify-download/) antes de abrir o pacote.
2. No Windows, abra o `.msi` e siga o instalador. No macOS, abra o `.dmg` e copie o Ginger para Applications. No Ubuntu ou Debian, abra o `.deb` com o instalador de software do sistema. Para o arquivo Linux, extraia o arquivo completo e inicie o aplicativo incluído; mantenha seus arquivos auxiliares juntos.
3. Abra o Ginger. Aguarde a primeira conexão e a sincronização. O Tor está incluído e normalmente inicia junto com a carteira.
4. Continue em [Crie e abra uma carteira](/pt-br/getting-started/first-wallet/).

Um arquivo ZIP ou tar dispensa o instalador normal, mas não torna a carteira descartável nem evita que sejam deixados dados no computador. Os arquivos da carteira são armazenados separadamente do aplicativo. Mantenha backups antes de mover ou remover qualquer um deles.

<span id="if-your-operating-system-displays-a-warning" data-ginger-heading="se-o-sistema-operacional-mostrar-um-aviso" aria-hidden="true"></span>

## Se o sistema operacional mostrar um aviso

Uma nova versão pode ainda não ter uma reputação de download consolidada. Um aviso também pode indicar um arquivo danificado ou não confiável. Verifique primeiro a origem do download, a versão correspondente e a assinatura. Se a verificação falhar, pare e baixe novamente da versão oficial. Não desative o antivírus ou as verificações de segurança de todo o sistema para ignorar um aviso sem explicação.

Para problemas de acesso a dispositivos no Linux, consulte as instruções de permissões USB do fabricante da sua carteira de hardware. Instalar uma carteira não exige executá-la permanentemente como administrador.

<span id="updates-and-availability" data-ginger-heading="atualizações-e-disponibilidade" aria-hidden="true"></span>

## Atualizações e disponibilidade

A [lista de versões](https://github.com/GingerPrivacy/GingerWallet/releases) mostra as versões publicadas e suas alterações. Em **Settings** → **General**, **Auto download new version** controla o download de atualizações. Baixar uma atualização é diferente de instalá-la; siga a solicitação de atualização e permita que o Ginger feche normalmente. Mantenha seu backup de recuperação disponível antes de atualizar. Os arquivos do aplicativo podem ser substituídos sem excluir intencionalmente os dados da carteira.

Leia os termos de serviço atuais apresentados pelo Ginger antes de aceitá-los, incluindo quaisquer restrições de elegibilidade. Instalar o aplicativo não estabelece a elegibilidade para usar todos os serviços conectados.
