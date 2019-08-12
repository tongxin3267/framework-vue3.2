# framework-vue3.2 配置项目说明
本项目是vue-cli3进行配置改善的多页面应用，可用于单应用但是多登陆入口、多页面模块的应用开发~~~~**vue多页面应用开发**!
## public文件夹
这个文件夹主要用于存放静态文件以及引入的插件文件
static 静态文件夹
jquery.min.js引入JQ (针对一些插件需要引入JQ作为前置内容，现在配置完毕)
browse.html 浏览器升级页面，针对低版本浏览器进行提示升级
favicon.ico 页面标题小图标
## src文件夹
###api文件夹：主要用于本项目所有接口内容的编写与管理 
     
###assets文件夹：本文件夹主要用于该项目的一些常用静态文件
如：css全局样式、css重置样式、font(字体图标)、图片等

###components：本文件夹主要是用于存放一些公共的、跨模块的组件
如：404页面、APP主页面、head页面、footer页面等
根据项目的需要进行合理的划分。如：弹出框组件、搜索组件等   

###config文件夹：配置文件夹
如：axios配置文件
    include插件引入配置文件

###mixins文件夹：混入文件放置点
建议：可根据项目需要、按照功能名称进行混入编制

###router文件夹：路由管理文件夹
router.js 主要路由页面
router.interceptor.js 路由拦截配置页面

###store文件夹：vuex状态管理文件夹
根据多页的内容划分为不同的模块，一个模块一个状态管理，index为主要的公共状态管理

###utils文件夹：各种功能内容放置的文件夹
filter.js  全局过滤器
format.js  格式转换文件：用于将后台返回非文字内容转换成对应前端需要文字内容（统一集中起来方便管理使用）
utils.js  全局工具方法 如：cookie 使用、和日期的格式转换    
validator.js  自定义正则验证js    

###views文件夹：主应用文件夹
每个模块根据自己的内容划分为多个子模块
建议命名按照模块名称+功能名称的形式来

###.browserslistrc:   浏览器版本配置文件  
###.env   通用配置文件：在此处配置的内容将同时在开发和生产环境生效  
###.env.development   开发配置文件  
###.env.production   生产配置文件  
###.eslintrc.js   eslint配置文件  
###babel.config.js   babel配置文件  
###postcss.config.js    postcss配置文件
###package.json：  包管理与引入配置，参考网上
###vue.config.js   vue核心项目配置文件，参考vue-cli3官网


