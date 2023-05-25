<template>
  <slot v-if="userStore.isLogin" />
  <div v-else>
    <n-list hoverable clickable bordered>
      <n-list-item>
        <n-empty description="立刻登录，围观精彩内容吧">
          <template #extra>
            <LoginWrap />
          </template>
        </n-empty>
      </n-list-item>
    </n-list>
  </div>
</template>


<script setup lang="ts">
import useUser from '@/store/user';
const userStore = useUser();
</script>