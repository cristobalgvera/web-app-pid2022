import { TopicModel } from "@components/topics";
import { HtmlContent } from "@utils/types";

interface Subtopic {
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

export interface SubtopicModel extends Readonly<Subtopic> {}
