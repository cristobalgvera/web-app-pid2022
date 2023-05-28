import { Logo } from "./logo/Logo";
import { Menu } from "./menu/Menu";

export const Header = () => {
  return (
    <div
      className="
      flex py-4 w-full items-center
      justify-between bg-brand-primary
      pl-6 pr-8 text-brand-base
      "
    >
      <div className="flex items-center justify-start gap-x-6">
        <Menu />
        <Logo />
      </div>
    </div>
  );
};
