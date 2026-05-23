import { formatMessageTime } from '../utils/format-message-time';
import type { Message } from '../types/message';

type MessageBubbleProps = {
  message: Message;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const author =
    message.sender === 'lead' ? 'Cliente' : message.sender === 'bot' ? 'Bot' : 'Atendimento';

  return (
    <div className={`message-row ${message.sender === 'lawyer' ? 'message-row--lawyer' : ''}`}>
      {message.sender !== 'lawyer' ? <div className="message-avatar">CE</div> : null}
      <article
        className={`message-bubble ${
          message.sender === 'lawyer' ? 'message-bubble--lawyer' : 'message-bubble--lead'
        }`}
      >
        <p className="message-bubble__content">{message.content}</p>
        <small className="message-bubble__time">
          {author} • {formatMessageTime(message.sentAt)}
        </small>
      </article>
    </div>
  );
}
