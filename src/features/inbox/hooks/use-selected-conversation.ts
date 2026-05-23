import { useInboxUiStore } from '../store/use-inbox-ui-store';

export function useSelectedConversation() {
  const selectedLeadId = useInboxUiStore((state) => state.selectedLeadId);
  const setSelectedLeadId = useInboxUiStore((state) => state.setSelectedLeadId);

  return { selectedLeadId, setSelectedLeadId };
}
