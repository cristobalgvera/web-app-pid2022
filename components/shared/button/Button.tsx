interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="mt-4 rounded bg-brand-primary py-2 px-4 font-bold text-brand-base hover:bg-primary-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
