"use client";

import { Title } from "@components/shared";
import { tutorialApi } from "@lib/api";
import { useQuery } from "@app/client-wrappers";
import { TutorialCardDto, TutorialCards } from "@components/tutorials";

interface TutorialsGridProps {
  tutorialCards: TutorialCardDto[];
}

export const TutorialGrid = ({ tutorialCards }: TutorialsGridProps) => {
  const { data } = useQuery({
    queryKey: ["tutorial-cards"],
    queryFn: () => tutorialApi.getTutorialCards(),
    initialData: tutorialCards ?? [],
  });

  return (
    <>
      <Title>Tutoriales</Title>
      <TutorialCards tutorialCards={data} />
    </>
  );
};
