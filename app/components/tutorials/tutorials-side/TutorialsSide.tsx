import { Card } from "@components/shared";
import { TutorialCard } from "../model";

interface TutorialsSideProps {
  tutorialCards: TutorialCard[];
}

export const TutorialsSide = ({ tutorialCards }: TutorialsSideProps) => {
  return (
    <aside>
      <h2 className="mb-6 text-lg font-semibold">Revisa otros tutoriales</h2>
      <div className="grid grid-cols-1 gap-y-8">
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
    </aside>
  );
};
