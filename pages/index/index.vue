<template>
  <div>
    <MainNav :title="title" />
    <n-list bordered>
      <n-list-item>
        <!-- 发布器 -->
        <Compose @post-success="onPostSuccess" />
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
import { getRecommend } from '@/apis/post';
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
  getRecommend().then((res: any) => {
    loading.value = false
    list.value = res.list ?? []
  }).catch(() => {
    loading.value = false
  })
})

const onPostSuccess = (post: any) => {
  // list.value.push(post)
};

</script>


<style lang="less" scoped></style>