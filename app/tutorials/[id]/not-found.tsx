"use client";

import { Button, Subtitle } from "@components/shared";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <Subtitle>Ups! No encontramos el tutorial que buscabas</Subtitle>
      <p className="text-2xl">Prueba con otro tutorial</p>
      <Button onClick={() => router.push("/tutorials")}>Ir a la página principal</Button>
    </div>
  );
}
