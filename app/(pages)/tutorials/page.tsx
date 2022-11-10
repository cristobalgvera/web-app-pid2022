import { TutorialsGrid } from "@components/tutorials";
import { tutorialApi } from "@lib/api";

export default async function TutorialsPage() {
  const tutorialCards = await tutorialApi.getTutorialCards();

  return <TutorialsGrid tutorialCards={tutorialCards} />;
}
