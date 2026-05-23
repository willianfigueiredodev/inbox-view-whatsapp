import { useConversations } from '../api/use-conversations';
import { useInboxFilters } from '../hooks/use-inbox-filters';
import { useSelectedConversation } from '../hooks/use-selected-conversation';
import { ConversationFilters } from './conversation-filters';
import { ConversationListItem } from './conversation-list-item';
import { InboxErrorState } from './inbox-error-state';
import { InboxLoadingState } from './inbox-loading-state';

export function ConversationList() {
  const { activeFilter, search } = useInboxFilters();
  const { selectedLeadId, setSelectedLeadId } = useSelectedConversation();
  const conversationsQuery = useConversations({ filter: activeFilter, search });

  if (conversationsQuery.isLoading) return <InboxLoadingState />;
  if (conversationsQuery.isError) {
    return <InboxErrorState message={conversationsQuery.error.message} />;
  }

  return (
    <aside className="sidebar-card">
      <ConversationFilters />
      <div className="conversation-list">
        {conversationsQuery.data?.items.map((conversation) => (
          <ConversationListItem
            key={conversation.leadId}
            conversation={conversation}
            isSelected={selectedLeadId === conversation.leadId}
            onSelect={setSelectedLeadId}
          />
        ))}
      </div>
    </aside>
  );
}
