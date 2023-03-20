<template>
    <div>
        <MainNav :title="title" />
        <div>Index Page</div>
    </div>
</template>

<script setup lang="ts">
const title = ref("设置")
useHead({
    title: title.value
})
</script>