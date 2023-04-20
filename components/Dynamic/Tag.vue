<template>
  <div>
    <n-tag @click.stop="handleTag(tag.value)" class="tag-item" v-for="tag in props.tags" :key="tag.value" round
      :bordered="false" type="success">
      {{ tag.label }}
      <template #icon>
        <n-icon>
          <Pricetag />
        </n-icon>
      </template>
    </n-tag>
  </div>
</template>

<script setup lang="ts">
import { Pricetag } from '@vicons/ionicons5'
const props = withDefaults(defineProps<{
  tags: Tag.TagInfo[]
}>(), {
  tags: () => []
});
const router = useRouter()
const handleTag = (value: string) => {
  router.push(`/tag/${value}`)
}

</script>

<style lang="less" scoped>
.tag-item {
  margin-right: 15px;
}
</style>