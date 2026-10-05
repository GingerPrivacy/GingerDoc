---
doc_id: "getting-started.install"
title: "Instale o Ginger Wallet"
description: "Escolha o download correto do Ginger Wallet para computador, confira a compatibilidade e instale a versão publicada do programa."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Instale o Ginger
prev:
  link: /getting-started/
  label: Comece aqui
next:
  link: /getting-started/first-wallet/
  label: Crie a sua primeira carteira
---

> Nível de leitura: Comece aqui. Os passos essenciais vêm primeiro; as referências avançadas são leituras complementares opcionais.

O Ginger Wallet é uma carteira Bitcoin para computador. Mantém as chaves dos seus bitcoins e pode usar CoinJoin para dificultar o rastreio das transações. Esta versão não oferece carteira para telemóvel, carteira Lightning nem compatibilidade com outras criptomoedas.

Este guia aborda a versão 2.0.26. Obtenha o software pelo [site oficial do Ginger](https://gingerwallet.io/) ou pela [versão publicada no GitHub](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) indicada nele. Um anúncio num mecanismo de pesquisa, uma mensagem privada ou um programa de telemóvel com nome semelhante não é uma fonte de confiança de download.

<span id="choose-a-download" data-ginger-heading="escolha-um-download" aria-hidden="true"></span>

## Escolha um download

| Computador | Sistema compatível com esta versão | Download |
| --- | --- | --- |
| PC Windows, x64 | Windows 10, versão 1607 ou posterior; Windows 11, compilação 22000 ou posterior | `Ginger-2.0.26.msi` |
| Mac com Apple silicon | macOS 12 ou posterior | `Ginger-2.0.26-arm64.dmg` |
| Mac com processador Intel | macOS 12 ou posterior | `Ginger-2.0.26.dmg` |
| Ubuntu ou Debian, x64 | Ubuntu 22.04 ou posterior; Debian 11 ou posterior | `Ginger-2.0.26.deb` |
| Outro Linux compatível, x64 | A versão também lista Fedora 37 ou posterior | `Ginger-2.0.26.tar.gz` |

Num Mac, **About This Mac** identifica o chip ou processador. A versão também contém ficheiros ZIP identificados como `win-x64`, `linux-x64`, `macOS-x64` e `macOS-arm64`. Não há pacote Windows ARM ou Linux ARM nesta versão. Não presuma que um ficheiro para outro processador funcionará.

O Ginger precisa de ligação à internet e armazenamento com permissão de escrita para os dados da carteira e da sincronização. O nó completo opcional exige muito mais espaço em disco, largura de banda e tempo de sincronização inicial do que o uso normal da carteira. Não precisa de um nó completo, de uma instalação separada do Tor ou de ferramentas de desenvolvimento para começar.

<span id="install-the-application" data-ginger-heading="instale-o-programa" aria-hidden="true"></span>

## Instale o programa

1. Descarregue o pacote para seu sistema na versão oficial. Confira a origem, a versão e o nome do pacote e observe as verificações de assinatura e segurança do sistema operativo. Para uma verificação PGP independente, use o ficheiro `.asc` correspondente e o [guia avançado de verificação de download](/pt-pt/getting-started/verify-download/) antes de abrir o pacote.
2. No Windows, abra o `.msi` e siga o instalador. No macOS, abra o `.dmg` e copie o Ginger para Applications. No Ubuntu ou Debian, abra o `.deb` com o instalador de software do sistema. Para o ficheiro Linux, extraia o ficheiro completo e inicie o programa incluído; mantenha seus ficheiros auxiliares juntos.
3. Abra o Ginger. Aguarde a primeira ligação e a sincronização. O Tor está incluído e normalmente inicia junto com a carteira.
4. Continue em [Crie e abra uma carteira](/pt-pt/getting-started/first-wallet/).

Um ficheiro ZIP ou tar dispensa o instalador normal, mas não torna a carteira descartável nem evita que sejam deixados dados no computador. Os ficheiros da carteira são armazenados separadamente do programa. Mantenha cópias de segurança antes de mover ou remover qualquer um deles.

<span id="if-your-operating-system-displays-a-warning" data-ginger-heading="se-o-sistema-operativo-mostrar-um-aviso" aria-hidden="true"></span>

## Se o sistema operativo mostrar um aviso

Uma nova versão pode ainda não ter uma reputação de download consolidada. Um aviso também pode indicar um ficheiro danificado ou não de confiança. Verifique primeiro a origem do download, a versão correspondente e a assinatura. Se a verificação falhar, pare e descarregue novamente da versão oficial. Não desative o antivírus ou as verificações de segurança de todo o sistema para ignorar um aviso sem explicação.

Para problemas de acesso a dispositivos no Linux, consulte as instruções de permissões USB do fabricante da sua carteira de hardware. Instalar uma carteira não exige executá-la permanentemente como administrador.

<span id="updates-and-availability" data-ginger-heading="atualizações-e-disponibilidade" aria-hidden="true"></span>

## Atualizações e disponibilidade

A [lista de versões](https://github.com/GingerPrivacy/GingerWallet/releases) mostra as versões publicadas e suas alterações. Em **Settings** → **General**, **Auto download new version** controla o download de atualizações. Descarregar uma atualização é diferente de instalá-la; siga a solicitação de atualização e permita que o Ginger feche normalmente. Mantenha a sua cópia de segurança de recuperação disponível antes de atualizar. Os ficheiros do programa podem ser substituídos sem excluir intencionalmente os dados da carteira.

Leia os termos de serviço atuais apresentados pelo Ginger antes de aceitá-los, incluindo quaisquer restrições de elegibilidade. Instalar o programa não estabelece a elegibilidade para usar todos os serviços ligados.
