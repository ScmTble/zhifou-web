<template>
  <div>
    <MainNav :title="title" />
    <n-list class="main-content-wrap tags-wrap" bordered>
      <n-tabs type="line" animated @update:value="changeTab">
        <n-tab-pane name="hot" tab="热门" />
        <n-tab-pane name="new" tab="最新" />
      </n-tabs>
      <n-spin :show="pending">
        <n-space>
          <n-tag class="tag-item" type="success" round v-for="tag in data as any" :key="tag.id">
            <router-link class="hash-link" to="/">
              #{{ tag.tag }}
            </router-link>
            <span class="tag-hot">({{ tag.quote_num }})</span>
            <template #avatar>
              <n-avatar :src="tag.avatar" />
            </template>
          </n-tag>
        </n-space>
      </n-spin>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { getTags } from '@/apis/post';

const title = ref("话题")
useHead({
  title: title.value
})
const tagType = ref<"hot" | "new">('hot');

const { data, pending, refresh } = await useAsyncData(
  'getTopics',
  () => getTags(tagType.value, 15),
)

const changeTab = (tab: "hot" | "new") => {
  tagType.value = tab;
  refresh(); // 刷新
};
</script>

<style lang="less" scoped>
.tags-wrap {
  padding: 20px;

  .tag-item {
    .tag-hot {
      margin-left: 12px;
      font-size: 12px;
      opacity: 0.75;
    }
  }
}
</style>