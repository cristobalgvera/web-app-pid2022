export interface Tutorial {
  id: string;
  title: string;
  content: string;
  summary: string;
  cover?: {
    src: string;
    alt: string;
  };
  categories: string[];
}

export interface TutorialCard extends Omit<Tutorial, "content"> {}
