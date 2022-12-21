"use client";

import { useQuery } from "@app/client-wrappers";
import { ChapterIndex, ChapterIndexModel } from "@components/chapters";
import { Title } from "@components/shared";
import { chapterApi } from "@lib/api";

interface TutorialsProps {
  indexes: ChapterIndexModel[];
}

export const Tutorials = ({ indexes }: TutorialsProps) => {
  const { data } = useQuery({
    queryKey: ["tutorial-indexes"],
    queryFn: () => chapterApi.getTutorialIndexes(),
    initialData: indexes,
  });

  return (
    <>
      <Title>Índice de Tutoriales</Title>
      <div className="mt-4 px-4 sm:mx-auto sm:flex sm:flex-col sm:items-center sm:px-6 md:mt-8 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <ChapterIndex chapterIndexes={data} />
      </div>
    </>
  );
};
