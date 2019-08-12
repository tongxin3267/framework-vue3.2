/*
 * 全局过滤器
 * 这里是一个全局过滤器的文件，可以将相关的过滤器写在这个里面以便于全局使用
 * 里面目前已经写好几个常用过滤器
 * 注意：
 *    所有的全局过滤器建议写好说明并且有例子
 *    这里可以直接通过 value| filter 来调用
 */
import Vue from "vue";
import { formatDate } from "./util.js";
/*
 * 时间戳处理
 * @example    value | fmTimestamp("YYYY-MM-dd") => YYYY-MM-dd
 */
Vue.filter("fmTimestamp", function(timestamp, fm) {
  return formatDate(timestamp, fm);
});
