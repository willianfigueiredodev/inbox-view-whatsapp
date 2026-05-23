import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { ConversationSummary } from '../types/conversation';

type MessageInputProps = {
  conversation?: ConversationSummary;
};

export function MessageInput({ conversation }: MessageInputProps) {
  const [content, setContent] = useState('');

  if (!conversation) return null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="message-composer" onSubmit={handleSubmit}>
      <Input
        value={content}
        placeholder="Digite uma mensagem..."
        onChange={(event) => setContent(event.target.value)}
      />
      <Button className="send-button" type="submit">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21.2 2.8 2.9 10.1c-.8.3-.8 1.4 0 1.7l7.5 2.7 2.7 7.5c.3.8 1.4.8 1.7 0l7.3-18.3c.3-.8-.5-1.6-1.3-1.3Z"
            fill="currentColor"
          />
          <path
            d="M10.9 14.5 21.1 2.9"
            fill="none"
            stroke="rgba(255,255,255,0.72)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </Button>
    </form>
  );
}
