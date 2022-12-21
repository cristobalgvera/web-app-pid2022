import { Topic } from "@components/topics";
import { topicApi } from "@lib/api";
import { NextPageProps } from "@utils/types";

export const revalidate = 60;

export default async function TopicPage({ params: { id } }: NextPageProps<{ id: string }>) {
  const topicEntry = await topicApi.getTopicById({ id });

  return <Topic topicEntry={topicEntry} />;
}
