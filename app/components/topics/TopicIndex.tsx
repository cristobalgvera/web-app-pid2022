import { ChapterIndexModel } from "@components/chapters";
import { SubtopicIndex } from "@components/subtopic";
import Link from "next/link";

interface TopicIndexProps {
  chapterIndex: ChapterIndexModel;
}

export const TopicIndex = ({ chapterIndex }: TopicIndexProps) => {
  return (
    <ol className="mt-2 space-y-2 sm:ml-8">
      {chapterIndex.topics.map((topic) => (
        <li key={topic.id}>
          <Link href={`tutorials/topics/${topic.id}`}>
            <span className="block rounded-lg px-2 hover:cursor-pointer hover:bg-gray-200">{topic.title}</span>
          </Link>
          <SubtopicIndex topicIndex={topic} />
        </li>
      ))}
    </ol>
  );
};
