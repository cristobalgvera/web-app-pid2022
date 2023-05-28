import { BookOpenIcon } from "@heroicons/react/24/solid";

export interface NavLink {
  title: string;
  path?: string;
  Icon?: typeof BookOpenIcon;
  subLinks?: NavLink[];
}
