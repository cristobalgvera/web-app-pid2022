import { TopicModel } from "@components/topics";
import { HtmlContent } from "@utils/types";

export interface SubtopicModel {
  id: string;
  title: string;
  content: HtmlContent;
  summary?: string;
  cover?: {
    src: string;
    alt: string;
  };
  topic: TopicModel;
}
