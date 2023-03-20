<template>
    <div>
        <MainNav :title="title" />
        <div>Topic Page</div>
    </div>
</template>

<script setup lang="ts">
const title = ref("话题")
useHead({
    title: title.value
})
</script>