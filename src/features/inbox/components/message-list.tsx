import { MessageBubble } from './message-bubble';
import type { Message } from '../types/message';

type MessageListProps = {
  messages: Message[];
};

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="messages-area">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
}
