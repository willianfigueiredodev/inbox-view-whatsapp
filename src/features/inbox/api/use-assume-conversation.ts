import { useMutation, useQueryClient } from '@tanstack/react-query';
import { assumeConversation } from './assume-conversation';

export function useAssumeConversation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: assumeConversation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inbox', 'conversations'] });
    },
  });
}
