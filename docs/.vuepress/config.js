module.exports = {
  title: '个人杂记',
  description: 'Accept what was and what is, and you\'ll more positive energy to pursue what will be.',
  plugins: {
    '@vuepress/search': {
      search: true, //默认false
      searchMaxSuggestions: 10 // 默认是5
    }
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '生活', link: '/life/' },
      {
        text: '学习',
        items: [
          { text: '前端', link: '/html_css/1' },
          { text: '文学', link: '/study/math/math01' },
        ]
      }
    ],
    sidebar: {
      '/html_css/': [
        {
          title: '测试',
          collapsable: false,
          children: [
            { title: '测试01', path: '/html_css/1' },
            { title: '测试02', path: '/html_css/2' }
          ]
        }
      ],
    },
    sidebarDepth: 2,
  }
}