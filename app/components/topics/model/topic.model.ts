import { ChapterModel } from "@components/chapters";
import { SubtopicModel } from "@components/subtopic";
import { HtmlContent } from "@utils/types";

export interface TopicModel {
  id: string;
  title: string;
  content: HtmlContent;
  summary?: string;
  cover?: {
    src: string;
    alt: string;
  };
  chapter: ChapterModel;
  subtopics: SubtopicModel[];
}
