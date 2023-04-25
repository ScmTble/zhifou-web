<template>
  <n-thing content-indented @click="handleDetail">
    <!-- 头像 -->
    <template #avatar>
      <DynamicAvatar :url="props.post.user.avatar" />
    </template>
    <!-- 用户名 -->
    <template #header>
      <DynamicUserName :username="props.post.user.username" :nickname="props.post.user.nickname" />
    </template>
    <!-- 发布时间、ip -->
    <template #header-extra>
      <DynamicTime :created_time="props.post.created_time" />
    </template>

    <!-- 内容 -->
    <template #description v-if="props.post.contents.length > 0">
      <span class="post-text" v-html="props.post.contents">
      </span>
    </template>

    <!-- 链接 -->
    <DynamicLink :links="attachments.links" />
    <!-- 附件 -->
    <DynamicAttachment :attachments="attachments.attachments" />
    <!-- 图片 -->
    <DynamicImage :imgs="attachments.imgs" />
    <!-- 视频 -->
    <DynamicVideo :videos="attachments.videos" />

    <!-- 标签 -->
    <template #footer>
      <DynamicTag v-if="props.post.tags" :tags="props.post.tags" />
    </template>

    <!-- 点赞数、评论数、收藏数 -->
    <template #action>
      <DynamicAction :action="props.action" :upvote_count="props.post.upvote_count"
        :comment_count="props.post.comment_count" :collection_count="props.post.collection_count" />
    </template>
  </n-thing>
</template>
  
<script setup lang="ts">
const props = withDefaults(defineProps<{
  post: Post.PostInfo,
  action: boolean
}>(), {
  action: false
});

const router = useRouter();

const handleDetail = () => {
  router.push(`/post/${props.post.id}`);
}

const attachments = computed(() => {
  const { imgs, links, videos, attachments } = parseAttachments(props.post.attachments);
  return {
    imgs,
    links,
    videos,
    attachments
  }

});

</script>
  
<style lang="less" scoped>
.post-text {
  font-weight: 400;
  text-align: justify;
  overflow: hidden;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>