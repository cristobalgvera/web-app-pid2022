import { SubtopicModel } from "./subtopic.model";

interface SubtopicEntry {
  title: SubtopicModel["title"];
  content: SubtopicModel["content"];
}

export interface SubtopicEntryModel extends Readonly<SubtopicEntry> {}
