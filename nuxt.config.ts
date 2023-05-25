export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      titleTemplate: "%s | 知否",
      meta: [{ charset: 'utf-8' }],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    }
  },
  css: ['@/assets/css/main.less'],
  modules: [
    '@huntersofbook/naive-ui-nuxt',
    '@pinia/nuxt',
    '@nuxt/devtools'
  ],
  runtimeConfig: {
    public: {
      language: 'zh-CN',
      imageThumbnail: "?x-oss-process=image/resize,m_fill,w_300,h_300,limit_0/auto-orient,1/format,png",
      uploadGateway: "https://gin-oss.zeabur.app/upload",
      pageNum: 4,
      apiBase: 'http://127.0.0.1:8000/v1'
    },
  },
})
