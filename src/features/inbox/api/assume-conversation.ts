import { assumeConversationByLeadId } from '../mock/inbox-mock-db';

export function assumeConversation(leadId: string) {
  return assumeConversationByLeadId(leadId);
}
