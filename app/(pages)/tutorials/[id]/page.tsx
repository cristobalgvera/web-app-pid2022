import { Tutorial, TutorialModel } from "@components/tutorials";
import { requestSdk } from "@graphql/util";
import { NextPageProps } from "@utils/types";
import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";

async function getTutorial(id: string): Promise<TutorialModel> {
  const response = await requestSdk.getOneTutorial({ id });

  if (!response.tutorial?.data?.id) notFound();

  const html = await serialize(response.tutorial.data.attributes?.content ?? "");

  return {
    id: response.tutorial.data.id ?? "",
    title: response.tutorial.data.attributes?.title ?? "",
    categories:
      response.tutorial.data.attributes?.categories?.data
        .map((category) => category.attributes?.name ?? "")
        .filter(Boolean) ?? [],
    content: html,
    summary: response.tutorial.data.attributes?.summary ?? "",
    cover: {
      src: response.tutorial.data.attributes?.cover?.data?.attributes?.url ?? "",
      alt: response.tutorial.data.attributes?.cover?.data?.attributes?.alternativeText ?? "",
    },
  };
}

export default async function TutorialPage({ params }: NextPageProps<{ id: string }>) {
  const tutorial = await getTutorial(params.id);

  return <Tutorial tutorial={tutorial} />;
}
