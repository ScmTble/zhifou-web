<template>
  <n-space justify="space-between">
    <div class="opt-item">
      <n-icon size="18" class="opt-item-icon">
        <heart-outline />
      </n-icon>
      {{ props.upvote_count }}
    </div>
    <div class="opt-item">
      <n-icon size="18" class="opt-item-icon">
        <chatbox-outline />
      </n-icon>
      {{ props.comment_count }}
    </div>
    <div class="opt-item">
      <n-icon size="18" class="opt-item-icon">
        <bookmark-outline />
      </n-icon>
      {{ props.collection_count }}
    </div>
  </n-space>
</template>


<script setup lang="ts">
import {
  HeartOutline,
  BookmarkOutline,
  ChatboxOutline,
} from '@vicons/ionicons5';

const props = withDefaults(defineProps<{
  upvote_count: number,
  comment_count: number,
  collection_count: number,
}>(), {});
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
</style>