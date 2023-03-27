<template>
  <div class="setting-name">
    <div class="setting-nickname">
      <span class="base-label">昵称</span>
      <div v-if="!showNicknameEdit">
        {{ user.nickname }}
      </div>
      <n-input ref="inputInstRef" v-show="showNicknameEdit" class="nickname-input" v-model:value="nickname" type="text"
        size="small" placeholder="请输入昵称" :maxlength="16" @blur="handleNicknameBlur" />
      <n-button v-if="!showNicknameEdit" quaternary round type="success" size="small" @click="handleNicknameEdit">
        <template #icon>
          <n-icon>
            <edit />
          </n-icon>
        </template>
      </n-button>
      <n-button v-show="showNicknameEdit" quaternary round type="success" size="small" @click="handleSave">
        保存
      </n-button>
    </div>
    <div class="setting-username">
      <span class="base-label">用户名</span>
      <n-popover trigger="hover">
        <template #trigger>
          <n-button text>
            @{{ user.username }}
          </n-button>
        </template>
        <span>用户名不能更改</span>
      </n-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@vicons/tabler';
import type { InputInst } from 'naive-ui';
import useUser from '@/store/user';
const user = useUser();
const inputInstRef = ref<InputInst>();
const showNicknameEdit = ref(false);

const nickname = ref<string>(user.nickname);
const handleSave = () => {

}

const handleNicknameEdit = () => {
  showNicknameEdit.value = true
  setTimeout(() => {
    inputInstRef.value?.focus();
  }, 30);
};
const handleNicknameBlur = () => {
  showNicknameEdit.value = false
}
</script>

<style lang="less" scoop>
.setting-nickname {
  line-height: 2;
  display: flex;

  .nickname-input {
    margin-right: 10px;
    width: 120px;
  }
}

.setting-username {
  line-height: 2;
}

.base-label {
  margin-right: 10px;
}
</style>