import { useQuery } from '@tanstack/react-query';
import { getConversations, type GetConversationsParams } from './get-conversations';
import type { QueryConfig } from '@/lib/react-query';

export function getConversationsQueryOptions(params: GetConversationsParams) {
  return {
    queryKey: ['inbox', 'conversations', params] as const,
    queryFn: () => getConversations(params),
  };
}

export function useConversations(
  params: GetConversationsParams,
  config?: QueryConfig<typeof getConversations>,
) {
  return useQuery({
    ...getConversationsQueryOptions(params),
    ...config,
  });
}
