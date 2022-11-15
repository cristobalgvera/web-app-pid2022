import { Tutorial, TutorialsSide } from "@components/tutorials";
import { tutorialApi } from "@lib/api";
import { NextPageProps } from "@utils/types";

export default async function TutorialPage({ params }: NextPageProps<{ id: string }>) {
  const [tutorial, tutorialCards] = await Promise.all([
    tutorialApi.getTutorial({ id: params.id }),
    tutorialApi.getTutorialCards({
      pagination: {
        pageSize: 2,
      },
      filters: {
        id: {
          ne: params.id,
        },
      },
    }),
  ]);

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-x-16 lg:pt-4">
      <div className="lg:col-span-2">
        <Tutorial tutorial={tutorial} />
      </div>
      <div>
        <TutorialsSide tutorialCards={tutorialCards} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return tutorialApi.getAllTutorialIds();
}
