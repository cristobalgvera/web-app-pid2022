import { TopicIndexModel } from "@components/topics";

interface SubtopicIndexProps {
  topicIndex: TopicIndexModel;
}

export const SubtopicIndex = ({ topicIndex }: SubtopicIndexProps) => {
  return (
    <ol className="mt-4 ml-8 space-y-2">
      {topicIndex.subtopics.map((subtopic) => (
        <li key={subtopic.id}>
          <span>{subtopic.title}</span>
        </li>
      ))}
    </ol>
  );
};
