<template>
  <div class="profile-baseinfo">
    <div class="avatar">
      <n-avatar size="large" :src="props.avatar" />
    </div>
    <div class="base-info">
      <div class="username">
        <strong>{{ props.nickname }}</strong>
        <span> @{{ props.username }} </span>
      </div>
      <div class="uid">UID. {{ props.id }}</div>
    </div>
  </div>
</template>


<script setup lang="ts">
const props = defineProps<{
  avatar: string,
  nickname: string,
  username: string,
  id: string,
}>();
</script>

<style lang="less" scoped>
.profile-baseinfo {
  display: flex;

  .avatar {
    width: 55px;
  }

  .base-info {
    position: relative;
    width: calc(100% - 55px);

    .username {
      line-height: 16px;
      font-size: 16px;
    }

    .uid {
      font-size: 14px;
      line-height: 14px;
      margin-top: 10px;
      opacity: 0.75;
    }
  }
}
</style>