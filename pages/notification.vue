<template>
  <div>
    <MainNav :title="title" />
    <NuxtLayout name="content">
      <div>Notification Page</div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const title = ref("消息")
useHead({
  title: title.value
})
</script>