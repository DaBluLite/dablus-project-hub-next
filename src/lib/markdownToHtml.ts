import { remark } from "remark";
import html from "remark-html";
import highlight from 'remark-prism';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(highlight)
    .process(markdown);
  return result.toString();
}