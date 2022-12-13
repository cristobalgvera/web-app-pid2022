import { chapterApi } from "@lib/api";
import { Tutorials } from "./Tutorials";

export const revalidate = 60;

export default async function TutorialsPage() {
  const tutorialIndexes = await chapterApi.getTutorialIndexes();

  return <Tutorials indexes={tutorialIndexes} />;
}
