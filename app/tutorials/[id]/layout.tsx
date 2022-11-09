import { NextLayoutProps } from "@utils/types";

export default function TutorialLayout({ children }: NextLayoutProps) {
  return (
    <div className="lg:grid lg:grid-cols-4">
      <div className="lg:col-span-3">{children}</div>
      <div className="h-full bg-yellow-300/50">Other tutorials</div>
    </div>
  );
}
