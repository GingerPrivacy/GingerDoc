---
doc_id: "learn-self-custody.basics"
title: "Autocustódia de Bitcoin: cópias de segurança, frases de segurança e carteiras de hardware"
description: "Aprenda quem pode gastar seus bitcoins, o que torna uma cópia de segurança de recuperação completa e como as carteiras de software e de hardware diferem no Ginger."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nível de leitura: comece aqui. As etapas essenciais vêm primeiro; as referências avançadas são um complemento opcional.

Autocustódia significa que guarda as informações necessárias para gastar seus bitcoins. Aprova um pagamento sem pedir a um prestador de conta que liberte o dinheiro. Em troca, precisa proteger essas informações, manter uma cópia de segurança utilizável e conferir cada pagamento com cuidado.

<span id="keys-records-and-recovery" data-ginger-heading="chaves-registos-e-recuperação" aria-hidden="true"></span>

## Chaves, registos e recuperação

A rede Bitcoin mantém um registo público das transações. A sua carteira usa chaves secretas para autorizar gastos das partes que controla. Instalar o programa num computador substituto não recria esses segredos; por isso a cópia de segurança de recuperação é importante.

Para uma carteira de software do Ginger, as palavras de recuperação e a frase de segurança original recriam as chaves. Os ficheiros locais da carteira podem preservar contexto adicional, como etiquetas e definições. Um autenticador, o PIN de um dispositivo de hardware e um ficheiro copiado do computador têm funções diferentes; não se deve presumir que qualquer um deles substitui a cópia de segurança das palavras.

<span id="the-passphrase-changes-the-wallet" data-ginger-heading="a-frase-de-segurança-muda-a-carteira" aria-hidden="true"></span>

## A frase de segurança muda a carteira

O Ginger usa uma frase de segurança BIP39 junto com as palavras de recuperação. Uma frase de segurança diferente produz chaves diferentes. É por isso que uma recuperação pode terminar com sucesso e ainda mostrar uma carteira vazia quando introduz a frase de segurança original incorretamente. O [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) define essa relação.

Registe se usou uma frase de segurança e preserve-a com exatidão. Escolha uma proteção que consiga recuperar, em vez de um segredo complexo que só existe na memória. Guarde as instruções de recuperação para que, no futuro, consiga distinguir a frase de segurança da carteira do login do computador ou do código do autenticador.

<span id="software-versus-hardware" data-ginger-heading="software-ou-hardware" aria-hidden="true"></span>

## Software ou hardware

| Configuração | Onde acontece a assinatura | Responsabilidade prática |
| --- | --- | --- |
| Carteira de software do Ginger | No computador, usando o segredo disponível | Proteja o computador e as informações de recuperação; ele precisa conseguir assinar para o CoinJoin automático |
| Carteira de hardware usada pelo Ginger | No dispositivo, para as operações compatíveis | Confira os detalhes no dispositivo e preserve a cópia de segurança de recuperação do fabricante |
| Registo apenas de observação sem assinador | Não pode autorizar um gasto sozinho | Proteja seus dados públicos sensíveis à privacidade e mantenha acesso a um assinador separado |

Uma carteira de hardware pode reduzir a exposição das chaves ao malware do computador, mas ainda pode autorizar um pagamento malicioso se não examinar o ecrã do dispositivo. Importar sua semente para uma carteira de computador altera a configuração de segurança: essas chaves passam a ficar expostas a esse computador.

<span id="recovery-is-part-of-the-setup" data-ginger-heading="a-recuperação-faz-parte-da-configuração" aria-hidden="true"></span>

## A recuperação faz parte da configuração

Antes de confiar numa carteira, confirme que consegue encontrar e compreender a sua cópia de segurança. Para uma carteira de software do Ginger acessível, **Verify Recovery Words** confere as palavras que fornece. Mantenha também a frase de segurança original disponível. Para uma carteira de hardware, use o procedimento adequado de verificação de cópia de segurança do fabricante sem introduzir a semente no computador.

Guarde mais do que os ficheiros do programa. Os instaladores descarregados podem ser obtidos novamente; um segredo perdido não pode ser pesquisado no site do projeto. Pense em falhas de disco, perda de dispositivo e acesso ao local da cópia de segurança. As [orientações de segurança de carteiras](https://bitcoin.org/en/secure-your-wallet) do Bitcoin.org abordam cópias de segurança e proteção de dispositivos como práticas complementares.

<span id="evaluate-a-wallet-with-evidence" data-ginger-heading="avalie-uma-carteira-com-evidências" aria-hidden="true"></span>

## Avalie uma carteira com evidências

Use versões oficiais, verifique as assinaturas e leia os limites dos recursos que pretende usar. O código aberto permite a inspeção; ele não comprova que todo binário ou dependência foi auditado. Listagens externas, como a [entrada do Ginger no Bitcoin.org](https://bitcoin.org/en/wallets/desktop/windows/ginger/) e a [página do Ginger no WalletScrutiny](https://walletscrutiny.com/desktop/gingerwallet/), oferecem contexto adicional. Confira seu âmbito e suas datas em vez de tratar uma listagem como garantia sobre a versão instalada.

O Ginger reúne recuperação de carteira de software, integração com hardware e ferramentas de privacidade num fluxo para computador. Leitura avançada opcional: [crie uma rotina de segurança recuperável](/pt-pt/learn-self-custody/security-routine/), incluindo respostas a endereços, dados de carteira ou chaves expostos.
