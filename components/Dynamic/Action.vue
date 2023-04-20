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

const props = withDefaults(defineProps<{
  upvote_count: number,
  comment_count: number,
  collection_count: number,
  action: boolean
}>(), {
  action: false
});

const hasStarred = ref(false);
const hasCollected = ref(false);
const upvote_count = ref(unref(props.upvote_count));
const comment_count = ref(unref(props.comment_count));
const collection_count = ref(unref(props.collection_count));

const handleLike = () => {
  if (props.action) {
    console.log('点赞');
    hasStarred.value = !hasStarred.value;
    if (hasStarred.value) {
      upvote_count.value = upvote_count.value + 1;
    } else {
      upvote_count.value = upvote_count.value - 1;
    }
  }
}

const handleCollect = () => {
  if (props.action) {
    console.log('收藏');
    hasCollected.value = !hasCollected.value;
    if (hasCollected.value) {
      collection_count.value = collection_count.value + 1;
    } else {
      collection_count.value = collection_count.value - 1;
    }
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