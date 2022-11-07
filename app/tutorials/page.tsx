import { TutorialCard } from "@components/tutorials";
import { TutorialsGrid } from "@components/tutorials/tutorials-grid/TutorialsGrid";
import { requestSdk } from "@graphql/util";

async function getTutorialCards(): Promise<TutorialCard[]> {
  const response = await requestSdk.getAllTutorials();

  return (
    response?.tutorials?.data.map((tutorial) => ({
      id: tutorial.id ?? "",
      title: tutorial.attributes?.title ?? "",
      cover: {
        src: process.env.NEXT_PUBLIC_CMS_BASE_URL! + (tutorial.attributes?.cover?.data?.attributes?.url ?? ""),
        alt: tutorial.attributes?.cover?.data?.attributes?.alternativeText ?? "",
      },
      categories:
        tutorial.attributes?.categories?.data.map((category) => category.attributes?.name ?? "").filter(Boolean) ?? [],
      summary: tutorial.attributes?.summary ?? "",
    })) ?? []
  );
}

export default async function TutorialsPage() {
  const tutorialCards = await getTutorialCards();

  return <TutorialsGrid tutorialCards={tutorialCards} />;
}
