import { defineStore } from 'pinia'
import type { UploadFileInfo } from 'naive-ui';

const useFile = defineStore('file', {
    state: () => {
        const queue = ref<UploadFileInfo[]>([]);
        const imgs = ref<string[]>([]);
        const videos = ref<string[]>([]);
        const attachments = ref<string[]>([]);
        const urls = ref<string[]>([]);
        const contents = ref<string>('');
        const tags = ref<string[]>([]);
        return {
            queue,
            imgs,
            videos,
            urls,
            attachments,
            contents,
            tags
        }
    },
    actions: {
        updateFileQueue(list: UploadFileInfo[]) {
            this.queue = list
        },
        addImg(u: string) {
            this.imgs.push(u)
        },
        addVideo(u: string) {
            this.videos.push(u)
        },
        updateUrsl(value: string[]) {
            // this.urls = value
        },
        addAttachment(u: string) {
            this.attachments.push(u)
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