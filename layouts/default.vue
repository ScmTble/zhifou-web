<template>
  <div class="app-container">
    <div class="main-wrap">
      <BaseLeftbar />
      <div class="content-wrap">
        <slot />
      </div>
      <BaseRightbar />
      <ClientOnly>
        <Auth />
      </ClientOnly>
    </div>
  </div>
</template>