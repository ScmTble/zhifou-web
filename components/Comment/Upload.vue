<template>
  <div class="submit-wrap">
    <div class="wrap-right">
      <n-tooltip trigger="hover" placement="bottom">
        <template #trigger>
          <n-progress class="text-statistic" type="circle" :show-indicator="false" status="success" :stroke-width="10"
            :percentage="(props.contents.length / 200) * 100" />
        </template>
        {{ props.contents.length }} / 100
      </n-tooltip>
      <n-button :loading="submitting" @click="handleComment" type="primary" secondary round>
        评论
      </n-button>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { useMessage } from 'naive-ui';
import useCache from '~/store/cache';
import useUser from '~/store/user';

const emit = defineEmits(["commentSuccess"])
const props = defineProps<{
  contents: string,
  post_id: string
}>()

const user = useUser();
const cache = useCache();
const submitting = ref(false);
const message = useMessage();

const handleComment = () => {
  if (props.contents.length == 0) {
    message.warning('输入内容')
    return
  }
  submitting.value = true
  $fetch('/api/comment/create', {
    method: "POST",
    body: {
      content: props.contents,
      post_id: props.post_id,
    }
  }).then((res: any) => {
    // cache中添加
    cache.addComment({
      ...res,
      user: {
        id: user.id,
        username: user.username,
        nickname: user.nickname,
        avatar: user.avatar,
        is_admin: user.is_admin,
      },
    })
    emit("commentSuccess")
    submitting.value = false
    message.success("评论成功")
  }).catch(err => {
    submitting.value = false
    message.success("评论失败")
  })
}

</script>
<style lang="less" scoped>
.submit-wrap {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  .text-statistic {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    transform: rotate(180deg);
  }

  .wrap-right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
  