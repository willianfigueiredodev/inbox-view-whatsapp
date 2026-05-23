import { useInboxUiStore } from '../store/use-inbox-ui-store';

export function useInboxFilters() {
  const activeFilter = useInboxUiStore((state) => state.activeFilter);
  const search = useInboxUiStore((state) => state.search);
  const setActiveFilter = useInboxUiStore((state) => state.setActiveFilter);
  const setSearch = useInboxUiStore((state) => state.setSearch);

  return {
    activeFilter,
    search,
    setActiveFilter,
    setSearch,
  };
}
