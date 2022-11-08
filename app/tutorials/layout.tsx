import { Title } from "@components/shared";
import { NextLayoutProps } from "@utils/types";

export default function TutorialsLayout({ children }: NextLayoutProps) {
  return (
    <div className="flex flex-col gap-y-8 p-8">
      <Title>Tutoriales</Title>
      {children}
    </div>
  );
}
