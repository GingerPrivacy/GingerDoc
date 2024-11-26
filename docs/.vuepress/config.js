import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'en-US',

  title: 'GingerWallet Documentation',
  description: 'Documentation for GingerWallet',
  base: '/GingerDoc/',

  head: [['link', { rel: 'icon', href: 'images/favicon.ico' }]],

  theme: defaultTheme({
    logo: 'images/logo.svg',
    logoDark: 'images/logo_dark.svg',
    contributors: false,
    lastUpdated: false,
    colorMode: 'light',
    colorModeSwitch: true,

    navbar: [
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Why Ginger?', link: '/why-ginger/' },
      { text: 'Using Ginger', link: '/using-ginger/' },
      //{ text: 'Building Ginger', link: '/building-ginger/' },
    ],

    sidebar: {
      '/getting-started/': [
        {
          children: [
            '/getting-started/README.md',
          ],
        },
      ],
      '/why-ginger/': [
        {
          children: [
            '/why-ginger/README.md',
            '/why-ginger/difference.md',
          ],
        },
      ],
      '/using-ginger/': [
        {
          children: [
            '/using-ginger/README.md',
            {
              text: 'Annonset',
              children: [
                '/using-ginger/annonset.md',
              ],
            },
            {
              text: 'Fee',
              children: [
                '/using-ginger/fee.md',
              ],
            },
            {
              text: 'Privacy',
              children: [
                '/using-ginger/privacy.md',
              ],
            },
            {
              text: 'Tor',
              children: [
                '/using-ginger/tor.md',
              ],
            },
          ],
        },
      ],
      '/building-ginger/': [
        {
          children: [
            '/building-ginger/README.md',
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
    }),
  ],
  

  bundler: viteBundler({
    viteOptions: {
      server: {
        hmr: false, // Disable HMR
      },
    },
  }),
})