<template>
  <div class="user-wrap">
    <div class="login-wrap">
      <n-button strong secondary round type="primary" @click="user.triggerAuth('signin')">
        登录
      </n-button>
      <n-button strong secondary round type="info" @click="user.triggerAuth('signup')">
        注册
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUser from '@/store/user';
const user = useUser()
</script>

<style scoped lang="less">
.user-wrap {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;

  .login-wrap {
    display: flex;
    justify-content: center;
    width: 100%;

    button {
      margin: 0 4px;
    }
  }
}
</style>