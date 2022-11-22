import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ArticleProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Article = ({ children, className, ...props }: ArticleProps) => {
  return (
    <article
      className={`prose-lg max-w-full prose-p:text-justify prose-img:mx-auto ${className}`}
      {...props}
    >
      {children}
    </article>
  );
};
