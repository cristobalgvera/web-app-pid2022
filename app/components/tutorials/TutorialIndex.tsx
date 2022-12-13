import { ChapterIndex, ChapterIndexModel } from "@components/chapters";

interface TutorialIndexProps {
  chapterIndexes: ChapterIndexModel[];
}

export const TutorialIndex = ({ chapterIndexes }: TutorialIndexProps) => {
  return (
    <div className="relative mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
      <ChapterIndex chapterIndexes={chapterIndexes} />
    </div>
  );
};
