import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/convertbox-docs/',
  title: "ConvertBox Docs",
  description: "The official documentation for ConvertBox",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/39a5b5c43f0c51f0112c80a081463e79340f1c89_convertbox_banner_transparent.png',
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
