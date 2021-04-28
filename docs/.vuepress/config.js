module.exports = {
  head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'f.ico' }
        ]
    ],
  title: '个人杂记',
  description: 'Accept what was and what is, and you\'ll more positive energy to pursue what will be.',
  plugins: {
    '@vuepress/search': {
      search: true, //默认false
      searchMaxSuggestions: 10 // 默认是5
    },
    '@vuepress/back-to-top': true,
    '@vuepress/last-updated': true
    // {
    //   transformer: (timestamp, lang) => {
    //     // 不要忘了安装 moment
    //     const moment = require('moment')
    //     moment.locale(lang)
    //     return moment(timestamp).fromNow()
    //   }
    // }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '生活', link: '/life/RM2100' },
      {
        text: '学习',
        items: [
          { text: '前端', link: '/study/html_css_js/html_css' },
          { text: '文学', link: '/study/literary/1' },
          { text: '环境问题', link: '/study/questions/mysql_pass' },
        ]
      }
    ],
    sidebar: {
      '/study/html_css_js/': [
        {
          title: '前端',
          collapsable: false,
          children: [
            { title: '前端小技巧', path: '/study/html_css_js/html_css' },
            { title: 'Vue', path: '/study/html_css_js/2' }
          ]
        }
      ],
      '/life/':[
        {
          title:'生活',
          collapsable: false,
          children: [
            { title: '红米2100路由器刷机', path: '/life/RM2100' },
          ]
        }
     

      ]
    },
    sidebarDepth: 2,
  }
}