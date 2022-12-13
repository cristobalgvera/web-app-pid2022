import { TopicCardModel } from "@components/topics";
import { ChapterModel } from "./chapter.model";

interface ChapterEntry {
  title: ChapterModel["id"];
  content: ChapterModel["content"];
  topics: TopicCardModel[];
}

export interface ChapterEntryModel extends Readonly<ChapterEntry> {}
