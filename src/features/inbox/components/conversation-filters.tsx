import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useConversations } from '../api/use-conversations';
import { useInboxFilters } from '../hooks/use-inbox-filters';
import type { ConversationFilter } from '../types/conversation';

const filters: Array<{ key: ConversationFilter; label: string }> = [
  { key: 'all', label: 'Tudo' },
  { key: 'unread', label: 'Nao Lidas' },
];

export function ConversationFilters() {
  const { activeFilter, search, setActiveFilter, setSearch } = useInboxFilters();
  const allConversationsQuery = useConversations({});
  const unreadCount =
    allConversationsQuery.data?.items.filter((item) => item.unreadCount > 0).length ?? 0;

  return (
    <div className="sidebar-card__inner">
      <Input
        className="search-input"
        value={search}
        placeholder="Buscar conversa..."
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="filters-row">
        {filters.map((filter) => (
          <Button
            key={filter.key}
            className="filter-chip"
            type="button"
            onClick={() => setActiveFilter(filter.key)}
            aria-pressed={activeFilter === filter.key}
          >
            {filter.label}
            {filter.key === 'unread' && unreadCount > 0 ? (
              <span className="filter-chip__count">{unreadCount}</span>
            ) : null}
          </Button>
        ))}
      </div>
    </div>
  );
}
