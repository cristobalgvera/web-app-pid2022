"use client";

import { GoBackButton } from "@components/shared";
import { NextLayoutProps } from "@utils/types";

export default function TutorialsLayout({ children }: NextLayoutProps) {
  return (
    <div className="relative">
      <GoBackButton className="invisible absolute -top-3 sm:visible" />
      <div>{children}</div>
    </div>
  );
}
