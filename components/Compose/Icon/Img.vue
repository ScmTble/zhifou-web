<template>
  <n-upload accept=".png,.jpg,.jpeg" :action="config.public.uploadGateway" :show-file-list="false" @finish="handleFinish"
    @error="handleError">
    <n-button quaternary circle type="primary">
      <n-icon size="20">
        <image-outline />
      </n-icon>
    </n-button>
  </n-upload>
</template>

<script setup lang="ts">
import {
  ImageOutline,
} from '@vicons/ionicons5';
import { useMessage } from 'naive-ui'
import type { UploadFileInfo } from 'naive-ui'
import useFile from '@/store/file';

const config = useRuntimeConfig()
const f = useFile();
const message = useMessage();

const handleFinish = ({
  file,
  event
}: {
  file: UploadFileInfo
  event?: ProgressEvent
}) => {
  try {
    let resp = JSON.parse((event?.target as XMLHttpRequest).response)
    message.success('上传成功')
    f.addAttachment({
      type: 'img',
      label: '',
      url: resp.data.content
    })
  } catch (e) {
    message.success('上传失败')
  }
  return file
}

const handleError = () => {
  message.error('上传失败')
}
</script>