---
doc_id: "learn-coinjoin.trust-and-limits"
title: "Em que confia ao participar em CoinJoin?"
description: "Diferencie o controlo das chaves Bitcoin, as premissas de privacidade do CoinJoin, a disponibilidade do coordenador, a independência dos participantes e a verificação do software."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, leia a explicação simples sobre CoinJoin.

Com o Ginger, mantém a autoridade para assinar transações Bitcoin em vez de depositar fundos num saldo controlado por um serviço de mistura. Isso responde a uma pergunta importante sobre custódia. Privacidade, disponibilidade e integridade do software envolvem perguntas adicionais.

Antes de participar, identifique seu objetivo: talvez queira que um destinatário saiba menos sobre seus outros pagamentos ou reduzir os vínculos entre gastos futuros e uma receção conhecida publicamente. O CoinJoin pode ajudar na privacidade dos vínculos entre transações, mas não pode remover informações que o destinatário já obteve de si.

<span id="four-separate-questions" data-ginger-heading="quatro-perguntas-distintas" aria-hidden="true"></span>

## Quatro perguntas distintas

| Pergunta | Proteção e premissa | O que isso não comprova |
| --- | --- | --- |
| Quem pode gastar? | Sua carteira assina suas entradas depois de conferir a transação proposta. O coordenador não precisa de suas palavras de recuperação. | Proteção contra chaves roubadas, malware ou uma transação que autoriza conscientemente para o destino errado |
| Quem pode vincular as entradas e saídas? | O WabiSabi usa credenciais anónimas para ocultar as relações entre os registos. Os dados públicos das transações e outras observações continuam a existir. | Uma garantia incondicional contra um coordenador malicioso, participantes em conluio ou informações externas |
| Quem pode interromper o progresso? | A participação bem-sucedida exige que o coordenador, a rede e participantes cooperantes em número suficiente concluam a ronda. | Um prazo reservado para a conclusão ou o direito de participar em toda ronda oferecida |
| Que software estou a executar? | O código aberto permite a inspeção; verificar o download ajuda a estabelecer a origem e a integridade do ficheiro obtido. | Prova de que toda compilação é livre de erros, de que seu computador não está comprometido ou de que um serviço remoto executa exatamente o código publicado |

O [artigo sobre WabiSabi, secção 7](https://cryptoeconomicsystems.pubpub.org/pub/ficsor-wabisabi-coordinated/release/3) trata separadamente a privacidade, os ataques ativos e a prevenção de roubo. Este guia aplica essa distinção às decisões do utilizador; ele não é uma auditoria de segurança de uma carteira ou coordenador instalados.

<span id="consider-the-observer" data-ginger-heading="considere-o-observador" aria-hidden="true"></span>

## Considere o observador

Um observador passivo da cadeia de blocos vê as entradas, saídas, valores e gastos posteriores das transações. Ele pode aplicar heurísticas e combinar esses dados com informações obtidas noutros locais. Um comerciante tem conhecimentos adicionais sobre sua própria cobrança e cliente. Uma corretora conhece o levantamento ou depósito que processou.

Um participante também conhece suas próprias entradas e saídas, o que elimina algumas possibilidades. Um coordenador lida com os registos e pode observar os horários do protocolo; um coordenador ativamente malicioso pode influenciar quem participa ou se as rondas são concluídas. São capacidades diferentes, portanto uma afirmação que aborda apenas a observação da cadeia de blocos pública não deve ser interpretada como proteção contra todos esses agentes.

<span id="apparent-participants-are-not-independent-people" data-ginger-heading="participantes-aparentes-não-são-pessoas-independentes" aria-hidden="true"></span>

## Participantes aparentes não são pessoas independentes

Um ataque Sybil significa que um único agente aparece como vários participantes. Se um atacante controla a maior parte da atividade ao redor de um alvo, ele pode excluir suas próprias moedas das possibilidades que considera. Uma transação pode parecer movimentada e ainda assim oferecer menos incerteza para esse observador do que para um observador sem essas informações.

Entradas reais e taxas de mineração criam restrições económicas. Elas não permitem que um utilizador comum verifique a identidade independente de cada participante. Assim, o número de entradas, o número de saídas, o volume de transações e a pontuação de anonimato de uma carteira não são uma contagem de pessoas independentes.

Rondas maiores podem oferecer mais possibilidades, mas os valores, o conhecimento dos participantes e as transações posteriores continuam a ser importantes. Não há um número de rondas nem um valor de meta que prove que um atacante não aprendeu nada.

<span id="when-the-coordinator-or-connection-is-unavailable" data-ginger-heading="quando-o-coordenador-ou-a-ligação-estão-indisponíveis" aria-hidden="true"></span>

## Quando o coordenador ou a ligação estão indisponíveis

As moedas já controladas por suas chaves não se tornam um saldo que o coordenador deve a si. Uma tentativa malsucedida antes da transmissão não as transfere, por si só, para o coordenador. Durante uma ronda ativa, porém, o Ginger pode precisar concluir tarefas críticas antes que as moedas fiquem disponíveis para outra ação; use o controlo de pausa do painel de controlo e acompanhe o estado atual.

Se o CoinJoin não puder continuar, pause e examine o motivo. Um envio comum ainda exige um caminho de assinatura disponível, moedas que possam ser gastas, informações sincronizadas e uma forma de transmitir a transação. A indisponibilidade de um coordenador, sozinha, não é motivo para descartar cópias de segurança ou enviar palavras de recuperação a um serviço substituto. O 2FA opcional do Ginger tem sua própria dependência de serviço para o arranque normal, portanto mantenha as palavras e a frase de segurança original recuperáveis de forma independente.

Uma recusa ou uma ronda malsucedida não é, por si só, evidência de um ataque nem de um julgamento sobre sua identidade. Da mesma forma, uma ronda bem-sucedida não certifica a honestidade do coordenador. Preserve os registos privados relevantes se um problema concreto exigir investigação.

<span id="decisions-you-can-make" data-ginger-heading="decisões-que-pode-tomar" aria-hidden="true"></span>

## Decisões que pode tomar

1. Obtenha o Ginger por sua distribuição oficial e verifique o download. Use atualizações autenticadas e proteja a máquina que assina.
2. Mantenha o Tor ativado para a privacidade de rede pretendida da carteira. Ele não oculta do serviço destinatário as informações que envia explicitamente.
3. Confira a carteira selecionada, o destino das saídas, as moedas elegíveis e as preferências de custo. Não aumente limites apenas para silenciar um erro sem explicação.
4. Guarde o material de recuperação de forma independente. Nunca entregue suas palavras, frase de segurança ou chaves privadas a um coordenador ou contacto de apoio para “desbloquear” uma ronda.
5. Confira o resultado e os gastos posteriores. Um endereço novo e uma pontuação alta não desfazem uma nova divulgação a um destinatário identificado.

Um nó Bitcoin próprio é útil para as funções que realmente desempenha, como fornecer blocos ou estimativas de taxas quando configurado. Ele não substitui o coordenador de CoinJoin nem comprova que os participantes são independentes. Uma carteira de hardware isola as chaves, mas não torna privado o grafo de transações.

Para o modelo básico da transação, leia [CoinJoin explicado](/pt-pt/learn-coinjoin/explained/). Para decidir se ele atende a uma finalidade específica, leia [quando o CoinJoin é útil](/pt-pt/learn-coinjoin/when-to-use/). Trate afirmações fortes sobre produtos como perguntas a investigar: qual observador, quais premissas, qual versão do software e quais evidências?
