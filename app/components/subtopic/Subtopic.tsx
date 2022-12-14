import { Article, Title } from "@components/shared";
import { SubtopicEntryModel } from "./model";

interface SubtopicProps {
  subtopicEntry: SubtopicEntryModel;
}

export const Subtopic = ({ subtopicEntry: { title, content } }: SubtopicProps) => {
  return (
    <div className="mx-auto max-w-3xl">
      <Article>
        <Title>{title}</Title>
        {content}
      </Article>
    </div>
  );
};
