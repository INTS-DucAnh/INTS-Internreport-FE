import Markdown from "react-markdown";
import remarkSlug from "remark-slug";
import remarkGfm from "remark-gfm";
import { Children, createElement } from "react";

export function DisplayMarkdown({ md, theme }) {
  function HeadingRenderer(props) {
    var children = Children.toArray(
      props.children.match(/[a-zA-Z0-9\u00C0-\u1EF9]+/g)
    );
    var text = children.join("-");
    var slug = text.toLowerCase();
    return createElement(props.node.tagName, { id: slug }, props.children);
  }
  return (
    <div className="flex-1 shrink-1 h-fit w-full overflow-auto box-border px-10 py-10 markdown-body">
      <Markdown
        remarkPlugins={[[remarkGfm, remarkSlug]]}
        components={{
          h1: HeadingRenderer,
          h2: HeadingRenderer,
          h3: HeadingRenderer,
        }}
        skipHtml={true}
      >
        {md}
      </Markdown>
    </div>
  );
}
