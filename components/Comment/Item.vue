<template>
  <div class="comment-item">
    <n-thing content-indented>
      <template #avatar>
        <n-avatar round :size="30" :src="props.comment.user.avatar" />
      </template>
      <template #header>
        <span class="nickname-wrap">
          <NuxtLink @click.stop class="username-link" :to="`/`">
            <n-button text tag="span">
              {{ props.comment.user.nickname }}
            </n-button>
          </NuxtLink>
        </span>
        <span class="username-wrap">
          @{{ props.comment.user.username }}
        </span>
      </template>
      <template #header-extra>
        <div class="time-wrap">
          <n-time :time="props.comment.created_time" type="relative" :unix="true" />
        </div>
      </template>
      <template #description v-if="props.comment.content.length > 0">
        <span class="comment-text">
          {{ props.comment.content }}
        </span>
      </template>
    </n-thing>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  comment: Comment.CommentInfo
}>(), {})

</script>

<style lang="less" scoped>
.comment-item {
  width: 100%;

  .nickname-wrap {
    font-size: 14px;
  }

  .username-wrap {
    font-size: 13px;
    opacity: 0.75;
  }

  .time-wrap {
    display: flex;
    align-items: center;
    opacity: 0.75;
    font-size: 12px;

  }

  .comment-text {
    display: block;
    text-align: justify;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-all;
  }
}
</style>