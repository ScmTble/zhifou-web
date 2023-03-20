<template>
    <div>
        <MainNav :title="title" :back="true" />
        <div>{{ route.params.id }}</div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const title = ref("#")
</script>