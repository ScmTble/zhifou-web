<template>
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
</template>

<script setup lang="ts">
import useUser from '@/store/user';
const user = useUser();
</script>

<style lang="less" scoped>
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
</style>