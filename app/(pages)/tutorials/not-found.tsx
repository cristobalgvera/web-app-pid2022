"use client";

import { Button, Subtitle } from "@components/shared";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <Subtitle>No encontramos lo que buscabas :(</Subtitle>
      <p className="text-2xl">Intenta nuevamente</p>
      <Button onClick={() => router.push("/")}>Ir a la página principal</Button>
    </div>
  );
}
