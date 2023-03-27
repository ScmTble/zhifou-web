<template>
  <div>
    <n-popselect trigger="click" :value="tags" multiple :options="options" :on-update:value="update">
      <n-button>
        <template #icon>
          <n-icon>
            <PricetagsOutline />
          </n-icon>
        </template>
      </n-button>
    </n-popselect>
    <n-space>
      <n-tag v-for="tag in tags"> {{ tag }} </n-tag>
    </n-space>
  </div>
</template>
  
<script lang="ts" setup>
import { PricetagsOutline } from '@vicons/ionicons5'
const tags = ref<string[]>([]);
const options = [
  {
    label: 'Go Let It Out',
    value: 'Go Let It Out'
  },
  {
    label: 'Who Feels Love?',
    value: 'Who Feels Love?'
  },
  {
    label: 'Sunday Morning Call',
    value: 'Sunday Morning Call',
    disabled: true
  },
  {
    label: 'Roll It Over',
    value: 'Roll It Over'
  }
]
const update = (val: any) => {
  tags.value = val
}
</script>