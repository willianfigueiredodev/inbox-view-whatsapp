import { useMemo, type CSSProperties } from 'react';
import { useConversations } from '../api/use-conversations';
import { useInboxFilters } from '../hooks/use-inbox-filters';
import { useInboxResizablePanels } from '../hooks/use-inbox-resizable-panels';
import { useInboxSocket } from '../hooks/use-inbox-socket';
import { useSelectedConversation } from '../hooks/use-selected-conversation';
import { ConversationList } from './conversation-list';
import { ConversationThread } from './conversation-thread';

export function InboxPageLayout() {
  const { activeFilter, search } = useInboxFilters();
  const { selectedLeadId } = useSelectedConversation();
  const { sidebarWidth, startDragging } = useInboxResizablePanels();
  const conversationsQuery = useConversations({ filter: activeFilter, search });

  useInboxSocket(selectedLeadId);

  const selectedConversation = useMemo(
    () => conversationsQuery.data?.items.find((item) => item.leadId === selectedLeadId),
    [conversationsQuery.data, selectedLeadId],
  );

  return (
    <div className="page-shell">
      <header className="topbar">
        <nav className="topbar__nav" aria-label="Navegacao principal">
          <button type="button">Dashboard</button>
          <button type="button">Leads</button>
          <button type="button" data-active="true">
            Inbox
          </button>
          <button type="button">Documentos</button>
          <button type="button">Configuracoes</button>
        </nav>
        <div className="topbar__profile">PJ</div>
      </header>
      <main
        className="inbox-layout"
        style={
          {
            '--sidebar-width': `${sidebarWidth}px`,
          } as CSSProperties
        }
      >
        <ConversationList />
        <button
          className="inbox-resizer"
          type="button"
          aria-label="Redimensionar lista de conversas"
          onPointerDown={startDragging}
        >
          <span className="inbox-resizer__handle" />
        </button>
        <ConversationThread conversation={selectedConversation ?? conversationsQuery.data?.items[0]} />
      </main>
    </div>
  );
}
