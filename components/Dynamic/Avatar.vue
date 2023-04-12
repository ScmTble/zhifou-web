<template>
    <n-avatar round :size="30" :src="props.url" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    url: string,
}>(), {});
</script>