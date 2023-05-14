<template>
  <n-menu :icon-size="24" :options="pathOptions" :value="main.currentPath" @update:value="goRouter" />
</template>


<script setup lang="ts">
import {
  HomeOutline,
  BookmarkOutline,
  NotificationsOutline,
  HeartOutline,
  LeafOutline,
  SettingsOutline,
  InfiniteSharp,
} from '@vicons/ionicons5';
import useMain from '@/store/main';
import useUser from '@/store/user';
const route = useRoute();
const router = useRouter();
const main = useMain()
const user = useUser();

const goRouter = (path: string, item: any = {}) => {
  router.push(path);
};

watch(route, () => {
  main.updatePath(route.path)
})

const pathOptions = computed(() => {
  let menuList = [
    {
      label: '广场',
      key: '/',
      icon: () => h(HomeOutline),
      href: '/',
    },
    {
      label: '话题',
      key: '/topic',
      icon: () => h(InfiniteSharp),
      href: '/topic',
    }]
  if (user.isLogin) {
    menuList.push({
      label: '主页',
      key: '/profile',
      icon: () => h(LeafOutline),
      href: '/profile',
    },
      {
        label: '消息',
        key: '/notification',
        icon: () => h(NotificationsOutline),
        href: '/notification',
      },
      {
        label: '收藏',
        key: '/collection',
        icon: () => h(BookmarkOutline),
        href: '/collection',
      },
      // {
      //   label: '点赞',
      //   key: '/star',
      //   icon: () => h(HeartOutline),
      //   href: '/star',
      // },
      {
        label: '设置',
        key: '/setting',
        icon: () => h(SettingsOutline),
        href: '/setting',
      })
    return menuList
  }
  return menuList
})
</script>

<!-- <style lang="less"> // 解决圆角问题
 .n-menu .n-menu-item-content::before {
   border-radius: 21px;
 }
</style> -->