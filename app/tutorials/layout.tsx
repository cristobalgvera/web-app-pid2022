import { Title } from "@components/shared";

export default function TutorialsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-y-8 p-8">
      <Title>Tutoriales</Title>
      {children}
    </div>
  );
}
