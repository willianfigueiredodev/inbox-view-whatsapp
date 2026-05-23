import { useEffect, useMemo } from 'react';
import { useConversationMessages } from '../api/use-conversation-messages';
import { useMarkConversationRead } from '../api/use-mark-conversation-read';
import type { ConversationSummary } from '../types/conversation';
import type { MessagesPage } from '../types/message';
import { ConversationHeader } from './conversation-header';
import { InboxEmptyState } from './inbox-empty-state';
import { InboxErrorState } from './inbox-error-state';
import { InboxLoadingState } from './inbox-loading-state';
import { MessageInput } from './message-input';
import { MessageList } from './message-list';

type ConversationThreadProps = {
  conversation?: ConversationSummary;
};

export function ConversationThread({ conversation }: ConversationThreadProps) {
  const messagesQuery = useConversationMessages(conversation?.leadId ?? null);
  const markRead = useMarkConversationRead();

  const messages = useMemo(
    () =>
      messagesQuery.data?.pages.flatMap((page: MessagesPage) => page.items).reverse() ?? [],
    [messagesQuery.data],
  );

  useEffect(() => {
    if (conversation?.unreadCount) {
      markRead.mutate(conversation.leadId);
    }
  }, [conversation?.leadId, conversation?.unreadCount, markRead]);

  if (!conversation) return <InboxEmptyState />;
  if (messagesQuery.isLoading) return <InboxLoadingState />;
  if (messagesQuery.isError) {
    return <InboxErrorState message={messagesQuery.error.message} />;
  }

  return (
    <section className="thread-card">
      <ConversationHeader conversation={conversation} />
      <div className="day-separator">
        <span>Hoje</span>
      </div>
      <MessageList messages={messages} />
      {messagesQuery.hasNextPage ? (
        <button className="filter-chip" type="button" onClick={() => messagesQuery.fetchNextPage()}>
          Carregar mensagens antigas
        </button>
      ) : null}
      <MessageInput conversation={conversation} />
    </section>
  );
}
