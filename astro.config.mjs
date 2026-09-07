// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://docs.gingerwallet.io',
  base: '/',

  integrations: [
    starlight({
      title: 'GingerWallet Documentation',
      description: 'Documentation for GingerWallet',
      lastUpdated: false,

      logo: {
        src: './src/assets/logo.svg',
        // The logo is a wordmark that reads on both themes, so it replaces the
        // site title (the VuePress theme hid `.vp-site-name` for the same reason).
        replacesTitle: true,
      },

      favicon: '/favicon.svg',

      head: [
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
          },
        },
      ],

      // Pagefind powers the search box. It is on by default; kept explicit so the
      // dependency is obvious.
      pagefind: true,

      customCss: ['./src/styles/custom.css'],

      // Adds the top-level section links to the header (the old VuePress navbar).
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
      },

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/GingerPrivacy/GingerWallet',
        },
      ],

      sidebar: [
        {
          label: 'Getting Started',
          items: [{ slug: 'getting-started' }],
        },
        {
          label: 'Why Ginger?',
          items: [{ slug: 'why-ginger' }, { slug: 'why-ginger/difference' }],
        },
        {
          label: 'Using Ginger',
          items: [
            { slug: 'using-ginger' },
            { slug: 'using-ginger/2fa' },
            { slug: 'using-ginger/coinjoin' },
            { slug: 'using-ginger/hardware-wallet' },
            { slug: 'using-ginger/annonset' },
            { slug: 'using-ginger/fee' },
            { slug: 'using-ginger/privacy' },
            { slug: 'using-ginger/tor' },
            { slug: 'using-ginger/passphrase' },
            { slug: 'using-ginger/address-reuse' },
            { slug: 'using-ginger/buy' },
            { slug: 'using-ginger/sell' },
          ],
        },
        // {
        //   label: 'Building Ginger',
        //   items: [{ slug: 'building-ginger' }],
        // },
      ],
    }),
  ],
})
