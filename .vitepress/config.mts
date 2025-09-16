import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

const settings = {
  base: '/vitepress-test', // no trailing slash
  title: 'VitePress Test',
  name: 'VitePress Test Site',
  description: {
    short: 'VitePress Best Press.',
    long: 'VitePress Best Press.',
  },
  image: '/images/logo.png',
  color: '#0064FC',
}

// https://vitepress.dev/reference/site-config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  srcDir: './docs',
  base: `${settings.base}/`, // NOTE: base is also required for meta paths
  vite: {
    server: {
      allowedHosts: true,
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          git: 'vscode-icons:file-type-git',
        },
      }),
    ],
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
    toc: { level: [2] },
  },

  title: settings.title,
  description: settings.description.short,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: `${settings.base}/favicon.ico` }],
    // ['link', { rel: 'icon', type: 'image/svg', sizes: 'any', href: '/images/logo.svg' }],
    [
      'link',
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: settings.base + settings.image },
    ],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${settings.base}/images/logo32.png` }],
    // ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/logo16.png' }],

    ['meta', { name: 'darkreader-lock' }],

    ['meta', { name: 'theme-color', content: '#344398' }],
    ['meta', { name: 'description', content: settings.description.long }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: settings.name }],
    ['meta', { property: 'og:title', content: settings.title }],
    ['meta', { property: 'og:description', content: settings.description.short }],
    ['meta', { property: 'og:image', content: settings.image }],
    ['meta', { property: 'og:image:alt', content: settings.title }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: settings.name }],
    ['meta', { property: 'twitter:title', content: settings.title }],
    ['meta', { property: 'twitter:description', content: settings.description.short }],
    ['meta', { property: 'twitter:image', content: settings.image }],
    ['meta', { property: 'twitter:image:alt', content: settings.title }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: settings.title,
    logo: '/images/logo32.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Alpha', link: '/alpha' },
      { text: 'Bravo', link: '/bravo' },
      // { text: 'Charlie', link: '/charlie' },
      {
        text: 'Old',
        items: [
          { text: 'Contributors', link: 'old/contributors' },
          { text: 'Swiper', link: 'old/swiper' },
          { text: 'VP Card', link: 'old/vpcard' },
        ],
      },
      {
        text: 'Links',
        items: [
          { text: 'Django Files', link: 'https://django-files.github.io/' },
          { text: 'VitePress Swiper', link: 'https://vitepress-swiper.cssnr.com/' },
          { text: 'Docker Deploy', link: 'https://docker-deploy.cssnr.com/' },
          { text: 'Portainer Deploy', link: 'https://portainer-deploy.cssnr.com/' },
          { text: 'Zipline Android', link: 'https://zipline-android.cssnr.com/' },
          { text: 'Zipline Extension', link: 'https://zipline-extension.cssnr.com/' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Alpha', link: '/alpha' },
          { text: 'Bravo', link: '/bravo' },
          { text: 'Charlie', link: '/charlie' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'vitepress', link: 'https://github.com/smashedr/vitepress-test' },
      { icon: 'github', link: 'https://github.com/cssnr' },
      { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
      { icon: 'kofi', link: 'https://ko-fi.com/cssnr' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        },
        link: 'https://cssnr.github.io/',
      },
    ],

    editLink: {
      pattern: 'https://github.com/smashedr/vitepress-test/blob/master/docs/:path',
      text: 'View or Edit on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },

    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: 'CYR3HCDCK8',
      //   apiKey: '2ebbec61f58bdaa0f89787848930815c',
      //   indexName: 'smashedr_github_io_vitepress_test',
      // },
    },

    // footer: {
    //   message: '<a href="/privacy">Privacy Policy</a>',
    //   copyright: '<a href="/privacy">Privacy Policy</a>',
    // },

    externalLinkIcon: true,
    outline: 'deep',
  },
})
