<template>
  <div class="file-preview">
    <n-thing class="list-item">
      <n-image-group>
        <n-space>
          <n-popconfirm v-for="img in attachments.imgs" :key="img.url" positive-text="确认" negative-text="取消"
            @positive-click="handlePositiveClick(img)" @negative-click="handleNegativeClick">
            <template #trigger>
              <n-image preview-disabled width="100" :src="img.url" />
            </template>
            确认删除?
          </n-popconfirm>
        </n-space>
      </n-image-group>
    </n-thing>
  </div>
</template>

<script setup lang="ts">
import useFile from '@/store/file';

const file = useFile();
const attachments = computed(() => {
  let imgs: Attachment.AttachmentInfo[] = []
  let links: Attachment.AttachmentInfo[] = []
  let videos: Attachment.AttachmentInfo[] = []
  let attachments: Attachment.AttachmentInfo[] = []

  file.attachments.forEach((attachment) => {
    switch (attachment.type) {
      case 'img':
        imgs.push(attachment)
        break
      case 'link':
        links.push(attachment)
        break
      case 'video':
        videos.push(attachment)
        break
      case 'attachment':
        attachments.push(attachment)
        break
    }
  });

  return {
    imgs,
    links,
    videos,
    attachments
  }

});

const handlePositiveClick = (img: Attachment.AttachmentInfo) => {
  file.removeAttachment(img)
}

const handleNegativeClick = () => {
}

</script>


<style lang="less" scoop>
.file-preview {
  margin-left: 25px;
  margin-top: 20px;

  .list-item {
    margin: 10px;
  }
}
</style>