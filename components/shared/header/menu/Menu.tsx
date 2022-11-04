"use client";

import { useHeaderMenuStore } from "@components/shared/store";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const Menu = () => {
  const { toggleDrawer, isMenuOpened } = useHeaderMenuStore((state) => state);

  return (
    <div onClick={toggleDrawer} className="rounded-md hover:cursor-pointer hover:bg-primary-600">
      {isMenuOpened ? <XMarkIcon className="w-28 lg:w-20 xl:w-14" /> : <Bars3Icon className="w-28 lg:w-20 xl:w-14" />}
    </div>
  );
};
