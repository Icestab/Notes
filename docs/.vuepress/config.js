module.exports = {
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      { rel: 'icon', href: '/image/f.ico' }
    ]
  ],
  title: '个人杂记',
  description: 'Accept what was and what is, and you\'ll more positive energy to pursue what will be.',
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   '/': {
  //     lang: 'zh-CN',
  //     title: '个人杂记',
  //     description: 'Accept what was and what is, and you\'ll more positive energy to pursue what will be.',
  //   }
  // },
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
    //     moment.locale('zh-cn')
    //     return moment(timestamp).format('lll')
    //   }
    // }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'Icestab/Notes',
    locales: {
      '/': {
        lastUpdated: '上次更新',
      }
    },
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '生活', link: '/life/RM2100' },
      {
        text: '学习',
        items: [
          { text: '前端', link: '/study/html_css_js/html_css' },
          { text: '文学', link: '/study/literary/extract' },
          { text: '环境问题', link: '/study/questions/mysql_pass' },
        ]
      },
      { text: '岩夹', link: 'http://flysch.cn' }
    ],
    sidebar: {
      '/study/html_css_js/': [
        {
          title: '前端',
          collapsable: false,
          children: [
            { title: '前端小技巧', path: '/study/html_css_js/html_css' },
            { title: 'Vue日常笔记', path: '/study/html_css_js/vue1' }
          ]
        }
      ],
      '/study/literary/': [
        {
          title: '文学',
          collapsable: false,
          children: [
            { title: '时间语录', path: '/study/literary/extract' },
          ]
        }
      ],
      '/study/questions/': [
        {
          title: '环境问题',
          collapsable: false,
          children: [
            { title: 'Centos7重置Mysql8 root 密码', path: '/study/questions/mysql_pass' },
            { title: 'Linux命令', path: '/study/questions/linux' },
          ]
        }
      ],
      '/life/': [
        {
          title: '生活',
          collapsable: false,
          children: [
            { title: '红米2100路由器刷机', path: '/life/RM2100' },
            { title: '科学上网', path: '/life/ss/vpn' }
          ]
        }


      ]
    },
    sidebarDepth: 2,
  }
}