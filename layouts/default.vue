<template>
  <div class="app-container">
    <div class="main-wrap">
      <ClientOnly>
        <BaseLeftbar />
      </ClientOnly>
      <div class="content-wrap">
        <slot />
      </div>
      <BaseRightbar />
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-container {
  margin: 0;
  padding: 0;

  .main-wrap {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .content-wrap {
      width: 100%;
      max-width: var(--content-main);
      position: relative;
    }
  }
}
</style>