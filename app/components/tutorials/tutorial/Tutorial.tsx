import { MDXRemote } from "@app/client-wrappers";
import { Title } from "@components/shared";
import { TutorialModel } from "../model";

interface TutorialProps {
  tutorial: TutorialModel;
}

export const Tutorial = ({ tutorial }: TutorialProps) => {
  return (
    <article className="prose-lg max-w-full prose-p:text-justify prose-img:mx-auto">
      <Title>{tutorial.title}</Title>
      <MDXRemote {...tutorial.content} />
    </article>
  );
};
