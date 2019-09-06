import Vue from "vue";
import App from "../../App.vue";
// 引入路由
import router from "src/views/background/router/router";
// 引入路由守卫
import "src/views/background/router/router-interceptor";
// 引入vuex(共用)
import store from "src/store/store";
// include(共用)
import "src/config/include.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
