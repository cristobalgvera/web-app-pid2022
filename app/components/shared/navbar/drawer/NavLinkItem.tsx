import { NavLink } from "../model";
import { DrawerElement } from "./DrawerElement";

export interface NavLinkItemProps {
  navLink: NavLink;
  isSubLink?: boolean;
}

export const NavLinkItem = ({ navLink, isSubLink }: NavLinkItemProps) => {
  return (
    <li key={navLink.path}>
      <DrawerElement
        navLink={navLink}
        isSubLink={isSubLink}
      />
      {navLink.subLinks ? (
        <ul className="space-y-2 pl-2 mt-1">
          {navLink.subLinks.map((navLink) => (
            <NavLinkItem
              key={navLink.path}
              isSubLink={true}
              navLink={navLink}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};
