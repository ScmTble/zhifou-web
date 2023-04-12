<template>
    <span class="timestamp">
        <!-- {{ props.post.ip_loc ? props.post.ip_loc + ' · ' : props.post.ip_loc }} -->
        {{ formatRelativeTime(props.created_time) }}
    </span>
</template>


<script setup lang="ts">
const props = withDefaults(defineProps<{
    created_time: number,
}>(), {});
</script>


<style lang="less" scoped>
.timestamp {
    opacity: 0.75;
    font-size: 12px;
}
</style>