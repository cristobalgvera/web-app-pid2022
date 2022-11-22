import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface CardReadMoreButtonProps {
  text?: string;
}

export const CardReadMoreButton = ({ text }: CardReadMoreButtonProps) => (
  <div className="absolute top-4 right-4 z-10 hidden group-hover:block">
    <div className="inline-flex items-center rounded-lg bg-secondary-500/90 py-2 px-3 text-center text-sm font-medium text-brand-base hover:bg-secondary-800 focus:outline-none focus:ring-4 focus:ring-secondary-300">
      <span>{text ?? "Leer más"}</span>
      <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" />
    </div>
  </div>
);
