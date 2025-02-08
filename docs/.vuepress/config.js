import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'en-US',

  title: 'GingerWallet Documentation',
  description: 'Documentation for GingerWallet',
  base: '/',

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
              children: [
                '/using-ginger/2fa/',
                '/using-ginger/coinjoin/',
                '/using-ginger/hardware-wallet/',
                '/using-ginger/annonset.md',
                '/using-ginger/fee.md',
                '/using-ginger/privacy.md',
                '/using-ginger/tor.md',
                '/using-ginger/passphrase.md',
                '/using-ginger/address-reuse.md',
                '/using-ginger/buy-sell.md',
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