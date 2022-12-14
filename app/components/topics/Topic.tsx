import { Article, Card, Title } from "@components/shared";
import { TopicEntryModel } from "./model";

interface TopicProps {
  topicEntry: TopicEntryModel;
}

export const Topic = ({ topicEntry: { title, content, subtopics } }: TopicProps) => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-8">
      <Article className="mb-2 border-b-2 border-solid border-gray-200 pb-8">
        <Title>{title}</Title>
        {content}
      </Article>
      <div className="mx-10 grid grid-cols-2 gap-3 md:gap-6 lg:mx-16 lg:grid-cols-3">
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
