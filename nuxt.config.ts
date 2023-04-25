export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      titleTemplate: "%s - 知否"
    }
  },
  css: ['@/assets/css/main.less'],
  modules: [
    '@huntersofbook/naive-ui-nuxt',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      language: 'zh-CN',
      imageThumbnail: "?x-oss-process=image/resize,m_fill,w_300,h_300,limit_0/auto-orient,1/format,png",
      uploadGateway: "https://gin-oss.zeabur.app/upload"
    }
  },
})
