"use client";

import { useHeaderMenuStore } from "@components/shared/store";

export const Backdrop = () => {
  const toggleNavbar = useHeaderMenuStore((state) => state.toggleNavbar);

  return (
    <div
      className="fixed z-30 h-full w-full bg-gray-500/20"
      onClick={toggleNavbar}
    ></div>
  );
};
