<template>
  <n-space justify="space-between">
    <!-- 点赞 -->
    <div class="opt-item action-item">
      <n-icon size="18" class="opt-item-icon" @click="handleLike">
        <heart-outline v-if="!hasStarred" />
        <heart v-if="hasStarred" color="red" />
      </n-icon>
      {{ upvote_count }}
    </div>
    <!-- 评论 -->
    <div class="opt-item">
      <n-icon size="18" class="opt-item-icon">
        <chatbox-outline />
      </n-icon>
      {{ comment_count }}
    </div>
    <!-- 收藏 -->
    <div class="opt-item action-item">
      <n-icon size="18" class="opt-item-icon" @click="handleCollect">
        <bookmark-outline v-if="!hasCollected" />
        <bookmark v-if="hasCollected" color="#ff7600" />
      </n-icon>
      {{ collection_count }}
    </div>
  </n-space>
</template>


<script setup lang="ts">
import {
  HeartOutline,
  Heart,
  BookmarkOutline,
  Bookmark,
  ChatboxOutline,
} from '@vicons/ionicons5';
import { useMessage } from 'naive-ui';

const props = withDefaults(defineProps<{
  upvote_count: number,
  comment_count: number,
  collection_count: number,
  action: boolean,
  post_id: string,
  collect_status: boolean,
  upvote_status: boolean
}>(), {
  action: false
});

const message = useMessage();
const hasStarred = ref(unref(props.upvote_status));
const hasCollected = ref(unref(props.collect_status));
const upvote_count = ref(unref(props.upvote_count));
const comment_count = ref(unref(props.comment_count));
const collection_count = ref(unref(props.collection_count));

const handleLike = () => {
  if (props.action) {
    $fetch('/api/like/click', {
      method: 'POST',
      body: {
        post_id: props.post_id
      }
    }).then(() => {
      hasStarred.value = !hasStarred.value;
      if (hasStarred.value) {
        upvote_count.value = upvote_count.value + 1;
        message.success("点赞成功")
      } else {
        upvote_count.value = upvote_count.value - 1;
        message.warning("取消点赞")
      }
    }).catch(err => {
      message.error("操作失败")
    })
  }
}

const handleCollect = () => {
  if (props.action) {
    $fetch('/api/collect/click', {
      method: 'POST',
      body: {
        post_id: props.post_id
      }
    }).then(res => {
      hasCollected.value = !hasCollected.value;
      if (hasCollected.value) {
        collection_count.value = collection_count.value + 1;
        message.success("收藏成功")
      } else {
        collection_count.value = collection_count.value - 1;
        message.warning("取消收藏")
      }
    }).catch(err => {
      message.success("操作失败")
    })
  }
}
</script>


<style lang="less" scoped>
.opt-item {
  display: flex;
  align-items: center;
  opacity: 0.7;

  .opt-item-icon {
    margin-right: 10px;
  }
}

.action-item:hover {
  cursor: pointer;
}
</style>