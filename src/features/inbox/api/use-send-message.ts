import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessage } from './send-message';

export function useSendMessage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendMessage,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['inbox', 'messages', variables.leadId] });
      queryClient.invalidateQueries({ queryKey: ['inbox', 'conversations'] });
    },
  });
}
