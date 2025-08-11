import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  base: '/vitepress-test/',
  vite: {
    server: {
      allowedHosts: true,
    },
  },

  title: 'VitePress Test',
  description: 'VitePress Best Press',
  head: [
    ['meta', { name: 'robots', content: 'noindex,nofollow' }],
    ['meta', { name: 'darkreader-lock' }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
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

    socialLinks: [{ icon: 'github', link: 'https://github.com/smashedr' }],

    editLink: {
      pattern: 'https://github.com/smashedr/vitepress-test/blob/master/src/:path',
      text: 'Edit on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
  },
})
