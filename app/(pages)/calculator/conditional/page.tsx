"use client";

import { CalculatorContainer } from "@components/calculator";
import { ErrorLabel, Input, Label } from "@components/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ConditionalProbabilityResult } from "./ConditionalProbabilityResult";
import { ConditionalProbabilitySchema, conditionalProbabilitySchema } from "./conditional-probability-schema";

export default function ConditionalCalculator() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ConditionalProbabilitySchema>({
    values: {
      eventB: 0,
      intersectionAB: 0,
    },
    resolver: zodResolver(conditionalProbabilitySchema),
  });

  const [resultData, setResultData] = useState<ConditionalProbabilitySchema>();

  const handleCalculation: SubmitHandler<ConditionalProbabilitySchema> = (data) => {
    setResultData(data);
  };

  const handleReset = () => {
    setResultData(undefined);
    reset();
  };

  const renderResult = useMemo(
    () => (!!resultData ? <ConditionalProbabilityResult {...resultData} /> : null),
    [resultData],
  );

  return (
    <CalculatorContainer
      name="Probabilidad condicionada"
      handleCalculation={handleSubmit(handleCalculation)}
      handleReset={handleReset}
      resultElement={renderResult}
    >
      <form className="form-control grid grid-cols-1 gap-3">
        <Label label="Evento B">
          <label className="input-group input-group-sm">
            <Input
              type="number"
              {...register("eventB")}
            />
            <span>%</span>
          </label>
          <ErrorLabel message={errors.eventB?.message} />
        </Label>
        <Label label="Intersección">
          <label className="input-group input-group-sm">
            <Input
              type="number"
              {...register("intersectionAB")}
            />
            <span>%</span>
          </label>
          <ErrorLabel message={errors.intersectionAB?.message} />
        </Label>
      </form>
    </CalculatorContainer>
  );
}
