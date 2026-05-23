import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { getConversationMessages } from './get-conversation-messages';
import type { MessagesPage } from '../types/message';

export function getConversationMessagesQueryOptions(leadId: string) {
  return {
    queryKey: ['inbox', 'messages', leadId] as const,
    initialPageParam: null as string | null,
    queryFn: ({ pageParam }: { pageParam: unknown }) =>
      getConversationMessages({ leadId, cursor: (pageParam as string | null) ?? null }),
    getNextPageParam: (lastPage: MessagesPage) => lastPage.nextCursor,
  };
}

export function useConversationMessages(
  leadId: string | null,
) {
  return useInfiniteQuery<
    MessagesPage,
    Error,
    InfiniteData<MessagesPage>,
    readonly ['inbox', 'messages', string],
    string | null
  >({
    ...getConversationMessagesQueryOptions(leadId ?? ''),
    enabled: Boolean(leadId),
  });
}
