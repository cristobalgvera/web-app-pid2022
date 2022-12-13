import { TopicIndex } from "@components/topics";
import { ChapterIndexModel } from "./model";

interface ChapterIndexProps {
  chapterIndexes: ChapterIndexModel[];
}

export const ChapterIndex = ({ chapterIndexes }: ChapterIndexProps) => {
  return (
    <ol className="space-y-10 text-lg leading-8">
      {chapterIndexes.map((chapter) => (
        <li key={chapter.id}>
          <h2 className="rounded-lg px-2 font-semibold text-slate-900 hover:cursor-pointer hover:bg-gray-200">
            {chapter.title}
          </h2>
          <TopicIndex chapterIndex={chapter} />
        </li>
      ))}
    </ol>
  );
};
