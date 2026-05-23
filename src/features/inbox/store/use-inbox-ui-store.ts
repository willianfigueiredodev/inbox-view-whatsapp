import { create } from 'zustand';
import type { ConversationFilter } from '../types/conversation';

type InboxUiState = {
  selectedLeadId: string | null;
  activeFilter: ConversationFilter;
  search: string;
  setSelectedLeadId: (leadId: string | null) => void;
  setActiveFilter: (filter: ConversationFilter) => void;
  setSearch: (search: string) => void;
};

export const useInboxUiStore = create<InboxUiState>((set) => ({
  selectedLeadId: null,
  activeFilter: 'all',
  search: '',
  setSelectedLeadId: (selectedLeadId) => set({ selectedLeadId }),
  setActiveFilter: (activeFilter) => set({ activeFilter }),
  setSearch: (search) => set({ search }),
}));
