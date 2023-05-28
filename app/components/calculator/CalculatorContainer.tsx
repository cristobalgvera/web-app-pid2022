import { Button, Subtitle } from "@components/shared";
import { ReactNode } from "react";

interface CalculatorContainerProps {
  children: ReactNode;
  handleCalculation: () => void;
  handleReset: () => void;
  resultElement?: ReactNode;
  name?: string;
}

export const CalculatorContainer = ({
  children,
  resultElement,
  handleReset,
  handleCalculation,
  name,
}: CalculatorContainerProps) => {
  return (
    <div
      className="
      form-control
      flex flex-col items-center justify-center gap-y-2
      mt-4 w-full
      md:mt-8
      lg:w-[980px]
      "
      onKeyUp={({ key }) => key === "Enter" && handleCalculation()}
    >
      {name ? <Subtitle>{name}</Subtitle> : null}
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
      {!!resultElement ? (
        <div
          className="
          mt-4 w-full
          "
        >
          {resultElement}
        </div>
      ) : null}
    </div>
  );
};
