import { TutorialCard, TutorialModel } from "@components/tutorials";
import { GetAllTutorialsQueryVariables, GetOneTutorialQueryVariables } from "@graphql/generated/graphql";
import { requestSdk } from "@graphql/util";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";

async function getTutorial(variables: GetOneTutorialQueryVariables): Promise<TutorialModel> {
  const response = await requestSdk.getOneTutorial(variables);

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

async function getTutorialCards(variables?: GetAllTutorialsQueryVariables): Promise<TutorialCard[]> {
  const response = await requestSdk.getAllTutorials(variables);

  return (
    response?.tutorials?.data.map((tutorial) => ({
      id: tutorial.id ?? "",
      title: tutorial.attributes?.title ?? "",
      cover: {
        src: tutorial.attributes?.cover?.data?.attributes?.url ?? "",
        alt: tutorial.attributes?.cover?.data?.attributes?.alternativeText ?? "",
      },
      categories:
        tutorial.attributes?.categories?.data.map((category) => category.attributes?.name ?? "").filter(Boolean) ?? [],
      summary: tutorial.attributes?.summary ?? "",
    })) ?? []
  );
}

export const tutorialApi = {
  getTutorial,
  getTutorialCards,
};
