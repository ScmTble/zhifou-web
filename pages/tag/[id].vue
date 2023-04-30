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
        <n-list-item class="bottom" @click="handleRefresh">
          <n-button text type="success">加载动态</n-button>
        </n-list-item>
      </n-spin>
    </n-list>
  </div>
</template>

<script setup lang="ts">

const route = useRoute();
const tag_id = Number(route.params.id)
const last_id = ref<string>("9223372036854775807")
const page_num = 2
const dynamics = ref<Post.PostInfo[]>([])
const loading = ref<boolean>(false);
const { data: tag } = await useFetch<any>(`/api/tag/${tag_id}`)

const handleRefresh = () => {
  if (loading.value) {
    return
  }
  loading.value = true;
  $fetch('/api/post/query_tag', {
    query: {
      tag_id: tag_id,
      last_id: last_id.value,
      page_num: page_num
    }
  }).then((res: any) => {
    last_id.value = res[res.length - 1].id
    dynamics.value.push(...res)
    loading.value = false;
  }).catch(() => {
    loading.value = false;
  })
}

const title = "#" + tag.value.tag

useHead({
  title: title
})

onMounted(() => {
  loading.value = true;
  $fetch('/api/post/query_tag', {
    query: {
      tag_id: tag_id,
      last_id: last_id.value,
      page_num: page_num
    }
  }).then((res: any) => {
    last_id.value = res[res.length - 1].id
    dynamics.value.push(...res)
    loading.value = false;
  }).catch(() => {
    loading.value = false;
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