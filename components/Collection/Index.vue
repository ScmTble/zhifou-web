<template>
  <n-list hoverable clickable bordered class="dynamic-list">
    <n-list-item v-if="dynamics" v-for="post in dynamics" :key="post.id">
      <Dynamic :post="post" :action="false" />
    </n-list-item>
    <n-list-item v-else>
      <n-empty description="暂无数据">
      </n-empty>
    </n-list-item>
    <n-spin :show="pending">
      <n-list-item class="bottom" @click="refresh">
        <n-button text type="success">加载动态</n-button>
      </n-list-item>
    </n-spin>
  </n-list>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui';
const message = useMessage()

// 偏移量
let offset = 0;

const { data: dynamics, pending } = await useFetch<Post.PostInfo[]>('/api/collect/query', {
  query: {
    offset: offset,
    num: 4,
  },
  transform: (input) => {
    if (input) {
      if (input.length === 0) {
        return input
      }
      offset = offset + input.length;
    }
    return input
  }
})

const refresh = async () => {
  pending.value = true
  await useFetch<Post.PostInfo[]>('/api/collect/query', {
    query: {
      offset: offset,
      num: 4,
    },
    transform: (input) => {
      if (input) {
        if (input.length === 0) {
          message.warning("已经到底了")
          return input
        }
        offset = offset + input.length;
        dynamics.value?.push(...input);
      } else {
        message.warning("已经到底了")
      }
      return input
    }
  })
  pending.value = false
}

</script>

<style lang="less" scoped>
.bottom {
  text-align: center;
}
</style>