<template>
  <div>
    <MainNav :title="title" />
    <NuxtLayout name="content">
      <Collection />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const title = ref("收藏")
useHead({
  title: title.value
})
</script>

<style lang="less" scoped></style>