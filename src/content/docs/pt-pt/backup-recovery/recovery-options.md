---
doc_id: "backup-recovery.recovery-options"
title: "Recuperação avançada: contas, pesquisa de endereços e ficheiros"
description: "Investigue a compatibilidade de recuperação do Ginger, o limite de endereços não utilizados, a importação de carteiras JSON e metadados ausentes após conferir as palavras de recuperação e a frase de segurança originais."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Preserve as informações de recuperação originais e os ficheiros da carteira antes de alterar a configuração de recuperação ou dos ficheiros.

Primeiro, conclua [as verificações normais de recuperação](/pt-pt/backup-recovery/restore/): a carteira pretendida, as palavras e a frase de segurança originais exatas, a ligação e o progresso da pesquisa. Esta página aborda motivos específicos pelos quais essas verificações podem não ser suficientes.

<span id="address-scanning-and-account-compatibility" data-ginger-heading="pesquisa-de-endereços-e-compatibilidade-de-contas" aria-hidden="true"></span>

## Pesquisa de endereços e compatibilidade de contas

O ecrã de recuperação aceita conjuntos válidos de 12, 15, 18, 21 ou 24 palavras de recuperação em inglês e verifica sua soma de verificação. Palavras válidas, por si só, não estabelecem que a conta de outro programa seja compatível.

Se usou uma quantidade excecionalmente grande de endereços de receção não utilizados antes de um endereço que recebeu pagamento, **Advanced Recovery Options** oferece **Minimum Gap Limit:**. O valor predefinido do ecrã de recuperação nesta versão é 114. Aumentá-lo pode ampliar a pesquisa, ao custo de mais trabalho e tempo; não corrige palavras erradas, uma frase de segurança errada ou um formato de carteira incompatível. Use um valor maior apenas quando o seu histórico de endereços justificar isso.

Uma carteira criada originalmente noutro programa pode usar tipos de endereço, contas ou caminhos de derivação diferentes. As palavras BIP39, por si só, não garantem que toda carteira descubra todas as contas. Para as contas predefinidas do Ginger na mainnet, o SegWit nativo usa `m/84'/0'/0'` e o Taproot usa `m/86'/0'/0'`. A recuperação avançada noutro programa deve ser compatível com a conta e o tipo de endereço relevantes. Mantenha a recuperação de hardware num dispositivo de hardware sempre que possível.

O Ginger não oferece recuperação por partes SLIP39 nesta versão. Não insira um conjunto de partes de recuperação como se fosse uma única lista de palavras BIP39.

<span id="import-a-file" data-ginger-heading="importe-um-ficheiro" aria-hidden="true"></span>

## Importe um ficheiro

Escolha **Import File** no ecrã de adição de carteira e selecione um ficheiro `.json` compatível. O Ginger pode pedir um nome diferente quando ele já estiver em utilização. Um ficheiro JSON aleatório, uma PSBT de transação ou um xpub arbitrário colado num ficheiro de texto não é uma cópia de segurança de carteira compatível.

Use a frase de segurança original para abrir uma carteira de software importada protegida. Um ficheiro encriptado por meio da 2FA não equivale a uma cópia de segurança portátil não encriptada. Preserve seus ficheiros e credenciais relacionados ou recupere pelas palavras e pela frase de segurança original. Importar uma exportação de hardware cria uma carteira que continua a depender do dispositivo para assinar.

<span id="what-recovery-does-not-restore" data-ginger-heading="o-que-a-recuperação-não-restaura" aria-hidden="true"></span>

## O que a recuperação não restaura

A cadeia de blocos não pode restaurar etiquetas privadas, todas as definições do programa ou metadados de pedidos de prestadores. Preserve o ficheiro `.attr` correspondente quando eles forem importantes. Não sobrescreva ficheiros recém-recuperados com metadados antigos enquanto o Ginger estiver em execução. Se precisar de ajuda para restaurar dados de ficheiros auxiliares, trabalhe com cópias e descreva os nomes dos ficheiros e a versão sem partilhar seu conteúdo publicamente.

Mantenha os originais e trabalhe com cópias. Consulte [cópias de segurança dos ficheiros da carteira](/pt-pt/backup-recovery/backup-files/) antes de manipular dados locais.
