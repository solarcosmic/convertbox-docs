import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ConvertBox/',
  title: "ConvertBox Docs",
  description: "The official documentation for ConvertBox",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://interlabs-official.github.io/global_assets/betterkmr_logo_up.png',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
    ],
    footer: {
      copyright: '© 2023-2025 InterLabs. Built with VitePress.'
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
          { text: 'Creating Custom Themes', link: '/guides/creating_custom_themes' },
          { text: 'Building & Developing', link: '/guides/building_and_developing' },
          { text: 'Using the Navbar Editor', link: '/guides/using_the_navbar_editor' },
        ]
      },
      {
        text: 'Changelogs',
        items: [
          { text: 'v1.1.0 - Better Notices & VTT', link: '/changelog/1_1_0' },
          { text: 'v1.1.1 - Import/Export Themes', link: '/changelog/1_1_1' },
          { text: 'v1.2.0 - Dynamic Navbar Editor', link: '/changelog/1_2_0' },
          { text: 'v1.2.1 - Settings Patch Fix', link: '/changelog/1_2_1' },
        ]
      },
      {
        text: 'Develop',
        items: [
          { text: 'How to Test New Builds (Testers)', link: '/develop/how_to_test_new_builds' },
          { text: 'Scripting Language Testing', link: '/develop/javahnscript' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/4MkRmFmHz2' },
      { icon: 'github', link: 'https://github.com/Interlabs-Official/BetterKMR' }
    ]
  }
})
