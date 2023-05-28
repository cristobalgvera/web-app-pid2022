interface ErrorLabelProps {
  message?: string;
}

export const ErrorLabel = ({ message }: ErrorLabelProps) => {
  if (!message) return null;

  return <p className="text-red-500 text-xs italic">{message}</p>;
};
