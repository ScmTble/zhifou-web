<template>
  <div>
    <n-popselect trigger="click" :value="file.tags" multiple :options="cache.tagsOptions"
      :on-update:value="handleTagUpdate" size="medium" scrollable>
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
import useCache from '@/store/cache';
import useFile from '@/store/file';

const cache = useCache();
const file = useFile();

const handleTagUpdate = (val: any) => {
  file.updateTags(val)
}
</script>