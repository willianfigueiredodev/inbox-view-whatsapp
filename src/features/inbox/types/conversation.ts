export type ConversationFilter = 'all' | 'unread' | 'mine' | 'bot-active' | 'assumed';

export type ConversationSummary = {
  leadId: string;
  clientName: string | null;
  phone: string;
  lastMessage: string | null;
  lastMessageAt: string | null;
  unreadCount: number;
  botActive: boolean;
  assumedBy: string | null;
  assumedByName: string | null;
  pipelineStage: string | null;
};

export type ConversationsResponse = {
  items: ConversationSummary[];
};
