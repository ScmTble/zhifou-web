<template>
  <div>
    <MainNav :title="title" />
    <n-list class="main-content-wrap" bordered>
      <n-list-item>
        <!-- 发布器 -->
        <Compose @post-success="onPostSuccess" />
      </n-list-item>

      <n-list-item v-for="post in list" :key="post.id">
        <Dynamic :post="post" />
      </n-list-item>

    </n-list>
  </div>
</template>

<script setup lang="ts">
const title = ref("广场")
useHead({
  title: title.value
})
const list = ref<any[]>([
  {
    "id": 1080035128,
    "user_id": 101709,
    "user": {
      "id": 101709,
      "nickname": "北野",
      "username": "alimy",
      "status": 1,
      "avatar": "https://cdn.paopao.info/public/avatar/1f/28/84/e0/489b-40e4-948b-ac3c2f931546.jpeg",
      "is_admin": false
    },
    "contents": 'wadawd\nawdawd\nfawfafw<span class=\"hash-link\">#awdaw</span> wadawd<span class=\"hash-link\">@awdawdawd</span>',
    "imgs": [
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e92g598dhdkln1nr0.jpeg",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e92g598dhdkln1nr0.jpeg",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e92g598dhdkln1nr0.jpeg",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e92g598dhdkln1nr0.jpeg"
    ],
    "urls": ["https://www.baidu.com"],
    "users": [],
    "videos": [],
    "attachments": [
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e95g598dhdkln1nrg.zip",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e95g598dhdkln1nrg.zip",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e95g598dhdkln1nrg.zip",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e95g598dhdkln1nrg.zip"
    ],
    "tags": [],
    "created_time": "awdawd",
    "collection_count": 100,
    "comment_count": 90,
    "upvote_count": 10,
  },
  {
    "id": 1080035128,
    "user_id": 101709,
    "user": {
      "id": 101709,
      "nickname": "北野",
      "username": "alimy",
      "status": 1,
      "avatar": "https://cdn.paopao.info/public/avatar/1f/28/84/e0/489b-40e4-948b-ac3c2f931546.jpeg",
      "is_admin": false
    },
    "contents": 'wadawd\nawdawd\nfawfafw<span class=\"hash-link\">#awdaw</span> wadawd<span class=\"hash-link\">@awdawdawd</span>',
    "imgs": [
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e92g598dhdkln1nr0.jpeg",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e92g598dhdkln1nr0.jpeg",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e92g598dhdkln1nr0.jpeg",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e92g598dhdkln1nr0.jpeg"
    ],
    "urls": ["https://www.baidu.com"],
    "users": [],
    "videos": [],
    "attachments": [
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e95g598dhdkln1nrg.zip",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e95g598dhdkln1nrg.zip",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e95g598dhdkln1nrg.zip",
      "https://zhifoust.oss-cn-guangzhou.aliyuncs.com/cg5e95g598dhdkln1nrg.zip"
    ],
    "tags": [],
    "created_time": "awdawd",
    "collection_count": 100,
    "comment_count": 90,
    "upvote_count": 10,
  }
]);
const onPostSuccess = (post: any) => {
  list.value.push(post)
};
</script>