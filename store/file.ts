import { defineStore } from 'pinia'
import type { UploadFileInfo } from 'naive-ui';

const useFile = defineStore('file', {
    state: () => {
        const queue = reactive<UploadFileInfo[]>([]);
        // const imgs = ref<string[]>([]);
        // const videos = ref<string[]>([]);
        // const attachments = ref<string[]>([]);
        const urls = ref<string[]>([]);
        const contents = ref<string>('');
        const tags = ref<string[]>([]);
        return {
            queue,
            urls,
            contents,
            tags
        }
    },
    actions: {
        updateFileQueue(list: UploadFileInfo[]) {
            this.queue = list
        },
        updateContents(contents: string) {
            if (contents.length > 200) {
                return;
            }
            this.contents = contents
        },
        updateTags(tags: any[]) {
            if (tags.length >= 3) {
                // 最多只能选择2个标签
                return
            }
            this.tags = tags
        }
    },
})

export default useFile