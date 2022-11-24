import { TutorialCardDto, TutorialModel } from "@components/tutorials";
import { GetAllTutorialsQueryVariables, GetOneTutorialQueryVariables } from "@graphql/generated/graphql";
import { requestSdk } from "@graphql/util";
import { parseHtml } from "@utils/content";
import { notFound } from "next/navigation";

async function getTutorial(variables: GetOneTutorialQueryVariables): Promise<TutorialModel> {
  const response = await requestSdk.getOneTutorial(variables);

  const data = response.tutorial?.data;

  if (!data || !data.id) notFound();

  const { title, cover, categories, summary, content } = data.attributes ?? {};

  const html = parseHtml(content);

  return {
    id: data.id,
    title: title ?? "",
    categories: categories?.data.map((category) => category.attributes?.name ?? "").filter(Boolean) ?? [],
    content: html,
    summary: summary ?? undefined,
    cover: cover?.data?.attributes?.url
      ? {
          src: cover.data.attributes.url,
          alt: cover.data.attributes.alternativeText ?? "",
        }
      : undefined,
  };
}

async function getTutorialCards(variables?: GetAllTutorialsQueryVariables): Promise<TutorialCardDto[]> {
  const response = await requestSdk.getAllTutorials(variables);

  return (
    response?.tutorials?.data.map((tutorial) => {
      const { title, cover, summary, categories } = tutorial.attributes ?? {};

      return {
        id: tutorial.id ?? "",
        title: title ?? "",
        cover: cover?.data?.attributes?.url
          ? {
              src: cover.data.attributes.url,
              alt: cover.data.attributes.alternativeText ?? "",
            }
          : undefined,
        categories: categories?.data.map((category) => category.attributes?.name ?? "").filter(Boolean) ?? [],
        summary: summary ?? undefined,
      };
    }) ?? []
  );
}

async function getAllTutorialIds(): Promise<{ id: string }[]> {
  const response = await requestSdk.getAllTutorialIds();

  const tutorialIds = response.tutorials?.data.map(({ id }) => String(id)).filter(Boolean) ?? [];

  return tutorialIds.map((id) => ({ id }));
}

export const tutorialApi = {
  getTutorial,
  getTutorialCards,
  getAllTutorialIds,
};
