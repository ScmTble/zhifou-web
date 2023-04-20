<template>
  <div>
    <MainNav :title="title" />
    <n-list class="main-content-wrap" bordered>
      <n-list-item>
        <!-- 发布器 -->
        <Compose @post-success="onPostSuccess" />
      </n-list-item>

      <n-list-item class="dynamic-item" v-for="post in list" :key="post.id">
        <Dynamic :post="post" :action="false" />
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { getRecommend } from '@/apis/post';
import useMain from '@/store/main';

const title = ref("广场")
useHead({
  title: title.value
})
const main = useMain()
const list = ref<Post.PostInfo[]>([]);


onMounted(() => {
  getRecommend().then((res: any) => {
    list.value = res.list ?? []
  })
})

const onPostSuccess = (post: any) => {
  // list.value.push(post)
};

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