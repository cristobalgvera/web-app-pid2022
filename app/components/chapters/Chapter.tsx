import { Article, Card, Title } from "@components/shared";
import { ChapterEntryModel } from "./model";

interface ChapterProps {
  chapterEntry: ChapterEntryModel;
}

export const Chapter = ({ chapterEntry: { title, content, topics } }: ChapterProps) => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-8">
      <Article className="mb-2 border-b-2 border-solid border-gray-200 pb-8">
        <Title>{title}</Title>
        {content}
      </Article>
      <div className="mx-10 grid grid-cols-2 gap-3 md:gap-6 lg:mx-16 lg:grid-cols-3">
        {topics.map((topic) => (
          <Card
            key={topic.id}
            redirectTo={`tutorials/topics/${topic.id}`}
            title={topic.title}
            description={topic.summary}
            cover={topic.cover}
          />
        ))}
      </div>
    </div>
  );
};
