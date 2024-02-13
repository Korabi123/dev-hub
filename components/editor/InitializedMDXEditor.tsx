'use client'
// InitializedMDXEditor.tsx
import type {ForwardedRef} from 'react'
import {
    headingsPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    MDXEditor,
    type MDXEditorMethods,
    type MDXEditorProps,
    quotePlugin,
    thematicBreakPlugin
} from '@mdxeditor/editor'

// Only import this to the next file
export default function InitializedMDXEditor({
                                                 editorRef, ...props
                                             }: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
    return (<MDXEditor
            plugins={[// Example Plugin Usage
                headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(), markdownShortcutPlugin()]}
            {...props}
            ref={editorRef}
        />)
}