<template>
  <n-config-provider :theme="theme" inline-theme-disabled>
    <n-message-provider>
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage></NuxtPage>
      </NuxtLayout>
      <n-global-style />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import useMain from '@/store/main';

const main = useMain();
// console.log(config)
// console.log(import.meta.env)
const theme = computed(() => (main.theme === 'dark' ? darkTheme : null));
</script>