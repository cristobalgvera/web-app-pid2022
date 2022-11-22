import { Card } from "@components/shared";
import { TutorialCardDto } from "./model";

interface TutorialCardsProps {
  tutorialCards: TutorialCardDto[];
}

export const TutorialCards = ({ tutorialCards }: TutorialCardsProps) => {
  return (
    <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-6">
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
