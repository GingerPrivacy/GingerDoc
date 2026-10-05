---
doc_id: "getting-started.verify-download"
title: "Verifique um download do Ginger Wallet"
description: "Confira a assinatura de uma versão do Ginger Wallet e a impressão digital da chave de assinatura antes de instalar o programa."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "advanced"
sidebar:
  label: Verifique um download
  badge:
    text: Avançado
    variant: caution
prev: false
next: false
---

> Nível de leitura: Guia avançado. Use o [guia de instalação](/pt-pt/getting-started/install/) para identificar o download oficial e o pacote para seu computador.

Uma assinatura separada ajuda a estabelecer que o ficheiro descarregado foi assinado pelo detentor de uma determinada chave de assinatura e não foi alterado desde então. Ela não prova que o software está livre de falhas. Também deve estabelecer que a chave de assinatura é aquela em que pretendia confiar.

<span id="collect-the-matching-files" data-ginger-heading="reúna-os-ficheiros-correspondentes" aria-hidden="true"></span>

## Reúna os ficheiros correspondentes

Na [versão v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), descarregue seu instalador ou ficheiro compactado e o ficheiro com o mesmo nome seguido de `.asc`. Mantenha-os na mesma pasta. Por exemplo, o par do Windows é `Ginger-2.0.26.msi` e `Ginger-2.0.26.msi.asc`. Uma assinatura para DMG, ZIP ou outra versão não verifica esse MSI.

Obtenha a chave pública de assinatura pela ligação PGP no [site oficial](https://gingerwallet.io/). Guarde a chave como `PGP.txt`. Use um programa OpenPGP de confiança, como o GnuPG, para inspecioná-la e importá-la. Se o GnuPG não estiver instalado, obtenha-o na [página oficial de download do GnuPG](https://gnupg.org/download/).

<span id="check-the-fingerprint" data-ginger-heading="confira-a-impressão-digital" aria-hidden="true"></span>

## Confira a impressão digital

A impressão digital publicada pelo Ginger para esta versão é:

```text
FA0B 017A 3E75 CE65 CBF7 838F A8FF 3767 EDF5 DCE9
```

Num terminal aberto na pasta de download, inspecione a chave antes de importá-la:

```sh
gpg --show-keys --with-fingerprint PGP.txt
gpg --import PGP.txt
```

Compare a impressão digital completa, não apenas um identificador curto da chave ou o nome exibido. Quando possível, confirme-a através de uma cópia em que já confia ou de outro canal estabelecido do Ginger. Obter uma chave e uma assinatura da mesma fonte comprometida não estabeleceria, por si só, a autenticidade. Se o Ginger anunciar uma mudança de chave, verifique esse anúncio antes de confiar na nova impressão digital.

<span id="verify-the-actual-download" data-ginger-heading="verifique-o-download-efetivo" aria-hidden="true"></span>

## Verifique o download efetivo

Para o instalador do Windows, execute:

```sh
gpg --verify Ginger-2.0.26.msi.asc Ginger-2.0.26.msi
```

Para outra plataforma, substitua pelos dois nomes exatos dos ficheiros. Uma verificação bem-sucedida deve identificar uma assinatura válida da chave pretendida. O GnuPG também pode avisar que a chave não é certificada por uma assinatura de confiança: isso diz respeito à forma como autenticou a chave e não deve ser confundido com uma assinatura inválida do ficheiro.

Se o resultado indicar **BAD signature**, a chave estiver ausente, a impressão digital for diferente ou a verificação não conseguir terminar, não abra o download ainda. Confira o par de nomes de ficheiros, repita o download e procure ajuda pelas ligações oficiais do projeto se o problema persistir. Não marque uma chave desconhecida como de confiança apenas para eliminar um aviso.

<span id="checksums-and-platform-signatures" data-ginger-heading="somas-de-verificação-e-assinaturas-de-plataforma" aria-hidden="true"></span>

## Somas de verificação e assinaturas de plataforma

Uma comparação de somas de verificação pode detetar um erro de descarga. Uma soma de verificação obtida de uma página não de confiança não pode autenticar software, pois um atacante pode substituir tanto o ficheiro descarregado como a sua soma de verificação. A versão também fornece material de somas de verificação; o procedimento com assinatura separada correspondente descrito acima é suficiente para verificar um único pacote selecionado.

A assinatura de código do Windows e a assinatura ou notarização do macOS fornecem verificações adicionais da plataforma. Elas complementam a verificação da versão descarregada; não substituem a necessidade de proteger suas palavras de recuperação e conferir as transações.

Após uma verificação bem-sucedida, volte a [Instale o programa](/pt-pt/getting-started/install/#install-the-application).
