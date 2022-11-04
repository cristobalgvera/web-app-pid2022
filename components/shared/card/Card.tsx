import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../tag/Tag";

interface CardProps {
  redirectTo: string;
  title: string;
  description: string;
  cover?: {
    src: string;
    alt: string;
  };
  tags: string[];
}

export const Card = ({ redirectTo, title, description, cover, tags }: CardProps) => {
  return (
    <Link href={redirectTo}>
      <div className="group relative max-w-sm rounded-md border border-gray-200 bg-white shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-lg">
        <div className="absolute top-4 right-4 z-10 hidden group-hover:block">
          <div className="inline-flex items-center rounded-lg bg-secondary-500/90 py-2 px-3 text-center text-sm font-medium text-brand-base hover:bg-secondary-800 focus:outline-none focus:ring-4 focus:ring-secondary-300">
            <span>Leer más</span>
            <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" />
          </div>
        </div>
        {cover && (
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              className="rounded-t-md object-cover"
              src={cover.src}
              alt={cover.alt}
              fill
            />
          </div>
        )}
        <div className="flex flex-col gap-y-3 p-5">
          <h5 className="text-2xl font-bold tracking-tight text-slate-900 line-clamp-2">{title}</h5>
          <p className="font-normal text-slate-500 line-clamp-3">{description}</p>
          <div className="grid grid-cols-3 gap-y-1 gap-x-2">
            {tags.map((tag) => (
              <Tag
                key={`${redirectTo}-${tag}`}
                name={tag}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
