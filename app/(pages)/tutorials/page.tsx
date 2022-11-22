import { TutorialGrid } from "./TutorialGrid";
import { tutorialApi } from "@lib/api";

export const revalidate = 60;

export default async function TutorialsPage() {
  const tutorialCards = await tutorialApi.getTutorialCards();

  return <TutorialGrid tutorialCards={tutorialCards} />;
}
