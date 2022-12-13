import { TopicModel } from "@components/topics";
import { HtmlContent } from "@utils/types";

export interface ChapterModel {
  id: string;
  title: string;
  content: HtmlContent;
  summary?: string;
  cover?: {
    src: string;
    alt: string;
  };
  topics: TopicModel[];
}
