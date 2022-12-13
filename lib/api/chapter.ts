import { ChapterEntryModel, ChapterIndexModel } from "@components/chapters";
import { GetChapterByIdQueryVariables } from "@graphql/generated/graphql";
import { requestSdk } from "@graphql/util";
import { parseHtml } from "@utils/content";
import { notFound } from "next/navigation";

async function getTutorialIndexes(): Promise<ChapterIndexModel[]> {
  const response = await requestSdk.getTutorialIndexes();

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

async function getChapterById(variables: GetChapterByIdQueryVariables): Promise<ChapterEntryModel> {
  const response = await requestSdk.getChapterById(variables);

  const chapter = response.chapter?.data;

  if (!chapter) return notFound();

  const { title, content, topics } = chapter.attributes ?? {};

  const html = parseHtml(content);

  return {
    title: title ?? "",
    content: html,
    topics:
      topics?.data.map((topic) => ({
        id: topic.id ?? "",
        title: topic.attributes?.title ?? "",
        summary: topic.attributes?.summary ?? "",
        cover: topic.attributes?.cover?.data?.attributes?.url
          ? {
              src: topic.attributes.cover.data.attributes.url,
              alt: topic.attributes.cover.data.attributes.alternativeText ?? "",
            }
          : undefined,
      })) ?? [],
  };
}

export const chapterApi = {
  getChapterById,
  getTutorialIndexes,
};
