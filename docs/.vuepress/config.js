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
          { text: '前端', link: '/study/english/english01' },
          { text: '文学', link: '/study/math/math01' },
        ]
      }
    ],
  }
}