import { Title } from "@components/shared";
import { NextLayoutProps } from "@utils/types";

export default function CalculatorLayout({ children }: NextLayoutProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Title>Calculadora</Title>
      {children}
    </div>
  );
}
