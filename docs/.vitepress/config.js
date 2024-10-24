import { mdPlugin } from './plugins'
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
      { text: '组件', link: '/component/icon', activeMatch: '/component/' },
      { text: '更新日志', link: '/component/icon', activeMatch: '/component/' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '安装', link: '/guide/install' },
          { text: '快速开始', link: '/guide/quickStart' }
        ]
      },
      {
        text: '组件',
        items: [
          { text: '图标', link: '/component/icon' },
          { text: '按钮', link: '/component/button' },
          { text: '间距', link: '/component/space' },
          { text: '滚动条', link: '/component/scroll' },
          { text: '弹窗', link: '/component/dialog' },
          { text: '消息', link: '/component/message' },
          { text: '瀑布流', link: '/component/waterfall' },
        ]
      },
      {
        text: '表单',
        items: [
          { text: '输入框', link: '/component/input' },
          { text: '开关', link: '/component/switch' },
          { text: '单选框', link: '/component/radio' },
          { text: '多选框', link: '/component/checkbox' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    lineNumbers: true,
    config: (md) => mdPlugin(md)
  },
  search: {
    provider: 'local'
  }
}
