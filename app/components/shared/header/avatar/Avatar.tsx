import { UserIcon } from "@heroicons/react/24/solid";

export const Avatar = () => {
  return (
    <div className="grid h-32 w-32 place-content-center rounded-full bg-primary-400 hover:cursor-pointer hover:bg-primary-400/80 md:h-20 md:w-20 xl:h-14 xl:w-14">
      <UserIcon className="w-20 text-brand-base md:w-14 xl:w-10" />
    </div>
  );
};
