import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { socket } from '@/lib/socket';

type InboxMessageEvent = {
  leadId: string;
};

type LeadUpdatedEvent = {
  leadId: string;
};

export function useInboxSocket(selectedLeadId: string | null) {
  const queryClient = useQueryClient();

  useEffect(() => {
    socket.connect();

    function handleInboxMessage(event: InboxMessageEvent) {
      queryClient.invalidateQueries({ queryKey: ['inbox', 'conversations'] });

      if (event.leadId === selectedLeadId) {
        queryClient.invalidateQueries({ queryKey: ['inbox', 'messages', event.leadId] });
      }
    }

    function handleLeadUpdated(event: LeadUpdatedEvent) {
      queryClient.invalidateQueries({ queryKey: ['inbox', 'conversations'] });
      queryClient.invalidateQueries({ queryKey: ['inbox', 'messages', event.leadId] });
    }

    socket.on('inbox:message', handleInboxMessage);
    socket.on('lead:updated', handleLeadUpdated);
    socket.on('lead:created', () => {
      queryClient.invalidateQueries({ queryKey: ['inbox', 'conversations'] });
    });

    return () => {
      socket.off('inbox:message', handleInboxMessage);
      socket.off('lead:updated', handleLeadUpdated);
      socket.off('lead:created');
      socket.disconnect();
    };
  }, [queryClient, selectedLeadId]);
}
