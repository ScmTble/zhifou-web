<template>
  <div class="app-container">
    <div class="main-wrap">
      <BaseLeftbar />
      <div class="content-wrap">
        <slot />
      </div>
      <BaseRightbar />
      <BaseAuth />
    </div>
  </div>
</template>