import { NavLink } from "../model";
import { NavLinkItem } from "./NavLinkItem";

interface DrawerProps {
  navLinks: NavLink[];
}

export const Drawer = ({ navLinks }: DrawerProps) => {
  return (
    <div className="overflow-y-auto py-2 text-xl text-brand-text sm:text-3xl">
      <ul className="space-y-2">
        {navLinks.map((navLink) => (
          <NavLinkItem
            key={navLink.path}
            navLink={navLink}
          />
        ))}
      </ul>
    </div>
  );
};
