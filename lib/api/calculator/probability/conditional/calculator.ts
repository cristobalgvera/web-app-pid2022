import { useQuery } from "@tanstack/react-query";
import { calculationAxios } from "@utils/api";
import { HttpStatusCode } from "axios";

interface TwoEventsConditionalProbabilityRequest {
  eventB: number;
  intersectionAB: number;
}

interface TwoEventsConditionalProbabilityResponse {
  probabilityOfAGivenB: number;
}

export function useCalculateTwoConditionalProbability({
  eventB,
  intersectionAB,
}: TwoEventsConditionalProbabilityRequest) {
  return useQuery({
    queryKey: ["calculate-two-events-conditional-probability", eventB, intersectionAB],
    queryFn: async () => {
      const response = await calculationAxios.post<TwoEventsConditionalProbabilityResponse>(
        "/v1/probability/conditional/two-events",
        {
          eventB: { probability: eventB },
          intersectionAB: { probability: intersectionAB },
        },
      );

      if (response.status === HttpStatusCode.Created) return response.data;

      throw new Error("Error");
    },
  });
}
