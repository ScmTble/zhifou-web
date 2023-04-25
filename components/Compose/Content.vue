<template>
  <div class="compose-line">
    <div class="compose-user">
      <n-avatar round :size="30" :src="user.avatar" />
    </div>
    <n-mention type="textarea" size="large" autosize :bordered="false" :value="file.contents"
      @update:value="file.updateContents" placeholder="说说您的新鲜事..." />
  </div>
</template>

<script setup lang="ts">
import useUser from '@/store/user';
import useFile from '@/store/file';
const user = useUser();
const file = useFile()
</script>

<style lang="less" scoped>
.compose-line {
  display: flex;
  flex-direction: row;

  .compose-user {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
  }
}
</style>