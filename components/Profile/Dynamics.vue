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
      <n-list-item class="bottom" @click="handleRefresh">
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

const last_id = ref<string>("9223372036854775807")
const loading = ref(false);
const dynamics = ref<Post.PostInfo[]>([])

// 获取新的动态
const handleRefresh = () => {
  if (loading.value) {
    return
  }
  loading.value = true;
  $fetch('/api/post/query_user', {
    query: {
      user_id: userStore.id,
      last_id: last_id.value,
    }
  }).then((res: any) => {
    loading.value = false;
    if (res) {
      // 有响应
      last_id.value = res[res.length - 1].id
      dynamics.value.push(...res)
    } else {
      // 响应内容为空
      message.warning("已经到底了")
    }

  }).catch(() => {
    loading.value = false;
  })
}

onMounted(() => {
  loading.value = true;
  $fetch('/api/post/query_user', {
    query: {
      user_id: userStore.id,
      last_id: last_id.value,
    }
  }).then((res: any) => {
    loading.value = false;
    if (res) {
      // 有响应
      last_id.value = res[res.length - 1].id
      dynamics.value.push(...res)
    } else {
      // 响应内容为空
      message.warning("已经到底了")
    }

  }).catch(() => {
    loading.value = false;
  })
})

</script>


<style lang="less" scoped>
.bottom {
  text-align: center;
}
</style>