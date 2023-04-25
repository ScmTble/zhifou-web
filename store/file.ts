import { defineStore } from 'pinia'

const useFile = defineStore('file', {
    state: () => {
        const attachments: Attachment.AttachmentInfo[] = []
        const contents: string = '';
        const tags: string[] = [];
        return {
            attachments,
            contents,
            tags
        }
    },
    actions: {
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
        },
        addAttachment(attachment: Attachment.AttachmentInfo) {
            this.attachments.push(attachment)
        },
        removeAttachment(attachment: Attachment.AttachmentInfo) {
            this.attachments = this.attachments.filter(item => item.url !== attachment.url)
        }
    },
})

export default useFile