import type { ConversationFilter, ConversationSummary } from '../types/conversation';
import type { Message, MessagesPage } from '../types/message';

type InboxConversationRecord = ConversationSummary & {
  statusLabel?: string;
};

const delay = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

const conversations: InboxConversationRecord[] = [
  {
    leadId: 'lead-1',
    clientName: 'Carlos eduardo',
    phone: '+55 71 99999-1111',
    lastMessage: 'Boa tarde! preciso de uma confirmacao...',
    lastMessageAt: '2026-05-23T10:32:00.000Z',
    unreadCount: 0,
    botActive: false,
    assumedBy: 'user-1',
    assumedByName: 'Voce',
    pipelineStage: 'Voce assumiu',
  },
  {
    leadId: 'lead-2',
    clientName: 'Marina Souza',
    phone: '+55 71 99999-2222',
    lastMessage: 'Consegui reunir os documentos. Como envio?',
    lastMessageAt: '2026-05-23T10:32:00.000Z',
    unreadCount: 2,
    botActive: true,
    assumedBy: null,
    assumedByName: null,
    pipelineStage: 'Novo lead',
  },
  {
    leadId: 'lead-3',
    clientName: 'Ricardo Lima',
    phone: '+55 71 99999-3333',
    lastMessage: 'Quero entender se cabe revisao contratual.',
    lastMessageAt: '2026-05-23T10:32:00.000Z',
    unreadCount: 0,
    botActive: true,
    assumedBy: null,
    assumedByName: null,
    pipelineStage: 'Qualificacao',
  },
  {
    leadId: 'lead-4',
    clientName: 'Patricia Gomes',
    phone: '+55 71 99999-4444',
    lastMessage: 'A empresa marcou audiencia interna para amanha.',
    lastMessageAt: '2026-05-23T10:32:00.000Z',
    unreadCount: 0,
    botActive: true,
    assumedBy: null,
    assumedByName: null,
    pipelineStage: 'Qualificacao',
  },
  {
    leadId: 'lead-5',
    clientName: 'Eduardo Nunes',
    phone: '+55 71 99999-5555',
    lastMessage: 'Tenho duvida sobre rescisao indireta.',
    lastMessageAt: '2026-05-23T10:32:00.000Z',
    unreadCount: 0,
    botActive: true,
    assumedBy: null,
    assumedByName: null,
    pipelineStage: 'Qualificacao',
  },
];

const messagesByLead = new Map<string, Message[]>([
  [
    'lead-1',
    [
      {
        id: 'm-1',
        leadId: 'lead-1',
        sender: 'lead',
        content: 'Boa tarde! Preciso de ajuda com um caso trabalhista.',
        sentAt: '2026-05-23T10:30:00.000Z',
        readAt: '2026-05-23T10:31:00.000Z',
      },
      {
        id: 'm-2',
        leadId: 'lead-1',
        sender: 'lead',
        content: 'Fui demitido sem justa causa depois de 8 anos na empresa e nao recebi todos os direitos.',
        sentAt: '2026-05-23T10:30:00.000Z',
        readAt: '2026-05-23T10:31:00.000Z',
      },
      {
        id: 'm-3',
        leadId: 'lead-1',
        sender: 'lawyer',
        content: 'Ola Carlos! Boa tarde. Sou Dr. Paulo Silva. Entendo sua situacao, pode me informar o que foi pago e o que esta faltando?',
        sentAt: '2026-05-23T10:30:00.000Z',
        readAt: '2026-05-23T10:31:00.000Z',
      },
      {
        id: 'm-4',
        leadId: 'lead-1',
        sender: 'lead',
        content: 'Recebi o aviso previo mas nao pagaram as horas extras acumuladas dos ultimos 2 anos.',
        sentAt: '2026-05-23T10:30:00.000Z',
        readAt: '2026-05-23T10:31:00.000Z',
      },
      {
        id: 'm-5',
        leadId: 'lead-1',
        sender: 'lead',
        content: 'Tenho todos os contracheques guardados. Posso enviar?',
        sentAt: '2026-05-23T10:30:00.000Z',
        readAt: '2026-05-23T10:31:00.000Z',
      },
    ],
  ],
  [
    'lead-2',
    [
      {
        id: 'm-21',
        leadId: 'lead-2',
        sender: 'lead',
        content: 'Boa tarde. Eu consegui reunir quase todos os documentos do processo.',
        sentAt: '2026-05-23T10:20:00.000Z',
        readAt: null,
      },
      {
        id: 'm-22',
        leadId: 'lead-2',
        sender: 'bot',
        content: 'Perfeito. Pode me informar se possui comprovantes de pagamento e contrato?',
        sentAt: '2026-05-23T10:21:00.000Z',
        readAt: null,
      },
      {
        id: 'm-23',
        leadId: 'lead-2',
        sender: 'lead',
        content: 'Tenho contrato, comprovantes e prints das conversas.',
        sentAt: '2026-05-23T10:31:00.000Z',
        readAt: null,
      },
      {
        id: 'm-24',
        leadId: 'lead-2',
        sender: 'lead',
        content: 'Consegui reunir os documentos. Como envio?',
        sentAt: '2026-05-23T10:32:00.000Z',
        readAt: null,
      },
    ],
  ],
  [
    'lead-3',
    [
      {
        id: 'm-31',
        leadId: 'lead-3',
        sender: 'lead',
        content: 'Assinei um contrato de prestacao de servicos e acho que algumas clausulas sao abusivas.',
        sentAt: '2026-05-23T09:18:00.000Z',
        readAt: '2026-05-23T09:20:00.000Z',
      },
      {
        id: 'm-32',
        leadId: 'lead-3',
        sender: 'bot',
        content: 'Entendi. Pode me dizer se houve multa, prazo minimo ou reajuste previsto em contrato?',
        sentAt: '2026-05-23T09:19:00.000Z',
        readAt: '2026-05-23T09:20:00.000Z',
      },
      {
        id: 'm-33',
        leadId: 'lead-3',
        sender: 'lead',
        content: 'Quero entender se cabe revisao contratual.',
        sentAt: '2026-05-23T09:22:00.000Z',
        readAt: '2026-05-23T09:23:00.000Z',
      },
    ],
  ],
  [
    'lead-4',
    [
      {
        id: 'm-41',
        leadId: 'lead-4',
        sender: 'lead',
        content: 'Recebi advertencia formal e estao me pressionando a pedir demissao.',
        sentAt: '2026-05-23T08:54:00.000Z',
        readAt: '2026-05-23T08:57:00.000Z',
      },
      {
        id: 'm-42',
        leadId: 'lead-4',
        sender: 'bot',
        content: 'Sinto muito. Isso aconteceu apos algum afastamento, denuncia ou pedido interno?',
        sentAt: '2026-05-23T08:55:00.000Z',
        readAt: '2026-05-23T08:57:00.000Z',
      },
      {
        id: 'm-43',
        leadId: 'lead-4',
        sender: 'lead',
        content: 'A empresa marcou audiencia interna para amanha.',
        sentAt: '2026-05-23T09:01:00.000Z',
        readAt: '2026-05-23T09:02:00.000Z',
      },
    ],
  ],
  [
    'lead-5',
    [
      {
        id: 'm-51',
        leadId: 'lead-5',
        sender: 'lead',
        content: 'Estou ha meses sem receber comissao corretamente e ja reclamei varias vezes.',
        sentAt: '2026-05-23T11:02:00.000Z',
        readAt: '2026-05-23T11:03:00.000Z',
      },
      {
        id: 'm-52',
        leadId: 'lead-5',
        sender: 'bot',
        content: 'Entendi. Houve alteracao de funcao, metas ou reducao salarial sem acordo?',
        sentAt: '2026-05-23T11:03:00.000Z',
        readAt: '2026-05-23T11:04:00.000Z',
      },
      {
        id: 'm-53',
        leadId: 'lead-5',
        sender: 'lead',
        content: 'Tenho duvida sobre rescisao indireta.',
        sentAt: '2026-05-23T11:05:00.000Z',
        readAt: '2026-05-23T11:06:00.000Z',
      },
    ],
  ],
]);

function getConversationRecord(leadId: string) {
  const conversation = conversations.find((item) => item.leadId === leadId);
  if (!conversation) {
    throw new Error('Conversa nao encontrada');
  }
  return conversation;
}

export async function listConversations(filter?: ConversationFilter, search?: string) {
  await delay();

  let items = [...conversations];

  if (filter === 'unread') {
    items = items.filter((item) => item.unreadCount > 0);
  }

  if (filter === 'mine') {
    items = items.filter((item) => item.assumedBy === 'user-1');
  }

  if (filter === 'bot-active') {
    items = items.filter((item) => item.botActive);
  }

  if (filter === 'assumed') {
    items = items.filter((item) => !item.botActive);
  }

  if (search?.trim()) {
    const normalized = search.toLowerCase();
    items = items.filter(
      (item) =>
        item.clientName?.toLowerCase().includes(normalized) ||
        item.lastMessage?.toLowerCase().includes(normalized) ||
        item.phone.includes(normalized),
    );
  }

  return { items };
}

export async function listMessages(leadId: string, _cursor?: string | null): Promise<MessagesPage> {
  await delay();

  return {
    items: messagesByLead.get(leadId) ?? [],
    nextCursor: null,
  };
}

export async function createMessage(leadId: string, content: string) {
  await delay(80);

  const conversation = getConversationRecord(leadId);
  return {
    id: `preview-${Date.now()}`,
    leadId,
    sender: 'lawyer' as const,
    content,
    sentAt: conversation.lastMessageAt ?? new Date().toISOString(),
    readAt: conversation.lastMessageAt ?? new Date().toISOString(),
  };
}

export async function markConversationAsRead(leadId: string) {
  await delay(60);
  const conversation = getConversationRecord(leadId);
  conversation.unreadCount = 0;
  return { success: true as const };
}

export async function assumeConversationByLeadId(leadId: string) {
  await delay(60);
  const conversation = getConversationRecord(leadId);
  conversation.botActive = false;
  conversation.assumedBy = 'user-1';
  conversation.assumedByName = 'Voce';
  conversation.pipelineStage = 'Voce assumiu';
  return { success: true as const };
}

export async function releaseConversationByLeadId(leadId: string) {
  await delay(60);
  const conversation = getConversationRecord(leadId);
  conversation.botActive = true;
  conversation.assumedBy = null;
  conversation.assumedByName = null;
  conversation.pipelineStage = 'Novo lead';
  return { success: true as const };
}
