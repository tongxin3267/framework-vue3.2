/*
 * 通用引入文件，一般用于引入一些新的插件或者其他的vue插件内容
 */
import Vue from "vue";

// 项目公共css样式
import "src/assets/css/common.scss";

// import 全局filter
import "src/utils/filter.js";

// 引入 element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 兼容ES6的语法（适配一些不支持ES6语法的浏览器）
import "@babel/polyfill";


