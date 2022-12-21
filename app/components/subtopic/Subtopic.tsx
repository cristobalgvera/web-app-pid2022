import { Article, Title } from "@components/shared";
import { SubtopicEntryModel } from "./model";

interface SubtopicProps {
  subtopicEntry: SubtopicEntryModel;
}

export const Subtopic = ({ subtopicEntry: { title, content } }: SubtopicProps) => {
  return (
    <div className="mx-auto max-w-3xl">
      <Article>
        <div className="mx-auto sm:max-w-sm md:max-w-lg lg:max-w-full">
          <Title>{title}</Title>
        </div>
        {content}
      </Article>
    </div>
  );
};
