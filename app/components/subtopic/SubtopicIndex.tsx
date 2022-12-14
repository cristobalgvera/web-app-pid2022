import { TopicIndexModel } from "@components/topics";
import Link from "next/link";

interface SubtopicIndexProps {
  topicIndex: TopicIndexModel;
}

export const SubtopicIndex = ({ topicIndex }: SubtopicIndexProps) => {
  return (
    <ol className="mt-2 ml-8 space-y-2">
      {topicIndex.subtopics.map((subtopic) => (
        <li key={subtopic.id}>
          <Link href={`tutorials/subtopics/${subtopic.id}`}>
            <span className="block rounded-lg px-2 hover:cursor-pointer hover:bg-gray-200">{subtopic.title}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
};
