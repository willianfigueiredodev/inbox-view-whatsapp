import type { ConversationSummary } from '../types/conversation';

export function getConversationStatus(conversation: ConversationSummary) {
  if (conversation.botActive) return 'Bot ativo';
  if (conversation.assumedByName) return `Assumido por ${conversation.assumedByName}`;
  if (conversation.unreadCount > 0) return 'Nao lida';
  return 'Aguardando resposta';
}
