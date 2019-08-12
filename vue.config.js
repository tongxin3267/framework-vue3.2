/**
 * Created on Tang 2018/2/14.
 */
// vue.config.js
const path = require("path");
const resolve = dir => path.join(__dirname, dir); // 路径
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  // 部署应用包时的基本 URL  Default: '/'
  publicPath: "./",
  // (build)放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录  Default: ''
  assetsDir: "assets",
  // 默认在生成的静态资源文件名中包含hash以控制缓存，如果你无法使用 Vue CLI 生成的 index HTML时候可以设为false
  filenameHashing: true,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,
    // 是否开启 CSS source map？
    sourceMap: false,
    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },
  // webpack-dev-server 的选项配置
  devServer: {
    host: "0.0.0.0",
    port: 9091,
    hot: true, // 开启热更新
    hotOnly: false,
    overlay: true, // 开启报错提示显示在浏览器遮罩层
    https: false // 是否开启https模式
    /* 请求代理服务器
    proxy:{}
    */
  },
  // 简单配置,这个配置内容将会在最后的时候使用webpack-merge合并到最终配置中 (配置插件plugins)
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      const plugins = [];
      // 为生产环境修改配置...
      plugins.push(
        // 移除console.log、debugger相关内容
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log"] //移除console
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
      config.plugins = [...config.plugins, ...plugins];
    } else {
      // 为开发环境修改配置...
    }
  },
  // 配置相关loader，支持修改，添加和替换相关的loader
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias.set("src", resolve("src"));
  },
  // 多页面
  pages: {
    index: {
      // page 的入口
      entry: 'src/views/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '门户',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    background:{
      // page 的入口
      entry: 'src/views/background/main.js',
      // 模板来源
      template: 'public/background.html',
      // 在 dist/index.html 的输出
      filename: 'background.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '后台',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'background']
    }
  }
};
