"use client";

import { Card } from "@components/shared";
import { useTutorials } from "@hooks/api";

export const TutorialsGrid = () => {
  const { data, isError, isLoading } = useTutorials();

  if (isLoading) return <p>Cargando...</p>;
  if (isError) throw new Error("Error inesperado al solicitar los tutoriales");

  return (
    <div className="grid grid-cols-2 place-items-center gap-x-2 gap-y-8">
      {data.map(({ id, title, cover, summary, categories }) => (
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
