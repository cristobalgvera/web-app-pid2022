import { TopicModel } from "@components/topics";
import { HtmlContent } from "@utils/types";

interface Chapter {
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

export interface ChapterModel extends Readonly<Chapter> {}
