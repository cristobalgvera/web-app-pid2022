import { SubtopicModel } from "./subtopic.model";

export interface SubtopicCardModel extends Omit<SubtopicModel, "topic" | "content"> {}
