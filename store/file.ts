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
        return {
            queue,
            imgs,
            videos,
            urls,
            attachments,
            contents
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
        addUrl(u: string) {
            this.urls.push(u)
        },
        addAttachment(u: string) {
            this.attachments.push(u)
        },
        updateContents(contents: string) {
            if (contents.length > 200) {
                return;
            }
            this.contents = contents
        }
    },
})

export default useFile