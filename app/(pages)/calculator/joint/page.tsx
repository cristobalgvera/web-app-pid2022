"use client";

import { CalculatorContainer } from "@components/calculator";
import { ErrorLabel, Input, Label } from "@components/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { JointProbabilityResult } from "./JointProbabilityResult";
import { JointProbabilitySchema, jointProbabilitySchema } from "./joint-probability-schema";

export default function JointCalculator() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<JointProbabilitySchema>({
    values: {
      eventA: 0,
      eventB: 0,
      intersectionAB: 0,
    },
    resolver: zodResolver(jointProbabilitySchema),
  });

  const [resultData, setResultData] = useState<JointProbabilitySchema>();

  const handleCalculation: SubmitHandler<JointProbabilitySchema> = (data) => {
    setResultData(data);
  };

  const handleReset = () => {
    setResultData(undefined);
    reset();
  };

  const renderResult = useMemo(() => (!!resultData ? <JointProbabilityResult {...resultData} /> : null), [resultData]);

  return (
    <CalculatorContainer
      name="Probabilidad conjunta"
      handleCalculation={handleSubmit(handleCalculation)}
      handleReset={handleReset}
      resultElement={renderResult}
    >
      <form className="form-control grid grid-cols-1 gap-3">
        <Label label="Evento A">
          <label className="input-group input-group-sm">
            <Input
              type="number"
              {...register("eventA")}
            />
            <span>%</span>
          </label>
          <ErrorLabel message={errors.eventA?.message} />
        </Label>
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
