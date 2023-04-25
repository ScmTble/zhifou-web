<template>
    <n-form ref="registerRef" :model="registerForm" :rules="registerRule">
        <n-form-item-row label="用户名" path="username">
            <n-input v-model:value="registerForm.username" placeholder="用户名注册后无法修改" />
        </n-form-item-row>
        <n-form-item-row label="密码" path="password">
            <n-input type="password" show-password-on="mousedown" placeholder="密码不少于6位"
                v-model:value="registerForm.password" @keyup.enter.prevent="handleRegister" />
        </n-form-item-row>
        <n-form-item-row label="重复密码" path="repassword">
            <n-input type="password" show-password-on="mousedown" placeholder="请再次输入密码"
                v-model:value="registerForm.repassword" @keyup.enter.prevent="handleRegister" />
        </n-form-item-row>
    </n-form>
    <n-button type="primary" block secondary strong :loading="loading" @click="handleRegister">
        注册
    </n-button>
</template>

<script setup lang="ts">
import type { FormInst, FormItemRule } from 'naive-ui';
const registerRef = ref<FormInst>();
const loading = ref(false);
const registerForm = reactive({
    username: '',
    password: '',
    repassword: '',
});

const handleRegister = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
};

const registerRule = {
    username: {
        required: true,
        message: '请输入账户名',
    },
    password: {
        required: true,
        message: '请输入密码',
    },
    repassword: [
        {
            required: true,
            message: '请输入密码',
        },
        {
            validator: (rule: FormItemRule, value: any) => {
                return (
                    !!registerForm.password &&
                    registerForm.password.startsWith(value) &&
                    registerForm.password.length >= value.length
                );
            },
            message: '两次密码输入不一致',
            trigger: 'input',
        },
    ],
};
</script>