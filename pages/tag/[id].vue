<template>
  <div>
    <MainNav :title="title" :back="true" />
    <n-list hoverable clickable bordered>
      <n-list-item v-if="list.length > 0" v-for="post in list" :key="post.id">
        <Dynamic :post="post" :action="false" />
      </n-list-item>
      <n-list-item v-else>
        <n-empty description="暂无数据">
        </n-empty>
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup lang="ts">

const route = useRoute();
const tag_id = Number(route.params.id)
const list = ref<Post.PostInfo[]>([]);

const { data } = await useFetch<any>(`/api/tag/${tag_id}`)

const title = "#" + data.value.tag

useHead({
  title: title
})

onMounted(() => {
  $fetch('/api/post/query_tag', {
    query: {
      tag_id: tag_id
    }
  }).then((res: any) => {
    list.value = res
  })
})

</script>
