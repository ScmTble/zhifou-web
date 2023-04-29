<template>
  <div>
    <n-popselect trigger="click" :value="file.tags" multiple :options="data" :on-update:value="handleTagUpdate"
      size="medium" scrollable>
      <n-button quaternary circle type="primary">
        <n-icon size="16">
          <pricetags-outline />
        </n-icon>
      </n-button>
    </n-popselect>
  </div>
</template>
  
<script setup lang="ts">
import {
  PricetagsOutline,
} from '@vicons/ionicons5';
import useFile from '@/store/file';
const file = useFile();

const { data } = await useFetch<any>('/api/tag/list', {
  transform: (input) => {
    let topics = input.map((item: any) => {
      return {
        label: item.tag,
        value: item.id
      }
    })
    return topics
  }
})

const handleTagUpdate = (val: any) => {
  file.updateTags(val)
}
</script>