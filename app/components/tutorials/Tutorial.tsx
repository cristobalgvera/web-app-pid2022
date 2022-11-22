import { MDXRemote } from "@app/client-wrappers";
import { Article, Title } from "@components/shared";
import { TutorialModel } from "./model";

interface TutorialProps {
  tutorial: TutorialModel;
}

export const Tutorial = ({ tutorial }: TutorialProps) => {
  return (
    <Article>
      <Title>{tutorial.title}</Title>
      <MDXRemote {...tutorial.content} />
    </Article>
  );
};
