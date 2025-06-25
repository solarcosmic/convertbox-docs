import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/convertbox-docs/',
  title: "ConvertBox Docs",
  description: "The official documentation for ConvertBox",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/49fea463fb9430d9d4787020c67c703b8ad8561b_convertbox_banner_transparent__1_.png',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
    ],
    footer: {
      copyright: '© 2025 solarcosmic. Built with VitePress, taken from the BetterKMR project.'
    },

    sidebar: [
      {
        text: 'General',
        items: [
          { text: 'Welcome!', link: '/general/welcome' },
          { text: 'Frequently Asked Questions (FAQs)', link: '/general/frequently_asked_questions' },
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Get Extension', link: '/guides/get_extension' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/solarcosmic/ConvertBox' }
    ]
  }
})
