import { HTMLProps, forwardRef } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={`input input-bordered w-full ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";
