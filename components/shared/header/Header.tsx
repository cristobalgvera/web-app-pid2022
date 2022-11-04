import { Logo } from "./logo/Logo";
import { Avatar } from "./avatar/Avatar";
import { Menu } from "./menu/Menu";
import { Drawer } from "../drawer/Drawer";
import { useHeaderMenuStore } from "../store";

export const Header = () => {
  return (
    <div className="flex h-52 w-full items-center justify-between bg-brand-primary px-10 text-brand-base md:h-32 xl:h-20 xl:px-6">
      <div className="flex items-center justify-start gap-x-6">
        <Menu />
        <Logo />
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};
