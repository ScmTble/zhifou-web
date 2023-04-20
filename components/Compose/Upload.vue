<template>
  <div class="upload-main">
    <div class="compose-line compose-options">
      <ComposeIcon />
    </div>
    <div class="post-btn">
      <n-tooltip trigger="hover" placement="bottom">
        <template #trigger>
          <n-progress class="text-statistic" type="circle" :show-indicator="false" status="success" :stroke-width="10"
            :percentage="(file.contents.length / 200) * 100" />
        </template>
        {{ file.contents.length }} / 100
      </n-tooltip>
      <n-button :loading="submitting" @click="handlePost" type="primary" secondary round>
        发布
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useFile from '@/store/file';
import { useMessage } from 'naive-ui';
import { createPost } from '@/apis/post';
const file = useFile();
const submitting = ref(false);
const message = useMessage();
// 发布动态
const handlePost = () => {
  if (file.contents.length === 0) {
    message.warning('输入内容')
  }
  submitting.value = true;
  createPost(file).then(() => {
    message.success('发布成功')
    submitting.value = false;
  }).catch(() => {
    message.error('发布失败');
    submitting.value = false;
  })
}

</script>

<style lang="less" scoped>
.upload-main {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .compose-line {
    display: flex;
    flex-direction: row;

    &.compose-options {
      margin-top: 6px;
      margin-left: 42px;
      display: flex;
    }
  }

  .post-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    .text-statistic {
      margin-right: 8px;
      width: 20px;
      height: 20px;
      transform: rotate(180deg);
    }
  }
}
</style>
