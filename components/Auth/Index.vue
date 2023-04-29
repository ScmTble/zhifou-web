<template>
  <n-modal v-model:show="user.authModalShow" class="auth-card" preset="card" size="small" :mask-closable="false"
    :bordered="false" :style="{
        width: '360px',
      }">
    <div class="auth-wrap">
      <n-card :bordered="false">
        <n-tabs :default-value="user.authModelTab" size="large" justify-content="space-evenly">
          <n-tab-pane name="signin" tab="登录">
            <AuthLogin />
          </n-tab-pane>
          <n-tab-pane name="signup" tab="注册">
            <AuthRegister />
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </n-modal>
</template>
  
<script setup lang="ts">
import useUser from "@/store/user";
import { useMessage } from "naive-ui";

const user = useUser();
const message = useMessage();

const cookie = useCookie("Authorization")
// 打开时验证Token
onMounted(() => {
  $fetch('/api/user/info').then(res => {
    user.updateUserinfo(res)
  }).catch((err) => {
    user.userLogout()
    cookie.value = null
    message.warning("请重新登录")
    user.triggerAuth('signin')
  });
}
);

</script>
  
<style lang="less">
.auth-wrap {
  margin-top: -30px;
}

// 解决登录表单头不显示问题
.auth-card {
  .n-card-header {
    z-index: 999;
  }
}
</style>