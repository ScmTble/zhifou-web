<template>
  <div>
    <MainNav :title="title" />
    <n-list class="main-content-wrap" bordered>
      <n-list-item>
        <!-- 发布器 -->
        <Compose @post-success="onPostSuccess" />
      </n-list-item>

      <n-list-item class="dynamic-item" v-for="post in list" :key="post.id" @click="handleDynamicDetail(post.id)">
        <Dynamic :post="post" />
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { getRecommend } from '@/apis/post';
import useMain from '@/store/main';

const title = ref("广场")
const main = useMain()
const router = useRouter();

useHead({
  title: title.value
})

onMounted(() => {
  getRecommend().then((res: any) => {
    list.value = res.list ?? []
  })
})

const list = ref<Post.PostInfo[]>([]);
const onPostSuccess = (post: any) => {
  // list.value.push(post)
};

const handleDynamicDetail = (id: string) => {
  router.push(`/post/${id}`)
}

const state = computed(() => {
  if (main.theme === 'dark') {
    return {
      color: '#18181c'
    }
  }
  return {
    color: '#f7f9f9'
  }
})

</script>


<style lang="less" scoped>
.dynamic-item {
  :hover {
    background: v-bind('state.color');
    cursor: pointer;
  }
}
</style>