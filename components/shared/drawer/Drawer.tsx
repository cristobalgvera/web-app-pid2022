import { ArrowUturnRightIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ComponentProps } from "react";

interface DrawerLink {
  title: string;
  path: string;
  Icon?: (props: ComponentProps<"svg">) => JSX.Element;
}

interface DrawerLinksListProps {
  drawerLinks: DrawerLink[];
}

const DrawerLinksList = ({ drawerLinks }: DrawerLinksListProps) => {
  return (
    <ul className="space-y-2">
      {drawerLinks.map(({ path, title, Icon = ArrowUturnRightIcon }) => (
        <li key={path}>
          <Link href={path} className="flex items-center gap-x-5 rounded-md p-2 hover:bg-primary-600">
            <Icon className="h-10 w-10" />
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const Drawer = () => {
  const drawerLinks: DrawerLink[] = [
    {
      title: "Tutorials",
      path: "/tutorials",
      Icon: BookOpenIcon,
    },
  ];

  return (
    <div className="fixed z-40 h-screen w-2/5 overflow-y-auto bg-brand-primary p-4">
      <div className="overflow-y-auto py-4 text-4xl text-brand-base">
        <DrawerLinksList drawerLinks={drawerLinks} />
      </div>
    </div>
  );
};
