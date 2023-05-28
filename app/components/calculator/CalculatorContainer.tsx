import { Button } from "@components/shared";
import { ReactNode } from "react";

interface CalculatorContainerProps {
  children: ReactNode;
  handleCalculation: () => void;
  handleReset: () => void;
}

export const CalculatorContainer = ({ children, handleReset, handleCalculation }: CalculatorContainerProps) => {
  return (
    <div
      className="
      flex flex-col items-center justify-center
      mt-4 w-full
      md:mt-8
      lg:w-[980px]
      "
    >
      <div className="w-full px-3 py-2">{children}</div>
      <div
        className="
        w-full
        flex items-center justify-around
        "
      >
        <Button
          className="
          bg-transparent text-brand-text
          hover:bg-transparent hover:underline hover:text-warn-500
          "
          onClick={handleReset}
        >
          Reiniciar
        </Button>
        <Button onClick={handleCalculation}>Calcular</Button>
      </div>
    </div>
  );
};
