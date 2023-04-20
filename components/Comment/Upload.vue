<template>
  <div class="submit-wrap">
    <div class="wrap-right">
      <n-tooltip trigger="hover" placement="bottom">
        <template #trigger>
          <n-progress class="text-statistic" type="circle" :show-indicator="false" status="success" :stroke-width="10"
            :percentage="(props.contents.length / 200) * 100" />
        </template>
        {{ props.contents.length }} / 100
      </n-tooltip>
      <n-button :loading="submitting" @click="" type="primary" secondary round>
        评论
      </n-button>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
const submitting = ref(false);
const props = withDefaults(
  defineProps<{
    contents: string;
  }>(),
  {
    contents: '',
  }
);

</script>
<style lang="less" scoped>
.submit-wrap {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  .text-statistic {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    transform: rotate(180deg);
  }

  .wrap-right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
  