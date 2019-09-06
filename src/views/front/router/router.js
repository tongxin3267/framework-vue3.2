import Vue from "../../../../node_modules/vue";
import Router from "../../../../node_modules/vue-router";
/* 路由不需要异步加载区域 */
import Home from "src/views/front/Home";
import NotFound from "src/components/404.vue";
import NoJurisdiction from 'src/components/401.vue';
/* 路由异步加载区域 */
// 账号模块
const account = ()=>import('src/views/front/account/account');
const loginComponent = ()=>import('src/views/front/account/login');

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 路由进入重定向
    {
      path: "/",
      redirect: '/account'
    },
    // 账号模块
    {
      path: '/account',
      name: 'account',
      component: account,
      redirect: '/account/login',
      children:[
        {
          path: '/account/login',
          name: 'login',
          component: loginComponent
        }
      ]
    },
    // 主路由
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        /*子模块路由*/
      ]
    },
    // 404
    {
      path: "*",
      name: "404",
      component: NotFound
    },
    // 401 无权限访问
    {
      path: "/401",
      name: "401",
      meta: {
        requireAuth: false
      },
      component: NoJurisdiction
    }
  ]
});
