import { Chapter } from "@components/chapters";
import { chapterApi } from "@lib/api";
import { NextPageProps } from "@utils/types";

export const revalidate = 60;

export default async function TutorialsPage({ params: { id } }: NextPageProps<{ id: string }>) {
  const chapterEntry = await chapterApi.getChapterById({ id });

  return <Chapter chapterEntry={chapterEntry} />;
}
