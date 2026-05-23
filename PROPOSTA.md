# Proposta do Inbox

## Objetivo

Organizar a implementacao do inbox de forma modular, visualmente apresentavel e simples de evoluir no MVP.

## Direcao da proposta

- separar a feature em `lista de conversas` e `thread da conversa`
- manter o frontend modular no padrao `feature-first`
- usar `TanStack Query` para dados do servidor
- usar `Zustand` apenas para estado visual
- deixar `Socket.io` como sincronizacao em tempo real, nao como fonte de verdade

## O que essa abordagem melhora

- evita componente gigante no frontend
- simplifica manutencao e evolucao da feature
- facilita integracao com backend
- deixa a tela pronta para cenarios de handoff entre humano e bot
- reduz retrabalho no MVP

## Estrutura pensada

- `ConversationList`
- `ConversationThread`
- `ConversationHeader`
- `MessageList`
- `MessageInput`
- `hooks` para filtros, conversa selecionada, realtime e resize
- `mock` separado da camada visual

## Decisoes visuais da demo

- interface clean e dark
- gradiente de fundo inspirado no mock original
- botoes de acao no topo da conversa
- animacoes leves de hover e foco
- divisor arrastavel entre sidebar e thread
- conteudo diferente em cada conversa para simular uso real

## Observacao

Essa demo foi feita como base de apresentacao e validacao visual/estrutural. A area de envio esta apenas como UI e a camada de dados esta mockada para facilitar avaliacao do fluxo.
