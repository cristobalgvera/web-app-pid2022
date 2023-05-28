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
    path: "/calculator",
    Icon: CalculatorIcon,
    subLinks: [
      {
        title: "Probabilidad",
        path: "/calculator/probability",
      },
    ],
  },
];
