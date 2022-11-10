import { ComponentProps } from "react";

export interface NavLink {
  title: string;
  path: string;
  Icon?: (props: ComponentProps<"svg">) => JSX.Element;
}
