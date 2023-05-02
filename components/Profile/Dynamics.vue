<template>
  <div class="profile-dynamic-list">
    <n-list-item v-if="dynamics" v-for="post in dynamics" :key="post.id">
      <Dynamic :post="post" :action="false" />
    </n-list-item>
    <n-list-item v-else>
      <n-empty description="暂无数据">
      </n-empty>
    </n-list-item>
    <n-spin :show="loading">
      <n-list-item class="bottom" @click="refresh">
        <n-button text type="success">加载动态</n-button>
      </n-list-item>
    </n-spin>
  </div>
</template>


<script setup lang="ts">
import { useMessage } from 'naive-ui';
import useUser from '@/store/user';

const userStore = useUser();
const message = useMessage();

const { dynamics, refresh, loading } = useDynamicsUserIdPageNum(userStore.id, message)

onMounted(() => {
  refresh()
})

</script>


<style lang="less" scoped>
.bottom {
  text-align: center;
}
</style>