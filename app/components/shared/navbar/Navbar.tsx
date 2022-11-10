"use client";

import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useHeaderMenuStore } from "../store";
import { Backdrop } from "./backdrop/Backdrop";
import { Drawer } from "./drawer/Drawer";
import { NavLink } from "./model";

const navLinks: NavLink[] = [
  {
    title: "Tutoriales",
    path: "/tutorials",
    Icon: BookOpenIcon,
  },
];

export const Navbar = () => {
  const isMenuOpened = useHeaderMenuStore((state) => state.isMenuOpened);

  if (!isMenuOpened) return null;

  return (
    <nav>
      <div className="fixed z-40 h-screen w-2/5 overflow-y-auto bg-brand-base py-4 px-6 shadow-md lg:w-1/3 xl:w-1/4">
        <Drawer navLinks={navLinks} />
      </div>
      <Backdrop />
    </nav>
  );
};
