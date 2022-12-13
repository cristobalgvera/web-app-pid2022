import { TopicIndexModel } from "@components/topics";
import { ChapterModel } from "./chapter.model";

interface ChapterIndex {
  id: ChapterModel["id"];
  title: ChapterModel["title"];
  topics: TopicIndexModel[];
}

export interface ChapterIndexModel extends Readonly<ChapterIndex> {}
