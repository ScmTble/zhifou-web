<template>
  <n-upload ref="uploadRef" abstract list-type="image" :multiple="true" :max="9" :action="uploadGateway"
    @before-upload="beforeUploadHandler" @finish="finishUpload" @error="failUpload" @remove="removeUpload"
    @update:file-list="file.updateFileQueue">
    <div class="submit-wrap">
      <div class="wrap-left">
        <ComposeUploadTrigger @update-uploda-type="updateHandler" @link-click="linksAddShow = !linksAddShow" />
      </div>

      <div class="wrap-right">
        <n-tooltip trigger="hover" placement="bottom">
          <template #trigger>
            <n-progress class="text-statistic" type="circle" :show-indicator="false" status="success" :stroke-width="10"
              :percentage="(file.contents.length / 200) * 100" />
          </template>
          {{ file.contents.length }} / 200
        </n-tooltip>

        <n-button :loading="submitting" @click="submitPost" type="primary" secondary round>
          发布
        </n-button>
      </div>
    </div>
    <!-- 添加link -->
    <div class="link-wrap" v-if="linksAddShow">
      <n-dynamic-input v-model:value="file.urls" placeholder="请输入以http(s)://开头的链接" :min="0" :max="3">
        <template #create-button-default> 创建链接 </template>
      </n-dynamic-input>
    </div>
    <div class="attachment-list-wrap">
      <n-upload-file-list />
    </div>
  </n-upload>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui';
import { ref } from 'vue'
import useFile from '@/store/file';
import { createPost } from '@/apis/post';

const file = useFile();
const message = useMessage();
const config = useRuntimeConfig();

const submitting = ref(false);
const uploadType = ref("public/image")
const uploadGateway = config.public.uploadGateway
const linksAddShow = ref<boolean>(false);

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
  if (file.contents.length === 0) {
    message.warning('输入内容')
    return
  }
  let { imgs, attachments, videos } = parseFileQueue(file.queue)
  createPost({
    imgs,
    urls: file.urls,
    videos,
    tags: file.tags,
    contents: file.contents,
    attachments,
    users: []
  }).then(res => {
    message.success('发布成功')
  }).catch(err => {
    message.error('发布失败')
  })
}

</script>
<style lang="less" scoped>
.submit-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .text-statistic {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    transform: rotate(180deg);
  }

  .wrap-right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

.link-wrap {
  margin-left: 40px;
  margin-top: 20px;
  margin-right: 20px;
}

.attachment-list-wrap {
  margin-top: 12px;
  margin-left: 42px;

  .n-upload-file-info__thumbnail {
    overflow: hidden;
  }
}
</style>
