import markdownPlugin from 'vitepress-demo-editor/markdownPlugin'
module.exports = {
  title: 'WeiFengwa',
  description: 'Vue3 组件库',
  themeConfig: {
    lastUpdated: true,
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://gitee.com/login',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present WeiFeng'
    },
    nav: [
      { text: '指南', link: '/guide/install', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/install' },
            { text: '快速开始', link: '/guide/quickStart' }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [
            { text: '图标', link: '/component/icon' },
            { text: '按钮', link: '/component/button' }
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(markdownPlugin)
    }
  },
  search: {
    provider: 'local'
  }
}
