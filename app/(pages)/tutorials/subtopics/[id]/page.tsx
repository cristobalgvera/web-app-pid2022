import { Subtopic } from "@components/subtopic";
import { subtopicApi } from "@lib/api";
import { NextPageProps } from "@utils/types";

export const revalidate = 60;

export default async function TopicPage({ params: { id } }: NextPageProps<{ id: string }>) {
  const subtopicEntry = await subtopicApi.getSubtopicById({ id });

  return <Subtopic subtopicEntry={subtopicEntry} />;
}
