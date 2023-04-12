<template>
  <div>
    <span class="nickname-wrap">
      <nuxt-link @click.stop class="username-link" :to="`/user/${props.username}`">
        <n-button text tag="span">
          {{ props.nickname }}
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
  font-size: 14px;
  opacity: 0.75;
}

.username-link {
  color: #000;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>