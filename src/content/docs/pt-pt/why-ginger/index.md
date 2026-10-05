---
title: "Porquê usar o Ginger Wallet?"
description: "Escolha as ferramentas de privacidade do Bitcoin do Ginger conforme as informações que quer proteger, compreendendos seus limites."
doc_id: "learn-privacy.why-ginger"
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

O Ginger é uma carteira de código aberto para computador que usa Bitcoin on-chain. Controla as chaves, pode receber em endereços novos e conferir os pagamentos antes de assiná-los. O CoinJoin opcional ajuda a dificultar a dedução de vínculos de propriedade nas transações, enquanto o Tor integrado ajuda a reduzir a exposição direta do IP nas ligações encaminhadas por ele.

<span id="start-with-what-you-want-to-protect" data-ginger-heading="comece-pelo-que-quer-proteger" aria-hidden="true"></span>

## Comece pelo que quer proteger

- **Suas chaves para gastar:** mantenha uma cópia de segurança completa de recuperação e proteja o computador que assina transações. Uma carteira de hardware compatível pode manter as chaves de assinatura num dispositivo separado.
- **Seu histórico de pagamentos:** use endereços novos para receber, mantenha etiquetas locais úteis e confira quais moedas um pagamento gasta. [Veja o que uma transação Bitcoin revela](/pt-pt/using-ginger/privacy/).
- **Suas ligações:** mantenha ativada a proteção Tor normal do Ginger. Um navegador externo tem seu próprio comportamento de rede, cookies e contas.

Receber, enviar e participar em CoinJoin são ações distintas. Pode aprender primeiro a fazer pagamentos comuns e decidir depois se o CoinJoin atende a alguma preocupação sua com privacidade. Rondas concluídas têm taxas e não têm prazo de conclusão garantido.

<span id="understand-the-limits" data-ginger-heading="compreenda-os-limites" aria-hidden="true"></span>

## Compreenda os limites

As transações Bitcoin continuam públicas. O Tor não oculta do serviço destinatário as informações que lhe fornece. Um prestador de compras pode associar um pedido à sua identidade, e a pontuação de privacidade de uma carteira não pode garantir anonimato nem aceitação por uma corretora.

Os serviços opcionais também têm fluxos de dados específicos: os pedidos de compra e venda divulgam os dados exigidos, o 2FA usa um serviço durante o arranque normal, e o Secret Hunt pode enviar referências de transações e provas de propriedade. [Para onde vão as informações da sua carteira](/pt-pt/learn-privacy/information-sharing/) é uma referência avançada opcional sobre essas escolhas.

Comece com [hábitos quotidianos de privacidade](/pt-pt/using-ginger/address-reuse/) e mantenha uma rotina que consiga compreender e recuperar. O código aberto permite a inspeção; ele não garante que toda instalação esteja livre de erros nem que um computador comprometido seja seguro.
