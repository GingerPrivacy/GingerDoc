---
doc_id: "backup-recovery.recovery-options"
title: "Recuperação avançada: contas, busca de endereços e arquivos"
description: "Investigue a compatibilidade de recuperação do Ginger, o gap limit, a importação de carteiras JSON e metadados ausentes após conferir as palavras de recuperação e a frase de senha originais."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: Guia avançado. Preserve as informações de recuperação originais e os arquivos da carteira antes de alterar a configuração de recuperação ou dos arquivos.

Primeiro, conclua [as verificações normais de recuperação](/pt-br/backup-recovery/restore/): a carteira pretendida, as palavras e a frase de senha originais exatas, a conexão e o progresso da busca. Esta página aborda motivos específicos pelos quais essas verificações podem não ser suficientes.

<span id="address-scanning-and-account-compatibility" data-ginger-heading="busca-de-endereços-e-compatibilidade-de-contas" aria-hidden="true"></span>

## Busca de endereços e compatibilidade de contas

A tela de recuperação aceita conjuntos válidos de 12, 15, 18, 21 ou 24 palavras de recuperação em inglês e verifica sua soma de verificação. Palavras válidas, por si só, não estabelecem que a conta de outro aplicativo seja compatível.

Se você usou uma quantidade excepcionalmente grande de endereços de recebimento não utilizados antes de um endereço que recebeu pagamento, **Advanced Recovery Options** oferece **Minimum Gap Limit:**. O valor padrão da tela de recuperação nesta versão é 114. Aumentá-lo pode ampliar a busca, ao custo de mais trabalho e tempo; não corrige palavras erradas, uma frase de senha errada ou um formato de carteira incompatível. Use um valor maior apenas quando seu histórico de endereços justificar isso.

Uma carteira criada originalmente em outro aplicativo pode usar tipos de endereço, contas ou caminhos de derivação diferentes. As palavras BIP39, por si só, não garantem que toda carteira descubra todas as contas. Para as contas padrão do Ginger na mainnet, o SegWit nativo usa `m/84'/0'/0'` e o Taproot usa `m/86'/0'/0'`. A recuperação avançada em outro aplicativo deve oferecer suporte à conta e ao tipo de endereço relevantes. Mantenha a recuperação de hardware em um dispositivo de hardware sempre que possível.

O Ginger não oferece recuperação por partes SLIP39 nesta versão. Não insira um conjunto de partes de recuperação como se fosse uma única lista de palavras BIP39.

<span id="import-a-file" data-ginger-heading="importe-um-arquivo" aria-hidden="true"></span>

## Importe um arquivo

Escolha **Import File** na tela de adição de carteira e selecione um arquivo `.json` compatível. O Ginger pode pedir um nome diferente quando ele já estiver em uso. Um arquivo JSON aleatório, uma PSBT de transação ou um xpub arbitrário colado em um arquivo de texto não é um backup de carteira compatível.

Use a frase de senha original para abrir uma carteira de software importada protegida. Um arquivo criptografado por meio da 2FA não equivale a um backup portátil não criptografado. Preserve seus arquivos e credenciais relacionados ou recupere pelas palavras e pela frase de senha original. Importar uma exportação de hardware cria uma carteira que continua dependendo do dispositivo para assinar.

<span id="what-recovery-does-not-restore" data-ginger-heading="o-que-a-recuperação-não-restaura" aria-hidden="true"></span>

## O que a recuperação não restaura

A blockchain não pode restaurar rótulos privados, todas as configurações do aplicativo ou metadados de pedidos de provedores. Preserve o arquivo `.attr` correspondente quando eles forem importantes. Não sobrescreva arquivos recém-recuperados com metadados antigos enquanto o Ginger estiver em execução. Se precisar de ajuda para restaurar dados de arquivos auxiliares, trabalhe com cópias e descreva os nomes dos arquivos e a versão sem compartilhar seu conteúdo publicamente.

Mantenha os originais e trabalhe com cópias. Consulte [backups dos arquivos da carteira](/pt-br/backup-recovery/backup-files/) antes de manipular dados locais.
