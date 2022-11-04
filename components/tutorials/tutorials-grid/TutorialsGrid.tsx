import { Card } from "@components/shared";
import { TutorialCard } from "../model";

interface TutorialsGridProps {
  tutorials: TutorialCard[];
}

export const TutorialsGrid = ({ tutorials }: TutorialsGridProps) => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-y-8 gap-x-2">
      {tutorials.map(({ id, title, summary, categories, cover }) => (
        <Card
          key={id}
          redirectTo={`${tutorials}/${id}`}
          title={title}
          description={summary}
          tags={categories}
          cover={cover}
        />
      ))}
    </div>
  );
};
