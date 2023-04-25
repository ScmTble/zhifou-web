<template>
  <div class="user-wrap">
    <n-avatar class="user-avatar" round :size="34" :src="user.avatar" />

    <div class="user-info">
      <div class="nickname">
        <span class="nickname-txt">
          {{ user.nickname }}
        </span>
        <n-button class="logout" quaternary circle size="tiny" @click="handleLogout">
          <template #icon>
            <n-icon><log-out-outline /></n-icon>
          </template>
        </n-button>
      </div>
      <div class="username">@{{ user.username }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NIcon } from 'naive-ui';
import {
  LogOutOutline,
} from '@vicons/ionicons5';
import useUser from '@/store/user';
const user = useUser();

const handleLogout = () => {
  user.userLogout()
};

</script>

<style lang="less" scoped>
.user-wrap {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;

  .user-avatar {
    margin-right: 8px;
  }

  .user-info {
    display: flex;
    flex-direction: column;

    .nickname {
      font-size: 15px;
      font-weight: bold;
      line-height: 16px;
      height: 16px;
      margin-bottom: 2px;
      display: flex;
      align-items: center;

      .nickname-txt {
        max-width: 90px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .logout {
        margin-left: 6px;
      }
    }

    .username {
      font-size: 15px;
      line-height: 16px;
      height: 16px;
      width: 120px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      opacity: 0.75;
    }
  }
}
</style>