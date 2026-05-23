import type { ConversationsResponse, ConversationFilter } from '../types/conversation';
import { listConversations } from '../mock/inbox-mock-db';

export type GetConversationsParams = {
  filter?: ConversationFilter;
  search?: string;
};

export function getConversations(params: GetConversationsParams) {
  return listConversations(params.filter, params.search) as Promise<ConversationsResponse>;
}
