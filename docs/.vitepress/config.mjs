import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/convertbox-docs/',
  title: "ConvertBox Docs",
  description: "The official documentation for ConvertBox",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/ConvertBox_Logo_Transparent.png',
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
