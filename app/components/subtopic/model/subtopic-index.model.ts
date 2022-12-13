import { SubtopicModel } from "./subtopic.model";

interface SubtopicIndex {
  id: SubtopicModel["id"];
  title: SubtopicModel["title"];
}

export interface SubtopicIndexModel extends Readonly<SubtopicIndex> {}
