import { Spinner } from "@components/shared";
import { useCalculateTwoConditionalProbability } from "@lib/api";
import { normalizeProbability } from "@utils/probability";
import { ConditionalProbabilitySchema } from "./conditional-probability-schema";

interface ConditionalProbabilityResultProps extends ConditionalProbabilitySchema {}

export function ConditionalProbabilityResult({ eventB, intersectionAB }: ConditionalProbabilityResultProps) {
  const requestData = {
    eventB: normalizeProbability(eventB),
    intersectionAB: normalizeProbability(intersectionAB),
  };

  const { data, isLoading, isError } = useCalculateTwoConditionalProbability(requestData);

  if (isLoading) return <Spinner />;

  // TODO: Show proper error message
  if (isError) return <span className="text-red-600 font-bold">Error</span>;

  // TODO: Show proper result
  return <div>{JSON.stringify(data)}</div>;
}
