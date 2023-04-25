<template>
    <div>
        <MainNav :title="title" />
        <div>Notification Page</div>
    </div>
</template>
<script setup lang="ts">
const title = ref("消息")
useHead({
    title: title.value
})
</script>