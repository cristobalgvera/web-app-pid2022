"use client";

import { useHeaderMenuStore } from "@components/shared/store";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const Menu = () => {
  const { toggleNavbar, isMenuOpened } = useHeaderMenuStore((state) => state);
  const MenuIcon = isMenuOpened ? XMarkIcon : Bars3Icon;

  return (
    <div
      onClick={toggleNavbar}
      className="rounded-md hover:cursor-pointer hover:bg-primary-600"
    >
      <MenuIcon className="w-28 md:w-20 xl:w-14" />
    </div>
  );
};
