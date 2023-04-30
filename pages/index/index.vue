<template>
  <div>
    <MainNav :title="title" />
    <n-list bordered>
      <n-list-item>
        <!-- 发布器 -->
        <Compose />
      </n-list-item>
    </n-list>

    <n-list hoverable clickable bordered class="dynamic-list">
      <n-list-item v-for="post in cache.tmpDynamicList" :key="post.id">
        <Dynamic :post="post" :action="false" />
      </n-list-item>
      <n-list-item v-for="post in list" :key="post.id">
        <Dynamic :post="post" :action="false" />
      </n-list-item>
      <n-spin :show="loading">
        <n-list-item class="bottom" @click="handleRefresh">
          <n-button text type="success">加载动态</n-button>
        </n-list-item>
      </n-spin>
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
let offset = ref(0);

const handleRefresh = () => {
  if (loading.value) {
    return
  }
  loading.value = true
  $fetch('/api/post/recommend', { query: { offset: offset.value } }).then(res => {
    offset.value = offset.value + 5;
    list.value.push(...res)
    loading.value = false
  }).catch(() => {
    loading.value = false
  })
}

onMounted(() => {
  loading.value = true
  $fetch('/api/post/recommend', { query: { offset: offset.value } }).then(res => {
    offset.value = offset.value + 5;
    list.value.push(...res)
    loading.value = false
  }).catch(() => {
    loading.value = false
  })
})
</script>


<style lang="less" scoped>
.bottom {
  text-align: center;
}

.dynamic-list {
  margin-bottom: 30px;
}
</style>
