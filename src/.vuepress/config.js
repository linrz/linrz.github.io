module.exports = {
  title: 'linrz',
  theme: 'cute',
  dest: './dist',
  themeConfig: {
    home: 'linrz',
    nav: [
      {
        text: 'Blog',
        link: '/'
      },
      {
        text: 'About',
        link: '/about.html'
      }
    ],
    sharePlatforms: ['weibo', 'twitter', 'wechat', 'download']
  },
  plugins: [
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "[object Linrz] 发布了新内容啦 🤓",
          buttonText: "刷新"
        }
      }
    ]
  ],
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
    }
  }
}