export default function TutorialsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-y-8 p-8">
      <h1 className="text-center text-6xl font-bold">Tutoriales</h1>
      {children}
    </div>
  );
}
