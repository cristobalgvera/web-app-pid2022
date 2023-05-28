import { HTMLProps } from "react";

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  label?: string;
}

export const Label = ({ label, children, className, ...props }: LabelProps) => {
  return (
    <label
      className={`label flex flex-col gap-2 ${className}`}
      {...props}
    >
      <span className="label-text w-full text-start">{label}</span>
      <div className="w-full">{children}</div>
    </label>
  );
};
