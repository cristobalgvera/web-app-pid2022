import { SubtopicEntryModel } from "@components/subtopic";
import { GetSubtopicByIdQueryVariables } from "@graphql/generated/graphql";
import { requestSdk } from "@graphql/util";
import { parseHtml } from "@utils/content";
import { notFound } from "next/navigation";

async function getSubtopicById(variables: GetSubtopicByIdQueryVariables): Promise<SubtopicEntryModel> {
  const response = await requestSdk.getSubtopicById(variables);

  const subtopic = response.subtopic?.data;

  if (!subtopic) return notFound();

  const { title, content } = subtopic.attributes ?? {};

  const html = parseHtml(content);

  return {
    title: title ?? "",
    content: html,
  };
}

export const subtopicApi = {
  getSubtopicById,
};
