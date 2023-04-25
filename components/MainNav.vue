<template>
  <n-card size="medium" class="nav-title-card">
    <div class="nav-main">
      <div class="nav-left">
        <n-button class="back-btn" v-if="back" @click="goBack" quaternary circle size="small">
          <template #icon>
            <n-icon>
              <ChevronLeftRound />
            </n-icon>
          </template>
        </n-button>
        <span>{{ props.title }}</span>
      </div>
      <n-switch :value="switchVal" @update:value="switchTheme" size="small" class="theme-switch-wrap">
        <template #checked-icon>
          <n-icon>
            <LightModeOutlined />
          </n-icon>
        </template>
        <template #unchecked-icon>
          <n-icon>
            <DarkModeOutlined />
          </n-icon>
        </template>
      </n-switch>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { LightModeOutlined, DarkModeOutlined, ChevronLeftRound } from '@vicons/material';
import useMain from '@/store/main';

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
.nav-title-card {
  z-index: 99;
  width: 100%;
  top: 0;
  position: sticky;

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
}
</style>