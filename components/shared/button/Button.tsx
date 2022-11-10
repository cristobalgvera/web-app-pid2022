import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`mt-4 rounded bg-brand-primary py-2 px-4 font-bold text-brand-base hover:bg-primary-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
