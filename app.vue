<template>
  <n-config-provider :theme="theme">
    <n-message-provider inline-theme-disabled>
      <NuxtLayout>
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
const config = useRuntimeConfig()

// console.log(config)
// console.log(import.meta.env)
const theme = computed(() => (main.theme === 'dark' ? darkTheme : null));
</script>