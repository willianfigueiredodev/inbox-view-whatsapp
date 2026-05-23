import { markConversationAsRead } from '../mock/inbox-mock-db';

export function markConversationRead(leadId: string) {
  return markConversationAsRead(leadId);
}
