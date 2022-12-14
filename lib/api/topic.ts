import { TopicEntryModel } from "@components/topics";
import { GetTopicByIdQueryVariables } from "@graphql/generated/graphql";
import { requestSdk } from "@graphql/util";
import { parseHtml } from "@utils/content";
import { notFound } from "next/navigation";

async function getTopicById(variables: GetTopicByIdQueryVariables): Promise<TopicEntryModel> {
  const response = await requestSdk.getTopicById(variables);

  const topic = response.topic?.data;

  if (!topic) return notFound();

  const { title, content, subtopics } = topic.attributes ?? {};

  const html = parseHtml(content);

  return {
    title: title ?? "",
    content: html,
    subtopics:
      subtopics?.data.map((subtopic) => ({
        id: subtopic.id ?? "",
        title: subtopic.attributes?.title ?? "",
        summary: subtopic.attributes?.summary ?? "",
        cover: subtopic.attributes?.cover?.data?.attributes?.url
          ? {
              src: subtopic.attributes.cover.data.attributes.url,
              alt: subtopic.attributes.cover.data.attributes.alternativeText ?? "",
            }
          : undefined,
      })) ?? [],
  };
}

export const topicApi = {
  getTopicById,
};
