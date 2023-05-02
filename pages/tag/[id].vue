<template>
  <div>
    <MainNav :title="title" :back="true" />

    <n-list hoverable clickable bordered class="dynamic-list">
      <n-list-item v-if="dynamics" v-for="post in dynamics" :key="post.id">
        <Dynamic :post="post" :action="false" />
      </n-list-item>
      <n-list-item v-else>
        <n-empty description="暂无数据">
        </n-empty>
      </n-list-item>
      <n-spin :show="loading">
        <n-list-item class="bottom" @click="refresh">
          <n-button text type="success">加载动态</n-button>
        </n-list-item>
      </n-spin>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui';
const route = useRoute();
const message = useMessage();

const tag_id = Number(route.params.id)
const { data: tag } = await useFetch<any>(`/api/tag/${tag_id}`)

const { dynamics, refresh, loading } = useDynamicsPageNum(tag_id, message)

const title = "#" + tag.value.tag
useHead({
  title: title
})

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