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
import StarterKit from '@tiptap/starter-kit'

export default {
    components: {
        EditorContent,
    },
    data() {
        return {
            editor: null
        }
    },
    mounted() {
        this.editor = new Editor({
            extensions: [
                Heading,
                StarterKit.configure({
                    heading: false
                })
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
