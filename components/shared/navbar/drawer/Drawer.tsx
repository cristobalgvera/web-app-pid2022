import { useHeaderMenuStore } from "@components/shared/store";
import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { NavLink } from "../model";

interface DrawerProps {
  navLinks: NavLink[];
}

export const Drawer = ({ navLinks }: DrawerProps) => {
  const { toggleNavbar } = useHeaderMenuStore();

  return (
    <div className="overflow-y-auto py-2 text-4xl text-brand-text">
      <ul className="space-y-2">
        {navLinks.map(({ path, title, Icon = ArrowUturnRightIcon }) => (
          <li key={path}>
            <Link
              href={path}
              className="flex items-center gap-x-5 rounded-md py-2 px-4 hover:bg-brand-primary hover:text-brand-base"
              onClick={toggleNavbar}
            >
              <Icon className="h-10 w-10" />
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
