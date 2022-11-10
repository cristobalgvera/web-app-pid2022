import { Title } from "@components/shared";
import { NextLayoutProps } from "@utils/types";

export default function TutorialsLayout({ children }: NextLayoutProps) {
  return (
    <div>
      <Title>Tutoriales</Title>
      {children}
    </div>
  );
}
