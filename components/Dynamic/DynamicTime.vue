<template>
  <span class="timestamp">
    <n-time :time="props.created_time" type="relative" :unix="true" />
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