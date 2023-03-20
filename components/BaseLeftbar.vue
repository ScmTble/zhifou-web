<template>
  <div class="sidebar-wrap">
    <div class="logo-wrap">
      <n-image class="logo-img" width="36" src="https://www.paopao.info/assets/logo.52afee68.png"
        :preview-disabled="true" />
    </div>

    <Menu />

    <Account v-if="user.isLogin" />

    <AccountLogin v-else />
  </div>
</template>

<script setup lang="ts">
import useUser from '@/store/user';

const user = useUser()
</script>

<style lang="less" scoped>
.sidebar-wrap {
  z-index: 99;
  width: 200px;
  height: 100vh;
  position: fixed;
  right: calc(50% + var(--content-main) / 2 + 10px);
  padding: 12px 0;
  box-sizing: border-box;

  .logo-wrap {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 12px;

    .logo-img {
      margin-left: 24px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>