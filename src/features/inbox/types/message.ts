export type Message = {
  id: string;
  leadId: string;
  sender: 'lead' | 'bot' | 'lawyer';
  content: string;
  sentAt: string;
  readAt: string | null;
};

export type MessagesPage = {
  items: Message[];
  nextCursor: string | null;
};
