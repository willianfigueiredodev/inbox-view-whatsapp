type InboxErrorStateProps = {
  message?: string;
};

export function InboxErrorState({ message }: InboxErrorStateProps) {
  return <div className="error-state">Erro ao carregar inbox. {message}</div>;
}
