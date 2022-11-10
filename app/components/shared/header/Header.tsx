import { Logo } from "./logo/Logo";
import { Avatar } from "./avatar/Avatar";
import { Menu } from "./menu/Menu";

export const Header = () => {
  return (
    <div className="flex h-52 w-full items-center justify-between bg-brand-primary pl-6 pr-8 text-brand-base md:h-32 xl:h-20">
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
