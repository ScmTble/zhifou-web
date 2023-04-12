<template>
  <div class="post-item">
    <n-thing content-indented>
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
        <span class="post-text" @click.stop="doClickText($event, props.post.id)" v-html="props.post.contents">
        </span>
      </template>

      <!-- 链接 -->
      <DynamicLink v-if="props.post.urls" :links="props.post.urls" />
      <!-- 附件 -->
      <DynamicAttachment v-if="props.post.attachments" :attachments="props.post.attachments" />
      <!-- 图片 -->
      <DynamicImage v-if="props.post.imgs" :imgs="props.post.imgs" />
      <!-- 视频 -->
      <DynamicVideo v-if="props.post.videos" :videos="props.post.videos" />

      <!-- 点赞数、评论数、收藏数 -->
      <template #action>
        <DynamicAction :upvote_count="props.post.upvote_count" :comment_count="props.post.comment_count"
          :collection_count="props.post.collection_count" />
      </template>
    </n-thing>
  </div>
</template>
  
<script setup lang="ts">
const props = withDefaults(defineProps<{
  post: Post.PostInfo,
}>(), {});

const doClickText = (e: MouseEvent, id: string) => {

};
</script>
  
<style lang="less" scoped>
.post-item {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  .post-text {
    font-size: medium;
    text-align: justify;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-all;
  }
}
</style>