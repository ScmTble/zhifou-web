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
import { userLogin, userInfo } from '@/apis/auth';
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
  loginRef.value?.validate((errors) => {
    if (!errors) {
      loading.value = true;
      userLogin({
        username: loginForm.username,
        password: loginForm.password,
      })
        .then((res: any) => {
          console.log(res)
          const token = res?.token || '';
          // 写入用户信息
          localStorage.setItem('PAOPAO_TOKEN', token);
          return userInfo(token);
        })
        .then((res) => {
          message.success('登录成功');
          loading.value = false;
          user.updateUserinfo(res)
          user.triggerAuth(false)
          loginForm.username = '';
          loginForm.password = '';
        })
        .catch((err) => {
          loading.value = false;
        });
    }
  });
};
</script>