import { ChapterIndexModel } from "@components/chapters";
import { requestSdk } from "@graphql/util";

async function getTutorialsIndex(): Promise<ChapterIndexModel[]> {
  const response = await requestSdk.getTutorialsIndex();

  const chapters = response.chapters?.data ?? [];

  return chapters.map((chapter) => ({
    id: chapter.id ?? "",
    title: chapter.attributes?.title ?? "",
    topics:
      chapter.attributes?.topics?.data.map((topic) => ({
        id: topic.id ?? "",
        title: topic.attributes?.title ?? "",
        subtopics:
          topic.attributes?.subtopics?.data.map((subtopic) => ({
            id: subtopic.id ?? "",
            title: subtopic.attributes?.title ?? "",
          })) ?? [],
      })) ?? [],
  }));
}

export const chapterApi = {
  getTutorialsIndex,
};
