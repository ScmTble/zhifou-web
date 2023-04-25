<template>
  <div class="compose-wrap" v-if="user.isLogin">
    <div class="compose-line">
      <div class="compose-user">
        <n-avatar round :size="30" :src="user.avatar" />
      </div>
      <n-mention type="textarea" size="large" autosize :value="comment" @update:value="handleComment" :bordered="false"
        placeholder="快来评论两句吧..." />
    </div>

    <!-- 发布图标 -->
    <CommentUpload :post_id="props.post_id" :contents="comment" @comment-success="comment = ''" />
  </div>
  <div class="compose-wrap" v-else>
    <LoginWrap />
  </div>
</template>
      
      
<script setup lang="ts">
import useUser from '@/store/user';
const user = useUser();

const comment = ref<string>('');
const handleComment = (str: string) => {
  comment.value = str;
}

const props = defineProps<{
  post_id: number
}>()
</script>
      
<style lang="less" scoped>
.compose-wrap {
  width: 100%;

  .compose-line {
    display: flex;
    flex-direction: row;

    .compose-user {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
    }
  }
}
</style>