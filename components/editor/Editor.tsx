"use client";

import {
  BoldItalicUnderlineToggles,
  codeBlockPlugin,
  CreateLink,
  headingsPlugin,
  InsertTable,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  MDXEditorMethods,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { FC } from "react";

interface EditorProps {
  markdown: string;
  placeholder?: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
  onChange?: (markdown: string) => void;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({
  markdown,
  editorRef,
  placeholder,
  onChange,
}) => {
  return (
    <MDXEditor
      className="border rounded-md"
      ref={editorRef}
      onChange={onChange}
      markdown={markdown}
      placeholder={placeholder}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              {" "}
              <BoldItalicUnderlineToggles />
              <ListsToggle />
              <CreateLink />
              <InsertTable />
              <UndoRedo />
            </>
          ),
        }),
        codeBlockPlugin(),
        linkPlugin(),
        tablePlugin(),
        linkDialogPlugin(),
        {
          /* put every plugin above this */
        },
        markdownShortcutPlugin(),
      ]}
    />
  );
};

export default Editor;
