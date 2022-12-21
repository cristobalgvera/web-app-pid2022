import { Article, Card, Title } from "@components/shared";
import { TopicEntryModel } from "./model";

interface TopicProps {
  topicEntry: TopicEntryModel;
}

export const Topic = ({ topicEntry: { title, content, subtopics } }: TopicProps) => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col space-y-6 md:space-y-8">
      <Article className="mb-2 border-b-2 border-solid border-gray-200 pb-8">
        <div className="mx-auto sm:max-w-sm md:max-w-lg lg:max-w-3xl xl:max-w-full">
          <Title>{title}</Title>
        </div>
        {content}
      </Article>
      <div className="mx-10 grid grid-cols-2 gap-3 md:gap-6 lg:mx-16">
        {subtopics.map((subtopic) => (
          <Card
            key={subtopic.id}
            redirectTo={`tutorials/subtopics/${subtopic.id}`}
            title={subtopic.title}
            description={subtopic.summary}
            cover={subtopic.cover}
          />
        ))}
      </div>
    </div>
  );
};
