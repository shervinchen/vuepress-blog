module.exports = {
  "title": "Csdoker's Blog",
  "description": "欢迎来到我的个人博客，我会在这里记录下关于学习和生活的点点滴滴",
  "dest": "public",
  "permalink": "/:year/:month/:day/:slug",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "https://csdoker.com",
        "icon": "reco-home"
      },
      {
        "text": "GitHub",
        "link": "https://github.com/csdoker",
        "icon": "reco-github"
      },
      {
        "text": "联系",
        "icon": "reco-friend",
        "items": [
          {
            "text": "QQ",
            "link": "http://wpa.qq.com/msgrd?v=3&uin=758371536&site=qq&menu=yes",
            "icon": "reco-qq"
          },
          {
            "text": "微信",
            "link": "https://i.loli.net/2020/04/30/x8ILiKaCQYcBJjF.jpg",
            "icon": "reco-wechat"
          },
          {
            "text": "邮箱",
            "link": "mailto:csd758371536@qq.com",
            "icon": "reco-mail"
          }
        ]
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      }
    ],
    "themePicker": false,
    "valineConfig": {
      "appId": "GHL0sbqU1jClssv8LjFY8Yzs-gzGzoHsz",
      "appKey": "q1FYV8Bjs8Lj30XvIvUznLVQ",
    },
    "type": "blog",
    "blogConfig": {
      // "category": {
      //   "location": 2,
      //   "text": "Category"
      // },
      // "tag": {
      //   "location": 3,
      //   "text": "Tag"
      // }
    },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    "logo": "/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "csdoker",
    "authorAvatar": "/avatar.jpg",
    "record": "蜀ICP备17025658号",
    "recordLink": "http://www.beian.miit.gov.cn/",
    "startYear": "2015"
  },
  "markdown": {
    "lineNumbers": true
  }
}