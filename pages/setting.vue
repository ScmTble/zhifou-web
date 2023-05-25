<template>
  <div>
    <MainNav :title="title" />
    <NuxtLayout name="content">
      <n-card title="基本信息" size="small" class="setting-card">
        <SettingAvatar />
        <SettingName />
      </n-card>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const title = ref("设置")
useHead({
  title: title.value
})
</script>

<style lang="less" scoped>
.setting-card {
  margin-top: -1px;
  border-radius: 0;

  .form-submit-wrap {
    display: flex;
    justify-content: flex-end;
  }

  .base-line {
    line-height: 2;
    display: flex;
    align-items: center;

    .base-label {
      opacity: 0.75;
      margin-right: 12px;
    }

    .nickname-input {
      margin-right: 10px;
      width: 120px;
    }
  }

  .avatar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;

    .avatar-img {
      margin-bottom: 10px;
    }
  }

  .hash-link {
    margin-left: 12px;
  }

  .phone-bind-wrap {
    margin-top: 20px;

    .captcha-img-wrap {
      width: 100%;
      display: flex;
      align-items: center;
    }

    .captcha-img {
      width: 125px;
      height: 34px;
      border-radius: 3px;
      margin-left: 10px;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>