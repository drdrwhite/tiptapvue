<template>
    <node-view-wrapper class="heading-block" >
        <div contenteditable="false">{{`h${this.node.attrs.level}:`}}</div>
        <component :is="`h${this.node.attrs.level}`">
            <node-view-content as="span"/>
        </component>
    </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, NodeViewContent } from '@tiptap/vue-2'
export default {
    name: "HeadingBlock",
    props: {
        node: {
            type: Object,
            required: true,
        },
    },
    components: {
        NodeViewContent,
        NodeViewWrapper
    }
}
</script>


