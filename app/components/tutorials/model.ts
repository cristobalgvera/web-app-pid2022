import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface TutorialModel {
  id: string;
  title: string;
  content: MDXRemoteSerializeResult;
  summary?: string;
  cover?: {
    src: string;
    alt: string;
  };
  categories: string[];
}

export interface TutorialCardDto extends Omit<TutorialModel, "content"> {}
