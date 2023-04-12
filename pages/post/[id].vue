<template>
  <div>
    <MainNav :title="title" :back="true" />
    <n-list class="main-content-wrap" bordered>
      <n-list-item>
        <Dynamic :post="data" />
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { getDynamicDetail } from '@/apis/post';
const route = useRoute()
const title = ref("动态")

const { data } = await useAsyncData<any>(
  'getDynamicDetail',
  () => getDynamicDetail(route.params.id as string)
)
</script>