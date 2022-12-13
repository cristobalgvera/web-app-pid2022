"use client";

import { useQuery } from "@app/client-wrappers";
import { ChapterIndexModel } from "@components/chapters";
import { Title } from "@components/shared";
import { TutorialIndex } from "@components/tutorials";
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
      <TutorialIndex chapterIndexes={data} />
    </>
  );
};
