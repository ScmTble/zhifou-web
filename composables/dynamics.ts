import type { MessageApi } from 'naive-ui/es/message';

export const useDynamicsOffset = (message: MessageApi) => {
  // 偏移量
  let offset = 0;
  // 动态列表
  const list = ref<Post.PostInfo[]>([]);
  // 加载
  const loading = ref(false);

  // 获取动态
  const refresh = () => {
    loading.value = true;
    $fetch('/api/post/recommend', { query: { offset: offset } }).then(res => {
      if (res) {
        // 有响应
        offset = offset + res.length;
        list.value.push(...res)
      } else {
        // 响应内容为空
        message.warning("已经到底了")
      }

    }).finally(() => {
      loading.value = false
    })
  }
  return {
    list,
    refresh,
    loading
  }
}


export const useDynamicsPageNum = (tag_id: number, message: MessageApi) => {
  // id
  let last_id = "9223372036854775807"
  // 动态列表
  const dynamics = ref<Post.PostInfo[]>([])
  // 加载状态
  const loading = ref(false);

  // 获取动态
  const refresh = () => {
    loading.value = true;
    $fetch('/api/post/query_tag', {
      query: {
        tag_id: tag_id,
        last_id: last_id,
      }
    }).then((res: any) => {
      if (res) {
        // 有响应
        last_id = res[res.length - 1].id
        dynamics.value.push(...res)
      } else {
        // 响应内容为空
        message.warning("已经到底了")
      }

    }).finally(() => {
      loading.value = false;
    })
  }
  return {
    dynamics,
    refresh,
    loading
  }
}


export const useDynamicsUserIdPageNum = (user_id: string, message: MessageApi) => {
  // id
  let last_id = "9223372036854775807"
  // 动态列表
  const dynamics = ref<Post.PostInfo[]>([])
  // 加载状态
  const loading = ref(false);

  // 获取动态
  const refresh = () => {
    loading.value = true;
    $fetch('/api/post/query_user', {
      query: { user_id, last_id }
    }).then((res: any) => {
      if (res) {
        // 有响应
        last_id = res[res.length - 1].id
        dynamics.value.push(...res)
      } else {
        // 响应内容为空
        message.warning("已经到底了")
      }

    }).finally(() => {
      loading.value = false;
    })
  }
  return {
    dynamics,
    refresh,
    loading
  }
} 
