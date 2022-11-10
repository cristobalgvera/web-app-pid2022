"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

export const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={router.back}
      className="absolute rounded-full bg-brand-secondary hover:bg-secondary-700"
    >
      <ChevronLeftIcon className="w-4" />
    </Button>
  );
};
