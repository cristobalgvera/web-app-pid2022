import { SubtopicIndexModel } from "@components/subtopic";
import { TopicModel } from "./topic.model";

interface TopicIndex {
  id: TopicModel["id"];
  title: TopicModel["title"];
  subtopics: SubtopicIndexModel[];
}

export interface TopicIndexModel extends Readonly<TopicIndex> {}
