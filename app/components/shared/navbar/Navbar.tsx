"use client";

import { useHeaderMenuStore } from "../store";
import { Backdrop } from "./backdrop/Backdrop";
import { Drawer } from "./drawer/Drawer";
import { navLinks } from "./nav-links";

export const Navbar = () => {
  const isMenuOpened = useHeaderMenuStore((state) => state.isMenuOpened);

  if (!isMenuOpened) return null;

  return (
    <nav>
      <div className="fixed z-40 h-screen w-2/5 min-w-max overflow-y-auto bg-brand-base py-4 px-6 shadow-md lg:w-1/3 xl:w-1/4">
        <Drawer navLinks={navLinks} />
      </div>
      <Backdrop />
    </nav>
  );
};
