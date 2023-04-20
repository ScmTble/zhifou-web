<template>
  <div class="compose-wrap" v-if="user.isLogin">
    <ComposeContent />
    <!-- 上传图标组件 -->
    <ComposeUpload />

    <FilePreview :attachments="file.attachments" />

  </div>
  <div class="compose-wrap" v-else>
    <LoginWrap />
  </div>
</template>
    
<script setup lang="ts">
import useUser from '@/store/user';
import useFile from '@/store/file';
const user = useUser();
const file = useFile();
</script>
    
<style lang="less" scoped>
.compose-wrap {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
</style>