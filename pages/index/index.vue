<template>
  <ClientOnly>
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
        <n-list-item class="bottom" @click="refresh">
          <n-button text type="success">加载动态</n-button>
        </n-list-item>
      </n-spin>
    </n-list>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui';
import useCache from '~/store/cache';
const title = ref("广场")
useHead({
  title: title.value
})
const cache = useCache();
const message = useMessage();

const { list, refresh, loading } = useDynamicsOffset(message)

onMounted(() => {
  refresh()
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
