import { Card } from "@components/shared";
import { TutorialCardDto } from "./model";

interface TutorialCardsProps {
  tutorialCards: TutorialCardDto[];
}

export const TutorialCards = ({ tutorialCards }: TutorialCardsProps) => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-y-8 md:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
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
