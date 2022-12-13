import { ArrowRightIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../tag/Tag";
import { CardDescription } from "./CardDescription";
import { CardImage } from "./CardImage";
import { CardReadMoreButton } from "./CardReadMoreButton";
import { CardTags } from "./CardTags";

interface CardProps {
  redirectTo: string;
  title: string;
  description?: string;
  cover?: {
    src: string;
    alt: string;
  };
  tags?: string[];
}

export const Card = ({ redirectTo, title, description, cover, tags }: CardProps) => {
  return (
    <Link href={redirectTo}>
      <div className="group relative flex h-96 w-full flex-col rounded-md border border-gray-200 bg-white shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-lg">
        <CardReadMoreButton />
        <CardImage cover={cover} />
        <div className="flex flex-grow flex-col justify-between gap-y-3 p-5">
          <CardDescription
            title={title}
            description={description}
          />
          <CardTags
            title={title}
            tags={tags ?? []}
          />
        </div>
      </div>
    </Link>
  );
};
