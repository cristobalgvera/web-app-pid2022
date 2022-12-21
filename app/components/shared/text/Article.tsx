import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ArticleProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Article = ({ children, className, ...props }: ArticleProps) => {
  return (
    <article
      className={`prose max-w-full prose-p:text-justify prose-figure:mx-auto prose-img:mx-auto md:prose-lg ${className}`}
      {...props}
    >
      {children}
    </article>
  );
};
