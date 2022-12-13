import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { NavLink } from "../model";
import { DrawerElement } from "./DrawerElement";

interface DrawerProps {
  navLinks: NavLink[];
}

export const Drawer = ({ navLinks }: DrawerProps) => {
  return (
    <div className="overflow-y-auto py-2 text-xl text-brand-text sm:text-3xl">
      <ul className="space-y-2">
        {navLinks.map((navLink) => (
          <li key={navLink.path}>
            <DrawerElement navLink={navLink} />
          </li>
        ))}
      </ul>
    </div>
  );
};
