import { Article, Title } from "@components/shared";
import { SubtopicEntryModel } from "./model";

interface SubtopicProps {
  subtopicEntry: SubtopicEntryModel;
}

export const Subtopic = ({ subtopicEntry: { title, content } }: SubtopicProps) => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-8">
      <Article className="mb-2 border-b-2 border-solid border-gray-200 pb-8">
        <Title>{title}</Title>
        {content}
      </Article>
    </div>
  );
};
