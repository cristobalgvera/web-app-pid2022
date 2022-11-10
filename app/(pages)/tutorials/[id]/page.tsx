import { NextPageProps } from "@utils/types";
import { tutorialApi } from "@lib/api";
import { Tutorial } from "@components/tutorials";

export default async function TutorialPage({ params }: NextPageProps<{ id: string }>) {
  const tutorial = await tutorialApi.getTutorial(params.id);

  return <Tutorial tutorial={tutorial} />;
}
