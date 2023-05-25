<template>
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
    <n-list-item v-for="post in dynamics" :key="post.id">
      <Dynamic :post="post" :action="false" />
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
import useCache from '~/store/cache';
const title = ref("广场")
useHead({
  title: title.value
})
const cache = useCache();
const message = useMessage();
let last_id = "9223372036854775807"

const { data: dynamics, pending } = await useFetch<Post.PostInfo[]>('/api/post/recommend',
  {
    query: { last_id: last_id },
    transform: (input) => {
      if (input) {
        if (input.length === 0) {
          return input
        }
        last_id = input[input.length - 1].id
      }
      return input
    }
  }
)

const refresh = async () => {
  pending.value = true;
  await useFetch('/api/post/recommend',
    {
      query: { last_id: last_id },
      transform: (input) => {
        if (input) {
          if (input.length === 0) {
            message.warning("已经到底了")
            return input
          }
          last_id = input[input.length - 1].id
          dynamics.value?.push(...input)
        } else {
          message.warning("已经到底了")
        }
        return input
      }
    }
  )
  pending.value = false;
}
</script>


<style lang="less" scoped>
.bottom {
  text-align: center;
}

.dynamic-list {
  margin-bottom: 30px;
}
</style>
