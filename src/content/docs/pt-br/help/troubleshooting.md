---
doc_id: "help.troubleshooting"
title: "Solução de problemas do Ginger Wallet"
description: "Diagnostique saldos ausentes, problemas de conexão, erros de configuração e RPC, estados de espera do CoinJoin, falhas de 2FA e problemas de hardware, preservando os dados de recuperação."
lang: "pt-BR"
verified_release: "v2.0.27"
reader_level: "everyday"
prev: false
next: false
---

> Nível de leitura: uso cotidiano. Escolha este guia quando precisar realizar a tarefa que ele descreve.

Comece pelo erro exato, pela carteira selecionada, pela rede e pela versão do aplicativo. Preserve as informações de recuperação e os arquivos da carteira antes de alterar dados. Reinstalar, apagar pastas ou criar palavras novas raramente é o primeiro passo para um problema de conexão ou exibição.

<span id="balance-recovery-and-receiving" data-ginger-heading="saldo-recuperação-e-recebimento" aria-hidden="true"></span>

## Saldo, recuperação e recebimento

| Sintoma | O que conferir primeiro | Próximo passo |
| --- | --- | --- |
| A carteira recuperada está vazia | Palavras originais, frase-senha exata, rede e progresso da varredura | Compare endereços conhecidos ou o histórico após a sincronização; use verificações avançadas de recuperação somente se essas verificações comuns não explicarem o problema |
| Um pagamento recebido não aparece | Endereço correto, identificador de transação do remetente e carteira selecionada | Confira a transmissão e a confirmação, depois a sincronização local |
| Receive ou Send não aparecem | A recuperação ainda está ativa? A carteira é somente de observação? | Aguarde a recuperação ou use o dispositivo de assinatura necessário |
| Um endereço antigo sumiu da lista de recebimento | Ele recebeu pagamento ou foi ocultado? | Confira o histórico; a visibilidade na lista não invalida as chaves |
| Apenas um pagamento minúsculo não aparece | Limite de poeira e sincronização | Compare o limite configurado antes de presumir que os fundos foram roubados |
| Os rótulos desapareceram após recuperação pela semente | O arquivo ATTR correspondente foi copiado para backup? | Preserve esse arquivo; os rótulos não podem ser reconstruídos a partir da blockchain |

Não digite palavras de recuperação em um site para “ressincronizar” uma carteira. Use o fluxo de recuperação da carteira instalada e verificada somente em um computador confiável.

<span id="connection-or-synchronization" data-ginger-heading="conexão-ou-sincronização" aria-hidden="true"></span>

## Conexão ou sincronização

Confira a conectividade, o relógio do computador, o espaço livre e o status de um nó completo configurado. Uma primeira varredura pode simplesmente precisar de tempo. Se o progresso nunca mudar, feche o Ginger normalmente e reabra uma vez. Registre o que acontece, em vez de reiniciar uma varredura repetidamente.

**Awaiting connection** pode impedir CoinJoin e outros serviços mesmo quando a carteira tem histórico em cache. Considere um saldo sem conexão potencialmente incompleto. Mantenha Tor ativado durante a investigação. A conexão P2P e as estimativas de taxas obtidas via RPC de um nó configurado são separadas; o funcionamento de uma não comprova o da outra.

Se usar **Wallet Settings** → **Tools** → **Resync**, preserve os backups primeiro e espere uma nova varredura. Não apague `Wallets`, `WalletBackups` ou arquivos de 2FA apenas para remover uma mensagem de progresso.

<span id="startup-reports-an-invalid-configuration" data-ginger-heading="a-inicialização-informa-uma-configuração-inválida" aria-hidden="true"></span>

## A inicialização informa uma configuração inválida

Na v2.0.27, o Ginger interrompe a inicialização se não conseguir carregar `Config.json`, preservando o arquivo original. O erro informa o caminho dele. Quando possível, o Ginger cria um `Config.Default.json` separado ao lado dele como modelo das configurações padrão; um modelo existente também é preservado. Esse erro diz respeito às configurações do aplicativo e, por si só, não significa que uma carteira ou suas chaves estejam danificadas.

1. Feche o Ginger e preserve [a pasta de dados e os backups das carteiras](/pt-br/backup-recovery/backup-files/) antes de alterar arquivos. Mantenha uma cópia separada do `Config.json` original.
2. Se entender a configuração, compare-a com `Config.Default.json` e corrija o JSON inválido ou o valor da configuração. O modelo pode estar ausente se o Ginger não tiver conseguido gravá-lo.
3. Para iniciar deliberadamente com as configurações padrão do aplicativo, renomeie o `Config.json` original, por exemplo para `Config.before-repair.json`, e guarde-o. Reinicie o Ginger para gerar um novo `Config.json`.
4. Confira suas configurações de rede, Tor, nó completo e outras personalizações antes de retomar o uso normal. Renomear esse arquivo de configurações não recupera uma frase-senha esquecida nem substitui os backups da carteira. Mantenha `Wallets`, `WalletBackups` e os arquivos de 2FA intactos.

Se as configurações de inicialização do Windows causavam um erro, a v2.0.27 passa a lidar com a ausência de uma entrada de inicialização no Registro. Confira **Settings** → **General** → **Run Ginger when computer starts** após atualizar.

<span id="json-rpc-does-not-start" data-ginger-heading="o-json-rpc-não-inicia" aria-hidden="true"></span>

## O JSON-RPC não inicia

Essa verificação se aplica se tiver ativado explicitamente o servidor JSON-RPC da carteira Ginger. Na v2.0.27, ele exige que `JsonRpcUser` e `JsonRpcPassword` contenham valores não vazios; valores compostos apenas por espaços são rejeitados. Sem eles, o servidor RPC se recusa a iniciar e registra o motivo, enquanto o aplicativo da carteira continua funcionando.

Com o Ginger fechado, defina ambas as credenciais em `Config.json` e configure o cliente que se conecta para usá-las. Se não precisar do servidor, defina `JsonRpcServerEnabled` como `false`. Não inclua credenciais em logs compartilhados e solicitações de suporte. Essas são configurações RPC da carteira Ginger, separadas das credenciais RPC de um nó Bitcoin Core ou da frase-senha da carteira.

<span id="coinjoin-does-not-start" data-ginger-heading="coinjoin-não-inicia" aria-hidden="true"></span>

## CoinJoin não inicia

| Mensagem ou condição | Ação provável |
| --- | --- |
| **Insufficient funds eligible for coinjoin** | Inspecione confirmações, valores das moedas, taxas e exclusões; o saldo total, por si só, não estabelece a elegibilidade |
| **Only excluded funds are available** | Confira **Exclude Coins** se quiser que algumas moedas participem |
| **Only immature funds are available** | Aguarde a maturidade exigida; saídas recém-mineradas têm regras especiais de gasto |
| **Some funds are rejected from coinjoining** | Leia o motivo associado e os termos atuais do serviço; uma rejeição não transfere a propriedade dos seus fundos |
| **Awaiting cheaper coinjoins** | Confira as preferências de custo e decida se esperar atende ao seu objetivo |
| **Coinjoin may be uneconomical** | Confira o limite de parada e os custos relativos antes de ignorá-lo manualmente |
| **Awaiting the blame round** | Aguarde a nova tentativa do protocolo; isso não é uma instrução para culpar outro usuário |
| **Awaiting closure of send dialog** | Conclua ou feche o fluxo de envio |
| **Mining fee rate was too high** ou **Coordination fee rate was too high** | Espere ou investigue as condições oferecidas; não aumente os limites às cegas |
| Carteira de hardware como origem | A assinatura automática CoinJoin exige uma carteira de software elegível |

Os participantes de uma rodada podem não concluir suas etapas, ou uma moeda pode ficar temporariamente indisponível após uma participação interrompida. Repetir tentativas, importações ou esforços para contornar a rejeição de um coordenador não é uma correção. Use o motivo e o status atual para decidir se deve esperar ou contatar o suporte oficial.

A versão 2.0.27 corrige um encerramento inesperado no macOS ao parar o CoinJoin. Se o Ginger fechar durante a participação, reabra-o, deixe a carteira sincronizar e inspecione o histórico antes de presumir que uma transação falhou. Fechar o aplicativo não reverte uma transação já transmitida. Registre qualquer erro recorrente e a versão instalada para o suporte.

<span id="payment-or-fee-problems" data-ginger-heading="problemas-de-pagamento-ou-taxas" aria-hidden="true"></span>

## Problemas de pagamento ou taxas

Quando as estimativas de taxas estiverem indisponíveis, espere, corrija a conexão com o provedor ou nó selecionado, ou use uma taxa por byte virtual escolhida manualmente que você compreenda. Garanta que o valor final mais as taxas caiba nos fundos disponíveis para gastar. Uma longa cadeia de transações não confirmadas pode exigir esperar as confirmações anteriores.

Use **Speed Up Transaction** ou **Cancel Transaction** somente quando o Ginger oferecer a opção e depois de conferir a taxa. Cancelar é uma tentativa de substituir um pagamento pendente, não uma reversão de pagamento confirmado. Após um resultado incerto de transmissão, confira o histórico antes de pagar duas vezes.

<span id="2fa-and-hardware" data-ginger-heading="2fa-e-hardware" aria-hidden="true"></span>

## 2FA e hardware

Para um código de autenticador rejeitado, confira a hora do telefone, a entrada selecionada, a compatibilidade do autenticador com o Ginger e a conectividade com Tor e com o serviço. Preserve os arquivos existentes da carteira e da 2FA. Se não for possível restaurar a inicialização normal, as palavras de recuperação mais a frase-senha original são o backup independente das chaves; reinstalar sobre os mesmos dados não recria um autenticador perdido. As [perguntas frequentes avançadas](/pt-br/help/advanced-faq/#does-the-2fa-file-recover-the-wallet-without-the-service) explicam a dependência do arquivo.

Para detectar o dispositivo, use uma carteira de hardware desbloqueada, um cabo de dados e uma porta USB direta, com os aplicativos concorrentes do dispositivo fechados. Conclua as etapas necessárias no dispositivo para o aplicativo Bitcoin, o PIN ou a frase-senha. No Linux, confira as permissões USB do fabricante. Mantenha a semente do dispositivo fora do computador.

<span id="report-a-useful-issue" data-ginger-heading="relate-um-problema-de-forma-útil" aria-hidden="true"></span>

## Relate um problema de forma útil

Use os links do [repositório oficial do Ginger](https://github.com/GingerPrivacy/GingerWallet/issues). Inclua a versão lançada, o sistema operacional e o processador, o erro exato, o resultado esperado e os passos mais curtos sem segredos que o reproduzem. Mencione o modelo e a versão do firmware de hardware quando for relevante.

A ação **Logs** da pesquisa do Ginger abre os logs de diagnóstico. Inspecione e remova informações sensíveis antes de compartilhar: caminhos, endereços, identificadores de transação, rótulos e dados de pedidos podem ser sensíveis. Compartilhe um trecho mínimo relevante, não a pasta inteira de dados. Um relato público de problema é público; nenhuma solicitação de suporte deve exigir suas palavras de recuperação ou frase-senha.
