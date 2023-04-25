<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme" inline-theme-disabled>
    <n-message-provider>
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
      <n-global-style />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN } from 'naive-ui';
import useMain from '@/store/main';

const main = useMain();
const theme = computed(() => (main.theme === 'dark' ? darkTheme : null));
</script>