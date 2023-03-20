<template>
  <n-upload ref="uploadRef" abstract list-type="image" :multiple="true" :max="9" :action="uploadGateway"
    @before-upload="beforeUploadHandler" @finish="finishUpload" @error="failUpload" @remove="removeUpload"
    @update:file-list="file.updateFileQueue">
    <ComposeUploadTrigger @update-uploda-type="updateHandler" />

    <div class="submit-wrap">
      <n-button :loading="submitting" @click="submitPost" type="primary" secondary round>
        发布
      </n-button>

      <n-tooltip trigger="hover" placement="bottom">
        <template #trigger>
          <n-progress class="text-statistic" type="circle" :show-indicator="false" status="success" :stroke-width="10"
            :percentage="(file.contents.length / 200) * 100" />
        </template>
        {{ file.contents.length }} / 200
      </n-tooltip>
    </div>

    <div class="attachment-list-wrap">
      <n-upload-file-list />
      <n-dynamic-input v-model:value="file.urls" placeholder="请输入" :max="6">
        <template #create-button-default>
          添加链接
        </template>
      </n-dynamic-input>
    </div>
  </n-upload>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui';
import { ref } from 'vue'
import useFile from '@/store/file';

const file = useFile();
const message = useMessage();

const submitting = ref(false);
const uploadType = ref("public/image")
const uploadGateway = "https://gin-oss.zeabur.app/upload"

const beforeUploadHandler = async (data: any) => {
  const { msg, ok } = beforeUpload(uploadType.value, data.file.file?.type, data.file.file?.size)
  if (!ok) {
    message.warning(msg)
    return false
  }
  return true
}
// 上传完成
const finishUpload = ({ file, event }: any): any => {
  try {
    let data = JSON.parse(event.target?.response);

    if (data.code === 0) {
      file.url = data.data.content
      return file
    }
  } catch (error) {
    message.error('上传失败');
  }
};

const updateHandler = (type: string) => {
  uploadType.value = type
}


const submitPost = () => {

}

</script>
<style lang="less" scoped>
.submit-wrap {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  .text-statistic {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    transform: rotate(180deg);
  }
}

.attachment-list-wrap {
  margin-top: 12px;
  margin-left: 42px;

  .n-upload-file-info__thumbnail {
    overflow: hidden;
  }
}
</style>
