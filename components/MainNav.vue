<template>
  <n-card size="medium">
    <div class="nav-main">
      <div class="nav-left">
        <n-button class="back-btn" v-if="back" @click="goBack" quaternary circle size="small">
          <template #icon>
            <n-icon><chevron-left-round /></n-icon>
          </template>
        </n-button>
        <span>{{ props.title }}</span>
      </div>
      <n-switch :value="switchVal" @update:value="switchTheme" size="small" class="theme-switch-wrap">
        <template #checked-icon>
          <n-icon :component="LightModeOutlined" />
        </template>
        <template #unchecked-icon>
          <n-icon :component="DarkModeOutlined" />
        </template>
      </n-switch>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import useMain from '@/store/main';
import { LightModeOutlined, DarkModeOutlined, ChevronLeftRound } from '@vicons/material';

const main = useMain();
const router = useRouter();

const switchVal = computed(() => {
  if (main.theme == 'dark') {
    return true
  }
  return false
});

const props = withDefaults(
  defineProps<{
    title: string;
    back?: boolean;
  }>(),
  {
    title: '',
    back: false,
  }
);
const switchTheme = (theme: boolean) => {
  main.updateTheme(theme)
};
const goBack = () => {
  if (window.history.length <= 1) {
    router.push({
      path: '/',
    });
  } else {
    router.go(-1);
  }
};
</script>

<style lang="less" scoped>
.nav-main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .nav-left {
    display: flex;
    align-items: center;
    font-size: medium;
    font-weight: bolder;
  }
}
</style>