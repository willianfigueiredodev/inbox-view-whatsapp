import { formatMessageTime } from '../utils/format-message-time';
import { getConversationStatus } from '../utils/get-conversation-status';
import type { ConversationSummary } from '../types/conversation';

type ConversationListItemProps = {
  conversation: ConversationSummary;
  isSelected: boolean;
  onSelect: (leadId: string) => void;
};

export function ConversationListItem({
  conversation,
  isSelected,
  onSelect,
}: ConversationListItemProps) {
  return (
    <button
      className="conversation-item"
      type="button"
      onClick={() => onSelect(conversation.leadId)}
      aria-pressed={isSelected}
      data-selected={isSelected}
    >
      <div className="avatar">CE</div>
      <div className="conversation-item__body">
        <div className="conversation-item__title">{conversation.clientName ?? conversation.phone}</div>
        <div className="conversation-item__preview">{conversation.lastMessage ?? 'Sem mensagens'}</div>
      </div>
      <div className="conversation-item__meta">
        <div className="conversation-item__time">{formatMessageTime(conversation.lastMessageAt)}</div>
        {conversation.unreadCount > 0 ? (
          <span className="unread-badge">{conversation.unreadCount}</span>
        ) : (
          <span className="conversation-item__time">{getConversationStatus(conversation)}</span>
        )}
      </div>
    </button>
  );
}
