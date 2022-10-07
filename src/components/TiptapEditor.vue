<template>
    <div>
        <h1>Tiptap Heading with Dynamic Tag Minimal Demo</h1>
        <p>Use Alt-Command-1/2/3 to cycle through headings and watch the text disappear</p>
        <editor-content :editor="editor" />
    </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import {Heading} from '@/extensions/heading.js'
import {Document} from '@tiptap/extension-document'
import {Paragraph} from '@tiptap/extension-paragraph'
import {Text} from '@tiptap/extension-text'
export default {
    components: {
        EditorContent,
    },
    data() {
        return {
            editor: null,
            provider: null
        }
    },
    mounted() {
        this.editor = new Editor({
            extensions: [
                Document,
                Heading,
                Paragraph,
                Text
            ],
        })
    },
}
</script>

<style>
.ProseMirror {
    border: solid black 2px;
    padding: 1rem;
}
</style>
