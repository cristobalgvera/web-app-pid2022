import { Card } from "@components/shared";
import { TutorialCard } from "../model";

interface TutorialsGridProps {
  tutorialCards: TutorialCard[];
}

export const TutorialsGrid = ({ tutorialCards }: TutorialsGridProps) => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-x-2 gap-y-8">
      {tutorialCards.map(({ id, title, cover, summary, categories }) => (
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
