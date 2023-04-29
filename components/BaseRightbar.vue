<template>
  <div class="rightbar-wrap">
    <div class="search-wrap">
      <n-input round clearable placeholder="搜一搜..." v-model:value="keyword" @keyup.enter.prevent="handleSearch">
        <template #prefix>
          <n-icon :component="Search" />
        </template>
      </n-input>
    </div>
    <n-card title="热门话题" embedded :bordered="false" size="small">
      <div class="hot-tag-item" v-if="data" v-for="tag in data" :key="tag.id">
        <NuxtLink class="hash-link" :to="`/tag/${tag.id}`">
          #{{ tag.tag }}
        </NuxtLink>

        <div class="post-num">
          {{ formatQuoteNum(tag.quote_num) }}
        </div>
      </div>
      <div v-else>
        <n-empty description="暂无数据">
        </n-empty>
      </div>
    </n-card>
    <n-card class="copyright-wrap" embedded :bordered="false" size="small">
      <div class="copyright">&copy; 2022 ScmTble</div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@vicons/ionicons5';
const keyword = ref('');
const router = useRouter();

const { data } = await useFetch<any>('/api/tag/query', {
  query: {
    'type': 'hot',
    'num': 15
  }
})

const formatQuoteNum = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }

  return num;
};
const handleSearch = () => {
  router.push({
    name: 'home',
    query: {
      q: keyword.value,
    },
  });
};
</script>

<style lang="less" scoped>
.rightbar-wrap {
  width: 240px;
  position: fixed;
  left: calc(50% + var(--content-main) / 2 + 10px);

  .search-wrap {
    margin: 12px 0;
  }

  .hot-tag-item {
    line-height: 2;
    position: relative;

    .hash-link {
      width: calc(100% - 60px);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      color: #18a058;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    .post-num {
      position: absolute;
      right: 0;
      top: 0;
      width: 60px;
      text-align: right;
      line-height: 2;
      opacity: 0.5;
    }
  }

  .copyright-wrap {
    margin-top: 10px;

    .copyright {
      opacity: 0.75;
    }
  }
}
</style>