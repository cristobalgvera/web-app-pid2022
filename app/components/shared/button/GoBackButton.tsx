import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Button } from "./Button";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const GoBackButton = ({ className, ...props }: ButtonProps) => {
  const router = useRouter();

  return (
    <Button
      onClick={router.back}
      className={`rounded-full bg-brand-secondary hover:bg-secondary-700 ${className}`}
      {...props}
    >
      <ChevronLeftIcon className="w-4" />
    </Button>
  );
};
