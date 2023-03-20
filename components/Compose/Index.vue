<template>
  <div>
    <div class="compose-wrap" v-if="user.isLogin">
      <div class="compose-line">
        <div class="compose-user">
          <n-avatar round :size="30" :src="user.avatar" />
        </div>
        <n-mention type="textarea" size="large" autosize :bordered="false" :loading="loading" :value="file.contents"
          :prefix="['@', '#']" :options="optionsRef" @search="handleSearch" @update:value="file.updateContents"
          placeholder="说说您的新鲜事..." />
      </div>
      <ComposeUpload />
    </div>
    <div class="compose-wrap" v-else>
      <div class="login-wrap">
        <span class="login-banner"> 登录后，精彩更多</span>
      </div>
      <div class="login-wrap">
        <n-button strong secondary round type="primary" @click="user.triggerAuth('signin')">
          登录
        </n-button>
        <n-button strong secondary round type="info" @click="user.triggerAuth('signup')">
          注册
        </n-button>
      </div>
    </div>
  </div>
</template>
    
    
<script setup lang="ts">
import type { MentionOption } from 'naive-ui';
import useUser from '@/store/user';
import useFile from '@/store/file';
const user = useUser();
const file = useFile()




const loading = ref(false);
const optionsRef = ref<MentionOption[]>([]);
const handleSearch = () => {


}
</script>
    
<style lang="less" scoped>
.compose-wrap {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  .compose-line {
    display: flex;
    flex-direction: row;

    .compose-user {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
    }

    &.compose-options {
      margin-top: 6px;
      padding-left: 42px;
      display: flex;
      justify-content: space-between;

      .submit-wrap {
        display: flex;
        align-items: center;

        .text-statistic {
          margin-right: 8px;
          width: 20px;
          height: 20px;
          transform: rotate(180deg);
        }
      }
    }
  }

  .link-wrap {
    margin-left: 42px;
    margin-right: 42px;
  }

  .eye-wrap {
    margin-left: 64px;
  }

  .login-wrap {
    display: flex;
    justify-content: center;
    width: 100%;

    .login-banner {
      margin-bottom: 12px;
      opacity: 0.8;
    }

    button {
      margin: 0 4px;
    }
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