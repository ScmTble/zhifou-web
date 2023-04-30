<template>
  <n-form ref="loginRef" :model="loginForm" :rules="{
      username: {
        required: true,
        message: '请输入账户名',
      },
      password: {
        required: true,
        message: '请输入密码',
      },
    }">
    <n-form-item-row label="账户" path="username">
      <n-input v-model:value="loginForm.username" placeholder="请输入用户名" @keyup.enter.prevent="handleLogin" />
    </n-form-item-row>
    <n-form-item-row label="密码" path="password">
      <n-input type="password" show-password-on="mousedown" v-model:value="loginForm.password" placeholder="请输入账户密码"
        @keyup.enter.prevent="handleLogin" />
    </n-form-item-row>
  </n-form>
  <n-button type="primary" block secondary strong :loading="loading" @click="handleLogin">
    登录
  </n-button>
</template>

<script setup lang="ts">
import type { FormInst } from 'naive-ui';
import { useMessage } from 'naive-ui';
import useUser from '@/store/user';

const message = useMessage();
const user = useUser();

const loginRef = ref<FormInst>();
const loading = ref(false);
const loginForm = reactive({
  username: '',
  password: '',
});

const handleLogin = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  loginRef.value?.validate(async (errors) => {
    if (!errors) {
      loading.value = true;
      try {
        // 登录
        await useFetch('/api/user/login', {
          method: 'POST',
          body: {
            username: loginForm.username,
            password: loginForm.password,
          },
          server: false
        })
        user.hiddenAuth()
        loginForm.username = '';
        loginForm.password = '';
        // 获取用户信息
        const { data: res } = await useFetch('/api/user/info', { server: false })
        user.updateUserinfo(unref(res))
        message.success("登录成功")
      } catch (err) {
        message.error('登录失败');
      } finally {
        loading.value = false;
      }
    }
  });
};
</script>