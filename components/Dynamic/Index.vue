<template>
  <div class="post-item" @click="goPostDetail(props.post.id)">
    <n-thing content-indented>
      <!-- 头像 -->
      <template #avatar>
        <n-avatar round :size="30" :src="props.post.user.avatar" />
      </template>
      <!-- 用户名 -->
      <template #header>
        <span class="nickname-wrap">
          <nuxt-link @click.stop class="username-link" :to="`/user/${props.post.user.username}`">
            <n-button text tag="span">
              {{ props.post.user.nickname }}
            </n-button>
          </nuxt-link>
        </span>
        <span class="username-wrap"> @{{ props.post.user.username }} </span>
      </template>
      <!-- 发布时间、ip -->
      <template #header-extra>
        <span class="timestamp">
          <!-- {{ props.post.ip_loc ? props.post.ip_loc + ' · ' : props.post.ip_loc }} -->
          {{ formatRelativeTime(props.post.created_time) }}
        </span>
      </template>

      <!-- 内容 -->
      <template #description v-if="props.post.contents.length > 0">
        <span class="post-text" @click.stop="doClickText($event, props.post.id)" v-html="props.post.contents">
        </span>
      </template>

      <!-- 链接 -->
      <DynamicLink :links="post.urls" />
      <!-- 附件 -->
      <DynamicAttachment :attachments="post.attachments" />
      <!-- 图片 -->
      <DynamicImage :imgs="post.imgs" />
      <!-- 视频 -->
      <DynamicVideo :videos="post.videos" />


      <!-- 点赞数、评论数、收藏数 -->
      <template #action>
        <n-space justify="space-between">
          <div class="opt-item">
            <n-icon size="18" class="opt-item-icon">
              <heart-outline />
            </n-icon>
            {{ props.post.upvote_count }}
          </div>
          <div class="opt-item">
            <n-icon size="18" class="opt-item-icon">
              <chatbox-outline />
            </n-icon>
            {{ props.post.comment_count }}
          </div>
          <div class="opt-item">
            <n-icon size="18" class="opt-item-icon">
              <bookmark-outline />
            </n-icon>
            {{ props.post.collection_count }}
          </div>
        </n-space>
      </template>
    </n-thing>
  </div>
</template>
  
<script setup lang="ts">
import useMain from '@/store/main';
import {
  HeartOutline,
  BookmarkOutline,
  ChatboxOutline,
} from '@vicons/ionicons5';

const router = useRouter();
const main = useMain();
const props = withDefaults(defineProps<{
  post: Item.PostItemProps,
}>(), {});

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

const goPostDetail = (id: number) => {
  router.push({
    name: 'post',
    query: {
      id,
    },
  });
};


const doClickText = (e: MouseEvent, id: number) => {

};
</script>
  
<style lang="less" scoped>
.post-item {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  .nickname-wrap {
    font-size: 14px;
  }

  .username-wrap {
    font-size: 14px;
    opacity: 0.75;
  }

  .top-tag {
    transform: scale(0.75);
  }

  .timestamp {
    opacity: 0.75;
    font-size: 12px;
  }

  .post-text {
    font-size: medium;
    text-align: justify;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-all;
  }

  .opt-item {
    display: flex;
    align-items: center;
    opacity: 0.7;

    .opt-item-icon {
      margin-right: 10px;
    }
  }

  &:hover {
    background: v-bind('state.color');
    cursor: pointer;
  }

  .n-thing-avatar {
    margin-top: 0;
  }

  .n-thing-header {
    line-height: 16px;
    margin-bottom: 8px !important;
  }
}
</style>