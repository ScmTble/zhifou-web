<template>
  <div>
    <MainNav :title="title" :back="true" />
    <n-list class="main-content-wrap profile-wrap" hoverable clickable bordered>
      <!-- 基础信息 -->
      <template #header>
        <ProfileInfo :avatar="user.avatar" :id="user.id" :username="user.username" :nickname="user.nickname" />
      </template>
      <n-tabs pane-style="padding-top: 0px" class="profile-tabs-wrap" :tabs-padding="20" type="line"
        default-value="dynamic" animated>
        <n-tab-pane name="dynamic" tab="动态">
          <ProfileDynamics :id="user.id" />
        </n-tab-pane>
      </n-tabs>
    </n-list>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const username = String(route.params.username)
const title = "@" + username

useHead({
  title: title
})

const { data: user } = await useFetch('/api/user/base', { query: { username } })
</script>