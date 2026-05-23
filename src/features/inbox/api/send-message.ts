import type { Message } from '../types/message';
import { createMessage } from '../mock/inbox-mock-db';

export type SendMessageInput = {
  leadId: string;
  content: string;
};

export function sendMessage({ leadId, content }: SendMessageInput) {
  return createMessage(leadId, content) as Promise<Message>;
}
