import { defineConfig } from 'vitepress'

const settings = {
  author: 'Shane',
  title: 'VitePress Test',
  name: 'VitePress Test Site',
  description: 'VitePress Best Press.',
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  base: '/vitepress-test/', // NOTE: base is also required for meta paths
  vite: {
    server: {
      allowedHosts: true,
    },
  },

  title: settings.title,
  description: settings.description,
  head: [
    ['link', { rel: 'icon', href: '/vitepress-test/favicon.ico', sizes: 'any' }],
    ['meta', { name: 'darkreader-lock' }],

    ['meta', { name: 'theme-color', content: '#344398' }],
    ['meta', { name: 'author', content: settings.author }],
    ['meta', { name: 'description', content: settings.description }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:author', content: settings.author }],
    ['meta', { property: 'og:site_name', content: settings.name }],
    ['meta', { property: 'og:title', content: settings.title }],
    ['meta', { property: 'og:description', content: settings.description }],
    ['meta', { property: 'og:image', content: '/vitepress-test/images/logo-lg.png' }],
    ['meta', { property: 'og:image:alt', content: settings.title }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: settings.name }],
    ['meta', { property: 'twitter:title', content: settings.title }],
    ['meta', { property: 'twitter:description', content: settings.description }],
    ['meta', { property: 'twitter:image', content: '/vitepress-test/images/logo-lg.png' }],
    ['meta', { property: 'twitter:image:alt', content: settings.title }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: settings.title,
    logo: '/images/logo-sm.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Links',
        items: [
          { text: 'Zipline Android GitHub', link: 'https://github.com/cssnr/zipline-android' },
          { text: 'Documentation GitHub', link: 'https://github.com/cssnr/zipline-android-docs' },
          { text: 'Diced Zipline Server', link: 'https://github.com/diced/zipline' },
          { text: 'Developer Site', link: 'https://cssnr.github.io/' },
          { text: 'Contribute', link: 'https://ko-fi.com/cssnr' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cssnr/zipline-android' },
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
      pattern: 'https://github.com/smashedr/vitepress-test/blob/master/src/:path',
      text: 'View on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },

    search: {
      // provider: 'local',
      provider: 'algolia',
      options: {
        appId: 'CYR3HCDCK8',
        apiKey: '2ebbec61f58bdaa0f89787848930815c',
        indexName: 'smashedr_github_io_vitepress_test',
      },
    },
  },
})
