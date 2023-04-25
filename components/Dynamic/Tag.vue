<template>
  <div>
    <n-tag size="small" @click.stop="handleTag(tag.value)" class="tag-item" v-for="tag in props.tags" :key="tag.value"
      round type="success">
      # {{ tag.label }}
    </n-tag>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  tags: Tag.TagInfo[]
}>(), {
  tags: () => []
});
const router = useRouter()
const handleTag = (value: number) => {
  router.push(`/tag/${value}`)
}

</script>

<style lang="less" scoped>
.tag-item {
  margin-right: 15px;

  :hover {
    cursor: pointer;
  }
}
</style>