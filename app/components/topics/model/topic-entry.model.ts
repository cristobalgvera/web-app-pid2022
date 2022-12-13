import { SubtopicCardModel } from "@components/subtopic";
import { TopicModel } from "./topic.model";

interface TopicEntry {
  title: TopicModel["title"];
  content: TopicModel["content"];
  subtopics: SubtopicCardModel[];
}

export interface TopicEntryModel extends Readonly<TopicEntry> {}
