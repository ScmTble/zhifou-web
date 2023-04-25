<template>
  <div>
    <n-popselect trigger="click" :value="file.tags" multiple :options="data as any" :on-update:value="handleTagUpdate"
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
import { getAllTags } from '@/apis/post';

const file = useFile();

const { data } = await useLazyAsyncData(
  'getAllTags',
  () => getAllTags(),
)

const handleTagUpdate = (val: any) => {
  file.updateTags(val)
}
</script>