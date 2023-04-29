<template>
  <div>
    <MainNav :title="title" />
    <n-list bordered>
      <n-list-item>
        <!-- 发布器 -->
        <Compose />
      </n-list-item>
    </n-list>
    <n-list hoverable clickable bordered>
      <n-list-item v-for="post in cache.tmpDynamicList" :key="post.id">
        <Dynamic :post="post" :action="false" />
      </n-list-item>
      <n-list-item v-for="post in list" :key="post.id">
        <Dynamic :post="post" :action="false" />
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import useCache from '~/store/cache';
const title = ref("广场")
useHead({
  title: title.value
})
const cache = useCache();
const list = ref<Post.PostInfo[]>([]);

const loading = ref(false);

onMounted(() => {
  loading.value = true
  $fetch('/api/post/recommend').then(res => {
    list.value = res
  }).catch(() => {
    loading.value = false
  })
})


</script>


<style lang="less" scoped></style>