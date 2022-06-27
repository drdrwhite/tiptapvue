<template>
    <div>
        <h1>Tiptap Minimal Demo</h1>

        <editor-content :editor="editor" />
    </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import { HocuspocusProvider } from '@hocuspocus/provider'
import Placeholder from '@tiptap/extension-placeholder'

export default {
    components: {
        EditorContent,
    },

    data() {
        return {
            editor: null,
        }
    },

    mounted() {
        const provider = new HocuspocusProvider({
            url: 'ws://127.0.0.1:8080',
            name: 'tiptapdemo-example-doc',
            token: 'notreallyatoken'
        })
        this.editor = new Editor({
            extensions: [
                StarterKit.configure({
                    history: false  // collab ext will do history
                }),
                Collaboration.configure({
                    document: provider.document,
                }),
                Placeholder.configure({
                    placeholder: 'Write something …',
                }),
            ],
        })
    },

    beforeDestroy() {
        this.editor.destroy()
    },
}
</script>

<style>
.ProseMirror {
    border: solid black 2px;
    padding: 1rem;
}

.ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}
</style>
