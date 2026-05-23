import { Button } from '@/components/ui/button';
import type { ConversationSummary } from '../types/conversation';
import { useAssumeConversation } from '../api/use-assume-conversation';
import { useReleaseConversation } from '../api/use-release-conversation';

type HandoffBarProps = {
  conversation?: ConversationSummary;
};

export function HandoffBar({ conversation }: HandoffBarProps) {
  const assumeConversation = useAssumeConversation();
  const releaseConversation = useReleaseConversation();

  if (!conversation) return null;

  const isAssumed = !conversation.botActive;

  return (
    <div className="thread-header__badges" style={{ marginTop: 8 }}>
      <span className="pill">
        {conversation.botActive ? 'Bot ativo' : `Assumido por ${conversation.assumedByName ?? 'humano'}`}
      </span>
      {isAssumed ? (
        <Button className="filter-chip" type="button" onClick={() => releaseConversation.mutate(conversation.leadId)}>
          Devolver ao bot
        </Button>
      ) : (
        <Button className="filter-chip" type="button" onClick={() => assumeConversation.mutate(conversation.leadId)}>
          Assumir conversa
        </Button>
      )}
    </div>
  );
}
