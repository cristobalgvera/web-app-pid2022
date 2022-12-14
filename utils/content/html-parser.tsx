import { HtmlContent } from "@utils/types";
import htmlReactParse from "html-react-parser";
import sanitize from "sanitize-html";

export function parseHtml(plainHtml: string | undefined): HtmlContent {
  if (!plainHtml) return <></>;

  try {
    const cleanHtml = sanitize(plainHtml, {
      allowedTags: sanitize.defaults.allowedTags.concat(["img"]),
      allowedAttributes: {
        figure: ["style"],
        img: ["src", "srcset", "sizes", "alt", "title", "width", "height", "style"],
      },
    });
    return htmlReactParse(cleanHtml, { trim: true });
  } catch (error) {
    return <></>;
  }
}
