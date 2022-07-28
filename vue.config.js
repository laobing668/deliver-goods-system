const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Timestamp = new Date().getTime()
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  outputDir: 'dist', // 输出文件目录
  assetsDir: 'static', // 放置静态资源
  //反向代理的配置
  // devServer: {
  //     proxy: {
  //         '/api': {
  //             target: 'http://m.maoyan.com',//目标地址
  //             ws: true, //// 是否启用websockets
  //             changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //             pathRewrite: {'^/api': '/'}    //这里重写路径
  //         }

  //     }
  // },
  //px转rem的配置（postcss-plugin-px2rem插件）
  lintOnSave: true,
  css: {
    extract: process.env.NODE_ENV === "production",
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.(预加载)
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        // data: `@import "@/assets/css/variables.scss";`
      }
    }
  },

  configureWebpack: (config) => {
    // 代码压缩
    config.plugins.push(
      new UglifyJsPlugin({
        uglifyOptions: {
          //生产环境自动删除console
          compress: {
            drop_debugger: true,
            drop_console: true,
            pure_funcs: ['console.log']
          }
        },
        sourceMap: false,
        parallel: true
      })
    )
    return {
      output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
        filename: `static/js/[name]-${Timestamp}.js`, // 不加版本号
        chunkFilename: `static/js/[name]-${Timestamp}.js`
      }
    }
  },

  chainWebpack: (config) => {
    // ============压缩图片 start============
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end()
    // ============压缩图片 end============
  },
}