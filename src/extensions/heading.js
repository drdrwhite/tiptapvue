import {Heading as TiptapHeading} from '@tiptap/extension-heading'
import {VueNodeViewRenderer} from "@tiptap/vue-2";
import HeadingBlock from "@/components/HeadingBlock"

export const Heading = TiptapHeading.extend({
    addNodeView() {
        return VueNodeViewRenderer(HeadingBlock)
    }
});
