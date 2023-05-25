<template>
  <div class="sidebar-wrap">
    <div class="logo-wrap">
      <n-image class="logo-img" width="36" :src="Logo" :preview-disabled="true" />
    </div>

    <Menu />
    <ClientOnly>
      <Account v-if="user.isLogin" />
      <AccountLogin v-else />
      <Auth />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/logo.svg";
import useUser from '@/store/user';

const user = useUser()
</script>

<style lang="less" scoped>
.sidebar-wrap {
  z-index: 99;
  width: 190px;
  height: 100vh;
  position: fixed;
  right: calc(50% + var(--content-main) / 2 + 10px);

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