// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@zvonimirsun/nuxt-theme-next'],
  modules: ['@nuxt/eslint'],
  runtimeConfig: {
    public: {
      title: '随遇而安',
      subtitle: '在自由的空气中漂浮',
      description: '生活吐槽 & 学习记录',
    },
  },
  devtools: { enabled: true },

  eslint: {
    config: {
      standalone: false,
    },
  },

  icon: {
    iconifyApiEndpoint: 'https://cdn.ovooo.cc/iconify'
  },

  experimental: {
    payloadExtraction: 'client',
  },
})
