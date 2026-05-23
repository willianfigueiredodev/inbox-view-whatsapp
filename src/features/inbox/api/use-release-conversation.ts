import { useMutation, useQueryClient } from '@tanstack/react-query';
import { releaseConversation } from './release-conversation';

export function useReleaseConversation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: releaseConversation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inbox', 'conversations'] });
    },
  });
}
