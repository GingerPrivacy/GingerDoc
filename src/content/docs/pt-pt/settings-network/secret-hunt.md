---
doc_id: "settings-network.secret-hunt"
title: "Secret Hunt no Ginger Wallet"
description: "Encontre os resultados dos eventos Secret Hunt do Ginger, controle a participação da carteira e compreenda as informações que o serviço de eventos recebe."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nível de leitura: Utilização quotidiana. Escolha este guia quando precisar realizar a tarefa que ele descreve.

**Secret Hunt** é um recurso do Ginger que exibe segredos de eventos associados a atividades CoinJoin elegíveis. Ele é separado da pontuação de privacidade da carteira e do processo normal de receber ou gastar bitcoin. A disponibilidade dos eventos depende do serviço; a presença do recurso não promete um evento atual, prémio ou recompensa.

<span id="view-and-control-participation" data-ginger-heading="veja-e-controle-a-participação" aria-hidden="true"></span>

## Veja e controle a participação

Abra o menu de uma carteira de software e escolha **Secret Hunt**. A caixa de diálogo mostra os resultados dos eventos numa árvore, incluindo palavras ou frases descobertas e um segredo adicional quando os segredos exigidos pelo evento foram recolhidos. Expanda um evento para inspecionar suas entradas.

Use **Enable/disable the use of this wallet for Secret Hunt.** para controlar a participação dessa carteira. Na versão publicada, está ativado por predefinição. Desativá-lo limpa a árvore exibida na visão desativada e impede que o atualizador selecione essa carteira para as verificações de elegibilidade dos eventos. Isso não cancela CoinJoin, não exclui transações da cadeia de blocos nem apaga informações já enviadas a um serviço.

A opção não é oferecida para carteiras só de observação. Não é um recurso de CoinJoin de carteira de hardware e não exige inserir palavras de recuperação num site de evento.

<span id="what-is-shared" data-ginger-heading="o-que-é-partilhado" aria-hidden="true"></span>

## O que é partilhado

O cliente obtém informações dos eventos no serviço do Ginger. Para uma verificação de elegibilidade, ele pode enviar um identificador de transação CoinJoin, uma referência de entrada selecionada e uma prova criptográfica de propriedade. A prova demonstra o controlo para a solicitação do evento sem enviar a chave privada. Essas são exposições adicionais no nível do programa mesmo quando a ligação usa Tor.

O Tor trata da exposição no nível da rede; não remove o conteúdo de uma solicitação da visão do destinatário. Se não quiser que uma carteira seja usada nessas verificações, desative sua participação no Secret Hunt. As solicitações de lista de eventos e a atividade normal de rede da carteira são separadas dessa opção por carteira.

<span id="missing-or-incomplete-results" data-ginger-heading="resultados-ausentes-ou-incompletos" aria-hidden="true"></span>

## Resultados ausentes ou incompletos

Os resultados dependem das datas dos eventos, de atividades confirmadas qualificadas, da disponibilidade do serviço e das atualizações periódicas. Uma ronda pode terminar com sucesso sem revelar um novo segredo. A espera por resultados não é evidência de que bitcoins estejam em falta.

Não gere transações extras que pagam taxas presumindo que uma recompensa irá compensá-las. Leia os termos reais de um evento por uma fonte autenticada antes de decidir participar. Ignore solicitações de envio de um ficheiro de carteira ou de uma “taxa de resgate” separada para um endereço de apoio não solicitado.
