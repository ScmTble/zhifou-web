<template>
  <div class="profile-dynamic-list">
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
  </div>
</template>


<script setup lang="ts">
import { useMessage } from 'naive-ui';

const props = defineProps<{
  id: string
}>();

const message = useMessage();

let last_id = "9223372036854775807"

const { data: dynamics, pending } = await useFetch<Post.PostInfo[]>('/api/post/query_user', {
  query: {
    user_id: props.id,
    last_id: last_id,
  },
  transform: (input) => {
    if (input) {
      if (input.length === 0) {
        return input
      }
      // 更新last_id
      last_id = input[input.length - 1].id
    }
    return input
  }
})

const refresh = async () => {
  pending.value = true
  await useFetch<Post.PostInfo[]>('/api/post/query_user', {
    query: {
      user_id: props.id,
      last_id: last_id,
    },
    transform: (input) => {
      if (input) {
        if (input.length === 0) {
          message.warning("已经到底了")
          return input
        }
        // 更新last_id
        last_id = input[input.length - 1].id
        dynamics.value?.push(...input)
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