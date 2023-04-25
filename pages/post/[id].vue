<template>
  <div>
    <MainNav :title="title" :back="true" />
    <n-list class="main-content-wrap" bordered>
      <n-list-item>
        <Dynamic :post="dynamic" :action="true" />
      </n-list-item>
      <n-list-item>
        <Comment :post_id="postId" />
      </n-list-item>
      <n-list-item v-for="comment in cache.tmpCommentList">
        <CommentItem :comment="comment" />
      </n-list-item>
      <n-list-item v-for="comment in comments">
        <CommentItem :comment="comment" />
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { getDynamicDetail } from '@/apis/post';
import { getAllComments } from '@/apis/comment';
import useCache from '@/store/cache';
const route = useRoute()
const title = ref("动态详情")

useHead({
  title: title.value
})

const cache = useCache();
const postId = Number(route.params.id)

const tmpCommentList = reactive<any>([]);

const { data: dynamic } = await useAsyncData<any>(
  'getDynamicDetail',
  () => getDynamicDetail(route.params.id as string)
)

const { data: comments } = await useAsyncData<any>(
  'getAllcomments',
  () => getAllComments(postId)
)

</script>


<style lang="less" scoop>
.main-content-wrap {
  .n-list-item {
    padding: 0;
  }
}
</style>