import { z } from "zod";

export const conditionalProbabilitySchema = z.object({
  eventB: z.coerce.number().gte(0).lte(100),
  intersectionAB: z.coerce.number().gte(0).lte(100),
});

export type ConditionalProbabilitySchema = z.infer<typeof conditionalProbabilitySchema>;
