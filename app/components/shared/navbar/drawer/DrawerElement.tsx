"use client";

import { useHeaderMenuStore } from "@components/shared/store";
import Link from "next/link";
import { useMemo } from "react";
import { NavLink } from "../model";

interface DrawerElementProps {
  navLink: NavLink;
  isSubLink?: boolean;
}

export const DrawerElement = ({ navLink: { path, title, Icon }, isSubLink }: DrawerElementProps) => {
  const toggleNavbar = useHeaderMenuStore((state) => state.toggleNavbar);

  const content = useMemo(
    () => (
      <>
        {!!Icon ? <Icon className="h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] sm:h-9 sm:w-9" /> : null}
        <span className={`${isSubLink ? "text-sm" : ""}`}>{title}</span>
      </>
    ),
    [Icon, isSubLink, title],
  );

  return !!path ? (
    <Link
      href={path}
      className="flex items-center gap-x-5 rounded-md py-2 px-4 hover:bg-brand-primary hover:text-brand-base"
      onClick={toggleNavbar}
    >
      {content}
    </Link>
  ) : (
    <div className="flex items-center gap-x-5 rounded-md py-2 px-4">{content}</div>
  );
};
