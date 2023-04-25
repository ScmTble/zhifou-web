<template>
    <div>
        <MainNav :title="title" />
        <div>Index Page</div>
    </div>
</template>

<script setup lang="ts">
const title = ref("收藏")
useHead({
    title: title.value
})
</script>