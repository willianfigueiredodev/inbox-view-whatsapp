import type { MessagesPage } from '../types/message';
import { listMessages } from '../mock/inbox-mock-db';

export type GetConversationMessagesParams = {
  leadId: string;
  cursor?: string | null;
};

export function getConversationMessages({ leadId, cursor }: GetConversationMessagesParams) {
  return listMessages(leadId, cursor) as Promise<MessagesPage>;
}
