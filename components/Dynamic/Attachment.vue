<template>
  <div class="attachment-wrap">
    <div class="attach-item" v-for="attachment in props.attachments" :key="attachment.url">
      <n-button type="primary" size="tiny" dashed>
        <template #icon>
          <n-icon>
            <cloud-download-outline />
          </n-icon>
        </template>
        附件 {{ attachment.label }}
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CloudDownloadOutline } from '@vicons/ionicons5';

const props = withDefaults(
  defineProps<{
    attachments: Attachment.AttachmentInfo[];
  }>(),
  {
    attachments: () => [],
  }
);
</script>

<style lang="less" scoped>
.attach-item {
  margin: 10px 0;
}
</style>