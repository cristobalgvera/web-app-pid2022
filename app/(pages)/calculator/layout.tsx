import { Title } from "@components/shared";
import { NextLayoutProps } from "@utils/types";

export default function CalculatorLayout({ children }: NextLayoutProps) {
  return (
    <>
      <Title>Calculadora</Title>
      <div className="mt-4 px-4 sm:mx-auto sm:flex sm:flex-col sm:items-center sm:px-6 md:mt-8 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        {children}
      </div>
    </>
  );
}
