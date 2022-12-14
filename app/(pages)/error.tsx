"use client";

import { Button } from "@components/shared";
import { NextErrorPageProps } from "@utils/types";

export default function ErrorPage({ reset }: NextErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Ups! Esto es vergonzoso, hemos tenido un problema</h1>
      <p className="text-2xl">Estamos apenados por el inconveniente, vuelve a intentarlo recargando la página.</p>
      <Button onClick={reset}>Reintentar</Button>
    </div>
  );
}
