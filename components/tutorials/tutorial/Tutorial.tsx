import { TutorialModel } from "../model";

interface TutorialProps {
  tutorial: TutorialModel;
}

export const Tutorial = ({ tutorial }: TutorialProps) => {
  return (
    <div>
      id: {tutorial.id}, title: {tutorial.title}
    </div>
  );
};
