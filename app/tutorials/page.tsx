import { Card } from "@components/shared";
import { TutorialsGrid } from "@components/tutorials/tutorials-grid/TutorialsGrid";

async function getCoverUrl(): Promise<string> {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", { cache: "no-store" });
  const data: { message: string } = await response.json();

  return data.message;
}

export default async function TutorialsPage() {
  const coverUrl = await getCoverUrl();

  const tutorial = {
    id: "1",
    title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    summary: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    categories: ["This", "That", "There", "A long category name", "Something else"],
    cover: {
      src: coverUrl,
      alt: "A picture of a dog",
    },
  };

  return (
    <div className="flex h-full flex-col gap-y-8 p-8">
      <h1 class="text-center text-6xl font-bold">Tutoriales</h1>
      {/* <Card */}
      {/*   redirectTo="tutorials/1" */}
      {/*   title="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." */}
      {/*   description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." */}
      {/*   cover={{ src: coverUrl, alt: "A picture of a dog" }} */}
      {/*   tags={["This", "That", "There", "A long category name", "Something else"]} */}
      {/* /> */}
      <TutorialsGrid tutorials={new Array(10).fill(tutorial)} />
    </div>
  );
}
