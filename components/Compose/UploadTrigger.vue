<template>
  <div class="compose-line compose-options">
    <n-upload-trigger #="{ handleClick }" abstract>
      <n-button :disabled="props.btnStatus" @click="clickImgHandler(handleClick)" quaternary circle type="primary">
        <n-icon size="20">
          <image-outline />
        </n-icon>
      </n-button>
    </n-upload-trigger>

    <n-upload-trigger #="{ handleClick }" abstract>
      <n-button :disabled="props.btnStatus" @click="clickVideoHandler(handleClick)" quaternary circle type="primary">
        <n-icon size="20">
          <videocam-outline />
        </n-icon>
      </n-button>
    </n-upload-trigger>

    <n-upload-trigger #="{ handleClick }" abstract>
      <n-button :disabled="props.btnStatus" @click="clickAttachHandler(handleClick)" quaternary circle type="primary">
        <n-icon size="20">
          <DocumentAttachOutline />
        </n-icon>
      </n-button>
    </n-upload-trigger>

    <ComposeTags />

    <ComposeLinks @click="handleLinkClick" />
  </div>
</template>

<script setup lang="ts">
import {
  ImageOutline,
  VideocamOutline,
  DocumentAttachOutline
} from '@vicons/ionicons5';

const props = withDefaults(
  defineProps<{
    btnStatus?: boolean;
  }>(),
  {
    btnStatus: false,
  }
);
const emit = defineEmits<{
  (e: 'updateUplodaType', type: string): void,
  (e: 'linkClick'): void
}>();

const handleLinkClick = () => {
  emit('linkClick')
}

const clickImgHandler = (handleClick: () => void) => {
  emit('updateUplodaType', "public/image")
  handleClick()
}
const clickVideoHandler = (handleClick: () => void) => {
  emit('updateUplodaType', "public/video")
  handleClick()
}
const clickAttachHandler = (handleClick: () => void) => {
  emit('updateUplodaType', "attachment")
  handleClick()
}
</script>

<style lang="less" scoped>
.compose-line {
  display: flex;
  flex-direction: row;

  &.compose-options {
    margin-top: 6px;
    padding-left: 42px;
    display: flex;
  }
}
</style>
