import { ChapterIndexModel } from "@components/chapters";
import { SubtopicIndex } from "@components/subtopic";
import { TopicIndexModel } from "./model";

interface TopicIndexProps {
  chapterIndex: ChapterIndexModel;
}

export const TopicIndex = ({ chapterIndex }: TopicIndexProps) => {
  return (
    <ol className="mt-4 space-y-2 sm:ml-8">
      {chapterIndex.topics.map((topic) => (
        <li key={topic.id}>
          <span>{topic.title}</span>
          <SubtopicIndex topicIndex={topic} />
        </li>
      ))}
    </ol>
  );
};
