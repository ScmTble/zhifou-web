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
      <n-spin :show="pending">
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

const tag_id = String(route.params.id)
const { data: tag } = await useFetch<any>(`/api/tag/${tag_id}`)

let last_id = "9223372036854775807"

const { data: dynamics, pending } = await useFetch<Post.PostInfo[]>('/api/post/query_tag', {
  query: {
    tag_id: tag_id,
    last_id: last_id,
  }
})

onMounted(() => {
  let [lastPost] = dynamics.value?.slice(-1) ?? [{
    id: "9223372036854775807"
  }]
  last_id = lastPost.id
})

const title = "#" + tag.value.tag
useHead({
  title: title
})

const refresh = async () => {
  pending.value = true
  await useFetch('/api/post/query_tag', {
    query: {
      tag_id: tag_id,
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

.dynamic-list {
  margin-bottom: 30px;
}
</style>