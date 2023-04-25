<template>
  <div class="setting-avatar">
    <n-avatar class="avatar-img" :size="80" :src="user.avatar" @click="handleAvatar" />
    <n-modal v-model:show="showChangeAvatar" :mask-closable="false" preset="dialog" title="更换头像" positive-text="确认"
      @positive-click="onPositiveClick">
      <div class="modal-update">
        <n-avatar class="avatar-img" :size="200" :src="previewImgUrl" @click="handleAvatar" />
        <n-upload class="modal-update modal-upload" :action="uploadGateway" @finish="finishUpload" @error="handleError"
          :show-file-list="false"><n-button>上传文件</n-button>
        </n-upload>
      </div>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui';
import useUser from '@/store/user';

const user = useUser();
const message = useMessage();
const config = useRuntimeConfig()


const uploadGateway = config.public.uploadGateway
const showChangeAvatar = ref(false);
const previewImgUrl = ref('')

const handleAvatar = () => {
  showChangeAvatar.value = true;
}


// 上传完成
const finishUpload = ({ file, event }: any): any => {
  try {
    let data = JSON.parse(event.target?.response);

    if (data.code === 0) {
      let url = data.data.content
      previewImgUrl.value = url
    }
  } catch (error) {
    message.error('上传失败');
  }
};

const onPositiveClick = () => {
  // 更新照片
}

const handleError = () => {
  message.error('上传失败')
}
</script>

<style lang="less" scoop>
.setting-avatar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  .avatar-img {
    margin-bottom: 10px;
  }

  .avatar-img:hover {
    margin-bottom: 10px;
    cursor: pointer;
  }
}

.modal-update {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .modal-upload {
    margin-top: 10px;
  }
}
</style>