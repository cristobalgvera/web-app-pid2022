import { useQuery } from "@tanstack/react-query";
import { calculationAxios } from "@utils/api";
import { HttpStatusCode } from "axios";

interface TwoEventsJointProbabilityRequest {
  eventA: number;
  eventB: number;
  intersectionAB: number;
}

interface TwoEventsJointProbabilityResponse {
  probabilityOfAUnionB: number;
  probabilityOfAComplementIntersectionB: number;
  probabilityOfAIntersectionBComplement: number;
  probabilityOfComplementsSum: number;
}

export function useCalculateTwoJointProbability({ eventA, eventB, intersectionAB }: TwoEventsJointProbabilityRequest) {
  return useQuery({
    queryKey: ["calculate-joint-probability", eventA, eventB, intersectionAB],
    queryFn: async () => {
      const response = await calculationAxios.post<TwoEventsJointProbabilityResponse>(
        "/v1/probability/joint/two-events",
        {
          eventA: { probability: eventA },
          eventB: { probability: eventB },
          intersectionAB: { probability: intersectionAB },
        },
      );

      if (response.status === HttpStatusCode.Created) return response.data;

      throw new Error("Error");
    },
  });
}
