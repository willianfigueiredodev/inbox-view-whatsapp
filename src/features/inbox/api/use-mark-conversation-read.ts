import { useMutation, useQueryClient } from '@tanstack/react-query';
import { markConversationRead } from './mark-conversation-read';

export function useMarkConversationRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markConversationRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inbox', 'conversations'] });
    },
  });
}
