import { BookOpenIcon, CalculatorIcon } from "@heroicons/react/24/solid";
import { NavLink } from "./model";

export const navLinks: NavLink[] = [
  {
    title: "Tutoriales",
    path: "/tutorials",
    Icon: BookOpenIcon,
  },
  {
    title: "Calculadora",
    Icon: CalculatorIcon,
    subLinks: [
      {
        title: "Probabilidad conjunta",
        path: "/calculator/joint",
      },
    ],
  },
];
