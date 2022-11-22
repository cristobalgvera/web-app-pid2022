import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Tag } from "../tag/Tag";

interface CardTagsProps {
  title: string;
  tags: string[];
}

export const CardTags = ({ title, tags }: CardTagsProps) => (
  <div className="grid grid-cols-5 gap-y-1 gap-x-2">
    <div className="col-span-4 grid grid-cols-3 gap-x-3">
      {tags.slice(0, 3).map((tag) => (
        <Tag
          key={`${title}-${tag}`}
          name={tag}
        />
      ))}
    </div>
    {tags.length > 3 && (
      <PlusCircleIcon className="col-start-5 h-5 w-5 self-center justify-self-center text-brand-secondary" />
    )}
  </div>
);
