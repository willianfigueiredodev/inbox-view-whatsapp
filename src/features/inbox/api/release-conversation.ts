import { releaseConversationByLeadId } from '../mock/inbox-mock-db';

export function releaseConversation(leadId: string) {
  return releaseConversationByLeadId(leadId);
}
