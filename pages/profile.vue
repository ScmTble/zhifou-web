<template>
  <div>
    <MainNav :title="title" />
    <NuxtLayout name="content">
      <n-list class="main-content-wrap profile-wrap" hoverable clickable bordered>
        <!-- 基础信息 -->
        <template #header>
          <ProfileInfo :avatar="userStore.avatar" :id="userStore.id" :username="userStore.username"
            :nickname="userStore.nickname" />
        </template>
        <n-tabs pane-style="padding-top: 0px" class="profile-tabs-wrap" :tabs-padding="20" type="line"
          default-value="dynamic" animated>
          <n-tab-pane name="dynamic" tab="动态">
            <ProfileDynamics :id="userStore.id" />
          </n-tab-pane>
        </n-tabs>
      </n-list>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import useUser from '@/store/user';
const title = ref("主页")
useHead({
  title: title.value
})
const userStore = useUser();
</script>


<style lang="less" scoped></style>