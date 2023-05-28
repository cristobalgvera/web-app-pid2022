import { z } from "zod";

export const jointProbabilitySchema = z.object({
  eventA: z.coerce.number().gte(0).lte(100),
  eventB: z.coerce.number().gte(0).lte(100),
  intersectionAB: z.coerce.number().gte(0).lte(100),
});

export type JointProbabilitySchema = z.infer<typeof jointProbabilitySchema>;
