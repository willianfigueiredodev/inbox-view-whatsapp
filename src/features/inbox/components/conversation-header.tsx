import { useAssumeConversation } from '../api/use-assume-conversation';
import { useReleaseConversation } from '../api/use-release-conversation';
import type { ConversationSummary } from '../types/conversation';

type ConversationHeaderProps = {
  conversation?: ConversationSummary;
};

export function ConversationHeader({ conversation }: ConversationHeaderProps) {
  const assumeConversation = useAssumeConversation();
  const releaseConversation = useReleaseConversation();

  if (!conversation) return null;

  return (
    <header className="thread-header">
      <div className="thread-header__main">
        <div className="avatar">CE</div>
        <div className="thread-header__details">
          <h2>{conversation.clientName ?? conversation.phone}</h2>
          <div className="thread-header__badges">
            <span className="pill">{conversation.assumedByName ? 'Voce assumiu' : 'Bot ativo'}</span>
          </div>
        </div>
      </div>
      <div className="thread-actions">
        <button
          className="ghost-button"
          type="button"
          onClick={() => assumeConversation.mutate(conversation.leadId)}
        >
          Assumir Conversa
        </button>
        <button
          className="ghost-button ghost-button--muted"
          type="button"
          onClick={() => releaseConversation.mutate(conversation.leadId)}
        >
          Devolver ao Bot
        </button>
        <button className="ghost-button" type="button">
          Ver Cliente
        </button>
      </div>
    </header>
  );
}
