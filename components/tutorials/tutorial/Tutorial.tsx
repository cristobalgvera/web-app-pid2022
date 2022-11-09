import { MDXRemote } from "@app/client-wrappers";
import { TutorialModel } from "../model";

interface TutorialProps {
  tutorial: TutorialModel;
}

export const Tutorial = ({ tutorial }: TutorialProps) => {
  return (
    <div className="prose">
      <h1>{tutorial.title}</h1>
      <MDXRemote {...tutorial.content} />
    </div>
  );
};
