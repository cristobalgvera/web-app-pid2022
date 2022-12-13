import { TopicModel } from "./topic.model";

export interface TopicCardModel extends Omit<TopicModel, "subtopics" | "chapter" | "content"> {}
