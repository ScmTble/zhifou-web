<template>
  <div>
    <MainNav :title="title" :back="true" />
    <n-list class="main-content-wrap" bordered>
      <n-list-item>
        <Dynamic v-if="dynamic" :post="dynamic" :action="true" />
        <n-empty v-else description="没有数据" />
      </n-list-item>
      <n-list-item>
        <Comment :post_id="postId" />
      </n-list-item>
      <n-list-item v-for="comment in cache.tmpCommentList">
        <CommentItem :comment="comment" />
      </n-list-item>
      <n-list-item v-if="comments" v-for="comment in comments">
        <CommentItem :comment="comment" />
      </n-list-item>
      <n-list-item v-if="showEmpty">
        <n-empty description="没有评论">
        </n-empty>
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import useCache from '@/store/cache';
const route = useRoute()
const title = ref("动态详情")

useHead({
  title: title.value
})

const cache = useCache();
const postId = Number(route.params.id)
const showEmpty = computed(() => {
  if (comments.value.length == 0 && cache.tmpCommentList.length == 0) {
    return true
  }
  return false
})


const headers = useRequestHeaders(['cookie'])
const { data: dynamic } = await useFetch<any>(`/api/post/${postId}`, { headers })


const { data: comments } = await useFetch<any>(`/api/comment/${postId}`, { headers })

</script>


<style lang="less" scoop>
.main-content-wrap {
  .n-list-item {
    padding: 0;
  }
}
</style>