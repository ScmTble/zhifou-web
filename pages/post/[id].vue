<template>
  <div>
    <MainNav :title="title" :back="true" />
    <n-list class="main-content-wrap" bordered>
      <n-list-item>
        <Dynamic :post="data" :action="true" />
      </n-list-item>
      <n-list-item>
        <Comment />
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { getDynamicDetail } from '@/apis/post';
const route = useRoute()
const title = ref("动态详情")

useHead({
  title: title.value
})


const { data } = await useAsyncData<any>(
  'getDynamicDetail',
  () => getDynamicDetail(route.params.id as string)
)
</script>