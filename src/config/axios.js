/*
 * axios定义与配置
 */
import axios from "axios";
import ElementUI from "element-ui";
/*
* axios支持跨域cookie
* axios.defaults.withCredentials = true;
*/
// 创建单独的axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api的base_url
  timeout: 10000, // 请求超时(10s)
  withCredentials: true
});
// axios添加一个请求拦截器
service.interceptors.request.use(
  // 这里需要根据项目目录结构来配置
  (config) => {
    // 设置基础请求路径
    if (config.mode) {
      config.baseURL = process.env[config.mode];
    }
    // 给请求接口后续带上当前的请求时间截
    let r = "_r=" + new Date().getTime();
    if (config.url.indexOf("?") > 0) {
      r = "&" + r;
    } else {
      r = "?" + r;
    }
    config.url = config.url + r;
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// axios添加一个响应拦截器
service.interceptors.response.use(
  (response) => {
    // 这里需要根据项目目录结构来配置
    if (response) {
      let _data = response;
      if (_data.code === "0000000") {
        return _data;
      } else {
        return _data.code;
      }
    } else {
      return null;
    }
  },
  (error) => {
    let errorMsg = '数据请求失败';
    // 提示
    ElementUI.Message({
      message: errorMsg,
      dangerouslyUseHTMLString: true,
      type: "error"
    });
    return Promise.reject(error);
  }
);
export default service;
