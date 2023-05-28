import { Spinner } from "@components/shared";
import { useCalculateTwoJointProbability } from "@lib/api";
import { normalizeProbability } from "@utils/probability";
import { JointProbabilitySchema } from "./joint-probability-schema";

interface JointProbabilityResultProps extends JointProbabilitySchema {}

export function JointProbabilityResult({ eventA, eventB, intersectionAB }: JointProbabilityResultProps) {
  const requestData = {
    eventA: normalizeProbability(eventA),
    eventB: normalizeProbability(eventB),
    intersectionAB: normalizeProbability(intersectionAB),
  };

  const { data, isLoading, isError } = useCalculateTwoJointProbability(requestData);

  if (isLoading) return <Spinner />;

  // TODO: Show proper error message
  if (isError) return <span className="text-red-600 font-bold">Error</span>;

  // TODO: Show proper result
  return <div>{JSON.stringify(data)}</div>;
}
