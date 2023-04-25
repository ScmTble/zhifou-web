<template>
  <div>
    <span class="nickname-wrap">
      <nuxt-link @click.stop class="username-link" :to="`/user/${props.username}`">
        <n-button text tag="span">
          <span class="username">{{ props.nickname }}</span>
        </n-button>
      </nuxt-link>
    </span>
    <span class="username-wrap"> @{{ props.username }} </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  nickname: string,
  username: string
}>(), {});
</script>


<style lang="less" scoped>
.nickname-wrap {
  font-size: 14px;
}

.username-wrap {
  font-size: 13px;
  opacity: 0.75;
}
</style>