# Inbox View WhatsApp

Demo em React de uma tela de inbox inspirada no fluxo de atendimento via WhatsApp do JurisHub.

O objetivo desse repositório e mostrar uma proposta visual e estrutural da feature para avaliacao rapida do time, sem depender do backend real.

## O que tem aqui

- layout de inbox com sidebar de conversas e thread principal
- visual dark/clean baseado no mock criado para o projeto
- acoes no topo da conversa:
  - `Assumir Conversa`
  - `Devolver ao Bot`
  - `Ver Cliente`
- lista com varias conversas e conteudo diferente em cada uma
- divisor arrastavel para redimensionar sidebar e area da conversa no desktop
- interacoes visuais nos botoes, cards e bubbles
- estrutura modular seguindo o padrao `feature-first`

## Stack

- React
- TypeScript
- Vite
- TanStack Query
- Zustand

## Como rodar

```bash
npm install
npm run dev
```

Depois, abrir a URL mostrada pelo Vite no navegador.

## Build

```bash
npm run build
```

## Estrutura principal

```txt
src/
├── app/
├── components/
├── features/
│   └── inbox/
│       ├── api/
│       ├── components/
│       ├── hooks/
│       ├── mock/
│       ├── store/
│       ├── types/
│       └── utils/
├── lib/
└── styles.css
```

## Observacoes

- Os dados estao mockados em `src/features/inbox/mock/inbox-mock-db.ts`.
- A area de envio esta apenas como UI para apresentacao visual.
- O socket e a camada de API estao estruturados para facilitar conexao futura com backend real.

## Foco da proposta

Essa versao foi montada para demonstrar:

- uma implementacao modular do inbox no frontend
- uma interface mais pronta para produto
- uma base simples para evoluir depois com integracao real
