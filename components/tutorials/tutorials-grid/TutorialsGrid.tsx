"use client";

import { Card } from "@components/shared";
import { useQuery } from "@tanstack/react-query";
import { CMSResponse } from "@app-types/cms-response";
import { Tutorial, TutorialCard } from "../model";

export const TutorialsGrid = () => {
  const { data, isLoading, isError } = useQuery<TutorialCard[]>({
    queryKey: ["tutorials"],
    queryFn: async () => {
      const response = await fetch("http://localhost:1337/api/tutorials?populate=categories");
      const cmsResponse: CMSResponse<Tutorial> = await response.json();

      return cmsResponse.data.map((tutorial) => ({
        id: tutorial.id,
        title: tutorial.attributes.title,
        cover: tutorial.attributes.cover,
        categories: tutorial.attributes.categories?.data.map((category) => category.attributes.name) ?? [],
        summary: tutorial.attributes.content,
      }));
    },
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) throw new Error("Error inesperado al solicitar los tutoriales");

  return (
    <div className="grid grid-cols-2 place-items-center gap-x-2 gap-y-8">
      {data.map(({ id, title, summary, categories, cover }) => (
        <Card
          key={id}
          redirectTo={`tutorials/${id}`}
          title={title}
          description={summary}
          tags={categories}
          cover={cover}
        />
      ))}
    </div>
  );
};
