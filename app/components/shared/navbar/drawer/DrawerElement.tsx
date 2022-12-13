"use client";

import { useHeaderMenuStore } from "@components/shared/store";
import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { NavLink } from "../model";

interface DrawerElementProps {
  navLink: NavLink;
}

export const DrawerElement = ({ navLink: { path, title, Icon = ArrowUturnRightIcon } }: DrawerElementProps) => {
  const toggleNavbar = useHeaderMenuStore((state) => state.toggleNavbar);

  return (
    <Link
      href={path}
      className="flex items-center gap-x-5 rounded-md py-2 px-4 hover:bg-brand-primary hover:text-brand-base"
      onClick={toggleNavbar}
    >
      <Icon className="h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] sm:h-9 sm:w-9" />
      <span>{title}</span>
    </Link>
  );
};
