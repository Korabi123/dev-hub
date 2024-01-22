import ReactMarkdown from "react-markdown";
import { Separator } from "./ui/separator";

interface Props {
  content?: string;
  children?: React.ReactNode;
}

export const MarkdownRenderer = ({ content, children }: Props) => {
  return (
      <ReactMarkdown
      components={{
        pre: ({ node, ...props }) => (
          <div>
            <pre {...props} />
          </div>
        ),
        code: ({ node, ...props }) => (
          <code className="bg-black/10 rounded-lg p-1" {...props} />
        ),
        h1: ({ node, ...props }) => (
          <>
            <h1 className="text-2xl font-bold" {...props} />
            <Separator className="mb-4" />
          </>
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-xl font-semibold mb-4" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-lg font-semibold mb-4" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="text-base font-semibold mb-4" {...props} />
        ),
        h5: ({ node, ...props }) => (
          <h5 className="text-sm font-semibold mb-4" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="pl-4" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="text-blue-500 hover:underline" {...props} />
        ),
        ul: ({ node, ...props }) => <ul className="list-disc pl-4" {...props} />,
        li: ({ node, ...props }) => <li className="mb-2" {...props} />,
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-4" {...props} />
        ),
        br: () => (
          <br />
        )
      }}
      className="text-sm overflow-hidden leading-7"
    >
      {content}
    </ReactMarkdown>
  )
};
