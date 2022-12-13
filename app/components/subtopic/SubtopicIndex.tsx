import { TopicIndexModel } from "@components/topics";

interface SubtopicIndexProps {
  topicIndex: TopicIndexModel;
}

export const SubtopicIndex = ({ topicIndex }: SubtopicIndexProps) => {
  return (
    <ol className="mt-2 ml-8 space-y-2">
      {topicIndex.subtopics.map((subtopic) => (
        <li key={subtopic.id}>
          <span className="block rounded-lg px-2 hover:cursor-pointer hover:bg-gray-200">{subtopic.title}</span>
        </li>
      ))}
    </ol>
  );
};
