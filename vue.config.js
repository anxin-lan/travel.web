const path = require('path');
const resolve = (dir) => path.join(__dirname, dir); // 给public路径添加别名

module.exports = {
  publicPath: './', // base目录，等同于router.js的base字段
  assetsDir: "static", // 打包后静态资源目录，注意public文件下目录（别名）配置，index.html的icon路径
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    proxy: {
      "/api": {
        target: "http://localhost:8080", //目标主机
        ws: true, //代理的WebSockets
        changeOrigin: true, //需要虚拟主机站点
        pathRewrite: {
          "^/api": "/mock"
        }
      }
    },
    before: app => {
      // 执行前操作，可以在此添加mock数据。与proxy代理不可并用
      app.get('/api/test', function(req, res) {
        let data = require('./src/mock/test.json')
        res.json(data)
      })
    }
  },
  productionSourceMap: false, // 生产环境map文件
  chainWebpack: config => {
    // 添加别名（src默认为@，不用再次添加）
    config.resolve.alias
      .set('@pub', resolve('public')) // 设置public别名为@pub
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}