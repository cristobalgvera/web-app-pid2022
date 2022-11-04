import { ArrowUturnRightIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ComponentProps } from "react";
import { useHeaderMenuStore } from "../store";

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

const drawerLinks: DrawerLink[] = [
  {
    title: "Tutoriales",
    path: "/tutorials",
    Icon: BookOpenIcon,
  },
];

export const Drawer = () => {
  const toggleDrawer = useHeaderMenuStore((state) => state.toggleDrawer);

  return (
    <>
      <div className="fixed z-40 h-screen w-2/5 overflow-y-auto bg-brand-primary py-4 px-10 shadow-md shadow-brand-primary lg:w-1/3 xl:w-1/4">
        <div className="overflow-y-auto py-4 text-4xl text-brand-base">
          <DrawerLinksList drawerLinks={drawerLinks} />
        </div>
      </div>
      <div className="fixed z-30 h-full w-full bg-gray-500/20" onClick={toggleDrawer}></div>
    </>
  );
};
